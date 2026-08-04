import type { Metadata } from "next";
import { EditorialCarousel } from "../EditorialCarousel";
import { NewsletterForm } from "../newsletter-form";
import {
  EditorialStoryCard,
  PageIntro,
  StudioNewsletter,
} from "../studio-components";
import { guides } from "../data";
import { journalMoods } from "../studio-structure";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Altrove — hotels, neighbourhoods, food and pacing, gathered with care.",
  alternates: {
    canonical: "https://altrove.studio/travel-guides",
  },
};

export default function TravelJournalPage() {
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

      <section className="section-shell" aria-label="All stories">
        <div className="editorial-story-grid home-journal-grid">
          {guides.map((guide) => (
            <EditorialStoryCard key={guide.slug} guide={guide} />
          ))}
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/journeys">
            When you’re ready, explore the journeys
          </Link>
        </p>
      </section>

      <EditorialCarousel
        eyebrow="By mood"
        title="How you like to travel"
        ariaLabel="Browse journal stories by travel mood"
      >
        {journalMoods.map((mood) => (
          <article key={mood.slug} className="story-card journal-mood-slide">
            <Link
              className="journal-mood-slide-link"
              href={`/travel-guides/mood/${mood.slug}`}
            >
              <strong>{mood.title}</strong>
              <span>{mood.description}</span>
            </Link>
          </article>
        ))}
      </EditorialCarousel>

      <StudioNewsletter>
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
