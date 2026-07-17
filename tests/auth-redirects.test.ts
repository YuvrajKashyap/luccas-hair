import { describe, expect, it } from "vitest";
import { getSafeInternalRedirect } from "@/lib/auth/redirects";

describe("getSafeInternalRedirect", () => {
  it("keeps local paths and query strings", () => {
    expect(getSafeInternalRedirect("/admin?view=week")).toBe("/admin?view=week");
  });

  it.each([
    "https://example.com",
    "//example.com",
    "\\\\example.com",
    "javascript:alert(1)",
  ])("rejects external redirect value %s", (value) => {
    expect(getSafeInternalRedirect(value)).toBe("/admin");
  });
});
