import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getBookingHref } from "@/data/business";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaHref?: string;
  ctaLabel?: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  bullets,
  ctaHref = getBookingHref(),
  ctaLabel = "Book Appointment",
}: PlaceholderPageProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={ctaHref}>{ctaLabel}</LinkButton>
            <LinkButton href="/services" variant="secondary">
              View Services
            </LinkButton>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-5 text-sm leading-7 text-muted"
            >
              {bullet}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
