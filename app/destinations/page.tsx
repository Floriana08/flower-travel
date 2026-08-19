import type { Metadata } from "next";
import { CountryTile } from "../studio-components";
import { studioCountries } from "../studio-structure";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Altrove starts with Portugal, Italy and Spain — destinations where we have strong knowledge, trusted recommendations and a clear point of view.",
  alternates: {
    canonical: "https://altrove.studio/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <main className="destinations-index">
      <header className="section-shell page-top destinations-index-hero">
        <p className="eyebrow">Destinations</p>
        <h1 className="display-title">Places we know well.</h1>
        <p className="destinations-index-lede">
          Altrove starts with destinations where we have strong knowledge,
          trusted recommendations and a clear point of view. Members can still
          request trips beyond these places.
        </p>
      </header>

      <section className="section-shell destinations-family-grid" aria-label="Destination families">
        {studioCountries.map((country) => (
          <CountryTile key={country.slug} country={country} variant="home" />
        ))}
      </section>
    </main>
  );
}
