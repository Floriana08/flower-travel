import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";
import { StudioNewsletter } from "./studio-components";
import {
  getFeaturedJourneyForCountry,
  getGuideProductsForCountry,
  getHubJournalStories,
  type StudioCountry,
} from "./studio-structure";
import { defaultImageSizes, heroImageSizes, unsplashSrcSet } from "./image-utils";

export function DestinationHub({ country }: { country: StudioCountry }) {
  const featured = getFeaturedJourneyForCountry(country.slug);
  const stories = getHubJournalStories(country.slug);
  const countryGuides = getGuideProductsForCountry(country.slug);
  const days = country.example.days;

  return (
    <main className="country-mag">
      <section className="country-mag-hero">
        <img
          src={country.image}
          srcSet={unsplashSrcSet(country.image)}
          sizes={heroImageSizes}
          alt={country.alt}
        />
        <div className="country-mag-hero-copy">
          <p className="country-mag-kicker">{country.title}</p>
          <h1>How we experience {country.title}.</h1>
        </div>
      </section>

      <section className="country-mag-intro country-mag-pad">
        <p className="country-mag-lede">{country.hubLede}</p>
      </section>

      <section className="country-mag-regions country-mag-pad" aria-label="Regions">
        <div className="country-mag-notes-rail">
          <p className="country-mag-kicker">Regions</p>
          <h2>Where we cover {country.title}</h2>
        </div>
        <div className="country-mag-regions-grid">
          {country.collections.map((region) => {
            const content = (
              <>
                <figure>
                  <img
                    src={region.image}
                    srcSet={unsplashSrcSet(region.image)}
                    sizes={defaultImageSizes}
                    alt={region.alt}
                    loading="lazy"
                  />
                </figure>
                <h3>{region.title}</h3>
                <p>{region.note}</p>
                {region.status ? (
                  <p className="country-mag-region-status">{region.status}</p>
                ) : null}
              </>
            );
            return region.href ? (
              <Link key={region.title} className="country-mag-region-card" href={region.href}>
                {content}
              </Link>
            ) : (
              <article key={region.title} className="country-mag-region-card is-quiet">
                {content}
              </article>
            );
          })}
        </div>
      </section>

      {stories.length ? (
        <section className="country-mag-journal country-mag-pad" aria-label="Journal stories">
          <div className="country-mag-notes-rail">
            <p className="country-mag-kicker">Journal</p>
            <h2>Stories from {country.title}</h2>
          </div>
          <div className="country-mag-journal-grid">
            {stories.map((story) => (
              <article key={story.slug} className="country-mag-journal-card">
                <Link href={`/journal/${story.slug}`}>
                  <img
                    src={story.image}
                    srcSet={unsplashSrcSet(story.image)}
                    sizes={defaultImageSizes}
                    alt={story.alt}
                    loading="lazy"
                  />
                  <p className="country-mag-kicker">{story.category}</p>
                  <h3>{story.title}</h3>
                  <p>{story.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
          <Link className="country-mag-link" href="/journal">
            More from the journal
          </Link>
        </section>
      ) : null}

      <section className="country-mag-guides country-mag-pad" aria-label="Guides">
        <div className="country-mag-notes-rail">
          <p className="country-mag-kicker">Guides</p>
          <h2>Take {country.title} with you</h2>
        </div>
        {countryGuides.length ? (
          <div className="country-mag-guides-grid">
            {countryGuides.map((guide) => (
              <article key={guide.slug} className="country-mag-guide-card">
                <Link href={`/guides/${guide.slug}`}>
                  <img
                    src={guide.image}
                    srcSet={unsplashSrcSet(guide.image)}
                    sizes={defaultImageSizes}
                    alt={guide.alt}
                    loading="lazy"
                  />
                  <p className="country-mag-kicker">{guide.status}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <p className="country-mag-guide-price">
                    {guide.price}
                    {guide.priceIsPlaceholder ? " · placeholder price" : ""}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="country-mag-quiet-note">
            No guide for {country.title} yet — we publish a guide only once
            we&rsquo;ve researched it properly.
          </p>
        )}
      </section>

      {featured ? (
        <section
          className="country-mag-coast country-mag-pad"
          aria-label={country.example.title}
        >
          <div className="country-mag-coast-head">
            <div className="country-mag-coast-copy">
              <p className="country-mag-kicker">Featured journey</p>
              <h2>
                <Link href={`/journeys/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="country-mag-meta">
                {featured.duration} · {featured.destination}
              </p>
              <p className="country-mag-deck">{featured.summary}</p>
            </div>
            <figure className="country-mag-coast-side">
              <img
                src={country.exampleImage}
                srcSet={unsplashSrcSet(country.exampleImage)}
                sizes={defaultImageSizes}
                alt={country.exampleImageAlt}
                loading="lazy"
              />
            </figure>
          </div>

          <ol className="country-mag-days">
            {days.map((day, index) => (
              <li
                key={`${day.label}-${day.title}`}
                style={{ ["--day-index" as string]: index }}
              >
                <p className="country-mag-day-label">{day.label}</p>
                <h3>{day.title}</h3>
                {day.note ? <p>{day.note}</p> : null}
              </li>
            ))}
          </ol>

          <div className="country-mag-coast-links">
            <Link className="country-mag-link" href={`/journeys/${featured.slug}`}>
              Explore the journey
            </Link>
          </div>
        </section>
      ) : null}

      <section className="country-mag-plan country-mag-pad" aria-label="Plan a trip">
        <div className="country-mag-plan-media" aria-hidden="true">
          <img
            src={country.planImage}
            srcSet={unsplashSrcSet(country.planImage)}
            sizes={defaultImageSizes}
            alt=""
          />
        </div>
        <div className="country-mag-plan-copy">
          <p className="country-mag-kicker">Plan with Altrove</p>
          <h2>Planning something similar?</h2>
          <p>
            Altrove can shape the route around your dates, pace and
            priorities — hotels, neighbourhoods and pacing included.
          </p>
          <Link className="button dark" href="/plan-a-trip">
            Plan My Trip
          </Link>
        </div>
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
