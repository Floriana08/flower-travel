import type { Metadata } from "next";
import Link from "next/link";
import { DestinationCard, PageHero, SectionHeading } from "../components";
import { destinationBlogArticles, destinations } from "../data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore curated Flower Travel destination articles for Italy, Spain, Portugal, local experiences, positive-footprint routes, island escapes, city breaks, and future honeymoon routes.",
};

export default function DestinationsPage() {
  const latestArticles = destinationBlogArticles.slice(0, 6);

  return (
    <main>
      <PageHero eyebrow="Destination blog" title="Latest Travel Stories" />

      <section className="section-shell">
        <div className="destination-article-grid">
          {latestArticles.map((article) => {
            const destination = destinations.find(
              (item) => item.slug === article.destinationSlug,
            );

            if (!destination) {
              return null;
            }

            return (
              <article
                className="destination-article-card card"
                key={article.slug}
              >
                <img
                  src={destination.image}
                  alt={destination.alt}
                  loading="lazy"
                />
                <div className="card-body">
                  <div className="meta-line">
                    <span>{destination.title}</span>
                    <span>{article.category}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link
                    className="text-link"
                    href={`/destinations/${destination.slug}/articles/${article.slug}`}
                  >
                    Read article
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell tinted">
        <SectionHeading
          eyebrow="Browse destinations"
          title="Open a place to read its stories."
        >
          <p>
            Every destination has its own page with local notes, mood, and the
            articles written for that place.
          </p>
        </SectionHeading>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.slug} />
          ))}
        </div>
      </section>

      <section className="editorial-band">
        <div>
          <p className="eyebrow">For Curious Travelers</p>
          <br />
          <h2>Join the Flower Travel Club</h2>
        </div>
        <p>
          Discover thoughtfully curated guides, inspiring travel stories, and
          hidden gems from around the world. Be the first to access new
          itineraries, exclusive recommendations, and the future of Flower
          Travel.
        </p>
        <Link className="button dark" href="/club">
          Join the Club
        </Link>
      </section>
    </main>
  );
}
