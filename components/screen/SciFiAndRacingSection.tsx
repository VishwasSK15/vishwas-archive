"use client";

import Image from "next/image";
import { SCI_FI_FEATURES, MOTORSPORT_FEATURES } from "@/data/screenData";
import { Orbit, Gauge } from "lucide-react";

export function SciFiAndRacingSection() {
  const interstellar = SCI_FI_FEATURES[0];
  const martian = SCI_FI_FEATURES[1];
  const fordVFerrari = MOTORSPORT_FEATURES[0];
  const f1Movie = MOTORSPORT_FEATURES[1];
  const rushMovie = MOTORSPORT_FEATURES[2];

  return (
    <div className="space-y-24">
      {/* SECTION 1: HARD SCI-FI */}
      <section className="space-y-10">
        <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-meta text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
              <Orbit className="w-3.5 h-3.5" />
              <span>COSMIC PERSPECTIVE & RIGOR</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Hard Sci-Fi & Scientific Problem Solving
            </h2>
          </div>
          <span className="font-script-elegant text-xl sm:text-2xl text-cyan-700 dark:text-cyan-400">
            Across spacetime
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interstellar Card */}
          <article className="rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white p-7 sm:p-9 space-y-6 relative overflow-hidden shadow-xl">
            {/* Atmospheric Background Image */}
            {interstellar.bgImage && (
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <Image
                  src={interstellar.bgImage}
                  alt=""
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent" />
              </div>
            )}

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono-meta border-b border-neutral-800 pb-3">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">
                  {interstellar.director} {"//"} {interstellar.year}
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px]">
                  KIP THORNE EQUATIONS
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {interstellar.title}
                </h3>
                <p className="font-mono-meta text-xs text-cyan-300/80 mt-1">
                  {interstellar.tagline}
                </p>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-lg bg-neutral-900/90 border border-neutral-800 space-y-1">
                <p className="font-editorial text-base sm:text-lg italic text-neutral-200">
                  &ldquo;{interstellar.quote}&rdquo;
                </p>
              </div>

              <p className="font-editorial text-sm sm:text-base text-neutral-300 leading-relaxed">
                {interstellar.takeaway}
              </p>

              {/* Telemetry specs grid */}
              <div className="pt-4 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-meta">
                {interstellar.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-2.5 rounded bg-neutral-900 border border-neutral-800"
                  >
                    <div className="text-[10px] text-neutral-500 uppercase">{spec.label}</div>
                    <div className="text-neutral-200 font-medium mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* The Martian Card */}
          <article className="rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white p-7 sm:p-9 space-y-6 relative overflow-hidden shadow-xl">
            {/* Atmospheric Background Image */}
            {martian.bgImage && (
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <Image
                  src={martian.bgImage}
                  alt=""
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent" />
              </div>
            )}

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono-meta border-b border-neutral-800 pb-3">
                <span className="text-orange-400 font-bold uppercase tracking-wider">
                  {martian.director} {"//"} {martian.year}
                </span>
                <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/30 text-orange-300 text-[10px]">
                  SOL 1 TO SOL 549
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {martian.title}
                </h3>
                <p className="font-mono-meta text-xs text-orange-300/80 mt-1">
                  {martian.tagline}
                </p>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-lg bg-neutral-900/90 border border-neutral-800 space-y-1">
                <p className="font-editorial text-base sm:text-lg italic text-neutral-200">
                  &ldquo;{martian.quote}&rdquo;
                </p>
              </div>

              <p className="font-editorial text-sm sm:text-base text-neutral-300 leading-relaxed">
                {martian.takeaway}
              </p>

              {/* Telemetry specs grid */}
              <div className="pt-4 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-meta">
                {martian.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-2.5 rounded bg-neutral-900 border border-neutral-800"
                  >
                    <div className="text-[10px] text-neutral-500 uppercase">{spec.label}</div>
                    <div className="text-neutral-200 font-medium mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 2: MOTORSPORT & THE 7,000 RPM THRESHOLD */}
      <section className="space-y-10">
        <div className="border-b border-neutral-300 dark:border-neutral-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-meta text-red-600 dark:text-red-400 font-semibold uppercase tracking-wider">
              <Gauge className="w-3.5 h-3.5" />
              <span>KINETIC VELOCITY & MOTORSPORT</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Motorsport & The 7,000 RPM Threshold
            </h2>
          </div>
          <span className="font-script-expressive text-xl sm:text-2xl text-red-700 dark:text-red-400">
            Pure analog nerve
          </span>
        </div>

        {/* Featured Ford v Ferrari Masterpiece Card with Tachometer */}
        <article className="rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white p-7 sm:p-10 lg:p-12 space-y-8 relative overflow-hidden shadow-2xl">
          {/* Atmospheric Background Image */}
          {fordVFerrari.bgImage && (
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <Image
                src={fordVFerrari.bgImage}
                alt=""
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent" />
            </div>
          )}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Tachometer Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-red-500/30 bg-neutral-900/90 relative backdrop-blur-xs">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-neutral-800"
                    fill="none"
                    strokeDasharray="188.5"
                    strokeDashoffset="60"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#ef4444"
                    strokeWidth="7"
                    fill="none"
                    strokeDasharray="188.5"
                    strokeDashoffset="35"
                    className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                  />
                </svg>

                <div className="absolute flex flex-col items-center text-center">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-red-500 tracking-tight animate-pulse">
                    7,000
                  </span>
                  <span className="text-[10px] font-mono-meta text-neutral-400 tracking-widest uppercase">
                    RPM REDLINE
                  </span>
                  <span className="text-[9px] font-mono-meta text-amber-400 font-bold mt-1">
                    FORD GT40 MK II
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="text-xs font-mono-meta text-neutral-300 font-semibold">
                  LE MANS 1966 // 24 HOURS
                </div>
                <div className="text-[11px] font-mono-meta text-neutral-500">
                  KEN MILES & CARROLL SHELBY
                </div>
              </div>
            </div>

            {/* Right: Narrative & Monologue */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono-meta text-red-400 mb-1">
                  DIRECTED BY {fordVFerrari.director.toUpperCase()} {"//"} {fordVFerrari.year}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  {fordVFerrari.title}
                </h3>
              </div>

              <div className="p-4 sm:p-5 rounded-lg bg-neutral-900 border border-neutral-800 space-y-2">
                <p className="font-editorial text-base sm:text-lg italic text-amber-200/90 leading-relaxed">
                  &ldquo;{fordVFerrari.quote}&rdquo;
                </p>
                <div className="text-xs font-mono-meta text-neutral-400">
                  — Carroll Shelby on the threshold between machine and human intuition
                </div>
              </div>

              <p className="font-editorial text-sm sm:text-base text-neutral-300 leading-relaxed">
                {fordVFerrari.takeaway}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono-meta">
                {fordVFerrari.specs.map((s) => (
                  <div key={s.label} className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] text-neutral-500 uppercase">{s.label}</div>
                    <div className="text-neutral-200 font-medium mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* F1: The Movie and Rush Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* F1: The Movie */}
          {f1Movie && (
            <article className="rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white p-7 space-y-5 relative overflow-hidden shadow-lg">
              {f1Movie.bgImage && (
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <Image
                    src={f1Movie.bgImage}
                    alt=""
                    fill
                    className="object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent" />
                </div>
              )}

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between text-xs font-mono-meta border-b border-neutral-800 pb-2.5">
                  <span className="text-cyan-400 font-bold uppercase">{f1Movie.director} {"//"} {f1Movie.year}</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px]">
                    HYBRID TURBO V6
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{f1Movie.title}</h3>
                  <div className="text-xs font-mono-meta text-cyan-300/80 mt-0.5">{f1Movie.tagline}</div>
                </div>

                <div className="p-3.5 rounded bg-neutral-900 border border-neutral-800">
                  <p className="font-editorial text-sm italic text-neutral-200">&ldquo;{f1Movie.quote}&rdquo;</p>
                </div>

                <p className="font-editorial text-sm text-neutral-300 leading-relaxed">{f1Movie.takeaway}</p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono-meta pt-2 border-t border-neutral-800">
                  {f1Movie.specs.map((s) => (
                    <div key={s.label} className="p-2 rounded bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-500 uppercase">{s.label}</div>
                      <div className="text-neutral-200 font-medium text-[11px] mt-0.5">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* Rush */}
          {rushMovie && (
            <article className="rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-white p-7 space-y-5 relative overflow-hidden shadow-lg">
              {rushMovie.bgImage && (
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <Image
                    src={rushMovie.bgImage}
                    alt=""
                    fill
                    className="object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent" />
                </div>
              )}

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between text-xs font-mono-meta border-b border-neutral-800 pb-2.5">
                  <span className="text-amber-400 font-bold uppercase">{rushMovie.director} {"//"} {rushMovie.year}</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px]">
                    1976 CHAMPIONSHIP
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{rushMovie.title}</h3>
                  <div className="text-xs font-mono-meta text-amber-300/80 mt-0.5">{rushMovie.tagline}</div>
                </div>

                <div className="p-3.5 rounded bg-neutral-900 border border-neutral-800">
                  <p className="font-editorial text-sm italic text-neutral-200">&ldquo;{rushMovie.quote}&rdquo;</p>
                </div>

                <p className="font-editorial text-sm text-neutral-300 leading-relaxed">{rushMovie.takeaway}</p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono-meta pt-2 border-t border-neutral-800">
                  {rushMovie.specs.map((s) => (
                    <div key={s.label} className="p-2 rounded bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-500 uppercase">{s.label}</div>
                      <div className="text-neutral-200 font-medium text-[11px] mt-0.5">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
