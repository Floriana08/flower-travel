"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  mapCategoryLabels,
  type MapLocation,
  type MapLocationCategory,
} from "./locations";

/**
 * TravelMap — provider-agnostic shell.
 * Phase 3 will mount MapLibre GL (recommended) or Mapbox using
 * NEXT_PUBLIC_MAP_STYLE_URL / NEXT_PUBLIC_MAPBOX_TOKEN.
 * Until then, this renders an accessible list + filter UI over structured pins.
 */
export function TravelMap({
  locations,
  title = "Saved places",
}: {
  locations: MapLocation[];
  title?: string;
}) {
  const [activeCategory, setActiveCategory] = useState<MapLocationCategory | "all">(
    "all",
  );
  const [selectedId, setSelectedId] = useState<string | null>(
    locations[0]?.id ?? null,
  );
  const [mode, setMode] = useState<"list" | "map">("list");

  const categories = useMemo(() => {
    const set = new Set(locations.map((item) => item.category));
    return Array.from(set);
  }, [locations]);

  const filtered = locations.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );
  const selected = filtered.find((item) => item.id === selectedId) ?? filtered[0];

  return (
    <section className="travel-map" aria-label={title}>
      <div className="travel-map-toolbar">
        <div className="travel-map-modes" role="tablist" aria-label="Map view">
          <button
            type="button"
            className={mode === "list" ? "is-active" : undefined}
            role="tab"
            aria-selected={mode === "list"}
            onClick={() => setMode("list")}
          >
            List
          </button>
          <button
            type="button"
            className={mode === "map" ? "is-active" : undefined}
            role="tab"
            aria-selected={mode === "map"}
            onClick={() => setMode("map")}
          >
            Map
          </button>
        </div>
        <div className="map-filter" role="group" aria-label="Filter by category">
          <button
            type="button"
            className={activeCategory === "all" ? "is-active" : undefined}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "is-active" : undefined}
              onClick={() => setActiveCategory(category)}
            >
              {mapCategoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      {mode === "map" ? (
        <div className="travel-map-canvas" role="status">
          <p className="eyebrow">Interactive map</p>
          <h3>Map provider coming next</h3>
          <p>
            Location data is ready. The live map layer will use MapLibre with
            OpenStreetMap tiles so no paid API key is required for the first
            release. Filters and pins below already work from structured data.
          </p>
          {selected ? (
            <MapLocationCard location={selected} />
          ) : (
            <p>No places in this filter.</p>
          )}
        </div>
      ) : null}

      <div className="travel-map-split">
        <ul className="map-location-list">
          {filtered.map((location) => (
            <li key={location.id}>
              <button
                type="button"
                className={
                  selected?.id === location.id
                    ? "map-location-button is-active"
                    : "map-location-button"
                }
                onClick={() => {
                  setSelectedId(location.id);
                  setMode("list");
                }}
              >
                <span className="map-location-kicker">
                  {mapCategoryLabels[location.category]}
                  {location.florPick ? " · Flor’s Pick" : ""}
                </span>
                <strong>{location.name}</strong>
                <span>{location.city}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="map-location-preview">
          {selected ? (
            <MapLocationCard location={selected} />
          ) : (
            <p>Select a place to preview it.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function MapLocationCard({ location }: { location: MapLocation }) {
  return (
    <article className="map-location-card">
      <p className="eyebrow">
        {mapCategoryLabels[location.category]}
        {location.florPick ? " · Flor’s Pick" : ""}
      </p>
      <h3>{location.name}</h3>
      <p>{location.shortDescription}</p>
      <p className="map-location-meta">
        {location.city}, {location.country}
        {location.address ? ` · ${location.address}` : ""}
      </p>
      {location.articleSlug ? (
        <Link className="text-link" href={`/travel-guides/${location.articleSlug}`}>
          Related story
        </Link>
      ) : null}
    </article>
  );
}

export function MapLegend({ categories }: { categories: MapLocationCategory[] }) {
  return (
    <ul className="map-legend" aria-label="Map legend">
      {categories.map((category) => (
        <li key={category}>{mapCategoryLabels[category]}</li>
      ))}
    </ul>
  );
}
