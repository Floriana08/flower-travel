import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup } from "./components";
import { NewsletterForm } from "./newsletter-form";
import { guideProducts, guides, site } from "./data";
import { getJourney } from "./journeys-data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { StudioNewsletter } from "./studio-components";
import { defaultImageSizes, unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  title: "Editorial travel studio",
  description:
    "Altrove is an editorial travel studio: thoughtful destination stories, premium destination guides, and personalised itinerary design, starting with Italy, Spain and Portugal.",
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Editorial travel studio",
    description:
      "Thoughtful journeys through Italy, Spain and Portugal, with the places, hotels, meals and routes we'd actually recommend to a friend.",
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
      "@type": "Person",
      name: "Flor",
      jobTitle: "Founder and editor",
      worksFor: {
        "@type": "Organization",
        name: site.name,
      },
      url: "https://altrove.studio/plan-a-trip",
    },
  ],
};

export default function Home() {
  const featuredJourney = getJourney("naples-amalfi");
  const featuredGuide = guideProducts.find((p) => p.slug === "naples-amalfi-guide");
  const journalFeatured = [
    guides.find((g) => g.slug === "where-to-stay-lisbon"),
    guides.find((g) => g.slug === "rome-food-walk"),
    guides.find((g) => g.slug === "madeira-first-timers"),
  ].filter((g): g is (typeof guides)[number] => Boolean(g));

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
          <h1 className="studio-hero-display">
            Travel slowly.
            <br />
            Choose well.
          </h1>
          <p className="studio-hero-lede">
            Thoughtful journeys through Italy, Spain and Portugal, with the
            places, hotels, meals and routes I&rsquo;d actually recommend to a
            friend.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/destinations">
              Explore destinations
            </Link>
            <Link className="button ghost-on-dark" href="/plan-a-trip">
              Plan a journey
            </Link>
          </div>
          <p className="studio-hero-support">
            Independent guides · Personalised itineraries · Travel stories
          </p>
        </div>
      </section>

      {featuredJourney ? (
        <section className="section-shell home-featured-journey" id="journey">
          <div className="home-journey-visual">
            <Link
              className="home-journey-media home-journey-media-wide"
              href={`/journeys/${featuredJourney.slug}`}
              aria-label={featuredJourney.title}
            >
              <img
                src="https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=2000&q=84"
                srcSet={unsplashSrcSet(
                  "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=2000&q=84",
                )}
                sizes="(max-width: 900px) 100vw, 70vw"
                alt="Colourful boats in a Campania harbour"
                loading="lazy"
              />
            </Link>
            <div className="home-journey-copy">
              <p className="eyebrow">The Altrove route · Campania</p>
              <h2 className="display-title">
                <Link href={`/journeys/${featuredJourney.slug}`}>
                  Naples and the Amalfi Coast
                </Link>
              </h2>
              <p className="home-journey-meta">
                <span>7 to 9 days</span>
                <span>Two bases</span>
                <span>Best May-June / September</span>
              </p>

              <ol className="home-route-steps" aria-label="Suggested bases">
                <li>
                  <strong>Naples</strong>
                  <span>3 nights</span>
                </li>
                <li aria-hidden="true" className="home-route-arrow">
                  ↓
                </li>
                <li>
                  <strong>Amalfi Coast</strong>
                  <span>4 nights</span>
                </li>
              </ol>
              <p className="home-route-detours">
                <span className="eyebrow">Optional detours</span>
                Pompeii · Ischia · Ravello
              </p>

              <div className="home-why-route">
                <p className="eyebrow">Why this route works</p>
                <p>
                  One proper city stay. One coastal base. Ferries instead of
                  constant hotel changes. Enough room for slow mornings and
                  spontaneous meals.
                </p>
              </div>

              <p className="home-journey-links">
                <Link className="text-link" href={`/journeys/${featuredJourney.slug}`}>
                  Explore the journey
                </Link>
                {featuredGuide ? (
                  <Link className="text-link" href={`/guides/${featuredGuide.slug}`}>
                    Get the Campania guide
                  </Link>
                ) : null}
                <Link className="text-link" href="/plan-a-trip">
                  Have us personalise it
                </Link>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell home-offer home-offer-quiet" id="offer">
        <div className="home-section-head">
          <p className="eyebrow">How Altrove can help</p>
          <h2 className="display-title">Three ways in.</h2>
        </div>
        <div className="home-offer-grid home-offer-editorial">
          <article>
            <p className="eyebrow">Read</p>
            <h3>Journal</h3>
            <p>
              Stories, neighbourhood notes and places worth remembering , 
              written so you can feel how I travel before you plan.
            </p>
            <Link className="text-link" href="/journal">
              Read the journal
            </Link>
          </article>
          <article>
            <p className="eyebrow">Travel independently</p>
            <h3>Guides</h3>
            <p>
              Complete destination edits designed to help you travel on your
              own, bases, pacing and what I&rsquo;d skip.
            </p>
            <Link className="text-link" href="/guides">
              Browse the guides
            </Link>
          </article>
          <article>
            <p className="eyebrow">Make it yours</p>
            <h3>Personalised itineraries</h3>
            <p>
              A route built around your dates, tastes and pace. You make the
              bookings; Altrove makes the trip make sense.
            </p>
            <Link className="text-link" href="/plan-a-trip">
              Plan a journey
            </Link>
          </article>
        </div>
      </section>

      {featuredGuide ? (
        <section className="section-shell tinted home-guide-feature" id="guide">
          <div className="home-guide-layout">
            <Link
              className="home-guide-cover"
              href={`/guides/${featuredGuide.slug}`}
              aria-label={featuredGuide.title}
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=84"
                srcSet={unsplashSrcSet(
                  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=84",
                )}
                sizes={defaultImageSizes}
                alt="Simple table setting in warm restaurant light"
                loading="lazy"
              />
              <span className="home-guide-cover-label">Editorial preview</span>
            </Link>
            <div className="home-journey-copy">
              <p className="eyebrow">Altrove Guide</p>
              <h2 className="display-title">
                <Link href={`/guides/${featuredGuide.slug}`}>{featuredGuide.title}</Link>
              </h2>
              <p className="home-journey-meta">
                <span>Naples · Pompeii · Amalfi Coast · Ischia</span>
              </p>
              <p>{featuredGuide.excerpt}</p>
              <ul className="home-guide-contents">
                <li>Where I&rsquo;d stay</li>
                <li>The 7 to 9 day Altrove route</li>
                <li>Neighbourhoods &amp; restaurants worth booking</li>
                <li>Ferry notes, pacing &amp; what I&rsquo;d skip</li>
              </ul>
              <p className="home-journey-meta">
                <span>Launching soon</span>
                <span>From €28</span>
              </p>
              <Link className="button dark" href={`/guides/${featuredGuide.slug}`}>
                Preview the guide
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {journalFeatured.length ? (
        <section className="section-shell home-journal-feature" id="journal">
          <div className="home-section-head">
            <p className="eyebrow">Journal</p>
            <h2 className="display-title">Notes worth keeping.</h2>
          </div>
          <div className="home-journal-editorial">
            <article className="home-journal-lead">
              <Link href={`/journal/${journalFeatured[0].slug}`}>
                <img
                  src={journalFeatured[0].image}
                  srcSet={unsplashSrcSet(journalFeatured[0].image)}
                  sizes="(max-width: 900px) 100vw, 58vw"
                  alt={journalFeatured[0].alt}
                  loading="lazy"
                />
                <p className="eyebrow">
                  {journalFeatured[0].destination} · {journalFeatured[0].category}
                </p>
                <h3>{journalFeatured[0].title}</h3>
                <p>{journalFeatured[0].excerpt}</p>
              </Link>
            </article>
            <div className="home-journal-side">
              {journalFeatured.slice(1).map((story) => (
                <article key={story.slug} className="home-journal-side-card">
                  <Link href={`/journal/${story.slug}`}>
                    <img
                      src={story.image}
                      srcSet={unsplashSrcSet(story.image)}
                      sizes={defaultImageSizes}
                      alt={story.alt}
                      loading="lazy"
                    />
                    <p className="eyebrow">{story.category}</p>
                    <h3>{story.title}</h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <p className="home-section-link">
            <Link className="text-link" href="/journal">
              Open the journal
            </Link>
          </p>
        </section>
      ) : null}

      <section className="section-shell home-plan" id="plan">
        <p className="eyebrow">Personalised itinerary design</p>
        <h2 className="display-title">Your trip. Our edit.</h2>
        <p>
          Tell us where you&rsquo;re going, when, and how you like to travel.
          Altrove shapes the route, neighbourhoods, pacing and the places worth
          your time.
        </p>
        <Link className="button dark" href="/plan-a-trip">
          Book your travel consultation
        </Link>
      </section>

      <StudioNewsletter
        id="letters"
        title="Letters from Altrove"
        description="New places, hotel finds, routes I'm researching and occasional notes from the road."
      >
        <NewsletterForm buttonLabel="Send me letters" />
      </StudioNewsletter>
    </main>
  );
}
