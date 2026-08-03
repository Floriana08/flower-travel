import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Altrove | Travelling better, not more",
    template: "%s | Altrove",
  },
  description:
    "A boutique travel studio for travellers who would rather remember a place than rush through it.",
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
    title: "Altrove | Boutique travel studio",
    description:
      "Altrove isn’t about travelling more. It’s about travelling better.",
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
