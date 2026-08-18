import type { Metadata } from "next";
import Link from "next/link";
import { defaultImageSizes, unsplashSrcSet } from "../image-utils";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Flor, founder of Altrove — an Italian traveller living in Portugal, writing journeys for people who prefer to remember what they see.",
  alternates: {
    canonical: "https://altrove.studio/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">Meet Flor</p>
          <h1 className="display-title">
            Italian by birth.
            <br />
            Living in Portugal.
            <br />
            Collecting the places worth returning to.
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

      <section className="about-chapter section-shell" id="meet-flor">
        <div className="about-prose about-prose-wide">
          <p>
            We&rsquo;ve always travelled by collecting notes. Hotels we&rsquo;d
            return to without thinking twice. Neighbourhoods worth waking up in.
            Restaurants we&rsquo;d recommend to a friend without hesitation.
            Routes that quietly changed how we saw a city or a stretch of coast.
          </p>
          <p>
            For years those recommendations lived in notebooks and long messages
            to people we care about. Altrove grew out of that habit — a place to
            gather what was worth keeping, and to share it with more care than a
            hurried list ever could.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="philosophy">
        <div className="about-prose about-prose-wide">
          <p className="about-pull">
            Altrove isn&rsquo;t about travelling more. It&rsquo;s about
            travelling better.
          </p>
          <p>
            We don&rsquo;t want to see everything. We want to remember what we
            see — four days in one city over a rush through four countries.
            Thoughtful hotels. Neighbourhood lunches. Atmosphere. Someone
            else&rsquo;s taste, not endless options.
          </p>
          <p>That is how we travel. That is how Altrove is written.</p>
        </div>
      </section>

      <section className="about-chapter section-shell" id="how-it-works">
        <div className="about-prose about-prose-wide">
          <p className="eyebrow">How Altrove works</p>
          <p>
            The <Link href="/journal">journal</Link> shares destination stories
            and practical notes.{" "}
            <Link href="/guides">Premium guides</Link> go deeper when a place is
            researched properly.{" "}
            <Link href="/plan-a-trip">Personalised itinerary design</Link> helps
            you shape a route around your dates and pace — Altrove recommends;
            you book directly. Full travel booking is a future service, not what
            is offered today.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="trust">
        <div className="about-prose about-prose-wide">
          <p>
            Every destination begins with a real journey. We write from places
            we have visited, stayed in and returned to in thought long after the
            trip ended. The collection grows slowly on purpose. We&rsquo;d
            rather recommend less, and mean it.
          </p>
          <p className="about-closing-link">
            <Link className="text-link" href="/destinations">
              Explore the destinations
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/guides">
              Browse the guides
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/plan-a-trip">
              Plan a journey
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
