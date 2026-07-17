import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guideArticles, getGuideArticle } from "../../articles";
import { ConsultationCta, GuideCard, NewsletterBand } from "../../components";
import { guides, site } from "../../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  const article = getGuideArticle(slug);

  if (!guide || !article) {
    return {};
  }

  return {
    title: guide.title,
    description: article.dek,
    openGraph: {
      title: `${guide.title} | ${site.name}`,
      description: article.dek,
      type: "article",
      images: [
        {
          url: guide.image,
          width: 1600,
          height: 1067,
          alt: guide.alt,
        },
      ],
    },
  };
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const article = getGuideArticle(slug);

  if (!guide || !article) {
    notFound();
  }

  const relatedGuides = guides
    .filter((relatedGuide) => relatedGuide.slug !== guide.slug)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: article.dek,
    image: guide.image,
    datePublished: guide.date,
    dateModified: article.lastReviewed,
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
    mainEntityOfPage: `https://flowertravel.studio/travel-guides/${guide.slug}`,
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
            <Link className="article-back-link" href="/travel-guides">
              Travel Journal
            </Link>
            <p className="eyebrow">{guide.category}</p>
            <h1>{guide.title}</h1>
            <p className="article-dek">{article.dek}</p>
            <div className="article-meta">
              <span>{guide.destination}</span>
              <span>{guide.date}</span>
              <span>{guide.readTime}</span>
              <span>Reviewed {article.lastReviewed}</span>
            </div>
          </div>
          <figure className="article-hero-image reveal delay-1">
            <img src={guide.image} alt={guide.alt} />
          </figure>
        </header>

        <div className="article-layout">
          <aside className="article-sidebar" aria-label="Article summary">
            <div className="article-panel">
              <h2>Useful for</h2>
              <ul>
                {article.goodFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="article-panel">
              <h2>Quick facts</h2>
              <ul>
                {article.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="article-sources">
              <h2>Sources and research notes</h2>
              <p>
                These guide pages are written as editorial planning notes, not
                legal, safety, or official booking advice. Check opening times,
                trail conditions, transport rules, and entry requirements before
                you book.
              </p>
              <ul>
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noreferrer" target="_blank">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Keep reading</p>
          <h2>More guides for thoughtful planning.</h2>
        </div>
        <div className="guide-grid">
          {relatedGuides.map((relatedGuide) => (
            <GuideCard key={relatedGuide.slug} guide={relatedGuide} compact />
          ))}
        </div>
      </section>

      <ConsultationCta />
      <NewsletterBand />
    </main>
  );
}
