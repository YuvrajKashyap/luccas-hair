export const LUCCAS_HAIR_SCHEMA = "luccas_hair";

export function getSupabaseUrl(): string | null {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || null;
}

export function getSupabasePublishableKey(): string | null {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    null
  );
}

export function hasSupabaseConfig(): boolean {
  return Boolean(getSupabaseUrl() && getSupabasePublishableKey());
}

export function getSupabaseServiceRoleKey(): string | null {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || null;
}

export function hasSupabaseServiceRoleConfig(): boolean {
  return Boolean(getSupabaseUrl() && getSupabaseServiceRoleKey());
}

export function getSiteUrl(): string {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!configuredUrl) {
    return process.env.NODE_ENV === "production"
      ? "https://luccas-hair.vercel.app"
      : "http://localhost:3000";
  }

  const normalizedUrl = configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;

  return normalizedUrl.replace(/\/$/, "");
}
