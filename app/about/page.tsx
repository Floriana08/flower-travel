import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Too much information. Not enough judgement. Altrove is a private lifestyle travel membership that filters — so you spend less time searching and more time travelling well.",
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
          <h1 className="display-title">
            Too much information. Not enough judgement.
          </h1>
          <p className="about-hero-lede">
            Travel planning has become endless searching. Altrove exists to
            filter.
          </p>
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
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">A private lifestyle travel membership</h2>
        <p>
          Altrove is building a private lifestyle travel membership combining
          personal travel curation, destination knowledge and eventually member
          experiences and privileges.
        </p>
        <Link className="button dark" href="/apply">
          Become a Founding Member
        </Link>
      </section>
    </main>
  );
}
