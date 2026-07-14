import type { MetadataRoute } from "next";

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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
