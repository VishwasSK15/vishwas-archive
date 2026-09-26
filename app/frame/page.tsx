import { Metadata } from "next";
import { getFramePhotos } from "@/lib/frameImages";
import { PhotoGallery } from "@/components/frame/PhotoGallery";
import { WorldNavSequence } from "@/components/layout/WorldNavSequence";
import { getWorldById } from "@/data/worlds";
import { MapPin, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "02 // FRAME — VISHWAS // THE ARCHIVE",
  description:
    "A personal collection of moments lived, places noticed, and scenes captured across Karnataka by Vishwas S K.",
};

export default function FramePage() {
  const world = getWorldById("frame")!;
  const photos = getFramePhotos();

  return (
    <div className="w-full">
      {/* World Hero Section */}
      <section className="border-b border-neutral-300 dark:border-neutral-800 pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono-meta text-amber-700 dark:text-amber-400">
            <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-600/30 dark:border-amber-500/30 font-semibold">
              WORLD 02
            </span>
            <span>{"//"}</span>
            <span>I CAPTURE</span>
            <span>{"//"}</span>
            <span className="hidden sm:inline">MOMENTS & LIGHT</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase">
                FRAME
              </h1>
              <span className="font-script-elegant text-xl sm:text-2xl text-amber-800 dark:text-amber-300">
                Scenes I noticed
              </span>
            </div>
            <p className="font-editorial text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 max-w-3xl leading-relaxed italic">
              &ldquo;Moments lived, places noticed, scenes captured, things worth keeping.&rdquo;
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono-meta text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              <span>LOCATIONS: SHIVAMOGGA, WESTERN GHATS & BENGALURU</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>CLICK TO VIEW FULL FRAME</span>
            </div>
          </div>
        </div>
      </section>

      {/* Captured Moments Gallery — Pure Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PhotoGallery photos={photos} />
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
