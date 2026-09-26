import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, User } from "lucide-react";

export function WorldChaptersOverview() {
  return (
    <section id="worlds-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
      {/* Editorial Chapter Header */}
      <div className="border-b border-neutral-300 dark:border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono-meta text-blue-700 dark:text-blue-400 font-bold">
            WHERE MY CURIOSITY LIVES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Things I Build, Notice, and Care About
          </h2>
        </div>
        <p className="font-editorial text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-md">
          A personal look into what keeps me busy — writing code and building systems, walking around with a camera, geeking out over cinema, and figuring out what comes next.
        </p>
      </div>

      {/* Chapter 01: CODE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-800 dark:text-blue-400 border border-blue-600/30 dark:border-blue-500/20 font-mono-meta text-xs font-bold">
              01
            </span>
            <span className="font-mono-meta text-xs tracking-widest text-neutral-600 dark:text-neutral-400 font-semibold">
              THINGS I CODE
            </span>
            <span className="font-script-elegant text-lg text-blue-700 dark:text-blue-400">
              building &amp; learning
            </span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            CODE // <span className="text-blue-700 dark:text-blue-400">SOFTWARE &amp; EXPERIMENTS</span>
          </h3>
          <p className="font-editorial text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Projects I&apos;ve been hacking on — full-stack applications, developer tools, and AI experiments focused on clean architecture and solving genuine everyday problems.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono-meta text-neutral-800 dark:text-neutral-300">
            <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-300/80 dark:border-neutral-700">
              HEALTHHUB
            </span>
            <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-300/80 dark:border-neutral-700">
              AI-RESUME-ANALYZER
            </span>
            <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-300/80 dark:border-neutral-700">
              PRIVATEDOC-AI
            </span>
          </div>
          <div>
            <Link
              href="/code"
              className="inline-flex items-center space-x-2 text-sm font-mono-meta text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-bold group"
            >
              <span>BROWSE CODE PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Link
            href="/code"
            className="block group relative aspect-video rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-neutral-900 shadow-md"
          >
            <Image
              src="/images/projects/healthhub.png"
              alt="HealthHub Project Interface"
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 58vw, 750px"
              className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-xs font-mono-meta text-blue-400 font-semibold mb-1">
                  FEATURED FULL-STACK PLATFORM
                </div>
                <div className="font-display text-lg font-bold">HealthHub Healthcare Suite</div>
                <div className="text-xs text-neutral-300 font-mono-meta">React // Node.js // MongoDB // Role Architecture</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Chapter 02: FRAME (PERSONAL PHOTOGRAPHY) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-neutral-300 dark:border-neutral-800 pt-16">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/frame"
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-xs"
            >
              <Image
                src="/images/frame/jog-falls.jpg"
                alt="Jog Falls Monsoon Torrent"
                fill
                sizes="(max-width: 1024px) 50vw, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/75 backdrop-blur-sm rounded text-[10px] font-mono-meta text-white font-semibold">
                JOG FALLS // 253M
              </div>
            </Link>
            <Link
              href="/frame"
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-xs"
            >
              <Image
                src="/images/frame/western-ghats-falls.jpg"
                alt="Western Ghats Cascades"
                fill
                sizes="(max-width: 1024px) 50vw, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/75 backdrop-blur-sm rounded text-[10px] font-mono-meta text-white font-semibold">
                WESTERN GHATS // FIELD
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-600/30 dark:border-amber-500/20 font-mono-meta text-xs font-bold">
              02
            </span>
            <span className="font-mono-meta text-xs tracking-widest text-neutral-600 dark:text-neutral-400 font-semibold">
              THINGS I NOTICE
            </span>
            <span className="font-script-elegant text-lg text-amber-700 dark:text-amber-400">
              camera in hand
            </span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            FRAME // <span className="text-amber-700 dark:text-amber-400">PERSONAL PHOTOGRAPHS</span>
          </h3>
          <p className="font-editorial text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            A personal collection of photographs taken while exploring Karnataka — landscapes, waterfalls, tea estates, quiet lakes, and everyday perspectives that caught my attention.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono-meta text-neutral-800 dark:text-neutral-300">
            <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-300/80 dark:border-neutral-700">
              CANON OPTICS
            </span>
            <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-300/80 dark:border-neutral-700">
              NATURAL LIGHT
            </span>
            <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-300/80 dark:border-neutral-700">
              MOMENTS CAPTURED
            </span>
          </div>
          <div>
            <Link
              href="/frame"
              className="inline-flex items-center space-x-2 text-sm font-mono-meta text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 font-bold group"
            >
              <span>VIEW PERSONAL PHOTOGRAPHS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Chapter 03: SCREEN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-neutral-300 dark:border-neutral-800 pt-16">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-800 dark:text-purple-400 border border-purple-600/30 dark:border-purple-500/20 font-mono-meta text-xs font-bold">
              03
            </span>
            <span className="font-mono-meta text-xs tracking-widest text-neutral-600 dark:text-neutral-400 font-semibold">
              THINGS I WATCH
            </span>
            <span className="font-script-expressive text-lg text-purple-700 dark:text-purple-400">
              theatre &amp; cinema
            </span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            SCREEN // <span className="text-purple-700 dark:text-purple-400">MOVIES &amp; STORIES</span>
          </h3>
          <p className="font-editorial text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            The movies and storytelling that shaped my imagination — Tony Stark&apos;s workshop engineering, Nolan&apos;s cosmic physics, racing velocity, and the raw narrative energy of Kannada cinema.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-meta text-neutral-800 dark:text-neutral-300 font-semibold">
            <div className="p-2 border border-neutral-300/80 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900">
              MARVEL &amp; IRON MAN
            </div>
            <div className="p-2 border border-neutral-300/80 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900">
              INTERSTELLAR &amp; SCI-FI
            </div>
            <div className="p-2 border border-neutral-300/80 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900">
              FORD V FERRARI
            </div>
            <div className="p-2 border border-neutral-300/80 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900">
              KANNADA CINEMA
            </div>
          </div>
          <div>
            <Link
              href="/screen"
              className="inline-flex items-center space-x-2 text-sm font-mono-meta text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-bold group"
            >
              <span>ENTER CINEMA ARCHIVE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="p-8 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-xs space-y-4">
            <div className="text-xs font-mono-meta text-purple-700 dark:text-purple-400 font-bold">
              CINEMA // 7,000 RPM
            </div>
            <blockquote className="font-editorial text-xl sm:text-2xl italic text-neutral-900 dark:text-neutral-100 leading-snug">
              &ldquo;There&apos;s a point at 7,000 RPM where everything fades. The machine becomes weightless. Just disappears. And all that&apos;s left is a body moving through space and time.&rdquo;
            </blockquote>
            <div className="text-xs font-mono-meta text-neutral-600 dark:text-neutral-400 font-medium">
              — FORD V FERRARI (2019) // ANALOG VELOCITY
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 04: ABOUT Preview */}
      <div className="border-t border-neutral-300 dark:border-neutral-800 pt-16">
        <div className="p-8 sm:p-12 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-meta text-blue-700 dark:text-blue-400 font-bold">
              <User className="w-4 h-4" />
              <span>THE PERSON // BEHIND THE WORK</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              About Me: Vishwas S K
            </h3>
            <p className="font-editorial text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Engineering student at Rajarajeswari College of Engineering (RRCE) in Bengaluru, graduating in 2027. Originally from Shikaripura in Shivamogga, figuring things out and building along the way.
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-mono-meta text-xs tracking-wider font-bold hover:opacity-90 transition-opacity shadow-xs"
            >
              <span>MEET VISHWAS (FULL ABOUT)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
