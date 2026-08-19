import type { Metadata } from "next";
import Link from "next/link";
import {
  getHubJournalStories,
  getJourneysForCountry,
  studioCountries,
} from "../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Portugal, Italy and Spain — the places Altrove knows well enough to edit carefully. Journal notes, recommendations and sample journeys.",
  alternates: {
    canonical: "https://altrove.studio/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <main className="destinations-index">
      <header className="section-shell page-top destinations-index-hero">
        <p className="eyebrow">Destinations</p>
        <h1 className="display-title">Where we know the ground.</h1>
        <p className="destinations-index-lede">
          Portugal, Italy and Spain first — not because the rest of the world
          is uninteresting, but because we would rather recommend less, and
          mean it. The private beta can still take you elsewhere; those trips
          we research by hand.
        </p>
      </header>

      <div className="section-shell">
        {studioCountries.map((country) => {
          const journeys = getJourneysForCountry(country.slug);
          const stories = getHubJournalStories(country.slug);
          const regions = country.collections.map((c) => c.title).join(" · ");

          return (
            <section
              key={country.slug}
              className="destinations-country-block"
              aria-labelledby={`dest-${country.slug}`}
            >
              <div className="destinations-country-hero">
                <img
                  src={country.image}
                  srcSet={unsplashSrcSet(country.image)}
                  sizes={defaultImageSizes}
                  alt={country.alt}
                  loading="lazy"
                />
                <div className="destinations-country-meta">
                  <p className="eyebrow">{country.title}</p>
                  <h2 id={`dest-${country.slug}`} className="display-title">
                    {country.title}
                  </h2>
                  <p>{country.hubLede}</p>
                  <p className="destinations-country-regions">{regions}</p>
                  <p className="destinations-country-stats">
                    <span>
                      {stories.length} journal{" "}
                      {stories.length === 1 ? "story" : "stories"}
                    </span>
                    {journeys.length ? (
                      <span>
                        {journeys.length} sample{" "}
                        {journeys.length === 1 ? "journey" : "journeys"}
                      </span>
                    ) : null}
                  </p>
                  <Link className="text-link" href={`/destinations/${country.slug}`}>
                    Explore {country.title}
                  </Link>
                </div>
              </div>
            </section>
          );
        })}

        <p className="destinations-publish-slow">We publish slowly.</p>
      </div>
    </main>
  );
}
