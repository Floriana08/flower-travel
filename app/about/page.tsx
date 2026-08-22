import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";
import { studioPositioning } from "../membership-config";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Altrove is a travel studio for people who care where they go — curated places, thoughtful journeys and personal travel advice.",
  alternates: {
    canonical: "https://altrove.studio/about",
  },
};

const principles = [
  {
    title: "Fewer, better recommendations.",
    body: "A short list with a point of view beats another page of everything.",
  },
  {
    title: "A trip needs rhythm, not a checklist.",
    body: "Meals, walking, rest and the odd unplanned hour belong in the design.",
  },
  {
    title: "Where you stay and eat matters.",
    body: "Neighbourhoods, rooms and tables are not decoration. They are the days you remember.",
  },
  {
    title: "Personal beats generic.",
    body: "The same trip does not work for everyone. A good edit starts with how you actually like to travel.",
  },
  {
    title: "Leave room for the unexpected.",
    body: "The best afternoons are often the ones nobody scheduled.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">About Altrove</p>
          <h1 className="display-title">{studioPositioning.headline}</h1>
          <p className="about-hero-lede">
            Curated places, thoughtful journeys and personal travel advice —
            without the noise of endless lists.
          </p>
          <p className="membership-hero-note">{studioPositioning.notAgency}</p>
        </div>
        <figure className="about-hero-media">
          <img
            src={aboutHeroImage}
            srcSet={unsplashSrcSet(aboutHeroImage)}
            sizes={defaultImageSizes}
            alt="Warm café light — the kind of pause Altrove plans for"
          />
        </figure>
      </header>

      <section className="about-chapter section-shell" id="principles">
        <div className="about-chapter-label">
          <p className="eyebrow">Principles</p>
          <h2>How we think about travel.</h2>
        </div>
        <div className="about-principles">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell membership-now" id="membership">
        <p className="eyebrow">Membership</p>
        <h2 className="display-title">A private travel studio membership</h2>
        <p>
          Altrove Membership combines curated destination knowledge, private
          recommendations and personal travel advice — with preferential
          itinerary planning when you want a trip shaped for you.
        </p>
        <Link className="button dark" href="/membership">
          Join the Membership
        </Link>
      </section>
    </main>
  );
}
