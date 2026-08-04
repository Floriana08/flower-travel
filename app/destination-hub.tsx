import Link from "next/link";
import { getFeaturedJourneyForCountry, type StudioCountry } from "./studio-structure";

export function DestinationHub({ country }: { country: StudioCountry }) {
  const featured = getFeaturedJourneyForCountry(country.slug);
  const days = country.example.days;

  return (
    <main className="country-mag">
      <section className="country-mag-hero">
        <img src={country.image} alt={country.alt} />
        <div className="country-mag-hero-copy">
          <p className="country-mag-kicker">{country.title}</p>
          <h1>How we experience {country.title}.</h1>
        </div>
      </section>

      <section className="country-mag-intro country-mag-pad">
        <p className="country-mag-lede">{country.hubLede}</p>

        {featured ? (
          <div className="country-mag-cover-copy" aria-label="Featured journey">
            <p className="country-mag-kicker">Featured journey</p>
            <h2>
              <Link href={`/journeys/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p className="country-mag-meta">
              {featured.duration} · {featured.destination}
            </p>
            <p className="country-mag-deck">{featured.summary}</p>
            <Link className="country-mag-link" href={`/journeys/${featured.slug}`}>
              Open the journey
            </Link>
          </div>
        ) : null}
      </section>

      <section className="country-mag-notes country-mag-pad" aria-label="Travel notes">
        <div className="country-mag-notes-rail">
          <p className="country-mag-kicker">Travel notes</p>
          <h2>Useful information</h2>
          <p className="country-mag-deck">{country.notesIntro}</p>
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

      <section className="country-mag-loved country-mag-pad" aria-label="Places we love">
        <div className="country-mag-loved-intro">
          <p className="country-mag-kicker">Places we love</p>
          <h2>Taste notes</h2>
        </div>
        <div className="country-mag-loved-row">
          {country.tasteNotes.map((place) => (
            <article key={place.name} className="country-mag-loved-col">
              <figure>
                <img src={place.image} alt={place.alt} loading="lazy" />
              </figure>
              <p className="country-mag-kicker">{place.kind}</p>
              <h3>{place.name}</h3>
              <p>{place.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="country-mag-coast country-mag-pad"
        aria-label={country.example.title}
      >
        <div className="country-mag-coast-head">
          <div className="country-mag-coast-copy">
            <p className="country-mag-kicker">From the notes</p>
            <h2>{country.example.title}</h2>
            <p className="country-mag-meta">{country.example.duration}</p>
            <p className="country-mag-deck">{country.example.lede}</p>
          </div>
          <figure className="country-mag-coast-side">
            <img
              src={country.exampleImage}
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

        {featured ? (
          <div className="country-mag-coast-links">
            <Link className="country-mag-link" href={`/journeys/${featured.slug}`}>
              Open the journey
            </Link>
          </div>
        ) : null}
      </section>

      <section className="country-mag-plan country-mag-pad" aria-label="Plan a trip">
        <div className="country-mag-plan-media" aria-hidden="true">
          <img src={country.planImage} alt="" />
        </div>
        <div className="country-mag-plan-copy">
          <p className="country-mag-kicker">Plan a trip</p>
          <h2>
            If this is how you’d like to experience {country.title}, ask us to
            plan yours.
          </h2>
          <p>
            Personalised itinerary design around the places we know well —
            hotels, neighbourhoods and pacing included.
          </p>
          <Link className="button dark" href="/plan-a-trip">
            Plan My Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
