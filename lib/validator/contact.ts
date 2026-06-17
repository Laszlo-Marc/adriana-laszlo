// lib/validators/contact.ts

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Numele trebuie să conțină cel puțin 2 caractere.")
    .max(80, "Numele este prea lung."),

  email: z
    .string()
    .trim()
    .email("Adresa de email nu este validă.")
    .max(120, "Adresa de email este prea lungă."),

  phone: z
    .string()
    .trim()
    .max(40, "Numărul de telefon este prea lung.")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .trim()
    .min(10, "Mesajul trebuie să conțină cel puțin 10 caractere.")
    .max(2500, "Mesajul este prea lung."),

  turnstileToken: z.string().min(1, "Verificarea anti-spam este obligatorie."),
  newsletterConsent: z.boolean().optional().default(false),
  // Honeypot field. Real users never fill this.
  website: z.string().optional().or(z.literal("")),

  // Basic timing trap. Bots often submit instantly.
  startedAt: z.number(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
