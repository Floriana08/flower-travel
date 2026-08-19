import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "../newsletter-form";
import {
  EditorialStoryCard,
  PageIntro,
  StudioNewsletter,
} from "../studio-components";
import { guides } from "../data";
import {
  journalCategories,
  storiesFromSlugs,
  studioCountries,
} from "../studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Where to stay, eat and spend a weekend — opinionated travel notes from Altrove on Lisbon, Rome and the routes between them.",
  keywords: [
    "Lisbon hotels",
    "where to stay in Lisbon",
    "where to eat in Lisbon",
    "Rome food",
    "Europe train travel",
    "city guides",
    "travel notes",
  ],
  alternates: {
    canonical: "https://altrove.studio/journal",
  },
};

const featuredSlugs = [
  "where-to-stay-lisbon",
  "where-to-eat-lisbon",
  "rome-food-walk",
  "train-travel-europe",
  "solo-paris-weekend",
] as const;

export default function JournalPage() {
  const featured = storiesFromSlugs(featuredSlugs);
  const [lead, ...supporting] = featured;
  const featuredSet = new Set<string>(featuredSlugs);
  const archive = guides.filter((guide) => !featuredSet.has(guide.slug));

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Journal" title="Notes from elsewhere.">
          <p>
            Useful notes on where to stay, eat and spend a weekend — written
            with a point of view, not a checklist. Specific recommendations,
            practical caveats, and the judgement we would give a friend.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell" aria-label="Browse by category">
        <ul className="journal-topic-list">
          {journalCategories.map((topic) => (
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

      <section className="section-shell" aria-label="Notes by destination">
        <div className="home-section-head">
          <p className="eyebrow">By destination</p>
          <h2 className="display-title">Portugal. Italy. Spain.</h2>
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

      <section className="section-shell tinted" aria-label="All journal notes">
        <div className="home-section-head">
          <p className="eyebrow">The notes</p>
          <h2 className="display-title">Keep reading</h2>
        </div>
        <div className="editorial-story-grid home-journal-grid">
          {[...supporting.slice(2), ...archive].map((guide) => (
            <EditorialStoryCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <StudioNewsletter
        id="letters"
        title="Letters from Altrove"
        description="New notes on hotels, restaurants and routes — sent occasionally, without noise."
      >
        <NewsletterForm buttonLabel="Join our letters" />
      </StudioNewsletter>
    </main>
  );
}
