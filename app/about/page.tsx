import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "../components";

const studioPillars = [
  "Italy, Spain, Portugal routes",
  "Local experience edits",
  "Beach and hotel mood boards",
  "Slow travel essays",
  "Club-first reader signals",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Altrove, a boutique editorial travel blog and club for slow itineraries, destination articles, personal stories, and thoughtful travel ideas.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Altrove"
        title="A travel studio with a magazine heart."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A breakfast table on a terrace overlooking the sea"
      >
        <p>
          Altrove is built for readers who want the romance of a beautiful
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
            Altrove was born from a love of discovering the world with
            curiosity, intention, and a well-planned itinerary. Choosing the
            right neighborhood, finding that unforgettable local restaurant,
            slowing down enough to enjoy the journey, and leaving room for the
            unexpected.
          </p>
          <p>
            This is where I share thoughtfully curated travel guides, detailed
            itineraries, and honest recommendations to help you travel with
            confidence and make the most of every destination.
          </p>
          <p>
            Altrove is a place for inspiration, practical advice, and
            beautiful stories, built on the idea that better travel starts long
            before you board the plane. Welcome to Altrove.
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
                Researched, polished, and written for travelers who want useful
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
            Destination stories, practical planning notes and hotel discoveries
            for travellers who prefer character over crowds.
          </p>
        </div>
        <Link className="button light" href="/club">
          Join the Journal
        </Link>
      </section>
    </main>
  );
}
