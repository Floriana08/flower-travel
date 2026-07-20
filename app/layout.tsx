import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Altrove | Travel Journal",
    template: "%s | Altrove",
  },
  description:
    "Altrove is an editorial travel journal for destination inspiration, thoughtful routes, and places worth travelling for.",
  keywords: [
    "travel journal",
    "destination articles",
    "curated itineraries",
    "travel club",
    "Portugal travel",
    "Italy travel",
    "Spain travel",
    "sustainable travel",
    "Europe travel",
    "boutique travel",
    "editorial travel",
  ],
  openGraph: {
    title: "Altrove Travel Journal",
    description:
      "Thoughtful destination essays, route ideas, and a quieter travel letter for travellers who prefer character over crowds.",
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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
