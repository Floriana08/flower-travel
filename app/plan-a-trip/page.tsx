import type { Metadata } from "next";
import Link from "next/link";
import { membershipConfig, studioPositioning } from "../membership-config";

export const metadata: Metadata = {
  title: "Plan a Trip",
  description:
    "Tell Altrove where you're going and how you like to travel. We'll shape a thoughtful route with places worth knowing. Members receive preferential planning rates.",
  alternates: {
    canonical: "https://altrove.studio/plan-a-trip",
  },
};

export default function PlanATripPage() {
  return (
    <main className="plan-trip-page">
      <section className="section-shell page-top">
        <p className="eyebrow">Plan a Trip</p>
        <h1 className="display-title">We&rsquo;ll help you shape the trip.</h1>
        <p className="lede">
          Tell Altrove where you&rsquo;re going, how you like to travel and what
          matters to you. We&rsquo;ll turn it into a thoughtful route with
          places worth knowing.
        </p>
        <p className="membership-hero-note">{studioPositioning.notAgency}</p>
        <p>
          Members receive preferential planning rates — currently{" "}
          {membershipConfig.planning.memberFromLabel}.
        </p>
        <div className="hero-actions">
          <Link className="button dark" href="/apply">
            Start planning
          </Link>
          <Link className="button ghost" href="/membership">
            Preferential rates with Membership
          </Link>
        </div>
      </section>
    </main>
  );
}
