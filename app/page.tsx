import type { Metadata } from "next";
import Link from "next/link";
import { guides, site } from "./data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { TripEditGlimpse } from "./sample-trip";
import { lisbonSampleTrip } from "./sample-trips";
import { CountryTile } from "./studio-components";
import { studioCountries } from "./studio-structure";
import { unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  description:
    "Altrove is a private travel membership. Tell us about your trip and we'll design it around you. Founding Membership is currently complimentary and limited.",
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Personal Travel Planning & Curated Travel Guides",
    description:
      "Altrove is a private travel membership. Tell us about your trip and we'll design it around you. Founding Membership is currently complimentary and limited.",
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
    title: "Tell us about your trip",
    body: "Destination, dates, budget, who you’re travelling with and what matters to you.",
  },
  {
    title: "We design it",
    body: "Altrove researches hotels, restaurants, experiences and how we’d structure the trip.",
  },
  {
    title: "You book it",
    body: "We send you a personal Altrove Trip Edit and you make the bookings directly.",
  },
];

const memberBenefits = [
  {
    title: "Personal trip design",
    body: "A trip built around your dates, your budget and the way you actually like to travel.",
  },
  {
    title: "Curated destination recommendations",
    body: "Hotels, restaurants and places Altrove would genuinely choose — not a list of everything.",
  },
  {
    title: "Direct travel advice",
    body: "Practical notes on pacing, neighbourhoods and the decisions that change a trip.",
  },
  {
    title: "First access",
    body: "First access to future Altrove experiences and member privileges, as they open.",
  },
];

const journalFeatured = [
  {
    slug: "where-to-eat-lisbon",
    title: "Where to Eat in Lisbon",
  },
  {
    slug: "where-to-stay-lisbon",
    title: "Where to Stay in Lisbon",
  },
  {
    slug: "rome-food-walk",
    title: "A First-Timer Food Walk Through Rome",
  },
]
  .map((item) => {
    const story = guides.find((guide) => guide.slug === item.slug);
    return story ? { ...story, displayTitle: item.title } : null;
  })
  .filter((story): story is (typeof guides)[number] & { displayTitle: string } =>
    Boolean(story),
  );

export default function Home() {
  return (
    <main className="home-edit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="studio-hero">
        <HeroOceanVideo />
        <div className="studio-hero-copy">
          <h1 className="studio-hero-display">Travel, considered.</h1>
          <p className="studio-hero-lede">
            Altrove is a private travel membership for people who care about
            where they stay, eat and spend their time. Tell us about your trip
            and we&rsquo;ll design it around you.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/apply">
              Apply for Founding Membership
            </Link>
            <Link className="button ghost-on-dark" href="#how-it-works">
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell home-how" id="how-it-works">
        <div className="home-section-head">
          <p className="eyebrow">How Altrove works</p>
          <h2 className="display-title">Tell us. We design it. You book it.</h2>
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

      <section className="section-shell tinted home-benefits" id="membership-offer">
        <div className="home-section-head">
          <p className="eyebrow">Founding Membership</p>
          <h2 className="display-title">What members receive.</h2>
        </div>
        <ul className="home-benefits-grid">
          {memberBenefits.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell home-product" id="the-edit">
        <div className="home-section-head">
          <p className="eyebrow">A glimpse</p>
          <h2 className="display-title">What an Altrove Trip Edit feels like.</h2>
        </div>
        <TripEditGlimpse trip={lisbonSampleTrip} />
      </section>

      <section className="section-shell home-destinations" id="destinations">
        <div className="home-section-head">
          <p className="eyebrow">Destinations</p>
          <h2 className="display-title">Portugal. Italy. Spain.</h2>
        </div>
        <div className="destinations-index-grid home-destinations-grid home-destination-doors">
          {studioCountries.map((country) => (
            <CountryTile key={country.slug} country={country} variant="home" />
          ))}
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/destinations">
            Explore Destinations
          </Link>
        </p>
      </section>

      <section className="section-shell home-journal-feature" id="journal">
        <div className="home-section-head">
          <p className="eyebrow">Journal</p>
          <h2 className="display-title">Notes from the road.</h2>
        </div>
        <div className="home-journal-row">
          {journalFeatured.map((story) => (
            <article key={story.slug} className="home-journal-row-card">
              <Link href={`/journal/${story.slug}`}>
                <img
                  src={story.image}
                  srcSet={unsplashSrcSet(story.image)}
                  sizes="(max-width: 900px) 100vw, 32vw"
                  alt={story.alt}
                  loading="lazy"
                />
                <p className="eyebrow">{story.destination}</p>
                <h3>{story.displayTitle}</h3>
              </Link>
            </article>
          ))}
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/journal">
            Read the Journal
          </Link>
        </p>
      </section>

      <section className="section-shell home-beta" id="founding-membership">
        <p className="eyebrow">Founding Membership</p>
        <h2 className="display-title">Become a Founding Member</h2>
        <p>
          Founding Membership is currently complimentary and offered to a
          limited number of travellers.
        </p>
        <Link className="button dark" href="/apply">
          Apply for Membership
        </Link>
      </section>
    </main>
  );
}
