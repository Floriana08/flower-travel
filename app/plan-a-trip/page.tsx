import type { Metadata } from "next";
import { PageIntro } from "../studio-components";
import { TripEnquiryForm } from "../trip-enquiry-form";

export const metadata: Metadata = {
  title: "Plan a journey",
  description:
    "Personalised itinerary design from Altrove, how it works, what you receive, and a short enquiry to start your trip.",
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
    body: "Pace, interests, accommodation style and budget, covered in the form.",
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
  {
    title: "Personalised itinerary",
    body: "Recommended bases, route and pacing written for your dates and how you like to travel.",
  },
  {
    title: "The matching Altrove guide",
    body: "When a destination guide exists for your route, it’s included, the deeper research behind the itinerary.",
  },
  {
    title: "Transport strategy",
    body: "How to move between bases, train, ferry or drive, whichever fits the trip.",
  },
  {
    title: "Where to stay",
    body: "Neighbourhood and area guidance for each base, you book the hotels directly.",
  },
  {
    title: "Experiences & restaurants",
    body: "Recommendations that fit your pace, not a checklist of everything on the map.",
  },
  {
    title: "One revision",
    body: "One round of changes once you’ve had time to look the itinerary over.",
  },
];

export default function PlanWithAltrovePage() {
  return (
    <main className="plan-page">
      <section className="section-shell page-top plan-intro">
        <PageIntro eyebrow="Plan a journey" title="Your trip. Our edit.">
          <p>
            Tell us where you&rsquo;re going, when, and how you like to travel.
            Altrove shapes the route, so the journey feels coherent rather than
            crowded.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell plan-split" aria-label="Plan with Altrove">
        <div className="plan-split-story">
          <div className="plan-story-block">
            <p className="eyebrow">The service</p>
            <h2 className="display-title plan-story-title">What Altrove does</h2>
            <p className="plan-service-copy">
              We help you decide where to go, how to structure the trip, where
              to base yourselves, what to prioritise, and how to make the whole
              journey feel coherent rather than a checklist of cities. The
              result is a personalised itinerary built from the same judgement
              behind our journeys and guides, shaped around your dates, pace
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

          <div className="plan-story-block plan-receive-block">
            <p className="eyebrow">What you receive</p>
            <h2 className="display-title plan-story-title">
              Included with your plan
            </h2>
            <p className="plan-receive-lede">
              A personalised itinerary, and the matching Altrove guide when one
              exists for your route.
            </p>
            <ol className="plan-receive-list">
              {deliverables.map((item, index) => (
                <li
                  key={item.title}
                  className={
                    item.title === "The matching Altrove guide"
                      ? "is-featured"
                      : undefined
                  }
                >
                  <span className="plan-receive-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="plan-receive-copy">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="plan-story-block plan-consult-block">
            <p className="eyebrow">Pricing</p>
            <h2 className="display-title plan-story-title">
              Book your consultation
            </h2>
            <p className="plan-consult-price">$99</p>
            <p className="plan-pricing-note">
              A focused consultation to shape your trip, where to base
              yourselves, how to pace the days, and what belongs on the
              itinerary. Fill in the form to get started.
            </p>
            <a className="button dark" href="#apply">
              Book your consultation for $99
            </a>
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
