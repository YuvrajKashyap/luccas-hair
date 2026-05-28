import { businessInfo, contactLinks, getBookingHref } from "@/data/business";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buttonClassName } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TrackableLink } from "@/components/ui/trackable-link";

export const metadata = createPageMetadata({
  title: "Book",
  description:
    "Placeholder booking page for Lucca's Hair. Square will power appointment booking through an embed or external link.",
  path: "/book",
});

export default function BookPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Book
            </p>
            <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
              Square booking placeholder.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Booking will be powered by {businessInfo.bookingPlatform}. The final Square
              booking link or embed is TBD, so this page keeps the conversion path ready
              without inventing booking details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackableLink
                href={getBookingHref()}
                eventName="booking_click"
                metadata={{ placement: "book_page" }}
                className={buttonClassName()}
              >
                Book Appointment
              </TrackableLink>
              <TrackableLink
                href={contactLinks.text}
                eventName="text_click"
                metadata={{ placement: "book_page" }}
                className={buttonClassName({ variant: "secondary" })}
              >
                Text Tony
              </TrackableLink>
            </div>
          </div>

          <div
            id="square-booking"
            className="min-h-80 rounded-[var(--radius-lg)] border border-dashed border-border bg-card p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Square module
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Final implementation can replace this area with a Square embed or external
              booking CTA once the booking URL is confirmed.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
