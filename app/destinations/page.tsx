import type { Metadata } from "next";
import Link from "next/link";
import { DestinationCard, PageHero, SectionHeading } from "../components";
import {
  destinationBlogArticles,
  destinations,
  getDestinationArticles,
} from "../data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore curated Flower Travel destination guides for Portugal, France, Italy, Greece, Morocco, island escapes, city breaks, and future honeymoon routes.",
};

export default function DestinationsPage() {
  const latestArticles = destinationBlogArticles.slice(0, 6);
  const continentOrder = [
    "Europe",
    "Africa",
    "Asia",
    "North America",
    "South America",
    "Oceania",
  ];
  const continentGroups = continentOrder
    .map((continent) => {
      const continentDestinations = destinations.filter(
        (destination) => destination.continent === continent,
      );
      const countries = Array.from(
        new Set(continentDestinations.map((destination) => destination.country)),
      ).map((country) => ({
        country,
        destinations: continentDestinations.filter(
          (destination) => destination.country === country,
        ),
      }));

      return { continent, countries };
    })
    .filter((group) => group.countries.length > 0);

  return (
    <main>
      <PageHero
        eyebrow="Destination blog"
        title="Stories, city notes, and destination edits."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=84"
        alt="A winding road through a dramatic mountain landscape"
      >
        <p>
          Destinations now work like the blog layer of Flower Travel: each place
          has its own page, and each destination page links to the articles,
          route notes, hotel ideas, and stories connected to it.
        </p>
      </PageHero>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Latest destination articles"
          title="Start with the newest destination notes."
        >
          <p>
            These posts are written to build the editorial archive before
            Flower Travel becomes a fuller members' community.
          </p>
        </SectionHeading>
        <div className="destination-article-grid">
          {latestArticles.map((article) => {
            const destination = destinations.find(
              (item) => item.slug === article.destinationSlug,
            );

            if (!destination) {
              return null;
            }

            return (
              <article className="destination-article-card card" key={article.slug}>
                <img src={destination.image} alt={destination.alt} loading="lazy" />
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
          title="Each destination now has its own blog page."
        >
          <p>
            Browse by continent and open any destination to see the article
            collection connected to that place.
          </p>
        </SectionHeading>

        <div className="continent-directory">
          {continentGroups.map((group, index) => (
            <details
              className="continent-group"
              key={group.continent}
              open={index === 0}
            >
              <summary>
                <span>{group.continent}</span>
                <small>
                  {group.countries.length}{" "}
                  {group.countries.length === 1 ? "country" : "countries"}
                </small>
              </summary>

              <div className="country-directory">
                {group.countries.map((countryGroup) => (
                  <section className="country-group" key={countryGroup.country}>
                    <div className="country-heading">
                      <p className="eyebrow">Country</p>
                      <h2>{countryGroup.country}</h2>
                    </div>
                    <div className="destination-grid">
                      {countryGroup.destinations.map((destination) => (
                        <article
                          className="destination-detail"
                          id={destination.slug}
                          key={destination.slug}
                        >
                          <DestinationCard destination={destination} />
                          <div className="destination-notes">
                            <p className="eyebrow">Destination blog</p>
                            <h3>
                              {getDestinationArticles(destination.slug).length}{" "}
                              {getDestinationArticles(destination.slug).length === 1
                                ? "article"
                                : "articles"}
                            </h3>
                            <p>{destination.bestFor}</p>
                            <Link
                              className="text-link"
                              href={`/destinations/${destination.slug}`}
                            >
                              Open destination
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="editorial-band">
        <div>
          <p className="eyebrow">Coming next</p>
          <h2>Destinations can become the community atlas.</h2>
        </div>
        <p>
          The structure is ready for country pages, city articles, neighborhood
          notes, hotel shortlists, lower-impact route ideas, and member-only
          edits once the audience signals what they need.
        </p>
        <Link className="button dark" href="/community">
          Join the community
        </Link>
      </section>
    </main>
  );
}
