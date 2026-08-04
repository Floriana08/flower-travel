import type { Metadata } from "next";
import { JournalDestinationPage } from "../journal-collection";

export const metadata: Metadata = {
  title: "Spain Journal",
  description:
    "Curated Altrove journal notes on Spain as the studio’s research deepens.",
  alternates: {
    canonical: "https://altrove.studio/travel-guides/spain",
  },
};

export default function SpainJournalPage() {
  return <JournalDestinationPage slug="spain" />;
}
