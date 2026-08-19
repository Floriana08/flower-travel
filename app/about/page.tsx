import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Altrove exists because travel planning has become overwhelming. We filter the noise — with taste, curation and trips designed around how you actually like to travel.",
  alternates: {
    canonical: "https://altrove.studio/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">About Altrove</p>
          <h1 className="display-title">
            Travel planning became noise.
            <br />
            We filter it.
          </h1>
        </div>
        <figure className="about-hero-media">
          <img
            src={aboutHeroImage}
            srcSet={unsplashSrcSet(aboutHeroImage)}
            sizes={defaultImageSizes}
            alt="Warm café light — the kind of pause Altrove plans for"
          />
        </figure>
      </header>

      <section className="about-chapter section-shell" id="philosophy">
        <div className="about-prose about-prose-wide">
          <p>
            There is too much information, too many lists, too many reviews and
            too much time spent comparing options. A trip that should feel
            considered becomes a second job.
          </p>
          <p>
            Altrove exists to take that work off your hands. We research the
            place, choose fewer things with more conviction, and design a trip
            around the way you actually like to travel — not around what ranks
            well.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="stand-for">
        <div className="about-prose about-prose-wide">
          <p className="about-pull">Taste. Curation. Thoughtfulness.</p>
          <p>
            We care about independent places, personalisation, and travelling
            well rather than travelling more. Neighbourhoods over circuits.
            Meals that shape the day. Permission not to see everything.
          </p>
          <p>
            Altrove is opinionated on purpose. If a hotel is merely convenient,
            or a restaurant is famous for being famous, it will not make the
            edit.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell" id="how-it-works">
        <div className="about-prose about-prose-wide">
          <p className="eyebrow">How it works</p>
          <p>
            Altrove is a private travel membership. You tell us where
            you&rsquo;re going. We research the trip and send you a personal
            Trip Edit — hotels, restaurants, experiences, practical notes and a
            suggested rhythm. You book everything directly.
          </p>
          <p>
            Founding Membership is currently complimentary, and offered to a
            limited number of travellers.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="invite">
        <div className="about-prose about-prose-wide">
          <p>
            The Journal shows how we think. The destinations we write about
            first — Portugal, Italy, Spain — are the places we know well enough
            to edit carefully. Membership can still take you elsewhere; we
            research those trips by hand.
          </p>
          <p className="about-closing-link">
            <Link className="text-link" href="/apply">
              Apply for Membership
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/membership">
              How membership works
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/journal">
              Read the Journal
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
