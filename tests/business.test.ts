import { describe, expect, it } from "vitest";
import {
  businessHours,
  businessInfo,
  getBookingHref,
  getDisplayAddress,
  squareBookingUrl,
} from "@/data/business";
import { services } from "@/data/services";

describe("public business data", () => {
  it("publishes only the service verified on Square", () => {
    expect(services).toEqual([
      expect.objectContaining({
        name: "Cuts",
        price: "$20",
        duration: "20 minutes",
        status: "confirmed",
      }),
    ]);
  });

  it("sends booking actions directly to Square", () => {
    expect(getBookingHref()).toBe(squareBookingUrl);
  });

  it("does not publish unknown address fragments", () => {
    expect(businessInfo.suite).toBeNull();
    expect(businessInfo.postalCode).toBeNull();
    expect(getDisplayAddress()).not.toContain("TBD");
  });

  it("matches the live Square hours verified on 2026-07-17", () => {
    expect(businessHours).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "Thursday", closes: "17:30" }),
        expect.objectContaining({ label: "Saturday", opens: "09:00", closes: "16:30" }),
      ]),
    );
  });
});
