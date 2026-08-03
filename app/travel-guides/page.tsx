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
    "A curated editorial magazine from Altrove — browse by destination or mood, not a chronological blog.",
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
            A curated magazine for travellers who prefer taste and pacing over a
            feed. Inspiration lives here. Planning lives in Journeys.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted" aria-label="Browse by destination">
        <div className="home-section-head">
          <p className="eyebrow">Browse by destination</p>
          <h2 className="display-title">Italy, Portugal, Spain</h2>
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
          <p className="eyebrow">Browse by mood</p>
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
        </section>
      ) : null}

      <StudioNewsletter>
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
