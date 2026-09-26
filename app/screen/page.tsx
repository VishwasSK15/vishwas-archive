import { Metadata } from "next";
import { TonyStarkSpotlight } from "@/components/screen/TonyStarkSpotlight";
import { McuCreditsSequence } from "@/components/screen/McuCreditsSequence";
import { SciFiAndRacingSection } from "@/components/screen/SciFiAndRacingSection";
import { KannadaCinemaShowcase } from "@/components/screen/KannadaCinemaShowcase";
import { WorldNavSequence } from "@/components/layout/WorldNavSequence";
import { getWorldById } from "@/data/worlds";
import { Film, Sparkles, Heart, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "03 // SCREEN — VISHWAS // THE ARCHIVE",
  description:
    "A cinematic archive celebrating Tony Stark's engineering, MCU heroes, hard sci-fi, 7,000 RPM motorsport, and Kannada cinema by Vishwas S K.",
};

export default function ScreenPage() {
  const world = getWorldById("screen")!;

  return (
    <div className="w-full">
      {/* World Hero Section */}
      <section className="border-b border-neutral-300 dark:border-neutral-800 pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono-meta text-purple-700 dark:text-purple-400">
            <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-600/30 dark:border-purple-500/30 font-semibold">
              WORLD 03
            </span>
            <span>{"//"}</span>
            <span>I EXPERIENCE</span>
            <span>{"//"}</span>
            <span className="hidden sm:inline">CINEMATIC THEATRE</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
                SCREEN
              </h1>
              <span className="font-script-expressive text-xl sm:text-2xl text-purple-700 dark:text-purple-400">
                The cinema that inspired me
              </span>
            </div>
            <p className="font-editorial text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 max-w-3xl leading-relaxed italic">
              &ldquo;{world.tagline}&rdquo;
            </p>
          </div>

          {/* Jump Bar Navigation */}
          <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono-meta">
            <a
              href="#tony-stark"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs hover:border-cyan-500 text-neutral-700 dark:text-neutral-300 transition-colors min-h-[40px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              <span>01. TONY STARK & WORKSHOP</span>
            </a>

            <a
              href="#mcu-credits"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs hover:border-purple-500 text-neutral-700 dark:text-neutral-300 transition-colors min-h-[40px]"
            >
              <Heart className="w-3.5 h-3.5 text-purple-500 shrink-0" />
              <span>02. MCU CHARACTERS CREDITS</span>
            </a>

            <a
              href="#scifi-motorsport"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs hover:border-red-500 text-neutral-700 dark:text-neutral-300 transition-colors min-h-[40px]"
            >
              <Gauge className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>03. HARD SCI-FI & 7,000 RPM</span>
            </a>

            <a
              href="#kannada-cinema"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs hover:border-amber-500 text-neutral-700 dark:text-neutral-300 transition-colors min-h-[40px]"
            >
              <Film className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>04. KANNADA CINEMA</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Exhibition Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        {/* SECTION 1: MARVEL FOCAL POINT (TONY STARK & THE WORKSHOP) */}
        <div id="tony-stark" className="scroll-mt-24">
          <TonyStarkSpotlight />
        </div>

        {/* SECTION 2: MCU CREDITS SEQUENCE (CHARACTERS THAT REACHED THE HEART) */}
        <div id="mcu-credits" className="scroll-mt-24">
          <McuCreditsSequence />
        </div>

        {/* SECTION 3: HARD SCI-FI & MOTORSPORT */}
        <div id="scifi-motorsport" className="scroll-mt-24">
          <SciFiAndRacingSection />
        </div>

        {/* SECTION 4: KANNADA CINEMA SHOWCASE */}
        <div id="kannada-cinema" className="scroll-mt-24">
          <KannadaCinemaShowcase />
        </div>
      </div>

      {/* World Transition */}
      <WorldNavSequence
        currentWorldNumber={world.number}
        currentWorldLabel={world.label}
        prevWorld={world.prevWorld}
        nextWorld={world.nextWorld}
      />
    </div>
  );
}
