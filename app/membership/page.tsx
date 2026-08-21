import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Altrove is a private lifestyle travel concierge for members. Tell us where you're going — we filter the options and shape the trip around you. Founding Membership is currently complimentary and limited.",
  alternates: {
    canonical: "https://altrove.studio/membership",
  },
};

const heroImage =
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1800&q=84";

const memberAsks = [
  "We’re going to Menorca. Where should we stay?",
  "Which of these hotels would you choose?",
  "We need somewhere brilliant for dinner in Madrid.",
  "We have five days in Sicily. How would you structure it?",
  "We want somewhere warm in October. Where would you go?",
];

const benefits = [
  {
    title: "Personal trip curation",
    body: "Altrove helps shape trips around the member — where to stay, where to eat, what deserves a reservation, and where to leave the day open.",
  },
  {
    title: "The Altrove Edit",
    body: "Hotels, restaurants, neighbourhoods, experiences and places worth knowing — filtered for you, not ranked for everyone.",
  },
  {
    title: "Direct travel advice",
    body: "Members can ask Altrove for advice related to their travels. Considered, personal notes — not emergency support, not a booking desk.",
  },
  {
    title: "Member access",
    body: "Founding Members receive first access to future Altrove trips, experiences and privileges as they are introduced.",
  },
];

export default function MembershipPage() {
  return (
    <main className="membership-page">
      <header className="about-hero section-shell membership-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Membership</p>
          <h1 className="display-title">Travel with someone in your corner.</h1>
          <p className="about-hero-lede">
            Altrove is a lifestyle travel concierge available to members. You
            tell us how you want to travel. We find what is worth your time.
          </p>
          <p className="membership-hero-note">
            For now, Altrove provides recommendations and trip design. You make
            all bookings directly.
          </p>
          <Link className="button dark" href="/apply">
            Apply for Founding Membership
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

      <section className="section-shell membership-asks" id="ask">
        <div className="home-section-head">
          <p className="eyebrow">What members ask</p>
          <h2 className="display-title">Questions like these.</h2>
        </div>
        <ul className="membership-questions membership-ask-list">
          {memberAsks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell tinted membership-includes" id="includes">
        <div className="home-section-head">
          <p className="eyebrow">What membership includes</p>
          <h2 className="display-title">Filtering, with judgement.</h2>
        </div>
        {benefits.map((item) => (
          <article key={item.title} className="membership-include">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="section-shell membership-now" id="founding">
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">Founding Membership</h2>
        <p>Currently complimentary.</p>
        <p>Limited availability.</p>
        <Link className="button dark" href="/apply">
          Apply for Founding Membership
        </Link>
      </section>
    </main>
  );
}
