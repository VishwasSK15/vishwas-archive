"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sliders, Eye } from "lucide-react";

interface ColorGradeSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ColorGradeSlider({
  beforeImage,
  afterImage,
  beforeLabel = "RAW / NATURAL CAPTURE",
  afterLabel = "CINEMATIC COLOR GRADE",
}: ColorGradeSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full space-y-4 select-none">
      {/* Interactive Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-xl cursor-ew-resize bg-neutral-950"
      >
        {/* Graded Image (Full Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Raw Image (Clipped Layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Drag Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center text-white shadow-xl">
            <Sliders className="w-4 h-4" />
          </div>
        </div>

        {/* Labels Overlay */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1.5 rounded bg-black/75 backdrop-blur-md text-white text-[11px] font-mono-meta border border-white/10 font-bold">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3 py-1.5 rounded bg-red-600/85 backdrop-blur-md text-white text-[11px] font-mono-meta border border-white/20 font-bold">
            {afterLabel}
          </span>
        </div>

        {/* Instruction Badge */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-neutral-200 text-[10px] font-mono-meta border border-white/10 flex items-center space-x-1.5 font-medium">
            <Eye className="w-3 h-3 text-red-400" />
            <span>DRAG SLIDER HORIZONTALLY TO COMPARE CHROMATIC RESPONSE</span>
          </span>
        </div>
      </div>

      {/* Accessible Range Input */}
      <div className="flex items-center space-x-4 pt-1">
        <span className="text-xs font-mono-meta text-neutral-700 dark:text-neutral-400 font-bold">0% RAW</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          aria-label="Color grade before/after comparison slider"
          className="flex-1 accent-red-600 h-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg cursor-pointer"
        />
        <span className="text-xs font-mono-meta text-red-700 dark:text-red-400 font-bold">100% GRADED</span>
      </div>
    </div>
  );
}
