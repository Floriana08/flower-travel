import Link from "next/link";
import type { ReactNode } from "react";
import type { Journey } from "./journeys-data";
import { guides } from "./data";
import type { StudioCountry } from "./studio-structure";
import { defaultImageSizes, unsplashSrcSet } from "./image-utils";

type Guide = (typeof guides)[number];

export function CountryTile({ country }: { country: StudioCountry }) {
  const regionNames = country.collections.map((c) => c.title);
  const availableNow = country.collections.filter((c) => !c.status);
  const regionNote = availableNow.length
    ? `${availableNow.map((c) => c.title).join(", ")}${
        regionNames.length > availableNow.length ? ", and more coming" : ""
      }`
    : `${regionNames[0] ?? ""} in development`;

  return (
    <Link
      className="country-tile"
      href={`/destinations/${country.slug}`}
      aria-label={country.title}
    >
      <img
        src={country.image}
        srcSet={unsplashSrcSet(country.image)}
        sizes={defaultImageSizes}
        alt={country.alt}
        loading="lazy"
      />
      <div className="country-tile-copy">
        <h3>{country.title}</h3>
        <p>{country.short}</p>
        <p className="country-tile-regions">{regionNote}</p>
      </div>
    </Link>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="display-title">{title}</h1>
      {children ? <div className="page-intro-body">{children}</div> : null}
    </header>
  );
}

export function JourneyCard({
  journey,
  ctaLabel,
}: {
  journey: Journey;
  ctaLabel?: string;
}) {
  const label =
    ctaLabel ??
    (journey.status === "available" ? "Explore the journey" : "View details");

  return (
    <article className="journey-card">
      <Link
        className="journey-card-media"
        href={`/journeys/${journey.slug}`}
        aria-label={journey.title}
      >
        <img
          src={journey.image}
          srcSet={unsplashSrcSet(journey.image)}
          sizes={defaultImageSizes}
          alt={journey.alt}
          loading="lazy"
        />
      </Link>
      <div className="journey-card-body">
        <div className="journey-card-meta">
          <span>{journey.destination}</span>
          <span>{journey.duration}</span>
        </div>
        <p className="journey-status">{journey.statusLabel}</p>
        <h3>
          <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
        </h3>
        <p>{journey.summary}</p>
        <Link className="text-link" href={`/journeys/${journey.slug}`}>
          {label}
        </Link>
      </div>
    </article>
  );
}

export function DestinationFeature({
  title,
  href,
  image,
  alt,
  children,
}: {
  title: string;
  href: string;
  image: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <article className="destination-feature">
      <Link className="destination-feature-media" href={href} aria-label={title}>
        <img
          src={image}
          srcSet={unsplashSrcSet(image)}
          sizes={defaultImageSizes}
          alt={alt}
          loading="lazy"
        />
      </Link>
      <div className="destination-feature-copy">
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <div>{children}</div>
        <Link className="text-link" href={href}>
          Explore {title}
        </Link>
      </div>
    </article>
  );
}

export function EditorialStoryCard({ guide }: { guide: Guide }) {
  return (
    <article className="editorial-story-card">
      <Link
        className="editorial-story-card-link"
        href={`/journal/${guide.slug}`}
      >
        <img
          src={guide.image}
          srcSet={unsplashSrcSet(guide.image)}
          sizes={defaultImageSizes}
          alt={guide.alt}
          loading="lazy"
        />
        <div>
          <p className="story-card-meta">
            <span>{guide.category}</span>
            <span>{guide.readTime}</span>
          </p>
          <h3>{guide.title}</h3>
          <p>{guide.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

export function EnquiryCta({
  eyebrow = "Plan a trip",
  title,
  children,
  href = "/plan-a-trip",
  cta = "Tell us about your trip",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="enquiry-cta">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-title">{title}</h2>
        {children ? <div className="enquiry-cta-copy">{children}</div> : null}
      </div>
      <Link className="button dark" href={href}>
        {cta}
      </Link>
    </section>
  );
}

export function StudioNewsletter({
  title = "Letters from Altrove",
  description = "Occasional notes on journeys, places and the way we like to travel — sent without noise.",
  id,
  children,
}: {
  title?: string;
  description?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="studio-newsletter section-shell">
      <div className="studio-newsletter-inner">
        <div>
          <p className="eyebrow">Correspondence</p>
          <h2 className="display-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
