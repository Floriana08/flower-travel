import type { Metadata } from "next";
import Link from "next/link";
import {
  getGuideProductsForCountry,
  getHubJournalStories,
  getJourneysForCountry,
  studioCountries,
} from "../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Begin with a place, Italy, Portugal and Spain, the parts of Europe Altrove knows well enough to edit carefully.",
  alternates: {
    canonical: "https://altrove.studio/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <main className="destinations-index">
      <header className="section-shell page-top destinations-index-hero">
        <p className="eyebrow">Destinations</p>
        <h1 className="display-title">Begin with a place.</h1>
        <p className="destinations-index-lede">
          We start where we know best: Italy, Portugal and Spain. A smaller,
          deliberately curated library, not everywhere on the map.
        </p>
      </header>

      <div className="section-shell">
        {studioCountries.map((country) => {
          const journeys = getJourneysForCountry(country.slug);
          const stories = getHubJournalStories(country.slug);
          const guides = getGuideProductsForCountry(country.slug);
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
                      {journeys.length} journey{journeys.length === 1 ? "" : "s"}
                    </span>
                    <span>
                      {stories.length} journal{" "}
                      {stories.length === 1 ? "story" : "stories"}
                    </span>
                    <span>
                      {guides.length} guide{guides.length === 1 ? "" : "s"}
                    </span>
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
