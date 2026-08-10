"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useRef } from "react";

type EditorialCarouselProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  viewAllHref?: string;
  viewAllLabel?: string;
  ariaLabel: string;
  children: ReactNode;
};

export function EditorialCarousel({
  eyebrow,
  title,
  intro,
  viewAllHref,
  viewAllLabel = "View all",
  ariaLabel,
  children,
}: EditorialCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: "prev" | "next") {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const card = rail.querySelector<HTMLElement>(
      ".story-card, .journal-mood-slide, .editorial-story-card",
    );
    const gap = 16;
    const distance = card ? card.offsetWidth + gap : 420;

    rail.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <section className="editorial-carousel">
      <div className="editorial-carousel-header">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="editorial-carousel-title-row">
          <h2>{title}</h2>
          <div className="editorial-carousel-controls">
            {viewAllHref ? (
              <Link className="editorial-carousel-view-all" href={viewAllHref}>
                {viewAllLabel}
              </Link>
            ) : null}
            <button
              type="button"
              className="editorial-carousel-control"
              aria-label="Previous slide"
              onClick={() => scrollByCard("prev")}
            >
              ←
            </button>
            <button
              type="button"
              className="editorial-carousel-control"
              aria-label="Next slide"
              onClick={() => scrollByCard("next")}
            >
              →
            </button>
          </div>
        </div>
        {intro ? <div className="editorial-carousel-intro">{intro}</div> : null}
      </div>

      <div
        ref={railRef}
        className="editorial-carousel-rail"
        aria-label={ariaLabel}
      >
        <div className="editorial-carousel-track">{children}</div>
      </div>
    </section>
  );
}
