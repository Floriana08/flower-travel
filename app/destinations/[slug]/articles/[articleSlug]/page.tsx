import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { NewsletterBand } from "../../../../components";
import {
  destinationBlogArticles,
  getDestination,
  getDestinationArticle,
  getDestinationArticles,
  site,
} from "../../../../data";

type PageProps = {
  params: Promise<{ slug: string; articleSlug: string }>;
};

export function generateStaticParams() {
  return destinationBlogArticles.map((article) => ({
    slug: article.destinationSlug,
    articleSlug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, articleSlug } = await params;
  const destination = getDestination(slug);
  const article = getDestinationArticle(slug, articleSlug);

  if (!destination || !article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.excerpt,
      type: "article",
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

export default async function DestinationArticlePage({ params }: PageProps) {
  const { slug, articleSlug } = await params;
  const destination = getDestination(slug);
  const article = getDestinationArticle(slug, articleSlug);

  if (!destination || !article) {
    notFound();
  }

  const relatedArticles = getDestinationArticles(destination.slug).filter(
    (relatedArticle) => relatedArticle.slug !== article.slug,
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: destination.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: "https://flowertravel.studio/logo.svg",
      },
    },
    mainEntityOfPage: `https://flowertravel.studio/destinations/${destination.slug}/articles/${article.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="article-page">
        <header className="article-hero">
          <div className="article-hero-copy reveal">
            <Link
              className="article-back-link"
              href={`/destinations/${destination.slug}`}
            >
              {destination.title}
            </Link>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="article-dek">{article.excerpt}</p>
            <div className="article-meta">
              <span>{destination.country}</span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
          <figure className="article-hero-image reveal delay-1">
            <img src={destination.image} alt={destination.alt} />
          </figure>
        </header>

        <div className="article-layout">
          <aside className="article-sidebar" aria-label="Destination summary">
            <div className="article-panel">
              <h2>Destination</h2>
              <p>{destination.title}</p>
            </div>
            <div className="article-panel">
              <h2>Best for</h2>
              <p>{destination.bestFor}</p>
            </div>
          </aside>

          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 ? (
        <section className="section-shell">
          <SectionHeadingLite
            eyebrow="More from this destination"
            title={`Keep reading ${destination.title}.`}
          />
          <div className="destination-article-list compact">
            {relatedArticles.map((relatedArticle) => (
              <article className="destination-article-row" key={relatedArticle.slug}>
                <div>
                  <div className="meta-line">
                    <span>{relatedArticle.category}</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                  <h3>{relatedArticle.title}</h3>
                  <p>{relatedArticle.excerpt}</p>
                </div>
                <Link
                  className="text-link"
                  href={`/destinations/${destination.slug}/articles/${relatedArticle.slug}`}
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <NewsletterBand />
    </main>
  );
}

function SectionHeadingLite({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
