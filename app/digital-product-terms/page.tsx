import type { Metadata } from "next";
import { PageHero } from "../components";
import { site } from "../data";

export const metadata: Metadata = {
  title: "Digital Product Terms",
  description: "Placeholder terms for Altrove's downloadable guides, pending legal review.",
};

export default function DigitalProductTermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Digital product terms — placeholder."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A calm outdoor table with warm travel light"
      >
        <p>
          This page is a placeholder for the terms covering Altrove&rsquo;s
          downloadable guides. No guide is purchasable yet — this exists so
          the link is real, not so the terms are final.
        </p>
      </PageHero>

      <article className="article-page">
        <div className="article-layout privacy-layout">
          <aside className="article-sidebar" aria-label="Digital product terms summary">
            <div className="article-panel">
              <h2>Contact</h2>
              <p>{site.email}</p>
            </div>
            <div className="article-panel">
              <h2>Status</h2>
              <p>Placeholder — no guide is currently for sale.</p>
            </div>
          </aside>

          <div className="article-body">
            <section>
              <h2>What a guide is</h2>
              <p>
                An Altrove guide is a downloadable digital document (PDF)
                containing independent travel research and recommendations.
                It is not a booking, a reservation, or a guarantee of
                availability for anything it recommends.
              </p>
            </section>

            <section>
              <h2>Delivery and updates</h2>
              <p>
                Delivery method and update policy are described on each
                guide&rsquo;s product page. Once checkout is live, the exact
                delivery mechanism and licence terms (personal use, no resale
                or redistribution) will be finalised here.
              </p>
            </section>

            <section>
              <h2>To be added before launch</h2>
              <p>
                Licence scope, refund eligibility (see also the refund
                information page), and liability limits for guide content —
                these need proper legal drafting before any guide is sold.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
