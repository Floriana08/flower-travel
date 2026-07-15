import type { MetadataRoute } from "next";
import { guides, itineraries } from "./data";

const routes = [
  "",
  "/destinations",
  "/routes",
  "/travel-guides",
  "/community",
  "/travel-consultations",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowertravel.studio";
  const guideRoutes = guides.map((guide) => `/travel-guides/${guide.slug}`);
  const routeRoutes = itineraries.map((itinerary) => `/routes/${itinerary.slug}`);

  return [...routes, ...guideRoutes, ...routeRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: route === "" || route.startsWith("/travel-guides/") || route.startsWith("/routes/")
      ? "weekly"
      : "monthly",
    priority: route === "" ? 1 : route.startsWith("/travel-guides/") || route.startsWith("/routes/") ? 0.75 : 0.8,
  }));
}
