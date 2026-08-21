import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Altrove | Lifestyle travel concierge",
    template: "%s | Altrove",
  },
  description:
    "A private lifestyle travel concierge. Tell us where you're going — Altrove filters the noise and shapes the trip around you. Founding Membership is currently complimentary and limited.",
  keywords: [
    "lifestyle travel concierge",
    "travel membership",
    "Founding Membership",
    "Portugal travel",
    "Italy travel",
    "Spain travel",
    "curated travel",
    "editorial travel",
  ],
  metadataBase: new URL("https://altrove.studio"),
  openGraph: {
    title: "Altrove | Lifestyle travel concierge",
    description:
      "Tell us how you want to travel. We find what is worth your time. Founding Membership is currently complimentary and limited.",
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
