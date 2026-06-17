// app/api/resources/download/route.ts

import { NextRequest, NextResponse } from "next/server";

import {
  sendResourceDownloadEmail,
  sendResourceDownloadNotification,
} from "@/lib/email/resource-download-email";
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
          message: "Verificarea anti-spam nu a reușit. Te rog să reîncerci.",
        },
        { status: 403 },
      );
    }

    const resource = getDownloadableResourceById(data.resourceId);

    if (!resource) {
      console.error("Resource download error: resource not found", {
        selectedResourceId: data.resourceId,
      });

      return NextResponse.json(
        {
          message: "Resursa solicitată nu există.",
          ...(process.env.NODE_ENV === "development"
            ? {
                debug: {
                  selectedResourceId: data.resourceId,
                },
              }
            : {}),
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
          message:
            "Emailul cu resursa nu a putut fi trimis. Te rog să încerci din nou.",
        },
        { status: 500 },
      );
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
      downloadHref: resource.downloadHref,
    });
  } catch (error) {
    console.error("Resource download form error:", error);

    return NextResponse.json(
      {
        message:
          "A apărut o problemă la trimiterea formularului. Te rog să încerci din nou.",
      },
      { status: 500 },
    );
  }
}
