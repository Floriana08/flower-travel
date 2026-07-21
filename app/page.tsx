import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandLockup,
  DestinationCard,
  NewsletterBand,
  SectionHeading,
} from "./components";
import {
  destinations,
  getDestination,
  guides,
  site,
  travelMoods,
} from "./data";

export const metadata: Metadata = {
  description:
    "Thoughtful travel guides, routes, and destination notes for Europe.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  description: site.studioLine,
  publisher: {
    "@type": "Organization",
    name: site.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://flowertravel.studio/destinations?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const latestGuideSlugs = [
  "where-to-stay-lisbon",
  "madeira-first-timers",
  "rome-food-walk",
  "solo-paris-weekend",
];

export default function Home() {
  const portugal = getDestination("portugal");
  const latestGuides = guides.filter((guide) =>
    latestGuideSlugs.includes(guide.slug),
  );
  const countryDestinations = destinations.filter((destination) =>
    ["portugal", "italy", "spain"].includes(destination.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="home-hero" id="home">
        <div className="hero-image" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=86"
            alt=""
          />
          <span className="wave-layer wave-one" aria-hidden="true" />
          <span className="wave-layer wave-two" aria-hidden="true" />
        </div>
        <div className="hero-content reveal">
          <BrandLockup tone="light" className="hero-lockup" />
          <p>
            Routes, guides, and local notes for trips with a strong sense of
            place.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/destinations">
              Explore destinations
            </Link>
            <Link className="button ghost-on-dark" href="/club">
              Join the Club
            </Link>
          </div>
        </div>
      </section>

      {portugal ? (
        <section className="section-shell home-feature" id="featured">
          <p className="eyebrow">Featured destination</p>
          <div className="journal-layout">
            <Link
              className="journal-feature-image-link"
              href="/destinations/portugal"
              aria-label="Explore Portugal"
            >
              <img src={portugal.image} alt={portugal.alt} loading="eager" />
            </Link>
            <article className="journal-feature">
              <h2>Portugal, at an unhurried pace</h2>
              <p>
                Atlantic cities, long lunches, and rail days that make the
                journey part of the trip.
              </p>
              <p className="story-card-meta">
                <span>{portugal.season}</span>
                <span>{portugal.mood}</span>
              </p>
              <Link
                className="button dark journal-feature-cta"
                href="/destinations/portugal"
              >
                Explore Portugal
              </Link>
            </article>
          </div>
        </section>
      ) : null}

      <section className="section-shell tinted" id="latest-stories">
        <SectionHeading
          eyebrow="Latest travel stories"
          title="Good places, well chosen"
        >
          <p>Useful guides for planning a trip that feels like yours.</p>
        </SectionHeading>
        <div className="guide-grid">
          {latestGuides.map((guide) => (
            <article className="story-card" key={guide.slug}>
              <Link
                className="story-card-link"
                href={`/travel-guides/${guide.slug}`}
              >
                <img src={guide.image} alt={guide.alt} loading="lazy" />
                <div className="story-card-body">
                  <p className="story-card-meta">
                    <span>{guide.category}</span>
                    <span>{guide.readTime}</span>
                  </p>
                  <h3>{guide.title}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <p className="journal-section-footer">
          <Link className="text-link" href="/travel-guides">
            Read all travel stories
          </Link>
        </p>
      </section>

      <section className="section-shell" id="browse-destinations">
        <SectionHeading
          eyebrow="Browse destinations"
          title="Start with a country"
        >
          <p>Three richly different ways to travel through southern Europe.</p>
        </SectionHeading>
        <div className="destination-grid home-destination-grid">
          {countryDestinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="travel-by-mood">
        <SectionHeading
          eyebrow="Travel by mood"
          title="Choose the feeling first"
        >
          <p>Find the routes and places that suit your pace.</p>
        </SectionHeading>
        <div className="mood-grid">
          {travelMoods.map((mood) => (
            <Link
              className="mood-card"
              href={`/destinations?mood=${mood.slug}#mood-results`}
              key={mood.slug}
            >
              <span className="mood-card-kicker">Mood</span>
              <h3>{mood.title}</h3>
              <p>{mood.description}</p>
              <span className="mood-card-link">View stories</span>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
