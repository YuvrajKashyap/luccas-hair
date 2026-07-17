import { analyticsEventSchema, type AnalyticsEventPayload } from "@/lib/analytics/events";
import { LUCCAS_HAIR_SCHEMA } from "@/lib/supabase/config";
import { createOptionalServiceRoleClient } from "@/lib/supabase/service-role";

type TrackResult = {
  persisted: boolean;
  skipped: boolean;
};

export async function trackServerEvent(
  payload: AnalyticsEventPayload,
): Promise<TrackResult> {
  const parsed = analyticsEventSchema.safeParse(payload);

  if (!parsed.success) {
    return { persisted: false, skipped: true };
  }

  const supabase = createOptionalServiceRoleClient();

  if (!supabase) {
    return { persisted: false, skipped: true };
  }

  const { error } = await supabase
    .schema(LUCCAS_HAIR_SCHEMA)
    .from("analytics_events")
    .insert({
      event_type: parsed.data.name,
      page_path: parsed.data.path ?? null,
      metadata: parsed.data.metadata ?? {},
    });

  return { persisted: !error, skipped: false };
}
