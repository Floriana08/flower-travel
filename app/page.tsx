import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup } from "./components";
import { NewsletterForm } from "./newsletter-form";
import { site } from "./data";
import { HeroOceanVideo } from "./hero-ocean-video";
import { StudioNewsletter } from "./studio-components";
import { studioCountries } from "./studio-structure";

export const metadata: Metadata = {
  title: "Altrove | Boutique travel studio",
  description:
    "A boutique travel studio creating curated journeys through places personally explored.",
  alternates: {
    canonical: "https://flowertravel.studio/",
  },
  openGraph: {
    title: "Altrove | Boutique travel studio",
    description:
      "Curated journeys through places personally explored. Not travelling more — travelling better.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=84",
        width: 1600,
        height: 1067,
        alt: "Cliffside villages on the Amalfi Coast",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      name: site.name,
      url: "https://flowertravel.studio/",
      description: site.studioLine,
      email: site.email,
    },
    {
      "@type": "Person",
      name: "Flor",
      jobTitle: "Founder and editor",
      worksFor: {
        "@type": "Organization",
        name: site.name,
      },
      url: "https://flowertravel.studio/about",
    },
  ],
};

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
          <BrandLockup tone="light" className="hero-lockup" showTagline={false} />
          <p className="eyebrow light">Boutique travel studio</p>
          <h1 className="studio-hero-lede">
            Curated journeys through places personally explored.
          </h1>
          <div className="hero-actions">
            <Link className="button light" href="/journeys">
              Explore journeys
            </Link>
            <Link className="button ghost-on-dark" href="/plan-a-trip">
              Plan a trip
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell home-collections" id="destinations">
        <div className="home-section-head">
          <p className="eyebrow">Destinations</p>
          <h2 className="display-title">Where we travel</h2>
          <p className="home-section-dek">
            Three places Altrove knows well enough to shape a journey around.
          </p>
        </div>
        <div className="home-collection-grid">
          {studioCountries.map((country) => (
            <Link
              key={country.slug}
              className="home-collection-card"
              href={`/journeys/${country.slug}`}
            >
              <span className="home-collection-media">
                <img src={country.image} alt={country.alt} loading="lazy" />
              </span>
              <span className="home-collection-copy">
                <span className="home-collection-title">{country.title}</span>
                <span className="home-collection-short">{country.short}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell tinted home-philosophy" id="philosophy">
        <p className="about-pull home-philosophy-pull">
          Altrove isn’t about travelling more. It’s about travelling better.
        </p>
        <p>
          Every itinerary begins with a real journey — hotels, neighbourhoods and
          routes experienced before they are recommended.
        </p>
      </section>

      <section className="section-shell home-plan" id="plan">
        <p className="eyebrow">Plan a trip</p>
        <h2 className="display-title">Tell us how you like to travel.</h2>
        <p>We’ll shape a personalised itinerary around the places we know well.</p>
        <Link className="button dark" href="/plan-a-trip">
          Plan My Trip
        </Link>
      </section>

      <StudioNewsletter>
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
