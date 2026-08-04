"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  mapCategoryLabels,
  type MapLocation,
  type MapLocationCategory,
} from "./locations";

type MapMode = "map" | "list";

const osmStyle = {
  version: 8 as const,
  sources: {
    osm: {
      type: "raster" as const,
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors",
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster" as const,
      source: "osm",
    },
  ],
};

function boundsFor(locations: MapLocation[]) {
  if (!locations.length) {
    return {
      center: [-8.2, 39.5] as [number, number],
      zoom: 6,
    };
  }
  const lats = locations.map((item) => item.latitude);
  const lngs = locations.map((item) => item.longitude);
  return {
    center: [
      (Math.min(...lngs) + Math.max(...lngs)) / 2,
      (Math.min(...lats) + Math.max(...lats)) / 2,
    ] as [number, number],
    zoom: locations.length === 1 ? 12 : 6.2,
  };
}

export function TravelMap({
  locations,
  title = "Saved places",
}: {
  locations: MapLocation[];
  title?: string;
}) {
  const [activeCategory, setActiveCategory] = useState<
    MapLocationCategory | "all"
  >("all");
  const [selectedId, setSelectedId] = useState<string | null>(
    locations[0]?.id ?? null,
  );
  const [mode, setMode] = useState<MapMode>("map");
  const [mapError, setMapError] = useState<string | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const mapNodeRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("maplibre-gl").Map | null>(null);
  const markersRef = useRef<import("maplibre-gl").Marker[]>([]);

  const categories = useMemo(() => {
    const set = new Set(locations.map((item) => item.category));
    return Array.from(set);
  }, [locations]);

  const filtered = useMemo(
    () =>
      locations.filter(
        (item) => activeCategory === "all" || item.category === activeCategory,
      ),
    [locations, activeCategory],
  );

  const selected =
    filtered.find((item) => item.id === selectedId) ?? filtered[0] ?? null;

  const filteredKey = filtered.map((item) => item.id).join("|");

  useEffect(() => {
    if (mode !== "map" || !mapNodeRef.current) return;
    let cancelled = false;

    async function mountMap() {
      try {
        const maplibre = await import("maplibre-gl");
        await import("maplibre-gl/dist/maplibre-gl.css");
        if (cancelled || !mapNodeRef.current) return;

        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }

        const visible = locations.filter(
          (item) =>
            activeCategory === "all" || item.category === activeCategory,
        );
        const { center, zoom } = boundsFor(visible);
        const map = new maplibre.Map({
          container: mapNodeRef.current,
          style: osmStyle,
          center,
          zoom,
          attributionControl: {},
        });

        map.addControl(
          new maplibre.NavigationControl({ showCompass: false }),
          "top-right",
        );
        mapRef.current = map;

        map.on("load", () => {
          if (cancelled) return;
          markersRef.current = visible.map((location) => {
            const el = document.createElement("button");
            el.type = "button";
            el.className = location.florPick
              ? "map-pin map-pin-flor"
              : "map-pin";
            el.setAttribute("aria-label", location.name);
            el.addEventListener("click", () => {
              setSelectedId(location.id);
            });

            return new maplibre.Marker({ element: el })
              .setLngLat([location.longitude, location.latitude])
              .addTo(map);
          });
          setMapReady(true);
          setMapError(null);
        });
      } catch (error) {
        console.error(error);
        setMapError("The map could not load. Switch to List view.");
        setMapReady(false);
      }
    }

    setMapReady(false);
    void mountMap();

    return () => {
      cancelled = true;
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mode, activeCategory, locations, filteredKey]);

  useEffect(() => {
    if (!mapRef.current || !selected || mode !== "map" || !mapReady) return;
    mapRef.current.flyTo({
      center: [selected.longitude, selected.latitude],
      zoom: Math.max(mapRef.current.getZoom(), 10),
      essential: true,
    });
  }, [selected, mode, mapReady]);

  return (
    <section className="travel-map" aria-label={title}>
      <div className="travel-map-toolbar">
        <div className="travel-map-modes" role="tablist" aria-label="Map view">
          <button
            type="button"
            className={mode === "map" ? "is-active" : undefined}
            role="tab"
            aria-selected={mode === "map"}
            onClick={() => setMode("map")}
          >
            Map
          </button>
          <button
            type="button"
            className={mode === "list" ? "is-active" : undefined}
            role="tab"
            aria-selected={mode === "list"}
            onClick={() => setMode("list")}
          >
            List
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
        <div className="travel-map-stage">
          <div
            ref={mapNodeRef}
            className="travel-map-canvas"
            role="application"
            aria-label="Portugal saved places map"
          />
          {!mapReady && !mapError ? (
            <p className="travel-map-status">Loading map…</p>
          ) : null}
          {mapError ? <p className="travel-map-status">{mapError}</p> : null}
          {selected ? (
            <div className="travel-map-floating-card">
              <MapLocationCard location={selected} />
            </div>
          ) : null}
        </div>
      ) : (
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
                  onClick={() => setSelectedId(location.id)}
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
      )}
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
