import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

type SeoMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
};

export function absoluteUrl(path = "") {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultOgImage,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
  keywords = [],
}: SeoMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      locale: siteConfig.defaultLocale,
      siteName: siteConfig.siteName,
      title,
      description,
      url: canonical,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
