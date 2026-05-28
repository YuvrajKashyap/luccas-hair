import Link from "next/link";
import {
  businessHours,
  businessInfo,
  contactLinks,
  getDisplayAddress,
} from "@/data/business";
import { footerLinks } from "@/data/nav";
import { Container } from "@/components/ui/container";
import { TrackableLink } from "@/components/ui/trackable-link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 pb-28 md:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl text-foreground">{businessInfo.name}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              Placeholder production footer for Tony Lucca&apos;s appointment-first hair
              and grooming website.
            </p>
            <p className="mt-4 text-sm text-muted">{getDisplayAddress()}</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Navigate
            </p>
            <div className="grid gap-2 text-sm text-muted">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Contact
            </p>
            <div className="grid gap-2 text-sm text-muted">
              <TrackableLink href={contactLinks.call} eventName="call_click">
                {businessInfo.phone}
              </TrackableLink>
              <a href={contactLinks.email} className="hover:text-foreground">
                {businessInfo.email}
              </a>
              <TrackableLink href={contactLinks.directions} eventName="directions_click">
                Directions
              </TrackableLink>
            </div>
            <div className="mt-4 grid gap-1 text-sm text-muted">
              {businessHours.map((item) => (
                <p key={item.days}>
                  <span className="text-foreground">{item.days}:</span> {item.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
