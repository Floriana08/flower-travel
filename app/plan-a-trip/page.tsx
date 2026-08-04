import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../studio-components";
import { TripEnquiryForm } from "../trip-enquiry-form";

export const metadata: Metadata = {
  title: "Plan a Trip",
  description:
    "Ask Altrove to design a personalised itinerary around the way you like to travel — beginning with Portugal, Italy and Spain.",
  alternates: {
    canonical: "https://altrove.studio/plan-a-trip",
  },
};

export default function PlanATripPage() {
  return (
    <main>
      <section className="section-shell page-top plan-trip-layout">
        <div>
          <PageIntro
            eyebrow="Plan a trip"
            title="If you love the way Altrove travels, ask us to plan yours."
          >
            <p>
              Personalised itinerary design — hotels, neighbourhoods and pacing
              shaped around how you like to travel.
            </p>
            <p>
              We begin with Portugal, Italy and Spain: places known in person,
              written with care. Tell us your dates and taste. We’ll design a
              trip you can trust.
            </p>
            <p className="plan-trip-aside">
              Prefer to browse first?{" "}
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
    </main>
  );
}
