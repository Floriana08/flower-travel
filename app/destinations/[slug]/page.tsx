import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  DestinationCard,
  ItineraryCard,
  NewsletterBand,
  PageHero,
  SectionHeading,
} from "../../components";
import {
  destinations,
  getDestination,
  getDestinationArticles,
  getDestinationItineraries,
  getDestinationProfile,
  site,
} from "../../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const portugalSnapshot = [
  { label: "Best season", value: "Spring and early autumn" },
  { label: "Best way to travel", value: "Train between the main cities" },
  { label: "Ideal trip length", value: "7-14 days" },
  { label: "Budget", value: "$$-$$$" },
  {
    label: "Perfect for",
    value: "Food lovers / Couples / First-time Europe / Slow travel",
  },
  { label: "Travel style", value: "Relaxed, walkable and rail-friendly" },
] as const;

const portugalReasons = [
  "Beautiful cities without the rush of larger European capitals",
  "One of Europe's best food scenes",
  "Easy train travel between the main cities",
  "Atlantic coastline, surf towns and island landscapes",
  "Excellent value when you avoid peak summer",
  "Friendly, welcoming local rhythm",
  "Perfect for first-time Europe trips",
] as const;

const portugalWays = [
  {
    title: "Food & Wine",
    description: "Seafood lunches, bakeries, tascas, wine bars and Douro days.",
  },
  {
    title: "Coast & Beaches",
    description: "Cascais, Comporta, the Algarve, surf towns and Atlantic light.",
  },
  {
    title: "Rail Journey",
    description: "Porto, Coimbra, Lisbon and Cascais with fewer hotel changes.",
  },
  {
    title: "City Break",
    description: "Lisbon or Porto with neighbourhood walks and long meals.",
  },
  {
    title: "Islands",
    description: "Madeira as its own adventure, not a rushed add-on.",
  },
  {
    title: "Nature",
    description: "Levadas, cliffs, vineyards, viewpoints and softer hiking days.",
  },
  {
    title: "Romantic Escape",
    description: "Boutique stays, slow mornings and routes with room to breathe.",
  },
] as const;

const portugalChapters = [
  {
    title: "Cities",
    description: "Lisbon, Porto, Coimbra and the bases that make the route feel easy.",
  },
  {
    title: "Restaurants",
    description: "Seafood, wine bars, tascas, bakeries and tables worth planning around.",
  },
  {
    title: "Hotels",
    description: "Boutique stays, calm bases and future hotel shortlists.",
  },
  {
    title: "Itineraries",
    description: "Rail-first routes, food walks, Douro days and slower city-to-coast plans.",
  },
  {
    title: "Day Trips",
    description: "Sintra, Cascais, the Douro and escapes that need honest timing.",
  },
  {
    title: "Journal",
    description: "Neighbourhood notes, lower-impact travel ideas and personal discoveries.",
  },
] as const;

const portugalSeasons = [
  {
    title: "Spring",
    description: "Best for cities, walking days, gardens and softer hiking weather.",
  },
  {
    title: "Summer",
    description: "Coast, festivals and long evenings, with busier prices and beaches.",
  },
  {
    title: "Autumn",
    description: "Wine harvests, warm light, fewer crowds and excellent city days.",
  },
  {
    title: "Winter",
    description: "Lisbon, Porto and Madeira, with a calmer rhythm and better value.",
  },
] as const;

const portugalMistakes = [
  "Driving in Lisbon.",
  "Visiting Sintra on a Saturday.",
  "Treating the Algarve as a day trip.",
  "Booking the Douro in August without reservations.",
  "Spending only one night in Porto.",
] as const;

const portugalComingSoon = [
  "Boutique hotel collection",
  "Restaurant map",
  "Neighbourhood guides",
  "Interactive walking routes",
  "Club extras",
] as const;

const portugalClubBenefits = [
  "New Portugal guides",
  "Restaurant recommendations",
  "Boutique hotel collections",
  "Printable itineraries, coming soon",
  "Local discoveries before they are published",
] as const;

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return {};
  }

  return {
    title: `${destination.title} Travel Guide`,
    description: destination.excerpt,
    openGraph: {
      title: `${destination.title} Travel Guide | ${site.name}`,
      description: destination.excerpt,
      type: "website",
      images: [
        {
          url: destination.image,
          width: 1600,
          height: 1067,
          alt: destination.alt,
        },
      ],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  const isPortugal = destination.slug === "portugal";
  const profile = getDestinationProfile(destination.slug);
  const articles = getDestinationArticles(destination.slug);
  const destinationItineraries = getDestinationItineraries(destination.slug);
  const relatedDestinations = destinations
    .filter(
      (item) =>
        item.slug !== destination.slug &&
        (item.country === destination.country ||
          item.continent === destination.continent),
    )
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${destination.title} travel guide`,
    description: destination.excerpt,
    image: destination.image,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
    mainEntityOfPage: `https://flowertravel.studio/destinations/${destination.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        eyebrow={destination.country}
        title={destination.title}
        image={destination.image}
        alt={destination.alt}
      >
        <p>{profile.overview}</p>
        {isPortugal ? (
          <div className="destination-hero-actions">
            <Link className="button dark" href="#start-planning">
              Start planning
            </Link>
          </div>
        ) : null}
      </PageHero>

      <section className="destination-guide-shell section-shell" id="start-planning">
        <aside className="destination-profile">
          <Link className="article-back-link" href="/destinations">
            Destinations
          </Link>
          {isPortugal ? (
            <>
              <p className="eyebrow">Portugal at a glance</p>
              <h2>Travel snapshot</h2>
              <dl className="travel-snapshot-list">
                {portugalSnapshot.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          ) : (
            <>
              <p className="eyebrow">At a glance</p>
              <h2>{destination.mood}</h2>
              <dl>
                <div>
                  <dt>Best time</dt>
                  <dd>{destination.season}</dd>
                </div>
                <div>
                  <dt>Budget</dt>
                  <dd>{profile.atAGlance.budget}</dd>
                </div>
                <div>
                  <dt>Best way around</dt>
                  <dd>{profile.atAGlance.gettingAround}</dd>
                </div>
                <div>
                  <dt>Sustainability score</dt>
                  <dd>{profile.atAGlance.sustainability}</dd>
                </div>
                <div>
                  <dt>Perfect for</dt>
                  <dd>{profile.atAGlance.perfectFor.join(", ")}</dd>
                </div>
              </dl>
            </>
          )}
        </aside>

        <div className="destination-guide-main">
          {isPortugal ? (
            <section className="portugal-why">
              <SectionHeading eyebrow="Why Portugal?" title="Why visit Portugal now?">
                <p>
                  Portugal is easy to love, but it is even better when you slow
                  the route down and let each place have its own texture.
                </p>
              </SectionHeading>
              <div className="portugal-reason-grid">
                {portugalReasons.map((reason) => (
                  <span key={reason}>{reason}</span>
                ))}
              </div>
            </section>
          ) : null}

          <section className={isPortugal ? "flor-tip-card" : "editors-pick"}>
            <p className="eyebrow">{isPortugal ? "Flor's Tip" : "Flor's Pick"}</p>
            {isPortugal ? (
              <>
                <h2>Everyone tries to squeeze Lisbon, Porto, the Algarve and Madeira into one trip.</h2>
                <p>Do not.</p>
                <p>
                  Portugal rewards slower travel. I would choose one route,
                  spend longer in fewer places, and save Madeira for a
                  completely separate adventure. Those are the trips you will
                  actually remember.
                </p>
              </>
            ) : (
              <h2>{profile.editorsPick}</h2>
            )}
          </section>

          {isPortugal ? (
            <section>
              <SectionHeading
                eyebrow="Choose your Portugal"
                title="Which Portugal are you looking for?"
              >
                <p>
                  Start with the feeling of the trip, then choose the route that
                  fits it.
                </p>
              </SectionHeading>
              <div className="portugal-way-grid">
                {portugalWays.map((way) => (
                  <article className="portugal-way-card" key={way.title}>
                    <span>{way.title}</span>
                    <p>{way.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <SectionHeading
              eyebrow={isPortugal ? "Explore by chapter" : "Plan by chapter"}
              title={
                isPortugal
                  ? "Build the guide around what you need."
                  : `How to explore ${destination.title.split(",")[0]}.`
              }
            >
              <p>
                {isPortugal
                  ? "Cities, food, stays, day trips, routes and journal notes will grow into one polished Portugal guide."
                  : "Itineraries, neighbourhoods, restaurants, hotels, experiences, journal notes, and map points now live together inside the destination."}
              </p>
            </SectionHeading>

            <div className={`chapter-grid${isPortugal ? " visual" : ""}`}>
              {(isPortugal ? portugalChapters : profile.chapters).map((chapter) => (
                <article className="chapter-card" key={chapter.title}>
                  <span>{chapter.title}</span>
                  <p>{chapter.description}</p>
                </article>
              ))}
            </div>
          </section>

          {isPortugal ? (
            <section>
              <SectionHeading eyebrow="Portugal by season" title="When to go.">
                <p>
                  Portugal works all year, but the best version of the trip
                  depends on the season.
                </p>
              </SectionHeading>
              <div className="season-grid">
                {portugalSeasons.map((season) => (
                  <article className="season-card" key={season.title}>
                    <h3>{season.title}</h3>
                    <p>{season.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {destinationItineraries.length > 0 ? (
            <section>
              <SectionHeading
                eyebrow={isPortugal ? "Editor's favourite journeys" : "Featured Itineraries"}
                title={isPortugal ? "Start with these routes." : "Routes connected to this place."}
              />
              <div className="itinerary-grid wide">
                {destinationItineraries.map((itinerary) => (
                  <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
                ))}
              </div>
            </section>
          ) : null}

          {isPortugal ? (
            <section className="avoid-mistakes-panel">
              <SectionHeading
                eyebrow="Avoid these mistakes"
                title="The small planning traps that change the trip."
              />
              <ul>
                {portugalMistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <SectionHeading
              eyebrow="Journal"
              title={`Articles linked to ${destination.title.split(",")[0]}.`}
            >
              <p>
                City notes, restaurant edits, route ideas, hotel thoughts, and
                personal observations can grow here over time.
              </p>
            </SectionHeading>

            {articles.length > 0 ? (
              <div className="destination-article-list">
                {articles.map((article) => (
                  <article
                    className="destination-article-row"
                    key={article.slug}
                  >
                    <div>
                      <div className="meta-line">
                        <span>{article.category}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                    </div>
                    <Link
                      className="text-link"
                      href={`/destinations/${destination.slug}/articles/${article.slug}`}
                    >
                      Read story
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="article-panel">
                <h2>Journal coming next</h2>
                <p>
                  This destination is ready for future articles, hotel notes,
                  restaurant edits, and local favourites.
                </p>
              </div>
            )}
          </section>

          {isPortugal ? (
            <>
              <section className="growing-guide-panel">
                <p className="eyebrow">Growing this guide</p>
                <h2>Next additions</h2>
                <ul>
                  {portugalComingSoon.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="club-extras-panel destination-specific">
                <p className="eyebrow">Planning a trip to Portugal?</p>
                <h2>Join the Club for the next Portugal edits.</h2>
                <p>
                  Receive new guides, restaurant notes, hotel shortlists and
                  practical routes as this destination grows.
                </p>
                <ul>
                  {portugalClubBenefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <Link className="button light" href="/club">
                  Join the Club
                </Link>
              </section>
            </>
          ) : (
            <section className="club-extras-panel">
              <p className="eyebrow">Club Extras</p>
              <h2>Future member additions for this destination.</h2>
              <ul>
                {profile.clubExtras.map((extra) => (
                  <li key={extra}>{extra}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </section>

      <section className="section-shell tinted">
        <SectionHeading
          eyebrow="Keep browsing"
          title="More destinations in the archive."
        />
        <div className="destination-grid">
          {relatedDestinations.map((relatedDestination) => (
            <DestinationCard
              key={relatedDestination.slug}
              destination={relatedDestination}
            />
          ))}
        </div>
      </section>

      {isPortugal ? null : <NewsletterBand />}
    </main>
  );
}
