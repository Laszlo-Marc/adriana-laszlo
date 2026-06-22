// lib/email/resource-download-email.ts

import { Resend } from "resend";

import type { DownloadableResourceConfig } from "@/lib/resources/downloadable-resources";
import { ResourceDownloadPayload } from "../validator/resources-download";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

function getAbsoluteDownloadUrl(resource: DownloadableResourceConfig) {
  const downloadPath = resource.publicFileHref || resource.downloadHref;

  return downloadPath.startsWith("http")
    ? downloadPath
    : `${getBaseUrl()}${downloadPath}`;
}

export async function sendResourceDownloadEmail({
  data,
  resource,
}: {
  data: ResourceDownloadPayload;
  resource: DownloadableResourceConfig;
}) {
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!from) {
    throw new Error("Missing CONTACT_FROM_EMAIL");
  }

  const safeName = escapeHtml(data.name);
  const safeResourceTitle = escapeHtml(resource.title);
  const downloadUrl = getAbsoluteDownloadUrl(resource);

  return resend.emails.send({
    from,
    to: data.email,
    subject: `Resursa ta: ${resource.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #2c2c2c; line-height: 1.6;">
        <h2>Bună, ${safeName},</h2>

        <p>Îți mulțumesc pentru interes. Poți descărca resursa <strong>${safeResourceTitle}</strong> accesând linkul de mai jos:</p>

        <p style="margin: 24px 0;">
          <a 
            href="${downloadUrl}" 
            style="display: inline-block; background: #2c2c2c; color: #ffffff; padding: 12px 20px; border-radius: 999px; text-decoration: none;"
          >
            Descarcă resursa
          </a>
        </p>

        <p>Dacă linkul nu funcționează, copiază această adresă în browser:</p>
        <p style="word-break: break-all; color: #7a7068;">${downloadUrl}</p>

        <p style="margin-top: 32px;">Cu grijă,<br />Adriana Laszlo</p>
      </div>
    `,
  });
}

export async function sendResourceDownloadNotification({
  data,
  resource,
}: {
  data: ResourceDownloadPayload;
  resource: DownloadableResourceConfig;
}) {
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.RESOURCE_NOTIFY_EMAIL || process.env.CONTACT_TO_EMAIL;

  if (!from || !to) {
    return null;
  }

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeResourceTitle = escapeHtml(resource.title);

  return resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Descărcare resursă - ${resource.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #2c2c2c; line-height: 1.6;">
        <h2>O resursă a fost solicitată de pe site</h2>

        <p><strong>Resursă:</strong> ${safeResourceTitle}</p>
        <p><strong>Prenume:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
      </div>
    `,
  });
}
