import type { Metadata } from "next";
import { PageIntro } from "../studio-components";
import { TripEnquiryForm } from "../trip-enquiry-form";

export const metadata: Metadata = {
  title: "Plan a Trip",
  description:
    "Tell Altrove about the journey you have in mind. Personalised travel planning is opening gradually for Portugal, Italy, Spain and related routes.",
  alternates: {
    canonical: "https://flowertravel.studio/plan-a-trip",
  },
};

export default function PlanATripPage() {
  return (
    <main>
      <section className="section-shell page-top plan-trip-layout">
        <div>
          <PageIntro
            eyebrow="Plan a trip"
            title="Let’s begin with the trip you have in mind."
          >
            <p>
              Altrove is gradually opening its personal itinerary service. Tell
              us a little about the journey you are considering. We will review
              your request and contact you if it matches the destinations and
              services Altrove is currently developing.
            </p>
            <p>
              We begin with Portugal, Italy and Spain — places researched in
              person and written with care. Complete trip booking is not offered
              yet; this form is for thoughtful early enquiries.
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
