import { Metadata } from "next";
import Image from "next/image";
import {
  SKILL_CATEGORIES,
  ABOUT_NARRATIVE,
} from "@/data/aboutData";
import { HorizontalImageCarousel } from "@/components/about/HorizontalImageCarousel";
import { ContactSection } from "@/components/about/ContactSection";
import { WorldNavSequence } from "@/components/layout/WorldNavSequence";
import { getWorldById } from "@/data/worlds";
import { MapPin, Compass, GraduationCap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "04 // ABOUT — VISHWAS // THE ARCHIVE",
  description:
    "Engineering student at RRCE Bengaluru (Class of '27), native Shikaripura, full-stack builder, and amateur photographer — Vishwas S K.",
};

export default function AboutPage() {
  const world = getWorldById("about")!;

  return (
    <div className="w-full">
      {/* World Hero Section */}
      <section className="border-b border-neutral-300 dark:border-neutral-800 pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono-meta text-blue-700 dark:text-blue-400">
            <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-600/30 dark:border-blue-500/30 font-semibold">
              WORLD 04
            </span>
            <span>{"//"}</span>
            <span>THE PERSON</span>
            <span>{"//"}</span>
            <span className="hidden sm:inline">STUDENT & BUILDER</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
                ABOUT VISHWAS
              </h1>
              <span className="font-script-elegant text-2xl sm:text-3xl text-blue-700 dark:text-blue-400">
                Vishwas S K
              </span>
            </div>
            <p className="font-editorial text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 max-w-3xl leading-relaxed italic">
              &ldquo;{world.tagline}&rdquo;
            </p>
          </div>

          {/* Personal Metadata Chips */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>NATIVE: SHIKARIPURA, SHIVAMOGGA</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>RRCE BENGALURU · CLASS OF &apos;27</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
              <span>CODE · OPTICS · EDITING · CINEMA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Author Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono-meta text-blue-700 dark:text-blue-400 font-semibold uppercase tracking-wider">
                ORIGINS & IDENTITY
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Curious, Learning, and Building
              </h2>
            </div>

            {/* Philosophy Callout */}
            <div className="p-6 sm:p-8 rounded-xl border-l-4 border-blue-600 bg-neutral-100 dark:bg-neutral-900/60 shadow-xs space-y-2">
              <p className="font-editorial text-lg sm:text-xl font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed italic">
                &ldquo;{ABOUT_NARRATIVE.philosophy}&rdquo;
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-5 font-editorial text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {ABOUT_NARRATIVE.bioParagraphs.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Background Badges */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-meta">
              <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-1">
                <span className="text-neutral-500 uppercase tracking-wider text-[10px]">
                  HOMETOWN ROOTS
                </span>
                <p className="text-neutral-800 dark:text-neutral-200 font-semibold">
                  Shikaripura, Shivamogga District
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-1">
                <span className="text-neutral-500 uppercase tracking-wider text-[10px]">
                  COLLEGE & COHORT
                </span>
                <p className="text-neutral-800 dark:text-neutral-200 font-semibold">
                  Rajarajeswari College of Engineering (RRCE &apos;27)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-xl bg-neutral-950">
              <Image
                src="/images/about/portrait-glasses.jpg"
                alt="Vishwas S K — Engineering Student"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent p-6 sm:p-7 text-white space-y-1">
                <div className="text-xs font-mono-meta text-blue-400">STUDENT & BUILDER</div>
                <div className="font-display text-2xl font-bold">Vishwas S K</div>
                <div className="text-xs text-neutral-300 font-mono-meta">
                  RRCE Bengaluru · Class of &apos;27
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Skill Matrix */}
        <div className="space-y-10 pt-8 border-t border-neutral-300 dark:border-neutral-800">
          <div className="space-y-2">
            <div className="text-xs font-mono-meta text-blue-700 dark:text-blue-400 font-semibold uppercase tracking-wider">
              WHAT I USE & EXPERIMENT WITH
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Tools, Languages & Creative Suite
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-4"
              >
                <div className="text-xs font-mono-meta text-neutral-700 dark:text-neutral-300 font-bold border-b border-neutral-200 dark:border-neutral-800 pb-2">
                  {cat.title}
                </div>
                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center space-x-2 text-sm text-neutral-800 dark:text-neutral-200 font-mono-meta"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Flowing Horizontal Image Carousel — NO container, NO borders, NO lightbox */}
        <div className="space-y-6 pt-8 border-t border-neutral-300 dark:border-neutral-800 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-xs font-mono-meta text-neutral-500 uppercase tracking-widest font-semibold">
              MOMENTS & TRAVELS // CONTINUOUS STRIP
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Glimpses Along The Journey
            </h3>
            <p className="font-editorial text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Between classes, long code debugging sessions, and traveling across Karnataka.
            </p>
          </div>

          <HorizontalImageCarousel />
        </div>

        {/* Working Contact Section */}
        <div className="pt-8 border-t border-neutral-300 dark:border-neutral-800">
          <ContactSection />
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
