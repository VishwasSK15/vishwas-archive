"use client";

import { TONY_STARK_FEATURE } from "@/data/screenData";
import { Cpu, Terminal, Wrench, Sparkles, Heart } from "lucide-react";

export function TonyStarkSpotlight() {
  return (
    <section className="relative rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12">
      {/* Cinematic Workshop Atmospheric Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/15 via-red-600/10 to-transparent blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
          <div className="flex items-center space-x-3 text-xs font-mono-meta text-cyan-400">
            <span className="px-2.5 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 font-bold uppercase tracking-wider">
              MARVEL FOCAL POINT
            </span>
            <span>{"//"}</span>
            <span className="text-neutral-400">THE FIRST SPARK</span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono-meta text-neutral-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>JARVIS HUD ACTIVE // MALIBU WORKSHOP</span>
          </div>
        </div>

        {/* Hero Spotlight Layout: Arc Reactor + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Arc Reactor Graphic */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl border border-cyan-500/30 bg-neutral-900/80 backdrop-blur-md relative group">
            {/* Pulsing Arc Reactor Circle */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-[spin_25s_linear_infinite]" />
              {/* Inner glowing glow ring */}
              <div className="absolute inset-2 rounded-full border border-cyan-300/60 shadow-[0_0_35px_rgba(6,182,212,0.4)]" />
              {/* Copper coil segments */}
              <div className="absolute inset-4 rounded-full border-4 border-cyan-500/30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-cyan-200/80 bg-cyan-950/60 flex flex-col items-center justify-center text-center p-2 shadow-[inset_0_0_20px_rgba(6,182,212,0.6)]">
                  <Heart className="w-5 h-5 text-cyan-300 animate-pulse mb-1" />
                  <span className="text-[9px] font-mono-meta tracking-tighter text-cyan-200 font-bold leading-tight">
                    ARC REACTOR
                  </span>
                  <span className="text-[8px] font-mono-meta text-cyan-400/80">
                    3 GJ/SEC
                  </span>
                </div>
              </div>
            </div>

            {/* Inscription Plate */}
            <div className="mt-5 text-center space-y-1">
              <div className="text-[11px] font-mono-meta text-cyan-300 font-bold tracking-widest uppercase">
                &ldquo;{TONY_STARK_FEATURE.arcReactorText}&rdquo;
              </div>
              <p className="text-[10px] font-mono-meta text-neutral-400">
                MARK I TO MARK LXXXV // 2008 – 2019
              </p>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono-meta text-neutral-400 mb-2">
                <span>PORTRAYED BY</span>
                <span className="text-white font-bold">{TONY_STARK_FEATURE.actor}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {TONY_STARK_FEATURE.title}
              </h2>
            </div>

            {/* Quotes Callout */}
            <div className="p-4 rounded-lg bg-neutral-900/90 border border-neutral-800 space-y-2">
              <p className="font-display text-lg sm:text-xl font-bold text-cyan-300 italic">
                &ldquo;{TONY_STARK_FEATURE.quote}&rdquo;
              </p>
              <p className="text-xs font-mono-meta text-neutral-400">
                — {TONY_STARK_FEATURE.secondaryQuote}
              </p>
            </div>

            <p className="font-editorial text-base sm:text-lg text-neutral-300 leading-relaxed">
              {TONY_STARK_FEATURE.story}
            </p>
          </div>
        </div>

        {/* 3 Pillars of The Workshop Ethos */}
        <div className="pt-6 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TONY_STARK_FEATURE.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/50 space-y-2 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center space-x-2 text-xs font-mono-meta text-cyan-400 font-bold">
                {i === 0 && <Wrench className="w-3.5 h-3.5" />}
                {i === 1 && <Terminal className="w-3.5 h-3.5" />}
                {i === 2 && <Sparkles className="w-3.5 h-3.5" />}
                <span>{pillar.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
