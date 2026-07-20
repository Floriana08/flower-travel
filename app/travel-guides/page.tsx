import type { Metadata } from "next";
import Link from "next/link";
import { EditorialCarousel } from "../EditorialCarousel";
import { NewsletterBand, PageHero } from "../components";
import { guides } from "../data";

export const metadata: Metadata = {
  title: "Travel Journal",
  description:
    "Thoughtful stories for travelling better, from Flower Travel.",
};

const journalCategories = [
  { label: "Planning", href: "#planning" },
  { label: "Lower-impact travel", href: "#lower-impact" },
  { label: "Honeymoons", href: "#planning" },
  { label: "Personal stories", href: "#personal-stories" },
  { label: "Destination guides", href: "#destinations" },
] as const;

const featuredSlug = "where-to-stay-lisbon";

const latestSlugs = [
  "solo-paris-weekend",
  "madeira-first-timers",
  "rome-food-walk",
  "train-travel-europe",
];

const planningSlugs = [
  "travel-insurance-worth-it",
  "carry-on-packing-edit",
  "choosing-a-honeymoon-route",
];

const lowerImpactSlugs = [
  "sustainable-travel-basics",
  "patagonia-without-rushing",
  "japan-rail-first-edit",
];

const personalStorySlugs = [
  "morocco-riad-first-edit",
  "galapagos-twelve-days",
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

  return (
    <main>
      <PageHero
        eyebrow="Travel Journal"
        title="Stories for travelling better"
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84"
        alt="Soft waves on a pale beach at dusk"
      >
        <p>
          Destination ideas, practical advice and personal notes for travellers
          who care about how a journey feels, not just where it goes.
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
        >
          {latestStories.map((guide) => (
            <JournalStoryCard key={guide.slug} guide={guide} />
          ))}
        </EditorialCarousel>
      </section>

      <div id="journal-sections">
        <section className="section-shell" id="planning">
          <EditorialCarousel
            title="Planning"
            ariaLabel="Travel planning articles"
          >
            {planningStories.map((guide) => (
              <JournalStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>

        <section className="section-shell tinted" id="lower-impact">
          <EditorialCarousel
            title="Lower-impact travel"
            ariaLabel="Lower-impact travel stories"
          >
            {lowerImpactStories.map((guide) => (
              <JournalStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>

        <section className="section-shell" id="personal-stories">
          <EditorialCarousel
            title="Personal stories"
            ariaLabel="Personal travel stories"
          >
            {personalStories.map((guide) => (
              <JournalStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>

        <section className="section-shell tinted" id="destinations">
          <p className="journal-section-footer">
            <Link className="text-link" href="/destinations">
              Explore all destinations
            </Link>
          </p>
        </section>
      </div>

      <NewsletterBand />
    </main>
  );
}
