import type { Metadata } from "next";
import { businessInfo, getDisplayAddress } from "@/data/business";
import { getSiteUrl } from "@/lib/supabase/config";

const siteName = businessInfo.name;
const defaultDescription =
  "Tony Lucca is a hair stylist and men's grooming specialist inside Salon Boutique in The Colony, TX. Classic cuts, fades, beard trims, and styling, with easy online booking through Square.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteName} | Men's Haircuts & Grooming in The Colony, TX`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "men's haircut The Colony TX",
    "hair stylist The Colony",
    "men's grooming The Colony",
    "barber The Colony TX",
    "beard trim The Colony",
    "Tony Lucca",
    "Lucca's Hair",
    "Salon Boutique",
  ],
  authors: [{ name: businessInfo.publicPerson }],
  creator: businessInfo.publicPerson,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: defaultDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, getSiteUrl()).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}

export const businessSeoSummary = {
  name: businessInfo.name,
  person: businessInfo.publicPerson,
  address: getDisplayAddress(),
};
