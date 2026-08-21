import Link from "next/link";
import {
  getFeaturedJourneyForCountry,
  getHubJournalStories,
  type StudioCountry,
} from "./studio-structure";
import { defaultImageSizes, heroImageSizes, unsplashSrcSet } from "./image-utils";

export function DestinationHub({ country }: { country: StudioCountry }) {
  const featured = getFeaturedJourneyForCountry(country.slug);
  const stories = getHubJournalStories(country.slug);
  const covered = country.collections.filter((region) => !region.status);
  const hotels = country.placesWeLove.find((group) => group.kind === "Hotels");
  const restaurants = country.placesWeLove.find((group) => group.kind === "Restaurants");
  const notes = country.travelNotes.slice(0, 4);
  const showExample =
    country.slug === "portugal" || (Boolean(featured) && country.slug === "italy");

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
          <p className="country-mag-kicker">Destinations</p>
          <h1>{country.title}</h1>
        </div>
      </section>

      <section className="country-mag-intro country-mag-pad">
        <p className="country-mag-lede">{country.hubLede}</p>
      </section>

      <section className="country-mag-regions country-mag-pad" aria-label="Currently covered">
        <div className="country-mag-notes-rail">
          <p className="country-mag-kicker">Currently covered</p>
          <h2>Cities and regions</h2>
        </div>
        {covered.length ? (
          <>
            <div className="country-mag-regions-grid">
              {covered.map((region) => {
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
                  </>
                );
                return region.href ? (
                  <Link key={region.title} className="country-mag-region-card" href={region.href}>
                    {content}
                  </Link>
                ) : (
                  <article key={region.title} className="country-mag-region-card">
                    {content}
                  </article>
                );
              })}
            </div>
            <p className="country-mag-quiet-note">
              Members can still request trips beyond these places.
            </p>
          </>
        ) : (
          <p className="country-mag-quiet-note">
            We do not yet publish a finished city edit for {country.title}. The
            notes below show how we think about travelling here. Members can
            still request a trip anywhere in the country — we research those
            by hand.
          </p>
        )}
      </section>

      {hotels || restaurants ? (
        <section className="country-mag-pad country-mag-places-list" aria-label="Recommendations">
          <div className="country-mag-notes-rail">
            <p className="country-mag-kicker">Recommendations</p>
            <h2>Hotels and restaurants we would choose</h2>
          </div>
          <div className="country-mag-places-grid">
            {hotels ? (
              <div className="country-mag-places-group">
                <h3>Stay</h3>
                <ul>
                  {hotels.items.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {restaurants ? (
              <div className="country-mag-places-group">
                <h3>Eat</h3>
                <ul>
                  {restaurants.items.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {notes.length ? (
        <section className="country-mag-notes country-mag-pad" aria-label="Travel notes">
          <div className="country-mag-notes-rail">
            <p className="country-mag-kicker">Travel notes</p>
            <h2>How to travel here</h2>
            <p>{country.notesIntro}</p>
          </div>
          <dl className="country-mag-notes-list">
            {notes.map((note) => (
              <div key={note.title}>
                <dt>{note.title}</dt>
                <dd>{note.body}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {showExample && featured ? (
        <section className="country-mag-coast country-mag-pad" aria-label="Example Trip Edit">
          <div className="country-mag-coast-head">
            <div className="country-mag-coast-copy">
              <p className="country-mag-kicker">Example Trip Edit</p>
              <h2>
                <Link href={country.slug === "portugal" ? "/trips/lisbon" : `/journeys/${featured.slug}`}>
                  {country.slug === "portugal" ? "A weekend in Lisbon" : featured.title}
                </Link>
              </h2>
              <p className="country-mag-meta">
                {country.slug === "portugal" ? "4 days · Lisbon" : `${featured.duration} · ${featured.destination}`}
              </p>
              <p className="country-mag-deck">
                {country.slug === "portugal"
                  ? "A compact Altrove edit: one considered base, a short list of tables, and a loose rhythm for the weekend."
                  : featured.summary}
              </p>
              <div className="country-mag-coast-links">
                {country.slug === "portugal" ? (
                  <Link className="country-mag-link" href="/trips/lisbon">
                    See the Lisbon Trip Edit
                  </Link>
                ) : (
                  <Link className="country-mag-link" href={`/journeys/${featured.slug}`}>
                    See this example
                  </Link>
                )}
              </div>
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
        </section>
      ) : null}

      <section className="country-mag-journal country-mag-pad" aria-label="Journal stories">
        <div className="country-mag-notes-rail">
          <p className="country-mag-kicker">Journal</p>
          <h2>From the Journal</h2>
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
                  </Link>
                </article>
              ))}
            </div>
            <Link className="country-mag-link" href={`/journal/${country.slug}`}>
              More from {country.title}
            </Link>
          </>
        ) : (
          <p className="country-mag-quiet-note">
            Journal notes for {country.title} are still being gathered. The
            public Journal is not the full edit — members receive tighter
            recommendations when we design a trip.
          </p>
        )}
      </section>

      <section className="country-mag-plan country-mag-pad" aria-label="Founding Membership">
        <div className="country-mag-plan-media" aria-hidden="true">
          <img
            src={country.planImage}
            srcSet={unsplashSrcSet(country.planImage)}
            sizes={defaultImageSizes}
            alt=""
          />
        </div>
        <div className="country-mag-plan-copy">
          <p className="country-mag-kicker">Founding Membership</p>
          <h2>Going to {country.title}?</h2>
          <p>Let Altrove shape the trip around you.</p>
          <Link className="button dark" href="/apply">
            Become a Founding Member
          </Link>
        </div>
      </section>
    </main>
  );
}
