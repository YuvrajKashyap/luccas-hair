"use client";

import { usePathname } from "next/navigation";
import { contactLinks, getBookingHref, getSquareBookingHref } from "@/data/business";
import { Icon } from "@/components/ui/icons";
import { TrackableLink } from "@/components/ui/trackable-link";

export function MobileStickyCta() {
  const pathname = usePathname();
  const bookingHref = pathname.startsWith("/book")
    ? getSquareBookingHref()
    : getBookingHref();

  return (
    <div className="mobile-cta">
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
