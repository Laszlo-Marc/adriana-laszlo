"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AboutFloatingWords from "./AboutFloatingWords";

export default function HomeAboutTeaserDesktop() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="hidden lg:block">
      <div ref={sectionRef} className="relative h-svh ">
        <div className="sticky top-0 h-svh">
          <div className="grid h-full grid-cols-[1fr_0.7fr_1fr]">
            {/* Left panel */}
            <div className="relative flex bg-teal/18">
              {/* Left ornament */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-[25%] z-0 w-60 opacity-20 xl:w-68"
              >
                <Image
                  src="/backgrounds/single.png"
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 272px, 240px"
                  className="object-contain object-top-left"
                />
              </div>

              <div className="relative z-10 flex w-full items-center px-10 py-20 xl:px-16">
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

            {/* Center portrait */}
            <div className="relative min-h-svh bg-cream">
              <Image
                src="/home-page/about.jpg"
                alt="Portret Adriana Laszlo"
                fill
                priority={false}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 32vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-charcoal/10 via-transparent to-transparent" />
            </div>

            {/* Right panel */}
            <div className="relative  bg-purple/18">
              {/* Right ornament */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-12%] top-[0%] bottom-[-8%] z-0 w-100 opacity-22 xl:w-md"
              >
                <Image
                  src="/backgrounds/double-df.png"
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 448px, 400px"
                  className="object-contain object-top-right"
                />
              </div>

              <div className="relative z-10 h-full">
                <AboutFloatingWords
                  targetRef={sectionRef}
                  words={[
                    {
                      text: "Redescoperire",
                      className: "left-8 top-[-2%]",
                      startY: 40,
                      endY: -200,
                    },
                    {
                      text: "Prezență",
                      className: "right-8 top-[24%]",
                      startY: 0,
                      endY: -200,
                    },
                    {
                      text: "Siguranță",
                      className: "left-8 top-[48%]",
                      startY: 30,
                      endY: -220,
                    },
                    {
                      text: "Vindecare",
                      className: "right-6 bottom-[10%]",
                      startY: 60,
                      endY: -240,
                    },
                    {
                      text: "Autenticitate",
                      className: "left-6 bottom-[-10%]",
                      startY: 60,
                      endY: -260,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
