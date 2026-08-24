import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/supabase/config";

const publicRoutes = ["", "/services", "/book", "/products", "/faq-policies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return publicRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" || route === "/book" ? 0.9 : 0.7,
  }));
}
