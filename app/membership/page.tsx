import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";
import { membershipConfig, studioPositioning } from "../membership-config";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Altrove Founding Membership — private guides, maps, recommendations and personal travel advice for €195 a year. Limited to the first 50 members.",
  alternates: {
    canonical: "https://altrove.studio/membership",
  },
};

const heroImage =
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1800&q=84";

const guideExamples = [
  "Lisbon",
  "Naples",
  "Amalfi Coast",
  "Madrid",
  "Barcelona",
  "Sicily",
];

const mapCategories = [
  "Stay",
  "Eat",
  "Drink",
  "Coffee",
  "Culture",
  "Shop",
  "Swim",
  "Experience",
];

const askExamples = [
  "Going to Lisbon for four days and staying in Príncipe Real. Where would you eat?",
  "Which of these hotels would you choose for a long weekend in Madrid?",
  "We have five days in Sicily. How would you structure it?",
];

export default function MembershipPage() {
  return (
    <main className="membership-page">
      <header className="about-hero section-shell membership-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Membership</p>
          <h1 className="display-title">Travel advice should feel personal.</h1>
          <p className="about-hero-lede">
            Altrove Membership gives you a trusted place to return to whenever
            you&rsquo;re planning a trip. Instead of searching hundreds of
            lists, reviews and TikToks, start with a collection of places
            already worth knowing.
          </p>
          <p className="membership-hero-note">{studioPositioning.notAgency}</p>
          <Link className="button dark" href="#join">
            Become a Founding Member
          </Link>
        </div>
        <figure className="about-hero-media">
          <img
            src={heroImage}
            srcSet={unsplashSrcSet(heroImage)}
            sizes={defaultImageSizes}
            alt="Warm afternoon light on a Mediterranean street"
          />
        </figure>
      </header>

      <section className="section-shell membership-includes" id="includes">
        <article className="membership-include">
          <h2>Private Guides</h2>
          <p>
            Access Altrove&rsquo;s complete collection of destination guides —
            editorial, opinionated and kept inside the member library.
          </p>
          <ul className="membership-inline-list">
            {guideExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="membership-include">
          <h2>Private Maps</h2>
          <p>
            Explore saved recommendations by category — filtered, mapped and
            ready for the trip.
          </p>
          <ul className="membership-inline-list">
            {mapCategories.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="membership-include">
          <h2>Ask Altrove</h2>
          <p>
            Members can request personal recommendations. Considered travel
            advice — not unlimited concierge service, not a booking desk.
          </p>
          <ul className="membership-questions membership-ask-list">
            {askExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="membership-include">
          <h2>Preferential trip planning</h2>
          <p>
            Prefer a full itinerary shaped for you? Members receive preferential
            pricing on bespoke planning — currently{" "}
            {membershipConfig.planning.memberFromLabel}.
          </p>
          <p>
            Altrove designs the route and recommendations. You book stays and
            experiences directly with the providers.
          </p>
          <Link className="text-link" href="/plan-a-trip">
            Plan a Trip
          </Link>
        </article>

        <article className="membership-include">
          <h2>Member events &amp; journeys</h2>
          <p>
            Early access to future Lisbon dinners, cultural experiences,
            weekend trips, food-focused journeys and small Altrove group trips.
          </p>
          <p className="membership-coming-soon">Coming soon</p>
        </article>
      </section>

      <section className="section-shell tinted membership-now" id="join">
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">{membershipConfig.founding.name}</h2>
        <p className="home-founding-price">
          {membershipConfig.founding.priceLabel}
        </p>
        <p>{membershipConfig.founding.limitNote}</p>
        <p className="membership-hero-note">{studioPositioning.notAgency}</p>
        <div className="hero-actions">
          <Link className="button dark" href="/api/membership/checkout">
            Become a Founding Member
          </Link>
          <Link className="button ghost" href="/sign-in">
            Already a member? Sign in
          </Link>
        </div>
      </section>
    </main>
  );
}
