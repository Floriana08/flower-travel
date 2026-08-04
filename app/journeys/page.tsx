import type { Metadata } from "next";
import Link from "next/link";
import { DestinationItineraryTabs } from "../destination-itinerary-tabs";
import { JourneysCinemaVideo } from "../journeys-cinema-video";
import { studioCountries } from "../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Curated Altrove journeys — collections of hotels, neighbourhoods and routes worth remembering.",
  alternates: {
    canonical: "https://altrove.studio/journeys",
  },
};

export default function JourneysPage() {
  return (
    <main className="journeys-studio">
      <header className="section-shell page-top journeys-studio-hero">
        <p className="eyebrow">Journeys</p>
        <h1 className="display-title">
          Curated collections,
          <br />
          not checklists.
        </h1>
        <p className="journeys-studio-single-lede">
          Hotels, neighbourhoods and routes — chosen with taste, paced with
          care. Fewer bases. More to remember.
        </p>
      </header>

      <section
        className="section-shell journeys-collection-strip"
        aria-label="Countries"
      >
        <div className="journeys-collection-grid">
          {studioCountries.map((country) => (
            <Link
              key={country.slug}
              className="journeys-collection-card"
              href={`/journeys/${country.slug}`}
            >
              <img
                src={country.image}
                srcSet={unsplashSrcSet(country.image)}
                sizes={defaultImageSizes}
                alt={country.alt}
                loading="lazy"
              />
              <span>
                <strong>{country.title}</strong>
                <em>Explore</em>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="journeys-days-cinema"
        aria-label="How a journey unfolds"
      >
        <JourneysCinemaVideo />
        <div className="journeys-days-cinema-inner section-shell">
          <div className="home-section-head journeys-days-head">
            <p className="eyebrow">Inside a journey</p>
            <h2 className="display-title">How the days unfold</h2>
          </div>
          <DestinationItineraryTabs />
        </div>
      </section>
    </main>
  );
}
