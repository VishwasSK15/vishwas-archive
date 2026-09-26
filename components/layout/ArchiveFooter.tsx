import Link from "next/link";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  LeetCodeIcon,
} from "@/components/icons/SocialIcons";
import { ArchiveLogo } from "./ArchiveLogo";

export function ArchiveFooter() {
  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-800 bg-[#f9f9f7] dark:bg-[#090a0d] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-10">
        {/* Brand & Genuine Student Intro */}
        <div className="max-w-md space-y-3">
          <div className="flex items-center space-x-3">
            <ArchiveLogo size="sm" />
            <div className="flex items-baseline space-x-2">
              <span className="font-display font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
                VISHWAS
              </span>
              <span className="text-neutral-500 font-mono-meta text-xs">{"//"}</span>
              <span className="font-mono-meta text-xs text-neutral-600 dark:text-neutral-400 tracking-widest font-semibold">
                THE ARCHIVE
              </span>
            </div>
          </div>
          <p className="font-editorial text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I&apos;m an engineering student in my twenties living in Bengaluru, figuring out what I enjoy and want to pursue — from building full-stack software and tinkering with code, to exploring Karnataka with a camera, geeking out over movies, and learning every day along the way.
          </p>
          <div className="flex items-center space-x-2 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400">
            <span>BENGALURU, KARNATAKA</span>
            <span>•</span>
            <span>RRCE &apos;27</span>
          </div>
        </div>

        {/* Directory Links & Verified Contacts */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14">
          <div>
            <div className="text-[11px] font-mono-meta text-neutral-600 dark:text-neutral-400 font-bold uppercase tracking-widest mb-3">
              The Four Worlds
            </div>
            <ul className="space-y-2 text-xs font-mono-meta">
              <li>
                <Link
                  href="/code"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  01 // CODE
                </Link>
              </li>
              <li>
                <Link
                  href="/frame"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  02 // FRAME
                </Link>
              </li>
              <li>
                <Link
                  href="/screen"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                >
                  03 // SCREEN
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  04 // ABOUT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-mono-meta text-neutral-600 dark:text-neutral-400 font-bold uppercase tracking-widest mb-3">
              Profiles & Contact
            </div>
            <ul className="space-y-2 text-xs font-mono-meta">
              <li>
                <a
                  href="https://github.com/VishwasSK15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB // @VishwasSK15</span>
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/vishwassk15/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5" />
                  <span>LEETCODE // vishwassk15</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vishu_._15/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>INSTAGRAM // vishu_._15</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vishwas-sk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN // vishwas-sk</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vishwasskshikaripura@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Vishwas%20S%20K"
                  className="inline-flex items-start sm:items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors py-1"
                >
                  <Mail className="w-3.5 h-3.5 mt-0.5 sm:mt-0 shrink-0" />
                  <span className="break-all">EMAIL // vishwasskshikaripura@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-neutral-300/70 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 font-mono-meta text-center sm:text-left gap-2 sm:gap-0">
        <div>© {new Date().getFullYear()} VISHWAS S K &middot; ALL RIGHTS RESERVED</div>
        <div>STUDENT ARCHIVE &middot; BENGALURU</div>
      </div>
    </footer>
  );
}
