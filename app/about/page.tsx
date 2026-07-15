import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "../components";

const studioPillars = [
  "Portugal route notes",
  "Coastal city edits",
  "Beach and hotel mood boards",
  "Slow travel essays",
  "Community-first travel ideas",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Flower Travel, a boutique editorial travel community for slow itineraries, destination articles, personal stories, and thoughtful travel ideas.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Flower Travel"
        title="A travel studio with a magazine heart."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A breakfast table on a terrace overlooking the sea"
      >
        <p>
          Flower Travel is built for readers who want the romance of a beautiful
          travel story and the relief of a plan that actually works.
        </p>
      </PageHero>

      <section className="about-story section-shell">
        <div>
          <p className="eyebrow">The point of view</p>
          <h2>Travel better by choosing more carefully.</h2>
        </div>
        <div className="story-copy">
          <p>
            The original Flower Travel site was a personal, slow-travel journal:
            warm notes from Europe, gentle itineraries, and practical route
            ideas. This redesign keeps that intimacy and gives it a more
            premium editorial frame.
          </p>
          <p>
            The studio exists to help people make better travel choices before
            the trip starts. That can mean choosing Lisbon over a busier route,
            spending more on one hotel night that changes the whole trip, or
            leaving space in an itinerary so the best memory has room to happen.
          </p>
          <p>
            It is not a travel agency yet. The first chapter is audience,
            search, trust, and learning what readers care about. Services can
            come later from that foundation.
          </p>
        </div>
      </section>

      <section className="values-section">
        <SectionHeading eyebrow="Studio pillars" title="What the site is built to publish." />
        <div className="value-grid">
          {studioPillars.map((pillar) => (
            <article className="value-item" key={pillar}>
              <h3>{pillar}</h3>
              <p>
                Researched, polished, and written for travelers who want useful
                specificity without losing the feeling of discovery.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="consultation-strip">
        <div>
          <p className="eyebrow">Next chapter</p>
          <h2>A members' travel community can grow from the same taste level.</h2>
          <p>
            The design leaves room for paid downloads, members-only edits,
            sustainable hotel notes, local partnerships, honeymoon planning, and
            curated trips without changing the brand from editorial to
            sales-heavy.
          </p>
        </div>
        <Link className="button light" href="/community">
          Join the community
        </Link>
      </section>
    </main>
  );
}
