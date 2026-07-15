import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Flower Travel | Editorial Travel Blog and Club",
    template: "%s | Flower Travel",
  },
  description:
    "Flower Travel is an editorial travel blog and club for destination inspiration, Italy, Spain, Portugal notes, graceful routes, and lower-impact ways to travel beautifully.",
  keywords: [
    "travel blog",
    "destination articles",
    "curated itineraries",
    "travel club",
    "Portugal travel blog",
    "Italy travel",
    "Spain travel",
    "sustainable travel",
    "Europe travel",
    "boutique travel",
    "honeymoon travel planning",
  ],
  openGraph: {
    title: "Flower Travel",
    description:
      "Thoughtful destination essays, Italy, Spain, Portugal notes, route ideas, and a future travel club.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1695199817779-4c879085a9a0?auto=format&fit=crop&w=1600&q=84",
        width: 1600,
        height: 1067,
        alt: "A Portuguese beach and Atlantic cliffs",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
