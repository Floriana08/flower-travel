import type { Metadata } from "next";
import Link from "next/link";
import { demoSaved } from "../demo-data";

export const metadata: Metadata = {
  title: "Saved",
  robots: { index: false, follow: false },
};

export default function MemberSavedPage() {
  const byDestination = demoSaved.reduce<Record<string, typeof demoSaved>>(
    (acc, place) => {
      acc[place.destination] = acc[place.destination] ?? [];
      acc[place.destination].push(place);
      return acc;
    },
    {},
  );

  return (
    <main className="members-page">
      <header className="members-hero">
        <p className="eyebrow">Library</p>
        <h1 className="display-title">Saved places</h1>
        <p className="lede">Your bookmarks, grouped by destination.</p>
      </header>
      {Object.entries(byDestination).map(([destination, places]) => (
        <section key={destination} className="members-section">
          <h2>
            {destination} — {places.length} saved
          </h2>
          <ul className="members-place-list">
            {places.map((place) => (
              <li key={place.id}>
                <article className="members-place-card">
                  <img src={place.image} alt="" loading="lazy" />
                  <div>
                    <p className="eyebrow">{place.category}</p>
                    <h3>{place.name}</h3>
                    <p>{place.note}</p>
                    <Link className="text-link" href="/members/maps">
                      View on map
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
