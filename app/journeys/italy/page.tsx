import type { Metadata } from "next";
import { DestinationHub } from "../../destination-hub";
import { getStudioCountry } from "../../studio-structure";

const country = getStudioCountry("italy")!;

export const metadata: Metadata = {
  title: "Italy",
  description:
    "How Altrove travels Italy — Naples, the Amalfi Coast, pacing notes, and practical advice for a slower Campania journey.",
  alternates: {
    canonical: "https://altrove.studio/journeys/italy",
  },
};

export default function ItalyJourneysPage() {
  return <DestinationHub country={country} />;
}
