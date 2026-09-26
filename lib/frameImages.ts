import fs from "node:fs";
import path from "node:path";
import type { FramePhoto } from "./types";

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Reads intrinsic image dimensions directly from binary file headers.
 * Supports PNG, WebP, GIF, and JPEG (including EXIF orientation auto-rotation).
 * Reads only the first 64KB into memory for high performance.
 */
export function readImageDimensions(filePath: string): ImageDimensions | null {
  try {
    const fd = fs.openSync(filePath, "r");
    const buffer = Buffer.alloc(65536);
    const bytesRead = fs.readSync(fd, buffer, 0, 65536, 0);
    fs.closeSync(fd);

    if (bytesRead < 16) return null;

    // 1. PNG Signature: 89 50 4E 47 0D 0A 1A 0A
    if (
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47
    ) {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      if (width > 0 && height > 0) return { width, height };
    }

    // 2. GIF Signature: GIF87a or GIF89a
    const gifSig = buffer.toString("ascii", 0, 6);
    if (gifSig === "GIF87a" || gifSig === "GIF89a") {
      const width = buffer.readUInt16LE(6);
      const height = buffer.readUInt16LE(8);
      if (width > 0 && height > 0) return { width, height };
    }

    // 3. WebP Signature: RIFF....WEBP
    if (
      buffer.toString("ascii", 0, 4) === "RIFF" &&
      buffer.toString("ascii", 8, 12) === "WEBP"
    ) {
      const chunkType = buffer.toString("ascii", 12, 16);
      if (chunkType === "VP8 ") {
        // Lossy VP8
        const width = buffer.readUInt16LE(26) & 0x3fff;
        const height = buffer.readUInt16LE(28) & 0x3fff;
        if (width > 0 && height > 0) return { width, height };
      } else if (chunkType === "VP8L") {
        // Lossless VP8L
        const b1 = buffer[21];
        const b2 = buffer[22];
        const b3 = buffer[23];
        const b4 = buffer[24];
        const width = 1 + (((b2 & 0x3f) << 8) | b1);
        const height =
          1 + (((b4 & 0x0f) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6));
        if (width > 0 && height > 0) return { width, height };
      } else if (chunkType === "VP8X") {
        // Extended VP8X
        const width = 1 + buffer.readUIntLE(24, 3);
        const height = 1 + buffer.readUIntLE(27, 3);
        if (width > 0 && height > 0) return { width, height };
      }
    }

    // 4. JPEG: 0xFFD8
    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      let offset = 2;
      let width = 0;
      let height = 0;
      let orientation = 1;

      while (offset < bytesRead - 1) {
        if (buffer[offset] !== 0xff) {
          offset++;
          continue;
        }

        const marker = buffer[offset + 1];
        if (marker === 0xd9 || marker === 0xda) break; // EOI or SOS

        // Check EXIF APP1 for orientation flag
        if (marker === 0xe1) {
          const str = buffer.toString("ascii", offset + 4, offset + 10);
          if (str.startsWith("Exif\0\0")) {
            const tiffOffset = offset + 10;
            const isLE =
              buffer.toString("ascii", tiffOffset, tiffOffset + 2) === "II";
            const read16 = (o: number) =>
              isLE ? buffer.readUInt16LE(o) : buffer.readUInt16BE(o);
            const read32 = (o: number) =>
              isLE ? buffer.readUInt32LE(o) : buffer.readUInt32BE(o);

            try {
              const firstIFD = read32(tiffOffset + 4);
              const ifdStart = tiffOffset + firstIFD;
              if (ifdStart < bytesRead - 2) {
                const numEntries = read16(ifdStart);
                for (let i = 0; i < numEntries; i++) {
                  const entryOffset = ifdStart + 2 + i * 12;
                  if (entryOffset + 10 >= bytesRead) break;
                  const tag = read16(entryOffset);
                  if (tag === 0x0112) {
                    orientation = read16(entryOffset + 8);
                    break;
                  }
                }
              }
            } catch {
              // Ignore Exif parse failure and continue
            }
          }
        }

        // Check Start Of Frame markers (SOF0 - SOF15, excluding DHT/JPG/DAC)
        if (
          (marker >= 0xc0 && marker <= 0xc3) ||
          (marker >= 0xc5 && marker <= 0xc7) ||
          (marker >= 0xc9 && marker <= 0xcb) ||
          (marker >= 0xcd && marker <= 0xcf)
        ) {
          if (offset + 9 < bytesRead) {
            height = buffer.readUInt16BE(offset + 5);
            width = buffer.readUInt16BE(offset + 7);
          }
        }

        if (offset + 4 > bytesRead) break;
        const segmentLen = buffer.readUInt16BE(offset + 2);
        offset += 2 + segmentLen;
      }

      if (width > 0 && height > 0) {
        // EXIF orientations 5-8 indicate 90 or 270 degree rotation, swapping dimensions
        if (orientation >= 5 && orientation <= 8) {
          return { width: height, height: width };
        }
        return { width, height };
      }
    }
  } catch (err) {
    console.warn(`Failed reading dimensions for ${filePath}:`, err);
  }

  return null;
}

/**
 * Generate human-readable alt description from filename for accessibility.
 */
function generateAltText(filename: string): string {
  const nameWithoutExt = path.parse(filename).name;
  const words = nameWithoutExt
    .replace(/[-_]+/g, " ")
    .replace(/\b\d+\b/g, "")
    .trim();

  if (!words) return "Personal photograph";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * Classifies orientation from aspect ratio.
 */
function classifyOrientation(
  aspectRatio: number
): "landscape" | "portrait" | "square" | "wide" {
  if (aspectRatio > 1.75) return "wide";
  if (aspectRatio > 1.05) return "landscape";
  if (aspectRatio >= 0.95) return "square";
  return "portrait";
}

/**
 * Server-side discovery: reads public/images/frame/ as single source of truth.
 * Returns all valid photographs with intrinsic dimensions and metadata.
 */
export function getFramePhotos(): FramePhoto[] {
  const frameDir = path.join(process.cwd(), "public", "images", "frame");

  if (!fs.existsSync(frameDir)) {
    return [];
  }

  const entries = fs.readdirSync(frameDir);
  const photos: FramePhoto[] = [];

  for (const filename of entries) {
    // Ignore hidden files and system artifacts
    if (filename.startsWith(".")) continue;

    const ext = path.extname(filename).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.has(ext)) continue;

    const filePath = path.join(frameDir, filename);

    try {
      const stats = fs.statSync(filePath);
      if (!stats.isFile()) continue;

      const dims = readImageDimensions(filePath) || {
        width: 1600,
        height: 1200,
      };
      const aspectRatio = dims.width / dims.height;
      const orientation = classifyOrientation(aspectRatio);
      const alt = generateAltText(filename);

      photos.push({
        src: `/images/frame/${filename}`,
        image: `/images/frame/${filename}`,
        filename,
        id: filename,
        width: dims.width,
        height: dims.height,
        aspectRatio,
        orientation,
        aspect: orientation === "wide" ? "wide" : orientation === "portrait" ? "portrait" : "landscape",
        alt,
      });
    } catch (err) {
      console.error(`Error processing frame photo ${filename}:`, err);
    }
  }

  // Natural alphanumeric sort by filename
  photos.sort((a, b) =>
    a.filename.localeCompare(b.filename, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );

  return photos;
}
