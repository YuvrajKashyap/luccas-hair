import { type EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { getSafeInternalRedirect } from "@/lib/auth/redirects";
import { createOptionalServerClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const tokenHash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type") as EmailOtpType | null;
  const next = getSafeInternalRedirect(requestUrl.searchParams.get("next"));

  if (tokenHash && type) {
    const supabase = await createOptionalServerClient();

    if (!supabase) {
      return NextResponse.redirect(
        new URL("/admin/login?status=not-configured", request.url),
      );
    }

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });

    if (!error) {
      return NextResponse.redirect(new URL(next, request.url));
    }
  }

  return NextResponse.redirect(new URL("/admin/login?status=error", request.url));
}
