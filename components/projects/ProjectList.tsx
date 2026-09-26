"use client";

import { PortfolioProject } from "@/lib/types";
import { HorizontalProjectFocus } from "./HorizontalProjectFocus";
import { Terminal } from "lucide-react";

interface ProjectListProps {
  projects: PortfolioProject[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30">
        <Terminal className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
        <h4 className="text-lg font-bold font-mono-meta text-neutral-900 dark:text-white">
          NO REPOSITORIES CURRENTLY AVAILABLE
        </h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-md mx-auto">
          Add the topic &lsquo;portfolio&rsquo; to GitHub repositories under @VishwasSK15 to automatically surface them here.
        </p>
      </div>
    );
  }

  return <HorizontalProjectFocus projects={projects} />;
}
