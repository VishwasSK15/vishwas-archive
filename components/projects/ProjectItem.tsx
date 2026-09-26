"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Star,
  GitFork,
  Layers,
  Lightbulb,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { PortfolioProject } from "@/lib/types";

interface ProjectItemProps {
  project: PortfolioProject;
  index: number;
  isFocused: boolean;
  isAnyFocused: boolean;
  onToggleFocus: () => void;
}

export function ProjectItem({
  project,
  index,
  isFocused,
  isAnyFocused,
  onToggleFocus,
}: ProjectItemProps) {
  const indexFormatted = String(index + 1).padStart(2, "0");
  const isDimmed = isAnyFocused && !isFocused;

  return (
    <motion.article
      layout
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isFocused
          ? "border-blue-600 dark:border-blue-500 shadow-2xl ring-2 ring-blue-500/20 bg-white dark:bg-neutral-900 z-20"
          : isDimmed
          ? "border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/60 dark:bg-neutral-900/30 opacity-40 blur-[1px] scale-[0.97] hover:opacity-80 hover:blur-none cursor-pointer"
          : "border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 cursor-pointer"
      }`}
      onClick={(e) => {
        // Only toggle focus if clicking on card, not directly on an external anchor link
        const target = e.target as HTMLElement;
        if (target.closest("a")) return;
        onToggleFocus();
      }}
    >
      <div className="p-6 sm:p-7 space-y-5">
        {/* Top Header & Metadata */}
        <div className="flex items-center justify-between text-xs font-mono-meta pb-3 border-b border-neutral-200 dark:border-neutral-800/80">
          <div className="flex items-center space-x-2">
            <span className="text-blue-700 dark:text-blue-400 font-bold">{indexFormatted}</span>
            <span className="text-neutral-400 dark:text-neutral-600">{"//"}</span>
            <span className="text-neutral-600 dark:text-neutral-400">PROJECT</span>
          </div>

          <div className="flex items-center space-x-2.5">
            {project.language && (
              <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 font-medium">
                {project.language}
              </span>
            )}
            {project.stars > 0 && (
              <span className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-400">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>{project.stars}</span>
              </span>
            )}
            {project.forks > 0 && (
              <span className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-400">
                <GitFork className="w-3 h-3 text-neutral-500" />
                <span>{project.forks}</span>
              </span>
            )}

            {isFocused && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFocus();
                }}
                className="p-1 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ml-1"
                aria-label="Close inspector"
                title="Collapse details"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Project Visual */}
        {project.image && (
          <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              priority={index === 0}
            />
            {isDimmed && (
              <div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-[0.5px] flex items-center justify-center">
                <span className="px-2.5 py-1 text-[11px] font-mono-meta rounded bg-neutral-900/80 text-white border border-neutral-700 backdrop-blur-xs">
                  Click to focus
                </span>
              </div>
            )}
          </div>
        )}

        {/* Title & Tagline */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
            {project.title}
          </h3>
          {project.tagline && (
            <p className="font-mono-meta text-xs text-blue-700 dark:text-blue-400 mt-1 font-medium">
              {project.tagline}
            </p>
          )}
          <p className="font-editorial mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[11px] font-mono-meta rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-300/70 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Focus Toggle Trigger Hint */}
        {!isFocused && (
          <div className="pt-2 flex items-center justify-between text-xs font-mono-meta text-neutral-500 dark:text-neutral-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
            <span className="flex items-center space-x-1.5 font-medium">
              <span>Inspect architecture & lessons</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <ChevronDown className="w-4 h-4 opacity-60" />
          </div>
        )}

        {/* Detailed Inspector Drawer (revealed when focused) */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-5 pt-4 border-t border-neutral-200 dark:border-neutral-800"
            >
              {/* Story / Motivation */}
              {project.story && (
                <div className="rounded-lg p-4 bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800/80 space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400">
                    <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold uppercase tracking-wider">Behind The Build</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                    {project.story}
                  </p>
                </div>
              )}

              {/* Architecture breakdown */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono-meta text-neutral-700 dark:text-neutral-300 font-semibold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>System Architecture</span>
                  </div>
                  <div className="space-y-1.5">
                    {project.architecture.map((item, i) => (
                      <div
                        key={i}
                        className="text-xs font-mono-meta p-2.5 rounded bg-neutral-100/80 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60 text-neutral-800 dark:text-neutral-200 leading-snug flex items-start space-x-2"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">{i + 1}.</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What I Learned */}
              {project.learned && (
                <div className="rounded-lg p-4 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs font-mono-meta text-amber-700 dark:text-amber-400">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span className="font-semibold uppercase tracking-wider">What I Learned Along The Way</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans">
                    {project.learned}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Links & Multi-Repo Support */}
      <div className="p-6 sm:p-7 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-meta bg-neutral-50/50 dark:bg-neutral-900/40">
        <div className="flex flex-wrap items-center gap-2">
          {project.githubRepos && project.githubRepos.length > 0 ? (
            project.githubRepos.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-500/50 transition-colors font-medium shadow-2xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{repo.label}</span>
              </a>
            ))
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-500/50 transition-colors font-medium shadow-2xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SOURCE REPO</span>
            </a>
          )}
        </div>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-blue-700 dark:text-blue-400 hover:underline font-bold"
          >
            <span>LIVE PRODUCTION</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
