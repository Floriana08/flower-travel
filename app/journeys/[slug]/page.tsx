import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideProducts, routeDetails } from "../../data";
import { EnquiryCta, PageIntro } from "../../studio-components";
import { getJourney, journeys } from "../../journeys-data";
import { defaultImageSizes, unsplashSrcSet } from "../../image-utils";
import {
  getDestinationHubHref,
  getStudioCountry,
} from "../../studio-structure";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return {};

  return {
    title: journey.title,
    description: journey.summary,
    alternates: {
      canonical: `https://altrove.studio/journeys/${journey.slug}`,
    },
    openGraph: {
      title: `${journey.title} | Altrove`,
      description: journey.summary,
      images: [{ url: journey.image, alt: journey.alt }],
    },
  };
}

export default async function JourneyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const journey = getJourney(slug);

  if (!journey) notFound();

  const italy = getStudioCountry("italy");
  const coastDays =
    journey.slug === "naples-amalfi" ? italy?.example.days : undefined;
  const amalfiDetail =
    journey.routeSlug === "amalfi-coast-tours"
      ? routeDetails.find((detail) => detail.slug === "amalfi-coast-tours")
      : undefined;
  const relatedGuide =
    journey.slug === "naples-amalfi"
      ? guideProducts.find((product) => product.slug === "naples-amalfi-guide")
      : undefined;

  return (
    <main>
      <section className="journey-hero section-shell">
        <div className="journey-hero-copy">
          <Link
            className="article-back-link"
            href={getDestinationHubHref(journey.destinationSlug)}
          >
            {journey.destination}
          </Link>
          <PageIntro eyebrow={journey.statusLabel} title={journey.title}>
            <p className="journey-hero-meta">
              <span>{journey.destination}</span>
              <span>{journey.duration}</span>
              <span>{journey.bestTime}</span>
            </p>
            <p>{journey.summary}</p>
          </PageIntro>
        </div>
        <div className="journey-hero-media">
          <img
            src={journey.image}
            srcSet={unsplashSrcSet(journey.image)}
            sizes={defaultImageSizes}
            alt={journey.alt}
          />
        </div>
      </section>

      <section className="section-shell" aria-label="Suggested route">
        <div className="home-section-head">
          <p className="eyebrow">Route overview</p>
          <h2 className="display-title">How the places connect</h2>
        </div>
        <div
          className="route-line large journey-route-overview"
          aria-label="Journey route"
        >
          {journey.route.map((stop) => (
            <span key={stop}>{stop}</span>
          ))}
        </div>
      </section>

      {coastDays?.length ? (
        <section
          className="section-shell journey-merged-days tinted"
          aria-label="How the days unfold"
        >
          {amalfiDetail ? (
            <p className="journey-merged-intro">{amalfiDetail.intro}</p>
          ) : null}
          {italy?.example.lede ? (
            <p className="journey-merged-lede">{italy.example.lede}</p>
          ) : null}
          <ol className="country-mag-days">
            {coastDays.map((day, index) => (
              <li
                key={`${day.label}-${day.title}`}
                style={{ ["--day-index" as string]: index }}
              >
                <p className="country-mag-day-label">{day.label}</p>
                <h3>{day.title}</h3>
                {day.note ? <p>{day.note}</p> : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="section-shell journey-detail-grid">
        <div className="story-copy">
          <h2>Overview</h2>
          {journey.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          <h2>Who it is for</h2>
          <ul>
            {journey.forWhom.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="journey-aside">
          <div className="article-panel">
            <h2>Places to stay</h2>
            {journey.hotels.map((hotel) => (
              <div key={hotel.name}>
                <h3>{hotel.name}</h3>
                <p>{hotel.note}</p>
              </div>
            ))}
          </div>
          <div className="article-panel">
            <h2>Selected experiences</h2>
            <ul>
              {journey.experiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="article-panel">
            <h2>Practical notes</h2>
            <ul>
              {journey.practicalNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {relatedGuide ? (
            <Link className="text-link" href={`/guides/${relatedGuide.slug}`}>
              The Campania guide
            </Link>
          ) : null}
          {journey.destinationSlug ? (
            <Link
              className="text-link"
              href={getDestinationHubHref(journey.destinationSlug)}
            >
              Destination hub
            </Link>
          ) : null}
        </aside>
      </section>

      <section className="section-shell tinted">
        <EnquiryCta title="Want this journey shaped for you?">
          <p>
            Tell us your dates and how you like to travel. We&rsquo;ll design a
            personalised version around the places we know well, hotels,
            neighbourhoods and pacing included. You book directly.
          </p>
        </EnquiryCta>
      </section>
    </main>
  );
}
