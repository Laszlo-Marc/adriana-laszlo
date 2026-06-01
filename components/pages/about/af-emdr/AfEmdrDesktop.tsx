import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { afEmdrContent } from "./afEmdrContent";

export default function AfEmdrDesktop() {
  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="af-emdr-heading"
      className="relative hidden  lg:block"
    >
      <div className="grid  grid-cols-[1fr_1fr]">
        {/* Left text column */}
        <div className="relative flex  items-center pl-20">
          <div className="relative z-10 max-w-3xl">
            <AccentText>{afEmdrContent.eyebrow}</AccentText>

            <Heading id="af-emdr-heading" as="h2" size="h2" className="mt-4">
              Lucru profund cu trauma
            </Heading>

            <div className="mt-8 space-y-5">
              <Text size="lg" className="text-charcoal/76">
                AF-EMDR este una dintre direcțiile importante ale formării și
                practicii mele, pentru că permite lucrul cu trauma într-un mod
                structurat, relațional și atent la siguranța clientului.
              </Text>

              <Text size="lg" className="text-charcoal/76">
                În terapie, această abordare poate susține procesarea
                experiențelor care continuă să se simtă active în prezent:
                relații dificile, abandon, anxietate, blocaje emoționale sau
                tipare care se repetă.
              </Text>

              <div className="border-y border-white/70 py-5">
                <p className="text-sm leading-7 text-charcoal/68">
                  Lucrul rămâne structurat, relațional și atent la ritmul tău,
                  astfel încât procesarea să poată avea loc în siguranță și cu
                  resurse suficiente.
                </p>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <Button>
                <Link href={afEmdrContent.primaryCta.href}>
                  {afEmdrContent.primaryCta.label}
                </Link>
              </Button>

              <Button variant="outline">
                <Link href={afEmdrContent.secondaryCta.href}>
                  {afEmdrContent.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right visual column */}
        <div className="relative flex  items-center justify-center ">
          <div className="relative w-full">
            {/* colored editorial panel */}
            <div className="absolute bottom-0 right-0 h-75 w-full rounded-none bg-purple-soft/85" />

            {/* brand ornament inside panel */}
            <div className="pointer-events-none absolute bottom-14 right-0 z-10 opacity-45">
              <Image
                src="/backgrounds/dragonfly.png"
                alt=""
                width={300}
                height={260}
                aria-hidden="true"
                className="h-auto  object-contain"
              />
            </div>

            {/* image block on top */}
            <div className="relative z-20 left-30 -top-20 w-[58%]">
              <div className="relative overflow-hidden rounded-sm shadow-[0_28px_70px_rgba(44,44,44,0.16)]">
                <Image
                  src={afEmdrContent.image.src}
                  alt={afEmdrContent.image.alt}
                  width={820}
                  height={500}
                  sizes="(min-width: 1280px) 26vw, 30vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
