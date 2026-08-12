import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guideArticles, getGuideArticle } from "../../articles";
import { GuideCard, NewsletterBand } from "../../components";
import {
  ArticleMeta,
  FlorNote,
  PracticalBox,
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

function sectionId(heading: string, id?: string) {
  if (id) return id;
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  const article = getGuideArticle(slug);

  if (!guide || !article) {
    return {};
  }

  const title = article.seoTitle ?? guide.title;
  const description = article.seoDescription ?? article.dek;

  return {
    title,
    description,
    alternates: {
      canonical: `https://altrove.studio/journal/${guide.slug}`,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
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
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [guide.image],
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

  const relatedFromSlugs = (article.relatedJournalSlugs ?? [])
    .map((relatedSlug) => getGuide(relatedSlug))
    .filter((relatedGuide): relatedGuide is (typeof guides)[number] =>
      Boolean(relatedGuide),
    );

  const relatedGuides =
    relatedFromSlugs.length > 0
      ? relatedFromSlugs.slice(0, 3)
      : guides
          .filter((relatedGuide) => relatedGuide.slug !== guide.slug)
          .filter(
            (relatedGuide) =>
              relatedGuide.destination === guide.destination ||
              /portugal|lisbon|porto|madeira/i.test(
                `${relatedGuide.destination} ${relatedGuide.slug}`,
              ),
          )
          .slice(0, 3);

  const fallbackRelated =
    relatedGuides.length > 0
      ? relatedGuides
      : guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const relatedProduct = guideProducts.find((product) =>
    product.relatedArticleSlugs.includes(guide.slug),
  );

  const tocItems = [
    ...(article.comparisonTable
      ? [
          {
            id: "areas-at-a-glance",
            label: article.comparisonTable.heading,
          },
        ]
      : []),
    ...article.sections
      .filter((section) => section.id || section.heading)
      .map((section) => ({
        id: sectionId(section.heading, section.id),
        label: section.heading,
      })),
    ...(article.faqs?.length
      ? [{ id: "faq", label: "FAQ: Where to stay in Lisbon" }]
      : []),
  ];

  const pageDescription = article.seoDescription ?? article.dek;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: guide.title,
    description: pageDescription,
    image: [guide.image],
    datePublished: guide.date,
    dateModified: article.lastReviewed,
    author: {
      "@type": "Person",
      name: "Flor",
      url: "https://altrove.studio/plan-a-trip",
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: "https://altrove.studio/logo-altrove.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://altrove.studio/journal/${guide.slug}`,
    },
  };

  const faqStructuredData = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {faqStructuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      ) : null}

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
              <span>By Flor</span>
              <span>{guide.destination}</span>
              <span>Published {guide.date}</span>
              <span>{guide.readTime}</span>
              <span>Reviewed {article.lastReviewed}</span>
            </div>
            <ArticleMeta
              items={[
                { label: "Author", value: "Flor" },
                { label: "Location", value: guide.destination },
                { label: "Published", value: guide.date },
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
              {(article.continueLinks ?? []).map((link) => (
                <p key={link.href}>
                  <Link className="text-link" href={link.href}>
                    {link.label}
                  </Link>
                </p>
              ))}
              {!article.continueLinks?.length && relatedProduct ? (
                <p>
                  <Link
                    className="text-link"
                    href={`/guides/${relatedProduct.slug}`}
                  >
                    Related guide: {relatedProduct.title}
                  </Link>
                </p>
              ) : null}
              {!article.continueLinks?.length ? (
                <>
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
                </>
              ) : null}
            </div>
          </aside>

          <div className="article-body">
            {article.intro?.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}

            {tocItems.length > 3 ? (
              <nav className="article-toc" aria-label="On this page">
                <details>
                  <summary>On this page</summary>
                  <ol>
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>{item.label}</a>
                      </li>
                    ))}
                  </ol>
                </details>
              </nav>
            ) : null}

            {article.comparisonTable ? (
              <section
                id="areas-at-a-glance"
                className="article-comparison"
                aria-labelledby="areas-at-a-glance-heading"
              >
                <h2 id="areas-at-a-glance-heading">
                  {article.comparisonTable.heading}
                </h2>
                <div className="article-comparison-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Area</th>
                        <th scope="col">Best for</th>
                        <th scope="col">The feeling</th>
                        <th scope="col">Worth knowing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {article.comparisonTable.rows.map((row) => (
                        <tr key={row.area}>
                          <th scope="row">{row.area}</th>
                          <td>{row.bestFor}</td>
                          <td>{row.feeling}</td>
                          <td>{row.worthKnowing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ) : null}

            {!article.closingFlorNote ? (
              <FlorNote>
                <p>
                  These notes are written from personal research and first-hand
                  travel preference. Always re-check opening times and transport
                  before you go.
                </p>
              </FlorNote>
            ) : null}

            {article.sections.map((section, index) => (
              <section
                key={section.heading}
                id={sectionId(section.heading, section.id)}
              >
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.hotels?.length ? (
                  <div className="article-hotel-list">
                    {section.hotelsHeading ? (
                      <h3>{section.hotelsHeading}</h3>
                    ) : null}
                    {section.hotels.map((hotel) => (
                      <article key={hotel.name} className="article-hotel">
                        <h4>{hotel.name}</h4>
                        {hotel.area ? (
                          <p className="article-hotel-meta">{hotel.area}</p>
                        ) : null}
                        <p>{hotel.note}</p>
                        {hotel.href ? (
                          <p>
                            <a
                              className="text-link"
                              href={hotel.href}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              View hotel
                            </a>
                          </p>
                        ) : null}
                      </article>
                    ))}
                  </div>
                ) : null}
                {section.florPick ? (
                  <FlorNote title="Flor's pick">
                    <p>{section.florPick}</p>
                  </FlorNote>
                ) : null}
                {section.whoShouldStay ? (
                  <>
                    <h3>Who should stay here?</h3>
                    <p>{section.whoShouldStay}</p>
                  </>
                ) : null}
                {section.callout ? (
                  <PracticalBox title={section.callout.title}>
                    {section.callout.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </PracticalBox>
                ) : null}
                {section.closing?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
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

            {article.faqs?.length ? (
              <section id="faq" className="article-faq" aria-labelledby="faq-heading">
                <h2 id="faq-heading">FAQ: Where to stay in Lisbon</h2>
                {article.faqs.map((faq) => (
                  <details key={faq.question} className="article-faq-item">
                    <summary>
                      <h3>{faq.question}</h3>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </section>
            ) : null}

            {article.closingFlorNote?.length ? (
              <FlorNote>
                {article.closingFlorNote.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </FlorNote>
            ) : null}

            {article.continueLinks?.length ? (
              <section className="article-continue" aria-label="Continue reading">
                <h2>Continue in the journal</h2>
                <ul>
                  {article.continueLinks.map((link) => (
                    <li key={link.href}>
                      <Link className="text-link" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Keep reading</p>
          <h2>More guides for thoughtful planning.</h2>
        </div>
        <div className="guide-grid">
          {fallbackRelated.map((relatedGuide) => (
            <GuideCard key={relatedGuide.slug} guide={relatedGuide} compact />
          ))}
        </div>
      </section>

      <NewsletterBand
        title={article.newsletter?.title ?? "Join the Altrove Club"}
        description={
          article.newsletter?.description ??
          "Every month, receive one carefully planned route, hotel shortlist, or city walk from Flor."
        }
        buttonLabel={article.newsletter ? "Join the letters" : "Join the Club"}
        footnote="No daily emails. Just thoughtful travel inspiration from Altrove."
      />
    </main>
  );
}
