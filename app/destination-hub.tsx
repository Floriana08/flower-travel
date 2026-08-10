import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";
import { StudioNewsletter } from "./studio-components";
import {
  getGuideProductsForCountry,
  getHubJournalStories,
  type StudioCountry,
} from "./studio-structure";
import { defaultImageSizes, heroImageSizes, unsplashSrcSet } from "./image-utils";

export function DestinationHub({ country }: { country: StudioCountry }) {
  const stories = getHubJournalStories(country.slug);
  const [leadStory, ...moreStories] = stories;
  const guide = getGuideProductsForCountry(country.slug)[0];
  const coverage = country.collections.map((region) => region.title);

  return (
    <main className="dest-edit">
      <section className="dest-edit-hero">
        <img
          src={country.image}
          srcSet={unsplashSrcSet(country.image)}
          sizes={heroImageSizes}
          alt={country.alt}
        />
        <div className="dest-edit-hero-copy">
          <p className="dest-edit-brand">{country.title}</p>
          <h1>How we experience {country.title}.</h1>
        </div>
      </section>

      <section className="dest-edit-shell dest-edit-open">
        <p className="dest-edit-lede dest-edit-reveal">{country.hubLede}</p>
        {coverage.length ? (
          <p className="dest-edit-coverage dest-edit-reveal dest-edit-reveal-2">
            <span className="dest-edit-label">Covered</span>
            {coverage.join(" · ")}
          </p>
        ) : null}
      </section>

      {country.travelNotes.length ? (
        <section className="dest-edit-shell dest-edit-notes" aria-label="Travel notes">
          <div className="dest-edit-notes-head">
            <p className="dest-edit-label">Travel notes</p>
            <h2>How to travel here</h2>
            <p className="dest-edit-dek">{country.notesIntro}</p>
          </div>
          <dl className="dest-edit-notes-list">
            {country.travelNotes.map((note) => (
              <div key={note.title}>
                <dt>{note.title}</dt>
                <dd>{note.body}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {country.tasteNotes.length ? (
        <section className="dest-edit-shell dest-edit-tastes" aria-label="Places we love">
          <div className="dest-edit-section-head">
            <p className="dest-edit-label">Places we love</p>
            <h2>Taste notes</h2>
          </div>
          <div className="dest-edit-taste-stack">
            {country.tasteNotes.map((taste, index) => (
              <article
                key={taste.name}
                className={`dest-edit-taste${index % 2 === 1 ? " is-flip" : ""}`}
              >
                <figure className="dest-edit-taste-media">
                  <img
                    src={taste.image}
                    srcSet={unsplashSrcSet(taste.image)}
                    sizes={defaultImageSizes}
                    alt={taste.alt}
                    loading="lazy"
                  />
                </figure>
                <div className="dest-edit-taste-copy">
                  <p className="dest-edit-label">{taste.kind}</p>
                  <h3>{taste.name}</h3>
                  <p>{taste.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="dest-edit-shell dest-edit-journal" aria-label="Journal">
        <div className="dest-edit-section-head">
          <p className="dest-edit-label">Journal</p>
          <h2>Stories from {country.title}</h2>
        </div>
        {leadStory ? (
          <div className="dest-edit-journal-layout">
            <article className="dest-edit-journal-lead">
              <Link href={`/journal/${leadStory.slug}`}>
                <img
                  src={leadStory.image}
                  srcSet={unsplashSrcSet(leadStory.image)}
                  sizes="(max-width: 900px) 100vw, 58vw"
                  alt={leadStory.alt}
                  loading="lazy"
                />
                <p className="dest-edit-label">
                  {leadStory.category} · {leadStory.readTime}
                </p>
                <h3>{leadStory.title}</h3>
                <p>{leadStory.excerpt}</p>
              </Link>
            </article>
            {moreStories.length ? (
              <ul className="dest-edit-journal-list">
                {moreStories.map((story) => (
                  <li key={story.slug}>
                    <Link href={`/journal/${story.slug}`}>
                      <span className="dest-edit-label">{story.category}</span>
                      <strong>{story.title}</strong>
                      <span>{story.excerpt}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : (
          <p className="dest-edit-empty">
            Journal notes for {country.title} are still being gathered.
          </p>
        )}
        <Link className="dest-edit-text-link" href={`/journal/${country.slug}`}>
          More from {country.title}
        </Link>
      </section>

      {guide ? (
        <section className="dest-edit-guide" aria-label="Guide">
          <div className="dest-edit-shell dest-edit-guide-inner">
            <figure className="dest-edit-guide-media">
              <img
                src={guide.image}
                srcSet={unsplashSrcSet(guide.image)}
                sizes={defaultImageSizes}
                alt={guide.alt}
                loading="lazy"
              />
            </figure>
            <div className="dest-edit-guide-copy">
              <p className="dest-edit-label">Guide</p>
              <h2>{guide.title}</h2>
              <p>{guide.excerpt}</p>
              <p className="dest-edit-guide-meta">
                {guide.price}
                {!guide.stripePriceId ? " · Launching soon" : ""}
              </p>
              <Link className="button dark" href={`/guides/${guide.slug}`}>
                See what&rsquo;s inside
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="dest-edit-shell dest-edit-plan" aria-label="Plan a journey">
        <p className="dest-edit-label">Plan a journey</p>
        <h2>Want this paced for your dates?</h2>
        <p>
          Altrove can shape a {country.title} route around how you like to
          travel.
        </p>
        <Link className="button dark" href="/plan-a-trip">
          Plan a journey
        </Link>
      </section>

      <StudioNewsletter
        title={`Notes from ${country.title}`}
        description="New guides, journeys and journal stories from this country, as they're published."
      >
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
