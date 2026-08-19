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
  journalMoods,
  journalTopicGroups,
  storiesFromSlugs,
  studioCountries,
} from "../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Altrove — hotels, neighbourhoods, food and pacing, gathered with care.",
  alternates: {
    canonical: "https://altrove.studio/journal",
  },
};

const featuredSlugs = [
  "where-to-stay-lisbon",
  "rome-food-walk",
  "where-to-eat-lisbon",
  "train-travel-europe",
] as const;

export default function JournalPage() {
  const featured = storiesFromSlugs(featuredSlugs);
  const [lead, ...supporting] = featured;

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Journal" title="Notes from elsewhere.">
          <p>
            Hotels, neighbourhoods, food and pacing — written so you can feel
            how we travel before you plan a journey.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell" aria-label="Browse by topic">
        <ul className="journal-topic-list">
          {journalTopicGroups.map((topic) => (
            <li key={topic.slug}>
              <Link className="journal-topic-chip" href={`/journal/topic/${topic.slug}`}>
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {lead ? (
        <section className="section-shell tinted home-journal-feature" aria-label="Featured story">
          <div className="home-journal-editorial">
            <article className="home-journal-lead">
              <Link href={`/journal/${lead.slug}`}>
                <img
                  src={lead.image}
                  srcSet={unsplashSrcSet(lead.image)}
                  sizes="(max-width: 900px) 100vw, 58vw"
                  alt={lead.alt}
                  loading="lazy"
                />
                <p className="eyebrow">
                  {lead.destination} · {lead.category}
                </p>
                <h2 className="display-title">{lead.title}</h2>
                <p>{lead.excerpt}</p>
              </Link>
            </article>
            <div className="home-journal-side">
              {supporting.slice(0, 2).map((story) => (
                <article key={story.slug} className="home-journal-side-card">
                  <Link href={`/journal/${story.slug}`}>
                    <img
                      src={story.image}
                      srcSet={unsplashSrcSet(story.image)}
                      sizes={defaultImageSizes}
                      alt={story.alt}
                      loading="lazy"
                    />
                    <p className="eyebrow">{story.category}</p>
                    <h3>{story.title}</h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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

      <EditorialCarousel
        eyebrow="By mood"
        title="How you like to travel"
        ariaLabel="Browse journal stories by travel mood"
      >
        {journalMoods.map((mood) => (
          <article key={mood.slug} className="story-card journal-mood-slide">
            <Link
              className="journal-mood-slide-link"
              href={`/journal/mood/${mood.slug}`}
            >
              <strong>{mood.title}</strong>
              <span>{mood.description}</span>
            </Link>
          </article>
        ))}
      </EditorialCarousel>

      {supporting.length > 2 ? (
        <section className="section-shell tinted" aria-label="More stories">
          <div className="home-section-head">
            <p className="eyebrow">Field notes</p>
            <h2 className="display-title">Keep reading</h2>
          </div>
          <div className="editorial-story-grid home-journal-grid">
            {supporting.slice(2).map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      ) : null}

      <StudioNewsletter
        id="letters"
        title="Letters from Altrove"
        description="New places, hotel finds, routes we're researching and occasional notes from the road."
      >
        <NewsletterForm buttonLabel="Join our letters" />
      </StudioNewsletter>
    </main>
  );
}
