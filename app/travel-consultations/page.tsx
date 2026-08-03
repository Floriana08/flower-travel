import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "../components";
import { consultationTopics, site } from "../data";

export const metadata: Metadata = {
  title: "Travel Consultations",
  description:
    "Book a Altrove consultation for personal destination advice, itinerary review, honeymoon route thinking, and carefully researched next steps.",
};

export default function TravelConsultationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Travel consultations"
        title="Personal advice before the trip becomes expensive."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=84"
        alt="A road through a wide landscape at sunset"
      >
        <p>
          A consultation is for travelers who want sharper choices, better
          pacing, and thoughtful recommendations before committing to flights,
          hotels, or a once-in-a-lifetime route.
        </p>
      </PageHero>

      <section className="consultation-page-grid section-shell">
        <div>
          <SectionHeading
            eyebrow="What we can solve"
            title="Bring the messy middle of planning."
          >
            <p>
              Personal advice and route editing — so your trip feels intentional,
              beautiful, and realistic before you commit.
            </p>
          </SectionHeading>
          <ul className="check-list">
            {consultationTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        <aside className="booking-panel">
          <p className="eyebrow">Book a session</p>
          <h2>45-minute travel consult</h2>
          <p>
            Send your dates, draft route, or open questions. You will receive a
            focused reply with availability and the best consultation format.
          </p>
          <a className="button dark full" href={`mailto:${site.email}`}>
            Email to book
          </a>
          <p className="small-print">
            Prefer a fuller itinerary?{" "}
            <Link className="text-link" href="/plan-a-trip">
              Plan a trip
            </Link>
            .
          </p>
        </aside>
      </section>

      <section className="process-section">
        <SectionHeading eyebrow="How it works" title="Lightweight, useful, and personal." />
        <div className="process-grid">
          {[
            ["Send the brief", "Share your destination ideas, rough dates, budget range, travel style, and what feels unclear."],
            ["Get the focus", "We identify the highest-value questions: route, bases, timing, hotel criteria, or experiences."],
            ["Meet or exchange notes", "Use the session for live advice or an async route review if that fits the trip better."],
            ["Leave with next steps", "You get a clearer plan, better tradeoffs, and a short action list for booking."],
          ].map(([title, text]) => (
            <article className="process-step" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-form-section">
        <div>
          <p className="eyebrow">Request form</p>
          <h2>Start the conversation.</h2>
          <p>
            Prefer forms? Send the essentials here, or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <form
          className="contact-form"
          action={`mailto:${site.email}`}
          method="post"
        >
          <label>
            <span>Name</span>
            <input name="name" type="text" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required />
          </label>
          <label>
            <span>Destination or idea</span>
            <input name="destination" type="text" placeholder="Portugal by train, Greece honeymoon..." />
          </label>
          <label>
            <span>What do you need help with?</span>
            <textarea name="message" rows={5} required />
          </label>
          <button className="button dark" type="submit">
            Send request
          </button>
        </form>
      </section>

      <section className="editorial-band">
        <div>
          <p className="eyebrow">Not yet a trip shop</p>
          <h2>The first product is trust.</h2>
        </div>
        <p>
          Altrove is intentionally starting with content and
          consultations. Curated planning, honeymoon design, downloadable
          resources, and packaged edits can grow from real reader behavior.
        </p>
        <Link className="button dark" href="/journeys">
          Read the editorial work
        </Link>
      </section>
    </main>
  );
}
