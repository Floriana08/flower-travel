import type { Metadata } from "next";
import Link from "next/link";
import { guides, itineraries } from "../../data";
import { getJourney } from "../../journeys-data";
import { getStudioCountry } from "../../studio-structure";

const country = getStudioCountry("italy")!;
const featured = getJourney("naples-amalfi")!;
const amalfiArticle = itineraries.find(
  (item) => item.slug === "amalfi-coast-tours",
);
const journalLead = amalfiArticle;
const journalSupport = guides.find((guide) => guide.slug === "rome-food-walk");

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

/** Same Places We Love copy — fewer features, larger photographs. */
const lovedPlaces = [
  {
    kind: "Hotels",
    name: "A Naples neighbourhood base",
    note: "Quiet enough to sleep, close enough to walk to dinner.",
    image:
      "https://images.unsplash.com/photo-1775188693558-31c7f14790f5?auto=format&fit=crop&w=1800&q=84",
    alt: "Naples bay with Mount Vesuvius in the distance",
  },
  {
    kind: "Hotels",
    name: "One coastal stay",
    note: "A single Amalfi or Sorrento bed — not five hotel changes.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=84",
    alt: "Cliffside villages on the Amalfi Coast above blue Mediterranean water",
  },
  {
    kind: "Restaurants",
    name: "Neighbourhood pizza",
    note: "The table you’d send a friend to without hesitating.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1800&q=84",
    alt: "Wood-fired pizza on a simple table",
  },
  {
    kind: "Experiences",
    name: "Ravello gardens",
    note: "Height, quiet, and a slower afternoon above the coast.",
    image:
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=1800&q=80",
    alt: "Colourful boats in a harbour on the Amalfi Coast",
  },
];

export default function ItalyJourneysPage() {
  return (
    <main className="italy-mag">
      <section className="italy-mag-hero">
        <img src={country.image} alt={country.alt} />
        <div className="italy-mag-hero-copy">
          <p className="italy-mag-kicker">Italy</p>
          <h1>How we experience Italy.</h1>
        </div>
      </section>

      <p className="italy-mag-lede italy-mag-pad">{country.hubLede}</p>

      <section className="italy-mag-cover" aria-label="Featured journey">
        <Link
          className="italy-mag-cover-media"
          href={`/journeys/${featured.slug}`}
        >
          <img src={featured.image} alt={featured.alt} />
        </Link>
        <div className="italy-mag-cover-copy italy-mag-pad">
          <p className="italy-mag-kicker">Featured journey</p>
          <h2>
            <Link href={`/journeys/${featured.slug}`}>{featured.title}</Link>
          </h2>
          <p className="italy-mag-meta">
            {featured.duration} · {featured.destination}
          </p>
          <p className="italy-mag-deck">{featured.summary}</p>
          <Link className="italy-mag-link" href={`/journeys/${featured.slug}`}>
            Open the journey
          </Link>
        </div>
      </section>

      <section className="italy-mag-notes italy-mag-pad" aria-label="Travel notes">
        <div className="italy-mag-notes-rail">
          <p className="italy-mag-kicker">Travel notes</p>
          <h2>Useful information</h2>
          <p className="italy-mag-deck">
            Practical advice for Campania — written from how we actually travel
            here, not a checklist of every town on the map.
          </p>
        </div>
        <dl className="italy-mag-notes-list">
          {travelNotes.map((note) => (
            <div key={note.title}>
              <dt>{note.title}</dt>
              <dd>{note.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="italy-mag-loved" aria-label="Places we love">
        <div className="italy-mag-pad italy-mag-loved-intro">
          <p className="italy-mag-kicker">Places we love</p>
          <h2>Taste notes</h2>
        </div>
        <div className="italy-mag-loved-list">
          {lovedPlaces.map((place, index) => (
            <article
              key={place.name}
              className={`italy-mag-loved-item${index % 2 ? " is-flip" : ""}`}
            >
              <figure className="italy-mag-loved-media">
                <img src={place.image} alt={place.alt} loading="lazy" />
              </figure>
              <div className="italy-mag-loved-copy">
                <p className="italy-mag-kicker">{place.kind}</p>
                <h3>{place.name}</h3>
                <p>{place.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {(journalLead || journalSupport) && (
        <section className="italy-mag-journal italy-mag-pad" aria-label="Journal">
          <p className="italy-mag-kicker">Journal</p>
          <h2>From the notes</h2>
          <div className="italy-mag-journal-layout">
            {journalLead ? (
              <article className="italy-mag-journal-lead">
                <Link href={`/routes/${journalLead.slug}`}>
                  <img
                    src={journalLead.image}
                    alt={journalLead.alt}
                    loading="lazy"
                  />
                </Link>
                <p className="italy-mag-meta">
                  {journalLead.days} · {journalLead.region}
                </p>
                <h3>
                  <Link href={`/routes/${journalLead.slug}`}>
                    {journalLead.title}
                  </Link>
                </h3>
                <p>{journalLead.summary}</p>
              </article>
            ) : null}
            {journalSupport ? (
              <article className="italy-mag-journal-side">
                <p className="italy-mag-meta">
                  {journalSupport.category} · {journalSupport.readTime}
                </p>
                <h3>
                  <Link href={`/travel-guides/${journalSupport.slug}`}>
                    {journalSupport.title}
                  </Link>
                </h3>
                <p>{journalSupport.excerpt}</p>
              </article>
            ) : null}
          </div>
        </section>
      )}

      <section className="italy-mag-pause" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2200&q=84"
          alt=""
        />
      </section>

      <section className="italy-mag-plan italy-mag-pad" aria-label="Plan a trip">
        <p className="italy-mag-kicker">Plan a trip</p>
        <h2>
          If this is how you’d like to experience Italy, ask us to plan yours.
        </h2>
        <p>
          Personalised itinerary design around Naples, the coast and the pacing
          that makes Campania memorable.
        </p>
        <Link className="button dark" href="/plan-a-trip">
          Plan My Trip
        </Link>
      </section>
    </main>
  );
}
