import { NextRequest, NextResponse } from "next/server";

import {
  sendResourceDownloadEmail,
  sendResourceDownloadNotification,
} from "@/lib/email/resource-download-email";
import { subscribeToNewsletter } from "@/lib/newsletter/mailchimp";
import { getDownloadableResourceById } from "@/lib/resources/downloadable-resources";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { resourceDownloadSchema } from "@/lib/validator/resources-download";

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
    const parsed = resourceDownloadSchema.safeParse(body);

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
        },
        { status: 403 },
      );
    }

    const resource = getDownloadableResourceById(data.resourceId);

    if (!resource) {
      return NextResponse.json(
        {
          ok: false,
          message: "Resursa solicitată nu există.",
        },
        { status: 404 },
      );
    }

    const emailResult = await sendResourceDownloadEmail({
      data,
      resource,
    });

    if (emailResult.error) {
      console.error("Resend resource email error:", emailResult.error);

      return NextResponse.json(
        {
          ok: false,
          message:
            "Emailul cu resursa nu a putut fi trimis. Te rog să încerci din nou.",
        },
        { status: 500 },
      );
    }

    if (data.newsletterConsent) {
      const newsletterResult = await subscribeToNewsletter({
        email: data.email,
        firstName: data.name,
        source: `Resource download: ${resource.id}`,
        tags: ["newsletter", "resource-download", `resource:${resource.id}`],
      });

      if (!newsletterResult.ok) {
        console.error("Newsletter subscribe from resource form failed:", {
          resourceId: resource.id,
          email: data.email,
          message: newsletterResult.message,
        });
      }
    }

    const notificationResult = await sendResourceDownloadNotification({
      data,
      resource,
    });

    if (notificationResult?.error) {
      console.error(
        "Resend resource notification error:",
        notificationResult.error,
      );
    }

    return NextResponse.json({
      ok: true,
      downloadHref: resource.publicFileHref,
    });
  } catch (error) {
    console.error("Resource download form error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "A apărut o problemă la trimiterea formularului. Te rog să încerci din nou.",
      },
      { status: 500 },
    );
  }
}
