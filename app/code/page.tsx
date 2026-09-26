import { Metadata } from "next";
import { getPortfolioProjects } from "@/lib/github";
import { ProjectList } from "@/components/projects/ProjectList";
import { WorldNavSequence } from "@/components/layout/WorldNavSequence";
import { getWorldById } from "@/data/worlds";
import { Terminal, GitBranch, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "01 // CODE — VISHWAS // THE ARCHIVE",
  description:
    "Full-stack software engineering, modular system architectures, and live GitHub repositories by Vishwas S K.",
};

export const revalidate = 3600; // Hourly revalidation

export default async function CodePage() {
  const world = getWorldById("code")!;
  const projects = await getPortfolioProjects();

  return (
    <div className="w-full">
      {/* World Hero Section */}
      <section className="border-b border-neutral-300 dark:border-neutral-800 pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono-meta text-blue-700 dark:text-blue-400">
            <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-600/30 dark:border-blue-500/30 font-semibold">
              WORLD 01
            </span>
            <span>{"//"}</span>
            <span>I BUILD</span>
            <span>{"//"}</span>
            <span className="hidden sm:inline">FULL-STACK & SYSTEMS</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
                CODE
              </h1>
              <span className="font-script-elegant text-xl sm:text-2xl text-blue-700 dark:text-blue-400">
                Building, testing, learning
              </span>
            </div>
            <p className="font-editorial text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 max-w-3xl leading-relaxed italic">
              &ldquo;{world.tagline}&rdquo;
            </p>
          </div>

          {/* GitHub Live Telemetry Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500" />
              <span>GITHUB: github.com/VishwasSK15</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <GitBranch className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
              <span>3 FOCUSED SYSTEMS</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <RefreshCw className="w-3.5 h-3.5 text-neutral-500" />
              <span>LIVE GITHUB SYNC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-300 dark:border-neutral-800">
          <div className="text-xs font-mono-meta text-neutral-600 dark:text-neutral-400 uppercase tracking-widest font-semibold">
            PROJECT ARCHIVE // 3 CORE BUILDS // CLICK TO FOCUS
          </div>
        </div>

        <ProjectList projects={projects} />
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
