// lib/validators/resource-download.ts

import { z } from "zod";

export const resourceDownloadSchema = z.object({
  resourceId: z.string().trim().min(1, "Resursa este obligatorie."),

  name: z
    .string()
    .trim()
    .min(2, "Prenumele trebuie să conțină cel puțin 2 caractere.")
    .max(80, "Prenumele este prea lung."),

  email: z
    .string()
    .trim()
    .email("Adresa de email nu este validă.")
    .max(120, "Adresa de email este prea lungă."),

  consent: z.literal(true, {
    error: "Consimțământul este obligatoriu.",
  }),

  turnstileToken: z.string().min(1, "Verificarea anti-spam este obligatorie."),

  website: z.string().optional().or(z.literal("")),

  startedAt: z.number(),
});

export type ResourceDownloadPayload = z.infer<typeof resourceDownloadSchema>;
