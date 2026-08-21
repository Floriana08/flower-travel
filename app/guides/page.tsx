import type { Metadata } from "next";
import Link from "next/link";
import { GuideProductCard } from "../components";
import { guideProducts } from "../data";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Editorial destination research from Altrove. Paid guides are not on sale. Founding Membership is the way to travel with Altrove today.",
  alternates: {
    canonical: "https://altrove.studio/guides",
  },
};

export default function GuidesPage() {
  const [flagship, ...rest] = guideProducts;

  return (
    <main className="guides-index">
      <header className="section-shell page-top guides-index-hero">
        <p className="eyebrow">Editorial research</p>
        <h1 className="display-title">Guides in progress.</h1>
        <p className="destinations-index-lede">
          These pages collect destination research. They are not for sale, and
          they are not the current Altrove offer. Today, the way to travel with
          Altrove is Founding Membership: we design the trip, and you book it.
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
            <p className="eyebrow">In research</p>
            <h2>
              <Link href={`/guides/${flagship.slug}`}>{flagship.title}</Link>
            </h2>
            <p>{flagship.excerpt}</p>
            <Link className="button dark" href="/apply">
              Become a Founding Member
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
          If you want a trip designed around your own dates now,{" "}
          <Link className="text-link" href="/apply">
            apply for Founding Membership
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
