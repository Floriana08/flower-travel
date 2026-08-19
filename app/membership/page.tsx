import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../studio-components";

export const metadata: Metadata = {
  title: "What Altrove is becoming",
  description:
    "Altrove is building a premium travel membership around thoughtful, highly curated trip design. The private beta is the first version of that idea.",
  alternates: {
    canonical: "https://altrove.studio/membership",
  },
};

export default function MembershipPage() {
  return (
    <main className="membership-page">
      <section className="section-shell page-top">
        <PageIntro eyebrow="What Altrove is becoming" title="A travel membership, later.">
          <p>
            Altrove is being built as a premium travel membership around
            thoughtful, highly curated planning. That membership is not open
            yet. What exists today is a private beta: we design the trip, and
            you book it.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted membership-now">
        <p className="eyebrow">Now</p>
        <h2 className="display-title">The founding beta.</h2>
        <p>
          A small group of travellers will receive one complimentary
          personalised trip design, direct support relating to that trip, and
          Altrove&rsquo;s curated recommendations. In return, we ask for candid
          feedback after you travel. That learning will shape the membership.
        </p>
        <Link className="button dark" href="/apply">
          Apply for the Private Beta
        </Link>
      </section>

      <section className="section-shell membership-later">
        <p className="eyebrow">Later</p>
        <h2 className="display-title">Membership, when it is ready.</h2>
        <p>
          The longer idea is a considered travel membership: ongoing planning,
          a tighter edit of places, and a service that knows how you like to
          travel. We will not sell tiers, perks or community until that
          product is genuinely ready.
        </p>
      </section>
    </main>
  );
}
