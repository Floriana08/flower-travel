import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialStoryCard, EnquiryCta, PageIntro } from "../../../studio-components";
import {
  getGuidesForTopic,
  getJournalTopic,
  journalCategories,
  type JournalTopicSlug,
} from "../../../studio-structure";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalCategories.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getJournalTopic(slug);
  if (!topic) return {};

  return {
    title: `${topic.title} | Journal`,
    description: topic.description,
    alternates: {
      canonical: `https://altrove.studio/journal/topic/${topic.slug}`,
    },
  };
}

export default async function JournalTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getJournalTopic(slug);
  if (!topic) notFound();

  const articles = getGuidesForTopic(topic.slug as JournalTopicSlug);

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top">
        <p className="destination-hub-back">
          <Link className="text-link" href="/journal">
            Journal
          </Link>
        </p>
        <PageIntro eyebrow="Journal" title={topic.title}>
          <p>{topic.description}</p>
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
            Nothing filed under {topic.title} yet. Browse{" "}
            <Link className="text-link" href="/journal">
              the journal
            </Link>{" "}
            for other notes.
          </p>
        )}
      </section>

      <section className="section-shell">
        <EnquiryCta
          title="If these notes feel like your kind of travel."
          cta="Apply for Founding Membership"
        >
          <p>
            Altrove members can have their trip personally designed around their
            preferences, budget and travel style.
          </p>
        </EnquiryCta>
      </section>
    </main>
  );
}
