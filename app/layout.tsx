import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Flower Travel | Editorial Travel Guides and Personal Planning",
    template: "%s | Flower Travel",
  },
  description:
    "Flower Travel is an editorial travel studio for curated guides, detailed itineraries, destination inspiration, personal travel stories, and thoughtful travel consultations.",
  keywords: [
    "travel guides",
    "curated itineraries",
    "travel consultations",
    "Europe travel",
    "boutique travel planning",
    "honeymoon travel planning",
  ],
  openGraph: {
    title: "Flower Travel",
    description:
      "Portugal route notes, coastal inspiration, hotel thinking, and one-to-one planning advice.",
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
