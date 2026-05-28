import { redirect } from "next/navigation";
import { getAdminAuthStatus } from "@/server/admin";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const dynamic = "force-dynamic";

const metrics = [
  "Booking clicks",
  "Text clicks",
  "Call clicks",
  "Directions clicks",
  "Product interest",
  "Contact submissions",
];

export default async function AdminPage() {
  const authStatus = await getAdminAuthStatus();

  if (
    authStatus.configured &&
    !authStatus.authenticated &&
    authStatus.reason === "not_signed_in"
  ) {
    redirect("/admin/login");
  }

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Admin
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Private analytics scaffold.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Admin is hidden from public navigation. It is blocked until Supabase auth and
            the admin email allowlist are configured.
          </p>
        </div>

        {!authStatus.authenticated ? (
          <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-card p-5 text-sm leading-7 text-muted">
            Current status: {authStatus.reason.replaceAll("_", " ")}.
          </div>
        ) : (
          <div className="mt-10">
            <p className="text-sm text-muted">Signed in as {authStatus.email}</p>
            <form action="/auth/sign-out" method="post" className="mt-4">
              <button className="text-sm font-semibold text-accent" type="submit">
                Sign out
              </button>
            </form>
          </div>
        )}

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-[var(--radius-lg)] border border-border bg-card p-5"
            >
              <p className="text-sm text-muted">{metric}</p>
              <p className="mt-4 font-serif text-4xl text-foreground">TBD</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-accent">
                Supabase scaffold
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
