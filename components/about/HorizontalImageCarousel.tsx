"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ABOUT_PORTRAITS } from "@/data/aboutData";

export function HorizontalImageCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Combine authentic portraits for a rich flowing horizontal strip
  const images = [
    ...ABOUT_PORTRAITS,
    {
      id: "hero-shot",
      image: "/images/hero-black-tshirt.png",
      caption: "Bengaluru studio / Casual black t-shirt",
      location: "Bengaluru",
      year: "2025",
    },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      role="region"
      aria-label="Personal moments carousel"
    >
      {/* Edge Vignette Fades for editorial infinity look */}
      <div className="absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-[#f9f9f7] dark:from-[#090a0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-[#f9f9f7] dark:from-[#090a0d] to-transparent z-10 pointer-events-none" />

      {/* Flowing Horizontal Ribbon */}
      <motion.div
        animate={{
          x: isPaused || shouldReduceMotion ? undefined : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 38,
        }}
        className="flex gap-3 sm:gap-6 w-max cursor-grab active:cursor-grabbing"
      >
        {duplicatedImages.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="relative w-[210px] sm:w-[300px] aspect-[4/5] rounded-xl overflow-hidden bg-neutral-950 shadow-md shrink-0 border border-neutral-300/80 dark:border-neutral-800"
          >
            <Image
              src={item.image}
              alt="Personal moment"
              fill
              sizes="(max-width: 640px) 210px, 300px"
              className="object-cover pointer-events-none"
              priority={idx < 4}
            />

            {/* Subtle bottom gradient for atmospheric warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
