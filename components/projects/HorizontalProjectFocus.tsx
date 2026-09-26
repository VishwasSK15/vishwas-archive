"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioProject } from "@/lib/types";
import {
  ExternalLink,
  Layers,
  Lightbulb,
  X,
  Code2,
  Maximize2,
  RotateCcw,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface HorizontalProjectFocusProps {
  projects: PortfolioProject[];
}

export function HorizontalProjectFocus({ projects }: HorizontalProjectFocusProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Guarantee 3 canonical projects
  const displayProjects = projects.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Control bar / Status */}
      <div className="flex items-center justify-between text-xs font-mono-meta text-neutral-600 dark:text-neutral-400 pb-2">
        <div className="flex items-center space-x-2">
          <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>
            {focusedIndex !== null
              ? `HORIZONTAL FOCUS // ${displayProjects[focusedIndex].title} EXPANDED`
              : "HORIZONTAL ARCHIVE // CLICK ANY PROJECT TO FOCUS & DOCK OTHERS"}
          </span>
        </div>

        {focusedIndex !== null && (
          <button
            type="button"
            onClick={() => setFocusedIndex(null)}
            className="flex items-center space-x-1.5 px-3 py-1 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors shadow-2xs font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET TO 3-COLUMN VIEW</span>
          </button>
        )}
      </div>

      {/* Main Horizontal Focus Container — Fixed Equal Height across states */}
      <div className="hidden md:flex w-full h-[580px] gap-4 lg:gap-6 items-stretch overflow-hidden">
        {displayProjects.map((project, idx) => {
          const isFocused = focusedIndex === idx;
          const isDimmed = focusedIndex !== null && !isFocused;
          const indexFormatted = String(idx + 1).padStart(2, "0");

          return (
            <motion.article
              key={project.id || project.title}
              layout
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                if (!isFocused) setFocusedIndex(idx);
              }}
              style={{
                flex: isFocused ? 3.6 : isDimmed ? 0.75 : 1,
              }}
              className={`relative rounded-xl border transition-all duration-500 h-full flex flex-col justify-between overflow-hidden ${
                isFocused
                  ? "border-blue-600 dark:border-blue-500 shadow-2xl ring-2 ring-blue-500/20 bg-white dark:bg-neutral-900 z-20"
                  : isDimmed
                  ? "border-neutral-300 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/40 opacity-45 blur-[1.5px] scale-[0.98] hover:opacity-80 hover:blur-none hover:scale-100 cursor-pointer"
                  : "border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-xs hover:border-blue-500/50 cursor-pointer"
              }`}
            >
              {/* Peek Mode (when other project is focused) */}
              {isDimmed ? (
                <div className="p-4 h-full flex flex-col justify-between items-center text-center select-none">
                  <div className="w-full flex items-center justify-between text-xs font-mono-meta text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                    <span className="font-bold text-blue-600 dark:text-blue-400">{indexFormatted}</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Thumbnail & Vertical Title */}
                  <div className="my-auto space-y-4 flex flex-col items-center">
                    {project.image && (
                      <div className="relative w-16 h-16 rounded-md overflow-hidden border border-neutral-300 dark:border-neutral-700">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-display text-sm font-bold tracking-tight text-neutral-900 dark:text-white [writing-mode:vertical-lr] rotate-180">
                      {project.title}
                    </h3>
                  </div>

                  <div className="text-[10px] font-mono-meta px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 uppercase tracking-widest font-semibold">
                    FOCUS
                  </div>
                </div>
              ) : isFocused ? (
                /* Focused Expanded Mode (Full details inside exact same height) */
                <div className="p-6 sm:p-8 h-full flex flex-col justify-between overflow-hidden">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between text-xs font-mono-meta pb-3 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 font-bold">
                        {indexFormatted} {"//"} FOCUSED
                      </span>
                      <span className="text-neutral-500 hidden lg:inline">{project.tagline}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      {project.language && (
                        <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 font-medium">
                          {project.language}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFocusedIndex(null);
                        }}
                        className="p-1 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Collapse"
                        title="Reset to 3-column view"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 2-Column Split Content inside focused card */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 overflow-y-auto pr-1">
                    {/* Left Column: Visual Preview & Repos */}
                    <div className="lg:col-span-5 space-y-4">
                      {project.image && (
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-md">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      )}

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[11px] font-mono-meta rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Repositories */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.githubRepos && project.githubRepos.length > 0 ? (
                          project.githubRepos.map((r) => (
                            <a
                              key={r.url}
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-mono-meta text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span>{r.label}</span>
                            </a>
                          ))
                        ) : (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-mono-meta text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>GITHUB REPO</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Deep Architectural Notes & Learnings */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="font-editorial text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Behind The Build Story */}
                      {project.story && (
                        <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 space-y-1">
                          <div className="flex items-center space-x-1.5 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400 font-bold uppercase">
                            <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span>Behind The Build</span>
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-snug font-sans">
                            {project.story}
                          </p>
                        </div>
                      )}

                      {/* What I Learned */}
                      {project.learned && (
                        <div className="p-3.5 rounded-lg bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-1">
                          <div className="flex items-center space-x-1.5 text-xs font-mono-meta text-amber-700 dark:text-amber-400 font-bold uppercase">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>What I Learned Along The Way</span>
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-snug font-sans">
                            {project.learned}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card bottom bar */}
                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono-meta text-neutral-500">
                    <span>CLICK ANOTHER PROJECT TO SWITCH FOCUS</span>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"
                      >
                        <span>LIVE PRODUCTION</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                /* Initial Balanced 3-Column State */
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-xs font-mono-meta pb-3 border-b border-neutral-200 dark:border-neutral-800">
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">{indexFormatted}</span>
                        <span className="text-neutral-400">{"//"}</span>
                        <span className="text-neutral-600 dark:text-neutral-400">SYSTEM</span>
                      </div>
                      {project.language && (
                        <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 font-medium">
                          {project.language}
                        </span>
                      )}
                    </div>

                    {/* Image */}
                    {project.image && (
                      <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Title & Summary */}
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <div className="text-xs font-mono-meta text-blue-700 dark:text-blue-400 mt-1">
                          {project.tagline}
                        </div>
                      )}
                      <p className="font-editorial text-sm text-neutral-700 dark:text-neutral-300 mt-2 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono-meta rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono-meta text-neutral-500">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Click to expand horizontal focus
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>

      {/* Mobile Stack Fallback (under 768px) with equal height tabs */}
      <div className="md:hidden space-y-4">
        <div className="flex rounded-lg border border-neutral-300 dark:border-neutral-800 p-1 bg-neutral-100 dark:bg-neutral-900 gap-1">
          {displayProjects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setFocusedIndex(idx)}
              className={`flex-1 min-h-[44px] py-2 px-1 text-[10px] sm:text-xs font-mono-meta rounded-md transition-all font-semibold flex items-center justify-center text-center truncate cursor-pointer ${
                (focusedIndex === null ? 0 : focusedIndex) === idx
                  ? "bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              0{idx + 1} {"//"} {p.title.split("-")[0]}
            </button>
          ))}
        </div>

        {(() => {
          const activeProj = displayProjects[focusedIndex ?? 0];
          return (
            <article className="p-5 sm:p-6 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm space-y-4">
              {activeProj.image && (
                <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950">
                  <Image
                    src={activeProj.image}
                    alt={activeProj.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  {activeProj.title}
                </h3>
                {activeProj.tagline && (
                  <div className="text-[11px] font-mono-meta text-blue-700 dark:text-blue-400 mt-0.5">
                    {activeProj.tagline}
                  </div>
                )}
                <p className="font-editorial text-sm text-neutral-700 dark:text-neutral-300 mt-2 leading-relaxed">
                  {activeProj.description}
                </p>
              </div>

              {/* Technologies */}
              {activeProj.technologies && activeProj.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono-meta rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Behind the Build */}
              {activeProj.story && (
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-800 dark:text-neutral-200 space-y-1">
                  <div className="font-bold text-blue-600 dark:text-blue-400 font-mono-meta text-[11px] uppercase flex items-center space-x-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Behind The Build</span>
                  </div>
                  <p className="leading-snug">{activeProj.story}</p>
                </div>
              )}

              {/* What I Learned */}
              {activeProj.learned && (
                <div className="p-3 rounded-lg bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-xs text-neutral-800 dark:text-neutral-200 space-y-1">
                  <div className="font-bold text-amber-700 dark:text-amber-400 font-mono-meta text-[11px] uppercase flex items-center space-x-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>What I Learned Along The Way</span>
                  </div>
                  <p className="leading-snug">{activeProj.learned}</p>
                </div>
              )}

              {/* Links */}
              <div className="pt-2 flex flex-wrap gap-2 border-t border-neutral-200 dark:border-neutral-800">
                {activeProj.githubRepos && activeProj.githubRepos.length > 0 ? (
                  activeProj.githubRepos.map((r) => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-mono-meta text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold min-h-[44px]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{r.label}</span>
                    </a>
                  ))
                ) : (
                  <a
                    href={activeProj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-mono-meta text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold min-h-[44px]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GITHUB REPO</span>
                  </a>
                )}

                {activeProj.live && (
                  <a
                    href={activeProj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono-meta font-semibold min-h-[44px] shadow-2xs"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          );
        })()}
      </div>
    </div>
  );
}
