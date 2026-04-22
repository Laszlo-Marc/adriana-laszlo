import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import BlogPostCard from "./BlogPostCard";
import { featuredBlogPosts } from "./blog-data";

export default function BlogPostsSection() {
  const [featuredPost, ...secondaryPosts] = featuredBlogPosts;

  return (
    <Section
      background="white"
      spacing="md"
      aria-labelledby="blog-posts-heading"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default">
        <div className="relative">
          {/* background accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 top-2 h-44 w-44 rounded-full bg-gold/10 blur-3xl sm:h-60 sm:w-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-24 top-16 h-36 w-36 rounded-full bg-teal/10 blur-3xl sm:h-48 sm:w-48"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-10 hidden h-56 w-56 rounded-full border border-purple/12 lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-20 top-20 hidden h-24 w-24 rounded-full border border-gold/15 lg:block"
          />

          <div className="relative mb-8 grid gap-6 lg:mb-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.72fr)] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-3 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-charcoal/20" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                  Resurse și articole
                </p>
                <span className="h-px w-10 bg-charcoal/20" aria-hidden="true" />
              </div>

              <Heading as="h2" className="max-w-3xl text-balance">
                Articole care aduc mai multă claritate și înțelegere
              </Heading>

              <Text className="mt-4 max-w-2xl text-charcoal/72">
                Informații utile despre traumă, relații, reglare emoțională și
                procesul terapeutic, explicate clar, calm și fără complicații
                inutile.
              </Text>
            </div>

            <div className="hidden rounded-[28px] border border-border/60 bg-cream/80 p-5 shadow-[0_12px_34px_rgba(44,44,44,0.04)] lg:block">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-charcoal/8">
                  <BookOpenText className="h-5 w-5 text-charcoal/70" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                    Lecturi recomandate
                  </p>
                  <p className="mt-2 text-sm leading-7 text-charcoal/72">
                    Un punct de intrare bun pentru vizitatorii care încă
                    încearcă să înțeleagă prin ce trec și dacă terapia li se
                    potrivește.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <Button
                  variant="urgent"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  <Link href="/blog">Vezi toate articolele</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* mobile */}
          <div
            className="
              -mx-4 flex gap-5 overflow-x-auto px-4 pb-2
              snap-x snap-mandatory scroll-px-4
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              lg:hidden
            "
          >
            {featuredBlogPosts.map((post, index) => (
              <div
                key={post.slug}
                className="min-w-0 shrink-0 snap-start basis-[86%] sm:basis-[60%]"
              >
                <BlogPostCard
                  post={post}
                  variant={index === 0 ? "featured" : "default"}
                  className="h-full"
                />
              </div>
            ))}
          </div>

          {/* desktop */}
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,1.38fr)_minmax(0,0.9fr)] lg:gap-6">
            <div className="min-w-0">
              <BlogPostCard
                post={featuredPost}
                variant="featured"
                className="h-full"
              />
            </div>

            <div className="grid gap-6">
              {secondaryPosts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  post={post}
                  variant="compact"
                  className="h-full"
                />
              ))}
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <Button variant="urgent" className="w-full sm:w-auto">
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
