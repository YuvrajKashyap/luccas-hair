"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBookingHref, getSquareBookingHref } from "@/data/business";
import { publicNavLinks } from "@/data/nav";
import { LuccaLogo } from "@/components/brand/lucca-logo";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const bookingHref = pathname.startsWith("/book")
    ? getSquareBookingHref()
    : getBookingHref();

  // Phone-only glow pill that glides between nav links (styled in mobile.css,
  // display:none on desktop). Measured from the active link so it survives
  // rotation and font swaps.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () => {
      const active = nav.querySelector<HTMLElement>(".site-nav__link--active");
      if (!active) {
        nav.style.setProperty("--glider-o", "0");
        return;
      }
      nav.style.setProperty("--glider-o", "1");
      nav.style.setProperty("--glider-x", `${active.offsetLeft}px`);
      nav.style.setProperty("--glider-w", `${active.offsetWidth}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <LuccaLogo variant="header" />
        <nav ref={navRef} className="site-nav" aria-label="Primary navigation">
          <span className="site-nav__glider" aria-hidden="true" />
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
          <Link href="/products" className="site-header__cart" aria-label="View products">
            <Icon name="cart" />
          </Link>
          <TrackableLink
            href={bookingHref}
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
