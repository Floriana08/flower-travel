import type { Metadata } from "next";
import { CountryTile } from "../studio-components";
import { studioCountries } from "../studio-structure";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Altrove's focus destinations — Italy, Spain and Portugal — the places we know well enough to plan properly.",
  alternates: {
    canonical: "https://altrove.studio/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <main className="destinations-index">
      <header className="section-shell page-top destinations-index-hero">
        <p className="eyebrow">Destinations</p>
        <h1 className="display-title">Begin with a place.</h1>
        <p className="destinations-index-lede">
          Explore our notes, guides and journeys through the parts of Europe
          we know best. We work one country at a time, and only publish where
          we can speak with real authority.
        </p>
      </header>

      <section className="section-shell destinations-index-grid" aria-label="Countries">
        {studioCountries.map((country) => (
          <CountryTile key={country.slug} country={country} />
        ))}
      </section>
    </main>
  );
}
