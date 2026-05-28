import { requestAdminLogin } from "@/server/actions/auth";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const dynamic = "force-dynamic";

type LoginPageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

const statusMessages: Record<string, string> = {
  "missing-email": "Enter an admin email address.",
  "not-allowed": "This email is not in the admin allowlist.",
  "not-configured": "Supabase env vars are not configured yet.",
  error: "Login request failed. Check Supabase configuration.",
  "check-email": "Check the allowed admin email for a login link.",
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { status } = await searchParams;
  const message = status ? statusMessages[status] : null;

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-lg">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Admin login
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground">
            Private access.
          </h1>
          <p className="mt-5 text-sm leading-7 text-muted">
            Supabase auth scaffold for the hidden admin page. Access requires configured
            Supabase env vars and an allowlisted admin email.
          </p>
          {message ? (
            <p className="mt-5 rounded-[var(--radius-md)] border border-border bg-card p-4 text-sm text-muted">
              {message}
            </p>
          ) : null}
          <form
            action={requestAdminLogin}
            className="mt-8 grid gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-5"
          >
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              Admin email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="min-h-11 rounded-[var(--radius-md)] border border-border bg-background px-3 text-foreground"
            />
            <Button type="submit">Send Login Link</Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
