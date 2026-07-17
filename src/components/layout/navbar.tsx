"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBookingHref } from "@/data/business";
import { publicNavLinks } from "@/data/nav";
import { LuccaLogo } from "@/components/brand/lucca-logo";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <LuccaLogo variant="header" />
        <nav className="site-nav" aria-label="Primary navigation">
          {publicNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.href === "/"
                  ? pathname === "/"
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                  : pathname.startsWith(link.href)
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <TrackableLink
            href={getBookingHref()}
            eventName="booking_click"
            metadata={{ placement: "navbar" }}
            className="home-button home-button--primary site-header__book"
          >
            <Icon name="calendar" />
            <span>Book Appointment</span>
          </TrackableLink>
        </div>
      </div>
    </header>
  );
}
