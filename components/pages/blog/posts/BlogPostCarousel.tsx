import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import BlogPostsCarouselClient from "./BlogPostCarouselClient";
import type { BlogPostCard } from "../post-page/blogPosts";

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
        <div className="mb-10 text-center lg:mb-14">
          <Heading
            id="blog-posts-heading"
            as="h2"
            size="h1"
            align="center"
            className="text-charcoal"
          >
            Articole utile
          </Heading>
        </div>

        <BlogPostsCarouselClient posts={posts} />
      </Container>
    </Section>
  );
}
