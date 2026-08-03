import type { Metadata } from "next";
import { DestinationHub } from "../../destination-hub";
import { getStudioCountry } from "../../studio-structure";

const country = getStudioCountry("spain")!;

export const metadata: Metadata = {
  title: "Spain",
  description: country.hubLede,
  alternates: {
    canonical: "https://flowertravel.studio/journeys/spain",
  },
};

export default function SpainJourneysPage() {
  return <DestinationHub country={country} />;
}
