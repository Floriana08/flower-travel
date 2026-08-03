import type { Metadata } from "next";
import Link from "next/link";
import { DestinationItineraryTabs } from "../destination-itinerary-tabs";
import { studioCountries } from "../studio-structure";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Curated Altrove journeys — collections of hotels, neighbourhoods and routes worth remembering.",
  alternates: {
    canonical: "https://flowertravel.studio/journeys",
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
        aria-label="Collections"
      >
        <div className="journeys-collection-grid">
          {studioCountries.map((country) => (
            <Link
              key={country.slug}
              className="journeys-collection-card"
              href={`/journeys/${country.slug}`}
            >
              <img src={country.image} alt={country.alt} loading="lazy" />
              <span>
                <strong>{country.title}</strong>
                <em>Collection</em>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="section-shell tinted journeys-studio-examples"
        aria-label="How a journey unfolds"
      >
        <div className="home-section-head">
          <p className="eyebrow">Inside a journey</p>
          <h2 className="display-title">How the days unfold</h2>
        </div>
        <DestinationItineraryTabs />
      </section>
    </main>
  );
}
