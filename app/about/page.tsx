import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Flor, founder of Altrove — an Italian traveller living in Portugal, writing journeys for people who prefer to remember what they see.",
  alternates: {
    canonical: "https://altrove.studio/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">About</p>
          <h1 className="display-title">Meet Flor.</h1>
          <p className="about-hero-lede">
            Italian by birth. Living in Portugal. Collecting the places worth
            returning to.
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

      <section className="about-chapter section-shell" id="meet-flor">
        <div className="about-prose about-prose-wide">
          <p>
            I’ve always travelled by collecting notes. Hotels I’d return to without
            thinking twice. Neighbourhoods worth waking up in. Restaurants I’d
            recommend to a friend without hesitation. Routes that quietly changed
            how I saw a city or a stretch of coast.
          </p>
          <p>
            For years those recommendations lived in notebooks and long messages
            to people I care about. Altrove grew out of that habit — a place to
            gather what was worth keeping, and to share it with more care than a
            hurried list ever could.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="philosophy">
        <div className="about-prose about-prose-wide">
          <p className="about-pull">
            Altrove isn’t about travelling more. It’s about travelling better.
          </p>
          <p>
            I don’t want to see everything. I want to remember what I see —
            four days in one city over a rush through four countries. Thoughtful
            hotels. Neighbourhood lunches. Atmosphere. Someone else’s taste, not
            endless options.
          </p>
          <p>
            That is how I travel. That is how Altrove is written.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell" id="trust">
        <div className="about-prose about-prose-wide">
          <p>
            Every destination begins with a real journey. I write from places I
            have visited, stayed in and returned to in thought long after the trip
            ended. The collection grows slowly on purpose. I’d rather recommend
            less, and mean it.
          </p>
          <p>
            If the way I travel feels like yours, start with a destination —
            or ask me to help plan one around your dates.
          </p>
          <p className="about-closing-link">
            <Link className="text-link" href="/destinations">
              Explore the destinations
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/plan-a-trip">
              Plan with Altrove
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
