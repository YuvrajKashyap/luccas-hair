import { businessHours, businessInfo } from "@/data/business";
import { getSiteUrl } from "@/lib/supabase/config";

export function getLocalBusinessJsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: businessInfo.streetAddress,
    addressLocality: businessInfo.city,
    addressRegion: businessInfo.region,
    addressCountry: businessInfo.country,
    ...(businessInfo.postalCode ? { postalCode: businessInfo.postalCode } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: businessInfo.name,
    url: getSiteUrl(),
    telephone: `+1${businessInfo.phone.replace(/\D/g, "")}`,
    email: businessInfo.email,
    address,
    openingHoursSpecification: businessHours
      .filter((item) => item.opens && item.closes)
      .map((item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.days.map((day) => `https://schema.org/${day}`),
        opens: item.opens,
        closes: item.closes,
      })),
    potentialAction: {
      "@type": "ReserveAction",
      target: businessInfo.bookingUrl,
      name: "Book an appointment",
    },
  };
}
