import type { Metadata } from "next";
import Link from "next/link";
import { membershipConfig } from "../../membership-config";
import { demoMember } from "../demo-data";

export const metadata: Metadata = {
  title: "Membership",
  robots: { index: false, follow: false },
};

export default function MemberMembershipPage() {
  return (
    <main className="members-page">
      <header className="members-hero">
        <p className="eyebrow">Account</p>
        <h1 className="display-title">Membership</h1>
        <p className="lede">
          {demoMember.firstName} · {demoMember.email}
        </p>
      </header>
      <section className="members-section">
        <article className="members-trip-card">
          <p className="eyebrow">Status</p>
          <h2>{membershipConfig.founding.name}</h2>
          <p>{membershipConfig.founding.priceLabel}</p>
          <p>
            Billing and invoices will open in the Stripe Customer Portal once
            subscriptions are connected.
          </p>
          <div className="hero-actions">
            <Link className="button dark" href="/api/membership/portal">
              Manage billing
            </Link>
            <Link className="button ghost" href="/membership">
              Membership details
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
