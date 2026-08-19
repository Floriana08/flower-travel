import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "./image-utils";
import type { SampleTrip } from "./sample-trips";

export function SampleTripEdit({
  trip,
  variant = "page",
}: {
  trip: SampleTrip;
  variant?: "preview" | "page";
}) {
  const isPreview = variant === "preview";

  return (
    <article className={`trip-edit trip-edit-${variant}`}>
      <header className="trip-edit-masthead">
        {isPreview ? (
          <figure className="trip-edit-hero">
            <img
              src={trip.heroImage}
              srcSet={unsplashSrcSet(trip.heroImage)}
              sizes="(max-width: 900px) 100vw, 52vw"
              alt={trip.heroAlt}
              loading={isPreview ? "lazy" : "eager"}
            />
          </figure>
        ) : null}
        <div className="trip-edit-head">
          <p className="eyebrow">{trip.kicker}</p>
          <p className="trip-edit-place">
            <span>{trip.title}</span>
            <span aria-hidden="true"> / </span>
            <span>{trip.duration}</span>
          </p>
          {isPreview ? (
            <p className="trip-edit-dek">
              An example of how Altrove thinks about a trip — not a template to
              copy, and not a booking.
            </p>
          ) : null}
        </div>
      </header>

      <section className="trip-edit-module" aria-labelledby={`${trip.slug}-take`}>
        <p className="trip-edit-label">The Altrove take</p>
        <h2 id={`${trip.slug}-take`} className="visually-hidden">
          The Altrove take
        </h2>
        {trip.take.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </section>

      <section className="trip-edit-module" aria-labelledby={`${trip.slug}-stay`}>
        <p className="trip-edit-label">Stay</p>
        <h2 id={`${trip.slug}-stay`} className="visually-hidden">
          Stay
        </h2>
        <div className="trip-edit-hotels">
          {trip.hotels.map((hotel) => (
            <article
              key={hotel.name}
              className={`trip-edit-hotel${hotel.pick ? " is-pick" : ""}`}
            >
              <img
                src={hotel.image}
                srcSet={unsplashSrcSet(hotel.image)}
                sizes={defaultImageSizes}
                alt={hotel.alt}
                loading="lazy"
              />
              <div>
                {hotel.pick ? <p className="trip-edit-pick">Our pick</p> : null}
                <h3>{hotel.name}</h3>
                <p className="trip-edit-meta">{hotel.neighbourhood}</p>
                <p>{hotel.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trip-edit-module" aria-labelledby={`${trip.slug}-eat`}>
        <p className="trip-edit-label">Eat</p>
        <h2 id={`${trip.slug}-eat`} className="visually-hidden">
          Eat
        </h2>
        <ul className="trip-edit-eat">
          {trip.restaurants.map((place) => (
            <li key={place.name}>
              <div>
                <strong>{place.name}</strong>
                <span>{place.neighbourhood}</span>
              </div>
              <p>{place.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="trip-edit-module" aria-labelledby={`${trip.slug}-rhythm`}>
        <p className="trip-edit-label">The rhythm</p>
        <h2 id={`${trip.slug}-rhythm`} className="visually-hidden">
          The rhythm
        </h2>
        <ol className="trip-edit-rhythm">
          {trip.rhythm.map((day) => (
            <li key={day.when}>
              <h3>{day.when}</h3>
              <p>{day.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="trip-edit-note" aria-label="Altrove note">
        <p className="trip-edit-label">Altrove note</p>
        <p>{trip.note}</p>
      </aside>

      {isPreview ? (
        <p className="trip-edit-cta">
          <Link className="button dark" href={`/trips/${trip.slug}`}>
            See how Altrove plans a trip
          </Link>
        </p>
      ) : null}
    </article>
  );
}
