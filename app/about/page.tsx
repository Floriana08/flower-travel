import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Altrove exists — a travel studio for people who would rather remember a place than rush through it, built by Flor, an Italian traveller living in Portugal.",
  alternates: {
    canonical: "https://altrove.studio/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">Why Altrove</p>
          <h1 className="display-title">Travel less. Remember more.</h1>
          <p className="about-hero-lede">
            Most travel advice optimises for seeing everything. Altrove exists
            for people who would rather remember what they saw.
          </p>
        </div>
        <figure className="about-hero-media">
          <img
            src={aboutHeroImage}
            srcSet={unsplashSrcSet(aboutHeroImage)}
            sizes={defaultImageSizes}
            alt="Morning light on a quiet terrace table overlooking the sea"
          />
        </figure>
      </header>

      <section className="about-chapter section-shell tinted" id="philosophy">
        <div className="about-prose about-prose-wide">
          <p className="about-pull">
            Altrove isn’t about travelling more. It’s about travelling better.
          </p>
          <p>
            Fewer hotels. Slower journeys. Neighbourhoods over landmarks. A
            trip is worth more remembered in full than skimmed in pieces —
            that belief is the whole reason Altrove exists, before it is a
            journal, a guide, or anything you can buy.
          </p>
          <p className="about-closing-link">
            <Link className="text-link" href="/philosophy">
              Read the full philosophy
            </Link>
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell" id="meet-flor">
        <div className="about-prose about-prose-wide">
          <p className="eyebrow">Who is behind it</p>
          <p>
            I’ve always travelled by collecting notes. Hotels I’d return to
            without thinking twice. Neighbourhoods worth waking up in.
            Restaurants I’d recommend to a friend without hesitation. Routes
            that quietly changed how I saw a city or a stretch of coast.
          </p>
          <p>
            For years those recommendations lived in notebooks and long
            messages to people I care about. Altrove grew out of that habit —
            a place to gather what was worth keeping, and to share it with
            more care than a hurried list ever could. Italian by birth. Living
            in Portugal. Still collecting the places worth returning to.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="trust">
        <div className="about-prose about-prose-wide">
          <p>
            Every destination begins with a real journey. I write from places
            I have visited, stayed in and returned to in thought long after
            the trip ended. The collection grows slowly on purpose. I’d
            rather recommend less, and mean it.
          </p>
          <p>
            If the way I travel feels like yours, start with the journeys — or
            ask me to help design one around your dates.
          </p>
          <p className="about-closing-link">
            <Link className="text-link" href="/journeys">
              Explore the journeys
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/plan-a-trip">
              Journey Design
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
