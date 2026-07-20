import type { Metadata } from "next";
import Link from "next/link";
import { ItineraryCard, PageHero, SectionHeading } from "../components";
import { itineraries } from "../data";

export const metadata: Metadata = {
  title: "Routes",
  description:
    "Browse Altrove route ideas with realistic pacing, thoughtful bases, beautiful detours, and practical planning notes.",
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
          Carefully researched route frameworks: where to begin, how many nights
          to stay, when to slow down, and which detours are worth the day.
        </p>
      </PageHero>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Route library"
          title="Built around pacing, not pressure."
        >
          <p>
            Open any route for stops, suggested rhythm and practical planning
            notes.
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
          <p className="eyebrow">Club first</p>
          <h2>Want better routes without the packaged-holiday feeling?</h2>
          <p>
            Join the letter for Italy, Spain, Portugal route ideas,
            positive-footprint travel thinking, and early signals while Altrove
            learns what readers want.
          </p>
        </div>
        <Link className="button light" href="/club">
          Join the Journal
        </Link>
      </section>
    </main>
  );
}
