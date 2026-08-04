import type { Metadata } from "next";
import { DestinationHub } from "../../destination-hub";
import { getStudioCountry } from "../../studio-structure";

const country = getStudioCountry("portugal")!;

export const metadata: Metadata = {
  title: "Portugal",
  description: country.hubLede,
  alternates: {
    canonical: "https://altrove.studio/journeys/portugal",
  },
};

export default function PortugalJourneysPage() {
  return <DestinationHub country={country} />;
}
