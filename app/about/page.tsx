import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Flor, founder of Altrove — an Italian traveller living in Portugal, collecting the places, hotels and routes worth returning to.",
  alternates: {
    canonical: "https://flowertravel.studio/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero section-shell">
        <div className="about-hero-copy">
          <p className="eyebrow">About</p>
          <h1 className="display-title">Meet Flor.</h1>
          <p className="about-hero-lede">
            The person behind Altrove — and a quieter way of travelling.
          </p>
        </div>
        <figure className="about-hero-media">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
            alt="Morning light on a quiet terrace table overlooking the sea"
          />
        </figure>
      </header>

      <section className="about-chapter section-shell" id="meet-flor">
        <div className="about-chapter-label">
          <p className="eyebrow">01</p>
          <h2>Meet Flor</h2>
        </div>
        <div className="about-prose">
          <p>
            I’m Flor. I’m Italian, and I now live in Portugal — two places that
            have shaped how I move through the world, and how I write about it.
          </p>
          <p>
            I’ve always travelled by collecting notes. Hotels I’d return to
            without thinking twice. Neighbourhoods that felt worth waking up in.
            Restaurants I’d recommend to a friend without hesitation. Routes that
            quietly changed how I saw a city or a stretch of coast.
          </p>
          <p>
            For years those recommendations lived in notebooks, saved maps and
            long messages to people I care about. Altrove grew out of that habit:
            a place to gather what was worth keeping, and to share it with more
            care than a hurried list ever could.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="philosophy">
        <div className="about-chapter-label">
          <p className="eyebrow">02</p>
          <h2>Our philosophy</h2>
        </div>
        <div className="about-prose">
          <p className="about-pull">
            Altrove isn’t about travelling more. It’s about travelling better.
          </p>
          <p>
            Travelling well is not a race through landmarks. It’s learning the
            rhythm of a place — when the streets soften, where lunch still feels
            local, which corner you’d choose again on a second visit.
          </p>
          <p>
            It means slowing down. Choosing quality over quantity. Coming home
            with a neighbourhood in mind, not a checklist. The journeys and notes
            on Altrove are shaped by that idea: fewer places, held with more
            attention.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell" id="how">
        <div className="about-chapter-label">
          <p className="eyebrow">03</p>
          <h2>How Altrove works</h2>
        </div>
        <div className="about-prose">
          <p>
            Every destination begins with a real journey. I write from places I
            have visited, stayed in and returned to in thought long after the
            trip ended — then I research with the same care I’d want from someone
            planning for me.
          </p>
          <p>
            Only those places become part of Altrove. The collection grows slowly
            on purpose. I’d rather recommend less, and mean it, than cover more
            ground than I can stand behind.
          </p>
        </div>
      </section>

      <section className="about-chapter section-shell tinted" id="ahead">
        <div className="about-chapter-label">
          <p className="eyebrow">04</p>
          <h2>Looking ahead</h2>
        </div>
        <div className="about-prose">
          <p>
            Altrove began as a travel journal. It is growing into a boutique
            travel studio — curated itineraries, personal planning and
            recommendations chosen with the same eye as the writing.
          </p>
          <p>
            It will only grow when those offerings meet the same standard as the
            editorial work. Until then, the focus stays simple: honest notes,
            carefully shaped journeys, and a clearer sense of place.
          </p>
          <p>
            If that way of travelling resonates, you’re in the right company.
          </p>
          <p className="about-closing-link">
            <Link className="text-link" href="/journeys">
              Explore the journeys
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/plan-a-trip">
              Plan a trip
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
