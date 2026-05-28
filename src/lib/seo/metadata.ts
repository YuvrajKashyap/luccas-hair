import type { Metadata } from "next";
import { businessInfo, getDisplayAddress } from "@/data/business";
import { getSiteUrl } from "@/lib/supabase/config";

const siteName = businessInfo.name;
const defaultDescription =
  "Premium hair and men's grooming website for Tony Lucca in The Colony, TX, with Square-powered appointment booking.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
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
