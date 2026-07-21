import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "../components";
import { FlorNote } from "../editorial-components";

const studioPillars = [
  "Portugal-first destination authority",
  "Routes you can actually follow",
  "Hotel and neighbourhood notes",
  "Honest planning mistakes to avoid",
  "Club letters with one idea at a time",
];

export const metadata: Metadata = {
  title: "About Flor and Altrove",
  description:
    "Meet Flor, editor of Altrove — a boutique travel journal for curated routes, honest notes and practical guides.",
  alternates: {
    canonical: "https://flowertravel.studio/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Altrove"
        title="A travel journal with a magazine heart."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A breakfast table on a terrace overlooking the sea"
      >
        <p>
          Curated routes, honest travel notes and practical guides for
          travellers who prefer depth over checklists.
        </p>
      </PageHero>

      <section className="about-story section-shell">
        <div>
          <p className="eyebrow">Meet the editor</p>
          <h2>Hi, I’m Flor.</h2>
        </div>
        <div className="story-copy">
          <p>
            I created Altrove as a place to collect the routes, neighbourhoods,
            hotels and travel notes that are genuinely worth remembering. The
            aim is not to see everything, but to travel with more intention and
            develop a stronger sense of place.
          </p>
          <FlorNote>
            <p>
              Portugal is where the journal begins in earnest. Italy and Spain
              remain in the collection, but I would rather build one destination
              with depth than publish shallow coverage everywhere.
            </p>
          </FlorNote>
          <p>
            What you will find here are personally researched notes, practical
            planning advice and editorial recommendations that stay independent.
            No fake visitor counts. No invented credentials. Just careful
            writing meant to help you plan a better trip.
          </p>
        </div>
      </section>

      <section className="values-section">
        <SectionHeading
          eyebrow="Studio pillars"
          title="What the site is built to publish."
        />
        <div className="value-grid">
          {studioPillars.map((pillar) => (
            <article className="value-item" key={pillar}>
              <h3>{pillar}</h3>
              <p>
                Researched, polished, and written for travellers who want useful
                specificity without losing the feeling of discovery.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="consultation-strip">
        <div>
          <p className="eyebrow">The Club</p>
          <h2>A quieter letter for better trips</h2>
          <p>
            One carefully planned route, one hotel worth remembering, one
            restaurant worth travelling for — and notes that do not always make
            the website.
          </p>
        </div>
        <Link className="button light" href="/club">
          Join the Club
        </Link>
      </section>
    </main>
  );
}
