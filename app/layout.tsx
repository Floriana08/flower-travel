import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import "./members-studio.css";
import { SiteFooter, SiteHeader } from "./components";
import { studioPositioning } from "./membership-config";

export const metadata: Metadata = {
  title: {
    default: "Altrove | Travel studio",
    template: "%s | Altrove",
  },
  description: studioPositioning.short,
  keywords: [
    "travel studio",
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
    title: "Altrove | A travel studio for people who care where they go",
    description: studioPositioning.short,
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
