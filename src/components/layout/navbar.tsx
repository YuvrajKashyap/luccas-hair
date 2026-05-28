import Link from "next/link";
import { getBookingHref } from "@/data/business";
import { publicNavLinks } from "@/data/nav";
import { buttonClassName } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TrackableLink } from "@/components/ui/trackable-link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="font-serif text-2xl font-semibold text-foreground">
          Lucca&apos;s Hair
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          {publicNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <TrackableLink
          href={getBookingHref()}
          eventName="booking_click"
          metadata={{ placement: "navbar" }}
          className={buttonClassName({ className: "hidden md:inline-flex" })}
        >
          Book Appointment
        </TrackableLink>
      </Container>
    </header>
  );
}
