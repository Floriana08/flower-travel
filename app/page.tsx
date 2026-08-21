import type { Metadata } from "next";
import Link from "next/link";
import { site } from "./data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { CountryTile } from "./studio-components";
import { studioCountries } from "./studio-structure";
import { unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  description:
    "A private lifestyle travel concierge for people who care about where they stay, eat and spend their time. Founding Membership is currently complimentary and limited.",
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Lifestyle travel concierge",
    description:
      "Tell us where you're going. Altrove filters the noise and shapes the trip around you.",
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
    {
      "@type": "Person",
      name: "Flor",
      jobTitle: "Founder",
      worksFor: {
        "@type": "Organization",
        name: site.name,
      },
      url: "https://altrove.studio/about",
    },
  ],
};

const howItWorks = [
  {
    title: "Tell us",
    body: "Where you’re going, who you’re travelling with, your budget and what you actually enjoy.",
  },
  {
    title: "We curate",
    body: "Altrove researches the hotels, restaurants, neighbourhoods and experiences that fit you.",
  },
  {
    title: "You travel",
    body: "You receive your personal Altrove recommendations and make the bookings directly.",
  },
];

const tripPreview = [
  { category: "Stay", name: "Verride" },
  { category: "Eat", name: "O Velho Eurico" },
  { category: "Wander", name: "Príncipe Real" },
];

const editPieces = [
  {
    href: "/journal/where-to-eat-lisbon",
    title: "Where we’d eat in Lisbon",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Restaurant table set for an evening meal",
  },
  {
    href: "/journal/where-to-stay-lisbon",
    title: "The hotels worth checking into",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant hotel interior with warm lighting",
  },
  {
    href: "/destinations/portugal",
    title: "A weekend worth leaving Lisbon for",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
    alt: "Lisbon rooftops in warm evening light",
  },
  {
    href: "/destinations/italy",
    title: "Naples, without the checklist",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    alt: "Cliffside villages on the Amalfi Coast",
  },
];

const foundingBenefits = [
  "Personal travel curation",
  "Direct travel advice",
  "Private destination recommendations",
  "First access to future Altrove experiences and member privileges",
];

export default function Home() {
  return (
    <main className="home-edit home-concierge">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="studio-hero">
        <HeroOceanVideo />
        <div className="studio-hero-copy">
          <h1 className="studio-hero-display">Travel, considered.</h1>
          <p className="studio-hero-lede">
            A private lifestyle travel concierge for people who care about where
            they stay, eat and spend their time.
          </p>
          <p className="studio-hero-support">
            Tell us where you&rsquo;re going. Altrove filters the noise and
            shapes the trip around you.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/apply">
              Become a Founding Member
            </Link>
            <Link className="button ghost-on-dark" href="#discover">
              Discover Altrove
            </Link>
          </div>
          <p className="studio-hero-note">
            Founding Membership is currently complimentary and limited.
          </p>
        </div>
      </section>

      <section className="section-shell home-problem" id="discover">
        <h2 className="display-title">
          The internet gives you everything. Altrove gives you what matters.
        </h2>
        <p>
          Travel planning now means dozens of tabs, saved Instagram posts,
          contradictory reviews and endless lists. Altrove does the filtering —
          so you spend less time searching and more time travelling well.
        </p>
      </section>

      <section className="section-shell home-how" id="how-it-works">
        <div className="home-section-head">
          <p className="eyebrow">How Altrove works</p>
          <h2 className="display-title">Tell us. We curate. You travel.</h2>
        </div>
        <ol className="home-how-grid">
          {howItWorks.map((step, index) => (
            <li key={step.title}>
              <span className="home-how-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-shell home-trip-tease" id="inside-a-trip">
        <div className="home-section-head">
          <p className="eyebrow">Inside an Altrove trip</p>
          <h2 className="display-title">Lisbon / 4 days</h2>
          <p className="home-trip-profile">
            Couple · Food-led · Slow pace · First visit
          </p>
        </div>
        <ul className="home-trip-picks">
          {tripPreview.map((pick) => (
            <li key={pick.name}>
              <span>{pick.category}</span>
              <strong>{pick.name}</strong>
            </li>
          ))}
        </ul>
        <aside className="home-trip-note">
          <p className="eyebrow">Altrove note</p>
          <p>
            Book the important dinner. Leave one afternoon completely free.
            Lisbon rewards people who stop trying to finish the city.
          </p>
        </aside>
        <p className="home-section-link">
          <Link className="text-link" href="/trips/lisbon">
            See how we&rsquo;d shape Lisbon
          </Link>
        </p>
      </section>

      <section className="section-shell tinted home-edit-section" id="the-edit">
        <div className="home-section-head">
          <p className="eyebrow">Lifestyle</p>
          <h2 className="display-title">The Altrove Edit</h2>
        </div>
        <div className="home-edit-grid">
          {editPieces.map((piece) => (
            <article key={piece.href} className="home-edit-card">
              <Link href={piece.href}>
                <img
                  src={piece.image}
                  srcSet={unsplashSrcSet(piece.image)}
                  sizes="(max-width: 900px) 100vw, 25vw"
                  alt={piece.alt}
                  loading="lazy"
                />
                <h3>{piece.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell home-destinations" id="destinations">
        <div className="home-section-head">
          <p className="eyebrow">Destinations</p>
          <h2 className="display-title">Places we know</h2>
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
        <h2 className="display-title">Founding Membership</h2>
        <p>
          Altrove is opening a limited number of Founding Memberships for
          travellers who want a more personal way to plan and experience travel.
        </p>
        <p>Founding Membership is currently complimentary.</p>
        <ul className="home-founding-list">
          {foundingBenefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="button dark" href="/apply">
          Become a Founding Member
        </Link>
      </section>
    </main>
  );
}
