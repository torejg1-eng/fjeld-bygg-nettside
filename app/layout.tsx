// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Tømrer i Sarpsborg | Fjeld Bygg og Tømrertjenester AS",
  description:
    "Nybygg, tilbygg, oppussing, vedlikehold og skadesanering i Sarpsborg/Østfold.",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://www.service-leverandøren.online"),
  openGraph: {
    title: "Fjeld Bygg og Tømrertjenester AS",
    description: "Tømrer i Sarpsborg/Østfold – nybygg, tilbygg, oppussing.",
    url: "/",
    siteName: "Fjeld Bygg",
    locale: "no_NO",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
  alternates: { canonical: "/" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className="h-full">
      <body className="min-h-screen bg-[#F7F7F8] text-[#374151] flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

