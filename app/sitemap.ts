import type { MetadataRoute } from "next";
import {
  destinationBlogArticles,
  destinations,
  guides,
  itineraries,
} from "./data";
import { journeys } from "./journeys-data";

const routes = [
  "",
  "/journeys",
  "/destinations",
  "/routes",
  "/travel-guides",
  "/plan-a-trip",
  "/about",
  "/club",
  "/community",
  "/travel-consultations",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowertravel.studio";
  const journeyRoutes = journeys.map((journey) => `/journeys/${journey.slug}`);
  const routeRoutes = itineraries.map(
    (itinerary) => `/routes/${itinerary.slug}`,
  );
  const guideRoutes = guides.map((guide) => `/travel-guides/${guide.slug}`);
  const destinationRoutes = destinations.map(
    (destination) => `/destinations/${destination.slug}`,
  );
  const destinationArticleRoutes = destinationBlogArticles.map(
    (article) =>
      `/destinations/${article.destinationSlug}/articles/${article.slug}`,
  );

  return [
    ...routes,
    ...journeyRoutes,
    ...destinationRoutes,
    ...destinationArticleRoutes,
    ...routeRoutes,
    ...guideRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency:
      route === "" ||
      route.startsWith("/journeys") ||
      route.startsWith("/routes/") ||
      route.startsWith("/destinations/") ||
      route.startsWith("/travel-guides/")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/journeys" || route === "/plan-a-trip"
          ? 0.95
          : route.startsWith("/journeys/") ||
              route.startsWith("/routes/") ||
              route.startsWith("/destinations/") ||
              route.startsWith("/travel-guides/")
            ? 0.75
            : 0.8,
  }));
}
