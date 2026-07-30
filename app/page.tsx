import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup, SectionHeading } from "./components";
import { NewsletterForm } from "./newsletter-form";
import { getDestination, guides, site } from "./data";
import { getHomepageJourneys } from "./journeys-data";
import {
  DestinationFeature,
  EditorialStoryCard,
  EnquiryCta,
  JourneyCard,
  StudioNewsletter,
} from "./studio-components";

export const metadata: Metadata = {
  title: "Altrove | Journeys worth travelling slowly",
  description:
    "A boutique travel studio creating thoughtful itineraries, independent recommendations and deeply researched journeys through places we know and love.",
  alternates: {
    canonical: "https://flowertravel.studio/",
  },
  openGraph: {
    title: "Altrove | Journeys worth travelling slowly",
    description:
      "Thoughtful itineraries, independent recommendations and a travel studio built destination by destination.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=84",
        width: 1600,
        height: 1067,
        alt: "Cliffside villages on the Amalfi Coast",
      },
    ],
  },
};

const featuredDestinationSlugs = [
  "portugal",
  "amalfi-coast",
  "lisbon",
  "spain",
  "madeira",
  "naples",
] as const;

const journalSlugs = [
  "where-to-stay-lisbon",
  "madeira-first-timers",
  "choosing-a-honeymoon-route",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      name: site.name,
      url: "https://flowertravel.studio/",
      description: site.studioLine,
      email: site.email,
    },
    {
      "@type": "Person",
      name: "Flor",
      jobTitle: "Founder and editor",
      worksFor: {
        "@type": "Organization",
        name: site.name,
      },
      url: "https://flowertravel.studio/about",
    },
  ],
};

export default function Home() {
  const homepageJourneys = getHomepageJourneys();
  const featuredDestinations = featuredDestinationSlugs
    .map((slug) => getDestination(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const journalStories = journalSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="studio-hero">
        <div className="studio-hero-media">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=84"
            alt="Cliffside villages on the Amalfi Coast above the Mediterranean"
          />
        </div>
        <div className="studio-hero-copy">
          <BrandLockup tone="light" className="hero-lockup" showTagline={false} />
          <p className="eyebrow light">Curated travel, with a sense of place</p>
          <h1 className="display-title">Journeys worth travelling slowly.</h1>
          <p>
            Altrove is a boutique travel studio creating thoughtful itineraries,
            independent recommendations and deeply researched journeys through
            places we know and love.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/journeys">
              Explore the journeys
            </Link>
            <Link className="button ghost-on-dark" href="/plan-a-trip">
              Plan with Altrove
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell studio-intro" id="approach">
        <p className="eyebrow">The studio</p>
        <h2 className="display-title">A smaller world, explored more deeply</h2>
        <p>
          Altrove is being built one destination at a time. Instead of offering
          hundreds of generic trips, we are creating a small collection of
          journeys shaped by personal experience, careful research and a genuine
          understanding of place.
        </p>
        <Link className="text-link" href="/about">
          Discover our approach
        </Link>
      </section>

      <section className="section-shell tinted" id="journeys">
        <SectionHeading eyebrow="Collection" title="The first journeys">
          <p>
            A limited set of itineraries currently available to explore or still
            in development. Nothing here is filler — if a journey is not ready,
            we say so.
          </p>
        </SectionHeading>
        <div className="journey-grid">
          {homepageJourneys.map((journey) => (
            <JourneyCard key={journey.slug} journey={journey} />
          ))}
        </div>
        <p className="section-footer-link">
          <Link className="text-link" href="/journeys">
            View all journeys
          </Link>
        </p>
      </section>

      <section className="section-shell">
        <EnquiryCta title="Planning a journey of your own?">
          <p>
            Altrove is developing a personal travel-planning service for
            travellers looking for thoughtful routes, characterful places to stay
            and recommendations that reflect how they genuinely want to travel.
          </p>
          <ul className="soft-list">
            <li>Personalised itinerary design</li>
            <li>Honeymoon planning</li>
            <li>Hotel shortlists</li>
            <li>Destination consultations</li>
            <li>Special-occasion travel</li>
          </ul>
        </EnquiryCta>
      </section>

      <section className="section-shell tinted" id="destinations">
        <SectionHeading
          eyebrow="Places"
          title="Selected destinations"
        >
          <p>
            A focused collection — not every place on the map. Each destination
            is here because it has been visited, researched and written with care.
          </p>
        </SectionHeading>
        <div className="destination-feature-list">
          {featuredDestinations.map((destination) => (
            <DestinationFeature
              key={destination.slug}
              title={destination.title.split(",")[0]}
              href={`/destinations/${destination.slug}`}
              image={destination.image}
              alt={destination.alt}
            >
              <p>{destination.excerpt}</p>
            </DestinationFeature>
          ))}
        </div>
      </section>

      <section className="section-shell" id="journal">
        <SectionHeading eyebrow="Journal" title="Notes from elsewhere">
          <p>
            A small edit from the journal — stories that support the journeys,
            rather than compete with them.
          </p>
        </SectionHeading>
        <div className="editorial-story-grid">
          {journalStories.map((guide) => (
            <EditorialStoryCard key={guide.slug} guide={guide} />
          ))}
        </div>
        <div className="section-footer-row">
          <Link className="text-link" href="/travel-guides">
            Visit the journal
          </Link>
          <Link className="text-link" href="/about">
            More about Altrove
          </Link>
        </div>
      </section>

      <StudioNewsletter>
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
