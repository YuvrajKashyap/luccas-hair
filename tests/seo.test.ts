import { describe, expect, it } from "vitest";
import { getLocalBusinessJsonLd } from "@/lib/seo/local-business-schema";

describe("local business structured data", () => {
  it("contains verified local-business fields without placeholder claims", () => {
    const schema = getLocalBusinessJsonLd();
    const serialized = JSON.stringify(schema);

    expect(schema).toMatchObject({
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "Lucca's Hair",
      telephone: "+19722079215",
    });
    expect(serialized).not.toContain("TBD");
    expect(serialized).not.toContain("aggregateRating");
    expect(serialized).not.toContain("review");
  });
});
