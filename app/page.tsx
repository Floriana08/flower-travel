import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup } from "./components";
import { NewsletterForm } from "./newsletter-form";
import { guideProducts, site } from "./data";
import { getJourney } from "./journeys-data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { CountryTile, StudioNewsletter } from "./studio-components";
import { studioCountries } from "./studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  title: "Editorial travel studio",
  description:
    "Altrove is an editorial travel studio: thoughtful destination stories, premium destination guides, and personalised itinerary design — starting with Italy, Spain and Portugal.",
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Editorial travel studio",
    description:
      "Thoughtful destination stories, premium guides, and personalised itinerary design.",
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
  const featuredJourney = getJourney("naples-amalfi");
  const featuredGuide = guideProducts.find((p) => p.slug === "naples-amalfi-guide");

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
          <p className="eyebrow light">Editorial travel studio</p>
          <h1 className="studio-hero-lede">
            Stories, guides and personalised journeys for travellers who want
            more depth and better pacing.
          </h1>
          <div className="hero-actions">
            <Link className="button light" href="/destinations">
              Explore destinations
            </Link>
            <Link className="button ghost-on-dark" href="/plan-a-trip">
              Plan with Altrove
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell home-destinations" id="destinations">
        <div className="home-section-head">
          <p className="eyebrow">Begin with a place</p>
          <h2 className="display-title">
            Explore our notes, guides and journeys through the parts of
            Europe we know best.
          </h2>
        </div>
        <div className="destinations-index-grid home-destinations-grid">
          {studioCountries.map((country) => (
            <CountryTile key={country.slug} country={country} />
          ))}
        </div>
      </section>

      {featuredJourney ? (
        <section className="section-shell tinted" id="journey">
          <div className="home-journey">
            <Link
              className="home-journey-media"
              href={`/journeys/${featuredJourney.slug}`}
              aria-label={featuredJourney.title}
            >
              <img
                src={featuredJourney.image}
                srcSet={unsplashSrcSet(featuredJourney.image)}
                sizes={defaultImageSizes}
                alt={featuredJourney.alt}
                loading="lazy"
              />
            </Link>
            <div className="home-journey-copy">
              <p className="eyebrow">Featured journey</p>
              <h3>
                <Link href={`/journeys/${featuredJourney.slug}`}>{featuredJourney.title}</Link>
              </h3>
              <p className="home-journey-meta">
                <span>{featuredJourney.duration}</span>
                <span>{featuredJourney.destination}</span>
              </p>
              <p>{featuredJourney.summary}</p>
              <p className="home-journey-links">
                <Link className="text-link" href={`/journeys/${featuredJourney.slug}`}>
                  Explore the journey
                </Link>
                {featuredGuide ? (
                  <Link className="text-link" href={`/guides/${featuredGuide.slug}`}>
                    View the Campania guide
                  </Link>
                ) : null}
                <Link className="text-link" href="/plan-a-trip">
                  Plan a personalised version
                </Link>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell home-offer" id="offer">
        <div className="home-section-head">
          <p className="eyebrow">What Altrove offers</p>
          <h2 className="display-title">Three ways to travel with us</h2>
        </div>
        <div className="home-offer-grid">
          <article>
            <p className="eyebrow">01</p>
            <h3>Explore the journal</h3>
            <p>
              Destination stories, neighbourhood notes and practical advice —
              built to show you how we think about a place before you ever
              plan a trip.
            </p>
            <Link className="text-link" href="/journal">
              Read the journal
            </Link>
          </article>
          <article>
            <p className="eyebrow">02</p>
            <h3>Travel with an Altrove guide</h3>
            <p>
              Detailed, independent destination guides — the research and
              reasoning behind a route, not just a list of places.
            </p>
            <Link className="text-link" href="/guides">
              Browse the guides
            </Link>
          </article>
          <article>
            <p className="eyebrow">03</p>
            <h3>Request a personalised itinerary</h3>
            <p>
              Tell us your dates, pace and priorities. We&rsquo;ll shape a
              route around them — bases, transport and pacing included.
            </p>
            <Link className="text-link" href="/plan-a-trip">
              Plan with Altrove
            </Link>
          </article>
        </div>
      </section>

      <section className="section-shell tinted home-philosophy" id="philosophy">
        <p className="about-pull home-philosophy-pull">
          Fewer bases. Better pacing. Neighbourhoods over checklists.
        </p>
        <p>
          We build every route around meals that shape the day, and
          recommendations based on how people actually travel — not how many
          places can be squeezed into a week. Depth over quantity, every time.
        </p>
      </section>

      {featuredGuide ? (
        <section className="section-shell" id="guide">
          <div className="home-journey">
            <Link
              className="home-journey-media"
              href={`/guides/${featuredGuide.slug}`}
              aria-label={featuredGuide.title}
            >
              <img
                src={featuredGuide.image}
                srcSet={unsplashSrcSet(featuredGuide.image)}
                sizes={defaultImageSizes}
                alt={featuredGuide.alt}
                loading="lazy"
              />
            </Link>
            <div className="home-journey-copy">
              <p className="eyebrow">Featured guide</p>
              <h3>
                <Link href={`/guides/${featuredGuide.slug}`}>{featuredGuide.title}</Link>
              </h3>
              <p>{featuredGuide.excerpt}</p>
              <p className="home-journey-meta">
                <span>
                  {featuredGuide.price}
                  {featuredGuide.priceIsPlaceholder ? " · placeholder price" : ""}
                </span>
              </p>
              <Link className="button dark" href={`/guides/${featuredGuide.slug}`}>
                See what&rsquo;s inside
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell tinted home-plan" id="plan">
        <p className="eyebrow">Itinerary design</p>
        <h2 className="display-title">If you love the way we travel, ask us to plan yours.</h2>
        <p>
          Personalised itinerary design around the places we know well —
          hotels, neighbourhoods and pacing included. We design the route; you
          book directly.
        </p>
        <Link className="button dark" href="/plan-a-trip">
          Plan My Trip
        </Link>
      </section>

      <StudioNewsletter
        id="letters"
        title="Letters from Altrove"
        description="Editorial correspondence, not a mailing list — occasional notes on new journeys, guides and places, sent without noise."
      >
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
