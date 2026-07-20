import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterBand, PageHero, SectionHeading } from "../components";
import {
  destinationBlogArticles,
  destinations,
  featuredDestinationSlugs,
  getDestination,
  getDestinationBrowseTiles,
  getDestinationItineraries,
  getMoodStories,
  getTravelMood,
  travelMoods,
  type MoodStory,
  type TravelMoodSlug,
} from "../data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Browse countries, cities, regions and islands for thoughtful travel planning.",
};

type PlaceType = "country" | "city" | "region" | "island";

const placeTypes: Record<string, PlaceType> = {
  portugal: "country",
  spain: "country",
  italy: "country",
  lisbon: "city",
  naples: "city",
  rome: "city",
  milan: "city",
  london: "city",
  paris: "city",
  marrakech: "city",
  madeira: "island",
  "greek-islands": "island",
  "amalfi-coast": "region",
  andalusia: "region",
};

const countryDescriptions: Record<string, string> = {
  portugal:
    "Golden cities, Atlantic coastlines, rail journeys and slower routes through Lisbon, Porto, the Douro and Madeira.",
  italy:
    "Regional journeys built around food, cities, coastlines, design and routes worth taking slowly.",
  spain:
    "Rail-linked cities, long lunches, warm shoulder seasons and routes shaped by rhythm rather than rush.",
};

const placeTypeFilters: Array<{ label: string; value?: PlaceType }> = [
  { label: "All" },
  { label: "Countries", value: "country" },
  { label: "Cities", value: "city" },
  { label: "Regions", value: "region" },
  { label: "Islands", value: "island" },
];

type DestinationsPageProps = {
  searchParams?: Promise<{ q?: string; mood?: string; type?: string }>;
};

function getCountryDepth(destination: (typeof destinations)[number]) {
  const relatedSlugs = destinations
    .filter((item) => item.country === destination.country)
    .map((item) => item.slug);
  const articles = destinationBlogArticles.filter((article) =>
    relatedSlugs.includes(article.destinationSlug),
  ).length;
  const itineraries = new Set(
    relatedSlugs.flatMap((slug) =>
      getDestinationItineraries(slug).map((itinerary) => itinerary.slug),
    ),
  ).size;

  return { articles, itineraries };
}

function matchesSearch(
  destination: (typeof destinations)[number],
  query: string,
) {
  if (!query) {
    return true;
  }

  return [
    destination.title,
    destination.country,
    destination.region,
    destination.mood,
    destination.bestFor,
    destination.excerpt,
    ...destination.highlights,
  ]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function getDestinationsHref(
  params: { q?: string; mood?: string; type?: string } | undefined,
  updates: Record<string, string | undefined>,
  hash = "",
) {
  const search = new URLSearchParams();
  const values = { q: params?.q, mood: params?.mood, type: params?.type, ...updates };

  Object.entries(values).forEach(([key, value]) => {
    if (value) {
      search.set(key, value);
    }
  });

  return `/destinations${search.size ? `?${search.toString()}` : ""}${hash}`;
}

function CountryBrowseCard({
  destination,
}: {
  destination: (typeof destinations)[number];
}) {
  const depth = getCountryDepth(destination);
  const stats = [
    depth.articles
      ? `${depth.articles} ${depth.articles === 1 ? "article" : "articles"}`
      : null,
    depth.itineraries
      ? `${depth.itineraries} ${
          depth.itineraries === 1 ? "itinerary" : "itineraries"
        }`
      : null,
  ].filter(Boolean);

  return (
    <article className="country-browse-card">
      <Link
        href={`/destinations/${destination.slug}`}
        aria-label={`Explore ${destination.title}`}
      >
        <img src={destination.image} alt={destination.alt} loading="lazy" />
      </Link>
      <div className="country-browse-card-copy">
        <h3>{destination.title}</h3>
        <p>{countryDescriptions[destination.slug]}</p>
        {stats.length > 0 ? (
          <p className="country-browse-card-meta">{stats.join(" · ")}</p>
        ) : null}
        <Link className="text-link" href={`/destinations/${destination.slug}`}>
          Explore {destination.title}
        </Link>
      </div>
    </article>
  );
}

function MoodStoryCard({ story }: { story: MoodStory }) {
  const cta =
    story.contentType === "Itinerary"
      ? "View itinerary"
      : story.contentType === "Destination"
        ? "Explore destination"
        : "Read story";

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
        {story.location ? <p className="mood-story-location">{story.location}</p> : null}
        <p>{story.excerpt}</p>
        <Link className="text-link" href={story.href}>
          {cta}
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
  const selectedMood = getTravelMood(params?.mood ?? "");
  const selectedMoodSlug = selectedMood?.slug as TravelMoodSlug | undefined;
  const selectedType = placeTypeFilters.some(
    (filter) => filter.value === params?.type,
  )
    ? (params?.type as PlaceType | undefined)
    : undefined;
  const countryDestinations = featuredDestinationSlugs
    .map((slug) => getDestination(slug))
    .filter((destination): destination is (typeof destinations)[number] =>
      Boolean(destination),
    );
  const browseTiles = getDestinationBrowseTiles();
  const visibleTiles = browseTiles.filter(
    (tile) =>
      matchesSearch(tile.destination, query) &&
      (!selectedType || placeTypes[tile.slug] === selectedType),
  );
  const moodStories = selectedMoodSlug ? getMoodStories(selectedMoodSlug) : [];

  return (
    <main>
      <PageHero eyebrow="Destinations" title="Find your next place">
        <p>Browse by country or by the kind of trip you want to take.</p>
      </PageHero>

      <section className="destination-search section-shell">
        <form action="/destinations#all-destinations" method="get" role="search">
          <label htmlFor="destination-search">Search destinations</label>
          <div className="destination-search-row">
            <input
              id="destination-search"
              name="q"
              type="search"
              placeholder="Search a country, city or travel mood"
              defaultValue={params?.q ?? ""}
            />
            {selectedMoodSlug ? (
              <input type="hidden" name="mood" value={selectedMoodSlug} />
            ) : null}
            {selectedType ? <input type="hidden" name="type" value={selectedType} /> : null}
            <button className="button dark" type="submit">
              Search
            </button>
          </div>
        </form>
      </section>

      <section className="section-shell destination-feature-section">
        <SectionHeading eyebrow="Browse by country" title="Start with the map.">
          <p>Three ways into Europe, each with plenty of room to make the trip your own.</p>
        </SectionHeading>
        <div className="country-browse-grid">
          {countryDestinations.map((destination) => (
            <CountryBrowseCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="travel-by-mood">
        <SectionHeading eyebrow="Travel by mood" title="Start with how you want to feel.">
          <p>Choose a mood to see destinations, itineraries and stories with a shared rhythm.</p>
        </SectionHeading>
        <div className="mood-toolbar">
          <Link
            className={`mood-show-all${selectedMoodSlug ? "" : " is-active"}`}
            href={getDestinationsHref(params, { mood: undefined }, "#travel-by-mood")}
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
                href={getDestinationsHref(params, { mood: mood.slug }, "#mood-results")}
                key={mood.slug}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="mood-card-kicker">Mood</span>
                <h3>{mood.title}</h3>
                <p>{mood.description}</p>
                <span className="mood-card-link">View stories</span>
              </Link>
            );
          })}
        </div>

        <div className="mood-results" id="mood-results">
          {selectedMood ? (
            <>
              <SectionHeading eyebrow="Mood results" title={selectedMood.title}>
                <p>Stories and routes chosen for this kind of trip.</p>
              </SectionHeading>
              {moodStories.length > 0 ? (
                <div className="mood-story-grid">
                  {moodStories.map((story) => (
                    <MoodStoryCard key={story.id} story={story} />
                  ))}
                </div>
              ) : (
                <div className="destination-no-results">
                  <h3>No stories match this mood.</h3>
                  <Link
                    className="text-link"
                    href={getDestinationsHref(params, { mood: undefined }, "#travel-by-mood")}
                  >
                    Show all moods
                  </Link>
                </div>
              )}
            </>
          ) : null}
        </div>
      </section>

      <section className="section-shell" id="all-destinations">
        <SectionHeading eyebrow="All destinations" title="Browse the collection.">
          <p>Countries, cities, regions and islands, gathered in one place.</p>
        </SectionHeading>
        <nav className="destination-type-filters" aria-label="Filter destinations by type">
          {placeTypeFilters.map((filter) => {
            const isActive = selectedType === filter.value;

            return (
              <Link
                key={filter.label}
                className={`destination-type-filter${isActive ? " is-active" : ""}`}
                href={getDestinationsHref(
                  params,
                  { type: filter.value },
                  "#all-destinations",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {filter.label}
              </Link>
            );
          })}
        </nav>

        {visibleTiles.length > 0 ? (
          <div className="destination-discovery-grid compact">
            {visibleTiles.map((tile) => (
              <article className="destination-card card" key={tile.slug}>
                <Link href={`/destinations/${tile.slug}`} aria-label={tile.label}>
                  <img
                    src={tile.destination.image}
                    alt={tile.destination.alt}
                    loading="lazy"
                  />
                </Link>
                <div className="card-body">
                  <p className="eyebrow">{placeTypes[tile.slug]}</p>
                  <h3>{tile.label}</h3>
                  <p>{tile.destination.excerpt}</p>
                  <Link className="text-link" href={`/destinations/${tile.slug}`}>
                    Explore {tile.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="destination-no-results">
            <h3>No destinations match those filters.</h3>
            <Link className="text-link" href="/destinations#all-destinations">
              Clear filters
            </Link>
          </div>
        )}
      </section>

      <NewsletterBand />
    </main>
  );
}
