import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialStoryCard, EnquiryCta, PageIntro } from "../../../studio-components";
import {
  getGuidesForTopic,
  getJournalTopic,
  journalTopicGroups,
} from "../../../studio-structure";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalTopicGroups.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getJournalTopic(slug);
  if (!topic) return {};

  return {
    title: `${topic.title} | Journal`,
    alternates: {
      canonical: `https://altrove.studio/journal/topic/${topic.slug}`,
    },
  };
}

export default async function JournalTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getJournalTopic(slug);
  if (!topic) notFound();

  const articles = getGuidesForTopic(topic.slug as never);

  return (
    <main className="journal-magazine">
      <section className="section-shell page-top">
        <p className="destination-hub-back">
          <Link className="text-link" href="/journal">
            Journal
          </Link>
        </p>
        <PageIntro eyebrow="Journal · Topic" title={topic.title} />
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
        <EnquiryCta title="Looking for something more personal?" cta="Plan My Trip">
          <p>We’ll design a journey around the way you like to travel.</p>
        </EnquiryCta>
      </section>
    </main>
  );
}
