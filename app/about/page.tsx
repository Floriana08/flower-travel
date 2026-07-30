import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components";
import { FlorNote } from "../editorial-components";
import { EnquiryCta } from "../studio-components";

export const metadata: Metadata = {
  title: "About Altrove",
  description:
    "Meet Flor and the thinking behind Altrove — a boutique travel studio built on personal journeys, independent recommendations and depth over volume.",
  alternates: {
    canonical: "https://flowertravel.studio/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A travel studio with an editorial point of view."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A breakfast table on a terrace overlooking the sea"
      >
        <p>
          Altrove creates thoughtful journeys for travellers who want to
          experience a place with greater depth, curiosity and intention.
        </p>
      </PageHero>

      <section className="about-story section-shell" id="flor">
        <div>
          <p className="eyebrow">Meet Flor</p>
          <h2 className="display-title">Hi, I’m Flor.</h2>
        </div>
        <div className="story-copy">
          <p>
            I created Altrove to collect the routes, neighbourhoods, hotels and
            travel notes that are genuinely worth remembering. The aim is not to
            see everything, but to travel with more intention and a stronger
            sense of place.
          </p>
          <FlorNote>
            <p>
              Campania is home. Portugal is where the journal’s mainland voice
              grew clearest. Italy and Spain remain central as the studio’s first
              collection of journeys takes shape.
            </p>
          </FlorNote>
          <p>
            Every destination featured on Altrove begins with a real journey,
            personal experience and careful additional research. Recommendations
            stay independent — chosen for character, not for volume.
          </p>
        </div>
      </section>

      <section className="section-shell tinted" id="why">
        <div className="about-split">
          <div>
            <p className="eyebrow">Why Altrove exists</p>
            <h2 className="display-title">Depth over volume</h2>
          </div>
          <div className="story-copy">
            <p>
              Too many travel sites try to cover everywhere at once. Altrove is
              intentionally starting small: a limited set of destinations, a
              short list of journeys, and editorial notes that support real
              planning decisions.
            </p>
            <p>
              The journal establishes taste and expertise. The journeys and
              planning service are where that point of view becomes useful for
              your trip.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell" id="approach">
        <div className="about-split">
          <div>
            <p className="eyebrow">How destinations are selected</p>
            <h2 className="display-title">Places we know</h2>
          </div>
          <div className="story-copy">
            <p>
              Destinations enter the collection when they have been visited,
              researched and written with enough care to stand behind the
              recommendation. If a place is still thin, it stays off the
              homepage — or is labelled as in development.
            </p>
            <p>
              The first focus includes Portugal, Italy, Spain and selected
              places researched in person. The map will grow slowly on purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell tinted" id="building">
        <div className="about-split">
          <div>
            <p className="eyebrow">What Altrove is building</p>
            <h2 className="display-title">From journal to studio</h2>
          </div>
          <div className="story-copy">
            <p>
              Today you will find journeys to explore, destination notes and a
              journal. Personalised itinerary design is opening gradually through{" "}
              <Link href="/plan-a-trip">Plan a Trip</Link>.
            </p>
            <p>
              Over time, Altrove may offer signature itineraries, honeymoon
              planning, hotel shortlists, consultations and — eventually —
              complete trip planning. Those services will be announced when they
              are genuinely ready.
            </p>
            <p>
              Editorial independence remains the foundation: recommendations are
              chosen because they are worth your time, not because a partnership
              requires them.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <EnquiryCta title="If you are planning a trip">
          <p>
            Share the destinations, dates and pace you have in mind. We will be
            in touch when your enquiry matches what Altrove can support.
          </p>
        </EnquiryCta>
      </section>
    </main>
  );
}
