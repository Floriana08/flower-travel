import type { Metadata } from "next";
import Link from "next/link";
import { BetaApplicationForm } from "../beta-application-form";
import { PageIntro } from "../studio-components";

export const metadata: Metadata = {
  title: "Apply for Founding Membership",
  description:
    "Apply for Altrove Founding Membership. Tell us about your trip and we’ll design it around you. Membership is currently complimentary and limited.",
  alternates: {
    canonical: "https://altrove.studio/apply",
  },
};

const receive = [
  "Personal trip design, built around how you like to travel.",
  "Curated destination recommendations — hotels, restaurants and practical notes.",
  "Direct travel advice relating to your trip.",
  "First access to future Altrove experiences and member privileges.",
];

export default function ApplyPage() {
  return (
    <main className="apply-page">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Founding Membership" title="Apply for Membership.">
          <p>
            Founding Membership is currently complimentary and offered to a
            limited number of travellers. Tell us about the trip you are
            planning. If it is a good fit, Altrove will be in touch.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted apply-offer">
        <div className="apply-offer-copy">
          <p className="eyebrow">What members receive</p>
          <h2 className="display-title">A trip designed around you.</h2>
          <p>
            Altrove researches and curates the trip. You receive a personal Trip
            Edit — then you book everything directly.
          </p>
          <ul className="apply-receive">
            {receive.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell apply-form-section" id="form">
        <div className="home-section-head">
          <p className="eyebrow">Your application</p>
          <h2 className="display-title">Tell us about your trip.</h2>
          <p className="home-section-dek">
            Places are limited. Applying does not guarantee a place — we read
            every application and contact travellers whose trips are a good
            fit.
          </p>
        </div>
        <div className="plan-trip-form-panel">
          <BetaApplicationForm />
        </div>
      </section>

      <section className="section-shell apply-aside">
        <p>
          Prefer to see how we think first? Read a{" "}
          <Link className="text-link" href="/trips/lisbon">
            Lisbon Trip Edit
          </Link>{" "}
          or the{" "}
          <Link className="text-link" href="/journal">
            Journal
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
