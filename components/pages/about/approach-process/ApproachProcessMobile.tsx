// components/pages/about/approach-process/ApproachProcessMobile.tsx

import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { approachProcessContent } from "./approachProcessContent";

export default function ApproachProcessMobile() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="approach-process-mobile-heading"
      className="relative overflow-hidden lg:hidden"
    >
      <div className="relative  pb-14 pt-12">
        <div className="relative mx-auto max-w-md">
          {/* editorial visual */}
          <div className="relative h-50">
            <div className="absolute top-0 h-40 w-full  bg-teal-soft" />

            <div className="relative z-20 mx-auto w-[80%] pt-10">
              <div className="relative overflow-hidden  shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
                <Image
                  src={approachProcessContent.image.src}
                  alt={approachProcessContent.image.alt}
                  width={680}
                  height={820}
                  sizes="80vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* text */}
          <div className="relative z-20 mt-20 text-center px-6">
            <Heading
              id="approach-process-mobile-heading"
              as="h2"
              size="h3"
              align="center"
              className="mt-4"
            >
              O abordare profundă, dar atentă la ritmul tău
            </Heading>

            <div className="mt-7 space-y-5">
              <Text className="text-charcoal/76" align="center">
                Procesul terapeutic nu începe prin a forța povestea, ci prin a
                crea un cadru în care corpul, emoțiile și mintea pot începe să
                se simtă în siguranță.
              </Text>

              <Text className="text-charcoal/76" align="center">
                Lucrăm cu ceea ce este prezent acum — anxietate, blocaje,
                relații dificile, rușine, frică sau tipare care se repetă — fără
                să pierdem din vedere rădăcina lor.
              </Text>

              <div className="border-y border-border/70 py-5">
                <p className="text-center text-sm leading-7 text-charcoal/68">
                  Ritmul este clar și atent:{" "}
                  <span className="font-semibold text-charcoal">
                    ne orientăm
                  </span>
                  , construim resurse, lucrăm cu experiențele profunde și
                  integrăm schimbarea în viața de zi cu zi.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
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
