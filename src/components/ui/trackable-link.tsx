"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { bookingPageHref, getSquareBookingHref } from "@/data/business";
import { trackEvent } from "@/lib/analytics/client";
import type { AnalyticsEventName } from "@/lib/analytics/events";

const PHONE_QUERY = "(max-width: 680px)";

function subscribePhone(callback: () => void): () => void {
  const mq = window.matchMedia(PHONE_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getIsPhone(): boolean {
  return window.matchMedia(PHONE_QUERY).matches;
}

function getServerIsPhone(): boolean {
  return false;
}

type TrackableLinkProps = {
  href: string;
  eventName: AnalyticsEventName;
  children: ReactNode;
  className?: string;
  metadata?: Record<string, unknown>;
  ariaLabel?: string;
};

export function TrackableLink({
  href,
  eventName,
  children,
  className,
  metadata,
  ariaLabel,
}: TrackableLinkProps) {
  // On phones, booking CTAs skip the /book interstitial and go straight to
  // Square. The server snapshot keeps the /book href, so desktop markup and
  // the SSR payload are unchanged.
  const isPhone = useSyncExternalStore(subscribePhone, getIsPhone, getServerIsPhone);
  const resolvedHref =
    href === bookingPageHref && isPhone ? getSquareBookingHref() : href;

  const handleClick = () => {
    trackEvent(eventName, metadata);
  };
  const opensInNewTab =
    /^https?:\/\//i.test(resolvedHref) && resolvedHref !== getSquareBookingHref();

  if (resolvedHref.startsWith("/")) {
    return (
      <Link
        href={resolvedHref}
        className={className}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={resolvedHref}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
      target={opensInNewTab ? "_blank" : undefined}
      rel={opensInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
