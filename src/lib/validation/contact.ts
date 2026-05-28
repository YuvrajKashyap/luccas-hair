import { z } from "zod";

const optionalEmail = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().email("Enter a valid email address.").optional(),
);

const optionalPhone = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().min(7, "Enter a valid phone number.").max(40).optional(),
);

export const contactFormSchema = z
  .object({
    name: z.string().trim().min(2, "Name is required.").max(120),
    email: optionalEmail,
    phone: optionalPhone,
    message: z.string().trim().min(10, "Message is required.").max(2000),
  })
  .refine((value) => value.email || value.phone, {
    path: ["email"],
    message: "Provide an email or phone number.",
  });

export type ContactFormInput = z.infer<typeof contactFormSchema>;
