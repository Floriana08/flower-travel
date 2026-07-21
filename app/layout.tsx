import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Altrove | Travel fewer places, but know them better",
    template: "%s | Altrove",
  },
  description:
    "Curated routes, honest travel notes and practical guides for travellers who prefer depth over checklists.",
  keywords: [
    "travel journal",
    "Portugal travel guide",
    "Portugal by train",
    "Lisbon neighbourhood guide",
    "slow travel",
    "curated itineraries",
    "travel club",
    "editorial travel",
    "Europe travel",
  ],
  metadataBase: new URL("https://flowertravel.studio"),
  openGraph: {
    title: "Altrove Travel Journal",
    description:
      "Travel fewer places, but know them better. Curated routes and practical guides for thoughtful travellers.",
    type: "website",
    siteName: "Altrove",
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
    apple: "/favicon-mark.png",
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
