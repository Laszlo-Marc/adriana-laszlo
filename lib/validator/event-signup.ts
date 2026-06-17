// lib/validators/event-signup.ts

import { z } from "zod";

export const eventSignupSchema = z.object({
  eventTitle: z
    .string()
    .trim()
    .min(2, "Evenimentul este obligatoriu.")
    .max(180, "Titlul evenimentului este prea lung."),

  name: z
    .string()
    .trim()
    .min(2, "Numele trebuie să conțină cel puțin 2 caractere.")
    .max(100, "Numele este prea lung."),

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
  newsletterConsent: z.boolean().optional().default(false),
  message: z
    .string()
    .trim()
    .max(1500, "Mesajul este prea lung.")
    .optional()
    .or(z.literal("")),

  turnstileToken: z.string().min(1, "Verificarea anti-spam este obligatorie."),

  website: z.string().optional().or(z.literal("")),

  startedAt: z.number(),
});

export type EventSignupPayload = z.infer<typeof eventSignupSchema>;
