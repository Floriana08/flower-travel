import type { Metadata } from "next";
import Link from "next/link";
import { itineraries } from "../../data";
import { getJourney } from "../../journeys-data";
import { EnquiryCta } from "../../studio-components";
import { getStudioCountry } from "../../studio-structure";

const country = getStudioCountry("italy")!;
const featured = getJourney("naples-amalfi")!;
const amalfiArticle = itineraries.find(
  (item) => item.slug === "amalfi-coast-tours",
);

export const metadata: Metadata = {
  title: "Italy",
  description:
    "How Altrove travels Italy — Naples, the Amalfi Coast, pacing notes, and practical advice for a slower Campania journey.",
  alternates: {
    canonical: "https://flowertravel.studio/journeys/italy",
  },
};

const travelNotes = [
  {
    title: "Best time to go",
    body: "May–June and September. Warm enough for the coast, cooler for walking Naples, and easier than midsummer crowds and heat.",
  },
  {
    title: "How to pace it",
    body: "Two bases at most: a Naples neighbourhood, then one coastal stay. Day-trip the towns — don’t change hotels every night.",
  },
  {
    title: "Getting around",
    body: "Walk Naples. Train to Pompeii. Ferries along the Amalfi Coast whenever you can — boats usually beat summer buses for both views and sanity.",
  },
  {
    title: "Where to stay",
    body: "In Naples, prefer Chiaia or Vomero for a calmer base. On the coast, choose one town and stay put — Sorrento or Salerno can be more practical than Positano prices.",
  },
  {
    title: "Food first",
    body: "Let meals set the day. Pizza and pastry in Naples; a long coastal lunch with nowhere else to be. Reserve the one dinner that matters.",
  },
  {
    title: "What to leave out",
    body: "Five towns in three days. Capri, Pompeii and the full Amalfi strip on the same short trip. Pick one clean escape and keep evening free.",
  },
];

export default function ItalyJourneysPage() {
  return (
    <main className="country-hub italy-hub">
      <section className="country-hub-hero">
        <div className="country-hub-hero-media" aria-hidden="true">
          <img src={country.image} alt="" />
        </div>
        <div className="country-hub-hero-copy">
          <p className="eyebrow light">Italy</p>
          <h1 className="studio-hero-lede">How we experience Italy.</h1>
          <p className="country-hub-hero-lede">{country.hubLede}</p>
        </div>
      </section>

      <section
        className="section-shell country-hub-featured"
        aria-label="Featured journey"
      >
        <div className="home-section-head">
          <p className="eyebrow">Featured journey</p>
          <h2 className="display-title">{featured.title}</h2>
        </div>
        <article className="country-hub-feature">
          <Link
            className="country-hub-feature-media"
            href={`/journeys/${featured.slug}`}
            aria-label={featured.title}
          >
            <img src={featured.image} alt={featured.alt} />
          </Link>
          <div className="country-hub-feature-copy">
            <p className="home-journey-status">{featured.statusLabel}</p>
            <p className="home-journey-meta">
              <span>{featured.duration}</span>
              <span>{featured.destination}</span>
            </p>
            <p>{featured.summary}</p>
            <p className="country-hub-feature-overview">{featured.overview[0]}</p>
            <div className="country-hub-feature-actions">
              <Link className="button dark" href={`/journeys/${featured.slug}`}>
                Open the journey
              </Link>
              <Link className="text-link" href="/plan-a-trip">
                Plan a version of this
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section
        className="section-shell tinted italy-travel-info"
        aria-label="Useful travel information"
      >
        <div className="home-section-head">
          <p className="eyebrow">Travel notes</p>
          <h2 className="display-title">Useful information</h2>
          <p className="home-section-dek">
            Practical advice for Campania — written from how we actually travel
            here, not a checklist of every town on the map.
          </p>
        </div>
        <div className="italy-info-grid">
          {travelNotes.map((note) => (
            <article key={note.title} className="italy-info-card">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      {amalfiArticle ? (
        <section
          className="section-shell italy-article"
          aria-label="Naples and Amalfi Coast article"
        >
          <div className="home-section-head">
            <p className="eyebrow">From the notes</p>
            <h2 className="display-title">Naples and the Amalfi Coast</h2>
          </div>
          <article className="italy-article-feature">
            <Link
              className="italy-article-media"
              href={`/routes/${amalfiArticle.slug}`}
              aria-label={amalfiArticle.title}
            >
              <img src={amalfiArticle.image} alt={amalfiArticle.alt} />
            </Link>
            <div className="italy-article-copy">
              <p className="home-journey-meta">
                <span>{amalfiArticle.days}</span>
                <span>{amalfiArticle.region}</span>
              </p>
              <h3>
                <Link href={`/routes/${amalfiArticle.slug}`}>
                  {amalfiArticle.title}
                </Link>
              </h3>
              <p>{amalfiArticle.summary}</p>
              <p>
                How to choose between Positano, Ravello and the Path of the Gods
                — without turning the coast into a transfer marathon. Pair it
                with a few days in Naples first, so the city gets its own time.
              </p>
              <div className="country-hub-feature-actions">
                <Link
                  className="button dark"
                  href={`/routes/${amalfiArticle.slug}`}
                >
                  Read the Amalfi notes
                </Link>
                <Link className="text-link" href={`/journeys/${featured.slug}`}>
                  See the full journey
                </Link>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <section
        className="section-shell tinted country-hub-places"
        aria-label="Places we love"
      >
        <div className="home-section-head">
          <p className="eyebrow">Places we love</p>
          <h2 className="display-title">Taste notes</h2>
        </div>
        <div className="country-hub-places-grid">
          {country.placesWeLove.map((group) => (
            <div key={group.kind} className="country-hub-place-group">
              <h3>{group.kind}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell country-hub-plan">
        <EnquiryCta
          title="If this is how you’d like to experience Italy, ask us to plan yours."
          cta="Plan My Trip"
        >
          <p>
            Personalised itinerary design around Naples, the coast and the
            pacing that makes Campania memorable.
          </p>
        </EnquiryCta>
      </section>
    </main>
  );
}
