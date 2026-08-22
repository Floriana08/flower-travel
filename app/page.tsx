import type { Metadata } from "next";
import Link from "next/link";
import { site } from "./data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { membershipConfig, studioPositioning } from "./membership-config";
import { CountryTile } from "./studio-components";
import { studioCountries } from "./studio-structure";

export const metadata: Metadata = {
  description: studioPositioning.short,
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | A travel studio for people who care where they go",
    description: studioPositioning.short,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=84",
        width: 1600,
        height: 1067,
        alt: "Warm afternoon light on a Mediterranean coastal street",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: "https://altrove.studio/",
      description: site.studioLine,
      email: site.email,
    },
  ],
};

const foundingBenefits = [
  "Access to all Altrove destination guides",
  "Private maps and recommendations",
  "Member-only hotel, restaurant and neighbourhood notes",
  "Personal travel advice",
  "Preferential pricing on bespoke itinerary planning",
  "Early access to Altrove journeys and events",
  "Founding Member status",
];

export default function Home() {
  return (
    <main className="home-edit home-studio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="studio-hero">
        <HeroOceanVideo />
        <div className="studio-hero-copy">
          <p className="studio-hero-brand">Altrove</p>
          <h1 className="studio-hero-display">
            A travel studio for people who care where they go.
          </h1>
          <p className="studio-hero-lede">
            Curated places, thoughtful journeys and personal travel advice
            across Europe.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="#discover">
              Explore Altrove
            </Link>
            <Link className="button ghost-on-dark" href="/membership">
              Join the Membership
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell home-problem" id="discover">
        <p className="eyebrow">The Altrove way</p>
        <h2 className="display-title">Travel less randomly.</h2>
        <p>
          Altrove is built around the belief that a great trip isn&rsquo;t about
          fitting everything in. It&rsquo;s about choosing the right
          neighbourhood, finding the restaurant worth crossing town for,
          staying somewhere with character, and leaving enough room for the
          unexpected.
        </p>
        <p className="home-section-link">
          <Link className="text-link" href="/about">
            Our approach
          </Link>
        </p>
      </section>

      <section className="section-shell home-destinations" id="destinations">
        <div className="home-section-head">
          <p className="eyebrow">Featured destinations</p>
          <h2 className="display-title">Portugal. Italy. Spain.</h2>
        </div>
        <div className="destinations-index-grid home-destinations-grid home-destination-doors">
          {studioCountries.map((country) => (
            <CountryTile key={country.slug} country={country} variant="home" />
          ))}
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/destinations">
            Explore destinations
          </Link>
        </p>
      </section>

      <section
        className="section-shell home-founding"
        id="founding-membership"
      >
        <p className="eyebrow">Membership</p>
        <h2 className="display-title">Join Altrove</h2>
        <p>
          Membership gives travellers access to Altrove&rsquo;s private
          collection of recommendations, destination guides, maps and personal
          travel advice.
        </p>

        <article className="home-founding-card">
          <p className="eyebrow">Founding Membership</p>
          <p className="home-founding-price">
            {membershipConfig.founding.priceLabel}
          </p>
          <ul className="home-founding-list">
            {foundingBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="home-founding-limit">
            {membershipConfig.founding.limitNote}
          </p>
          <div className="hero-actions">
            <Link className="button dark" href="/membership#join">
              Become a Founding Member
            </Link>
            <Link className="button ghost" href="/membership">
              Discover Membership
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
