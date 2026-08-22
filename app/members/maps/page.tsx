"use client";

import { useMemo, useState } from "react";
import { placeCategories } from "../../membership-config";
import { demoPlaces } from "../demo-data";

export default function MemberMapsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [destination, setDestination] = useState("Lisbon");

  const destinations = useMemo(
    () => Array.from(new Set(demoPlaces.map((place) => place.destination))),
    [],
  );

  const places = demoPlaces.filter((place) => {
    if (place.destination !== destination) return false;
    if (filter === "All") return true;
    return place.category === filter;
  });

  return (
    <main className="members-page members-maps">
      <header className="members-hero">
        <p className="eyebrow">Maps</p>
        <h1 className="display-title">Private recommendations</h1>
        <p className="lede">
          Filter by category. Open any place in Google Maps. Full Mapbox
          embedding connects when keys are configured.
        </p>
      </header>

      <div className="members-map-toolbar">
        <label>
          <span>Destination</span>
          <select
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          >
            {destinations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <div className="members-filter-row" role="group" aria-label="Category">
          {["All", ...placeCategories].map((item) => (
            <button
              key={item}
              type="button"
              className={
                filter === item
                  ? "members-filter is-active"
                  : "members-filter"
              }
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="members-map-layout">
        <div className="members-map-canvas" aria-hidden="true">
          <p>Map view</p>
          <p>
            Provider-ready slot (Mapbox / Google). List below works without a
            key.
          </p>
        </div>
        <ul className="members-place-list">
          {places.map((place) => (
            <li key={place.id}>
              <article className="members-place-card">
                <img src={place.image} alt="" loading="lazy" />
                <div>
                  <p className="eyebrow">
                    {place.category} · {place.neighbourhood}
                  </p>
                  <h2>{place.name}</h2>
                  <p>{place.note}</p>
                  <p className="members-place-actions">
                    <a
                      className="text-link"
                      href={place.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Google Maps
                    </a>
                    <button type="button" className="members-save">
                      Save
                    </button>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
