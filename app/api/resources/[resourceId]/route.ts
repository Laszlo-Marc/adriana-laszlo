import { readFile } from "node:fs/promises";
import path from "node:path";

import { NextRequest, NextResponse } from "next/server";

import { getDownloadableResourceById } from "@/lib/resources/downloadable-resources";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    resourceId: string;
  }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { resourceId } = await context.params;
  const resource = getDownloadableResourceById(resourceId);

  if (!resource) {
    return NextResponse.json(
      { ok: false, message: "Resource not found." },
      { status: 404 },
    );
  }

  try {
    const publicFilePath = resource.publicFileHref.replace(/^\//, "");
    const absolutePath = path.join(process.cwd(), "public", publicFilePath);
    const file = await readFile(absolutePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": resource.contentType,
        "Content-Disposition": `attachment; filename="${resource.downloadName}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Resource file read error:", {
      resourceId,
      publicFileHref: resource.publicFileHref,
      error,
    });

    const fallbackUrl = new URL(resource.publicFileHref, request.url);

    return NextResponse.redirect(fallbackUrl);
  }
}
