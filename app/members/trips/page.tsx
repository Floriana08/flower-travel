import type { Metadata } from "next";
import Link from "next/link";
import { demoTrips } from "../demo-data";

export const metadata: Metadata = {
  title: "My Trips",
  robots: { index: false, follow: false },
};

export default function MemberTripsPage() {
  return (
    <main className="members-page">
      <header className="members-hero">
        <p className="eyebrow">Planning</p>
        <h1 className="display-title">My trips</h1>
        <p className="lede">
          Upcoming and saved journeys. Altrove can add stays, tables and notes
          here as itineraries take shape.
        </p>
      </header>
      {demoTrips.length ? (
        <ul className="members-trip-list">
          {demoTrips.map((trip) => (
            <li key={trip.id}>
              <article className="members-trip-card">
                <p className="eyebrow">{trip.status}</p>
                <h2>{trip.title}</h2>
                <p>
                  {trip.destination} · {trip.dates}
                </p>
                <Link className="text-link" href={`/members/trips/${trip.id}`}>
                  Open trip
                </Link>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="members-empty">
          <p>No trips yet.</p>
          <Link className="button dark" href="/members/ask">
            Planning somewhere new? Ask Altrove
          </Link>
        </div>
      )}
    </main>
  );
}
