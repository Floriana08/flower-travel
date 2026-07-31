import type { Metadata } from "next";
import Link from "next/link";
import { getCatalogueJourneys, type Journey } from "../journeys-data";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "A small collection of Altrove journeys — curated itineraries through places personally explored. Not many. Worth taking.",
  alternates: {
    canonical: "https://flowertravel.studio/journeys",
  },
};

function JourneyFeature({
  journey,
  signature = false,
}: {
  journey: Journey;
  signature?: boolean;
}) {
  return (
    <article
      className={`journey-feature ${signature ? "is-signature" : ""}`}
    >
      <Link
        className="journey-feature-media"
        href={`/journeys/${journey.slug}`}
        aria-label={journey.title}
      >
        <img src={journey.image} alt={journey.alt} loading={signature ? "eager" : "lazy"} />
      </Link>
      <div className="journey-feature-copy">
        <p className="journey-feature-status">{journey.statusLabel}</p>
        {signature ? <p className="journey-feature-kicker">Signature journey</p> : null}
        <h2 className="display-title">
          <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
        </h2>
        <p className="journey-feature-meta">
          <span>{journey.destination}</span>
          <span>{journey.duration}</span>
          <span>{journey.bestTime}</span>
        </p>
        <p className="journey-feature-summary">{journey.summary}</p>
        <Link className="text-link" href={`/journeys/${journey.slug}`}>
          {signature ? "Enter the journey" : "View journey"}
        </Link>
      </div>
    </article>
  );
}

export default function JourneysPage() {
  const catalogue = getCatalogueJourneys();
  const signature = catalogue.find((journey) => journey.signature) ?? catalogue[0];
  const supporting = catalogue.filter((journey) => journey.slug !== signature?.slug);

  return (
    <main className="journeys-catalogue">
      <header className="journeys-catalogue-intro section-shell">
        <p className="eyebrow">Journeys</p>
        <h1 className="display-title">
          Not many.
          <br />
          Worth taking.
        </h1>
        <p className="journeys-catalogue-lede">
          Altrove doesn’t create lots of journeys. It creates a small collection
          shaped by real travel — then edits until each one feels complete.
        </p>
      </header>

      {signature ? (
        <section className="section-shell journeys-signature" aria-label="Signature journey">
          <JourneyFeature journey={signature} signature />
        </section>
      ) : null}

      {supporting.length ? (
        <section
          className="section-shell tinted journeys-supporting"
          aria-label="Supporting journeys"
        >
          <div className="journeys-supporting-list">
            {supporting.map((journey) => (
              <JourneyFeature key={journey.slug} journey={journey} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell journeys-enquire">
        <p className="eyebrow">Personal itineraries</p>
        <h2 className="display-title">Looking for something else?</h2>
        <p>
          If this collection doesn’t match the trip you have in mind, tell us
          where you want to go. Altrove can shape a personalised itinerary around
          the places we know well.
        </p>
        <Link className="button dark" href="/plan-a-trip">
          Enquire about a personalised itinerary
        </Link>
      </section>
    </main>
  );
}
