import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { BlogPost } from "./types";
type BlogPostHeroProps = {
  post: BlogPost;
};

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPostHero({ post }: BlogPostHeroProps) {
  const publishedDate = dateFormatter.format(new Date(post.publishedAt));

  return (
    <section
      aria-labelledby="blog-post-title"
      className="relative min-h-[72svh] overflow-hidden bg-charcoal text-white"
    >
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent"
      />

      <Container
        size="default"
        padding="default"
        className="relative z-10 flex min-h-[72svh] items-end pb-20 pt-32 md:pb-24"
      >
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              {post.category}
            </span>
            <span>{publishedDate}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readTime} citire</span>
          </div>

          <Heading
            id="blog-post-title"
            as="h1"
            size="h1"
            className="max-w-4xl text-white"
          >
            {post.title}
          </Heading>

          <Text size="lg" className="mt-6 max-w-2xl text-balance text-white/85">
            {post.summary}
          </Text>
        </div>
      </Container>
    </section>
  );
}
