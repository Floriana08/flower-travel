import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../studio-components";
import { TripEnquiryForm } from "../trip-enquiry-form";

export const metadata: Metadata = {
  title: "Journey Blueprint",
  description:
    "The Altrove Journey Blueprint — a written travel strategy covering destinations, route, pace, budget and hotel style, built around a questionnaire, a review and a video call.",
  alternates: {
    canonical: "https://altrove.studio/plan-a-trip",
  },
};

const process = [
  {
    step: "Questionnaire",
    body: "A detailed form about pace, taste, budget and the kind of trip you are imagining.",
  },
  {
    step: "Review",
    body: "We read it properly — checking your dates, your ideas, and where they might be worth rethinking.",
  },
  {
    step: "Video call",
    body: "A conversation to go deeper: the questions a form cannot ask, and what you actually mean by “relaxed” or “adventurous.”",
  },
  {
    step: "Written blueprint",
    body: "A document you keep — destinations, route, pace, hotel style, transport and seasonal notes, sent for you to plan from at your own pace.",
  },
];

const included = [
  "Recommended destinations",
  "Route and pacing",
  "Budget guidance",
  "Hotel style recommendations",
  "Transport recommendations",
  "Seasonal advice",
  "Trip strategy",
];

export default function PlanATripPage() {
  return (
    <main>
      <section className="section-shell page-top plan-trip-layout">
        <div>
          <PageIntro
            eyebrow="Journey Blueprint"
            title="Not a consultation. A written strategy for how to travel."
          >
            <p>
              A Journey Blueprint is expertise you purchase, not a quick chat.
              It becomes a document you keep, built around how you actually
              want to travel — not a generic template.
            </p>
            <p>
              We begin with Portugal, Italy and Spain: places known in
              person, considered with the same care as everything else
              Altrove writes.
            </p>
            <p className="plan-trip-aside">
              Investment: from €450 per Blueprint.{" "}
              Prefer to read first?{" "}
              <Link className="text-link" href="/journeys">
                Explore the journeys
              </Link>
              .
            </p>
          </PageIntro>
        </div>
        <div className="plan-trip-form-panel">
          <TripEnquiryForm />
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Four steps, in order.</h2>
        </div>
        <div className="process-grid">
          {process.map(({ step, body }, index) => (
            <article className="process-step" key={step}>
              <p className="eyebrow">{`0${index + 1}`}</p>
              <h3>{step}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell tinted consultation-page-grid">
        <div>
          <div className="section-heading">
            <p className="eyebrow">What is included</p>
            <h2>The strategy, in writing.</h2>
          </div>
          <ul className="check-list">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="booking-panel">
          <p className="eyebrow">What this is not</p>
          <h2>Strategy, not logistics.</h2>
          <p>
            A Journey Blueprint is not a full day-by-day itinerary, and we do
            not make bookings or hold reservations on your behalf. What you
            receive is the thinking — clear enough to hand to a travel agent,
            or to book yourself with confidence.
          </p>
          <p className="small-print">
            Considering something longer or multi-country? Join{" "}
            <Link className="text-link" href="/#newsletter">
              the list
            </Link>{" "}
            to hear when full Private Journey Design opens.
          </p>
        </aside>
      </section>
    </main>
  );
}
