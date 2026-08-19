import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SampleTripEdit } from "../../sample-trip";
import { getSampleTrip } from "../../sample-trips";
import { unsplashSrcSet } from "../../image-utils";

const trip = getSampleTrip("lisbon");

export const metadata: Metadata = {
  title: "Lisbon / 4 days — a sample Altrove travel edit",
  description:
    "How Altrove would approach four days in Lisbon: a considered base, a short list of tables, a loose rhythm, and the notes we would actually give a friend.",
  alternates: {
    canonical: "https://altrove.studio/trips/lisbon",
  },
};

export default function LisbonSampleTripPage() {
  if (!trip) notFound();

  return (
    <main className="sample-trip-page">
      <header className="sample-trip-hero">
        <img
          src={trip.heroImage}
          srcSet={unsplashSrcSet(trip.heroImage)}
          sizes="100vw"
          alt={trip.heroAlt}
        />
        <div className="sample-trip-hero-copy">
          <p className="eyebrow">{trip.kicker}</p>
          <h1>
            {trip.title}
            <span aria-hidden="true"> / </span>
            {trip.duration}
          </h1>
        </div>
      </header>

      <div className="section-shell sample-trip-body">
        <SampleTripEdit trip={trip} variant="page" />
      </div>

      <section className="section-shell tinted sample-trip-close">
        <p className="eyebrow">Private Beta</p>
        <h2 className="display-title">This is the kind of edit you receive.</h2>
        <p>
          During the private beta, Altrove personally designs the trip and you
          make the bookings. The edit is built around your dates, your budget
          and the way you actually like to travel.
        </p>
        <Link className="button dark" href="/apply">
          Apply for the Private Beta
        </Link>
      </section>
    </main>
  );
}
