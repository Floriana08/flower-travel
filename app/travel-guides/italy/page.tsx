import type { Metadata } from "next";
import { JournalDestinationPage } from "../journal-collection";

export const metadata: Metadata = {
  title: "Italy Journal",
  description:
    "Curated Altrove journal notes on Italy — food, cities and coastal pacing.",
  alternates: {
    canonical: "https://altrove.studio/travel-guides/italy",
  },
};

export default function ItalyJournalPage() {
  return <JournalDestinationPage slug="italy" />;
}
