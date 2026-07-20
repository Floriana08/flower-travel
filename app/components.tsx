import Link from "next/link";
import type { ReactNode } from "react";
import {
  destinations,
  guideProducts,
  guides,
  itineraries,
  navItems,
  site,
} from "./data";

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
        </span>
      </Link>

      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-action" href="/club">
        Join the Club
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
          <img
            className="brand-logo"
            src="/logo.svg"
            alt=""
            aria-hidden="true"
          />
          <span>
            <span className="brand-title">{site.name}</span>
          </span>
        </Link>
        <p>
          Researched routes, honest notes, and editorial planning for travelers
          who want taste, local feeling, and a lighter footprint.
        </p>
      </div>

      <div className="footer-col">
        <h2>Explore</h2>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="footer-col">
        <h2>Studio</h2>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
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
  className,
  imageObjectPosition,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
  imageObjectPosition?: string;
}) {
  const heroClassName = [
    "page-hero",
    image ? "" : "page-hero-text",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={heroClassName}>
      <div className="page-hero-copy reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children ? <div className="lede">{children}</div> : null}
      </div>
      {image ? (
        <figure className="page-hero-image reveal delay-1">
          <img
            src={image}
            alt={alt ?? ""}
            style={
              imageObjectPosition
                ? { objectPosition: imageObjectPosition }
                : undefined
            }
          />
        </figure>
      ) : null}
    </section>
  );
}

export function DestinationTile({
  href,
  label,
  image,
  alt,
}: {
  href: string;
  label: string;
  image: string;
  alt: string;
}) {
  return (
    <Link className="destination-tile" href={href} aria-label={label}>
      <img src={image} alt={alt} loading="lazy" />
      <span className="destination-tile-label">{label}</span>
    </Link>
  );
}

export function DestinationCard({
  destination,
  featured = false,
  ctaLabel,
}: {
  destination: (typeof destinations)[number];
  featured?: boolean;
  ctaLabel?: string;
}) {
  return (
    <article className={`destination-card card ${featured ? "featured" : ""}`}>
      <Link
        href={`/destinations/${destination.slug}`}
        aria-label={destination.title}
      >
        <img src={destination.image} alt={destination.alt} loading="lazy" />
      </Link>
      <div className="card-body">
        <div className="meta-line">
          <span>{destination.region}</span>
          <span>{destination.mood}</span>
        </div>
        <h3>{destination.title}</h3>
        <p>{destination.excerpt}</p>
        <ul
          className="inline-list"
          aria-label={`${destination.title} highlights`}
        >
          {destination.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/destinations/${destination.slug}`}>
          {ctaLabel ?? `Explore ${destination.title.split(",")[0]}`}
        </Link>
      </div>
    </article>
  );
}

export function ItineraryCard({
  itinerary,
  ctaLabel = "View route",
}: {
  itinerary: (typeof itineraries)[number];
  ctaLabel?: string;
}) {
  return (
    <article className="itinerary-card card">
      <Link href={`/routes/${itinerary.slug}`} aria-label={itinerary.title}>
        <img src={itinerary.image} alt={itinerary.alt} loading="eager" />
      </Link>
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
        <Link className="text-link" href={`/routes/${itinerary.slug}`}>
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export function GuideCard({
  guide,
  compact = false,
  ctaLabel = "Read the guide",
}: {
  guide: (typeof guides)[number];
  compact?: boolean;
  ctaLabel?: string;
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
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export function GuideProductCard({
  product,
}: {
  product: (typeof guideProducts)[number];
}) {
  return (
    <article className="guide-product-card card">
      <img src={product.image} alt={product.alt} loading="lazy" />
      <div className="card-body">
        <div className="meta-line">
          <span>{product.format}</span>
          <span>{product.status}</span>
        </div>
        <h3>{product.title}</h3>
        <p>{product.excerpt}</p>
        <ul className="inline-list" aria-label={`${product.title} includes`}>
          {product.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="product-card-footer">
          <span>{product.price}</span>
          <Link className="button dark" href={product.href}>
            {product.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function NewsletterBand({
  title = "Join the Flower Travel Club",
  description = "A thoughtful note for travellers who prefer character over crowds. Receive new destination stories, practical planning advice, hotel discoveries and occasional Club-only travel edits.",
  placeholder = "Your email address",
  footnote = "No clutter. Just carefully chosen travel inspiration.",
}: {
  title?: string;
  description?: string;
  placeholder?: string;
  footnote?: string;
}) {
  return (
    <section className="newsletter-band" id="newsletter">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {footnote ? <p className="newsletter-footnote">{footnote}</p> : null}
      </div>
      <form
        className="newsletter-form"
        action={`mailto:${site.email}`}
        method="post"
      >
        <label>
          <span>Email address</span>
          <input
            name="email"
            type="email"
            placeholder={placeholder}
            required
          />
        </label>
        <label className="consent-check">
          <input name="consent" type="checkbox" required />
          <span>
            I agree to receive Flower Travel emails and understand that I can
            unsubscribe at any time.
          </span>
        </label>
        <button className="button dark" type="submit">
          Join the Club
        </button>
      </form>
    </section>
  );
}

export function ConsultationCta() {
  return (
    <section className="consultation-strip">
      <div>
        <p className="eyebrow">The Club</p>
        <h2>A quieter letter for better trips.</h2>
        <p>
          Destination stories, practical planning notes and hotel discoveries
          for travellers who prefer character over crowds.
        </p>
      </div>
      <Link className="button light" href="/club">
        Join the Club
      </Link>
    </section>
  );
}
