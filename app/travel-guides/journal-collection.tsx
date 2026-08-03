import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialCarousel } from "../EditorialCarousel";
import {
  EditorialStoryCard,
  EnquiryCta,
  PageIntro,
} from "../studio-components";
import {
  getGuidesForCountry,
  getGuidesForMood,
  getJournalMood,
  getStudioCountry,
  type JournalMoodSlug,
  type StudioCountrySlug,
} from "../studio-structure";

export function JournalDestinationPage({ slug }: { slug: StudioCountrySlug }) {
  const country = getStudioCountry(slug);
  if (!country) notFound();

  const articles = getGuidesForCountry(slug);
  const lead = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top">
        <p className="destination-hub-back">
          <Link className="text-link" href="/travel-guides">
            Journal
          </Link>
        </p>
        <PageIntro eyebrow="Journal · Destination" title={country.title}>
          <p>{country.short}</p>
        </PageIntro>
      </section>

      {lead ? (
        <section className="section-shell tinted journal-lead">
          <div className="journal-lead-grid">
            <Link href={`/travel-guides/${lead.slug}`} aria-label={lead.title}>
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
      ) : (
        <section className="section-shell">
          <p className="journal-empty">
            Editorial notes for {country.title} are still being gathered. In the
            meantime, explore the{" "}
            <Link className="text-link" href={`/journeys/${country.slug}`}>
              {country.title} journeys
            </Link>
            .
          </p>
        </section>
      )}

      {rest.length ? (
        <section className="section-shell">
          <EditorialCarousel
            eyebrow="Collection"
            title="More from this place"
            ariaLabel={`${country.title} stories`}
          >
            {rest.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </EditorialCarousel>
        </section>
      ) : null}

      <section className="section-shell">
        <EnquiryCta
          title="If these notes feel like your kind of travel, ask us to plan yours."
          cta="Plan My Trip"
        >
          <p>
            Personalised itinerary design around {country.title} — and the pacing
            you prefer.
          </p>
        </EnquiryCta>
      </section>
    </main>
  );
}

export function JournalMoodPage({ slug }: { slug: JournalMoodSlug }) {
  const mood = getJournalMood(slug);
  if (!mood) notFound();

  const articles = getGuidesForMood(slug);

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top">
        <p className="destination-hub-back">
          <Link className="text-link" href="/travel-guides">
            Journal
          </Link>
        </p>
        <PageIntro eyebrow="Journal · Mood" title={mood.title}>
          <p>{mood.description}</p>
        </PageIntro>
      </section>

      <section className="section-shell tinted">
        {articles.length ? (
          <div className="editorial-story-grid">
            {articles.map((guide) => (
              <EditorialStoryCard key={guide.slug} guide={guide} />
            ))}
          </div>
        ) : (
          <p className="journal-empty">
            This collection is still being edited. Browse{" "}
            <Link className="text-link" href="/travel-guides">
              the journal
            </Link>{" "}
            for other notes.
          </p>
        )}
      </section>

      <section className="section-shell">
        <EnquiryCta
          title="Looking for something more personal?"
          cta="Plan My Trip"
        >
          <p>We’ll design a journey around the way you like to travel.</p>
        </EnquiryCta>
      </section>
    </main>
  );
}
