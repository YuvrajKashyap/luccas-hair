import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import { defaultMetadata } from "@/lib/seo/metadata";
import { Footer } from "@/components/layout/footer";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { Navbar } from "@/components/layout/navbar";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCta />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
