"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WorldIndex } from "./WorldIndex";
import { ThemeToggle } from "./ThemeToggle";
import { ArchiveLogo } from "./ArchiveLogo";

export function ArchiveHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9f9f7]/95 dark:bg-[#090a0d]/95 backdrop-blur-md border-b border-neutral-300 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Wordmark */}
        <Link
          href="/"
          className="group flex items-center space-x-2.5 text-neutral-900 dark:text-white focus:outline-none"
        >
          <ArchiveLogo size="sm" className="group-hover:scale-105 transition-transform" />
          <div className="flex items-baseline space-x-1.5 sm:space-x-2">
            <span className="font-display font-bold tracking-tight text-base sm:text-lg text-neutral-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              VISHWAS
            </span>
            <span className="text-neutral-500 font-mono-meta text-xs">
              {"//"}
            </span>
            <span className="font-mono-meta text-[10px] sm:text-xs text-neutral-700 dark:text-neutral-400 font-bold tracking-wider sm:tracking-widest">
              THE ARCHIVE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <WorldIndex variant="desktop" />
          <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-800" aria-hidden="true" />
          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-neutral-800 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle archive directory menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 sm:px-6 pt-3 pb-6 max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#f9f9f7] dark:bg-[#090a0d] border-b border-neutral-300 dark:border-neutral-800 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center space-x-2 mb-3">
            <ArchiveLogo size="xs" />
            <div className="text-[10px] font-mono-meta text-neutral-600 dark:text-neutral-400 uppercase tracking-widest font-bold">
              Archive Index
            </div>
          </div>
          <WorldIndex variant="mobile" onSelect={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
