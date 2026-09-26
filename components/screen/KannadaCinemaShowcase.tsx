"use client";

import { useState } from "react";
import { KANNADA_CINEMA_FEATURES } from "@/data/screenData";
import { Film, Eye, Sparkles } from "lucide-react";

export function KannadaCinemaShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Rakshit Shetty Universe",
    "Cult Modern Classics",
    "Yash Landmark Collection",
    "Expanded Canon",
  ];

  const filteredFilms = KANNADA_CINEMA_FEATURES.filter((film) => {
    if (selectedCategory === "ALL") return true;
    return film.category === selectedCategory;
  });

  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-300 dark:border-neutral-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-meta text-amber-700 dark:text-amber-400 font-semibold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5" />
            <span>NATIVE ROOTS & CULTURAL SOIL</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Kannada Cinema // Stories That Resonate
          </h2>
          <p className="font-editorial text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl">
            From the rain-soaked coastal wharfs of Malpe and engineering college hostels to cybersecurity thrillers and the world-conquering scale of K.G.F.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono-meta">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-amber-600 text-white border-amber-600 font-bold shadow-xs"
                  : "bg-white dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-amber-400"
              }`}
            >
              {cat === "ALL" ? `ALL ${KANNADA_CINEMA_FEATURES.length} FILMS` : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Film Cards with Equal Visual Language */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredFilms.map((film) => (
          <article
            key={film.id}
            className="group relative rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/90 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/60 dark:hover:border-amber-500/60 transition-all duration-300 shadow-2xs hover:shadow-xl overflow-hidden"
          >
            {/* Background subtle color glow */}
            <div
              aria-hidden="true"
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
              style={{ backgroundColor: film.accent }}
            />

            <div className="relative z-10 space-y-4">
              {/* Category pill & year */}
              <div className="flex items-center justify-between text-xs font-mono-meta pb-3 border-b border-neutral-200 dark:border-neutral-800/80">
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border"
                  style={{
                    color: film.accent,
                    borderColor: `${film.accent}40`,
                    backgroundColor: `${film.accent}15`,
                  }}
                >
                  {film.category}
                </span>
                <span className="text-neutral-500 font-semibold">{film.year}</span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {film.title}
                </h3>
                <div className="text-xs font-mono-meta text-neutral-500 mt-1">
                  Directed by {film.director}
                </div>
                <div className="text-xs font-mono-meta text-amber-700 dark:text-amber-400 mt-0.5 font-medium">
                  {film.tagline}
                </div>
              </div>

              {/* Why It Matters */}
              <p className="font-editorial text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {film.whyItMatters}
              </p>

              {/* Visual Highlight Badge */}
              <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 space-y-1">
                <div className="flex items-center space-x-1.5 text-[10px] font-mono-meta text-neutral-500 uppercase tracking-wider">
                  <Eye className="w-3 h-3 text-amber-500" />
                  <span>Cinematic Visual Highlight</span>
                </div>
                <p className="text-xs font-mono-meta text-neutral-700 dark:text-neutral-300">
                  {film.visualHighlight}
                </p>
              </div>
            </div>

            {/* Bottom accent indicator */}
            <div
              className="relative z-10 h-1 rounded-full w-full mt-6 opacity-30 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: film.accent }}
            />
          </article>
        ))}
      </div>

      {/* Closing Sentiment Note */}
      <div className="pt-6 border-t border-neutral-300 dark:border-neutral-800 flex items-center justify-between text-xs font-mono-meta text-neutral-500">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-editorial text-sm sm:text-base italic text-neutral-700 dark:text-neutral-300">
            &ldquo;...and the list goes on.&rdquo;
          </span>
        </div>
        <span>KANNADA CINEMA ARCHIVE</span>
      </div>
    </section>
  );
}
