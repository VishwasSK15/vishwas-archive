"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FramePhoto } from "@/lib/types";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  photos: FramePhoto[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
  }, [selectedIndex, photos.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex, photos.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  if (photos.length === 0) {
    return (
      <div className="py-24 text-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl p-8 bg-neutral-50/50 dark:bg-neutral-900/30">
        <p className="font-editorial text-xl text-neutral-600 dark:text-neutral-400 italic">
          The archive is currently quiet. Drop photographs into{" "}
          <code className="font-mono text-sm px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            public/images/frame/
          </code>{" "}
          to display them here.
        </p>
      </div>
    );
  }

  const currentPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <div className="space-y-12">
      {/* Adaptive Responsive Masonry Gallery — Native Natural Aspect Ratios with Zero Cropping */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8">
        {photos.map((photo, index) => {
          const imageSrc = photo.src || photo.image || "";
          const imageAlt = photo.alt || "Captured moment";
          const itemKey = photo.filename || photo.src || photo.id || String(index);

          return (
            <motion.div
              key={itemKey}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 22, scale: 0.985 }
              }
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="break-inside-avoid mb-6 lg:mb-8 group relative rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-neutral-900/40 dark:bg-neutral-900/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Natural Aspect Ratio Image Frame — 100% Native Proportions */}
              <div className="relative w-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  priority={index < 2}
                />

                {/* Subtle Hover Reveal Indicator for pointer devices */}
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="p-3 rounded-full bg-neutral-900/80 text-white border border-neutral-700/80 backdrop-blur-xs shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pure Lightbox Viewer — Clean Image Focus preserving Native Aspect Ratio, NO metadata or captions */}
      <AnimatePresence>
        {selectedIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 backdrop-blur-md p-4 sm:p-8"
            onClick={handleClose}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 right-4 sm:top-6 sm:right-8 flex items-center space-x-3 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
                aria-label="Close"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors z-20 cursor-pointer"
              aria-label="Previous"
              title="Previous (Left arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors z-20 cursor-pointer"
              aria-label="Next"
              title="Next (Right arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Fullscreen Photograph Image Container — Preserves Native Aspect Ratio */}
            <motion.div
              key={currentPhoto.filename || currentPhoto.src || currentPhoto.id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-6xl w-full max-h-[88vh] flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentPhoto.src || currentPhoto.image}
                alt={currentPhoto.alt || "Captured moment"}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg border border-neutral-800 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
