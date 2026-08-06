import type { Metadata } from "next";
import { JournalDestinationPage } from "../journal-collection";

export const metadata: Metadata = {
  title: "Portugal Journal",
  description:
    "Curated Altrove journal notes on Portugal — Lisbon stays, Madeira and slow rail days.",
  alternates: {
    canonical: "https://altrove.studio/journal/portugal",
  },
};

export default function PortugalJournalPage() {
  return <JournalDestinationPage slug="portugal" />;
}
