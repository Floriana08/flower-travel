import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Altrove | Personal Travel Planning & Curated Travel Guides",
    template: "%s | Altrove",
  },
  description:
    "Altrove is building a new kind of travel membership. Join the private beta and receive a personalised trip designed around how you actually like to travel.",
  keywords: [
    "personal travel planning",
    "curated travel",
    "Portugal travel",
    "Italy travel",
    "Spain travel",
    "private travel beta",
    "editorial travel",
  ],
  metadataBase: new URL("https://altrove.studio"),
  openGraph: {
    title: "Altrove | Personal Travel Planning & Curated Travel Guides",
    description:
      "Altrove is building a new kind of travel membership. Join the private beta and receive a personalised trip designed around how you actually like to travel.",
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
