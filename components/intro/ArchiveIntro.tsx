"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArchiveLogo } from "@/components/layout/ArchiveLogo";

interface ArchiveIntroProps {
  onComplete: () => void;
}

type IntroPhase = "identity" | "person" | "interests" | "context" | "archive" | "exit";

export function ArchiveIntro({ onComplete }: ArchiveIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>("identity");

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Sequence timing (total duration ~5.8s - 5.95s: calm, readable, and intentional)
    const t1 = setTimeout(() => setPhase("person"), 1200);
    const t2 = setTimeout(() => setPhase("interests"), 2350);
    const t3 = setTimeout(() => setPhase("context"), 3500);
    const t4 = setTimeout(() => setPhase("archive"), 4600);
    const t5 = setTimeout(() => setPhase("exit"), 5450);
    const t6 = setTimeout(() => onComplete(), 5950);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <motion.aside
      key="archive-intro-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-500 bg-[#f9f9f7] dark:bg-[#090a0d] text-neutral-900 dark:text-white flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden select-none pointer-events-auto transition-colors"
      role="dialog"
      aria-label="Archive Introduction Sequence"
      aria-modal="true"
    >
      {/* Top Telemetry / Identification */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-neutral-600 dark:text-neutral-400">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-2 sm:space-x-3"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse shrink-0" />
          <span className="tracking-wider">
            VISHWAS S K<span className="hidden xs:inline"> &middot; BENGALURU, INDIA</span>
          </span>
        </motion.div>

        <motion.button
          type="button"
          onClick={onComplete}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
          className="px-2.5 sm:px-3 py-1 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-[10px] sm:text-[11px] font-mono-meta text-neutral-800 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-100/90 dark:bg-neutral-900/70 backdrop-blur-sm transition-colors cursor-pointer shrink-0"
        >
          SKIP <span className="hidden sm:inline">SEQUENCE [ESC] </span>&rarr;
        </motion.button>
      </div>

      {/* Center Stage: Multi-Phase Thoughtful Storytelling */}
      <div className="my-auto max-w-4xl mx-auto w-full text-center min-h-[220px] flex items-center justify-center px-2">
        <AnimatePresence mode="wait">
          {/* PHASE 01 — IDENTIFICATION */}
          {phase === "identity" && (
            <motion.div
              key="phase-identity"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono-meta text-blue-800 dark:text-blue-400 bg-blue-500/10 border border-blue-600/25 dark:border-blue-500/30 font-semibold mb-2">
                PERSONAL LOG // 2026
              </div>
              <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white uppercase leading-tight sm:leading-none">
                ENGINEERING STUDENT
              </h1>
              <p className="font-mono-meta text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 tracking-wider font-medium pt-1">
                RRCE &middot; CLASS OF &apos;27 &middot; BENGALURU
              </p>
            </motion.div>
          )}

          {/* PHASE 02 — THE PERSON */}
          {phase === "person" && (
            <motion.div
              key="phase-person"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 sm:space-y-4"
            >
              <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white uppercase leading-tight sm:leading-none">
                JUST FIGURING IT OUT.
              </h2>
              <p className="font-editorial text-lg sm:text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 italic font-normal">
                Learning. Building. Trying things.
              </p>
            </motion.div>
          )}

          {/* PHASE 03 — THE THINGS HE ENJOYS */}
          {phase === "interests" && (
            <motion.div
              key="phase-interests"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex items-center justify-center space-x-2 sm:space-x-6 font-display text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white tracking-tight uppercase">
                <span className="text-blue-700 dark:text-blue-400">CODE.</span>
                <span className="text-neutral-400 dark:text-neutral-600">&middot;</span>
                <span>FRAME.</span>
                <span className="text-neutral-400 dark:text-neutral-600">&middot;</span>
                <span>SCREEN.</span>
              </div>
              <p className="font-editorial text-sm sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
                Things I build, capture and lose time watching.
              </p>
            </motion.div>
          )}

          {/* PHASE 04 — PERSONAL CONTEXT */}
          {phase === "context" && (
            <motion.div
              key="phase-context"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 max-w-2xl mx-auto px-2 sm:px-4"
            >
              <p className="font-editorial text-lg sm:text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 leading-snug font-normal">
                A little corner for the things I&apos;m learning, making and enjoying along the way.
              </p>
              <div className="font-script-elegant text-xl sm:text-3xl text-blue-700 dark:text-blue-400">
                learning as I go
              </div>
            </motion.div>
          )}

          {/* PHASE 05 — ARCHIVE TITLE RESOLUTION */}
          {(phase === "archive" || phase === "exit") && (
            <motion.div
              key="phase-archive"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex justify-center mb-2">
                <ArchiveLogo size="xl" priority />
              </div>
              <h1 className="font-display text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white uppercase leading-none">
                VISHWAS
              </h1>
              <div className="flex items-center justify-center space-x-3 text-sm sm:text-xl font-mono-meta tracking-widest text-neutral-800 dark:text-neutral-300">
                <span className="text-blue-600 dark:text-blue-400 font-bold">{"//"}</span>
                <span className="font-bold">THE ARCHIVE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Telemetry Anchor */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-mono-meta text-neutral-600 dark:text-neutral-400 pt-4 sm:pt-6 border-t border-neutral-300 dark:border-neutral-800/80 gap-1 sm:gap-0">
        <div>BENGALURU, KARNATAKA // 12.9716° N, 77.5946° E</div>
        <div className="font-medium text-neutral-800 dark:text-neutral-300 flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
          <span>A PERSONAL DIGITAL WORLD</span>
        </div>
      </div>
    </motion.aside>
  );
}
