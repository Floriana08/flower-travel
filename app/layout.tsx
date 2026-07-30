import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Altrove | Journeys worth travelling slowly",
    template: "%s | Altrove",
  },
  description:
    "A boutique travel studio creating thoughtful itineraries, independent recommendations and deeply researched journeys.",
  keywords: [
    "boutique travel studio",
    "curated itineraries",
    "Portugal travel",
    "Amalfi Coast",
    "personalised travel planning",
    "slow travel",
    "editorial travel",
    "Europe journeys",
  ],
  metadataBase: new URL("https://flowertravel.studio"),
  openGraph: {
    title: "Altrove Travel Studio",
    description:
      "Thoughtful journeys, independent recommendations and a travel studio built destination by destination.",
    type: "website",
    siteName: "Altrove",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=84",
        width: 1600,
        height: 1067,
        alt: "Cliffside villages on the Amalfi Coast",
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
