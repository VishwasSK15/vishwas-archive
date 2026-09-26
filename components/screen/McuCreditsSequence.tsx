"use client";

import { useState } from "react";
import Image from "next/image";
import { MCU_CHARACTERS } from "@/data/screenData";
import { Heart, Clapperboard, Sparkles, Quote } from "lucide-react";

export function McuCreditsSequence() {
  const [filter, setFilter] = useState<string>("ALL");

  const filterOptions = ["ALL", "ORIGINAL SIX", "GUARDIANS & COSMIC", "MUTANTS & ROGUES", "ARCHITECTS & AI"];

  const filteredCharacters = MCU_CHARACTERS.filter((char) => {
    if (filter === "ALL") return true;
    if (filter === "ORIGINAL SIX") {
      return ["01", "02", "03", "04", "05", "07", "13"].includes(char.id);
    }
    if (filter === "GUARDIANS & COSMIC") {
      return ["06", "14", "15", "16", "17"].includes(char.id);
    }
    if (filter === "MUTANTS & ROGUES") {
      return ["08", "09", "10", "11"].includes(char.id);
    }
    if (filter === "ARCHITECTS & AI") {
      return ["12", "18", "19", "20", "21"].includes(char.id);
    }
    return true;
  });

  return (
    <section className="space-y-8">
      {/* Credits Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-300 dark:border-neutral-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-meta text-purple-700 dark:text-purple-400 font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-purple-500 text-purple-500" />
            <span>MCU CREDITS SEQUENCE // 21 LEGENDS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Characters That Reached the Heart
          </h2>
          <p className="font-editorial text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl">
            The defining heroes, tragic villains, AI companions, and creators whose words and sacrifices left an indelible mark on how I view bravery and loyalty.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono-meta">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setFilter(opt)}
              className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                filter === opt
                  ? "bg-purple-600 text-white border-purple-600 font-bold shadow-xs"
                  : "bg-white dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-purple-400"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Character Cards with Atmospheric Background Layer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharacters.map((char) => (
          <article
            key={char.id}
            className="group relative rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/90 p-6 flex flex-col justify-between hover:border-purple-500/60 dark:hover:border-purple-500/60 transition-all duration-300 shadow-2xs hover:shadow-xl overflow-hidden"
          >
            {/* Atmospheric Background Image Layer with Scrim */}
            {char.bgImage && (
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
              >
                <Image
                  src={char.bgImage}
                  alt=""
                  fill
                  className="object-cover object-center opacity-15 dark:opacity-25 group-hover:scale-105 group-hover:opacity-20 dark:group-hover:opacity-35 transition-all duration-700"
                />
                {/* Scrim gradient to ensure text readability in both light & dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent dark:from-neutral-900 dark:via-neutral-900/85 dark:to-transparent" />
              </div>
            )}

            {/* Content sitting cleanly above atmospheric background */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono-meta">
                <div className="flex items-center space-x-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: char.color }}
                  />
                  <span className="font-bold text-neutral-900 dark:text-white">
                    {char.alias}
                  </span>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border"
                  style={{
                    color: char.color,
                    borderColor: `${char.color}40`,
                    backgroundColor: `${char.color}15`,
                  }}
                >
                  {char.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
                  {char.name}
                </h3>
                <div className="text-xs font-mono-meta text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Portrayed by {char.actor}
                </div>
              </div>

              {/* Quote Block */}
              <div className="p-3.5 rounded-lg bg-white/80 dark:bg-neutral-950/80 border border-neutral-200/80 dark:border-neutral-800 backdrop-blur-xs relative">
                <Quote className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600 mb-1" />
                <p className="font-editorial text-sm sm:text-base text-neutral-900 dark:text-neutral-100 italic leading-snug">
                  &ldquo;{char.quote}&rdquo;
                </p>
                <div className="text-[10px] font-mono-meta text-neutral-500 dark:text-neutral-400 mt-2">
                  {char.sceneContext}
                </div>
              </div>

              {/* Why it reached the heart */}
              <p className="font-editorial text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {char.impact}
              </p>
            </div>

            {/* Bottom Accent Line */}
            <div
              className="relative z-10 h-1 rounded-full w-full mt-5 opacity-40 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: char.color }}
            />
          </article>
        ))}
      </div>

      {/* Directors & Visionaries Salute */}
      <div className="mt-10 p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-mono-meta text-purple-700 dark:text-purple-400 font-semibold uppercase">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>DIRECTORIAL STEWARDS OF THE ARCHIVE</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 max-w-2xl font-sans">
            Special salute to <strong>Jon Favreau</strong> for grounding the Marvel Universe in tactile mechanics and lathe grease in 2008, and to <strong>Anthony & Joe Russo</strong> for orchestrating the staggering emotional stakes of <em>Captain America: The Winter Soldier</em>, <em>Infinity War</em>, and <em>Endgame</em>.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono-meta text-neutral-500 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 rounded bg-white dark:bg-neutral-800 shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>MCU CANON 2008 – 2024</span>
        </div>
      </div>
    </section>
  );
}
