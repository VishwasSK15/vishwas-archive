"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ABOUT_PORTRAITS } from "@/data/aboutData";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Pause, Play } from "lucide-react";

export function PersonalSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = ABOUT_PORTRAITS.length;

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentItem = ABOUT_PORTRAITS[currentIndex];

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white shadow-xl max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Personal Photo Slideshow"
    >
      {/* Slideshow Image Stage — NO click-to-lightbox */}
      <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden bg-neutral-950 flex items-center justify-center select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentItem.image}
              alt={currentItem.caption}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              priority={currentIndex === 0}
              className="object-cover object-center pointer-events-none"
            />
            {/* Subtle gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hover Pause Status Indicator */}
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 text-[11px] font-mono-meta px-2.5 py-1 rounded bg-neutral-900/80 border border-neutral-700/80 backdrop-blur-xs text-neutral-300">
          {isPaused ? (
            <>
              <Pause className="w-3 h-3 text-amber-400" />
              <span>PAUSED ON HOVER</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-blue-400 fill-blue-400" />
              <span>AUTO-TRANSITION</span>
            </>
          )}
        </div>

        {/* Side Arrow Navigation */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-900/70 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 backdrop-blur-xs transition-colors z-20"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-900/70 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 backdrop-blur-xs transition-colors z-20"
          aria-label="Next photo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Caption & Location Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-20 space-y-2">
          <div className="flex items-center space-x-4 text-xs font-mono-meta text-neutral-400">
            <span className="flex items-center space-x-1.5 text-blue-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentItem.location}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5 text-neutral-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentItem.year}</span>
            </span>
          </div>

          <p className="font-display text-base sm:text-xl font-bold text-white tracking-tight">
            {currentItem.caption}
          </p>
        </div>
      </div>

      {/* Bottom Control Bar with Dot Indicators */}
      <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between">
        <div className="text-xs font-mono-meta text-neutral-400">
          PHOTO {currentIndex + 1} OF {total}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center space-x-2">
          {ABOUT_PORTRAITS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-[11px] font-mono-meta text-neutral-500 hidden sm:block">
          HOVER TO PAUSE
        </div>
      </div>
    </div>
  );
}
