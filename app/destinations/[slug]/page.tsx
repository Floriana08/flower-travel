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
  guides,
  itineraries,
  site,
} from "../../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const portugalSnapshot = [
  { label: "Best time to visit", value: "Spring and early autumn" },
  { label: "Best way to travel", value: "Train between the main cities" },
  { label: "Ideal trip length", value: "7-14 days" },
  { label: "Budget", value: "$$-$$$" },
  {
    label: "Perfect for",
    value: "Food lovers / Couples / First-time Europe / Slow travel",
  },
  { label: "Travel style", value: "Relaxed, walkable and rail-friendly" },
] as const;

const portugalWhyArticle = {
  lead:
    "Portugal is easy to love, but it is even better when you slow the route down and let each place have its own texture.",
  paragraphs: [
    "Lisbon and Porto have the beauty of larger European capitals without the same relentless pace. You can spend a morning in tiled streets, pause for a long lunch, and still feel as if the day belongs to you. That sense of space is what makes Portugal such a satisfying first Europe trip, and such a rewarding return.",
    "Food is not a side note here. Seafood lunches, pastelarias, neighbourhood tascas and Douro wine days shape the itinerary as much as museums or viewpoints. The country also travels well by train: Porto, Coimbra, Lisbon and Cascais connect cleanly enough that you can keep hotel changes few and still cover a memorable stretch of the mainland.",
    "Beyond the cities, Atlantic light pulls you toward Cascais, Comporta, the Algarve and the quieter surf towns. Madeira sits apart as its own adventure of cliffs, levadas and dramatic weather. Outside peak summer, Portugal also offers excellent value, a welcoming local rhythm, and the rare feeling that a trip can be both beautiful and manageable.",
  ],
  closing:
    "The best version of Portugal is rarely the one that tries to do everything. Choose one route, stay longer, and let curiosity set the pace.",
} as const;

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
    description: "Boutique stays, calm bases and routes with room to breathe.",
  },
] as const;

const portugalMistakes = [
  "Driving in central Lisbon",
  "Visiting Sintra on a Saturday",
  "Treating the Algarve as a day trip",
  "Booking the Douro in August without reservations",
  "Spending only one night in Porto",
  "Adding Madeira to an already packed mainland itinerary",
] as const;

type PortugalJournalEntry = {
  title: string;
  label: string;
  excerpt: string;
  readTime: string;
  image: string;
  alt: string;
  href?: string;
};

function getPortugalJournalEntries(): PortugalJournalEntry[] {
  const stay = guides.find((guide) => guide.slug === "where-to-stay-lisbon");
  const madeira = guides.find((guide) => guide.slug === "madeira-first-timers");
  const food = itineraries.find((item) => item.slug === "lisbon-food-tour");
  const train = itineraries.find((item) => item.slug === "portugal-by-train");
  const douro = itineraries.find((item) => item.slug === "porto-wine-day");
  const entries: PortugalJournalEntry[] = [];

  if (stay) {
    entries.push({
      title: stay.title,
      label: stay.destination,
      excerpt: stay.excerpt,
      readTime: stay.readTime,
      image: stay.image,
      alt: stay.alt,
      href: `/travel-guides/${stay.slug}`,
    });
  }

  if (food) {
    entries.push({
      title: food.title,
      label: "Lisbon",
      excerpt: food.summary,
      readTime: "5 min read",
      image: food.image,
      alt: food.alt,
      href: `/routes/${food.slug}`,
    });
  }

  if (madeira) {
    entries.push({
      title: madeira.title,
      label: madeira.destination,
      excerpt: madeira.excerpt,
      readTime: madeira.readTime,
      image: madeira.image,
      alt: madeira.alt,
      href: `/travel-guides/${madeira.slug}`,
    });
  }

  if (train) {
    entries.push({
      title: train.title,
      label: "Portugal",
      excerpt: train.summary,
      readTime: "8 min read",
      image: train.image,
      alt: train.alt,
      href: `/routes/${train.slug}`,
    });
  }

  if (douro) {
    entries.push({
      title: douro.title,
      label: "Douro",
      excerpt: douro.summary,
      readTime: "5 min read",
      image: douro.image,
      alt: douro.alt,
      href: `/routes/${douro.slug}`,
    });
  }

  return entries;
}

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
  const portugalJournal = isPortugal ? getPortugalJournalEntries() : [];
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

      {isPortugal ? (
        <PageHero
          className="portugal-hero"
          eyebrow="Portugal"
          title="Portugal, slowly"
          image={destination.image}
          alt={destination.alt}
          imageObjectPosition="center 40%"
        >
          <p>Golden cities, Atlantic coastlines and journeys that reward curiosity.</p>
          <p>
            From Lisbon’s tiled streets to the vineyards of the Douro and the
            dramatic landscapes of Madeira, Portugal is best explored with fewer
            hotel changes, longer lunches and plenty of time to wander.
          </p>
          <div className="destination-hero-actions">
            <Link className="button dark" href="#start-planning">
              Explore Portugal
            </Link>
          </div>
        </PageHero>
      ) : (
        <PageHero
          eyebrow={destination.country}
          title={destination.title}
          image={destination.image}
          alt={destination.alt}
        >
          <p>{profile.overview}</p>
        </PageHero>
      )}

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

              <section
                className="portugal-mistakes-panel"
                aria-labelledby="portugal-mistakes-heading"
              >
                <p className="eyebrow">Planning notes</p>
                <h3 id="portugal-mistakes-heading">
                  Portugal planning mistakes to avoid
                </h3>
                <p>Small choices can completely change the pace of the trip.</p>
                <ul className="portugal-mistakes-list">
                  {portugalMistakes.map((mistake) => (
                    <li key={mistake}>{mistake}</li>
                  ))}
                </ul>
              </section>
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

        <div
          className={`destination-guide-main${isPortugal ? " portugal-main" : ""}`}
        >
          {isPortugal ? (
            <section className="portugal-why">
              <SectionHeading
                eyebrow="Why Portugal"
                title="Why visit Portugal now?"
              />
              <article className="portugal-why-article">
                <p className="portugal-why-lead">{portugalWhyArticle.lead}</p>
                {portugalWhyArticle.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                <p className="portugal-why-closing">{portugalWhyArticle.closing}</p>
              </article>
            </section>
          ) : null}

          <section className={isPortugal ? "flor-tip-card" : "editors-pick"}>
            <p className="eyebrow">{isPortugal ? "Flor's Tip" : "Flor's Pick"}</p>
            {isPortugal ? (
              <>
                <h2>
                  Everyone tries to squeeze Lisbon, Porto, the Algarve and Madeira
                  into one trip.
                </h2>
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
          ) : (
            <section>
              <SectionHeading
                eyebrow="Plan by chapter"
                title={`How to explore ${destination.title.split(",")[0]}.`}
              >
                <p>
                  Itineraries, neighbourhoods, restaurants, hotels, experiences,
                  journal notes, and map points now live together inside the
                  destination.
                </p>
              </SectionHeading>

              <div className="chapter-grid">
                {profile.chapters.map((chapter) => (
                  <article className="chapter-card" key={chapter.title}>
                    <span>{chapter.title}</span>
                    <p>{chapter.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {destinationItineraries.length > 0 ? (
            <section>
              <SectionHeading
                eyebrow={
                  isPortugal ? "Featured Portugal itineraries" : "Featured Itineraries"
                }
                title={
                  isPortugal
                    ? "Routes worth building a trip around."
                    : "Routes connected to this place."
                }
              >
                {isPortugal ? (
                  <p>
                    Three practical starting points: a rail journey, a food-led
                    Lisbon morning, and a slower Douro day from Porto.
                  </p>
                ) : null}
              </SectionHeading>
              <div className="itinerary-grid wide">
                {destinationItineraries.map((itinerary) => (
                  <ItineraryCard
                    key={itinerary.slug}
                    itinerary={itinerary}
                    ctaLabel={isPortugal ? "View itinerary" : "View route"}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {isPortugal ? (
            <section>
              <SectionHeading
                eyebrow="Journal"
                title="From the Portugal Journal"
              >
                <p>
                  Neighbourhood notes, hotel edits, food guides and thoughtful
                  routes from across Portugal.
                </p>
              </SectionHeading>

              <div className="destination-article-grid">
                {portugalJournal.map((entry) => {
                  const cardInner = (
                    <>
                      <img src={entry.image} alt={entry.alt} loading="lazy" />
                      <div className="card-body">
                        <div className="meta-line">
                          <span>{entry.label}</span>
                          <span>{entry.readTime}</span>
                        </div>
                        <h3>{entry.title}</h3>
                        <p>{entry.excerpt}</p>
                        {entry.href ? (
                          <span className="text-link destination-article-link">
                            Read story
                          </span>
                        ) : null}
                      </div>
                    </>
                  );

                  return entry.href ? (
                    <Link
                      className="destination-article-card"
                      key={entry.title}
                      href={entry.href}
                      aria-label={entry.title}
                    >
                      {cardInner}
                    </Link>
                  ) : (
                    <article className="destination-article-card" key={entry.title}>
                      {cardInner}
                    </article>
                  );
                })}
              </div>
            </section>
          ) : (
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
          )}

          {isPortugal ? null : (
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
          eyebrow={isPortugal ? "Related destinations" : "Keep browsing"}
          title={
            isPortugal ? "Continue exploring" : "More destinations in the archive."
          }
        >
          {isPortugal ? (
            <p>
              More places for travellers who prefer character, atmosphere and a
              slower pace.
            </p>
          ) : null}
        </SectionHeading>
        <div className="destination-grid">
          {relatedDestinations.map((relatedDestination) => (
            <DestinationCard
              key={relatedDestination.slug}
              destination={relatedDestination}
            />
          ))}
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
