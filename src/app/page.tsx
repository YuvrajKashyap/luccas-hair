import { businessInfo, getBookingHref, getDisplayAddress } from "@/data/business";
import { getLocalBusinessJsonLd } from "@/lib/seo/local-business-schema";
import { createPageMetadata } from "@/lib/seo/metadata";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Placeholder home page for Lucca's Hair, Tony Lucca's Square-powered appointment-first website in The Colony, TX.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd()) }}
      />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Production scaffold
              </p>
              <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-7xl">
                {businessInfo.name}
              </h1>
              <p className="mt-5 text-xl leading-8 text-muted">
                Clean placeholder home page for Tony Lucca&apos;s premium hair and
                men&apos;s grooming website. Final UI will be built later from approved
                mockups.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <TrackableLink
                  href={getBookingHref()}
                  eventName="booking_click"
                  metadata={{ placement: "home_hero" }}
                  className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-[#d4ad6d]"
                >
                  Book Appointment
                </TrackableLink>
                <LinkButton href="/services" variant="secondary">
                  View Services
                </LinkButton>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Business info
              </p>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-muted">
                <p>
                  <span className="text-foreground">Professional:</span>{" "}
                  {businessInfo.publicPerson}
                </p>
                <p>
                  <span className="text-foreground">Specialty:</span>{" "}
                  {businessInfo.specialty}
                </p>
                <p>
                  <span className="text-foreground">Location:</span> {getDisplayAddress()}
                </p>
                <p>
                  <span className="text-foreground">Booking:</span> Square link TBD
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
