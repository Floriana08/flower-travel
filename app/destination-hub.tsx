import Link from "next/link";
import { affiliateHref } from "./affiliates";
import { NewsletterForm } from "./newsletter-form";
import { StudioNewsletter } from "./studio-components";
import {
  getFeaturedJourneyForCountry,
  getGuideProductsForCountry,
  getHubJournalStories,
  type StudioCountry,
  type TopPlace,
} from "./studio-structure";
import { defaultImageSizes, heroImageSizes, unsplashSrcSet } from "./image-utils";

function TopPlaceCard({ place }: { place: TopPlace }) {
  const { href, isAffiliate } = affiliateHref(place.href, place.partner);

  return (
    <a
      className="dest-lp-top-card"
      href={href}
      target="_blank"
      rel={
        isAffiliate
          ? "sponsored noopener noreferrer"
          : "noopener noreferrer"
      }
    >
      <img
        src={place.image}
        srcSet={unsplashSrcSet(place.image)}
        sizes="(max-width: 640px) 70vw, 240px"
        alt={place.alt}
        loading="lazy"
      />
      <span className="dest-lp-top-copy">
        <em>Attraction in {place.area}</em>
        <strong>{place.title}</strong>
      </span>
    </a>
  );
}

export function DestinationHub({ country }: { country: StudioCountry }) {
  const stories = getHubJournalStories(country.slug);
  const guide = getGuideProductsForCountry(country.slug)[0];
  const journey = getFeaturedJourneyForCountry(country.slug);
  const tips = country.travelNotes;
  const topPlaces = country.topPlaces;

  return (
    <main className="dest-lp">
      <section className="dest-lp-hero">
        <img
          src={country.image}
          srcSet={unsplashSrcSet(country.image)}
          sizes={heroImageSizes}
          alt={country.alt}
        />
        <div className="dest-lp-hero-copy">
          <h1>{country.title}</h1>
          <p>{country.hubLede}</p>
        </div>
      </section>

      <section className="dest-lp-shell dest-lp-stories" aria-label="Latest stories">
        <div className="dest-lp-section-head dest-lp-section-head-row">
          <div>
            <p className="dest-lp-label">Latest stories</p>
            <h2>From the journal</h2>
          </div>
          <Link className="dest-lp-text-link" href={`/journal/${country.slug}`}>
            More stories
          </Link>
        </div>
        {stories.length ? (
          <div className="dest-lp-stories-grid">
            {stories.map((story) => (
              <article key={story.slug} className="dest-lp-story">
                <Link href={`/journal/${story.slug}`}>
                  <img
                    src={story.image}
                    srcSet={unsplashSrcSet(story.image)}
                    sizes={defaultImageSizes}
                    alt={story.alt}
                    loading="lazy"
                  />
                  <p className="dest-lp-label">{story.category}</p>
                  <h3>{story.title}</h3>
                  <p>{story.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="dest-lp-empty">
            Journal notes for {country.title} are still being gathered.
          </p>
        )}
      </section>

      <section className="dest-lp-journeys" aria-label="Plan with Altrove">
        <div className="dest-lp-shell dest-lp-journeys-inner">
          <div className="dest-lp-journeys-copy">
            <p className="dest-lp-label">Plan with Altrove</p>
            <h2>See {country.title} how it&rsquo;s meant to be seen</h2>
            <p>
              Personalised itinerary design around the places we know well,
              hotels, neighbourhoods and pacing included. You make the
              bookings; Altrove makes the trip make sense.
            </p>
            <div className="dest-lp-journeys-actions">
              <Link className="button light" href="/plan-a-trip">
                Start planning
              </Link>
              {journey ? (
                <Link
                  className="button ghost-on-dark"
                  href={`/journeys/${journey.slug}`}
                >
                  Browse a journey
                </Link>
              ) : null}
            </div>
          </div>
          {journey ? (
            <Link
              className="dest-lp-journeys-feature"
              href={`/journeys/${journey.slug}`}
            >
              <img
                src={journey.image}
                srcSet={unsplashSrcSet(journey.image)}
                sizes={defaultImageSizes}
                alt={journey.alt}
                loading="lazy"
              />
              <span>
                <em>{journey.duration}</em>
                <strong>{journey.title}</strong>
              </span>
            </Link>
          ) : null}
        </div>
      </section>

      {topPlaces.length ? (
        <section className="dest-lp-top" aria-label="Top places to visit">
          <div className="dest-lp-shell">
            <div className="dest-lp-section-head">
              <p className="dest-lp-label">Top places to visit</p>
              <h2>Where to go in {country.title}</h2>
              <p className="dest-lp-dek">
                Sights worth a day or an afternoon, not a separate page for every
                monument. Tickets and stays open with trusted booking partners.
              </p>
            </div>
          </div>
          <div className="dest-lp-top-rail" role="list">
            {topPlaces.map((place) => (
              <div key={`${place.area}-${place.title}`} role="listitem">
                <TopPlaceCard place={place} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {tips.length ? (
        <section className="dest-lp-tips" aria-label="Travel tips">
          <div className="dest-lp-shell">
            <div className="dest-lp-section-head">
              <p className="dest-lp-label">Travel tips</p>
              <h2>{country.title} tips from Altrove</h2>
              <p className="dest-lp-dek">{country.notesIntro}</p>
            </div>
            <div className="dest-lp-tips-grid">
              {tips.map((tip) => (
                <article key={tip.title} className="dest-lp-tip">
                  <h3>{tip.title}</h3>
                  <p>{tip.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {guide ? (
        <section className="dest-lp-shell dest-lp-guide" aria-label="Guide">
          <div className="dest-lp-guide-inner">
            <img
              src={guide.image}
              srcSet={unsplashSrcSet(guide.image)}
              sizes={defaultImageSizes}
              alt={guide.alt}
              loading="lazy"
            />
            <div>
              <p className="dest-lp-label">Travel guide</p>
              <h2>{guide.title}</h2>
              <p>{guide.excerpt}</p>
              <p className="dest-lp-guide-meta">
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

      <StudioNewsletter
        title={`Notes from ${country.title}`}
        description="New guides, journeys and journal stories from this country, as they're published."
      >
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
