import { businessInfo } from "@/data/business";
import { createPageMetadata } from "@/lib/seo/metadata";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Placeholder about page for Tony Lucca and Lucca's Hair. Final bio and brand story are pending client-approved copy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title={`About ${businessInfo.publicPerson}.`}
      description="This page will later present the approved brand story, professional background, client trust points, and photography. The scaffold avoids unapproved claims."
      bullets={[
        "Final bio copy is TBD.",
        "Approved photos are TBD.",
        "Trust-building proof points and testimonials are TBD.",
        "Brand story should stay premium, warm, and appointment-focused.",
      ]}
    />
  );
}
