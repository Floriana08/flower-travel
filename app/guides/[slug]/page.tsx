import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCheckoutCta } from "../../guide-checkout-cta";
import { guideProducts, guides } from "../../data";
import { getDestinationHubHref } from "../../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../../image-utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = guideProducts.find((item) => item.slug === slug);
  if (!product) return {};

  return {
    title: product.title,
    description: product.excerpt,
    alternates: {
      canonical: `https://altrove.studio/guides/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Altrove`,
      description: product.excerpt,
      images: [{ url: product.image, alt: product.alt }],
    },
  };
}

export default async function GuideProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = guideProducts.find((item) => item.slug === slug);

  if (!product) notFound();

  const relatedArticles = product.relatedArticleSlugs
    .map((articleSlug) => guides.find((guide) => guide.slug === articleSlug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.excerpt,
    image: product.image,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      url: `https://altrove.studio/guides/${product.slug}`,
    },
  };

  return (
    <article className="article-page guide-product-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="article-hero">
        <div className="article-hero-copy">
          <Link className="article-back-link" href="/guides">
            Guides
          </Link>
          <p className="eyebrow">{product.format}</p>
          <h1>{product.title}</h1>
          <p className="article-dek">{product.excerpt}</p>
          <div className="article-meta">
            <span>{product.destination}</span>
            <span>{product.status}</span>
          </div>
        </div>
        <figure className="article-hero-image">
          <img
            src={product.image}
            srcSet={unsplashSrcSet(product.image)}
            sizes={defaultImageSizes}
            alt={product.alt}
          />
        </figure>
      </header>

      <div className="article-layout">
        <aside className="article-sidebar">
          <div className="article-panel">
            <h2>Buy the guide</h2>
            <GuideCheckoutCta product={product} />
          </div>
          <div className="article-panel">
            <h2>Who it&rsquo;s for</h2>
            <ul>
              {product.forWhom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="article-panel">
            <h2>Who it&rsquo;s not for</h2>
            <ul>
              {product.notForWhom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="article-panel">
            <h2>Format &amp; delivery</h2>
            <p>{product.deliveryNote}</p>
            <p>{product.updatePolicy}</p>
          </div>
          <Link className="text-link" href={getDestinationHubHref(product.countrySlug)}>
            {product.countrySlug === "italy"
              ? "Italy"
              : product.countrySlug === "portugal"
                ? "Portugal"
                : "Spain"}{" "}
            destination hub
          </Link>
        </aside>

        <div className="article-body">
          <h2>What&rsquo;s inside</h2>
          <ul>
            {product.contents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>How this is different from the free journal</h2>
          <p>{product.sampleNote}</p>
          {product.slug === "naples-amalfi-guide" ? (
            <p>
              <Link className="text-link" href="/journeys/naples-amalfi">
                Preview the Naples &amp; Amalfi journey concept
              </Link>
              {" · "}
              <Link className="text-link" href="/apply">
                Apply for Membership
              </Link>
            </p>
          ) : null}

          <h2>Frequently asked questions</h2>
          {product.faqs.map((faq) => (
            <div key={faq.q} className="guide-faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {relatedArticles.length ? (
        <section className="section-shell tinted" aria-label="Related journal reading">
          <div className="home-section-head">
            <p className="eyebrow">Free reading</p>
            <h2 className="display-title">Related from the journal</h2>
          </div>
          <div className="guide-grid">
            {relatedArticles.map((article) => (
              <article key={article.slug} className="card">
                <img
                  src={article.image}
                  srcSet={unsplashSrcSet(article.image)}
                  sizes={defaultImageSizes}
                  alt={article.alt}
                  loading="lazy"
                />
                <div className="card-body">
                  <h3>
                    <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
