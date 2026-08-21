import type { Metadata } from "next";
import { JournalDestinationPage } from "../journal-collection";

export const metadata: Metadata = {
  title: "Spain Journal",
  description:
    "Journal notes on Spain as coverage deepens — food first, one barrio as home, and routes worth taking slowly.",
  alternates: {
    canonical: "https://altrove.studio/journal/spain",
  },
};

export default function SpainJournalPage() {
  return <JournalDestinationPage slug="spain" />;
}
