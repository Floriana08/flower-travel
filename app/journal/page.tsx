import type { Metadata } from "next";
import { EditorialCarousel } from "../EditorialCarousel";
import { NewsletterForm } from "../newsletter-form";
import {
  EditorialStoryCard,
  PageIntro,
  StudioNewsletter,
} from "../studio-components";
import {
  getGuidesForTopic,
  storiesFromSlugs,
} from "../studio-structure";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Altrove: hotels, neighbourhoods, food and pacing, gathered with care.",
  alternates: {
    canonical: "https://altrove.studio/journal",
  },
};

const latestSlugs = [
  "where-to-stay-lisbon",
  "rome-food-walk",
  "madeira-first-timers",
  "train-travel-europe",
  "choosing-a-honeymoon-route",
] as const;

const carousels = [
  {
    eyebrow: "Latest",
    title: "Worth reading now",
    description: null as string | null,
    viewAllHref: undefined as string | undefined,
    articles: () => storiesFromSlugs(latestSlugs),
  },
  {
    eyebrow: "Subject",
    title: "Places",
    description: "Cities, neighbourhoods and destination notes.",
    viewAllHref: "/journal/topic/places",
    articles: () => getGuidesForTopic("places"),
  },
  {
    eyebrow: "Subject",
    title: "Food",
    description: "Meals and markets worth planning a day around.",
    viewAllHref: "/journal/topic/food",
    articles: () => getGuidesForTopic("food"),
  },
] as const;

export default function JournalPage() {
  const sections = carousels
    .map((carousel) => ({
      ...carousel,
      articles: carousel.articles(),
    }))
    .filter((section) => section.articles.length > 0)
    .slice(0, 3);

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top journal-hero">
        <PageIntro eyebrow="Journal" title="Notes from elsewhere.">
          <p>
            Hotels, neighbourhoods, food and pacing, written so you can feel how
            I travel before you plan a journey.
          </p>
        </PageIntro>
      </section>

      {sections.map((section, index) => (
        <div
          key={section.title}
          className={
            index % 2 === 1
              ? "journal-carousel-band tinted"
              : "journal-carousel-band"
          }
        >
          <EditorialCarousel
            eyebrow={section.eyebrow}
            title={section.title}
            intro={section.description ? <p>{section.description}</p> : undefined}
            viewAllHref={section.viewAllHref}
            viewAllLabel="View all"
            ariaLabel={`${section.title} journal stories`}
          >
            {section.articles.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </div>
      ))}

      <StudioNewsletter
        title="Letters from Altrove"
        description="New places, hotel finds, routes I'm researching and occasional notes from the road."
      >
        <NewsletterForm buttonLabel="Send me letters" />
      </StudioNewsletter>
    </main>
  );
}
