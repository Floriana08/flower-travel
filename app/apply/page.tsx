import type { Metadata } from "next";
import Link from "next/link";
import { BetaApplicationForm } from "../beta-application-form";
import { PageIntro } from "../studio-components";

export const metadata: Metadata = {
  title: "Apply for the Private Beta",
  description:
    "Apply to join Altrove’s founding beta. A small group of travellers will receive a complimentary personalised trip design. Altrove plans the trip; you book it.",
  alternates: {
    canonical: "https://altrove.studio/apply",
  },
};

const receive = [
  "One complimentary personalised trip design, built around how you like to travel.",
  "Direct travel support relating to that trip.",
  "Access to Altrove’s curated recommendations — hotels, restaurants, pacing and practical notes.",
];

export default function ApplyPage() {
  return (
    <main className="apply-page">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Founding Beta" title="Apply for the Private Beta.">
          <p>
            We&rsquo;re inviting a small group of travellers to experience
            Altrove before membership launches. Ten founding beta places are
            available.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted apply-offer">
        <div className="apply-offer-copy">
          <p className="eyebrow">What beta travellers receive</p>
          <h2 className="display-title">Personally designed. Complimentary for now.</h2>
          <p>
            Tell us where you&rsquo;re going. Altrove researches and curates
            the trip. You receive a personal travel edit — then you book
            everything directly. After you travel, we&rsquo;ll ask for candid
            feedback.
          </p>
          <ul className="apply-receive">
            {receive.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="apply-scarcity">10 founding beta places available.</p>
        </div>
      </section>

      <section className="section-shell apply-form-section" id="form">
        <div className="home-section-head">
          <p className="eyebrow">Your application</p>
          <h2 className="display-title">Tell us about your trip.</h2>
          <p className="home-section-dek">
            Places are limited. Applying does not guarantee a place — we read
            every application and contact travellers whose trips are a good
            fit for this stage.
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
            sample Lisbon travel edit
          </Link>{" "}
          or explore the{" "}
          <Link className="text-link" href="/journal">
            Journal
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
