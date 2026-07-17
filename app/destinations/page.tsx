import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "../components";
import {
  destinationBlogArticles,
  destinations,
  featuredDestinationSlugs,
  getDestination,
  getDestinationBrowseTiles,
  getDestinationItineraries,
  getDestinationProfile,
  travelCollections,
} from "../data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Curated destination edits from Flower Travel, with itineraries, neighbourhood guides, restaurants, hotels, local discoveries, and lower-impact planning notes.",
};

type DestinationsPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

function isCountryDestination(destination: (typeof destinations)[number]) {
  return destination.title === destination.country;
}

function getDestinationDepth(destination: (typeof destinations)[number]) {
  const relatedSlugs = isCountryDestination(destination)
    ? destinations
        .filter((item) => item.country === destination.country)
        .map((item) => item.slug)
    : [destination.slug];
  const articles = destinationBlogArticles.filter((article) =>
    relatedSlugs.includes(article.destinationSlug),
  );
  const itineraries = getDestinationItineraries(destination.slug);

  return {
    articles: articles.length,
    itineraries: itineraries.length,
  };
}

function matchesSearch(
  destination: (typeof destinations)[number],
  query: string,
) {
  if (!query) {
    return true;
  }

  const profile = getDestinationProfile(destination.slug);
  const haystack = [
    destination.title,
    destination.country,
    destination.continent,
    destination.region,
    destination.mood,
    destination.bestFor,
    destination.excerpt,
    ...destination.highlights,
    profile.overview,
    ...profile.chapters.map((chapter) => chapter.title),
    ...profile.chapters.map((chapter) => chapter.description),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function DestinationDiscoveryCard({
  destination,
  featured = false,
}: {
  destination: (typeof destinations)[number];
  featured?: boolean;
}) {
  const profile = getDestinationProfile(destination.slug);
  const depth = getDestinationDepth(destination);
  const stats = [
    `${depth.articles} ${depth.articles === 1 ? "article" : "articles"}`,
    `${depth.itineraries} ${
      depth.itineraries === 1 ? "itinerary" : "itineraries"
    }`,
  ].join(" / ");

  return (
    <Link
      className={`destination-discovery-card${featured ? " featured" : ""}`}
      href={`/destinations/${destination.slug}`}
    >
      <img src={destination.image} alt={destination.alt} loading="lazy" />
      <span className="destination-discovery-overlay" aria-hidden="true" />
      <div className="destination-discovery-copy">
        <p>{stats}</p>
        <h3>{destination.title}</h3>
        <span>{profile.overview}</span>
      </div>
    </Link>
  );
}

export default async function DestinationsPage({
  searchParams,
}: DestinationsPageProps) {
  const params = await searchParams;
  const query = (params?.q ?? "").trim().toLowerCase();
  const hasQuery = query.length > 0;
  const featuredDestinations = featuredDestinationSlugs
    .map((slug) => getDestination(slug))
    .filter((destination): destination is (typeof destinations)[number] =>
      Boolean(destination),
    );
  const browseTiles = getDestinationBrowseTiles();
  const filteredTiles = browseTiles.filter((tile) =>
    matchesSearch(tile.destination, query),
  );

  return (
    <main>
      <PageHero eyebrow="Destinations" title="Browse destinations, not bucket lists.">
        <p>
          Open a place for its overview, itineraries, neighbourhood notes,
          restaurants, local discoveries, map points, journal stories, and
          future Club extras.
        </p>
      </PageHero>

      <section className="destination-search section-shell">
        <form action="/destinations#destination-results" method="get" role="search">
          <label htmlFor="destination-search">Where would you like to go?</label>
          <div className="destination-search-row">
            <input
              id="destination-search"
              name="q"
              type="search"
              placeholder="Search destinations, cities or experiences..."
              defaultValue={params?.q ?? ""}
            />
            <button className="button dark" type="submit">
              Search
            </button>
          </div>
        </form>
        <span
          className="destination-results-anchor"
          id="destination-results"
          aria-hidden="true"
        />
        {hasQuery ? (
          <div className="destination-inline-results">
            <SectionHeading
              eyebrow="Search results"
              title={`${filteredTiles.length} ${
                filteredTiles.length === 1 ? "place" : "places"
              } for "${params?.q}"`}
            >
              <p>
                Results now appear here first, so you can move straight from a
                search into the destination edit.
              </p>
            </SectionHeading>

            {filteredTiles.length > 0 ? (
              <div className="destination-discovery-grid compact">
                {filteredTiles.map((tile) => (
                  <DestinationDiscoveryCard
                    key={tile.slug}
                    destination={tile.destination}
                  />
                ))}
              </div>
            ) : (
              <div className="destination-no-results">
                <h3>No destination matched that search.</h3>
                <p>
                  Try a place, country, mood, food, coast, train, design, or
                  honeymoon.
                </p>
                <Link className="text-link" href="/destinations">
                  Browse all destinations
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </section>

      <section className="section-shell destination-feature-section">
        <SectionHeading
          eyebrow="Start here"
          title="Our favourite places to begin exploring."
        >
          <p>
            The destinations we've explored most deeply, with curated
            itineraries, neighbourhood guides and local recommendations to help
            you plan with confidence.
          </p>
        </SectionHeading>

        <div className="destination-discovery-grid featured">
          {featuredDestinations.map((destination) => (
            <DestinationDiscoveryCard
              key={destination.slug}
              destination={destination}
              featured
            />
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="travel-by-mood">
        <SectionHeading eyebrow="Travel by mood" title="Not sure where to go?">
          <p>
            Sometimes the best trip starts with a feeling rather than a
            destination. Browse by the kind of experience you're looking for.
          </p>
        </SectionHeading>
        <div className="mood-grid">
          {travelCollections.map((collection) => (
            <Link
              className="mood-card"
              href={collection.href}
              key={collection.title}
            >
              <span className="mood-card-kicker">Explore</span>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <span className="mood-card-link">Open edit</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Browse all destinations"
          title="Explore the collection."
        >
          <p>
            Browse the places currently available. More countries and cities can
            be added as the editorial collection grows.
          </p>
        </SectionHeading>

        <div className="destination-discovery-grid compact">
          {browseTiles.map((tile) => (
            <DestinationDiscoveryCard
              key={tile.slug}
              destination={tile.destination}
            />
          ))}
        </div>
      </section>

      <section className="editorial-band">
        <div>
          <p className="eyebrow">Club Extras</p>
          <br />
          <h2>Coming soon</h2>
        </div>
        <p>
          Some destinations will eventually include downloadable guides,
          interactive maps, boutique hotel collections and member-only
          recommendations.
        </p>
        <Link className="button dark" href="/club">
          Join the Club
        </Link>
      </section>
    </main>
  );
}
