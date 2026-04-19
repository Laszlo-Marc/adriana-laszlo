import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import BlogPostCard from "./BlogPostCard";
import { featuredBlogPosts } from "./blog-data";

export default function BlogPostsSection() {
  return (
    <Section
      background="white"
      spacing="md"
      aria-labelledby="blog-posts-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-gold/12 blur-3xl sm:h-52 sm:w-52"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-20 top-12 h-32 w-32 rounded-full bg-teal/10 blur-3xl sm:h-40 sm:w-40"
          />

          <div className="relative mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="mb-3 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-charcoal/20" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                  Resurse și articole
                </p>
                <span className="h-px w-10 bg-charcoal/20" aria-hidden="true" />
              </div>

              <Heading as="h2" className="max-w-full ">
                Articole care aduc mai multă claritate
              </Heading>

              <Text className="mt-4 max-w-full text-charcoal/72">
                Informații utile despre traumă, relații, reglare emoțională și
                abordarea AF-EMDR, explicate clar și calm.
              </Text>
            </div>

            <div className="hidden lg:block">
              <Button
                variant="urgent"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                <Link href="/blog">Vezi toate articolele</Link>
              </Button>
            </div>
          </div>

          <div
            className="
              -mx-4 flex gap-5 overflow-x-auto px-4 pb-2
              snap-x snap-mandatory scroll-px-4
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0
            "
          >
            {featuredBlogPosts.map((post) => (
              <div
                key={post.slug}
                className="min-w-0 shrink-0 snap-start basis-[86%] sm:basis-[60%] lg:basis-auto"
              >
                <BlogPostCard post={post} className="h-full" />
              </div>
            ))}
          </div>

          <div className="mt-8 lg:hidden">
            <Button variant="secondary" className="w-full sm:w-auto">
              <Link href="/blog">
                Vezi toate articolele
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
