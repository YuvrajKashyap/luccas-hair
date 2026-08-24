import { faqPolicySections } from "@/data/faq-policies";
import { getSiteUrl } from "@/lib/supabase/config";

export function getFaqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": new URL("/faq-policies#faq", getSiteUrl()).toString(),
    mainEntity: faqPolicySections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };
}
