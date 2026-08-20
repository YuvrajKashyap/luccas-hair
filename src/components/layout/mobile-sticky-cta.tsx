"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { contactLinks, getBookingHref, getSquareBookingHref } from "@/data/business";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export function MobileStickyCta() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const bookingHref = pathname.startsWith("/book")
    ? getSquareBookingHref()
    : getBookingHref();

  // The dock ducks away while the reader scrolls down and glides back the
  // moment they scroll up, so content is never covered mid-read. It always
  // shows near the top and the bottom of the page.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (Math.abs(delta) > 6) {
          const nearBottom =
            window.innerHeight + y >= document.documentElement.scrollHeight - 140;
          setHidden(delta > 0 && y > 180 && !nearBottom);
          lastY = y;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={hidden ? "mobile-cta mobile-cta--hidden" : "mobile-cta"}>
      <div className="mobile-cta__inner">
        <TrackableLink
          href={bookingHref}
          eventName="booking_click"
          metadata={{ placement: "mobile_sticky_cta" }}
          className="home-button home-button--primary mobile-cta__book"
          ariaLabel="Book an appointment"
        >
          <Icon name="calendar" />
          <span>Book</span>
        </TrackableLink>
        <TrackableLink
          href={contactLinks.text}
          eventName="text_click"
          metadata={{ placement: "mobile_sticky_cta" }}
          className="home-button home-button--secondary mobile-cta__text"
          ariaLabel="Text Tony"
        >
          <Icon name="phone" />
          <span>Text</span>
        </TrackableLink>
      </div>
    </div>
  );
}
