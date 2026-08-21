import type { MetadataRoute } from "next";
import { guideProducts, guides } from "./data";
import { journeys } from "./journeys-data";
import { journalMoods, journalTopicGroups, studioCountries } from "./studio-structure";

const routes = [
  "",
  "/destinations",
  "/destinations/lisbon",
  "/journal",
  "/guides",
  "/apply",
  "/about",
  "/membership",
  "/trips/lisbon",
  "/privacy",
  "/terms",
  "/digital-product-terms",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://altrove.studio";
  const destinationRoutes = studioCountries.map(
    (country) => `/destinations/${country.slug}`,
  );
  const journeyRoutes = journeys.map((journey) => `/journeys/${journey.slug}`);
  const journalRoutes = [
    ...studioCountries.map((country) => `/journal/${country.slug}`),
    ...journalMoods.map((mood) => `/journal/mood/${mood.slug}`),
    ...journalTopicGroups.map((topic) => `/journal/topic/${topic.slug}`),
    ...guides.map((guide) => `/journal/${guide.slug}`),
  ];
  const guideProductRoutes = guideProducts.map(
    (product) => `/guides/${product.slug}`,
  );

  return [
    ...routes,
    ...destinationRoutes,
    ...journeyRoutes,
    ...journalRoutes,
    ...guideProductRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-08-19"),
    changeFrequency:
      route === "" ||
      route.startsWith("/destinations") ||
      route.startsWith("/journal")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/destinations" || route === "/apply" || route === "/journal"
          ? 0.95
          : route.startsWith("/destinations/") || route.startsWith("/journal/")
            ? 0.75
            : 0.8,
  }));
}
