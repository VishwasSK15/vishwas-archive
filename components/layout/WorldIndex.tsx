"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WORLDS } from "@/data/worlds";

interface WorldIndexProps {
  onSelect?: () => void;
  variant?: "desktop" | "mobile";
}

export function WorldIndex({ onSelect, variant = "desktop" }: WorldIndexProps) {
  const pathname = usePathname();

  if (variant === "mobile") {
    return (
      <nav className="flex flex-col space-y-4 py-4" aria-label="Mobile Archive Directory">
        {WORLDS.map((world) => {
          const isActive = pathname === world.route;
          return (
            <Link
              key={world.id}
              href={world.route}
              onClick={onSelect}
              className={`flex items-baseline justify-between py-3 border-b border-neutral-300/80 dark:border-neutral-800/80 transition-colors ${
                isActive
                  ? "text-blue-700 dark:text-blue-400 font-bold"
                  : "text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              }`}
            >
              <div className="flex items-baseline space-x-3">
                <span className="font-mono-meta text-xs text-neutral-600 dark:text-neutral-400">
                  {world.number}
                </span>
                <span className="font-display text-lg font-bold tracking-tight">
                  {world.label}
                </span>
              </div>
              <span className="font-mono-meta text-[11px] text-neutral-600 dark:text-neutral-400">
                {world.verb}
              </span>
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center space-x-6" aria-label="Archive Directory">
      {WORLDS.map((world) => {
        const isActive = pathname === world.route;
        return (
          <Link
            key={world.id}
            href={world.route}
            className={`group inline-flex items-center space-x-1.5 py-1 text-xs uppercase tracking-wider transition-colors ${
              isActive
                ? "text-blue-700 dark:text-blue-400 font-bold"
                : "text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium"
            }`}
          >
            <span
              className={`text-[10px] font-mono-meta transition-opacity ${
                isActive ? "opacity-100 font-bold" : "opacity-60 group-hover:opacity-100"
              }`}
            >
              {world.number}
            </span>
            <span className="font-display tracking-widest">{world.label}</span>
            {isActive && (
              <span
                className="w-1 h-1 rounded-full bg-blue-700 dark:bg-blue-400 ml-1 inline-block"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
