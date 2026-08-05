import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "../../newsletter-form";
import { getStudioCountry } from "../../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../../image-utils";

export const metadata: Metadata = {
  title: "The Altrove Guide to Campania",
  description:
    "The Altrove Guide to Campania — Flor's home region in full: Naples bases, one coastal stay, ferry timing, restaurants, and the pacing that keeps the trip from becoming a checklist.",
  alternates: {
    canonical: "https://altrove.studio/guides/campania",
  },
};

export default function CampaniaGuidePage() {
  const italy = getStudioCountry("italy");
  if (!italy) return null;

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top journey-hero">
        <div className="journey-hero-copy">
          <p className="eyebrow">The Altrove Guide</p>
          <h1 className="display-title">The Altrove Guide to Campania</h1>
          <p className="journeys-studio-single-lede">
            Flor’s home region, written in full. Not a checklist of every
            town on the coast — one Naples base, one coastal stay, and the
            pacing that makes the difference between a trip you rush and one
            you remember.
          </p>
          <p className="plan-trip-aside">
            Written by Flor · Digital guide · €34
          </p>
        </div>
        <div className="journey-hero-media">
          <img
            src={italy.image}
            srcSet={unsplashSrcSet(italy.image)}
            sizes={defaultImageSizes}
            alt={italy.alt}
          />
        </div>
      </section>

      <section className="section-shell tinted">
        <div className="home-section-head">
          <p className="eyebrow">What is inside</p>
          <h2 className="display-title">Written from the places themselves</h2>
        </div>
        <div className="guide-contents-grid">
          {italy.placesWeLove.map((section) => (
            <article key={section.kind} className="article-panel">
              <h2>{section.kind}</h2>
              {section.items.map((item) => (
                <p key={item.name}>
                  <strong>{item.name}.</strong> {item.note}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="home-section-head">
          <p className="eyebrow">Also covered</p>
          <h2 className="display-title">The pacing notes people ask for most</h2>
        </div>
        <ul className="check-list">
          {italy.travelNotes.map((note) => (
            <li key={note.title}>{note.title}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell tinted plan-trip-layout">
        <div>
          <p className="eyebrow">Get the guide</p>
          <h2 className="display-title">€34 · Delivered as a digital guide</h2>
          <p>
            The guide is being finished for direct purchase. Leave your email
            and we will send it the moment it opens, plus first access ahead
            of the public launch.
          </p>
          <p className="small-print">
            Already dreaming of Campania? Explore the{" "}
            <Link className="text-link" href="/journeys/naples-amalfi">
              Naples and Amalfi Coast journey
            </Link>
            . The guide is what you read.{" "}
            <Link className="text-link" href="/plan-a-trip">
              Journey Design
            </Link>{" "}
            is what we build for you.
          </p>
        </div>
        <div className="plan-trip-form-panel">
          <NewsletterForm
            placeholder="Your email address"
            buttonLabel="Notify me"
            consentLabel="I agree to receive Altrove emails and understand that I can unsubscribe at any time."
          />
        </div>
      </section>
    </main>
  );
}
