import { businessHours, businessInfo } from "@/data/business";
import { getSiteUrl } from "@/lib/supabase/config";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: businessInfo.name,
    url: getSiteUrl(),
    founder: {
      "@type": "Person",
      name: businessInfo.publicPerson,
    },
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.streetAddress}, ${businessInfo.suite}`,
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.region,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.country,
    },
    openingHoursSpecification: businessHours.map((item) => ({
      "@type": "OpeningHoursSpecification",
      name: item.days,
      description: item.hours,
    })),
    potentialAction: {
      "@type": "ReserveAction",
      target: businessInfo.bookingUrl ?? "TBD",
      name: "Book an appointment",
    },
  };
}
