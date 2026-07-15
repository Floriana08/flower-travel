import type { Metadata } from "next";
import Link from "next/link";
import { ItineraryCard, PageHero, SectionHeading } from "../components";
import { itineraries } from "../data";

export const metadata: Metadata = {
  title: "Routes",
  description:
    "Browse Flower Travel route ideas with realistic pacing, thoughtful bases, beautiful detours, and practical planning notes.",
};

export default function RoutesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Route ideas"
        title="Routes designed for days that feel spacious."
        image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1800&q=84"
        alt="A train traveling through a mountain valley"
      >
        <p>
          These are not packaged holidays. They are carefully researched route
          frameworks: where to begin, how many nights to stay, when to slow
          down, and what might later become a member edit or paid route pack.
        </p>
      </PageHero>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Route library"
          title="Built around pacing, not pressure."
        >
          <p>
            Click any route to see the stops, suggested rhythm, pacing notes,
            and how it could become a future member-only edit or paid route
            pack.
          </p>
        </SectionHeading>
        <div className="itinerary-grid wide">
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
          ))}
        </div>
      </section>

      <section className="process-section">
        <SectionHeading
          eyebrow="How every route is edited"
          title="A good itinerary leaves room for the trip to breathe."
        />
        <div className="process-grid">
          {[
            ["Base first", "Choose neighborhoods and hotels before filling the calendar."],
            ["Transfer math", "Keep travel days realistic so the route feels polished on the ground."],
            ["One anchor per day", "Plan one meaningful reservation, museum, hike, or experience, then leave space."],
            ["Useful backups", "Add weather options, quiet meals, and simpler alternatives for tired days."],
          ].map(([title, text]) => (
            <article className="process-step" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="consultation-strip">
        <div>
          <p className="eyebrow">Community first</p>
          <h2>Want better routes without the packaged-holiday feeling?</h2>
          <p>
            Join the letter for route ideas, Portugal notes, sustainable travel
            thinking, and early access as Flower Travel grows into a members'
            community.
          </p>
        </div>
        <Link className="button light" href="/community">
          Join the community
        </Link>
      </section>
    </main>
  );
}
