"use client";

import { useEffect, useRef } from "react";

/** Distinct Mediterranean coastline loop for the Journeys page only. */
const SRC = "/videos/amalfi-coast-loop.mp4?v=4";
const POSTER =
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2200&q=80";

export function JourneysCinemaVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.load();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tryPlay = () => {
      if (mediaQuery.matches) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
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
    <div className="journeys-days-video" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video journeys-cinema-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
      >
        <source src={SRC} type="video/mp4" />
      </video>
    </div>
  );
}
