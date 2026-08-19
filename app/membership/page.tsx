import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../studio-components";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Altrove is a private travel membership. Tell us about your trip and we'll design it around you. Founding Membership is currently complimentary and limited.",
  alternates: {
    canonical: "https://altrove.studio/membership",
  },
};

const steps = [
  {
    title: "Tell us about your trip",
    body: "Destination, dates, budget, who you’re travelling with and what matters to you.",
  },
  {
    title: "We design it",
    body: "Altrove researches hotels, restaurants, experiences and how we’d structure the trip.",
  },
  {
    title: "You book it",
    body: "We send you a personal Altrove Trip Edit and you make the bookings directly.",
  },
];

const receive = [
  {
    title: "Personal trip design",
    body: "A trip built around your dates, your budget and the way you actually like to travel.",
  },
  {
    title: "Curated destination recommendations",
    body: "Hotels, restaurants and places we would genuinely choose.",
  },
  {
    title: "Direct travel advice",
    body: "Practical notes on pacing, neighbourhoods and the decisions that change a trip.",
  },
  {
    title: "First access",
    body: "First access to future Altrove experiences and member privileges, as they open.",
  },
];

export default function MembershipPage() {
  return (
    <main className="membership-page">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Founding Membership" title="A private travel membership.">
          <p>
            Members tell Altrove about the trip they are planning. We research
            it, curate the best options and design the trip around them. The
            traveller makes the bookings directly.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted">
        <div className="home-section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="display-title">Tell us. We design it. You book it.</h2>
        </div>
        <ol className="home-how-grid">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="home-how-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell">
        <div className="home-section-head">
          <p className="eyebrow">What members receive</p>
          <h2 className="display-title">Designed around you.</h2>
        </div>
        <ul className="home-benefits-grid">
          {receive.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell tinted membership-now">
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">Become a Founding Member</h2>
        <p>
          Founding Membership is currently complimentary and offered to a
          limited number of travellers.
        </p>
        <Link className="button dark" href="/apply">
          Apply for Membership
        </Link>
      </section>
    </main>
  );
}
