import type { Metadata } from "next";
import Link from "next/link";
import { EditorialCarousel } from "../EditorialCarousel";
import { NewsletterBand, PageHero } from "../components";
import { guides } from "../data";

export const metadata: Metadata = {
  title: "Travel Journal",
  description:
    "Thoughtful stories for travelling better: destination ideas, practical advice, honeymoon inspiration, lower-impact travel, packing edits, and personal notes from Flower Travel.",
};

const journalCategories = [
  { label: "Planning", href: "#planning-well" },
  { label: "Lower-impact travel", href: "#lower-impact" },
  { label: "Honeymoons", href: "#featured-story" },
  { label: "Personal stories", href: "#personal-stories" },
  { label: "Packing", href: "#planning-well" },
] as const;

const featuredSlug = "choosing-a-honeymoon-route";

const latestSlugs = [
  "solo-paris-weekend",
  "choosing-a-honeymoon-route",
  "train-travel-europe",
  "travel-insurance-worth-it",
  "sustainable-travel-basics",
  "carry-on-packing-edit",
];

const planningSlugs = [
  "travel-insurance-worth-it",
  "train-travel-europe",
  "carry-on-packing-edit",
  "choosing-a-honeymoon-route",
];

const lowerImpactSlugs = [
  "sustainable-travel-basics",
  "train-travel-europe",
  "patagonia-without-rushing",
  "japan-rail-first-edit",
];

const personalStorySlugs = [
  "solo-paris-weekend",
  "choosing-a-honeymoon-route",
  "morocco-riad-first-edit",
  "galapagos-twelve-days",
];

const destinationStorySlugs = [
  "where-to-stay-lisbon",
  "madeira-first-timers",
  "rome-food-walk",
  "galapagos-twelve-days",
  "japan-rail-first-edit",
  "morocco-riad-first-edit",
];

function storiesFromSlugs(slugs: string[]) {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
}

function JournalStoryCard({ guide }: { guide: (typeof guides)[number] }) {
  return (
    <article className="story-card">
      <Link className="story-card-link" href={`/travel-guides/${guide.slug}`}>
        <img src={guide.image} alt={guide.alt} loading="lazy" />
        <div className="story-card-body">
          <p className="story-card-meta">
            <span>{guide.category}</span>
            <span>{guide.readTime}</span>
          </p>
          <h3>{guide.title}</h3>
        </div>
      </Link>
    </article>
  );
}

export default function TravelJournalPage() {
  const featuredGuide = guides.find((guide) => guide.slug === featuredSlug);
  const latestStories = storiesFromSlugs(latestSlugs);
  const planningStories = storiesFromSlugs(planningSlugs);
  const lowerImpactStories = storiesFromSlugs(lowerImpactSlugs);
  const personalStories = storiesFromSlugs(personalStorySlugs);
  const destinationStories = storiesFromSlugs(destinationStorySlugs);

  return (
    <main>
      <PageHero
        eyebrow="Travel Journal"
        title="Thoughtful stories for travelling better"
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84"
        alt="Soft waves on a pale beach at dusk"
      >
        <p>
          Destination ideas, practical advice and personal notes for travellers
          who care about how a journey feels, not just where it goes.
        </p>
        <p>
          Explore slower routes, honeymoon inspiration, considered packing,
          lower-impact travel and honest stories from the road.
        </p>
      </PageHero>

      <section className="section-shell journal-category-section">
        <div className="guide-category-row" aria-label="Journal topics">
          {journalCategories.map((category) => (
            <Link key={category.label} href={category.href}>
              {category.label}
            </Link>
          ))}
        </div>
      </section>

      {featuredGuide ? (
        <section
          className="section-shell journal-featured-section"
          id="featured-story"
        >
          <p className="eyebrow">Featured story</p>
          <div className="journal-layout">
            <Link
              className="journal-feature-image-link"
              href={`/travel-guides/${featuredGuide.slug}`}
              aria-label={featuredGuide.title}
            >
              <img
                src={featuredGuide.image}
                alt={featuredGuide.alt}
                loading="eager"
              />
            </Link>
            <article className="journal-feature">
              <h3>{featuredGuide.title}</h3>
              <p>{featuredGuide.excerpt}</p>
              <p className="story-card-meta">
                <span>{featuredGuide.category}</span>
                <span>{featuredGuide.readTime}</span>
              </p>
              <Link
                className="button dark journal-feature-cta"
                href={`/travel-guides/${featuredGuide.slug}`}
              >
                Read the story
              </Link>
            </article>
          </div>
        </section>
      ) : null}

      <section className="section-shell tinted" id="latest-journal">
        <EditorialCarousel
          title="Latest from the Journal"
          ariaLabel="Latest travel journal stories"
          intro={
            <p>
              Fresh stories, practical guides and personal edits from Flower
              Travel.
            </p>
          }
        >
          {latestStories.map((guide) => (
            <JournalStoryCard key={guide.slug} guide={guide} />
          ))}
        </EditorialCarousel>
        <p className="journal-section-footer">
          <Link className="text-link" href="#journal-sections">
            View all stories
          </Link>
        </p>
      </section>

      <div id="journal-sections">
        <section className="section-shell" id="planning-well">
          <EditorialCarousel
            eyebrow="Planning well"
            title="Plan well, travel lightly"
            ariaLabel="Travel planning articles"
            intro={
              <p>
                Practical advice for making clearer decisions before you leave,
                without planning every hour of the trip.
              </p>
            }
          >
            {planningStories.map((guide) => (
              <JournalStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>

        <section className="section-shell tinted" id="lower-impact">
          <EditorialCarousel
            eyebrow="Lower-impact travel"
            title="Travel with a lighter footprint"
            ariaLabel="Lower-impact travel stories"
            intro={
              <p>
                Slower routes, longer stays and more thoughtful ways to
                experience a place.
              </p>
            }
          >
            {lowerImpactStories.map((guide) => (
              <JournalStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>

        <section className="section-shell" id="personal-stories">
          <EditorialCarousel
            title="Stories worth lingering over"
            ariaLabel="Personal travel stories"
            intro={
              <p>
                Personal journeys, romantic routes and places that stayed with
                us long after the trip ended.
              </p>
            }
          >
            {personalStories.map((guide) => (
              <JournalStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>

        <section className="section-shell tinted" id="destination-stories">
          <EditorialCarousel
            title="Destination stories"
            ariaLabel="Destination stories from the Flower Travel collection"
            intro={
              <p>
                Hotel notes, food guides and thoughtful itineraries from places
                across the Flower Travel collection.
              </p>
            }
          >
            {destinationStories.map((guide) => (
              <JournalStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
          <p className="journal-section-footer">
            <Link className="text-link" href="/destinations">
              Explore all destinations
            </Link>
          </p>
        </section>
      </div>

      <NewsletterBand
        description="A thoughtful note for travellers who prefer character over crowds. Receive new destination stories, practical planning advice, hotel discoveries and occasional Club-only travel edits."
        placeholder="Your email address"
        footnote="No clutter. Just carefully chosen travel inspiration."
      />
    </main>
  );
}
