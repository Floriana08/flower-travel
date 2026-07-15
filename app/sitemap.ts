import type { MetadataRoute } from "next";
import { destinationBlogArticles, destinations, itineraries } from "./data";

const routes = [
  "",
  "/destinations",
  "/routes",
  "/club",
  "/travel-consultations",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowertravel.studio";
  const routeRoutes = itineraries.map((itinerary) => `/routes/${itinerary.slug}`);
  const destinationRoutes = destinations.map(
    (destination) => `/destinations/${destination.slug}`,
  );
  const destinationArticleRoutes = destinationBlogArticles.map(
    (article) =>
      `/destinations/${article.destinationSlug}/articles/${article.slug}`,
  );

  return [
    ...routes,
    ...destinationRoutes,
    ...destinationArticleRoutes,
    ...routeRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: route === "" || route.startsWith("/routes/") || route.startsWith("/destinations/")
      ? "weekly"
      : "monthly",
    priority: route === "" ? 1 : route.startsWith("/routes/") || route.startsWith("/destinations/") ? 0.75 : 0.8,
  }));
}
