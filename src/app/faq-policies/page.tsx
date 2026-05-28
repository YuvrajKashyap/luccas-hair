import { faqItems } from "@/data/faq-policies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = createPageMetadata({
  title: "FAQ / Policies",
  description:
    "Placeholder FAQ and policies page for Lucca's Hair. Final cancellation, refund, and product policies are TBD.",
  path: "/faq-policies",
});

export default function FaqPoliciesPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            FAQ / Policies
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Policy content scaffold.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            This page keeps client questions and policy content organized while final
            cancellation, rescheduling, product return, and booking policies are
            confirmed.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-5"
            >
              <h2 className="text-lg font-semibold text-foreground">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-accent">
                {item.status === "confirmed" ? "Confirmed" : "TBD"}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
