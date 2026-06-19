// app/api/newsletter/subscribe/route.ts

import { NextRequest, NextResponse } from "next/server";

import { subscribeToNewsletter } from "@/lib/newsletter/mailchimp";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { newsletterSchema } from "@/lib/validator/newsletter";

export const runtime = "nodejs";

const RESOURCE_DOWNLOAD_URLS: Record<string, string> = {
  "exclusive-downloadable-resource":
    "/api/resources/exclusive-downloadable-resource",
};

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function getResourceTag(resourceKey?: string) {
  if (resourceKey === "exclusive-downloadable-resource") {
    return "resource-exclusive-downloadable";
  }

  return null;
}

function getDownloadUrl(resourceKey?: string) {
  if (!resourceKey) return undefined;

  return RESOURCE_DOWNLOAD_URLS[resourceKey];
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const body = await request.json();

    const parsed = newsletterSchema.safeParse(body);

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

    // Honeypot: fake success, no download URL.
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    const secondsSinceStart = (Date.now() - data.startedAt) / 1000;

    // Bot speed trap: fake success, no download URL.
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

    const resourceTag = getResourceTag(data.resourceKey);

    const result = await subscribeToNewsletter({
      email: data.email,
      firstName: data.firstName,
      source: data.source || "Newsletter form",
      tags: ["newsletter", resourceTag].filter(Boolean) as string[],
    });

    if (!result.ok) {
      return NextResponse.json(
        {
          message:
            "Abonarea nu a putut fi finalizată. Te rog să încerci din nou.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      downloadUrl: getDownloadUrl(data.resourceKey),
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);

    return NextResponse.json(
      {
        message: "A apărut o problemă la abonare. Te rog să încerci din nou.",
      },
      { status: 500 },
    );
  }
}
