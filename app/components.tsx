import Link from "next/link";
import type { ReactNode } from "react";
import {
  destinations,
  guideProducts,
  guides,
  itineraries,
  navCta,
  navItems,
  site,
} from "./data";
import { NewsletterForm } from "./newsletter-form";
import { getDestinationHubHref } from "./studio-structure";
import { defaultImageSizes, heroImageSizes, unsplashSrcSet } from "./image-utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

function BrandMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const src =
    tone === "light" ? "/logo-mark-light.png?v=2" : "/logo-mark.png?v=2";

  return (
    <img
      className={`brand-mark-image ${className}`.trim()}
      src={src}
      alt=""
      width={40}
      height={50}
      decoding="async"
      aria-hidden="true"
    />
  );
}

function BrandWordmark({
  showDescriptor = true,
  className = "",
}: {
  showDescriptor?: boolean;
  className?: string;
}) {
  return (
    <span className={`brand-wordmark ${className}`.trim()}>
      <span className="brand-name">Altrove</span>
      {showDescriptor ? (
        <span className="brand-descriptor">Travel Studio</span>
      ) : null}
    </span>
  );
}

export function BrandLockup({
  showTagline = true,
  tone = "dark",
  className = "",
}: {
  showTagline?: boolean;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={`brand-lockup brand-lockup-${tone} ${className}`.trim()}
      aria-label={site.fullName}
    >
      <BrandMark className="brand-lockup-mark" tone={tone} />
      <span className="brand-lockup-name">Altrove</span>
      <span className="brand-lockup-descriptor">Travel Studio</span>
      {showTagline ? (
        <>
          <span className="brand-lockup-rule" aria-hidden="true" />
          <span className="brand-lockup-tagline">{site.strapline}</span>
        </>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <BrandMark className="brand-mark" />
          <BrandWordmark />
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-action" href={navCta.href}>
          {navCta.label}
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
            <Link className="mobile-cta" href={navCta.href}>
              {navCta.label}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Link className="footer-brand" href="/" aria-label={`${site.name} home`}>
          <BrandLockup tone="light" />
        </Link>
        <p>
          Thoughtful journeys, independent recommendations and a travel studio
          being built one destination at a time.
        </p>
      </div>

      <div className="footer-col">
        <h2>Explore</h2>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href={navCta.href}>{navCta.label}</Link>
      </div>

      <div className="footer-col">
        <h2>Studio</h2>
        <Link href="/about">About</Link>
        <Link href="/club">Letters</Link>
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
            srcSet={unsplashSrcSet(image)}
            sizes={heroImageSizes}
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
      <img
        src={image}
        srcSet={unsplashSrcSet(image)}
        sizes={defaultImageSizes}
        alt={alt}
        loading="lazy"
      />
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
        href={getDestinationHubHref(destination.slug)}
        aria-label={destination.title}
      >
        <img
          src={destination.image}
          srcSet={unsplashSrcSet(destination.image)}
          sizes={defaultImageSizes}
          alt={destination.alt}
          loading="lazy"
        />
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
        <Link
          className="text-link"
          href={getDestinationHubHref(destination.slug)}
        >
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
        <img
          src={itinerary.image}
          srcSet={unsplashSrcSet(itinerary.image)}
          sizes={defaultImageSizes}
          alt={itinerary.alt}
          loading="eager"
        />
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
      <img
        src={guide.image}
        srcSet={unsplashSrcSet(guide.image)}
        sizes={defaultImageSizes}
        alt={guide.alt}
        loading="lazy"
      />
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
      <img
        src={product.image}
        srcSet={unsplashSrcSet(product.image)}
        sizes={defaultImageSizes}
        alt={product.alt}
        loading="lazy"
      />
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
  title = "Join the Altrove Club",
  description = "Every month, receive one carefully planned route, one hotel worth remembering, one restaurant worth travelling for and personal travel notes that do not always make it onto the website.",
  placeholder = "Your email address",
  footnote = "No daily emails. Just thoughtful travel inspiration and practical ideas.",
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
      <NewsletterForm placeholder={placeholder} />
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
