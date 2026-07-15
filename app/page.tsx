import type { Metadata } from "next";
import Link from "next/link";
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

const destinationFocus = ["andalusia", "rome", "lisbon", "madeira"];
const routeFocus = [
  "andalusia-slow-route",
  "italian-long-weekend",
  "portugal-by-train",
];

export default function Home() {
  const featuredDestinations = destinationFocus
    .map((slug) => destinations.find((destination) => destination.slug === slug))
    .filter(Boolean);
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

      <section className="editorial-lede section-shell">
        <p className="eyebrow">The pilot</p>
        <h2>
          Beautiful routes, honest notes, and local experiences before anything
          becomes a product.
        </h2>
        <p>
          For now, Flower Travel is a blog-led studio. The work is to publish
          useful inspiration, understand what readers search for, and learn
          which destinations, hotels, food notes, and positive-footprint routes
          people actually want.
        </p>
      </section>

      <section className="mediterranean-feature section-shell tinted">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1800&q=84"
            alt="Historic Spanish architecture and palm trees in warm light"
            loading="eager"
          />
        </figure>
        <div className="mediterranean-copy">
          <p className="eyebrow">Italy, Spain, Portugal</p>
          <h2>The first editorial map is Southern Europe.</h2>
          <p>
            Not every trip needs to be luxury in the obvious way. Sometimes the
            better version is a rail route that feels easy, a restaurant chosen
            for its sense of place, a hotel with real character, or a day that
            leaves money in the local economy.
          </p>
          <div className="mediterranean-notes">
            {featuredDestinations.map((destination) =>
              destination ? (
                <Link key={destination.slug} href={`/destinations/${destination.slug}`}>
                  <span>{destination.region}</span>
                  <strong>{destination.title}</strong>
                  <small>{destination.mood}</small>
                </Link>
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section className="route-editorial section-shell">
        <SectionHeading
          eyebrow="Curated trip notes"
          title="Routes to inspire the trip, not sell it yet."
        >
          <p>
            These are early editorial trip edits: enough structure to make a
            journey feel possible, enough restraint to keep the site from
            becoming a package-holiday shop.
          </p>
        </SectionHeading>
        <div className="route-editorial-list">
          {featuredRoutes.map((itinerary) =>
            itinerary ? (
              <article className="route-editorial-row" key={itinerary.slug}>
                <Link href={`/routes/${itinerary.slug}`} aria-label={itinerary.title}>
                  <img src={itinerary.image} alt={itinerary.alt} loading="lazy" />
                </Link>
                <div>
                  <div className="meta-line">
                    <span>{itinerary.region}</span>
                    <span>{itinerary.days}</span>
                  </div>
                  <h3>{itinerary.title}</h3>
                  <p>{itinerary.summary}</p>
                  <p className="route-footprint">{itinerary.bestFor}</p>
                  <Link className="text-link" href={`/routes/${itinerary.slug}`}>
                    Read the route
                  </Link>
                </div>
              </article>
            ) : null,
          )}
        </div>
      </section>

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

      <section className="about-preview section-shell">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=84"
            alt="A traveler walking through a wide landscape with a backpack"
            loading="lazy"
          />
        </figure>
        <div>
          <p className="eyebrow">Point of view</p>
          <h2>Travel better by choosing with more care.</h2>
          <p>
            Flower Travel is not a travel agency. It is a small editorial
            studio testing what thoughtful travelers want to read, save, and
            eventually ask for: food-led routes, hotel criteria, local
            experiences, honeymoon-worthy pacing, and trips with a more positive
            footprint.
          </p>
          <Link className="text-link" href="/about">
            Read the story
          </Link>
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
