import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo/siteConfig";
import { sanityClient } from "@/sanity/lib/client";

type SitemapDocument = {
  slug: string;
  updatedAt: string;
};

const sitemapQuery = `{
  "posts": *[
    _type == "blogPost" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ] {
    "slug": slug.current,
    "updatedAt": _updatedAt
  },

  "events": *[
    _type == "event" &&
    defined(slug.current) &&
    !(_id in path("drafts.**")) &&
    coalesce(status, "") != "cancelled"
  ] {
    "slug": slug.current,
    "updatedAt": _updatedAt
  }
}`;

const staticPages: MetadataRoute.Sitemap = [
  {
    url: absoluteUrl("/"),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: absoluteUrl("/despre"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: absoluteUrl("/servicii"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: absoluteUrl("/af-emdr"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: absoluteUrl("/evenimente"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: absoluteUrl("/blog"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: absoluteUrl("/contact"),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await sanityClient.fetch<{
    posts: SitemapDocument[];
    events: SitemapDocument[];
  }>(sitemapQuery);

  const postPages: MetadataRoute.Sitemap = data.posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const eventPages: MetadataRoute.Sitemap = data.events.map((event) => ({
    url: absoluteUrl(`/evenimente/${event.slug}`),
    lastModified: new Date(event.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...postPages, ...eventPages];
}
