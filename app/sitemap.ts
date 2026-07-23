import type { MetadataRoute } from "next";
import { destinationBlogArticles, destinations, guides, itineraries } from "./data";

const routes = [
  "",
  "/destinations",
  "/routes",
  "/travel-guides",
  "/club",
  "/community",
  "/travel-consultations",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowertravel.studio";
  const routeRoutes = itineraries.map((itinerary) => `/routes/${itinerary.slug}`);
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
    ...destinationRoutes,
    ...destinationArticleRoutes,
    ...routeRoutes,
    ...guideRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-21"),
    changeFrequency:
      route === "" ||
      route.startsWith("/routes/") ||
      route.startsWith("/destinations/") ||
      route.startsWith("/travel-guides/")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/destinations/portugal"
          ? 0.95
          : route.startsWith("/routes/") ||
              route.startsWith("/destinations/") ||
              route.startsWith("/travel-guides/")
            ? 0.75
            : 0.8,
  }));
}
