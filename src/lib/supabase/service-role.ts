import "server-only";

import { createClient } from "@supabase/supabase-js";
import {
  getSupabaseServiceRoleKey,
  getSupabaseUrl,
  hasSupabaseServiceRoleConfig,
} from "@/lib/supabase/config";

export function createServiceRoleClient() {
  const supabaseUrl = getSupabaseUrl();
  const serviceRoleKey = getSupabaseServiceRoleKey();

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase service role client requested before env vars were configured.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function createOptionalServiceRoleClient() {
  if (!hasSupabaseServiceRoleConfig()) {
    return null;
  }

  return createServiceRoleClient();
}
