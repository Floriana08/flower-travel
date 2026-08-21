import type { Metadata } from "next";
import { JournalDestinationPage } from "../journal-collection";

export const metadata: Metadata = {
  title: "Portugal Journal",
  description:
    "Journal notes on Portugal — where to stay in Lisbon, where to eat, and how to take the train north.",
  alternates: {
    canonical: "https://altrove.studio/journal/portugal",
  },
};

export default function PortugalJournalPage() {
  return <JournalDestinationPage slug="portugal" />;
}
