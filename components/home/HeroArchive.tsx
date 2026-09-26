"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, Compass } from "lucide-react";

export function HeroArchive() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-neutral-300 dark:border-neutral-800">
      {/* Top Metadata Line */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono-meta text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center space-x-3 font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
          <span>INDEX // 00 // PERSONAL LOG</span>
        </div>
        <div className="hidden sm:flex items-center space-x-6 font-medium">
          <span>BENGALURU, IN</span>
          <span>12.9716° N, 77.5946° E</span>
          <span className="text-neutral-400 dark:text-neutral-600">{"//"}</span>
          <span className="text-blue-700 dark:text-blue-400 font-bold">RRCE &middot; CLASS OF &apos;27</span>
        </div>
      </div>

      {/* Center Stage: Full VISHWAS Typography + Genuine Cutout Portrait */}
      <div className="relative max-w-7xl mx-auto w-full my-auto py-6 sm:py-10 flex flex-col items-center justify-center">
        {/* Full Editorial VISHWAS Wordmark with Subtle Depth & Interactive Hover/Tap Shift */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-auto select-none z-0 px-2 sm:px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered((prev) => !prev)}
        >
          <div className="scale-y-[2.2] xs:scale-y-[2.4] sm:scale-y-[2.8] md:scale-y-[3.2] lg:scale-y-[3.4] scale-x-[1.0] xs:scale-x-[1.04] sm:scale-x-[1.10] md:scale-x-[1.14] lg:scale-x-[1.18] xl:scale-x-[1.20] origin-center select-none">
            <motion.div
              animate={{
                scale: isHovered ? 1.015 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`font-display text-[9.5vw] xs:text-[10.5vw] sm:text-[10.8vw] md:text-[108px] lg:text-[124px] xl:text-[138px] font-bold tracking-normal xs:tracking-wider sm:tracking-widest md:tracking-[0.14em] lg:tracking-[0.18em] xl:tracking-[0.22em] leading-none uppercase transition-all duration-700 text-center whitespace-nowrap cursor-pointer md:cursor-default ${
                isHovered
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-blue-500/60 to-neutral-400 dark:from-neutral-700 dark:via-blue-400/60 dark:to-neutral-700 [-webkit-text-stroke:1.5px_rgba(56,157,228,0.55)] drop-shadow-[0_12px_32px_rgba(56,157,228,0.22)]"
                  : "text-neutral-200/90 dark:text-neutral-900/90 [-webkit-text-stroke:1px_rgba(0,0,0,0.16)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.12)] drop-shadow-[0_6px_20px_rgba(56,157,228,0.1)]"
              }`}
            >
              VISHWAS
            </motion.div>
          </div>
        </div>

        {/* Real Authentic Cutout Portrait (Black T-Shirt & Sunglasses) */}
        <div
          className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex justify-center items-end mt-4 sm:mt-6 pointer-events-none"
          onClick={() => setIsHovered((prev) => !prev)}
        >
          <div className="relative w-[220px] xs:w-[260px] sm:w-[320px] md:w-[380px] h-[350px] xs:h-[420px] sm:h-[500px] md:h-[560px]">
            <Image
              src="/images/hero-black-tshirt-cutout.png"
              alt="Vishwas S K — Portrait"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 380px"
              className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] pointer-events-auto cursor-pointer md:cursor-default"
            />
          </div>
        </div>

        {/* Framing Headline directly anchored under subject */}
        <div className="relative z-20 text-center -mt-6 sm:-mt-10 space-y-2 px-2">
          <div className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono-meta bg-blue-500/10 text-blue-800 dark:text-blue-400 border border-blue-600/30 dark:border-blue-500/30 backdrop-blur-sm font-semibold">
            ENGINEERING STUDENT // BENGALURU
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            VISHWAS S K
          </h1>
          <div className="flex items-center justify-center space-x-2 text-center">
            <p className="text-[11px] sm:text-sm text-neutral-700 dark:text-neutral-300 font-mono-meta tracking-wide sm:tracking-wider font-semibold max-w-lg leading-relaxed">
              BUILDER &middot; AMATEUR PHOTOGRAPHER &middot; MOVIE GEEK &middot; STILL FIGURING IT OUT
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Statement & Exploration Trigger */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-neutral-300 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div className="md:col-span-2 space-y-2">
          <p className="font-editorial text-base sm:text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-normal leading-relaxed max-w-2xl">
            I&apos;m an engineering student in my twenties living in Bengaluru, just intensely curious about how things work — from building software and experimenting with code, to walking around with a camera, geeking out over cinema craft, and figuring out editing and cars along the way.
          </p>
          <div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono-meta">
            <span>A PERSONAL DIGITAL WORLD.</span>
            <span className="font-script-elegant text-lg text-blue-700 dark:text-blue-400 hidden sm:inline">
              learning as I go
            </span>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row md:justify-end items-stretch xs:items-center gap-3 sm:gap-4 w-full">
          <Link
            href="/code"
            className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-mono-meta text-xs tracking-wider font-semibold transition-colors shadow-xs text-center"
          >
            <span>EXPLORE MY WORK (01 CODE)</span>
            <ArrowDownRight className="w-4 h-4" />
          </Link>
          <a
            href="#worlds-overview"
            className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 text-xs font-mono-meta text-neutral-800 dark:text-neutral-300 font-semibold bg-white dark:bg-transparent transition-colors shadow-xs text-center"
          >
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500" />
            <span>OVERVIEW</span>
          </a>
        </div>
      </div>
    </section>
  );
}
