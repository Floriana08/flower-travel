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
  getMoodStories,
  getTravelMood,
  travelMoods,
  type MoodStory,
  type TravelMoodSlug,
} from "../data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Curated destination edits from Flower Travel, with itineraries, neighbourhood guides, restaurants, hotels, local discoveries, and lower-impact planning notes.",
};

type DestinationsPageProps = {
  searchParams?: Promise<{ q?: string; mood?: string }>;
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

function MoodStoryCard({ story }: { story: MoodStory }) {
  return (
    <article className="mood-story-card card">
      <Link href={story.href} aria-label={story.title}>
        <img src={story.image} alt={story.alt} loading="lazy" />
      </Link>
      <div className="card-body">
        <div className="meta-line">
          <span>{story.contentType}</span>
          {story.meta ? <span>{story.meta}</span> : null}
        </div>
        <h3>{story.title}</h3>
        {story.location ? (
          <p className="mood-story-location">{story.location}</p>
        ) : null}
        <p>{story.excerpt}</p>
        <Link className="text-link" href={story.href}>
          {story.contentType === "Itinerary"
            ? "View itinerary"
            : story.contentType === "Destination"
              ? "Explore destination"
              : "Read story"}
        </Link>
      </div>
    </article>
  );
}

export default async function DestinationsPage({
  searchParams,
}: DestinationsPageProps) {
  const params = await searchParams;
  const query = (params?.q ?? "").trim().toLowerCase();
  const hasQuery = query.length > 0;
  const selectedMood = getTravelMood(params?.mood ?? "");
  const selectedMoodSlug = selectedMood?.slug as TravelMoodSlug | undefined;
  const featuredDestinations = featuredDestinationSlugs
    .map((slug) => getDestination(slug))
    .filter((destination): destination is (typeof destinations)[number] =>
      Boolean(destination),
    )
    .filter(isCountryDestination);
  const browseTiles = getDestinationBrowseTiles();
  const filteredTiles = browseTiles.filter((tile) =>
    matchesSearch(tile.destination, query),
  );
  const moodStories = selectedMoodSlug
    ? getMoodStories(selectedMoodSlug)
    : [];

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
            {selectedMoodSlug ? (
              <input type="hidden" name="mood" value={selectedMoodSlug} />
            ) : null}
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
          title="Countries to begin with."
        >
          <p>
            Start with a country edit first. Each one gathers itineraries,
            neighbourhood notes and local recommendations so you can plan with
            confidence before choosing a city or region.
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
            destination. Browse by the kind of experience you&apos;re looking for.
          </p>
        </SectionHeading>

        <div className="mood-toolbar">
          <Link
            className={`mood-show-all${selectedMoodSlug ? "" : " is-active"}`}
            href="/destinations#travel-by-mood"
          >
            Show all
          </Link>
        </div>

        <div className="mood-grid">
          {travelMoods.map((mood) => {
            const isActive = selectedMoodSlug === mood.slug;
            return (
              <Link
                className={`mood-card${isActive ? " is-active" : ""}`}
                href={
                  isActive
                    ? "/destinations#travel-by-mood"
                    : `/destinations?mood=${mood.slug}#mood-results`
                }
                key={mood.slug}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="mood-card-kicker">Mood</span>
                <h3>{mood.title}</h3>
                <p>{mood.description}</p>
                <span className="mood-card-link">
                  {isActive ? "Selected" : "View stories"}
                </span>
              </Link>
            );
          })}
        </div>

        {selectedMood ? (
          <div className="mood-results" id="mood-results">
            <SectionHeading
              eyebrow="Stories for this mood"
              title={selectedMood.title}
            >
              <p>
                Destinations, itineraries and journal stories linked to this
                mood.
              </p>
            </SectionHeading>

            {moodStories.length > 0 ? (
              <div className="mood-story-grid">
                {moodStories.map((story) => (
                  <MoodStoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="destination-no-results">
                <h3>No stories are linked to this mood yet.</h3>
                <Link className="text-link" href="/destinations#travel-by-mood">
                  Show all moods
                </Link>
              </div>
            )}
          </div>
        ) : (
          <span
            className="destination-results-anchor"
            id="mood-results"
            aria-hidden="true"
          />
        )}
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Browse all destinations"
          title="Explore the collection."
        >
          <p>
            Countries, cities and regions currently available. More places can
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
