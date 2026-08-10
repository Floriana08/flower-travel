import type { Metadata } from "next";
import { EditorialCarousel } from "../EditorialCarousel";
import { NewsletterForm } from "../newsletter-form";
import {
  EditorialStoryCard,
  PageIntro,
  StudioNewsletter,
} from "../studio-components";
import { storiesFromSlugs } from "../studio-structure";

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
  "solo-paris-weekend",
] as const;

export default function JournalPage() {
  const latest = storiesFromSlugs(latestSlugs);

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

      {latest.length ? (
        <div className="journal-carousel-band">
          <EditorialCarousel
            eyebrow="Latest"
            title="Worth reading now"
            ariaLabel="Latest journal stories"
          >
            {latest.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </div>
      ) : null}

      <StudioNewsletter
        title="Letters from Altrove"
        description="New places, hotel finds, routes I'm researching and occasional notes from the road."
      >
        <NewsletterForm buttonLabel="Send me letters" />
      </StudioNewsletter>
    </main>
  );
}
