import { NextResponse } from "next/server";
import { analyticsEventSchema } from "@/lib/analytics/events";
import { trackServerEvent } from "@/lib/analytics/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = analyticsEventSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid event payload." },
      { status: 400 },
    );
  }

  const result = await trackServerEvent(parsed.data);

  return NextResponse.json({
    ok: true,
    persisted: result.persisted,
    skipped: result.skipped,
  });
}
