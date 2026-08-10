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
  getGuidesForTopic,
  journalTopicGroups,
  storiesFromSlugs,
  studioCountries,
  type JournalTopicSlug,
} from "../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Altrove: hotels, neighbourhoods, food and pacing, gathered with care.",
  alternates: {
    canonical: "https://altrove.studio/journal",
  },
};

const featuredSlugs = [
  "where-to-stay-lisbon",
  "rome-food-walk",
  "madeira-first-timers",
] as const;

export default function JournalPage() {
  const featured = storiesFromSlugs(featuredSlugs);
  const lead = featured[0];

  const topicCarousels = journalTopicGroups
    .map((topic) => ({
      topic,
      articles: getGuidesForTopic(topic.slug as JournalTopicSlug),
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

      {lead ? (
        <section
          className="section-shell tinted journal-lead-feature"
          aria-label="Featured story"
        >
          <article className="journal-lead-feature-grid">
            <Link
              className="journal-lead-feature-media"
              href={`/journal/${lead.slug}`}
              aria-label={lead.title}
            >
              <img
                src={lead.image}
                srcSet={unsplashSrcSet(lead.image)}
                sizes="(max-width: 900px) 100vw, 58vw"
                alt={lead.alt}
                loading="eager"
              />
            </Link>
            <div className="journal-lead-feature-copy">
              <p className="eyebrow">
                Featured · {lead.destination} · {lead.category}
              </p>
              <h2 className="display-title">
                <Link href={`/journal/${lead.slug}`}>{lead.title}</Link>
              </h2>
              <p>{lead.excerpt}</p>
              <Link className="text-link" href={`/journal/${lead.slug}`}>
                Read the story
              </Link>
            </div>
          </article>
        </section>
      ) : null}

      <div className="journal-category-carousels">
        {topicCarousels.map(({ topic, articles }, index) => (
          <div
            key={topic.slug}
            className={
              index % 2 === 1
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
      </div>

      <section className="section-shell" aria-label="Collections">
        <div className="home-section-head">
          <p className="eyebrow">Collections</p>
          <h2 className="display-title">Browse by place</h2>
        </div>
        <div className="journal-browse-grid">
          {studioCountries.map((country) => (
            <Link
              key={country.slug}
              className="journal-browse-card"
              href={`/journal/${country.slug}`}
            >
              <span className="journal-browse-media">
                <img
                  src={country.image}
                  srcSet={unsplashSrcSet(country.image)}
                  sizes={defaultImageSizes}
                  alt={country.alt}
                  loading="lazy"
                />
              </span>
              <span className="journal-browse-copy">
                <span className="journal-browse-title">{country.title}</span>
                <span>{country.short}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <StudioNewsletter
        title="Letters from Altrove"
        description="New places, hotel finds, routes I'm researching and occasional notes from the road."
      >
        <NewsletterForm buttonLabel="Send me letters" />
      </StudioNewsletter>
    </main>
  );
}
