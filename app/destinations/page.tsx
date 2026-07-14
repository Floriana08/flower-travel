import type { Metadata } from "next";
import Link from "next/link";
import { DestinationCard, PageHero, SectionHeading } from "../components";
import { destinations } from "../data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore curated Flower Travel destination guides for Portugal, France, Italy, Greece, Morocco, island escapes, city breaks, and future honeymoon routes.",
};

export default function DestinationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Destination atlas"
        title="A considered guide to where to go next."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=84"
        alt="A winding road through a dramatic mountain landscape"
      >
        <p>
          Destination pages are organized by atmosphere, season, travel style,
          and practical planning questions so readers can choose a place with
          confidence before they ever open a booking tab.
        </p>
      </PageHero>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Curated places"
          title="Start with a destination that matches the trip you actually want."
        >
          <p>
            Each guide is built to grow into hotel edits, neighborhood maps,
            downloadable mini guides, affiliate recommendations, and eventually
            fully curated travel planning.
          </p>
        </SectionHeading>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <article
              className="destination-detail"
              id={destination.slug}
              key={destination.slug}
            >
              <DestinationCard destination={destination} />
              <div className="destination-notes">
                <p className="eyebrow">Best time</p>
                <h3>{destination.season}</h3>
                <p>{destination.bestFor}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-band">
        <div>
          <p className="eyebrow">Coming next</p>
          <h2>Destination guides will become the backbone of the studio.</h2>
        </div>
        <p>
          The structure is ready for neighborhood pages, hotel shortlists,
          seasonal edits, honeymoon route notes, affiliate links, and paid
          downloadable guide formats once the audience signals what they need.
        </p>
        <Link className="button dark" href="/travel-guides">
          Read the guides
        </Link>
      </section>
    </main>
  );
}
