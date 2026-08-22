import type { Metadata } from "next";
import Link from "next/link";
import { demoMember, demoTrips } from "./demo-data";

export const metadata: Metadata = {
  title: "Member home",
  robots: { index: false, follow: false },
};

const explore = [
  {
    href: "/members/guides",
    title: "Guides",
    body: "Destination guides and travel notes.",
  },
  {
    href: "/members/maps",
    title: "Maps",
    body: "Private recommendations across Europe.",
  },
  {
    href: "/members/saved",
    title: "Saved",
    body: "Places you have bookmarked.",
  },
  {
    href: "/members/ask",
    title: "Ask Altrove",
    body: "Request personal travel advice.",
  },
];

export default function MembersHomePage() {
  return (
    <main className="members-page">
      <header className="members-hero">
        <p className="eyebrow">Welcome back</p>
        <h1 className="display-title">Hello, {demoMember.firstName}</h1>
        <p className="lede">Where are you thinking of going next?</p>
      </header>

      <section className="members-section">
        <div className="members-section-head">
          <h2>Your trips</h2>
          <Link className="text-link" href="/members/trips">
            View all
          </Link>
        </div>
        {demoTrips.length ? (
          <ul className="members-trip-list">
            {demoTrips.map((trip) => (
              <li key={trip.id}>
                <article className="members-trip-card">
                  <p className="eyebrow">{trip.status}</p>
                  <h3>{trip.title}</h3>
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
      </section>

      <section className="members-section">
        <h2>Explore Altrove</h2>
        <div className="members-explore-grid">
          {explore.map((item) => (
            <Link key={item.href} className="members-explore-card" href={item.href}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
