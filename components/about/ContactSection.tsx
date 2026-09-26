"use client";

import { useState } from "react";
import { Mail, Copy, Check, ExternalLink, MessageSquare, Briefcase, User, GraduationCap } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  LeetCodeIcon,
} from "@/components/icons/SocialIcons";

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<"professional" | "personal" | "college">("professional");
  const [copied, setCopied] = useState(false);

  const emailMap = {
    professional: {
      address: "vishwasskshikaripura@gmail.com",
      label: "PROFESSIONAL & COLLABORATIONS",
      desc: "For project inquiries, internships, software work, or engineering discussions.",
      subject: "Portfolio Inquiry — Vishwas S K",
      icon: Briefcase,
    },
    personal: {
      address: "vishwas15sk@gmail.com",
      label: "PERSONAL & CASUAL",
      desc: "For general chats about cameras, Western Ghats trails, cinema, or F1.",
      subject: "Hey Vishwas — Say Hello",
      icon: User,
    },
    college: {
      address: "vishwas2027cserrce@gmail.com",
      label: "COLLEGE & ACADEMICS",
      desc: "For RRCE coursework, hackathons, student teams, and peer collaborations.",
      subject: "Academic Inquiry / RRCE — Vishwas S K",
      icon: GraduationCap,
    },
  };

  const current = emailMap[activeTab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-8 sm:p-12 shadow-sm space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-meta text-blue-700 dark:text-blue-400 font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Get In Touch
          </h2>
          <p className="font-editorial text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
            Whether you want to discuss full-stack projects, collaborate on software, chat about trails across Karnataka, or talk cinema and F1 — my inbox is open.
          </p>
        </div>

        <div className="text-xs font-mono-meta px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-medium self-start sm:self-auto">
          ● AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>

      {/* Category Tabs for Email */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 text-xs font-mono-meta">
          {(["professional", "personal", "college"] as const).map((tab) => {
            const TabIcon = emailMap[tab].icon;
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setCopied(false);
                }}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg border transition-all cursor-pointer font-semibold ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 hover:border-blue-400"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span className="uppercase">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Email Box */}
        <div className="p-5 sm:p-8 rounded-xl bg-neutral-100/70 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left w-full md:w-auto">
            <div className="text-xs font-mono-meta text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wider">
              {current.label}
            </div>
            <div className="font-display text-base xs:text-lg sm:text-2xl font-bold text-neutral-900 dark:text-white select-all break-all sm:break-normal">
              {current.address}
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-editorial">
              {current.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 w-full md:w-auto shrink-0">
            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:border-blue-500 text-xs font-mono-meta font-semibold transition-all shadow-2xs cursor-pointer min-h-[44px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-500" />
                  <span>COPY</span>
                </>
              )}
            </button>

            {/* Direct Send Link with Subject */}
            <a
              href={`mailto:${current.address}?subject=${encodeURIComponent(current.subject)}`}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono-meta font-semibold transition-colors shadow-2xs min-h-[44px]"
            >
              <Mail className="w-4 h-4" />
              <span>SEND EMAIL</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Social, Code & Platform Profiles */}
      <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono-meta">
        <a
          href="https://github.com/VishwasSK15"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-colors font-medium shadow-2xs min-h-[44px]"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GITHUB // @VishwasSK15</span>
        </a>

        <a
          href="https://leetcode.com/u/vishwassk15/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/50 transition-colors font-medium shadow-2xs min-h-[44px]"
        >
          <LeetCodeIcon className="w-4 h-4" />
          <span>LEETCODE // vishwassk15</span>
        </a>

        <a
          href="https://www.instagram.com/vishu_._15/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/50 transition-colors font-medium shadow-2xs min-h-[44px]"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>INSTAGRAM // vishu_._15</span>
        </a>

        <a
          href="https://www.linkedin.com/in/vishwas-sk/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-colors font-medium shadow-2xs min-h-[44px]"
        >
          <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>LINKEDIN // vishwas-sk</span>
        </a>
      </div>
    </section>
  );
}
