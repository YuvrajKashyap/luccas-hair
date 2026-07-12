import { z } from "zod";

export const analyticsEventNames = [
  "booking_click",
  "text_click",
  "call_click",
  "email_click",
  "directions_click",
  "instagram_click",
  "product_interest_click",
  "contact_submit",
] as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[number];

export const analyticsEventSchema = z.object({
  name: z.enum(analyticsEventNames),
  path: z.string().max(300).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type AnalyticsEventPayload = z.infer<typeof analyticsEventSchema>;
