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
  const routeStops = days.map((day) => day.title.replace(/^(Arrive in |Stay in |Boat to |Return to )/i, ""));

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
              the meantime, ask Altrove to shape a route — or join Letters for
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
              <p className="country-mag-deck">{country.example.lede}</p>
              {routeStops.length ? (
                <p className="country-mag-route-line" aria-label="Suggested route">
                  {routeStops.join(" → ")}
                </p>
              ) : null}
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
            {countryGuides[0] ? (
              <Link className="country-mag-link" href={`/guides/${countryGuides[0].slug}`}>
                View the guide
              </Link>
            ) : null}
            <Link className="country-mag-link" href="/plan-a-trip">
              Plan a personalised version
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
