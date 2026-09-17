import type { Metadata } from "next";
import { PageHero } from "../components";
import { site } from "../data";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Starter privacy note for Altrove newsletter signups, enquiries, and reader messages.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="A simple privacy note for early readers."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84"
        alt="A calm outdoor table with warm travel light"
      >
        <p>
          This is a starter privacy note for launch. It should be reviewed
          before paid products, analytics, advertising pixels, affiliate
          tracking, or a full account platform are added.
        </p>
      </PageHero>

      <article className="article-page">
        <div className="article-layout privacy-layout">
          <aside className="article-sidebar" aria-label="Privacy summary">
            <div className="article-panel">
              <h2>Contact</h2>
              <p>{site.email}</p>
            </div>
            <div className="article-panel">
              <h2>Current status</h2>
              <p>
                Early-stage editorial site and newsletter signups.
              </p>
            </div>
          </aside>

          <div className="article-body">
            <section>
              <h2>What may be collected</h2>
              <p>
                When you join Letters from Altrove, the site may receive the
                details you choose to send: email address, name, and any
                message you include.
              </p>
            </section>

            <section>
              <h2>How it may be used</h2>
              <p>
                Your details may be used to send editorial letters you have
                asked for, reply to you, understand how readers like to travel,
                and shape future Altrove writing.
              </p>
            </section>

            <section>
              <h2>Consent and unsubscribe</h2>
              <p>
                Editorial emails should only be sent when you have actively
                opted in. You should be able to unsubscribe or ask for deletion
                by contacting {site.email}.
              </p>
            </section>

            <section>
              <h2>Future tools</h2>
              <p>
                If Altrove later uses an email provider, analytics,
                affiliate links, advertising, payment tools, downloadable guide
                checkout, or reader accounts, this page should be updated to
                explain those providers and purposes clearly. Advertisement
                slots on the site are reserved space only until a partner and
                tracking tools are actually in use.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
