import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../studio-components";
import { TripEnquiryForm } from "../trip-enquiry-form";

export const metadata: Metadata = {
  title: "Plan a journey",
  description:
    "Personalised itinerary design from Altrove — Flor’s approach, how it works, and a short enquiry to start your trip.",
  alternates: {
    canonical: "https://altrove.studio/plan-a-trip",
  },
};

const process = [
  {
    title: "Enquiry",
    body: "Where you’re thinking of going, roughly when, and who’s travelling.",
  },
  {
    title: "Questionnaire",
    body: "Pace, interests, accommodation style and budget — covered in the form.",
  },
  {
    title: "Consultation",
    body: "A short call or written exchange to clarify anything the form couldn’t capture.",
  },
  {
    title: "Research & design",
    body: "Bases, stops and day flow shaped around your dates and priorities.",
  },
  {
    title: "Your itinerary",
    body: "A written route with transport logic and experience recommendations.",
  },
  {
    title: "One revision",
    body: "One round of changes once you’ve had time to look it over.",
  },
];

const deliverables = [
  "A written itinerary: recommended bases, route and pacing",
  "Transport strategy between bases (train, ferry, drive — whichever fits)",
  "Accommodation-area guidance (not live bookings — see below)",
  "Experience and restaurant recommendations that fit your pace",
  "One round of revisions after you’ve reviewed it",
];

export default function PlanWithAltrovePage() {
  return (
    <main className="plan-page">
      <section className="section-shell page-top plan-intro">
        <PageIntro eyebrow="Plan a journey" title="Your trip. Our edit.">
          <p>
            Tell us where you&rsquo;re going, when, and how you like to travel.
            Altrove shapes the route — so the journey feels coherent rather than
            crowded.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell plan-split" aria-label="Plan with Altrove">
        <div className="plan-split-story">
          <div className="plan-story-block" id="meet-flor">
            <p className="eyebrow">Meet Flor</p>
            <h2 className="display-title plan-story-title">
              Italian by birth. Living in Portugal. Collecting the places worth
              returning to.
            </h2>
            <div className="about-prose">
              <p>
                I&rsquo;ve always travelled by collecting notes. Hotels I&rsquo;d
                return to without thinking twice. Neighbourhoods worth waking up
                in. Restaurants I&rsquo;d recommend to a friend without
                hesitation. Routes that quietly changed how I saw a city or a
                stretch of coast.
              </p>
              <p>
                For years those recommendations lived in notebooks and long
                messages to people I care about. Altrove grew out of that habit
                — a place to gather what was worth keeping, and to share it with
                more care than a hurried list ever could.
              </p>
              <p className="about-pull">
                Altrove isn&rsquo;t about travelling more. It&rsquo;s about
                travelling better.
              </p>
              <p>
                Every destination begins with a real journey. I write from
                places I have visited, stayed in and returned to in thought long
                after the trip ended. I&rsquo;d rather recommend less, and mean
                it.
              </p>
            </div>
          </div>

          <div className="plan-story-block">
            <p className="eyebrow">The service</p>
            <h2 className="display-title plan-story-title">What Altrove does</h2>
            <p className="plan-service-copy">
              We help you decide where to go, how to structure the trip, where
              to base yourselves, what to prioritise, and how to make the whole
              journey feel coherent rather than a checklist of cities. The
              result is a personalised itinerary built from the same judgement
              behind our journeys and guides — shaped around your dates, pace
              and priorities.
            </p>
          </div>

          <div className="plan-story-block">
            <p className="eyebrow">The process</p>
            <h2 className="display-title plan-story-title">How it works</h2>
            <ol className="plan-process-list">
              {process.map((step, index) => (
                <li key={step.title}>
                  <span className="plan-process-index">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="plan-story-block">
            <p className="eyebrow">What you receive</p>
            <h2 className="display-title plan-story-title">Deliverables</h2>
            <ul className="check-list">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="plan-story-block">
            <p className="eyebrow">Boundaries</p>
            <h2 className="display-title plan-story-title">
              What this doesn&rsquo;t include
            </h2>
            <p className="plan-service-copy">
              Altrove designs itineraries and gives independent recommendations
              — we don&rsquo;t currently book flights, hotels or travel packages
              on your behalf, and we don&rsquo;t offer 24/7 travel support
              during your trip. Once you have the itinerary, you book directly
              with the providers we point you to. Complete trip booking is a
              future service we&rsquo;re working towards, not something we offer
              today.
            </p>
          </div>

          <div className="plan-story-block">
            <p className="eyebrow">Pricing</p>
            <h2 className="display-title plan-story-title">
              Shared after enquiry
            </h2>
            <p className="plan-pricing-note">
              Fees depend on trip length and complexity. Altrove confirms the
              figure with you before any work begins — no surprise invoices.
            </p>
            <p className="plan-trip-aside">
              Prefer to browse first?{" "}
              <Link className="text-link" href="/destinations">
                Explore the destinations
              </Link>
              .
            </p>
          </div>
        </div>

        <aside className="plan-split-form" id="apply" aria-label="Trip enquiry">
          <div className="plan-trip-form-panel plan-trip-form-sticky">
            <div className="plan-form-head">
              <p className="eyebrow">Get started</p>
              <h2 className="display-title plan-form-title">
                Tell us about your trip.
              </h2>
            </div>
            <TripEnquiryForm />
          </div>
        </aside>
      </section>
    </main>
  );
}
