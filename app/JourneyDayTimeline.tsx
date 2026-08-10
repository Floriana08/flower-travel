"use client";

import { useEffect, useRef, useState } from "react";
import type { ItineraryDay } from "./studio-structure";

type JourneyDayTimelineProps = {
  days: ItineraryDay[];
  intro?: string;
  lede?: string;
};

export function JourneyDayTimeline({
  days,
  intro,
  lede,
}: JourneyDayTimelineProps) {
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(() =>
    days.map(() => false),
  );

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setVisible(days.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(
            (entry.target as HTMLElement).dataset.dayIndex ?? -1,
          );
          if (index < 0) return;
          setVisible((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.45, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [days]);

  const progress = visible.filter(Boolean).length;
  const progressRatio =
    days.length <= 1 ? (progress ? 1 : 0) : (progress - 1) / (days.length - 1);

  return (
    <section
      className="journey-day-timeline section-shell tinted"
      aria-label="How the days unfold"
    >
      {intro ? <p className="journey-day-timeline-intro">{intro}</p> : null}
      {lede ? <p className="journey-day-timeline-lede">{lede}</p> : null}

      <div
        className="journey-day-timeline-rail"
        style={{
          ["--timeline-progress" as string]: String(
            Math.max(0, Math.min(1, progressRatio)),
          ),
        }}
      >
        <span className="journey-day-timeline-track" aria-hidden="true" />
        <span className="journey-day-timeline-progress" aria-hidden="true" />
        <ol className="journey-day-timeline-list">
          {days.map((day, index) => (
            <li
              key={`${day.label}-${day.title}`}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              data-day-index={index}
              className={
                visible[index]
                  ? "journey-day-timeline-item is-in"
                  : "journey-day-timeline-item"
              }
              style={{ ["--day-index" as string]: index }}
            >
              <span className="journey-day-timeline-point" aria-hidden="true" />
              <div className="journey-day-timeline-copy">
                <p className="journey-day-timeline-label">{day.label}</p>
                <h3>{day.title}</h3>
                {day.note ? <p>{day.note}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
