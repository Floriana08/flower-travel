import Link from "next/link";
import { EditorialCarousel } from "./EditorialCarousel";
import { EditorialStoryCard, EnquiryCta } from "./studio-components";
import {
  getCatalogueForCountry,
  getGuidesForCountry,
  getJourneysForCountry,
  type StudioCountry,
} from "./studio-structure";

export function DestinationHub({ country }: { country: StudioCountry }) {
  const catalogue = getCatalogueForCountry(country.slug);
  const related = getJourneysForCountry(country.slug);
  const journeys = catalogue.length ? catalogue : related.slice(0, 3);
  const articles = getGuidesForCountry(country.slug);

  return (
    <main className="destination-hub">
      <header className="section-shell page-top destination-hub-intro">
        <p className="eyebrow">Journeys · {country.title}</p>
        <h1 className="display-title">{country.title}</h1>
        <p className="destination-hub-lede">{country.hubLede}</p>
        <p className="destination-hub-back">
          <Link className="text-link" href="/journeys">
            All destinations
          </Link>
        </p>
      </header>

      <section className="section-shell tinted" aria-label="Example itinerary">
        <div className="destination-hub-example">
          <div>
            <p className="eyebrow">Example itinerary</p>
            <h2 className="display-title">{country.example.title}</h2>
            <p className="journey-dest-meta">{country.example.duration}</p>
            <p>{country.example.lede}</p>
          </div>
          <ol className="journey-day-list">
            {country.example.days.map((day) => (
              <li key={`${day.label}-${day.title}`}>
                <p className="journey-day-label">{day.label}</p>
                <h3>{day.title}</h3>
                {day.note ? <p>{day.note}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {journeys.length ? (
        <section className="section-shell" aria-label="Curated journeys">
          <div className="home-section-head">
            <p className="eyebrow">Curated journeys</p>
            <h2 className="display-title">Routes taking shape</h2>
          </div>
          <div className="destination-hub-journey-grid">
            {journeys.map((journey) => (
              <article key={journey.slug} className="destination-hub-journey">
                <Link
                  className="destination-hub-journey-media"
                  href={`/journeys/${journey.slug}`}
                  aria-label={journey.title}
                >
                  <img src={journey.image} alt={journey.alt} loading="lazy" />
                </Link>
                <div>
                  <p className="home-journey-status">{journey.statusLabel}</p>
                  <h3>
                    <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
                  </h3>
                  <p className="home-journey-meta">
                    <span>{journey.duration}</span>
                    <span>{journey.bestTime}</span>
                  </p>
                  <p>{journey.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell tinted" aria-label="Recommendations">
        <div className="home-section-head">
          <p className="eyebrow">How we travel here</p>
          <h2 className="display-title">Notes before you plan</h2>
        </div>
        <ul className="destination-hub-notes">
          {country.recommendations.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      {articles.length ? (
        <section className="section-shell" aria-label="Journal">
          <EditorialCarousel
            eyebrow="Journal"
            title={`Notes on ${country.title}`}
            ariaLabel={`${country.title} journal stories`}
            viewAllHref={`/travel-guides/${country.slug}`}
            viewAllLabel="Open the collection"
          >
            {articles.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>
      ) : null}

      <section className="section-shell">
        <EnquiryCta
          title="Looking for something more personal?"
          cta="Plan My Trip"
        >
          <p>We’ll design a journey around the way you like to travel.</p>
        </EnquiryCta>
      </section>
    </main>
  );
}
