import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "../newsletter-form";
import {
  EditorialStoryCard,
  PageIntro,
  StudioNewsletter,
} from "../studio-components";
import {
  journalMoods,
  storiesFromSlugs,
  studioCountries,
} from "../studio-structure";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Altrove — hotels, neighbourhoods, food and pacing, gathered with care.",
  alternates: {
    canonical: "https://flowertravel.studio/travel-guides",
  },
};

const featuredSlugs = [
  "where-to-stay-lisbon",
  "rome-food-walk",
  "madeira-first-timers",
] as const;

export default function TravelJournalPage() {
  const featured = storiesFromSlugs(featuredSlugs);

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Journal" title="Notes from elsewhere.">
          <p>
            Hotels, neighbourhoods, food and pacing — written so you can feel
            the way Altrove travels before you plan a journey.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted" aria-label="Collections">
        <div className="home-section-head">
          <p className="eyebrow">Collections</p>
          <h2 className="display-title">Browse by place</h2>
        </div>
        <div className="journal-browse-grid">
          {studioCountries.map((country) => (
            <Link
              key={country.slug}
              className="journal-browse-card"
              href={`/travel-guides/${country.slug}`}
            >
              <span className="journal-browse-media">
                <img src={country.image} alt={country.alt} loading="lazy" />
              </span>
              <span className="journal-browse-copy">
                <span className="journal-browse-title">{country.title}</span>
                <span>{country.short}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-label="Browse by mood">
        <div className="home-section-head">
          <p className="eyebrow">By mood</p>
          <h2 className="display-title">How you like to travel</h2>
        </div>
        <ul className="journal-mood-list">
          {journalMoods.map((mood) => (
            <li key={mood.slug}>
              <Link href={`/travel-guides/mood/${mood.slug}`}>
                <strong>{mood.title}</strong>
                <span>{mood.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {featured.length ? (
        <section className="section-shell tinted" aria-label="Selected stories">
          <div className="home-section-head">
            <p className="eyebrow">Selected</p>
            <h2 className="display-title">Worth reading now</h2>
          </div>
          <div className="editorial-story-grid home-journal-grid">
            {featured.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </div>
          <p className="home-section-link">
            <Link className="text-link" href="/journeys">
              When you’re ready, explore the journeys
            </Link>
          </p>
        </section>
      ) : null}

      <StudioNewsletter>
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
