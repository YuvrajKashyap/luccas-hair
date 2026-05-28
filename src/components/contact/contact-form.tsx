import { submitContactForm } from "@/server/actions/contact";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form
      action={submitContactForm}
      className="grid gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-5"
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="min-h-11 rounded-[var(--radius-md)] border border-border bg-background px-3 text-foreground"
        />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="min-h-11 rounded-[var(--radius-md)] border border-border bg-background px-3 text-foreground"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="min-h-11 rounded-[var(--radius-md)] border border-border bg-background px-3 text-foreground"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-[var(--radius-md)] border border-border bg-background px-3 py-3 text-foreground"
        />
      </div>
      <Button type="submit">Send Message</Button>
      <p className="text-xs leading-6 text-muted">
        If Supabase env vars are not configured, this form runs in placeholder mode and
        will not store submissions.
      </p>
    </form>
  );
}
