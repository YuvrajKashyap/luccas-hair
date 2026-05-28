import { createOptionalServerClient } from "@/lib/supabase/server";
import { hasSupabaseConfig } from "@/lib/supabase/config";

export type AdminAuthStatus =
  | {
      configured: false;
      authenticated: false;
      reason: "supabase_not_configured";
    }
  | {
      configured: true;
      authenticated: false;
      reason: "not_signed_in" | "allowlist_missing" | "not_allowed";
    }
  | {
      configured: true;
      authenticated: true;
      email: string;
    };

export function getAdminAllowlist(): string[] {
  return (process.env.ADMIN_EMAIL_ALLOWLIST ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmailAllowed(email: string): boolean {
  const allowlist = getAdminAllowlist();

  if (allowlist.length === 0) {
    return false;
  }

  return allowlist.includes(email.trim().toLowerCase());
}

export async function getAdminAuthStatus(): Promise<AdminAuthStatus> {
  if (!hasSupabaseConfig()) {
    return {
      configured: false,
      authenticated: false,
      reason: "supabase_not_configured",
    };
  }

  if (getAdminAllowlist().length === 0) {
    return {
      configured: true,
      authenticated: false,
      reason: "allowlist_missing",
    };
  }

  const supabase = await createOptionalServerClient();

  if (!supabase) {
    return {
      configured: false,
      authenticated: false,
      reason: "supabase_not_configured",
    };
  }

  const { data } = await supabase.auth.getClaims();
  const email = typeof data?.claims?.email === "string" ? data.claims.email : null;

  if (!email) {
    return {
      configured: true,
      authenticated: false,
      reason: "not_signed_in",
    };
  }

  if (!isAdminEmailAllowed(email)) {
    return {
      configured: true,
      authenticated: false,
      reason: "not_allowed",
    };
  }

  return {
    configured: true,
    authenticated: true,
    email,
  };
}
