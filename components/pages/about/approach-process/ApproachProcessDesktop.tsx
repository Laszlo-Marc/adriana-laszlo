// components/pages/about/approach-process/ApproachProcessDesktop.tsx

import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { approachProcessContent } from "./approachProcessContent";

export default function ApproachProcessDesktop() {
  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="approach-process-heading"
      className="relative hidden lg:block"
    >
      <div className="grid  grid-cols-[0.95fr_1.05fr]">
        {/* Left editorial visual */}
        <div className="relative flex  items-center justify-center ">
          <div className="relative w-full ">
            {/* colored panel */}
            <div className="absolute bottom-50 left-0 h-[300px] w-[88%] bg-teal-soft" />

            {/* soft atmosphere */}
            <div
              aria-hidden="true"
              className="absolute -left-10 bottom-10 h-80 w-80 rounded-full bg-teal/15 blur-3xl"
            />

            {/* brand ornament */}
            <Image
              src="/backgrounds/df-purple-down.png"
              alt=""
              width={300}
              height={420}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-5 z-10 h-auto  opacity-40"
            />

            {/* image */}
            <div className="relative z-20 ml-auto w-[68%] -translate-y-10">
              <div className="relative overflow-hidden rounded-[0.35rem] shadow-[0_28px_80px_rgba(44,44,44,0.14)]">
                <Image
                  src={approachProcessContent.image.src}
                  alt={approachProcessContent.image.alt}
                  width={820}
                  height={980}
                  sizes="(min-width: 1280px) 32vw, 36vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="relative flex items-center pl-20">
          <div className="relative z-10 ">
            <AccentText>{approachProcessContent.eyebrow}</AccentText>

            <Heading
              id="approach-process-heading"
              as="h2"
              size="h2"
              className="mt-4 max-w-3xl"
            >
              O abordare profundă, dar atentă la ritmul tău
            </Heading>

            <div className="mt-8 space-y-5">
              <Text size="lg" className="text-charcoal/76 max-w-2xl">
                Procesul terapeutic nu începe prin a forța povestea, ci prin a
                crea un cadru în care corpul, emoțiile și mintea pot începe să
                se simtă în siguranță.
              </Text>

              <Text size="lg" className="text-charcoal/76  max-w-2xl">
                Lucrăm cu ceea ce este prezent acum — anxietate, blocaje,
                relații dificile, rușine, frică sau tipare care se repetă — dar
                fără să pierdem din vedere rădăcina lor.
              </Text>

              <Text size="lg" className="text-charcoal/76 max-w-2xl">
                Ritmul este clar și atent: ne orientăm, construim resurse,
                lucrăm cu experiențele profunde și integrăm schimbarea în viața
                de zi cu zi.
              </Text>
            </div>

            <div className="mt-10 flex gap-3">
              <Button>
                <Link href="/contact">Programează o discuție</Link>
              </Button>

              <Button variant="outline">
                <Link href="/servicii">Vezi serviciile</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
