import type { MetadataRoute } from "next";
import { guides } from "./data";

const routes = [
  "",
  "/destinations",
  "/itineraries",
  "/travel-guides",
  "/travel-consultations",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowertravel.studio";
  const guideRoutes = guides.map((guide) => `/travel-guides/${guide.slug}`);

  return [...routes, ...guideRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: route === "" || route.startsWith("/travel-guides/")
      ? "weekly"
      : "monthly",
    priority: route === "" ? 1 : route.startsWith("/travel-guides/") ? 0.75 : 0.8,
  }));
}
