import NewsletterResourceWelcomeEmail from "@/components/newsletter/NewsLetterResourceWelcomeEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendNewsletterResourceEmailInput = {
  to: string;
  firstName?: string;
  resourceTitle: string;
  downloadPath: string;
};

function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "http://localhost:3000";

  return siteUrl.replace(/\/$/, "");
}

export async function sendNewsletterResourceEmail({
  to,
  firstName,
  resourceTitle,
  downloadPath,
}: SendNewsletterResourceEmailInput) {
  const siteUrl = getSiteUrl();

  const downloadUrl = downloadPath.startsWith("http")
    ? downloadPath
    : `${siteUrl}${downloadPath}`;

  return resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ||
      "Adriana Laszlo <newsletter@adrianalaszlo.ro>",
    to,
    subject: "Resursa ta gratuită este pregătită",
    react: NewsletterResourceWelcomeEmail({
      firstName,
      resourceTitle,
      downloadUrl,
    }),
  });
}
