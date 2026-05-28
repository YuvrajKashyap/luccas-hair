"use server";

import { redirect } from "next/navigation";
import { trackServerEvent } from "@/lib/analytics/server";
import { LUCCAS_HAIR_SCHEMA } from "@/lib/supabase/config";
import { createOptionalServiceRoleClient } from "@/lib/supabase/service-role";
import { contactFormSchema } from "@/lib/validation/contact";

export async function submitContactForm(formData: FormData): Promise<void> {
  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    redirect("/contact?status=invalid");
  }

  const supabase = createOptionalServiceRoleClient();

  if (!supabase) {
    await trackServerEvent({
      name: "contact_submit",
      path: "/contact",
      metadata: { persisted: false, reason: "supabase_not_configured" },
    });
    redirect("/contact?status=preview");
  }

  const { error } = await supabase
    .schema(LUCCAS_HAIR_SCHEMA)
    .from("contact_submissions")
    .insert({
      name: parsed.data.name,
      email: parsed.data.email ?? null,
      phone: parsed.data.phone ?? null,
      message: parsed.data.message,
      source_page: "/contact",
      status: "new",
    });

  if (error) {
    redirect("/contact?status=error");
  }

  await trackServerEvent({
    name: "contact_submit",
    path: "/contact",
    metadata: { persisted: true },
  });

  redirect("/contact?status=sent");
}
