import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Philosophy",
  description:
    "How Altrove travels — fewer hotels, slower journeys, neighbourhoods over landmarks, and meals that decide the day.",
  alternates: {
    canonical: "https://altrove.studio/philosophy",
  },
};

const principles = [
  {
    title: "Fewer hotels",
    body: "Two bases beat five. Every change of bed costs a morning you will not get back.",
  },
  {
    title: "Slower journeys",
    body: "Four days in one place over a rush through four countries. Depth is the whole point.",
  },
  {
    title: "Neighbourhoods over landmarks",
    body: "A city is its mornings and its corner tables, not the list of things you are meant to photograph.",
  },
  {
    title: "Meals decide the day",
    body: "Let lunch set the pace. A long, unhurried table beats three rushed sights every time.",
  },
  {
    title: "Quality over quantity",
    body: "One clean escape, chosen well, over a checklist of everywhere at once.",
  },
  {
    title: "Someone else's taste",
    body: "Not endless options. A point of view you can trust, built from places actually lived in.",
  },
];

export default function PhilosophyPage() {
  return (
    <main>
      <section className="section-shell page-top">
        <p className="eyebrow">Philosophy</p>
        <h1 className="display-title">How Altrove travels.</h1>
        <p className="journeys-studio-single-lede">
          Altrove isn’t about travelling more. It’s about travelling better.
          The Altrove traveller isn’t looking to see everything — they’re
          looking to remember what they see.
        </p>
      </section>

      <section className="country-mag-notes country-mag-pad" aria-label="Principles">
        <div className="country-mag-notes-rail">
          <p className="country-mag-kicker">In practice</p>
          <h2>What this actually means</h2>
          <p className="country-mag-deck">
            Not abstractions — the small decisions that shape every journey
            and journal entry Altrove writes.
          </p>
        </div>
        <dl className="country-mag-notes-list">
          {principles.map((principle) => (
            <div key={principle.title}>
              <dt>{principle.title}</dt>
              <dd>{principle.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section-shell tinted">
        <p className="about-pull">
          The Campania guide is this philosophy applied to one region. A
          Journey Design session is this philosophy applied to your own trip.
        </p>
        <p className="home-section-link">
          <Link className="text-link" href="/guides/campania">
            See the guide
          </Link>
          <span aria-hidden="true"> · </span>
          <Link className="text-link" href="/plan-a-trip">
            Start a Journey Design
          </Link>
        </p>
      </section>
    </main>
  );
}
