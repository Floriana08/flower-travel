import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Altrove is a private travel membership built around you. Tell us where you’re going and we’ll curate the places worth your time. Founding Membership is currently complimentary and limited.",
  alternates: {
    canonical: "https://altrove.studio/membership",
  },
};

const heroImage =
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1800&q=84";

const tripInputs = [
  "Destination",
  "Dates",
  "Budget",
  "Travel style",
  "Who you are travelling with",
  "Interests",
  "Preferred pace",
  "Hotel preferences",
];

const tripEditIncludes = [
  "Where to stay",
  "Where to eat",
  "What to do",
  "Neighbourhood guidance",
  "A suggested rhythm for the trip",
  "What to book in advance",
  "What Altrove would skip",
  "Practical notes",
];

const adviceExamples = [
  "Which of these two hotels would you choose?",
  "Where should we eat on our final night?",
  "Which neighbourhood should we stay in?",
  "Is this experience actually worth it?",
];

const firstAccess = [
  "Altrove trips",
  "Member experiences",
  "New destinations",
  "Partner privileges",
  "Future membership features",
];

const steps = [
  "Apply for Membership",
  "Tell Altrove about your trip",
  "Receive your personal Trip Edit",
  "Make bookings directly",
  "Ask Altrove follow-up travel questions",
];

export default function MembershipPage() {
  return (
    <main className="membership-page">
      <header className="about-hero section-shell membership-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Founding Membership</p>
          <h1 className="display-title">
            A travel membership built around you.
          </h1>
          <p className="about-hero-lede">
            Altrove helps you plan thoughtful trips without spending weeks
            sorting through endless options. Tell us where you&rsquo;re going,
            and we&rsquo;ll curate the places worth your time.
          </p>
          <p className="membership-hero-note">
            Founding Membership is currently complimentary and limited.
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

      <section className="section-shell membership-includes" id="includes">
        <div className="home-section-head">
          <p className="eyebrow">What membership includes</p>
          <h2 className="display-title">A considered trip, not another list.</h2>
        </div>

        <article className="membership-include">
          <h3>Personal trip design</h3>
          <p>
            Members tell Altrove about a trip they are planning. We research it
            properly and design a personalised Trip Edit around the way they
            actually like to travel — not around what happens to rank well.
          </p>
          <p>Each Trip Edit is shaped by:</p>
          <ul className="membership-inline-list">
            {tripInputs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="membership-include">
          <h3>Your Altrove Trip Edit</h3>
          <p>
            What you receive is a highly curated recommendation — the hotels,
            tables, neighbourhoods and pacing we would choose — rather than a
            generic itinerary or a day-by-day tourist schedule.
          </p>
          <p>A Trip Edit typically includes:</p>
          <ul className="membership-inline-list">
            {tripEditIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="membership-include">
          <h3>Direct travel advice</h3>
          <p>
            Once you have your Trip Edit, you can ask Altrove questions
            connected to that trip. It is considered advice, not a concierge on
            call.
          </p>
          <ul className="membership-questions">
            {adviceExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="membership-include">
          <h3>Altrove destination knowledge</h3>
          <p>
            The Journal is public, and it shows how we think. Members receive
            deeper access to curated recommendations beyond those pages —
            tighter shortlists, more particular notes, and the judgement we
            would share with someone whose trip we are actually designing.
          </p>
        </article>

        <article className="membership-include">
          <h3>First access</h3>
          <p>
            Founding Members receive first access as Altrove opens more of the
            membership — not a catalogue of privileges that do not yet exist.
          </p>
          <ul className="membership-inline-list">
            {firstAccess.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell tinted membership-process" id="how-it-works">
        <div className="home-section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="display-title">Five steps. Then you travel.</h2>
        </div>
        <ol className="membership-steps">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="home-how-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step}</h3>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell membership-now" id="founding">
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">Become a Founding Member</h2>
        <p>Founding Membership is currently complimentary.</p>
        <p>Availability is limited.</p>
        <Link className="button dark" href="/apply">
          Apply for Founding Membership
        </Link>
      </section>
    </main>
  );
}
