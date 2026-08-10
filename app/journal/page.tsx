import type { Metadata } from "next";
import Link from "next/link";
import { EditorialCarousel } from "../EditorialCarousel";
import { NewsletterForm } from "../newsletter-form";
import {
  EditorialStoryCard,
  PageIntro,
  StudioNewsletter,
} from "../studio-components";
import {
  getGuidesForCountry,
  getGuidesForTopic,
  journalTopicGroups,
  storiesFromSlugs,
  studioCountries,
  type JournalTopicSlug,
  type StudioCountrySlug,
} from "../studio-structure";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Altrove: hotels, neighbourhoods, food and pacing, gathered with care.",
  alternates: {
    canonical: "https://altrove.studio/journal",
  },
};

const latestSlugs = [
  "where-to-stay-lisbon",
  "rome-food-walk",
  "madeira-first-timers",
  "train-travel-europe",
  "choosing-a-honeymoon-route",
] as const;

export default function JournalPage() {
  const latest = storiesFromSlugs(latestSlugs);

  const topicCarousels = journalTopicGroups
    .map((topic) => ({
      topic,
      articles: getGuidesForTopic(topic.slug as JournalTopicSlug),
    }))
    .filter((group) => group.articles.length > 0);

  const placeCarousels = studioCountries
    .map((country) => ({
      country,
      articles: getGuidesForCountry(country.slug as StudioCountrySlug),
    }))
    .filter((group) => group.articles.length > 0);

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top journal-hero">
        <PageIntro eyebrow="Journal" title="Notes from elsewhere.">
          <p>
            Hotels, neighbourhoods, food and pacing, written so you can feel how
            I travel before you plan a journey.
          </p>
        </PageIntro>
      </section>

      {latest.length ? (
        <div className="journal-carousel-band">
          <EditorialCarousel
            eyebrow="Latest"
            title="Worth reading now"
            ariaLabel="Latest journal stories"
          >
            {latest.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </div>
      ) : null}

      {topicCarousels.map(({ topic, articles }, index) => (
        <div
          key={topic.slug}
          className={
            index % 2 === 0
              ? "journal-carousel-band tinted"
              : "journal-carousel-band"
          }
        >
          <EditorialCarousel
            eyebrow="Subject"
            title={topic.title}
            intro={<p>{topic.description}</p>}
            viewAllHref={`/journal/topic/${topic.slug}`}
            viewAllLabel="View all"
            ariaLabel={`${topic.title} journal stories`}
          >
            {articles.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </div>
      ))}

      {placeCarousels.map(({ country, articles }, index) => (
        <div
          key={country.slug}
          className={
            (topicCarousels.length + index) % 2 === 0
              ? "journal-carousel-band tinted"
              : "journal-carousel-band"
          }
        >
          <EditorialCarousel
            eyebrow="Place"
            title={country.title}
            intro={<p>{country.short}</p>}
            viewAllHref={`/journal/${country.slug}`}
            viewAllLabel="View all"
            ariaLabel={`${country.title} journal stories`}
          >
            {articles.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </div>
      ))}

      <StudioNewsletter
        title="Letters from Altrove"
        description="New places, hotel finds, routes I'm researching and occasional notes from the road."
      >
        <NewsletterForm buttonLabel="Send me letters" />
      </StudioNewsletter>
    </main>
  );
}
