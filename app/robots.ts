import type { MetadataRoute } from "next";

import { absoluteUrl, SITE_URL } from "@/lib/seo/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/", "/api/", "/_next/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
