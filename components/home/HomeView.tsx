"use client";

import { useState, useEffect, useCallback } from "react";
import { HeroArchive } from "./HeroArchive";
import { WorldChaptersOverview } from "./WorldChaptersOverview";
import { ArchiveIntro } from "@/components/intro/ArchiveIntro";
import type { FramePhoto } from "@/lib/types";

// Track in-memory SPA navigation so internal transitions remain smooth,
// while every browser refresh/reload resets memory and ALWAYS plays the intro.
let globalIntroPlayedInSession = false;

interface HomeViewProps {
  framePhotos?: FramePhoto[];
}

export function HomeView({ framePhotos = [] }: HomeViewProps) {
  const [introDismissed, setIntroDismissed] = useState(() => globalIntroPlayedInSession);

  const showIntro = !introDismissed;

  const handleComplete = useCallback(() => {
    setIntroDismissed(true);
    globalIntroPlayedInSession = true;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showIntro) {
        handleComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showIntro, handleComplete]);

  return (
    <div className="w-full relative">
      {showIntro && <ArchiveIntro onComplete={handleComplete} />}
      <HeroArchive />
      <WorldChaptersOverview framePhotos={framePhotos} />
    </div>
  );
}
