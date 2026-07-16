import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "../components";
import { communityInterests, site } from "../data";

export const metadata: Metadata = {
  title: "Club",
  description:
    "Join the Flower Travel Club for thoughtful destination notes, Italy, Spain, Portugal stories, positive-footprint travel ideas, and future editorial pilots.",
};

export default function CommunityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Club"
        title="The reader circle behind the travel journal."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84"
        alt="Soft waves washing onto a pale beach"
      >
        <p>
          Flower Travel is more than a travel blog. It's an evolving journal for
          people who want to travel with more intention, discovering beautiful
          places, supporting local communities, and making choices that leave a
          lighter footprint without sacrificing memorable experiences. The Club
          is where that journey begins.
        </p>
      </PageHero>

      <section className="community-page section-shell">
        <div className="community-copy">
          <SectionHeading
            eyebrow="Join the Club"
            title="Start with the letter. Let the audience shape what comes next."
          >
            <p>
              For now, the Club is the best place to share new destination
              articles, Italy, Spain, and Portugal notes, positive-footprint
              travel ideas, restaurant and hotel edits, and the questions that
              should shape future guides or planning.
            </p>
          </SectionHeading>

          <div className="community-values">
            <article>
              <h3>Better research</h3>
              <p>
                Thoughtful articles that help people travel with more
                confidence, less noise, and fewer rushed decisions.
              </p>
            </article>
            <article>
              <h3>Lower-impact choices</h3>
              <p>
                We try to propose slower routes, public transport, independent
                businesses, local culture, and stays that make sense for the
                place.
              </p>
            </article>
            <article>
              <h3>Still special</h3>
              <p>
                Sustainability should not make travel feel flat. The aim is to
                keep the beauty, taste, and sense of occasion while choosing
                more carefully.
              </p>
            </article>
          </div>
        </div>

        <aside className="community-form-panel" id="join">
          <p className="eyebrow">Early access</p>
          <h2>Join the Flower Travel Club</h2>
          <p>
            Tell me what you care about, and I will use the replies to shape the
            next articles, essays, and pilot ideas.
          </p>

          <form
            className="contact-form"
            action={`mailto:${site.email}`}
            method="post"
          >
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>Most interested in</span>
              <select name="interest" defaultValue="Destination articles">
                {communityInterests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>What would make this useful for you?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Italy routes, Spanish food notes, Portugal by train, sustainable hotels..."
              />
            </label>
            <label className="consent-check">
              <input name="consent" type="checkbox" required />
              <span>
                I agree to receive Flower Travel emails and understand I can
                unsubscribe at any time.
              </span>
            </label>
            <button className="button dark" type="submit">
              Join the Club
            </button>
          </form>

          <p className="small-print">
            This form currently sends the request by email. Before collecting
            addresses at scale, connect it to an email platform or database with
            a clear privacy workflow. Read the starter{" "}
            <Link href="/privacy">privacy note</Link>.
          </p>
        </aside>
      </section>

      <section className="editorial-band light-band">
        <div>
          <p className="eyebrow">Positive footprint</p>
          <br />
          <h2>Travel better, not necessarily more.</h2>
        </div>
        <p>
          The editorial direction is simple: fewer generic lists, more useful
          decisions, routes that respect time and place, and a club that rewards
          curiosity over overconsumption.
        </p>
        <Link className="button dark" href="/destinations">
          Read the blog
        </Link>
      </section>
    </main>
  );
}
