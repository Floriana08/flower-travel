"use client";

import Link from "next/link";
import { useState } from "react";
import {
  studioCountries,
  type StudioCountry,
  type StudioCountrySlug,
} from "./studio-structure";

export function DestinationItineraryTabs({
  initial = "italy",
}: {
  initial?: StudioCountrySlug;
}) {
  const [active, setActive] = useState<StudioCountrySlug>(initial);
  const country =
    studioCountries.find((item) => item.slug === active) ?? studioCountries[0];

  return (
    <div className="journey-dest-tabs">
      <div
        className="journey-dest-tablist"
        role="tablist"
        aria-label="Choose a destination"
      >
        {studioCountries.map((item) => {
          const selected = item.slug === active;
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              id={`tab-${item.slug}`}
              aria-selected={selected}
              aria-controls={`panel-${item.slug}`}
              className={`journey-dest-tab${selected ? " is-active" : ""}`}
              onClick={() => setActive(item.slug)}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {country ? (
        <ItineraryPanel key={country.slug} country={country} />
      ) : null}
    </div>
  );
}

function ItineraryPanel({ country }: { country: StudioCountry }) {
  const { example } = country;

  return (
    <div
      className="journey-dest-panel"
      role="tabpanel"
      id={`panel-${country.slug}`}
      aria-labelledby={`tab-${country.slug}`}
    >
      <div className="journey-dest-panel-head">
        <p className="eyebrow">{country.title}</p>
        <h2 className="display-title">{example.title}</h2>
        <p className="journey-dest-meta">{example.duration}</p>
        <p className="journey-dest-lede">{example.lede}</p>
      </div>

      <ol className="journey-day-list">
        {example.days.map((day, index) => (
          <li
            key={`${day.label}-${day.title}`}
            style={{ ["--day-index" as string]: index }}
          >
            <p className="journey-day-label">{day.label}</p>
            <h3>{day.title}</h3>
            {day.note ? <p>{day.note}</p> : null}
          </li>
        ))}
      </ol>

      <div className="journey-dest-cta">
        <p className="eyebrow">Plan a trip</p>
        <h3 className="display-title">
          If you love this rhythm, ask us to plan yours.
        </h3>
        <p>Personalised itinerary design around the way you like to travel.</p>
        <div className="journey-dest-cta-actions">
          <Link className="button dark" href="/plan-a-trip">
            Plan My Trip
          </Link>
          <Link className="text-link" href={`/journeys/${country.slug}`}>
            {country.title} Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
