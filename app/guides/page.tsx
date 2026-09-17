import type { Metadata } from "next";
import Link from "next/link";
import { GuideProductCard } from "../components";
import { guideProducts } from "../data";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Editorial destination research from Altrove. The Journal and itineraries are the public writing; these pages collect longer research in progress.",
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
          These pages collect destination research as it is written. The public
          Altrove is the Journal and the itineraries — recommendations you can
          use now, without a membership.
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
            <Link className="button dark" href="/journal">
              Read the Journal
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
          For notes you can use this week, start with the{" "}
          <Link className="text-link" href="/journal">
            Journal
          </Link>{" "}
          or{" "}
          <Link className="text-link" href="/community#letters">
            join the letters
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
