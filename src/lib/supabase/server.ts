import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import {
  getSupabasePublishableKey,
  getSupabaseUrl,
  hasSupabaseConfig,
} from "@/lib/supabase/config";

export async function createClient() {
  const supabaseUrl = getSupabaseUrl();
  const supabaseKey = getSupabasePublishableKey();

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase server client requested before env vars were configured.");
  }

  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot write cookies. Route handlers, actions, and proxy can.
        }
      },
    },
  });
}

export async function createOptionalServerClient() {
  if (!hasSupabaseConfig()) {
    return null;
  }

  return createClient();
}
