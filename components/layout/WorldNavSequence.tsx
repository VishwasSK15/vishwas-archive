import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface WorldNavSequenceProps {
  currentWorldNumber: string;
  currentWorldLabel: string;
  prevWorld: { label: string; route: string; number: string };
  nextWorld: { label: string; route: string; number: string };
}

export function WorldNavSequence({
  currentWorldNumber,
  currentWorldLabel,
  prevWorld,
  nextWorld,
}: WorldNavSequenceProps) {
  return (
    <section className="border-t border-neutral-300 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/30 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch justify-between gap-6">
        {/* Previous World */}
        <Link
          href={prevWorld.route}
          className="group flex-1 p-6 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900/60 shadow-xs transition-all flex flex-col justify-between"
        >
          <div className="flex items-center space-x-2 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS WORLD {"//"} {prevWorld.number}</span>
          </div>
          <div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {prevWorld.label}
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 font-mono-meta">
              EXPLORE PRECEDING ARCHIVE
            </div>
          </div>
        </Link>

        {/* Current Indicator */}
        <div className="hidden md:flex flex-col items-center justify-center px-6 text-center">
          <span className="text-[10px] font-mono-meta text-neutral-500 uppercase tracking-widest font-semibold">
            ACTIVE WORLD
          </span>
          <span className="font-display text-sm font-mono-meta font-bold text-blue-700 dark:text-blue-400 mt-1">
            {currentWorldNumber} {"//"} {currentWorldLabel}
          </span>
        </div>

        {/* Next World */}
        <Link
          href={nextWorld.route}
          className="group flex-1 p-6 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900/60 shadow-xs transition-all flex flex-col justify-between text-right"
        >
          <div className="flex items-center justify-end space-x-2 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
            <span>NEXT WORLD {"//"} {nextWorld.number}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {nextWorld.label}
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 font-mono-meta">
              CONTINUE THE ARCHIVE
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
