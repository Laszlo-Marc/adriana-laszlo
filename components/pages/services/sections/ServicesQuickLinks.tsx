import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

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
    title: " online",
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
      aria-labelledby="services-quick-links-heading "
      className="relative overflow-hidden"
    >
      <Container size="full" padding="default">
        <div className="relative min-h-[20rem] py-16 md:min-h-[25rem] md:py-24 lg:min-h-[28rem]">
          <h2 id="services-quick-links-heading" className="sr-only">
            Navigare rapidă servicii
          </h2>

          {/* Center brand ornament */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 md:block lg:h-56 lg:w-56"
          >
            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              width={220}
              height={220}
              className="absolute left-1/2 top-1/2 w-28 -translate-x-[10%] -translate-y-[18%] opacity-80 lg:w-36"
            />
            <Image
              src="/backgrounds/single.png"
              alt=""
              width={220}
              height={220}
              className="absolute left-0 top-0 w-28 -translate-y-[18%] opacity-80 lg:w-36"
            />

            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={220}
              height={220}
              className="absolute left-1/2 top-1/2 w-28 -translate-x-[78%] -translate-y-[78%] opacity-75 lg:w-36"
            />
          </div>

          {/* Soft atmosphere behind ornament */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-3xl md:block"
          />

          <nav
            aria-label="Navigare rapidă servicii"
            className="relative z-10 mx-auto mt-16 flex max-w-full snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-4 md:mt-24 md:grid  md:grid-cols-[1fr_1.35fr_10rem_1fr_1fr] md:items-end md:gap-x-10 md:overflow-visible md:px-0 md:pb-0 lg:mt-28 lg:grid-cols-[1fr_1.35fr_12rem_1fr_1fr] lg:gap-x-24"
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group flex min-w-52 snap-center justify-center text-center outline-none ",
                    desktopColumn,
                  ].join(" ")}
                >
                  <span className="relative inline-flex max-w-[18rem] text-balance font-display text-2xl uppercase leading-[1.15] tracking-[0.2em] text-charcoal transition-colors duration-300 group-hover:text-purple group-focus-visible:text-purple md:text-[1.45rem] lg:text-[2rem] xl:text-4xl">
                    {item.title}

                    <span className="absolute -bottom-2 left-0 h-px w-full origin-left bg-charcoal/70 transition-transform duration-300 group-hover:scale-x-110 group-hover:bg-purple group-focus-visible:scale-x-110 group-focus-visible:bg-purple" />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile brand ornament */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative mx-auto mt-14 h-36 w-36 md:hidden"
          >
            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              width={160}
              height={160}
              className="absolute left-1/2 top-1/2 w-24 -translate-x-[15%] -translate-y-[18%] opacity-80"
            />

            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={160}
              height={160}
              className="absolute left-1/2 top-1/2 w-24 -translate-x-[82%] -translate-y-[78%] opacity-75"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
