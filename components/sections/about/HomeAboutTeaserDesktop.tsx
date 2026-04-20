"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AboutFloatingWords from "./AboutFloatingWords";
import AccentText from "@/components/ui/AccentText";

export default function HomeAboutTeaserDesktop() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="hidden lg:block">
      <div ref={sectionRef} className="relative h-svh">
        <div className="sticky top-0 h-svh">
          <div className="grid h-full grid-cols-[1.05fr_0.64fr_1fr]">
            <div className="flex bg-teal/18">
              <div className="flex w-full items-center px-10 py-20 xl:px-16">
                <div className="max-w-xl">
                  <Heading as="h2" size="h2" className="text-charcoal">
                    Despre mine
                  </Heading>

                  <Text className="mt-6 text-base leading-8 text-charcoal/82 xl:text-lg">
                    Experiența terapeutică nu înseamnă doar tehnică, ci o
                    relație în care te poți simți în siguranță, înțeles și
                    susținut. Descoperă povestea, formarea și perspectiva care
                    stau la baza modului în care Adriana lucrează cu trauma,
                    atașamentul și reprocesarea prin AF-EMDR.
                  </Text>

                  <div className="mt-10">
                    <Button size="lg">
                      <Link href="/despre">Citește povestea completă</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-svh overflow-hidden bg-cream">
              <Image
                src="/adriana8.webp"
                alt="Portret Adriana Laszlo"
                fill
                priority={false}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 32vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-charcoal/10 via-transparent to-transparent" />

              <div className="absolute left-2 top-2 z-10 max-w-full ">
                <AccentText className="text-5xl">
                  Bun venit, eu sunt Adriana
                </AccentText>
              </div>
            </div>

            <div className="relative overflow-hidden bg-purple/18">
              <AboutFloatingWords
                targetRef={sectionRef}
                words={[
                  {
                    text: "Redescoperire",
                    className: "left-8 top-[-2%]",
                    startY: 40,
                    endY: -120,
                  },
                  {
                    text: "Prezență",
                    className: "right-8 top-[24%]",
                    startY: 0,
                    endY: -90,
                  },
                  {
                    text: "Siguranță",
                    className: "left-8 top-[48%]",
                    startY: 30,
                    endY: -140,
                  },
                  {
                    text: "Vindecare",
                    className: "right-6 bottom-[10%]",
                    startY: 60,
                    endY: -180,
                  },
                  {
                    text: "Autenticitate",
                    className: "left-6 bottom-[-10%]",
                    startY: 60,
                    endY: -180,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
