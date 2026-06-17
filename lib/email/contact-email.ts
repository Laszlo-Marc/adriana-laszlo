// lib/email/contact-email.ts

import { Resend } from "resend";
import { ContactPayload } from "../validator/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactEmail(data: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!to || !from) {
    throw new Error("Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
  }

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || "Necompletat");
  const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  return resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Mesaj nou de pe site - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #2c2c2c; line-height: 1.6;">
        <h2>Mesaj nou de pe formularul de contact</h2>

        <p><strong>Nume:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone}</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

        <p><strong>Mesaj:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `,
  });
}
