import {
  businessHours,
  businessInfo,
  contactLinks,
  getDisplayAddress,
} from "@/data/business";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TrackableLink } from "@/components/ui/trackable-link";

type ContactPageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

const statusMessages: Record<string, string> = {
  sent: "Message submitted through the Supabase scaffold.",
  preview: "Preview mode: Supabase is not configured, so the message was not stored.",
  invalid: "Please provide a name, message, and at least one contact method.",
  error: "The submission could not be stored. Try again or contact Tony directly.",
};

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Tony Lucca at Lucca's Hair in The Colony, TX. Contact form storage is scaffolded through Supabase.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { status } = await searchParams;
  const message = status ? statusMessages[status] : null;

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
              Contact scaffold.
            </h1>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-muted">
              <p>
                <span className="text-foreground">Phone:</span>{" "}
                <TrackableLink href={contactLinks.call} eventName="call_click">
                  {businessInfo.phone}
                </TrackableLink>
              </p>
              <p>
                <span className="text-foreground">Email:</span>{" "}
                <a href={contactLinks.email}>{businessInfo.email}</a>
              </p>
              <p>
                <span className="text-foreground">Location:</span> {getDisplayAddress()}
              </p>
              <p>
                <TrackableLink
                  href={contactLinks.directions}
                  eventName="directions_click"
                >
                  Get directions
                </TrackableLink>
              </p>
            </div>

            <div className="mt-8 rounded-[var(--radius-lg)] border border-border bg-card p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Hours
              </p>
              <div className="mt-4 grid gap-2 text-sm text-muted">
                {businessHours.map((item) => (
                  <p key={item.days}>
                    <span className="text-foreground">{item.days}:</span> {item.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div>
            {message ? (
              <p className="mb-4 rounded-[var(--radius-md)] border border-border bg-card p-4 text-sm text-muted">
                {message}
              </p>
            ) : null}
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
