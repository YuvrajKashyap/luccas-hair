"use server";

import { redirect } from "next/navigation";
import { getSiteUrl } from "@/lib/supabase/config";
import { createOptionalServerClient } from "@/lib/supabase/server";
import { isAdminEmailAllowed } from "@/server/admin";

export async function requestAdminLogin(formData: FormData): Promise<void> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!email) {
    redirect("/admin/login?status=missing-email");
  }

  if (!isAdminEmailAllowed(email)) {
    redirect("/admin/login?status=not-allowed");
  }

  const supabase = await createOptionalServerClient();

  if (!supabase) {
    redirect("/admin/login?status=not-configured");
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${getSiteUrl()}/auth/confirm?next=/admin`,
    },
  });

  if (error) {
    redirect("/admin/login?status=error");
  }

  redirect("/admin/login?status=check-email");
}
