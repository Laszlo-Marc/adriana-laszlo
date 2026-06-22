// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/email/contact-email";
import { subscribeToNewsletter } from "@/lib/newsletter/mailchimp";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { contactSchema } from "@/lib/validator/contact";

export const runtime = "nodejs";

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Datele introduse nu sunt valide.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Honeypot trap.
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    // Timing trap.
    const secondsSinceStart = (Date.now() - data.startedAt) / 1000;

    if (secondsSinceStart < 3) {
      return NextResponse.json({ ok: true });
    }

    const isHuman = await verifyTurnstileToken({
      token: data.turnstileToken,
      ip,
    });

    if (!isHuman) {
      return NextResponse.json(
        {
          ok: false,
          message: "Verificarea anti-spam nu a reușit. Te rog să reîncerci.",
        },
        { status: 403 },
      );
    }

    const emailResult = await sendContactEmail(data);

    if (emailResult.error) {
      console.error("Resend contact email error:", emailResult.error);

      return NextResponse.json(
        {
          ok: false,
          message: "Mesajul nu a putut fi trimis. Te rog să încerci din nou.",
        },
        { status: 500 },
      );
    }

    if (data.newsletterConsent) {
      const newsletterResult = await subscribeToNewsletter({
        email: data.email,
        firstName: data.name,
        source: "Contact form",
      });

      if (!newsletterResult.ok) {
        console.error("Newsletter subscription from contact form failed:", {
          email: data.email,
          message: newsletterResult.message,
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "A apărut o problemă la trimiterea mesajului. Te rog să încerci din nou.",
      },
      { status: 500 },
    );
  }
}
