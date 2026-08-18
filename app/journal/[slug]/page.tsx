import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guideArticles, getGuideArticle } from "../../articles";
import { GuideCard, NewsletterBand } from "../../components";
import {
  ArticleMeta,
  FlorNote,
  WorthKnowing,
} from "../../editorial-components";
import { guideProducts, guides, site } from "../../data";
import { defaultImageSizes, unsplashSrcSet } from "../../image-utils";

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
    alternates: {
      canonical: `https://altrove.studio/journal/${guide.slug}`,
    },
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

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const article = getGuideArticle(slug);

  if (!guide || !article) {
    notFound();
  }

  const relatedGuides = guides
    .filter((relatedGuide) => relatedGuide.slug !== guide.slug)
    .slice(0, 3);

  const relatedProduct = guideProducts.find((product) =>
    product.relatedArticleSlugs.includes(guide.slug),
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: article.dek,
    image: guide.image,
    datePublished: guide.date,
    dateModified: article.lastReviewed,
    author: {
      "@type": "Person",
      name: "Flor",
      url: "https://altrove.studio/",
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: "https://altrove.studio/logo-altrove.png",
      },
    },
    mainEntityOfPage: `https://altrove.studio/journal/${guide.slug}`,
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
            <Link className="article-back-link" href="/journal">
              Journal
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
            <ArticleMeta
              items={[
                { label: "Location", value: guide.destination },
                { label: "Updated", value: article.lastReviewed },
                { label: "Read time", value: guide.readTime },
                { label: "Type", value: guide.category },
              ]}
            />
          </div>
          <figure className="article-hero-image reveal delay-1">
            <img
              src={guide.image}
              srcSet={unsplashSrcSet(guide.image)}
              sizes={defaultImageSizes}
              alt={guide.alt}
            />
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
            <div className="article-panel">
              <h2>Continue in the journal</h2>
              {relatedProduct ? (
                <p>
                  <Link className="text-link" href={`/guides/${relatedProduct.slug}`}>
                    Related guide: {relatedProduct.title}
                  </Link>
                </p>
              ) : null}
              <p>
                <Link className="text-link" href="/destinations/portugal">
                  Portugal destination hub
                </Link>
              </p>
              <p>
                <Link className="text-link" href="/#letters">
                  Join the newsletter
                </Link>
              </p>
            </div>
          </aside>

          <div className="article-body">
            <FlorNote>
              <p>
                These notes are written from personal research and first-hand
                travel preference. Always re-check opening times and transport
                before you go.
              </p>
            </FlorNote>

            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.table ? (
                  <div className="article-table-wrap">
                    <table className="article-table">
                      {section.table.caption ? (
                        <caption>{section.table.caption}</caption>
                      ) : null}
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell, cellIndex) =>
                              cellIndex === 0 ? (
                                <th key={cell} scope="row">
                                  {cell}
                                </th>
                              ) : (
                                <td key={`${row[0]}-${cell}`}>{cell}</td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {section.listTitle ? <h3>{section.listTitle}</h3> : null}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {index === 0 &&
                /portugal|lisbon|porto|madeira|douro/i.test(
                  `${guide.destination} ${guide.slug}`,
                ) ? (
                  <WorthKnowing>
                    <p>
                      Planning a longer stay in Portugal? Explore our{" "}
                      <Link href="/journeys/portugal-by-train">
                        Portugal journeys
                      </Link>{" "}
                      or the{" "}
                      <Link href="/destinations/portugal">
                        Portugal destination hub
                      </Link>
                      .
                    </p>
                  </WorthKnowing>
                ) : null}
                {index === 0 &&
                /italy|rome|naples|amalfi|campania/i.test(
                  `${guide.destination} ${guide.slug} ${guide.title}`,
                ) ? (
                  <WorthKnowing>
                    <p>
                      Heading to Campania? See the{" "}
                      <Link href="/journeys/naples-amalfi">
                        Naples and the Amalfi Coast journey
                      </Link>
                      , the{" "}
                      <Link href="/guides/naples-amalfi-guide">
                        Campania guide
                      </Link>
                      , or{" "}
                      <Link href="/plan-a-trip">
                        ask Altrove to shape a personalised version
                      </Link>
                      .
                    </p>
                  </WorthKnowing>
                ) : null}
                {index === 0 &&
                /honeymoon/i.test(`${guide.slug} ${guide.title}`) ? (
                  <WorthKnowing>
                    <p>
                      Considering a honeymoon in Southern Europe?{" "}
                      <Link href="/plan-a-trip">
                        Tell Altrove what you have in mind
                      </Link>
                      .
                    </p>
                  </WorthKnowing>
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

      <NewsletterBand />
    </main>
  );
}
