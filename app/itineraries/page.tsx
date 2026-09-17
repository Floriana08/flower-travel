import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "../newsletter-form";
import { StudioNewsletter } from "../studio-components";
import { getCatalogueJourneys } from "../journeys-data";
import { lisbonSampleTrip } from "../sample-trips";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Itineraries",
  description:
    "Altrove itineraries for slower trips — a weekend in Lisbon, Portugal by train, Naples and the Amalfi Coast. Paced recommendations, not a checklist.",
  alternates: {
    canonical: "https://altrove.studio/itineraries",
  },
};

export default function ItinerariesPage() {
  const journeys = getCatalogueJourneys().filter(
    (journey) => journey.slug !== "lisbon-slowly",
  );

  return (
    <main className="journeys-catalogue">
      <header className="section-shell journeys-catalogue-intro">
        <p className="eyebrow">Itineraries</p>
        <h1 className="display-title">How we would spend the days.</h1>
        <p className="journeys-catalogue-lede">
          Written itineraries you can use: where to stay, where to eat, how to
          pace the week, and what we would skip. Portugal, Italy, and the
          routes between them — with trains preferred when they earn the day.
        </p>
      </header>

      <section className="section-shell" aria-labelledby="lisbon-itinerary">
        <article className="journey-feature is-signature">
          <Link
            className="journey-feature-media"
            href="/trips/lisbon"
            aria-label="A weekend in Lisbon"
          >
            <img
              src={lisbonSampleTrip.heroImage}
              srcSet={unsplashSrcSet(lisbonSampleTrip.heroImage)}
              sizes={defaultImageSizes}
              alt={lisbonSampleTrip.heroAlt}
            />
          </Link>
          <div className="journey-feature-copy">
            <p className="journey-feature-kicker">Portugal · 4 days</p>
            <h2 id="lisbon-itinerary" className="display-title">
              <Link href="/trips/lisbon">A weekend in Lisbon</Link>
            </h2>
            <p>
              One considered base, a short list of tables, neighbourhood
              walking, and the notes we would actually give a friend. The
              finished public itinerary.
            </p>
            <Link className="text-link" href="/trips/lisbon">
              Read the itinerary
            </Link>
          </div>
        </article>
      </section>

      {journeys.map((journey) => (
        <section
          key={journey.slug}
          className="section-shell"
          aria-labelledby={`itinerary-${journey.slug}`}
        >
          <article className="journey-feature">
            <Link
              className="journey-feature-media"
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
            <div className="journey-feature-copy">
              <p className="journey-feature-kicker">
                {journey.destination} · {journey.duration}
              </p>
              <h2 id={`itinerary-${journey.slug}`} className="display-title">
                <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
              </h2>
              <p>{journey.summary}</p>
              <Link className="text-link" href={`/journeys/${journey.slug}`}>
                Read the itinerary
              </Link>
            </div>
          </article>
        </section>
      ))}

      <StudioNewsletter
        id="letters"
        title="New itineraries, by letter"
        description="When a route is ready to publish, it goes to the letters first."
      >
        <NewsletterForm buttonLabel="Join the letters" source="itineraries" />
      </StudioNewsletter>
    </main>
  );
}
