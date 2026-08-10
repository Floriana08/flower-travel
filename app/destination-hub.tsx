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
  const countryGuides = getGuideProductsForCountry(country.slug);

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

      {country.travelNotes.length ? (
        <section className="country-mag-notes country-mag-pad" aria-label="Travel notes">
          <div className="country-mag-notes-rail">
            <p className="country-mag-kicker">Travel notes</p>
            <h2>How to travel here</h2>
            <p>{country.notesIntro}</p>
          </div>
          <dl className="country-mag-notes-list">
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
        <section className="country-mag-loved country-mag-pad" aria-label="Places we love">
          <div className="country-mag-loved-intro">
            <p className="country-mag-kicker">Places we love</p>
            <h2>Taste notes from {country.title}</h2>
          </div>
          <div className="country-mag-loved-row">
            {country.tasteNotes.map((taste) => (
              <article key={taste.name} className="country-mag-loved-col">
                <figure>
                  <img
                    src={taste.image}
                    srcSet={unsplashSrcSet(taste.image)}
                    sizes={defaultImageSizes}
                    alt={taste.alt}
                    loading="lazy"
                  />
                </figure>
                <p className="country-mag-kicker">{taste.kind}</p>
                <h3>{taste.name}</h3>
                <p>{taste.note}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {country.placesWeLove.length ? (
        <section className="country-mag-pad country-mag-places-list" aria-label="Shortlists">
          <div className="country-mag-notes-rail">
            <p className="country-mag-kicker">Shortlists</p>
            <h2>Where we would send a friend</h2>
          </div>
          <div className="country-mag-places-grid">
            {country.placesWeLove.map((group) => (
              <div key={group.kind} className="country-mag-places-group">
                <h3>{group.kind}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="country-mag-journal country-mag-pad" aria-label="Journal stories">
        <div className="country-mag-notes-rail">
          <p className="country-mag-kicker">Journal</p>
          <h2>Stories from {country.title}</h2>
        </div>
        {stories.length ? (
          <>
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
            <Link className="country-mag-link" href={`/journal/${country.slug}`}>
              More from {country.title}
            </Link>
          </>
        ) : (
          <div className="country-mag-empty-journal">
            <p className="country-mag-quiet-note">
              Journal notes for {country.title} are still being gathered. In
              the meantime, ask Altrove to shape a route, or join Letters for
              new stories as they publish.
            </p>
            <p className="country-mag-coast-links">
              <Link className="country-mag-link" href="/plan-a-trip">
                Plan a journey
              </Link>
              <Link className="country-mag-link" href="/#letters">
                Join Letters
              </Link>
            </p>
          </div>
        )}
      </section>

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
                    {!guide.stripePriceId ? " · Launching soon" : ""}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="country-mag-quiet-note">
            No guide for {country.title} yet, we publish a guide only once
            we&rsquo;ve researched it properly.
          </p>
        )}
      </section>

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
          <p className="country-mag-kicker">Plan a journey</p>
          <h2>Planning something similar?</h2>
          <p>
            Altrove can shape the route around your dates, pace and priorities.
          </p>
          <Link className="button dark" href="/plan-a-trip">
            Plan a journey
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
