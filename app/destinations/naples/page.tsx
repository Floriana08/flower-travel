import type { Metadata } from "next";
import { CityHubPage } from "../../city-page";
import { getCityPage } from "../../city-pages";

const city = getCityPage("naples")!;

export const metadata: Metadata = {
  title: city.title,
  description: city.description,
  alternates: {
    canonical: "https://altrove.studio/destinations/naples",
  },
};

export default function NaplesDestinationPage() {
  return <CityHubPage city={city} />;
}
