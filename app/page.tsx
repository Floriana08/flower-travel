import type { Metadata } from "next";
import Link from "next/link";
import { guides, site } from "./data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { SampleTripEdit } from "./sample-trip";
import { lisbonSampleTrip } from "./sample-trips";
import { unsplashSrcSet } from "./image-utils";

export const metadata: Metadata = {
  description:
    "Altrove is building a new kind of travel membership. Join the private beta and receive a personalised trip designed around how you actually like to travel.",
  alternates: {
    canonical: "https://altrove.studio/",
  },
  openGraph: {
    title: "Altrove | Personal Travel Planning & Curated Travel Guides",
    description:
      "Altrove is building a new kind of travel membership. Join the private beta and receive a personalised trip designed around how you actually like to travel.",
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
    body: "Where you’re going, who you’re travelling with, your dates, budget and what you actually enjoy.",
  },
  {
    title: "We design it",
    body: "Altrove researches the trip and curates the hotels, restaurants, places and experiences we would genuinely choose.",
  },
  {
    title: "You book it",
    body: "We send you your personal Altrove travel edit. During the private beta, you make all bookings directly.",
  },
];

const journalFeatured = [
  guides.find((g) => g.slug === "where-to-eat-lisbon"),
  guides.find((g) => g.slug === "where-to-stay-lisbon"),
].filter((g): g is (typeof guides)[number] => Boolean(g));

const napoliStory = {
  href: "/journeys/naples-amalfi",
  image:
    "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=1600&q=84",
  alt: "Colourful boats in a Campania harbour",
  kicker: "Italy",
  title: "Naples and the Amalfi Coast",
  excerpt:
    "One city stay, one coastal base, and meals that decide the day — a route we would actually take.",
};

export default function Home() {
  const journalLead = journalFeatured[0];
  const journalSide = journalFeatured[1];

  return (
    <main className="home-edit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="studio-hero">
        <HeroOceanVideo />
        <div className="studio-hero-copy">
          <p className="eyebrow light">Private beta now open.</p>
          <h1 className="studio-hero-display">Travel, considered.</h1>
          <p className="studio-hero-lede">
            Tell us where you&rsquo;re going. Altrove curates where to stay,
            where to eat, what is worth doing and designs a trip around the way
            you like to travel.
          </p>
          <div className="hero-actions">
            <Link className="button light" href="/apply">
              Apply for the beta
            </Link>
            <Link className="button ghost-on-dark" href="#how-it-works">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell home-how" id="how-it-works">
        <div className="home-section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="display-title">Altrove plans your trip. You book it.</h2>
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

      <section className="section-shell tinted home-product" id="the-edit">
        <div className="home-section-head">
          <p className="eyebrow">A sample travel edit</p>
          <h2 className="display-title">What an Altrove trip looks like.</h2>
        </div>
        <SampleTripEdit trip={lisbonSampleTrip} variant="preview" />
      </section>

      <section className="section-shell home-journal-feature" id="journal">
        <div className="home-section-head">
          <p className="eyebrow">Journal</p>
          <h2 className="display-title">Taste, on the page.</h2>
          <p className="home-section-dek">
            The Journal is not the product. It is evidence of how Altrove
            chooses — hotels, tables, and the notes we would keep.
          </p>
        </div>
        <div className="home-journal-editorial">
          {journalLead ? (
            <article className="home-journal-lead">
              <Link href={`/journal/${journalLead.slug}`}>
                <img
                  src={journalLead.image}
                  srcSet={unsplashSrcSet(journalLead.image)}
                  sizes="(max-width: 900px) 100vw, 58vw"
                  alt={journalLead.alt}
                  loading="lazy"
                />
                <p className="eyebrow">
                  {journalLead.destination} · {journalLead.category}
                </p>
                <h3>Where to Eat in Lisbon</h3>
                <p>{journalLead.excerpt}</p>
              </Link>
            </article>
          ) : null}
          <div className="home-journal-side">
            {journalSide ? (
              <article className="home-journal-side-card">
                <Link href={`/journal/${journalSide.slug}`}>
                  <img
                    src={journalSide.image}
                    srcSet={unsplashSrcSet(journalSide.image)}
                    sizes="(max-width: 900px) 100vw, 32vw"
                    alt={journalSide.alt}
                    loading="lazy"
                  />
                  <p className="eyebrow">{journalSide.category}</p>
                  <h3>Where to Stay in Lisbon</h3>
                </Link>
              </article>
            ) : null}
            <article className="home-journal-side-card">
              <Link href={napoliStory.href}>
                <img
                  src={napoliStory.image}
                  srcSet={unsplashSrcSet(napoliStory.image)}
                  sizes="(max-width: 900px) 100vw, 32vw"
                  alt={napoliStory.alt}
                  loading="lazy"
                />
                <p className="eyebrow">{napoliStory.kicker}</p>
                <h3>{napoliStory.title}</h3>
              </Link>
            </article>
          </div>
        </div>
        <p className="home-section-link">
          <Link className="text-link" href="/journal">
            Explore the Journal
          </Link>
        </p>
      </section>

      <section className="section-shell home-beta" id="private-beta">
        <p className="eyebrow">Founding Beta</p>
        <h2 className="display-title">Help us build Altrove.</h2>
        <p>
          We&rsquo;re inviting a small group of travellers to experience
          Altrove before membership launches.
        </p>
        <ul className="home-beta-receive">
          <li>One complimentary personalised trip design.</li>
          <li>Direct travel support relating to that trip.</li>
          <li>Access to Altrove&rsquo;s curated recommendations.</li>
        </ul>
        <p>
          In return, Altrove will ask for candid feedback after the trip.
        </p>
        <p className="home-beta-scarcity">10 founding beta places available.</p>
        <Link className="button dark" href="/apply">
          Apply for the Private Beta
        </Link>
      </section>
    </main>
  );
}
