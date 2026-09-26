import { Metadata } from "next";
import { DRIVE_ENTRIES, TELEMETRY_METRICS } from "@/data/driveData";
import { WorldNavSequence } from "@/components/layout/WorldNavSequence";
import { getWorldById } from "@/data/worlds";
import { Gauge, Zap, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "04 // DRIVE — VISHWAS // THE ARCHIVE",
  description:
    "Automotive engineering kinematics, telemetry metrics, and Western Ghats mountain driving by Vishwas S K.",
};

export default function DrivePage() {
  const world = getWorldById("drive")!;

  return (
    <div className="w-full">
      {/* World Hero Section */}
      <section className="border-b border-neutral-200 dark:border-neutral-800 pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono-meta text-teal-600 dark:text-teal-400">
            <span className="px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/30">
              WORLD 04
            </span>
            <span>{"//"}</span>
            <span>I EXPLORE</span>
            <span>{"//"}</span>
            <span className="hidden sm:inline">AUTOMOTIVE TELEMETRY & KINEMATICS</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 dark:text-white uppercase">
              DRIVE
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
              {world.tagline}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono-meta text-neutral-500">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Gauge className="w-3.5 h-3.5 text-teal-500" />
              <span>TEST TRACKS: AGUMBE & CHARMADI GHATS</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              <span>TELEMETRY: TACTILE MECHANICAL RIGIDITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Telemetry HUD Strip */}
      <section className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] font-mono-meta text-teal-400 uppercase tracking-widest mb-6 flex items-center space-x-2">
            <Zap className="w-3.5 h-3.5" />
            <span>DYNAMIC BENCHMARK METRICS // REAL-TIME SAMPLING</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TELEMETRY_METRICS.map((metric) => (
              <div key={metric.label} className="border-l-2 border-teal-500 pl-4 space-y-1">
                <div className="text-[10px] font-mono-meta text-neutral-400">{metric.label}</div>
                <div className="text-xl sm:text-2xl font-black font-mono-meta text-white">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono-meta text-neutral-400">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telemetry Dossiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {DRIVE_ENTRIES.map((entry, idx) => (
          <article
            key={entry.id}
            className="p-8 sm:p-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-sm space-y-8"
          >
            {/* Entry Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-800 gap-4">
              <div>
                <span className="text-xs font-mono-meta text-teal-600 dark:text-teal-400 font-bold">
                  {entry.specCode}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
                  {entry.title}
                </h2>
                <div className="text-xs sm:text-sm font-mono-meta text-neutral-500 mt-1">
                  {entry.subtitle}
                </div>
              </div>
              <div className="text-xs font-mono-meta text-neutral-400 px-3 py-1 rounded bg-neutral-100 dark:bg-neutral-800 w-fit">
                CHRONO 0{idx + 1}
              </div>
            </div>

            {/* Spec Parameters Matrix */}
            <div>
              <div className="text-[10px] font-mono-meta text-neutral-400 uppercase tracking-widest mb-3">
                TECHNICAL SPECIFICATIONS // BENCHMARK READOUT
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {entry.parameters.map((param) => (
                  <div
                    key={param.label}
                    className="p-3.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/70"
                  >
                    <div className="text-[10px] font-mono-meta text-neutral-500">{param.label}</div>
                    <div className="text-xs sm:text-sm font-semibold font-mono-meta text-neutral-900 dark:text-neutral-100 mt-1">
                      {param.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative & Quote */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              <div className="lg:col-span-7">
                <div className="text-[10px] font-mono-meta text-neutral-400 uppercase tracking-widest mb-2">
                  TACTILE NARRATIVE
                </div>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {entry.narrative}
                </p>
              </div>
              <div className="lg:col-span-5 p-6 rounded border border-teal-500/20 bg-teal-500/5">
                <div className="text-[10px] font-mono-meta text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-2">
                  PHILOSOPHY OF VELOCITY
                </div>
                <blockquote className="text-sm sm:text-base font-serif italic text-neutral-800 dark:text-neutral-200 leading-snug">
                  &ldquo;{entry.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </article>
        ))}
      </section>

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
