import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandLockup,
  DestinationCard,
  NewsletterBand,
  SectionHeading,
} from "./components";
import {
  ComingSoonBlock,
  FlorNote,
  TrustBadgeRow,
} from "./editorial-components";
import {
  destinations,
  getDestination,
  guides,
  site,
  travelMoods,
} from "./data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { portugalGuide } from "./portugal-content";

export const metadata: Metadata = {
  title: "Altrove | Travel fewer places, but know them better",
  description:
    "Curated routes, neighbourhood notes, hotel recommendations and practical guides for travellers who prefer depth over checklists.",
  alternates: {
    canonical: "https://flowertravel.studio/",
  },
  openGraph: {
    title: "Travel fewer places, but know them better | Altrove",
    description:
      "Curated routes, honest travel notes and practical guides for travellers who prefer depth over checklists.",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.fullName,
      url: "https://flowertravel.studio/",
      description:
        "Curated routes, honest travel notes and practical guides for travellers who prefer depth over checklists.",
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: "https://flowertravel.studio/",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://flowertravel.studio/destinations?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      name: "Flor",
      jobTitle: "Editor",
      worksFor: {
        "@type": "Organization",
        name: site.name,
      },
      url: "https://flowertravel.studio/about",
    },
  ],
};

const latestGuideSlugs = [
  "where-to-stay-lisbon",
  "madeira-first-timers",
  "rome-food-walk",
  "solo-paris-weekend",
];

const featuredMoodSlugs = [
  "slow-cities",
  "coastal-escapes",
  "food-trips",
  "train-journeys",
  "wine-regions",
  "islands",
];

export default function Home() {
  const portugal = getDestination("portugal");
  const latestGuides = guides.filter((guide) =>
    latestGuideSlugs.includes(guide.slug),
  );
  const secondaryDestinations = destinations.filter((destination) =>
    ["italy", "spain"].includes(destination.slug),
  );
  const featuredMoods = travelMoods.filter((mood) =>
    featuredMoodSlugs.includes(mood.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="home-hero" id="home">
        <HeroOceanVideo />
        <div className="hero-content reveal">
          <BrandLockup tone="light" className="hero-lockup" />
          <h1 className="hero-headline">
            Travel fewer places, but know them better.
          </h1>
          <p>
            Curated routes, neighbourhood notes, hotel recommendations and
            practical guides for travellers who prefer depth over checklists.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/travel-guides">
              Explore the journal
            </Link>
            <Link className="button ghost-on-dark" href="/destinations">
              Browse destinations
            </Link>
          </div>
        </div>
      </section>

      {portugal ? (
        <section className="section-shell home-feature" id="featured">
          <div className="home-feature-grid">
            <Link
              className="home-feature-media"
              href="/destinations/portugal"
              aria-label="Read the Portugal guide"
            >
              <img src={portugal.image} alt={portugal.alt} loading="eager" />
            </Link>
            <div className="home-feature-copy">
              <p className="eyebrow">Featured destination</p>
              <h2>Portugal</h2>
              <TrustBadgeRow
                items={["Personally researched", "Updated July 2026"]}
              />
              <p className="home-feature-lede">
                The strongest chapter in the journal so far: Lisbon mornings,
                Porto lunches, Douro terraces and island light — written for
                travellers who would rather stay longer than tick more boxes.
              </p>
              <ul className="portugal-place-links">
                {portugalGuide.placeLinks.map((place) => (
                  <li key={place.label}>
                    <Link href={place.href}>{place.label}</Link>
                    {place.note ? <span>{place.note}</span> : null}
                  </li>
                ))}
              </ul>
              <Link
                className="button dark home-feature-cta"
                href="/destinations/portugal"
              >
                Open the Portugal guide
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell tinted" id="meet-flor">
        <div className="flor-intro">
          <p className="eyebrow">Editor’s note</p>
          <h2>Hi, I’m Flor.</h2>
          <p>
            I created Altrove as a place to collect the routes, neighbourhoods,
            hotels and travel notes that are genuinely worth remembering. The
            aim is not to see everything, but to travel with more intention and
            develop a stronger sense of place.
          </p>
          <FlorNote>
            <p>
              If you only read one destination guide first, start with Portugal.
              It is where the journal’s voice is clearest.
            </p>
          </FlorNote>
          <Link className="text-link" href="/about">
            More about the studio
          </Link>
        </div>
      </section>

      <section className="section-shell" id="latest-stories">
        <SectionHeading
          eyebrow="Stories"
          title="From the travel journal"
        >
          <p>Personal notes and practical guides for trips with character.</p>
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

      <section className="section-shell tinted" id="travel-by-mood">
        <SectionHeading
          eyebrow="Travel by mood"
          title="Choose the feeling first"
        >
          <p>
            Browse by pace and atmosphere — then open the places that match how
            you want the trip to feel.
          </p>
        </SectionHeading>
        <div className="mood-grid mood-grid-featured">
          {featuredMoods.map((mood) => (
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

      <section className="section-shell" id="browse-destinations">
        <SectionHeading
          eyebrow="Also in the journal"
          title="Italy and Spain, next"
        >
          <p>
            Portugal leads for now. Italy and Spain remain in the collection as
            the next deep chapters.
          </p>
        </SectionHeading>
        <div className="destination-grid home-destination-grid home-destination-grid-secondary">
          {secondaryDestinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="studio-extras">
        <SectionHeading
          eyebrow="Studio extras"
          title="Quietly in the works"
        >
          <p>Editorial products for later — never pop-ups, never hard sell.</p>
        </SectionHeading>
        <div className="coming-soon-grid">
          <ComingSoonBlock
            title="Portugal map collection"
            body="Saved hotels, cafés, viewpoints and Flor’s Picks in one map."
          />
          <ComingSoonBlock
            title="Downloadable city notes"
            body="Short printable neighbourhood guides for first-timers."
          />
          <ComingSoonBlock
            title="Travel planning interest list"
            body="A future one-to-one planning option for deeper itineraries."
            href="/travel-consultations"
            cta="Register interest"
          />
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
