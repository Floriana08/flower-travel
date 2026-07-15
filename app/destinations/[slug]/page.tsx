import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DestinationCard, NewsletterBand, PageHero, SectionHeading } from "../../components";
import {
  destinations,
  getDestination,
  getDestinationArticles,
  site,
} from "../../data";

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

  return {
    title: `${destination.title} Travel Articles`,
    description: destination.excerpt,
    openGraph: {
      title: `${destination.title} Travel Articles | ${site.name}`,
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

  const articles = getDestinationArticles(destination.slug);
  const relatedDestinations = destinations
    .filter((item) => item.slug !== destination.slug)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${destination.title} travel articles`,
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
        title={`${destination.title} travel articles`}
        image={destination.image}
        alt={destination.alt}
      >
        <p>{destination.excerpt}</p>
      </PageHero>

      <section className="destination-page-grid section-shell">
        <aside className="destination-profile">
          <Link className="article-back-link" href="/destinations">
            Destinations
          </Link>
          <p className="eyebrow">{destination.mood}</p>
          <h2>Destination notes</h2>
          <dl>
            <div>
              <dt>Best time</dt>
              <dd>{destination.season}</dd>
            </div>
            <div>
              <dt>Best for</dt>
              <dd>{destination.bestFor}</dd>
            </div>
            <div>
              <dt>Highlights</dt>
              <dd>{destination.highlights.join(", ")}</dd>
            </div>
          </dl>
        </aside>

        <div>
          <SectionHeading
            eyebrow="Destination blog"
            title={`Articles linked to ${destination.title}.`}
          >
            <p>
              Use this page as the editorial hub for the destination: city
              notes, story-led posts, route ideas, hotel thoughts, and future
              Club-only edits can all live here.
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
                  Read article
                </Link>
              </article>
            ))}
          </div>
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

      <NewsletterBand />
    </main>
  );
}
