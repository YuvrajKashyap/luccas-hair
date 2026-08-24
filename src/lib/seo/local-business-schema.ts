import { businessInfo, instagramUrl } from "@/data/business";
import { getSiteUrl } from "@/lib/supabase/config";

export function getLocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": new URL("/#business", siteUrl).toString(),
    name: businessInfo.name,
    description:
      "Hair stylist and men's grooming specialist inside Salon Boutique in The Colony, TX. Classic cuts, fades, beard trims, and styling by appointment.",
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: businessInfo.publicPerson,
      jobTitle: "Hair Stylist & Men's Grooming Specialist",
    },
    telephone: businessInfo.phone,
    email: businessInfo.email,
    priceRange: "$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.streetAddress}, ${businessInfo.suite}`,
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.region,
      addressCountry: businessInfo.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [instagramUrl],
    potentialAction: {
      "@type": "ReserveAction",
      target: businessInfo.bookingUrl,
      name: "Book an appointment",
    },
  };
}
