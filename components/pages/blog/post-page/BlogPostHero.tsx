import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import Section from "@/components/ui/Section";
import { BlogPost } from "./blogPosts";
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
    <Section
      aria-labelledby="blog-post-title"
      className=" min-h-[80svh] "
      spacing="none"
    >
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-cream via-cream/55 to-cream/20"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent"
      />

      <Container
        size="wider"
        padding="default"
        className="relative z-10 flex min-h-[80svh] items-center justify-center pb-20 pt-40 md:pb-24"
      >
        <div className="flex max-w-4xl flex-col items-center justify-center gap-5 text-center">
          <div className="mb-1 flex flex-wrap items-center justify-center gap-3 text-sm text-charcoal/80">
            <span className="rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 backdrop-blur-sm">
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
            className="text-charcoal"
            align="center"
          >
            {post.title}
          </Heading>

          <Text
            size="lg"
            className="max-w-2xl text-balance text-charcoal/85"
            align="center"
          >
            {post.summary}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
