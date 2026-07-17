import type { Metadata } from "next";
import Link from "next/link";
import { EditorialCarousel } from "./EditorialCarousel";
import { NewsletterBand } from "./components";
import {
  guides,
  itineraries,
  site,
} from "./data";

export const metadata: Metadata = {
  description:
    "Flower Travel is an editorial travel blog and club for inspiring UK and US travelers to explore Italy, Spain, Portugal, local experiences, and lower-impact routes.",
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

const routeFocus = [
  "lisbon-food-tour",
  "rome-best-restaurants",
  "amalfi-coast-tours",
  "center-of-italy-guide",
  "andalusia-slow-route",
  "italian-long-weekend",
  "portugal-by-train",
  "seville-tapas-trail",
  "porto-wine-day",
  "sicily-coastal-route",
];

const journalFocus = [
  "travel-insurance-worth-it",
  "sustainable-travel-basics",
  "choosing-a-honeymoon-route",
  "carry-on-packing-edit",
  "train-travel-europe",
  "solo-paris-weekend",
];

export default function Home() {
  const featuredRoutes = routeFocus
    .map((slug) => itineraries.find((itinerary) => itinerary.slug === slug))
    .filter(Boolean);
  const journalStories = journalFocus
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter(Boolean);

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
          <p className="eyebrow">Travel better, not just farther.</p>
          <h1>Flower Travel</h1>
          <p>
            Curated itineraries, destination guides and thoughtful travel
            advice for people who want authentic experiences.
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

      <EditorialCarousel
        eyebrow="Editor's Picks"
        title="Itineraries, restaurants, hotels, and routes worth planning around."
        viewAllHref="/destinations"
        viewAllLabel="View all"
        ariaLabel="Curated trip routes"
      >
        {featuredRoutes.map((itinerary) =>
          itinerary ? (
            <article className="story-card" key={itinerary.slug}>
              <Link
                className="story-card-link"
                href={`/routes/${itinerary.slug}`}
              >
                <img src={itinerary.image} alt={itinerary.alt} loading="lazy" />
                <div className="story-card-body">
                  <p className="story-card-meta">
                    <span>{itinerary.region}</span>
                    <span>{itinerary.days}</span>
                  </p>
                  <h3>{itinerary.title}</h3>
                </div>
              </Link>
            </article>
          ) : null,
        )}
      </EditorialCarousel>

      <EditorialCarousel
        eyebrow="Travel Journal"
        title="Inspiration, planning advice, and stories for curious travellers."
        viewAllHref="/travel-guides"
        viewAllLabel="View all"
        ariaLabel="Travel journal stories"
      >
        {journalStories.map((guide) =>
          guide ? (
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
          ) : null,
        )}
      </EditorialCarousel>

      <NewsletterBand />
    </main>
  );
}
