import { sanityClient } from "@/sanity/lib/client";
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adrianalaszlo.ro";

export const revalidate = 3600;

type SitemapEntry = MetadataRoute.Sitemap[number];

type SanitySitemapItem = {
  slug: string;
  updatedAt?: string;
};

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: SitemapEntry["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/despre", priority: 0.85, changeFrequency: "monthly" },
  { path: "/servicii", priority: 0.9, changeFrequency: "monthly" },
  { path: "/af-emdr", priority: 0.9, changeFrequency: "monthly" },
  { path: "/evenimente", priority: 0.85, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.75, changeFrequency: "monthly" },
];

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

async function getBlogPosts(): Promise<SanitySitemapItem[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && defined(slug.current) && !(_id in path("drafts.**"))]{
      "slug": slug.current,
      "updatedAt": coalesce(_updatedAt, publishedAt)
    }`,
  );
}

async function getEvents(): Promise<SanitySitemapItem[]> {
  return sanityClient.fetch(
    `*[_type == "event" && defined(slug.current) && !(_id in path("drafts.**"))]{
      "slug": slug.current,
      "updatedAt": coalesce(_updatedAt, date)
    }`,
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const [blogPosts, events] = await Promise.all([getBlogPosts(), getEvents()]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((event) => ({
    url: absoluteUrl(`/evenimente/${event.slug}`),
    lastModified: event.updatedAt ? new Date(event.updatedAt) : now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries, ...eventEntries];
}
