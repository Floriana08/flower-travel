import type { Metadata } from "next";
import Link from "next/link";
import { GuideProductCard } from "../components";
import { guideProducts } from "../data";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Premium downloadable destination guides from Altrove — starting with Campania: Naples and the Amalfi Coast.",
  alternates: {
    canonical: "https://altrove.studio/guides",
  },
};

export default function GuidesPage() {
  const [flagship, ...rest] = guideProducts;

  return (
    <main className="guides-index">
      <header className="section-shell page-top guides-index-hero">
        <p className="eyebrow">Guides</p>
        <h1 className="display-title">
          Travel with an Altrove guide.
        </h1>
        <p className="destinations-index-lede">
          Detailed, independent guides for the places we know well —
          researched properly, priced fairly, and built to be used on the
          ground, not skimmed once and forgotten.
        </p>
      </header>

      {flagship ? (
        <section className="section-shell tinted guides-flagship" aria-label="Flagship guide">
          <div className="guides-flagship-media">
            <img
              src={flagship.image}
              srcSet={unsplashSrcSet(flagship.image)}
              sizes={defaultImageSizes}
              alt={flagship.alt}
              loading="lazy"
            />
          </div>
          <div className="guides-flagship-copy">
            <p className="eyebrow">Flagship guide</p>
            <h2>
              <Link href={`/guides/${flagship.slug}`}>{flagship.title}</Link>
            </h2>
            <p>{flagship.excerpt}</p>
            <Link className="button dark" href={`/guides/${flagship.slug}`}>
              See what&rsquo;s inside
            </Link>
          </div>
        </section>
      ) : null}

      {rest.length ? (
        <section className="section-shell guide-grid" aria-label="All guides">
          {rest.map((product) => (
            <GuideProductCard key={product.slug} product={product} />
          ))}
        </section>
      ) : null}

      <section className="section-shell tinted guides-note">
        <p>
          None of these are available for purchase yet — each is being
          researched properly before it&rsquo;s sold. Join the waitlist on
          any guide and we&rsquo;ll email you the day it&rsquo;s ready. If
          you&rsquo;d rather have a route shaped around your own dates now,{" "}
          <Link className="text-link" href="/plan-a-trip">
            plan with Altrove
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
