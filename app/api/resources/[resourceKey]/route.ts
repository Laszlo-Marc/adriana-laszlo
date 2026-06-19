// app/api/resources/[resourceKey]/route.ts

import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RESOURCES: Record<
  string,
  {
    filePath: string;
    downloadName: string;
    contentType: string;
  }
> = {
  "exclusive-downloadable-resource": {
    filePath: "private-downloads/ghid-resurse-pozitive.pdf",
    downloadName: "ghid-resurse-pozitive.pdf",
    contentType: "application/pdf",
  },
};

type RouteContext = {
  params: Promise<{
    resourceKey: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { resourceKey } = await context.params;
  const resource = RESOURCES[resourceKey];

  if (!resource) {
    return NextResponse.json(
      { ok: false, message: "Resource not found." },
      { status: 404 },
    );
  }

  const absolutePath = path.join(process.cwd(), resource.filePath);
  const file = await readFile(absolutePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": resource.contentType,
      "Content-Disposition": `attachment; filename="${resource.downloadName}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
