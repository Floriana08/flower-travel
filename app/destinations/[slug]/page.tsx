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
import { PortugalDestinationGuide } from "../../portugal-destination-guide";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return {};
  }

  const title =
    slug === "portugal"
      ? "Portugal Travel Guide: routes, neighbourhoods and slow itineraries"
      : `${destination.title} Travel Guide`;
  const description =
    slug === "portugal"
      ? "A practical Portugal guide for slow travellers: Lisbon, Porto, Douro, Madeira, trains, hotels and Flor’s planning notes."
      : destination.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `https://flowertravel.studio/destinations/${destination.slug}`,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
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

  if (destination.slug === "portugal") {
    return (
      <main>
        <PortugalDestinationGuide />
      </main>
    );
  }

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
    "@type": "TouristDestination",
    name: destination.title,
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
      </PageHero>

      <section className="destination-guide-shell section-shell" id="start-planning">
        <aside className="destination-profile">
          <Link className="article-back-link" href="/destinations">
            Destinations
          </Link>
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
        </aside>

        <div className="destination-guide-main">
          <section className="editors-pick">
            <p className="eyebrow">Flor&apos;s Pick</p>
            <h2>{profile.editorsPick}</h2>
          </section>

          <section>
            <SectionHeading
              eyebrow="Plan by chapter"
              title={`How to explore ${destination.title.split(",")[0]}.`}
            >
              <p>
                Itineraries, neighbourhoods, restaurants, hotels and journal
                notes for this destination.
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

          {destinationItineraries.length > 0 ? (
            <section>
              <SectionHeading
                eyebrow="Featured Itineraries"
                title="Routes connected to this place."
              />
              <div className="itinerary-grid wide">
                {destinationItineraries.map((itinerary) => (
                  <ItineraryCard
                    key={itinerary.slug}
                    itinerary={itinerary}
                    ctaLabel="View route"
                  />
                ))}
              </div>
            </section>
          ) : null}

          {articles.length > 0 ? (
            <section>
              <SectionHeading
                eyebrow="Journal"
                title={`From the ${destination.title.split(",")[0]} Journal`}
              >
                <p>
                  Neighbourhood notes, hotel edits and thoughtful routes for
                  this destination.
                </p>
              </SectionHeading>
              <div className="destination-article-list">
                {articles.map((article) => (
                  <article className="destination-article-row" key={article.slug}>
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
            </section>
          ) : null}
        </div>
      </section>

      <section className="section-shell tinted">
        <SectionHeading
          eyebrow="Related destinations"
          title="Continue exploring"
        >
          <p>
            More places for travellers who prefer character, atmosphere and a
            slower pace.
          </p>
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
