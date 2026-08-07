import { redirect } from "next/navigation";
import { itineraries } from "../../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Legacy day-by-day routes redirect into Destinations / Journeys. */
const routeRedirects: Record<string, string> = {
  "amalfi-coast-tours": "/journeys/naples-amalfi",
  "portugal-by-train": "/journeys/portugal-by-train",
  "lisbon-food-tour": "/destinations/portugal",
  "rome-best-restaurants": "/destinations/italy",
  "center-of-italy-guide": "/destinations/italy",
};

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({ slug: itinerary.slug }));
}

export default async function RouteSlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(routeRedirects[slug] ?? "/destinations");
}
