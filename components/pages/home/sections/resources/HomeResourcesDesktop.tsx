import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { cn } from "@/lib/utils";

type ResourceItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  tone: "teal" | "purple" | "gold";
};

const resourceItems: ResourceItem[] = [
  {
    eyebrow: "Articole",
    title: "Texte pentru claritate",
    description:
      "Articole despre traumă, atașament, anxietate, relații și procesul de vindecare emoțională.",
    href: "/blog",
    ctaLabel: "Citește articolele",
    imageSrc: "/home-page/resources/blog.jpg",
    imageAlt: "Spațiu calm cu plante și materiale de lectură",
    tone: "teal",
  },
  {
    eyebrow: "Resurse gratuite",
    title: "Exerciții și materiale utile",
    description:
      "Resurse descărcabile pentru reflecție, reglare emoțională și pași mici de reconectare cu tine.",
    href: "/resurse-gratuite",
    ctaLabel: "Vezi resursele",
    imageSrc: "/home-page/resources/resurse2.jpg",
    imageAlt: "Materiale de lucru și caiet pentru exerciții terapeutice",
    tone: "purple",
  },
  {
    eyebrow: "Social media",
    title: "Conținut educațional scurt",
    description:
      "Idei, explicații și mesaje despre relații, traumă, limite, anxietate și atașament.",
    href: "/social-media",
    ctaLabel: "Urmărește conținutul",
    imageSrc: "/home-page/resources/social.jpg",
    imageAlt: "Telefon și notițe pentru conținut educațional",
    tone: "gold",
  },
];

const toneStyles: Record<ResourceItem["tone"], string> = {
  teal: "bg-teal text-charcoal",
  purple: "bg-purple text-charcoal",
  gold: "bg-gold text-charcoal",
};

function ResourceCard({ item, index }: { item: ResourceItem; index: number }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/50 shadow-[0_18px_60px_rgba(44,44,44,0.08)]",
        index === 0 ? "lg:min-h-[34rem]" : "lg:min-h-[20rem]",
      )}
    >
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes={
          index === 0
            ? "(min-width: 1024px) 46vw, 100vw"
            : "(min-width: 1024px) 32vw, 100vw"
        }
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/28 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-transparent to-transparent opacity-80"
      />

      <div className="absolute flex flex-col items-center inset-x-0 bottom-0 p-7 xl:p-8">
        <span
          className={cn(
            "inline-flex  align-center rounded-full px-4 py-2 font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
            toneStyles[item.tone],
          )}
        >
          {item.eyebrow}
        </span>

        <Heading
          as="h3"
          size={index === 0 ? "h3" : "h4"}
          color="cream"
          textCase="none"
          className="mt-5 "
          align="center"
        >
          {item.title}
        </Heading>

        <Text
          as="p"
          size="sm"
          color="cream"
          className="mt-4 max-w-md leading-7 text-cream/82"
          align="center"
        >
          {item.description}
        </Text>

        <Button href={item.href} variant="cream" className="mt-5" size="sm">
          {item.ctaLabel}
        </Button>
      </div>
    </article>
  );
}

export default function ResourcesDesktopSection() {
  const [featured, ...secondary] = resourceItems;

  return (
    <Section
      background="cream"
      spacing="lg"
      aria-labelledby="resources-desktop-title"
      className="relative hidden overflow-hidden lg:block"
    >
      {/* Brand atmosphere */}
      <Image
        src="/backgrounds/double-df.png"
        alt=""
        aria-hidden="true"
        width={420}
        height={700}
        className="pointer-events-none absolute -left-10 -top-25 z-0  opacity-30"
      />

      <Image
        src="/backgrounds/df-purple-up.png"
        alt=""
        aria-hidden="true"
        width={140}
        height={140}
        className="pointer-events-none absolute right-[12%] top-20 z-0 rotate-[8deg] opacity-25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-1/2 z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-purple/10 blur-3xl"
      />

      <Container size="wider" padding="default" className="relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] xl:gap-20">
          {/* Intro */}
          <div className="sticky top-32">
            <Heading
              id="resources-desktop-title"
              as="h2"
              size="h2"
              textCase="none"
              className="mt-4  text-charcoal"
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

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <ResourceCard item={featured} index={0} />

            <div className="grid gap-6">
              {secondary.map((item, index) => (
                <ResourceCard key={item.title} item={item} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      {/* Bottom fade so decorative elements do not end abruptly */}
    </Section>
  );
}
