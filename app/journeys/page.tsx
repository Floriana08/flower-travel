import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../components";
import {
  getJourneysByStatus,
  journeys,
} from "../journeys-data";
import { EnquiryCta, JourneyCard, PageIntro } from "../studio-components";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "A limited collection of Altrove itineraries based on personal experience and in-depth research — available to explore or still in development.",
  alternates: {
    canonical: "https://flowertravel.studio/journeys",
  },
};

export default function JourneysPage() {
  const available = getJourneysByStatus("available");
  const inDevelopment = getJourneysByStatus("in-development");

  return (
    <main>
      <section className="section-shell page-top">
        <PageIntro
          eyebrow="Journeys"
          title="A small collection, built with care."
        >
          <p>
            Altrove is creating a limited set of itineraries shaped by personal
            experience and careful research. We do not offer the whole world —
            only destinations we know well enough to recommend with honesty.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted" id="available">
        <SectionHeading eyebrow="Available" title="Ready to explore">
          <p>
            Editorial journeys you can read now. These are not bookable packages
            yet — they are researched routes you can follow or adapt.
          </p>
        </SectionHeading>
        {available.length ? (
          <div className="journey-grid">
            {available.map((journey) => (
              <JourneyCard key={journey.slug} journey={journey} />
            ))}
          </div>
        ) : (
          <p className="empty-note">New available journeys will appear here.</p>
        )}
      </section>

      <section className="section-shell" id="in-development">
        <SectionHeading eyebrow="In development" title="Being written now">
          <p>
            Journeys currently taking shape. Join the list or enquire if your
            dates align with these destinations.
          </p>
        </SectionHeading>
        <div className="journey-grid">
          {inDevelopment.map((journey) => (
            <JourneyCard key={journey.slug} journey={journey} />
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="custom">
        <SectionHeading
          eyebrow="Custom planning"
          title="A journey designed around you"
        >
          <p>
            Personalised itinerary design is opening gradually. Tell us about the
            trip you have in mind — we will respond when it matches the places
            and capacity Altrove is developing.
          </p>
        </SectionHeading>
        <EnquiryCta
          title="Start a custom enquiry"
          cta="Plan a trip"
          href="/plan-a-trip"
        >
          <p>
            Honeymoons, slow European routes, city breaks and special occasions —
            beginning with Portugal, Italy and Spain.
          </p>
        </EnquiryCta>
        <p className="section-footer-link">
          <Link className="text-link" href="/routes">
            Browse the wider route library
          </Link>
          <span> ({journeys.length} featured journeys above)</span>
        </p>
      </section>
    </main>
  );
}
