// app/api/contact/route.ts

import { sendContactEmail } from "@/lib/email/contact-email";
import { contactRateLimit } from "@/lib/security/rate-limit";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { contactSchema } from "@/lib/validator/contact";
import { NextRequest, NextResponse } from "next/server";

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

    if (contactRateLimit) {
      try {
        const rateLimitResult = await contactRateLimit.limit(ip);

        if (!rateLimitResult.success) {
          return NextResponse.json(
            {
              message:
                "Ai trimis prea multe mesaje într-un timp scurt. Te rog să încerci din nou mai târziu.",
            },
            { status: 429 },
          );
        }
      } catch (rateLimitError) {
        console.error("Contact form rate limit error:", rateLimitError);

        if (process.env.NODE_ENV === "production") {
          return NextResponse.json(
            {
              message:
                "Momentan formularul nu poate fi trimis. Te rog să încerci din nou mai târziu.",
            },
            { status: 503 },
          );
        }

        // In development, don't block form testing because Redis failed.
      }
    } else {
      console.warn(
        "Contact rate limiting is disabled because Upstash environment variables are missing.",
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
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

    // Timing trap. Real users do not complete this form in under 3 seconds.
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
          message: "Verificarea anti-spam nu a reușit. Te rog să reîncerci.",
        },
        { status: 403 },
      );
    }

    const result = await sendContactEmail(data);

    if (result.error) {
      console.error("Resend contact email error:", result.error);

      return NextResponse.json(
        {
          message: "Mesajul nu a putut fi trimis. Te rog să încerci din nou.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        message:
          "A apărut o problemă la trimiterea mesajului. Te rog să încerci din nou.",
      },
      { status: 500 },
    );
  }
}
