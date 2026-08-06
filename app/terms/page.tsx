import type { Metadata } from "next";
import { PageHero } from "../components";
import { site } from "../data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Placeholder terms of use for the Altrove website, pending legal review.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of use — placeholder."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A calm outdoor table with warm travel light"
      >
        <p>
          This page is a placeholder. It has not been reviewed by a lawyer
          and should not be treated as a finished legal document — it exists
          so the site has a real link here rather than a dead one.
        </p>
      </PageHero>

      <article className="article-page">
        <div className="article-layout privacy-layout">
          <aside className="article-sidebar" aria-label="Terms summary">
            <div className="article-panel">
              <h2>Contact</h2>
              <p>{site.email}</p>
            </div>
            <div className="article-panel">
              <h2>Status</h2>
              <p>Placeholder — pending legal review before launch.</p>
            </div>
          </aside>

          <div className="article-body">
            <section>
              <h2>What Altrove is, today</h2>
              <p>
                Altrove is an editorial travel studio. We publish destination
                content, sell downloadable guides, and offer personalised
                itinerary design and recommendations. We are not a licensed
                travel agency, and we do not currently book flights,
                accommodation or travel packages on your behalf.
              </p>
            </section>

            <section>
              <h2>Using this site</h2>
              <p>
                Content on this site is editorial and informational. It is
                not professional travel, safety, legal or financial advice.
                Always confirm opening times, transport, visa and entry
                requirements independently before you travel.
              </p>
            </section>

            <section>
              <h2>To be added before launch</h2>
              <p>
                Governing law, liability limitations, acceptable use, and
                intellectual property terms for site content and purchased
                guides — these need proper legal drafting, not placeholder
                copy.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
