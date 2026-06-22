import { NextRequest, NextResponse } from "next/server";

import { sendNewsletterResourceEmail } from "@/lib/email/newsletter-resource-email";
import { subscribeToNewsletter } from "@/lib/newsletter/mailchimp";
import { getDownloadableResourceById } from "@/lib/resources/downloadable-resources";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { newsletterSchema } from "@/lib/validator/newsletter";

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

    const parsed = newsletterSchema.safeParse(body);

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

    if (data.website) {
      return NextResponse.json({ ok: true });
    }

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
          errors: {
            turnstileToken: ["Verificarea anti-spam nu a reușit."],
          },
        },
        { status: 403 },
      );
    }

    const resource = data.resourceId
      ? getDownloadableResourceById(data.resourceId)
      : null;

    if (data.resourceId && !resource) {
      return NextResponse.json(
        {
          ok: false,
          message: "Resursa solicitată nu există.",
        },
        { status: 404 },
      );
    }

    const subscribeResult = await subscribeToNewsletter({
      email: data.email,
      firstName: data.firstName,
      source: data.source,
      tags: [
        "newsletter",
        resource ? `resource:${resource.id}` : "newsletter-only",
      ],
    });

    if (!subscribeResult.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            subscribeResult.message ||
            "Abonarea nu a putut fi finalizată. Te rog să încerci din nou.",
        },
        { status: 500 },
      );
    }

    let emailSent = false;

    if (resource) {
      const emailResult = await sendNewsletterResourceEmail({
        to: data.email,
        firstName: data.firstName,
        resourceTitle: resource.fileLabel || resource.title,
        downloadPath: resource.publicFileHref,
      });

      if (emailResult.error) {
        console.error("Newsletter resource email error:", emailResult.error);
      } else {
        emailSent = true;
      }
    }

    return NextResponse.json({
      ok: true,
      message: emailSent
        ? "Te-ai abonat cu succes. Ți-am trimis resursa pe email."
        : "Te-ai abonat cu succes.",
      downloadHref: resource?.publicFileHref,
      emailSent,
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "A apărut o problemă la abonare. Te rog să încerci din nou.",
      },
      { status: 500 },
    );
  }
}
