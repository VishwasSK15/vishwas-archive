import { Metadata } from "next";
import Image from "next/image";
import { MAIN_CUT_PROJECT, COLOR_GRADE_STAGES, CUT_DISCIPLINES } from "@/data/cutData";
import { ColorGradeSlider } from "@/components/cut/ColorGradeSlider";
import { WorldNavSequence } from "@/components/layout/WorldNavSequence";
import { getWorldById } from "@/data/worlds";
import { Sliders, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "03 // CUT — VISHWAS // THE ARCHIVE",
  description:
    "Post-production visual craft, DaVinci Resolve color grading, and video pacing transformations by Vishwas S K.",
};

export default function CutPage() {
  const world = getWorldById("cut")!;

  return (
    <div className="w-full">
      {/* World Hero Section */}
      <section className="border-b border-neutral-200 dark:border-neutral-800 pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-500/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono-meta text-red-600 dark:text-red-400">
            <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30">
              WORLD 03
            </span>
            <span>{"//"}</span>
            <span>I TRANSFORM</span>
            <span>{"//"}</span>
            <span className="hidden sm:inline">POST-PRODUCTION & COLOR SCIENCE</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 dark:text-white uppercase">
              CUT
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
              {world.tagline}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono-meta text-neutral-500">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Sliders className="w-3.5 h-3.5 text-red-500" />
              <span>COLOR SUITE: DAVINCI RESOLVE / PREMIERE PRO</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Layers className="w-3.5 h-3.5 text-orange-500" />
              <span>PIPELINE: RAW 10-BIT LOG → REC.709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Before / After Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="space-y-4">
          <div className="text-xs font-mono-meta text-red-500">
            CASE STUDY 01 // INTERACTIVE TONAL TRANSFORMATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {MAIN_CUT_PROJECT.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            {MAIN_CUT_PROJECT.description}
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <ColorGradeSlider
          beforeImage={MAIN_CUT_PROJECT.beforeImage}
          afterImage={MAIN_CUT_PROJECT.afterImage}
          beforeLabel={MAIN_CUT_PROJECT.beforeLabel}
          afterLabel={MAIN_CUT_PROJECT.afterLabel}
        />

        {/* Color Grading Stage Breakdown */}
        <div className="pt-10">
          <div className="text-xs font-mono-meta text-neutral-400 uppercase tracking-widest mb-6">
            NODE PIPELINE // STAGE-BY-STAGE DISSECTION
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLOR_GRADE_STAGES.map((stage) => (
              <div
                key={stage.stage}
                className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-3"
              >
                <div className="text-xs font-mono-meta text-red-600 dark:text-red-400 font-bold">
                  {stage.stage}
                </div>
                <div className="text-base font-bold text-neutral-900 dark:text-white">
                  {stage.parameter}
                </div>
                <div className="text-xs font-mono-meta px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  {stage.adjustment}
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                  {stage.objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Disciplines & Visual Experiments */}
      <section className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <div className="text-xs font-mono-meta text-red-500">BEYOND THE TIMELINE</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Post-Production Disciplines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CUT_DISCIPLINES.map((disc) => (
              <div
                key={disc.title}
                className="p-6 sm:p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="text-xs font-mono-meta text-neutral-400">{disc.subtitle}</div>
                  <h4 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {disc.title}
                  </h4>
                  {disc.image && (
                    <div className="relative aspect-video rounded overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black">
                      <Image
                        src={disc.image}
                        alt={disc.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {disc.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono-meta text-neutral-500">
                  {disc.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
