import type { Metadata } from "next";
import Link from "next/link";
import { EditorialCarousel } from "./EditorialCarousel";
import { NewsletterBand, SectionHeading } from "./components";
import {
  destinationBlogArticles,
  destinations,
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

export default function Home() {
  const featuredRoutes = routeFocus
    .map((slug) => itineraries.find((itinerary) => itinerary.slug === slug))
    .filter(Boolean);
  const leadArticle = destinationBlogArticles[0];
  const leadDestination = destinations.find(
    (destination) => destination.slug === leadArticle.destinationSlug,
  );
  const latestDestinationArticles = destinationBlogArticles.slice(1, 6);

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
          <p className="eyebrow">Southern Europe travel journal</p>
          <h1>Flower Travel</h1>
          <p>
            A pilot editorial project for travelers from the UK and US who want
            Italy, Spain, and Portugal with more atmosphere, better local
            experiences, and a lighter footprint.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/destinations">
              Read the journal
            </Link>
            <Link className="button ghost-on-dark" href="/club">
              Join the Club
            </Link>
          </div>
        </div>
      </section>

      <EditorialCarousel
        eyebrow="Curated trip notes"
        title="Routes to inspire the trip, not sell it yet."
        viewAllHref="/routes"
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

      <section className="journal-board section-shell">
        <SectionHeading
          eyebrow="Latest journal"
          title="Destination writing with a point of view."
        >
          <p>
            More inspiration, fewer generic lists: city notes, food rituals,
            independent hotels, local experiences, and the decisions that make
            travel feel more meaningful.
          </p>
        </SectionHeading>
        <div className="journal-layout">
          {leadDestination ? (
            <article className="journal-feature">
              <img
                src={leadDestination.image}
                alt={leadDestination.alt}
                loading="lazy"
              />
              <div>
                <p className="eyebrow">{leadDestination.title}</p>
                <h3>{leadArticle.title}</h3>
                <p>{leadArticle.excerpt}</p>
                <Link
                  className="text-link"
                  href={`/destinations/${leadDestination.slug}/articles/${leadArticle.slug}`}
                >
                  Read the article
                </Link>
              </div>
            </article>
          ) : null}

          <div className="journal-list">
            {latestDestinationArticles.map((article) => {
              const destination = destinations.find(
                (item) => item.slug === article.destinationSlug,
              );

              if (!destination) {
                return null;
              }

              return (
                <article key={article.slug}>
                  <p className="eyebrow">{destination.title}</p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link
                    className="text-link"
                    href={`/destinations/${destination.slug}/articles/${article.slug}`}
                  >
                    Read article
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="club-strip">
        <div>
          <p className="eyebrow">The Flower Travel Club</p>
          <h2>Join the reader list while this is still a pilot.</h2>
        </div>
        <p>
          The Club is simply the early circle for now: a place to see which
          stories land, which routes people save, and what should become deeper
          guides, local partnerships, or curated travel planning later.
        </p>
        <Link className="button light" href="/club">
          Join the Club
        </Link>
      </section>

      <NewsletterBand />
    </main>
  );
}
