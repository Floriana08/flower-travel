import type { Metadata } from "next";
import { JournalDestinationPage } from "../journal-collection";

export const metadata: Metadata = {
  title: "Italy Journal",
  description:
    "Journal notes on Italy — a first-timer food walk through Rome, and how we pace the rest of the country.",
  alternates: {
    canonical: "https://altrove.studio/journal/italy",
  },
};

export default function ItalyJournalPage() {
  return <JournalDestinationPage slug="italy" />;
}
