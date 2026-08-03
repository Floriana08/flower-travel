import type { MetadataRoute } from "next";
import { guides, itineraries } from "./data";
import { journeys } from "./journeys-data";
import { journalMoods, studioCountries } from "./studio-structure";

const routes = [
  "",
  "/journeys",
  "/travel-guides",
  "/plan-a-trip",
  "/about",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowertravel.studio";
  const journeyRoutes = [
    ...studioCountries.map((country) => `/journeys/${country.slug}`),
    ...journeys.map((journey) => `/journeys/${journey.slug}`),
  ];
  const routeRoutes = itineraries.map(
    (itinerary) => `/routes/${itinerary.slug}`,
  );
  const guideRoutes = [
    ...studioCountries.map((country) => `/travel-guides/${country.slug}`),
    ...journalMoods.map((mood) => `/travel-guides/mood/${mood.slug}`),
    ...guides.map((guide) => `/travel-guides/${guide.slug}`),
  ];

  return [...routes, ...journeyRoutes, ...routeRoutes, ...guideRoutes].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-08-03"),
      changeFrequency:
        route === "" ||
        route.startsWith("/journeys") ||
        route.startsWith("/travel-guides")
          ? "weekly"
          : "monthly",
      priority:
        route === ""
          ? 1
          : route === "/journeys" || route === "/plan-a-trip"
            ? 0.95
            : route.startsWith("/journeys/") ||
                route.startsWith("/travel-guides/")
              ? 0.75
              : 0.8,
    }),
  );
}
