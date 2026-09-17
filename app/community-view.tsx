import Link from "next/link";
import { clubBenefits } from "./data";
import { NewsletterForm } from "./newsletter-form";
import { PageIntro, StudioNewsletter } from "./studio-components";

export function CommunityView() {
  return (
    <main className="community-page">
      <section className="section-shell page-top">
        <PageIntro eyebrow="Community" title="Travel, in good company.">
          <p>
            Altrove is a journal first. The community is the people who read it
            — and the letters that go out when there is something worth sending.
            No feed. No points. No membership product, for now.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted" aria-labelledby="what-you-receive">
        <div className="home-section-head">
          <p className="eyebrow">Letters from Altrove</p>
          <h2 id="what-you-receive" className="display-title">
            What arrives in the inbox.
          </h2>
        </div>
        <ul className="home-benefits-grid">
          {clubBenefits.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell about-chapter" id="how">
        <div className="about-chapter-label">
          <p className="eyebrow">How it works</p>
          <h2>Read. Travel. Write back if you like.</h2>
        </div>
        <div className="about-prose">
          <p>
            The Journal publishes itineraries and recommendations you can use
            on their own — where to stay, where to eat, what is worth doing,
            and what to skip. The letters are the quieter companion: new notes,
            a route we are researching, a hotel that earned its place.
          </p>
          <p>
            We write most closely about Portugal, Italy and Spain, and we care
            how lightly a trip sits on a place. Trains instead of short hops.
            Fewer hotel moves. Meals that belong to the neighbourhood.
          </p>
          <p>
            A private membership may come later. This year the work is the
            writing — and a community of travellers who want the same things.
          </p>
          <p>
            <Link className="text-link" href="/journal">
              Read the Journal
            </Link>
            <span aria-hidden="true"> · </span>
            <Link className="text-link" href="/itineraries">
              Browse itineraries
            </Link>
          </p>
        </div>
      </section>

      <StudioNewsletter
        id="letters"
        title="Join the letters"
        description="Tell us your email. We’ll write when there is a new itinerary, a hotel worth knowing, or a better way to take the train."
      >
        <NewsletterForm buttonLabel="Join the letters" source="community" />
      </StudioNewsletter>
    </main>
  );
}
