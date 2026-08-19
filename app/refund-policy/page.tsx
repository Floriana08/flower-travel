import type { Metadata } from "next";
import { PageHero } from "../components";
import { site } from "../data";

export const metadata: Metadata = {
  title: "Refund Information",
  description: "Placeholder refund information for Altrove's guides and services, pending legal review.",
};

export default function RefundPolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Refund information — placeholder."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A calm outdoor table with warm travel light"
      >
        <p>
          This page is a placeholder. Nothing on Altrove is purchasable yet,
          so no refund policy is active — this exists so the link is real,
          not so the policy is final.
        </p>
      </PageHero>

      <article className="article-page">
        <div className="article-layout privacy-layout">
          <aside className="article-sidebar" aria-label="Refund information summary">
            <div className="article-panel">
              <h2>Contact</h2>
              <p>{site.email}</p>
            </div>
            <div className="article-panel">
              <h2>Status</h2>
              <p>Placeholder — no payment flow is live yet.</p>
            </div>
          </aside>

          <div className="article-body">
            <section>
              <h2>Guides</h2>
              <p>
                Once digital guides are purchasable, this page will state a
                clear refund window and eligibility conditions for
                downloadable products (typically limited once a file has
                been delivered, consistent with distance-selling rules for
                digital goods).
              </p>
            </section>

            <section>
              <h2>Trip design</h2>
              <p>
                The private beta is currently complimentary. Any future paid
                planning or membership terms will be confirmed before work
                begins, and documented here once that service is live.
              </p>
            </section>

            <section>
              <h2>To be added before launch</h2>
              <p>
                Exact refund windows, exceptions, and the process for
                requesting a refund — these need proper legal drafting
                before any payment is accepted.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
