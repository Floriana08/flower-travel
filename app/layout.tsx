import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${montserrat.variable} ${montserrat.className}`}>
      <body className={montserrat.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
