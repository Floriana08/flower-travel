import type { Metadata } from "next";
import Link from "next/link";
import {
  ConsultationCta,
  DestinationCard,
  GuideProductCard,
  ItineraryCard,
  NewsletterBand,
  SectionHeading,
} from "./components";
import {
  destinations,
  guideProducts,
  itineraries,
  site,
} from "./data";

export const metadata: Metadata = {
  description:
    "Flower Travel is an editorial travel community for Portugal guides, global destination inspiration, thoughtful routes, and lower-impact ways to travel beautifully.",
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
    target: "https://flowertravel.studio/travel-guides?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  const featuredDestination = destinations[0];
  const secondaryDestinations = destinations.slice(1, 4);
  const featuredGuideProducts = guideProducts.slice(0, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="home-hero" id="home">
        <div className="hero-image" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1695199817779-4c879085a9a0?auto=format&fit=crop&w=2200&q=86"
            alt=""
          />
          <span className="wave-layer wave-one" aria-hidden="true" />
          <span className="wave-layer wave-two" aria-hidden="true" />
        </div>
        <div className="hero-content reveal">
          <p className="eyebrow">Portugal travel studio</p>
          <h1>Flower Travel</h1>
          <p>
            Sea-lit guides, colorful city notes, beach days, and a growing
            community for travelers who want Portugal with more beauty, ease,
            local feeling, and a lighter footprint.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/travel-guides">
              Explore guides
            </Link>
            <Link className="button ghost-on-dark" href="/community">
              Join the community
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Featured destinations"
          title="Places chosen for atmosphere, timing, and the small details that make a trip work."
        >
          <p>
            Browse city breaks, island routes, and future honeymoon-ready ideas
            through an editorial lens: where to stay, when to go, what to skip,
            and how to pace the days.
          </p>
        </SectionHeading>
        <div className="featured-destination-grid">
          <DestinationCard destination={featuredDestination} featured />
          <div className="stacked-cards">
            {secondaryDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell tinted">
        <SectionHeading
          eyebrow="Route ideas"
          title="Routes with enough structure to relax into the journey."
        >
          <p>
            Each itinerary is designed around good bases, realistic transfer
            days, meaningful meals, and room for the unscheduled moments that
            make travel feel alive. Over time, the best routes can become guide
            packs or member-only edits.
          </p>
        </SectionHeading>
        <div className="itinerary-grid">
          {itineraries.slice(0, 3).map((itinerary) => (
            <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
          ))}
        </div>
      </section>

      <ConsultationCta />

      <section className="about-preview section-shell">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=84"
            alt="A traveler walking through a wide landscape with a backpack"
            loading="lazy"
          />
        </figure>
        <div>
          <p className="eyebrow">About the editor</p>
          <h2>For travelers who want taste, clarity, and fewer tabs open.</h2>
          <p>
            Flower Travel began as a personal collection of slow Europe notes:
            train routes, hotel criteria, cafe corners, beautiful detours, and
            the practical research that makes a trip feel effortless once you
            arrive.
          </p>
          <p>
            Today it is becoming a boutique travel studio with an editorial
            heart. Guides come first; planning services, honeymoon routes,
            downloadable resources, affiliate edits, and curated packages can
            grow from what readers actually need.
          </p>
          <Link className="text-link" href="/about">
            Read the story
          </Link>
        </div>
      </section>

      <NewsletterBand />

      <section className="section-shell">
        <SectionHeading
          eyebrow="Portugal guide shop"
          title="The first guide drops are Portugal-focused."
        >
          <p>
            Lisbon, Madeira, rail routes, and lower-impact weekends are the
            first layer of a future guide library: useful now, easier to turn
            into paid downloads later.
          </p>
        </SectionHeading>
        <div className="guide-product-grid compact">
          {featuredGuideProducts.map((product) => (
            <GuideProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
