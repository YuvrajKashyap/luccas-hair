"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics/client";
import type { AnalyticsEventName } from "@/lib/analytics/events";

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
  const handleClick = () => {
    trackEvent(eventName, metadata);
  };

  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={className}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}
