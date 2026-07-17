import { notFound, redirect } from "next/navigation";
import { getAnalyticsSummary } from "@/lib/analytics/server";
import { getAdminAuthStatus } from "@/server/admin";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const dynamic = "force-dynamic";

const metrics = [
  { name: "booking_click", label: "Booking clicks" },
  { name: "text_click", label: "Text clicks" },
  { name: "call_click", label: "Call clicks" },
  { name: "email_click", label: "Email clicks" },
  { name: "directions_click", label: "Directions clicks" },
  { name: "instagram_click", label: "Instagram clicks" },
  { name: "product_interest_click", label: "Product interest" },
  { name: "contact_submit", label: "Contact submissions" },
] as const;

export default async function AdminPage() {
  const authStatus = await getAdminAuthStatus();

  if (!authStatus.configured) {
    notFound();
  }

  if (!authStatus.authenticated) {
    redirect("/admin/login");
  }

  const summary = await getAnalyticsSummary();

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Admin
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Private analytics.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            First-party conversion signals from the last {summary.periodDays} days.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-sm text-muted">Signed in as {authStatus.email}</p>
          <form action="/auth/sign-out" method="post" className="mt-4">
            <button className="text-sm font-semibold text-accent" type="submit">
              Sign out
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.name}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-5"
            >
              <p className="text-sm text-muted">{metric.label}</p>
              <p className="mt-4 font-serif text-4xl text-foreground">
                {summary.counts[metric.name] ?? "—"}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-accent">
                {summary.configured
                  ? `${summary.periodDays} day total`
                  : "Storage not connected"}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
