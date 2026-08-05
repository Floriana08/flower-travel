import type { Metadata } from "next";
import { GuideProductCard } from "../components";
import { guideProducts } from "../data";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Altrove digital guides — deeper than the journal, lighter than Journey Design. Starting with Campania.",
  alternates: {
    canonical: "https://altrove.studio/guides",
  },
};

export default function GuidesPage() {
  return (
    <main>
      <section className="section-shell page-top">
        <p className="eyebrow">Guides</p>
        <h1 className="display-title">The first guide, written properly.</h1>
        <p className="journeys-studio-single-lede">
          A guide is deeper than a journal entry and lighter than Journey
          Design — one region, considered in full. We are starting with one,
          not twelve, and will only add another once it earns its place.
        </p>
      </section>

      <section className="section-shell tinted">
        <div className="editorial-story-grid guides-grid">
          {guideProducts.map((product) => (
            <GuideProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
