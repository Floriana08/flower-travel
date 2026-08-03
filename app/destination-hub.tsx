import Link from "next/link";
import {
  EditorialStoryCard,
  EnquiryCta,
} from "./studio-components";
import {
  getFeaturedJourneyForCountry,
  getHubJournalStories,
  type StudioCountry,
} from "./studio-structure";

export function DestinationHub({ country }: { country: StudioCountry }) {
  const featured = getFeaturedJourneyForCountry(country.slug);
  const stories = getHubJournalStories(country.slug);

  return (
    <main className="country-hub">
      <section className="country-hub-hero">
        <div className="country-hub-hero-media" aria-hidden="true">
          <img src={country.image} alt="" />
        </div>
        <div className="country-hub-hero-copy">
          <p className="eyebrow light">{country.title}</p>
          <h1 className="studio-hero-lede">How we experience {country.title}.</h1>
          <p className="country-hub-hero-lede">{country.hubLede}</p>
        </div>
      </section>

      {featured ? (
        <section
          className="section-shell country-hub-featured"
          aria-label="Featured journey"
        >
          <div className="home-section-head">
            <p className="eyebrow">Featured journey</p>
            <h2 className="display-title">{featured.title}</h2>
          </div>
          <article className="country-hub-feature">
            <Link
              className="country-hub-feature-media"
              href={`/journeys/${featured.slug}`}
              aria-label={featured.title}
            >
              <img src={featured.image} alt={featured.alt} />
            </Link>
            <div className="country-hub-feature-copy">
              <p className="home-journey-status">{featured.statusLabel}</p>
              <p className="home-journey-meta">
                <span>{featured.duration}</span>
                <span>{featured.destination}</span>
              </p>
              <p>{featured.summary}</p>
              <p className="country-hub-feature-overview">
                {featured.overview[0]}
              </p>
              <div className="country-hub-feature-actions">
                <Link className="button dark" href={`/journeys/${featured.slug}`}>
                  Open the journey
                </Link>
                <Link className="text-link" href="/plan-a-trip">
                  Plan a version of this
                </Link>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <section
        className="section-shell country-hub-places"
        aria-label="Places we love"
      >
        <div className="home-section-head">
          <p className="eyebrow">Places we love</p>
          <h2 className="display-title">Taste notes</h2>
        </div>
        <div className="country-hub-places-grid">
          {country.placesWeLove.map((group) => (
            <div key={group.kind} className="country-hub-place-group">
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

      {stories.length ? (
        <section
          className="section-shell tinted country-hub-journal"
          aria-label="Journal"
        >
          <div className="home-section-head">
            <p className="eyebrow">Journal</p>
            <h2 className="display-title">Selected notes</h2>
          </div>
          <div className="editorial-story-grid home-journal-grid">
            {stories.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </div>
          <p className="home-section-link">
            <Link className="text-link" href={`/travel-guides/${country.slug}`}>
              More from the journal
            </Link>
          </p>
        </section>
      ) : null}

      <section className="section-shell country-hub-plan">
        <EnquiryCta
          title={`If this is how you’d like to experience ${country.title}, ask us to plan yours.`}
          cta="Plan My Trip"
        >
          <p>
            Personalised itinerary design around the places we know well —
            hotels, neighbourhoods and pacing included.
          </p>
        </EnquiryCta>
      </section>
    </main>
  );
}
