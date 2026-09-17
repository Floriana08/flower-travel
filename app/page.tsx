import type { Metadata } from "next";
import Link from "next/link";
import { guides, site } from "./data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { TripEditGlimpse } from "./sample-trip";
import { lisbonSampleTrip } from "./sample-trips";
import { CountryTile, StudioNewsletter } from "./studio-components";
import { NewsletterForm } from "./newsletter-form";
import { studioPositioning } from "./membership-config";
import { studioCountries } from "./studio-structure";
import { unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  description: studioPositioning.short,
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Travel Journal for Slower, Sustainable Trips",
    description: studioPositioning.short,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=84",
        width: 1600,
        height: 1067,
        alt: "Warm afternoon light on a Mediterranean coastal street",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: "https://altrove.studio/",
      description: site.studioLine,
      email: site.email,
    },
    {
      "@type": "Blog",
      name: "Altrove Journal",
      url: "https://altrove.studio/journal",
      description: site.studioLine,
    },
  ],
};

const sustainNotes = [
  {
    title: "Fewer bases",
    body: "One neighbourhood, then another region only when the first has had enough time. Hotel moves cost more than money.",
  },
  {
    title: "Trains when they earn the day",
    body: "A Lisbon–Porto rail day or Rome–Naples Frecciarossa is usually better than a short flight that eats the morning.",
  },
  {
    title: "Eat where people already eat",
    body: "A neighbourhood lunch does more for a place than a restaurant built for photographs.",
  },
  {
    title: "Skip what doesn’t earn the morning",
    body: "Not every attraction is worth the queue, the taxi, or the carbon. Taste is also a form of restraint.",
  },
];

const journalFeatured = [
  {
    slug: "where-to-eat-lisbon",
    title: "Where to Eat in Lisbon",
  },
  {
    slug: "where-to-stay-lisbon",
    title: "Where to Stay in Lisbon",
  },
  {
    slug: "sustainable-travel-basics",
    title: "How to Travel More Sustainably",
  },
]
  .map((item) => {
    const story = guides.find((guide) => guide.slug === item.slug);
    return story ? { ...story, displayTitle: item.title } : null;
  })
  .filter((story): story is (typeof guides)[number] & { displayTitle: string } =>
    Boolean(story),
  );

const [journalLead, ...journalSupporting] = journalFeatured;

export default function Home() {
  return (
    <main className="home-edit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="studio-hero">
        <HeroOceanVideo />
        <div className="studio-hero-copy">
          <p className="studio-hero-kicker">
            A travel journal · Portugal, Italy, Spain
          </p>
          <h1 className="studio-hero-display">Travel, considered.</h1>
          <p className="studio-hero-lede">
            Itineraries, recommendations, and how to travel more lightly —
            written like a field guide, not a checklist.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/journal">
              Read the Journal
            </Link>
            <Link className="button ghost-on-dark" href="/community#letters">
              Join the letters
            </Link>
          </div>
          <p className="studio-hero-caption">
            Stories from the road, photographed for the page.
          </p>
        </div>
      </section>

      <section className="section-shell home-product" id="itineraries">
        <div className="home-section-head">
          <p className="eyebrow">Itineraries</p>
          <h2 className="display-title">How we would spend the days.</h2>
        </div>
        <TripEditGlimpse
          trip={lisbonSampleTrip}
          ctaLabel="Read the Lisbon itinerary"
        />
        <p className="home-section-link">
          <Link className="text-link" href="/itineraries">
            All itineraries
          </Link>
        </p>
      </section>

      <section className="section-shell home-destinations" id="destinations">
        <div className="home-section-head">
          <p className="eyebrow">Destinations</p>
          <h2 className="display-title">Portugal. Italy. Spain.</h2>
        </div>
        <div className="destinations-index-grid home-destinations-grid home-destination-doors">
          {studioCountries.map((country) => (
            <CountryTile key={country.slug} country={country} variant="home" />
          ))}
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/destinations">
            Explore Destinations
          </Link>
        </p>
      </section>

      <section className="section-shell home-journal-feature" id="journal">
        <div className="home-section-head">
          <p className="eyebrow">Features</p>
          <h2 className="display-title">Notes from the road.</h2>
        </div>
        {journalLead ? (
            <div className="home-journal-editorial">
              <article className="home-journal-lead">
                <Link href={`/journal/${journalLead.slug}`}>
                  <img
                    src={journalLead.image}
                    srcSet={unsplashSrcSet(journalLead.image)}
                    sizes="(max-width: 900px) 100vw, 58vw"
                    alt={journalLead.alt}
                    loading="lazy"
                  />
                  <div className="home-journal-lead-copy">
                    <p className="eyebrow">{journalLead.destination}</p>
                    <h3>{journalLead.displayTitle}</h3>
                    <p>{journalLead.excerpt}</p>
                  </div>
                </Link>
              </article>
              <div className="home-journal-side">
                {journalSupporting.map((story) => (
                  <article key={story.slug} className="home-journal-side-card">
                    <Link href={`/journal/${story.slug}`}>
                      <img
                        src={story.image}
                        srcSet={unsplashSrcSet(story.image)}
                        sizes="(max-width: 900px) 100vw, 32vw"
                        alt={story.alt}
                        loading="lazy"
                      />
                      <p className="eyebrow">{story.destination}</p>
                      <h3>{story.displayTitle}</h3>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
        ) : null}
        <p className="home-section-link">
          <Link className="text-link" href="/journal">
            Read the Journal
          </Link>
        </p>
      </section>

      <section className="section-shell tinted home-benefits" id="sustainable">
        <div className="home-section-head">
          <p className="eyebrow">How we travel</p>
          <h2 className="display-title">Sustainable, without the sermon.</h2>
          <p className="home-section-dek">
            The useful levers are usually the shape of the trip: fewer flights,
            longer stays, trains where they make sense, meals that belong to
            the neighbourhood.
          </p>
        </div>
        <ul className="home-benefits-grid">
          {sustainNotes.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="home-section-link">
          <Link className="text-link" href="/journal/sustainable-travel-basics">
            How to travel more sustainably
          </Link>
        </p>
      </section>

      <StudioNewsletter
        id="letters"
        title="Letters from Altrove"
        description="New itineraries, hotel notes, and practical advice on travelling more lightly — sent when there is something worth writing."
      >
        <NewsletterForm buttonLabel="Join the letters" />
      </StudioNewsletter>
    </main>
  );
}
