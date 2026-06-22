import { z } from "zod";

export const newsletterSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(80, "Prenumele este prea lung.")
    .optional()
    .or(z.literal("")),

  email: z.string().trim().email("Te rog introdu o adresă de email validă."),

  source: z.string().trim().min(1).max(120),

  resourceId: z.string().trim().max(120).optional(),

  website: z.string().optional(),

  startedAt: z.number(),

  turnstileToken: z.string().min(1, "Verificarea anti-spam este obligatorie."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
