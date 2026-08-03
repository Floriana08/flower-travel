"use client";

import { useEffect, useRef } from "react";

const DEFAULT_POSTER =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80";

const MED_POSTER =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80";

export function HeroOceanVideo({
  className = "hero-media",
  src = "/videos/ocean-waves.mp4",
  poster = DEFAULT_POSTER,
}: {
  className?: string;
  src?: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tryPlay = () => {
      if (mediaQuery.matches) {
        video.pause();
        return;
      }
      void video.play().catch(() => {
        /* Autoplay can be blocked; poster remains visible. */
      });
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    mediaQuery.addEventListener("change", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      mediaQuery.removeEventListener("change", tryPlay);
    };
  }, [src]);

  return (
    <div className={className} aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        src={src}
      />
    </div>
  );
}

export const mediterraneanVideo = {
  src: "/videos/mediterranean-coast.mp4",
  poster: MED_POSTER,
} as const;
