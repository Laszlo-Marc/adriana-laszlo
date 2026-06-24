import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const quickLinks = [
  {
    title: "AF-EMDR",
    href: "#af-emdr",
  },
  {
    title: "individuală",
    href: "#psihoterapie-individuala",
  },
  {
    title: "online",
    href: "#terapie-online",
  },
  {
    title: "Evenimente",
    href: "#evenimente",
  },
] as const;

export default function ServicesQuickLinks() {
  return (
    <Section
      background="cream"
      spacing="none"
      id="servicii-intro"
      aria-labelledby="services-quick-links-heading"
      className="relative overflow-hidden"
    >
      <Image
        src="/backgrounds/single.png"
        alt=""
        aria-hidden="true"
        width={160}
        height={160}
        sizes="160px"
        className="pointer-events-none absolute left-20 top-0 h-auto w-40 opacity-70 lg:hidden"
      />

      <Container size="full" padding="default">
        <div className="relative min-h-80 py-16 md:min-h-100 md:py-24 lg:min-h-112">
          <h2 id="services-quick-links-heading" className="sr-only">
            Navigare rapidă servicii
          </h2>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 md:block lg:h-56 lg:w-56"
          >
            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              width={220}
              height={220}
              sizes="144px"
              className="absolute left-1/2 top-1/2 h-auto w-28 -translate-x-[10%] -translate-y-[18%] opacity-80 lg:w-36"
            />

            <Image
              src="/backgrounds/single.png"
              alt=""
              width={220}
              height={220}
              sizes="144px"
              className="absolute left-0 top-0 h-auto w-28 -translate-y-[18%] opacity-80 lg:w-36"
            />

            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={220}
              height={220}
              sizes="144px"
              className="absolute left-1/2 top-1/2 h-auto w-28 -translate-x-[78%] -translate-y-[78%] opacity-75 lg:w-36"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-3xl md:block"
          />

          <nav
            aria-label="Navigare rapidă servicii"
            className="relative z-10 mx-auto mt-6 flex max-w-sm flex-col items-center px-4 pb-4 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {quickLinks.slice(0, 2).map((item) => (
                <QuickLinkItem
                  key={item.href}
                  href={item.href}
                  title={item.title}
                />
              ))}
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none relative my-10 h-32 w-32"
            >
              <Image
                src="/backgrounds/df-purple-up.png"
                alt=""
                width={160}
                height={160}
                sizes="80px"
                className="absolute left-1/2 top-1/2 h-auto w-20 -translate-x-[85%] -translate-y-[70%] opacity-70"
              />

              <Image
                src="/backgrounds/df-teal-down.png"
                alt=""
                width={160}
                height={160}
                sizes="80px"
                className="absolute left-1/2 top-1/2 h-auto w-20 -translate-x-[15%] -translate-y-[20%] opacity-75"
              />
            </div>

            <div className="flex flex-col items-center gap-8">
              {quickLinks.slice(2).map((item) => (
                <QuickLinkItem
                  key={item.href}
                  href={item.href}
                  title={item.title}
                />
              ))}
            </div>
          </nav>

          <nav
            aria-label="Navigare rapidă servicii"
            className="relative z-10 mx-auto hidden max-w-full md:mt-24 md:grid md:grid-cols-[1fr_1.35fr_10rem_1fr_1fr] md:items-end md:gap-x-10 md:px-0 md:pb-0 lg:mt-28 lg:grid-cols-[1fr_1.35fr_12rem_1fr_1fr] lg:gap-x-24"
          >
            {quickLinks.map((item, index) => {
              const desktopColumn =
                index === 0
                  ? "md:col-start-1"
                  : index === 1
                    ? "md:col-start-2"
                    : index === 2
                      ? "md:col-start-4"
                      : "md:col-start-5";

              return (
                <QuickLinkItem
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  className={desktopColumn}
                />
              );
            })}
          </nav>
        </div>
      </Container>
    </Section>
  );
}

function QuickLinkItem({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex justify-center text-center outline-none",
        className,
      )}
    >
      <span className="relative inline-flex max-w-[18rem] text-balance font-display text-2xl uppercase leading-[1.15] tracking-[0.2em] text-charcoal transition-colors duration-300 group-hover:text-purple group-focus-visible:text-purple md:text-[1.45rem] lg:text-[2rem] xl:text-4xl motion-reduce:transition-none">
        {title}

        <span className="absolute -bottom-2 left-0 h-px w-full origin-left bg-charcoal/70 transition-[transform,background-color] duration-300 group-hover:scale-x-110 group-hover:bg-purple group-focus-visible:scale-x-110 group-focus-visible:bg-purple motion-reduce:transition-none" />
      </span>
    </Link>
  );
}
