// lib/email/event-signup-email.ts

import { Resend } from "resend";
import { EventSignupPayload } from "../validator/event-signup";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendEventSignupEmail(data: EventSignupPayload) {
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.EVENT_SIGNUP_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

  if (!from || !to) {
    throw new Error("Missing CONTACT_FROM_EMAIL or EVENT_SIGNUP_TO_EMAIL");
  }

  const safeEventTitle = escapeHtml(data.eventTitle);
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || "Necompletat");
  const safeMessage = escapeHtml(data.message || "Necompletat").replaceAll(
    "\n",
    "<br />",
  );

  return resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Înscriere eveniment - ${data.eventTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #2c2c2c; line-height: 1.6;">
        <h2>Înscriere nouă pentru eveniment</h2>

        <p><strong>Eveniment:</strong> ${safeEventTitle}</p>
        <p><strong>Nume:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone}</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

        <p><strong>Ce o interesează la program:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `,
  });
}

export async function sendEventSignupConfirmationEmail(
  data: EventSignupPayload,
) {
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!from) {
    throw new Error("Missing CONTACT_FROM_EMAIL");
  }

  const safeName = escapeHtml(data.name);
  const safeEventTitle = escapeHtml(data.eventTitle);

  return resend.emails.send({
    from,
    to: data.email,
    subject: `Am primit solicitarea ta pentru ${data.eventTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #2c2c2c; line-height: 1.6;">
        <h2>Bună, ${safeName},</h2>

        <p>Îți mulțumim pentru interesul față de programul <strong>${safeEventTitle}</strong>.</p>

        <p>Am primit solicitarea ta și vom reveni cu detalii despre program, disponibilitate și pașii următori.</p>

        <p style="margin-top: 32px;">Cu grijă,<br />Adriana Laszlo</p>
      </div>
    `,
  });
}
