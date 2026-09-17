import type { Metadata } from "next";
import Link from "next/link";
import { cityPages } from "../city-pages";
import { CountryTile } from "../studio-components";
import { studioCountries } from "../studio-structure";
import { unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Lisbon and Napoli city pages — then Portugal, Italy and Spain. Posts, not a fake global map.",
  alternates: {
    canonical: "https://altrove.studio/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <main className="home-blog destinations-index">
      <p className="blog-dispatch">City pages first. Countries around them.</p>

      <header className="city-index-hero">
        <p className="blog-meta">Destinations</p>
        <h1>
          Places we write about — not the whole <em>world</em>
        </h1>
        <p>
          Lisbon and Napoli are the city pages. Portugal, Italy and Spain are
          the families around them. We add articles as we have something
          useful to say.
        </p>
      </header>

      <section className="blog-places" aria-label="City pages">
        <div className="blog-section-head">
          <h2>City pages</h2>
        </div>
        <div className="blog-place-row city-place-row">
          {cityPages.map((city) => (
            <Link
              key={city.slug}
              className="blog-place"
              href={`/destinations/${city.slug}`}
            >
              <img
                src={city.heroImage}
                srcSet={unsplashSrcSet(city.heroImage)}
                sizes="(max-width: 900px) 100vw, 48vw"
                alt={city.heroAlt}
              />
              <p className="blog-meta">{city.country}</p>
              <h3>{city.title}</h3>
              <p>{city.lede}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-label="Countries">
        <div className="blog-section-head">
          <h2>Countries</h2>
        </div>
        <div className="destinations-family-grid">
          {studioCountries.map((country) => (
            <CountryTile key={country.slug} country={country} variant="home" />
          ))}
        </div>
      </section>
    </main>
  );
}
