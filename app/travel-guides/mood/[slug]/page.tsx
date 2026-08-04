import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalMoodPage } from "../../journal-collection";
import {
  getJournalMood,
  journalMoods,
  type JournalMoodSlug,
} from "../../../studio-structure";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalMoods.map((mood) => ({ slug: mood.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mood = getJournalMood(slug);
  if (!mood) return {};

  return {
    title: `${mood.title} | Journal`,
    description: mood.description,
    alternates: {
      canonical: `https://altrove.studio/travel-guides/mood/${mood.slug}`,
    },
  };
}

export default async function MoodCollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const mood = getJournalMood(slug);
  if (!mood) notFound();

  return <JournalMoodPage slug={slug as JournalMoodSlug} />;
}
