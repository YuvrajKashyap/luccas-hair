import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Placeholder services page for Lucca's Hair. Final service details, prices, and durations remain editable.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Services
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Editable service foundation.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            This placeholder page will become the service comparison and booking support
            page after final copy, prices, durations, and mockups are locked.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-5"
            >
              <h2 className="font-serif text-3xl text-foreground">{service.name}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{service.summary}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-muted">Price</dt>
                  <dd className="text-foreground">{service.price}</dd>
                </div>
                <div>
                  <dt className="text-muted">Duration</dt>
                  <dd className="text-foreground">{service.duration}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
