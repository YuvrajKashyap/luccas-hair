import {
  analyticsEventNames,
  analyticsEventSchema,
  type AnalyticsEventName,
  type AnalyticsEventPayload,
} from "@/lib/analytics/events";
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

export type AnalyticsSummary = {
  configured: boolean;
  periodDays: number;
  counts: Record<AnalyticsEventName, number | null>;
};

export async function getAnalyticsSummary(periodDays = 30): Promise<AnalyticsSummary> {
  const emptyCounts = Object.fromEntries(
    analyticsEventNames.map((name) => [name, null]),
  ) as Record<AnalyticsEventName, null>;
  const supabase = createOptionalServiceRoleClient();

  if (!supabase) {
    return { configured: false, periodDays, counts: emptyCounts };
  }

  const since = new Date(Date.now() - periodDays * 24 * 60 * 60 * 1000).toISOString();
  const results = await Promise.all(
    analyticsEventNames.map(async (name) => {
      const { count, error } = await supabase
        .schema(LUCCAS_HAIR_SCHEMA)
        .from("analytics_events")
        .select("id", { count: "exact", head: true })
        .eq("event_type", name)
        .gte("created_at", since);

      return [name, error ? null : (count ?? 0)] as const;
    }),
  );

  return {
    configured: true,
    periodDays,
    counts: Object.fromEntries(results) as Record<AnalyticsEventName, number | null>,
  };
}
