import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import "@/styles/mobile.css";
import { defaultMetadata } from "@/lib/seo/metadata";
import { Footer } from "@/components/layout/footer";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { Navbar } from "@/components/layout/navbar";
import { MobileFx } from "@/components/mobile/mobile-fx";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCta />
        <MobileFx />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
