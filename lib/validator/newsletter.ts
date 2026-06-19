// lib/validators/newsletter.ts

import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Adresa de email nu este validă.")
    .max(120, "Adresa de email este prea lungă."),

  firstName: z
    .string()
    .trim()
    .max(80, "Prenumele este prea lung.")
    .optional()
    .or(z.literal("")),

  source: z.string().trim().max(120).optional().or(z.literal("")),

  turnstileToken: z.string().min(1, "Verificarea anti-spam este obligatorie."),

  website: z.string().optional().or(z.literal("")),
  resourceKey: z.string().trim().max(80).optional(),
  startedAt: z.number(),
});

export type NewsletterPayload = z.infer<typeof newsletterSchema>;
