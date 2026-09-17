import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "../newsletter-form";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";
import { StudioNewsletter } from "../studio-components";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Altrove is a travel journal for slower, more sustainable trips. We write itineraries and recommendations, and we teach how to travel with a lighter footprint.",
  alternates: {
    canonical: "https://altrove.studio/about",
  },
};

const weWrite = [
  "Itineraries you can actually follow",
  "Where to stay, and where not to",
  "Where to eat, without a checklist",
  "What is worth doing — and what to skip",
  "How to travel more sustainably",
];

const principles = [
  {
    title: "Fewer, better recommendations",
    body: "A small number of strong recommendations over huge lists. If a hotel is merely convenient, or a restaurant is famous for being famous, it will not make the edit.",
  },
  {
    title: "Travel should have rhythm",
    body: "A trip should not feel like a checklist. Meals, walking, rest and the odd unplanned hour belong in the design.",
  },
  {
    title: "Taste matters",
    body: "Where you stay, eat and spend time shapes the trip. Neighbourhoods, rooms and tables are not decoration.",
  },
  {
    title: "Lighter on the place",
    body: "Fewer hotel moves, trains when they earn the day, meals that belong to the neighbourhood. Sustainable travel is mostly the shape of the trip, not a sermon.",
  },
  {
    title: "Research with judgement",
    body: "Altrove combines personal knowledge, careful research and trusted sources. Not every recommendation is a first-hand visit. The value is the filter.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">About Altrove</p>
          <h1 className="display-title">A journal for travelling well.</h1>
          <p className="about-hero-lede">
            Altrove writes itineraries, recommendations and practical notes for
            people who want slower, more sustainable trips — and who are tired
            of lists that all look the same.
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
          <p>We write so you can decide:</p>
          <ul className="about-decide-list">
            {weWrite.map((item) => (
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

      <StudioNewsletter
        id="letters"
        title="The community is the letters"
        description="Join readers who want slower trips and clearer recommendations. A membership may come later. This year, the work is the writing."
      >
        <NewsletterForm buttonLabel="Join the letters" source="about" />
      </StudioNewsletter>

      <section className="section-shell" id="later">
        <p className="about-closing-link">
          <Link className="text-link" href="/journal">
            Read the Journal
          </Link>
          <span aria-hidden="true"> · </span>
          <Link className="text-link" href="/itineraries">
            Browse itineraries
          </Link>
          <span aria-hidden="true"> · </span>
          <Link className="text-link" href="/community">
            Community
          </Link>
        </p>
      </section>
    </main>
  );
}
