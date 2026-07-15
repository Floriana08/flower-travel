import Link from "next/link";
import type { ReactNode } from "react";
import { destinations, guides, itineraries, navItems, site } from "./data";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        <img className="brand-logo" src="/logo.svg" alt="" aria-hidden="true" />
        <span>
          <span className="brand-title">{site.name}</span>
          <span className="brand-kicker">{site.strapline}</span>
        </span>
      </Link>

      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-action" href="/travel-consultations">
        Book a consult
      </Link>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/travel-consultations">Book a consult</Link>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Link className="brand footer-brand" href="/">
          <img className="brand-logo" src="/logo.svg" alt="" aria-hidden="true" />
          <span>
            <span className="brand-title">{site.name}</span>
            <span className="brand-kicker">{site.strapline}</span>
          </span>
        </Link>
        <p>
          Researched routes, honest notes, and editorial planning for travelers
          who want more than a packaged holiday.
        </p>
      </div>

      <div className="footer-col">
        <h2>Explore</h2>
        {navItems.slice(0, 4).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="footer-col">
        <h2>Studio</h2>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-intro">{children}</div> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: string;
  alt: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="lede">{children}</div>
      </div>
      <figure className="page-hero-image reveal delay-1">
        <img src={image} alt={alt} />
      </figure>
    </section>
  );
}

export function DestinationCard({
  destination,
  featured = false,
}: {
  destination: (typeof destinations)[number];
  featured?: boolean;
}) {
  return (
    <article className={`destination-card card ${featured ? "featured" : ""}`}>
      <a href={`/destinations#${destination.slug}`} aria-label={destination.title}>
        <img src={destination.image} alt={destination.alt} loading="lazy" />
      </a>
      <div className="card-body">
        <div className="meta-line">
          <span>{destination.region}</span>
          <span>{destination.mood}</span>
        </div>
        <h3>{destination.title}</h3>
        <p>{destination.excerpt}</p>
        <ul className="inline-list" aria-label={`${destination.title} highlights`}>
          {destination.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ItineraryCard({
  itinerary,
}: {
  itinerary: (typeof itineraries)[number];
}) {
  return (
    <article className="itinerary-card card">
      <img src={itinerary.image} alt={itinerary.alt} loading="lazy" />
      <div className="card-body">
        <div className="meta-line">
          <span>{itinerary.days}</span>
          <span>{itinerary.pace}</span>
        </div>
        <h3>{itinerary.title}</h3>
        <p>{itinerary.summary}</p>
        <div className="route-line" aria-label={`Route for ${itinerary.title}`}>
          {itinerary.route.map((stop) => (
            <span key={stop}>{stop}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function GuideCard({
  guide,
  compact = false,
}: {
  guide: (typeof guides)[number];
  compact?: boolean;
}) {
  return (
    <article className={`guide-card card ${compact ? "compact" : ""}`}>
      <img src={guide.image} alt={guide.alt} loading="lazy" />
      <div className="card-body">
        <div className="meta-line">
          <span>{guide.category}</span>
          <span>{guide.readTime}</span>
        </div>
        <h3>{guide.title}</h3>
        <p>{guide.excerpt}</p>
        <Link className="text-link" href={`/travel-guides/${guide.slug}`}>
          Read the guide
        </Link>
      </div>
    </article>
  );
}

export function NewsletterBand() {
  return (
    <section className="newsletter-band" id="newsletter">
      <div>
        <p className="eyebrow">The postcard list</p>
        <h2>Seasonal routes, hotel notes, and beautiful reasons to go.</h2>
        <p>
          A calm monthly letter with destination ideas, planning frameworks, and
          the newest guides before they are published elsewhere.
        </p>
      </div>
      <form className="newsletter-form" action="/contact" method="get">
        <label>
          <span>Email address</span>
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <button className="button dark" type="submit">
          Join the list
        </button>
      </form>
    </section>
  );
}

export function ConsultationCta() {
  return (
    <section className="consultation-strip">
      <div>
        <p className="eyebrow">Travel consultations</p>
        <h2>Need a sharper plan before you book?</h2>
        <p>
          Bring your dates, destination ideas, hotel shortlist, or half-built
          route. Leave with clearer choices, better pacing, and next steps that
          feel personal rather than packaged.
        </p>
      </div>
      <Link className="button light" href="/travel-consultations">
        Book a consultation
      </Link>
    </section>
  );
}
