"use client";

import type { AnalyticsEventName } from "@/lib/analytics/events";

export function trackEvent(
  name: AnalyticsEventName,
  metadata: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload = JSON.stringify({
    name,
    path: window.location.pathname,
    metadata,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/events",
      new Blob([payload], { type: "application/json" }),
    );
    return;
  }

  void fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}
