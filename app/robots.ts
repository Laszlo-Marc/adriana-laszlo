import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/studio/", "/admin/", "/preview/", "/drafts/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
