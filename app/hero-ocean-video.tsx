"use client";

import { useEffect, useRef } from "react";

const POSTER =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80";

export function HeroOceanVideo() {
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
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        src="/videos/ocean-waves.mp4"
      />
    </div>
  );
}
