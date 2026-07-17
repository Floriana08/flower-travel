import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components";
import { clubBenefits, site, travellerTypes } from "../data";

export const metadata: Metadata = {
  title: "Club",
  description:
    "Join the Flower Travel Club for curated travel inspiration, early access to destination guides, exclusive itineraries, and boutique hotel and restaurant recommendations.",
};

function ClubBenefitIcon({ id }: { id: string }) {
  const shared = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (id) {
    case "early-access":
      return (
        <svg {...shared}>
          <path
            d="M14 3.5C10.13 3.5 7 6.63 7 10.5C7 15.75 14 24.5 14 24.5C14 24.5 21 15.75 21 10.5C21 6.63 17.87 3.5 14 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="14" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "itineraries":
      return (
        <svg {...shared}>
          <path
            d="M6 7H22V21H6V7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10 11H18M10 14.5H16M10 18H14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6 7L14 4.5L22 7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "recommendations":
      return (
        <svg {...shared}>
          <path
            d="M5 23V11.5L14 5L23 11.5V23H5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M11 23V16H17V23"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...shared}>
          <path
            d="M5 9.5L14 15L23 9.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 9.5H23V20.5H5V9.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function CommunityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Club"
        title="Join the Flower Travel Club"
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84"
        alt="Soft waves washing onto a pale beach"
      >
        <p>
          Curated travel inspiration, thoughtful itineraries and the best local
          discoveries, delivered before anyone else.
        </p>
      </PageHero>

      <section className="community-page section-shell">
        <div className="community-copy">
          <p className="community-intro">
            The Flower Travel Club is for people who love planning unforgettable
            trips. Members receive new destination guides, carefully researched
            itineraries, hotel recommendations and travel inspiration before
            they&apos;re published on the website. As the community grows,
            members will also help shape what Flower Travel becomes next, from
            exclusive guides to curated trips and travel perks.
          </p>

          <h2 className="community-benefits-heading">
            As a Club member you&apos;ll receive
          </h2>

          <div className="community-values">
            {clubBenefits.map((benefit) => (
              <article key={benefit.id}>
                <span className="club-benefit-icon" aria-hidden="true">
                  <ClubBenefitIcon id={benefit.id} />
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="community-form-panel" id="join">
          <p className="eyebrow">Early access</p>
          <h2>Join the Flower Travel Club</h2>
          <p>
            Tell us what kind of traveller you are, and we&apos;ll shape the
            guides, routes, and recommendations around what matters to you.
          </p>

          <form
            className="contact-form"
            action={`mailto:${site.email}`}
            method="post"
          >
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <fieldset className="traveller-type-fieldset">
              <legend>What kind of traveller are you?</legend>
              <div className="traveller-type-grid">
                {travellerTypes.map((type) => (
                  <label key={type} className="traveller-type-check">
                    <input
                      type="checkbox"
                      name="traveller_type"
                      value={type}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="consent-check">
              <input name="consent" type="checkbox" required />
              <span>
                I agree to receive Flower Travel emails and understand I can
                unsubscribe at any time.
              </span>
            </label>
            <button className="button dark" type="submit">
              Join the Club
            </button>
          </form>

          <p className="small-print">
            Read our <Link href="/privacy">privacy note</Link> for how we handle
            your details.
          </p>
        </aside>
      </section>
    </main>
  );
}
