import type { Metadata } from "next";
import Link from "next/link";
import { EditorialCarousel } from "../EditorialCarousel";
import { NewsletterBand, PageHero } from "../components";
import { getGuidesBySection, guides } from "../data";

export const metadata: Metadata = {
  title: "Travel Journal",
  description:
    "Broader travel inspiration from Flower Travel: planning advice, sustainable travel, honeymoon ideas, packing tips, editorials, and personal stories.",
};

const planningSlugs = [
  "travel-insurance-worth-it",
  "train-travel-europe",
  "carry-on-packing-edit",
  "choosing-a-honeymoon-route",
];

const thoughtfulSlugs = [
  "sustainable-travel-basics",
  "train-travel-europe",
  "patagonia-without-rushing",
  "japan-rail-first-edit",
  "costa-rica-wildlife-loop",
];

const storySlugs = [
  "solo-paris-weekend",
  "choosing-a-honeymoon-route",
  "morocco-riad-first-edit",
  "galapagos-twelve-days",
];

function storiesFromSlugs(slugs: string[]) {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter(Boolean);
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
  const journalGuides = getGuidesBySection("journal");
  const destinationDispatches = guides
    .filter((guide) => guide.section === "destinations")
    .slice(0, 8);

  return (
    <main>
      <PageHero
        eyebrow="Travel Journal"
        title="Inspiration and advice for the trip, and the traveller."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84"
        alt="Soft waves on a pale beach at dusk"
      >
        <p>
          Broader travel inspiration, planning advice, sustainable travel,
          honeymoon ideas, packing tips, editorials, and personal stories. The
          pieces that are not tied to one place alone.
        </p>
      </PageHero>

      <section className="section-shell">
        <div className="guide-category-row" aria-label="Journal topics">
          {[
            "Planning advice",
            "Sustainable travel",
            "Honeymoon ideas",
            "Packing tips",
            "Personal stories",
            "Editorials",
          ].map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>

      <EditorialCarousel
        eyebrow="Latest Journal"
        title="Read, save, and travel with a clearer point of view."
        ariaLabel="Latest travel journal stories"
        intro={
          <p>
            Essays and guides that help you decide how to travel, not just
            where to go next.
          </p>
        }
      >
        {journalGuides.map((guide) => (
          <JournalStoryCard key={guide.slug} guide={guide} />
        ))}
      </EditorialCarousel>

      <EditorialCarousel
        eyebrow="Planning"
        title="Practical pieces for easier, more confident trips."
        ariaLabel="Travel planning articles"
      >
        {storiesFromSlugs(planningSlugs).map((guide) =>
          guide ? <JournalStoryCard key={guide.slug} guide={guide} /> : null,
        )}
      </EditorialCarousel>

      <EditorialCarousel
        eyebrow="Lower-impact travel"
        title="Slower routes, better bases, and lighter ways to move."
        ariaLabel="Lower-impact travel stories"
      >
        {storiesFromSlugs(thoughtfulSlugs).map((guide) =>
          guide ? <JournalStoryCard key={guide.slug} guide={guide} /> : null,
        )}
      </EditorialCarousel>

      <EditorialCarousel
        eyebrow="Personal notes"
        title="Softer stories, romantic routes, and places worth lingering in."
        ariaLabel="Personal travel stories"
      >
        {storiesFromSlugs(storySlugs).map((guide) =>
          guide ? <JournalStoryCard key={guide.slug} guide={guide} /> : null,
        )}
      </EditorialCarousel>

      <EditorialCarousel
        eyebrow="Destination dispatches"
        title="Fresh destination edits from the wider Flower Travel collection."
        viewAllHref="/destinations"
        viewAllLabel="Destinations"
        ariaLabel="Destination dispatches"
      >
        {destinationDispatches.map((guide) => (
          <JournalStoryCard key={guide.slug} guide={guide} />
        ))}
      </EditorialCarousel>

      <NewsletterBand />
    </main>
  );
}
