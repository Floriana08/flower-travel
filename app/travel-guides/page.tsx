import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../components";
import { NewsletterForm } from "../newsletter-form";
import { guides } from "../data";
import {
  EditorialStoryCard,
  PageIntro,
  StudioNewsletter,
} from "../studio-components";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from elsewhere — places, routes, hotels, food and practical guides from the Altrove journal.",
  alternates: {
    canonical: "https://flowertravel.studio/travel-guides",
  },
};

const collections = [
  {
    id: "places",
    label: "Places",
    slugs: ["madeira-first-timers", "rome-food-walk", "solo-paris-weekend"],
  },
  {
    id: "routes",
    label: "Routes",
    slugs: ["train-travel-europe", "japan-rail-first-edit"],
  },
  {
    id: "hotels",
    label: "Hotels",
    slugs: ["where-to-stay-lisbon", "morocco-riad-first-edit"],
  },
  {
    id: "food",
    label: "Food",
    slugs: ["rome-food-walk"],
  },
  {
    id: "notes",
    label: "Notes",
    slugs: ["choosing-a-honeymoon-route", "galapagos-twelve-days"],
  },
  {
    id: "practical",
    label: "Practical Guides",
    slugs: [
      "travel-insurance-worth-it",
      "sustainable-travel-basics",
      "carry-on-packing-edit",
    ],
  },
] as const;

const leadSlug = "where-to-stay-lisbon";
const secondarySlugs = ["madeira-first-timers", "choosing-a-honeymoon-route"];

function storiesFromSlugs(slugs: readonly string[]) {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
}

export default function TravelJournalPage() {
  const lead = guides.find((guide) => guide.slug === leadSlug);
  const secondary = storiesFromSlugs(secondarySlugs);
  const archive = guides.filter(
    (guide) =>
      guide.slug !== leadSlug && !secondarySlugs.includes(guide.slug),
  );

  return (
    <main>
      <section className="section-shell page-top">
        <PageIntro
          eyebrow="Journal"
          title="Notes from elsewhere."
        >
          <p>
            Editorial notes that support the studio — not a feed of everything at
            once. Read for taste, pacing and practical detail.
          </p>
        </PageIntro>
      </section>

      {lead ? (
        <section className="section-shell tinted journal-lead">
          <p className="eyebrow">Lead story</p>
          <div className="journal-lead-grid">
            <Link
              href={`/travel-guides/${lead.slug}`}
              aria-label={lead.title}
            >
              <img src={lead.image} alt={lead.alt} />
            </Link>
            <div>
              <p className="story-card-meta">
                <span>{lead.category}</span>
                <span>{lead.readTime}</span>
              </p>
              <h2 className="display-title">{lead.title}</h2>
              <p>{lead.excerpt}</p>
              <Link className="button dark" href={`/travel-guides/${lead.slug}`}>
                Read the story
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell">
        <SectionHeading eyebrow="Also reading" title="Selected notes" />
        <div className="editorial-story-grid">
          {secondary.map((guide) => (
            <EditorialStoryCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="section-shell tinted" id="collections">
        <SectionHeading eyebrow="Collections" title="Browse by subject">
          <p>A quieter way into the archive than a long chronological list.</p>
        </SectionHeading>
        <div className="journal-collection-grid">
          {collections.map((collection) => {
            const items = storiesFromSlugs(collection.slugs);
            if (!items.length) return null;
            return (
              <article key={collection.id} id={collection.id}>
                <h3>{collection.label}</h3>
                <ul>
                  {items.map((guide) => (
                    <li key={guide.slug}>
                      <Link href={`/travel-guides/${guide.slug}`}>
                        {guide.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell" id="archive">
        <SectionHeading eyebrow="Archive" title="Further reading">
          <p>
            Kept for readers who want more depth. Some pieces may later merge —
            see the content audit for priorities.
          </p>
        </SectionHeading>
        <ul className="journal-archive-list">
          {archive.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/travel-guides/${guide.slug}`}>
                <span>{guide.category}</span>
                <strong>{guide.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <StudioNewsletter>
        <NewsletterForm buttonLabel="Join the list" />
      </StudioNewsletter>
    </main>
  );
}
