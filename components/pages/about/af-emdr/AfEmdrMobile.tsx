import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { afEmdrContent } from "./afEmdrContent";

export default function AfEmdrMobile() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="af-emdr-mobile-heading"
      className="relative overflow-hidden lg:hidden"
    >
      <div className="relative pb-14 pt-12">
        <div className="relative mx-auto max-w-md">
          {/* editorial visual */}
          <div className="relative h-50">
            <div className="absolute top-0 h-40 w-full bg-purple-soft/85" />

            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={220}
              height={220}
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-7 z-10 h-auto w-[140px] opacity-35"
            />

            <div className="relative z-20 mx-auto w-[80%] pt-10">
              <div className="relative overflow-hidden shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
                <Image
                  src={afEmdrContent.image.src}
                  alt={afEmdrContent.image.alt}
                  width={680}
                  height={520}
                  sizes="80vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* text */}
          <div className="relative z-20 mt-20 px-6 text-center">
            <Heading
              id="af-emdr-mobile-heading"
              as="h2"
              size="h3"
              align="center"
              className="mt-4"
            >
              Lucru profund cu trauma
            </Heading>

            <div className="mt-7 space-y-5">
              <Text className="text-charcoal/76" align="center">
                AF-EMDR este una dintre direcțiile importante ale formării și
                practicii mele, pentru că permite lucrul cu trauma într-un mod
                structurat, relațional și atent la siguranța clientului.
              </Text>

              <Text className="text-charcoal/76" align="center">
                În terapie, această abordare poate susține procesarea
                experiențelor care continuă să se simtă active în prezent:
                relații dificile, abandon, anxietate, blocaje emoționale sau
                tipare care se repetă.
              </Text>

              <div className="border-y border-border/70 py-5">
                <p className="text-center text-sm leading-7 text-charcoal/68">
                  Lucrul rămâne{" "}
                  <span className="font-semibold text-charcoal">
                    structurat, relațional
                  </span>{" "}
                  și atent la ritmul tău, astfel încât procesarea să poată avea
                  loc în siguranță și cu resurse suficiente.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
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
      </div>
    </Section>
  );
}
