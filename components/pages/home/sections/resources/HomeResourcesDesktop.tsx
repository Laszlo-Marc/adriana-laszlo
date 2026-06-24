import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/lib/utils";

import { resourcePanels } from "./data";
import type { ResourcePanel } from "./types";

const toneStyles: Record<ResourcePanel["tone"], string> = {
  teal: "bg-teal text-charcoal",
  purple: "bg-purple text-charcoal",
  gold: "bg-gold text-charcoal",
};

function ResourceCard({ item, index }: { item: ResourcePanel; index: number }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-4xl border border-white/50 shadow-[0_18px_60px_rgba(44,44,44,0.08)]",
        index === 0 ? "lg:min-h-136" : "lg:min-h-80",
      )}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes={
          index === 0
            ? "(max-width: 1023px) 1px, 46vw"
            : "(max-width: 1023px) 1px, 32vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-charcoal/78 via-charcoal/28 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-charcoal/20 via-transparent to-transparent opacity-80"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-7 xl:p-8">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-4 py-2 font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
            toneStyles[item.tone],
          )}
        >
          {item.eyebrow ?? item.label}
        </span>

        <Heading
          as="h3"
          size={index === 0 ? "h3" : "h4"}
          color="cream"
          textCase="uppercase"
          className="mt-5"
          align="center"
        >
          {item.desktopTitle ?? item.title}
        </Heading>

        <Text
          as="p"
          size="sm"
          color="cream"
          className="mt-4 max-w-md leading-7 text-cream/82"
          align="center"
        >
          {item.desktopDescription ?? item.description}
        </Text>

        <Button href={item.href} variant="cream" className="mt-5" size="md">
          {item.cta}
        </Button>
      </div>
    </article>
  );
}

export default function ResourcesDesktopSection() {
  const [featured, ...secondary] = resourcePanels;

  if (!featured) return null;

  return (
    <div className="relative hidden overflow-hidden py-20 lg:block">
      <Image
        src="/backgrounds/double-df.png"
        alt=""
        aria-hidden="true"
        width={420}
        height={700}
        sizes="420px"
        className="pointer-events-none absolute -left-10 -top-25 z-0 h-auto w-105 opacity-30"
      />

      <Image
        src="/backgrounds/df-purple-up.png"
        alt=""
        aria-hidden="true"
        width={140}
        height={140}
        sizes="140px"
        className="pointer-events-none absolute right-[12%] top-20 z-0 h-auto w-35 rotate-[8deg] opacity-25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-1/2 z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-purple/10 blur-3xl"
      />

      <Container size="wider" padding="default" className="relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] xl:gap-20">
          <div className="sticky top-32">
            <Heading
              id="home-resources-title"
              as="h2"
              size="h2"
              textCase="none"
              className="mt-4 text-charcoal"
            >
              Continuă procesul terapeutic
            </Heading>

            <Text
              as="p"
              size="lg"
              color="muted"
              className="mt-7 max-w-md leading-8"
            >
              Articole, materiale gratuite și conținut educațional gândite
              pentru mai multă claritate, siguranță și înțelegere de sine.
            </Text>

            <div className="mt-9">
              <Button href="/blog">Explorează resursele</Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <ResourceCard item={featured} index={0} />

            <div className="grid gap-6">
              {secondary.map((item, index) => (
                <ResourceCard key={item.id} item={item} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
