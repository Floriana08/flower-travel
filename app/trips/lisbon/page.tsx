import type { Metadata } from "next";
import Link from "next/link";
import { LisbonJourneyRoute } from "./journey-route";
import { tripProfile } from "./data";

export const metadata: Metadata = {
  title: "Lisbon / 4 days — an Altrove itinerary",
  description:
    "How Altrove would spend four days in Lisbon: a considered base, a short list of tables, a loose rhythm, and the notes we would actually give a friend.",
  alternates: {
    canonical: "https://altrove.studio/trips/lisbon",
  },
  openGraph: {
    title: "Lisbon / 4 days — an Altrove itinerary | Altrove",
    description:
      "A public Lisbon itinerary — filtered moments, not an exhaustive checklist.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1754151630904-da4334bddfbf?auto=format&fit=crop&w=1600&q=80",
        alt: "Lisbon’s yellow Tram 28 on a narrow tiled street",
      },
    ],
  },
};

export default function LisbonTripPage() {
  return (
    <main className="trip-lisbon">
      <section className="trip-hero section-shell">
        <p className="trip-kicker">An Altrove itinerary</p>
        <h1>Lisbon / 4 days</h1>
        <p className="trip-profile">{tripProfile}</p>
        <p className="trip-sample-note">
          How we would spend four days in Lisbon: one considered base, a short
          list of tables, and a rhythm rather than a checklist.
        </p>
        <div className="trip-hero-media">
          <img
            src="https://images.unsplash.com/photo-1754151630904-da4334bddfbf?auto=format&fit=crop&w=1600&q=80"
            alt="Lisbon’s yellow Tram 28 on a narrow tiled street"
            width={1600}
            height={1067}
          />
        </div>
      </section>

      <section
        className="trip-rhythm section-shell"
        aria-labelledby="trip-rhythm-title"
      >
        <h2 id="trip-rhythm-title">The rhythm</h2>
        <p>
          We don&apos;t plan trips hour by hour. We shape the flow: where to
          base yourself, what deserves a reservation, which neighbourhoods
          belong together and where to leave room for whatever happens next.
        </p>
      </section>

      <section
        className="trip-journey section-shell"
        aria-labelledby="trip-journey-title"
      >
        <div className="trip-journey-intro">
          <p className="trip-kicker">Follow the route</p>
          <h2 id="trip-journey-title">Selected moments</h2>
          <p>
            Scroll to move through the trip. Open any stop for a short note on
            why it belongs here.
          </p>
        </div>
        <LisbonJourneyRoute />
      </section>

      <section
        className="trip-deeper section-shell"
        aria-labelledby="trip-deeper-title"
      >
        <h2 id="trip-deeper-title">Want more of Lisbon?</h2>
        <p>
          This page shows how Altrove shapes a trip — not the whole destination
          guide.
        </p>
        <ul className="trip-deeper-links">
          <li>
            <Link href="/destinations/lisbon">Lisbon destination guide</Link>
          </li>
          <li>
            <Link href="/journal/where-to-eat-lisbon">
              Where to Eat in Lisbon
            </Link>
          </li>
          <li>
            <Link href="/journal/where-to-stay-lisbon">
              Where to Stay in Lisbon
            </Link>
          </li>
        </ul>
      </section>

      <section
        className="trip-yours section-shell"
        aria-labelledby="trip-yours-title"
      >
        <h2 id="trip-yours-title">More itineraries like this.</h2>
        <p>
          Altrove publishes trips you can use — stays, tables, pacing, and
          what to skip. New ones go out in the letters.
        </p>
        <div className="trip-yours-actions">
          <Link className="button dark" href="/community#letters">
            Join the letters
          </Link>
          <Link className="button ghost" href="/itineraries">
            All itineraries
          </Link>
        </div>
      </section>
    </main>
  );
}
