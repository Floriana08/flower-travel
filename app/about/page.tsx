import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Travel planning has become overwhelming. Altrove exists to filter the noise — with judgement, fewer recommendations, and trips designed around how you actually like to travel.",
  alternates: {
    canonical: "https://altrove.studio/about",
  },
};

const decisions = [
  "Where to stay",
  "Where to eat",
  "What is actually worth doing",
  "What to skip",
  "How to structure the trip",
];

const principles = [
  {
    title: "Fewer, better recommendations",
    body: "Altrove prefers a small number of strong recommendations over huge lists. If a hotel is merely convenient, or a restaurant is famous for being famous, it will not make the edit.",
  },
  {
    title: "Travel should have rhythm",
    body: "A trip should not feel like a checklist. Meals, walking, rest and the odd unplanned hour belong in the design. The point is to arrive, not to finish a circuit.",
  },
  {
    title: "Taste matters",
    body: "Where you stay, eat and spend time shapes the trip. Neighbourhoods, rooms and tables are not decoration. They are the days you will remember.",
  },
  {
    title: "Personal beats generic",
    body: "The same itinerary does not work for everyone. A good edit starts with how you actually like to travel — pace, budget, company, and what you would rather not do.",
  },
  {
    title: "Research with judgement",
    body: "Altrove combines personal knowledge, careful research and trusted sources. Not every recommendation is a first-hand visit. The value is the filter: what we would choose, what we would skip, and why.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">About Altrove</p>
          <h1 className="display-title">Less searching. Better travelling.</h1>
          <p className="about-hero-lede">
            Travel planning has become overwhelming. Too many tabs, too many
            reviews and too many recommendations that all look the same. Altrove
            exists to filter the noise.
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

      <section className="about-chapter section-shell" id="why">
        <div className="about-chapter-label">
          <p className="eyebrow">Why Altrove</p>
          <h2>Judgement, not more information.</h2>
        </div>
        <div className="about-prose">
          <p>
            The problem is not a lack of information. It is too much of it,
            without judgement. Rankings, reviews and saved lists multiply until
            every option looks plausible and none of them feel chosen.
          </p>
          <p>
            Altrove helps travellers decide:
          </p>
          <ul className="about-decide-list">
            {decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            That is the work: filtering, not collecting. A shorter list, with a
            point of view, is more useful than another page of everything.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="principles">
        <div className="about-chapter-label">
          <p className="eyebrow">Principles</p>
          <h2>How we approach travel.</h2>
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

      <section className="section-shell membership-now" id="future">
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">The future of Altrove</h2>
        <p>
          Altrove is building a new kind of private travel membership combining
          personalised planning, curated travel knowledge and member access.
        </p>
        <Link className="button dark" href="/apply">
          Become a Founding Member
        </Link>
      </section>
    </main>
  );
}
