import { createBrowserClient } from "@supabase/ssr";
import { getSupabasePublishableKey, getSupabaseUrl } from "@/lib/supabase/config";

export function createClient() {
  const supabaseUrl = getSupabaseUrl();
  const supabaseKey = getSupabasePublishableKey();

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase browser client requested before env vars were configured.");
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
}
