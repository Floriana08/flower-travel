import type { Metadata } from "next";
import { DestinationHub } from "../../destination-hub";
import { getStudioCountry } from "../../studio-structure";

const country = getStudioCountry("italy")!;

export const metadata: Metadata = {
  title: "Italy",
  description: country.hubLede,
  alternates: {
    canonical: "https://flowertravel.studio/journeys/italy",
  },
};

export default function ItalyJourneysPage() {
  return <DestinationHub country={country} />;
}
