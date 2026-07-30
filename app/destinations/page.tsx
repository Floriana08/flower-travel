import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../components";
import { getDestination } from "../data";
import { getHomepageJourneys } from "../journeys-data";
import { DestinationFeature, PageIntro } from "../studio-components";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "A curated collection of destinations Altrove knows well — Portugal, Italy, Spain and selected places researched in person.",
  alternates: {
    canonical: "https://flowertravel.studio/destinations",
  },
};

const primarySlugs = [
  "portugal",
  "lisbon",
  "amalfi-coast",
  "naples",
  "spain",
  "madeira",
] as const;

const secondarySlugs = [
  "italy",
  "rome",
  "andalusia",
  "milan",
  "paris",
  "london",
] as const;

const reasons: Record<string, string> = {
  portugal:
    "The clearest mainland chapter so far — trains, food and pacing that reward staying longer.",
  lisbon:
    "A neighbourhood-first city base for slow mornings and long lunches.",
  "amalfi-coast":
    "Cliff light and ferry days, written with honest limits on how much coast to attempt.",
  naples:
    "Flor’s home region — intensity, food and a working city that rewards curiosity.",
  spain:
    "Food, landscape and character; journeys still taking shape beyond the obvious defaults.",
  madeira:
    "An island chapter that deserves its own week, not a rushed mainland add-on.",
};

export default function DestinationsPage() {
  const primary = primarySlugs
    .map((slug) => getDestination(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const secondary = secondarySlugs
    .map((slug) => getDestination(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedJourneys = getHomepageJourneys();

  return (
    <main>
      <section className="section-shell page-top">
        <PageIntro
          eyebrow="Destinations"
          title="Places we know well enough to recommend."
        >
          <p>
            Altrove does not cover the whole world. Destinations appear here when
            they have been visited, researched and written with enough care to
            stand behind the recommendation.
          </p>
        </PageIntro>
      </section>

      <section className="section-shell tinted">
        <SectionHeading eyebrow="Focus" title="The current collection">
          <p>Six places shaping the first journeys and planning work.</p>
        </SectionHeading>
        <div className="destination-feature-list">
          {primary.map((destination) => {
            const linked = relatedJourneys
              .filter((journey) => journey.destinationSlug === destination.slug)
              .map((journey) => journey.title);

            return (
              <DestinationFeature
                key={destination.slug}
                title={destination.title.split(",")[0]}
                href={`/destinations/${destination.slug}`}
                image={destination.image}
                alt={destination.alt}
              >
                <p>{reasons[destination.slug] ?? destination.excerpt}</p>
                <p className="muted-note">
                  Journeys:{" "}
                  {linked.length
                    ? linked.join(", ")
                    : "Notes and routes in development"}
                </p>
              </DestinationFeature>
            );
          })}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Also in the library" title="Further places">
          <p>
            Present in the journal and route library, with quieter emphasis while
            the studio concentrates on the first collection.
          </p>
        </SectionHeading>
        <ul className="destination-quiet-list">
          {secondary.map((destination) => (
            <li key={destination.slug}>
              <Link href={`/destinations/${destination.slug}`}>
                <strong>{destination.title.split(",")[0]}</strong>
                <span>{destination.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="section-footer-link">
          <Link className="text-link" href="/journeys">
            Explore journeys
          </Link>
          {" · "}
          <Link className="text-link" href="/routes">
            Full route library
          </Link>
        </p>
      </section>
    </main>
  );
}
