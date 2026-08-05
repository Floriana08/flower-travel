import type { Metadata } from "next";
import Link from "next/link";
import { DestinationItineraryTabs } from "../destination-itinerary-tabs";
import { JourneysCinemaVideo } from "../journeys-cinema-video";
import { studioCountries } from "../studio-structure";
import { getCatalogueJourneys } from "../journeys-data";
import { guideProducts } from "../data";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Curated Altrove journeys — collections of hotels, neighbourhoods and routes worth remembering.",
  alternates: {
    canonical: "https://altrove.studio/journeys",
  },
};

export default function JourneysPage() {
  const featured = getCatalogueJourneys().slice(0, 3);
  const campaniaGuide = guideProducts.find((product) => product.slug === "campania");

  return (
    <main className="journeys-studio">
      <header className="section-shell page-top journeys-studio-hero">
        <p className="eyebrow">Journeys</p>
        <h1 className="display-title">
          Curated collections,
          <br />
          not checklists.
        </h1>
        <p className="journeys-studio-single-lede">
          Hotels, neighbourhoods and routes — chosen with taste, paced with
          care. Fewer bases. More to remember.
        </p>
      </header>

      <section className="section-shell home-featured" aria-label="Signature journeys">
        <div className="home-section-head">
          <p className="eyebrow">Signature journeys</p>
          <h2 className="display-title">Start here</h2>
        </div>
        <div className="home-featured-list">
          {featured.map((journey) => (
            <article className="home-featured-journey" key={journey.slug}>
              <Link
                className="home-featured-media"
                href={`/journeys/${journey.slug}`}
                aria-label={journey.title}
              >
                <img
                  src={journey.image}
                  srcSet={unsplashSrcSet(journey.image)}
                  sizes={defaultImageSizes}
                  alt={journey.alt}
                  loading="lazy"
                />
              </Link>
              <div className="home-featured-copy">
                <p className="home-journey-status">{journey.statusLabel}</p>
                <h3>
                  <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
                </h3>
                <p className="home-journey-meta">
                  <span>{journey.destination}</span>
                  <span>{journey.duration}</span>
                </p>
                <p>{journey.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {campaniaGuide ? (
        <section className="consultation-strip">
          <div>
            <p className="eyebrow">The guide</p>
            <h2>{campaniaGuide.title} is available now.</h2>
            <p>{campaniaGuide.excerpt}</p>
          </div>
          <Link className="button light" href={campaniaGuide.href}>
            {campaniaGuide.cta}
          </Link>
        </section>
      ) : null}

      <section
        className="section-shell journeys-collection-strip"
        aria-label="Countries"
      >
        <div className="home-section-head">
          <p className="eyebrow">Or browse by country</p>
        </div>
        <div className="journeys-collection-grid">
          {studioCountries.map((country) => (
            <Link
              key={country.slug}
              className="journeys-collection-card"
              href={`/journeys/${country.slug}`}
            >
              <img
                src={country.image}
                srcSet={unsplashSrcSet(country.image)}
                sizes={defaultImageSizes}
                alt={country.alt}
                loading="lazy"
              />
              <span>
                <strong>{country.title}</strong>
                <em>Explore</em>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="journeys-days-cinema"
        aria-label="How a journey unfolds"
      >
        <JourneysCinemaVideo />
        <div className="journeys-days-cinema-inner section-shell">
          <div className="home-section-head journeys-days-head">
            <p className="eyebrow">Inside a journey</p>
            <h2 className="display-title">How the days unfold</h2>
          </div>
          <DestinationItineraryTabs />
        </div>
      </section>
    </main>
  );
}
