import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup, GuideProductCard } from "./components";
import { NewsletterForm } from "./newsletter-form";
import { guideProducts, guides, site } from "./data";
import { getCatalogueJourneys } from "./journeys-data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { EditorialStoryCard, StudioNewsletter } from "./studio-components";
import { defaultImageSizes, unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  title: "Boutique travel studio",
  description:
    "A boutique travel studio for travellers who would rather remember a place than rush through it.",
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Boutique travel studio",
    description:
      "Altrove isn’t about travelling more. It’s about travelling better.",
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

const journalSlugs = [
  "where-to-stay-lisbon",
  "rome-food-walk",
  "madeira-first-timers",
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      name: site.name,
      url: "https://altrove.studio/",
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
      url: "https://altrove.studio/about",
    },
  ],
};

export default function Home() {
  const featured = getCatalogueJourneys().slice(0, 3);
  const journalStories = journalSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main className="home-edit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="studio-hero">
        <HeroOceanVideo />
        <div className="studio-hero-copy">
          <BrandLockup tone="light" className="hero-lockup" showTagline={false} />
          <p className="eyebrow light">Travel studio</p>
          <h1 className="studio-hero-lede">
            Travelling better, not more.
          </h1>
          <div className="hero-actions">
            <Link className="button light" href="/journeys">
              Explore the journeys
            </Link>
            <Link className="button ghost-on-dark" href="/plan-a-trip">
              Plan a trip
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell tinted home-philosophy" id="philosophy">
        <p className="about-pull home-philosophy-pull">
          Altrove isn’t about travelling more. It’s about travelling better.
        </p>
        <p>
          The Altrove traveller isn’t looking to see everything. They’re looking
          to remember what they see.
        </p>
        <p className="home-section-link">
          <Link className="text-link" href="/philosophy">
            Read the philosophy
          </Link>
        </p>
      </section>

      <section className="section-shell home-featured" id="journeys">
        <div className="home-section-head">
          <p className="eyebrow">Featured journeys</p>
          <h2 className="display-title">Worth taking</h2>
        </div>
        <div className="home-featured-list">
          {featured.map((journey) => (
            <article className="home-featured-journey" key={journey.slug}>
              <Link
                className="home-featured-media"
                href={`/journeys/${journey.slug}`}
                aria-label={journey.title}
              >
                <img
                  src={journey.image}
                  srcSet={unsplashSrcSet(journey.image)}
                  sizes={defaultImageSizes}
                  alt={journey.alt}
                  loading="lazy"
                />
              </Link>
              <div className="home-featured-copy">
                <p className="home-journey-status">{journey.statusLabel}</p>
                <h3>
                  <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
                </h3>
                <p className="home-journey-meta">
                  <span>{journey.destination}</span>
                  <span>{journey.duration}</span>
                </p>
                <p>{journey.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="home-section-link">
          <Link className="button ghost" href="/journeys">
            View the collection
          </Link>
        </p>
      </section>

      <section className="section-shell tinted home-journal" id="journal">
        <div className="home-section-head">
          <p className="eyebrow">Journal</p>
          <h2 className="display-title">Taste before the itinerary</h2>
        </div>
        <div className="editorial-story-grid home-journal-grid">
          {journalStories.map((guide) => (
            <EditorialStoryCard key={guide.slug} guide={guide} />
          ))}
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/travel-guides">
            Open the journal
          </Link>
        </p>
      </section>

      <section className="section-shell home-guides" id="guides">
        <div className="home-section-head">
          <p className="eyebrow">Guides</p>
          <h2 className="display-title">When taste turns into a plan</h2>
        </div>
        <div className="editorial-story-grid guides-grid">
          {guideProducts.map((product) => (
            <GuideProductCard key={product.slug} product={product} />
          ))}
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/guides">
            See all guides
          </Link>
        </p>
      </section>

      <section className="section-shell tinted home-plan" id="plan">
        <p className="eyebrow">Journey Design</p>
        <h2 className="display-title">If you love the way we travel, ask us to plan yours.</h2>
        <p>A written travel strategy around the places we know well.</p>
        <Link className="button dark" href="/plan-a-trip">
          Start a Journey Design
        </Link>
      </section>

      <StudioNewsletter>
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
