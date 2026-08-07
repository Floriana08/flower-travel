import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../studio-components";
import { TripEnquiryForm } from "../trip-enquiry-form";

export const metadata: Metadata = {
  title: "Plan with Altrove",
  description:
    "Personalised itinerary design from Altrove — how it works, what you receive, what it costs, and what it doesn't include.",
  alternates: {
    canonical: "https://altrove.studio/plan-a-trip",
  },
};

const process = [
  {
    title: "Enquiry",
    body: "Tell us where you're thinking of going, roughly when, and who's travelling.",
  },
  {
    title: "Travel questionnaire",
    body: "A short set of questions on pace, interests, accommodation style and budget — the form below covers most of it.",
  },
  {
    title: "Consultation",
    body: "A short call or written exchange to clarify anything the form couldn't capture.",
  },
  {
    title: "Research & design",
    body: "We shape a route: where to base yourselves, how many stops make sense, and how the days should flow.",
  },
  {
    title: "Your itinerary",
    body: "A personalised written itinerary — bases, pacing, transport logic and experience recommendations.",
  },
  {
    title: "One revision",
    body: "One round of changes once you've had time to look it over.",
  },
];

const deliverables = [
  "A written itinerary: recommended bases, route and pacing",
  "Transport strategy between bases (train, ferry, drive — whichever fits)",
  "Accommodation-area guidance (not live bookings — see below)",
  "Experience and restaurant recommendations that fit your pace",
  "One round of revisions after you've reviewed it",
];

export default function PlanWithAltrovePage() {
  return (
    <main className="plan-page">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Plan with Altrove" title="Personalised itinerary design.">
          <p>
            Planning a meaningful trip usually means too many disconnected
            decisions and too much generic research. Altrove helps you decide
            where to go, how to structure the days, where to base yourselves,
            and what to leave out — so the journey feels coherent rather than
            crowded.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted plan-service-section">
        <div className="home-section-head">
          <p className="eyebrow">The service</p>
          <h2 className="display-title">What Altrove does</h2>
        </div>
        <p className="plan-service-copy">
          We help you decide where to go, how to structure the trip, where to
          base yourselves, what to prioritise, and how to make the whole
          journey feel coherent rather than a checklist of cities. The result
          is a personalised itinerary built from the same judgement behind
          our journeys and guides — shaped around your dates, pace and
          priorities.
        </p>
      </section>

      <section className="section-shell plan-process-section">
        <div className="home-section-head">
          <p className="eyebrow">The process</p>
          <h2 className="display-title">How it works</h2>
        </div>
        <ol className="plan-process-grid">
          {process.map((step, index) => (
            <li key={step.title}>
              <span className="plan-process-index">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell tinted plan-deliverables-section">
        <div className="home-section-head">
          <p className="eyebrow">What you receive</p>
          <h2 className="display-title">Deliverables</h2>
        </div>
        <ul className="check-list">
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell plan-boundaries-section" aria-label="What this doesn't include">
        <div className="home-section-head">
          <p className="eyebrow">Boundaries</p>
          <h2 className="display-title">What this doesn&rsquo;t include</h2>
        </div>
        <p>
          Altrove designs itineraries and gives independent recommendations —
          we don&rsquo;t currently book flights, hotels or travel packages on
          your behalf, and we don&rsquo;t offer 24/7 travel support during
          your trip. Once you have the itinerary, you book directly with the
          providers we point you to. Complete trip booking is a future
          service we&rsquo;re working towards, not something we offer today.
        </p>
      </section>

      <section className="section-shell tinted plan-pricing-section">
        <div className="home-section-head">
          <p className="eyebrow">Pricing</p>
          <h2 className="display-title">From €150</h2>
        </div>
        <p className="plan-pricing-note">
          Placeholder pilot pricing, to be confirmed before this service goes
          live — the exact figure depends on trip length and complexity. We&rsquo;ll
          always confirm the price with you before any work begins.
        </p>
      </section>

      <section className="section-shell plan-form-section" id="apply">
        <div className="home-section-head">
          <p className="eyebrow">Get started</p>
          <h2 className="display-title">Tell us about your trip.</h2>
          <p className="plan-trip-aside">
            Prefer to browse first?{" "}
            <Link className="text-link" href="/destinations">
              Explore the destinations
            </Link>
            .
          </p>
        </div>
        <div className="plan-trip-form-panel">
          <TripEnquiryForm />
        </div>
      </section>
    </main>
  );
}
