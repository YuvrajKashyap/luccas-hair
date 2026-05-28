import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { createOptionalServerClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createOptionalServerClient();
  await supabase?.auth.signOut();

  revalidatePath("/", "layout");

  return NextResponse.redirect(new URL("/admin/login", request.url), {
    status: 302,
  });
}
