import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import type { BlogPostCard } from "./blogPostsContent";
import BlogPostsCarouselClient from "./BlogPostCarouselClient";

type BlogPostsCarouselProps = {
  posts: BlogPostCard[];
};

export default function BlogPostsCarousel({ posts }: BlogPostsCarouselProps) {
  if (!posts.length) return null;

  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="blog-posts-heading"
      className="relative overflow-hidden"
    >
      <Container size="full" padding="sm">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-center">
          <div className="max-w-none">
            <Heading
              id="blog-posts-heading"
              as="h2"
              size="h1"
              className="mt-3 text-charcoal"
              align="center"
            >
              Articole utile
            </Heading>
          </div>
        </div>

        <BlogPostsCarouselClient posts={posts} />
      </Container>
    </Section>
  );
}
