import type { Metadata } from "next";
import Link from "next/link";
import { LisbonJourneyRoute } from "./journey-route";
import { tripProfile } from "./data";

export const metadata: Metadata = {
  title: "Inside an Altrove trip — Lisbon",
  description:
    "How Altrove would shape four days in Lisbon: stay, eat, wander — rhythm rather than a day-by-day checklist.",
  alternates: {
    canonical: "https://altrove.studio/trips/lisbon",
  },
  openGraph: {
    title: "Inside an Altrove trip — Lisbon | Altrove",
    description:
      "A sample Altrove trip through Lisbon — filtered moments, not an exhaustive itinerary.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=80",
        alt: "Lisbon rooftops under soft afternoon light",
      },
    ],
  },
};

export default function LisbonTripPage() {
  return (
    <main className="trip-lisbon">
      <section className="trip-hero section-shell">
        <p className="trip-kicker">Inside an Altrove trip</p>
        <h1>Lisbon / 4 days</h1>
        <p className="trip-profile">{tripProfile}</p>
        <p className="trip-sample-note">
          Every Altrove trip is designed around the traveller. This is one
          example of how Lisbon could flow — not a rigid itinerary.
        </p>
        <div className="trip-hero-media">
          <img
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=80"
            alt="Lisbon rooftops and tiled facades in soft light"
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
        <h2 id="trip-yours-title">Yours would look different.</h2>
        <p>That&apos;s the point.</p>
        <p>
          Tell Altrove how you like to travel and we&apos;ll shape the trip
          around you.
        </p>
        <div className="trip-yours-actions">
          <Link className="button dark" href="/apply">
            Become a Founding Member
          </Link>
          <Link className="button ghost" href="/membership">
            Explore Membership
          </Link>
        </div>
      </section>
    </main>
  );
}
