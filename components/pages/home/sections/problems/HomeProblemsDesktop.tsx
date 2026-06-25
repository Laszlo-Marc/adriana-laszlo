import Image from "next/image";

import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { problemsContent } from "./problemsContent";

type ProblemCueProps = {
  number: string;
  text: string;
  align?: "left" | "right";
  delay?: "none" | "sm" | "md" | "lg" | "xl";
};

function ProblemCue({
  number,
  text,
  align = "left",
  delay = "none",
}: ProblemCueProps) {
  const isRight = align === "right";

  return (
    <ScrollReveal
      as="article"
      delay={delay}
      className={cn(
        "border-t border-gold/40 pt-5",
        isRight ? "text-left" : "text-right",
      )}
    >
      <Text
        as="p"
        size="xs"
        color="gold"
        weight="medium"
        transform="upper"
        className="mb-4 tracking-[0.2em]"
      >
        {number}
      </Text>

      <Text
        as="p"
        size="base"
        color="charcoal"
        className={cn(
          "max-w-[16rem] text-pretty leading-7",
          isRight ? "mr-auto" : "ml-auto",
        )}
      >
        {text}
      </Text>
    </ScrollReveal>
  );
}

export default function HomeProblemsDesktop() {
  const leftSigns = problemsContent.signs.slice(0, 2);
  const rightSigns = problemsContent.signs.slice(2, 4);

  return (
    <div className="relative z-10 hidden overflow-hidden lg:block">
      <Container size="full" padding="none">
        <div className="relative px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-18 top-0 z-0 h-full w-100 2xl:left-0"
          >
            <Image
              src="/backgrounds/single.png"
              alt=""
              fill
              sizes="256px"
              className="object-contain"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 bottom-0 z-0 h-full w-100 -scale-x-100  2xl:right-2"
          >
            <Image
              src="/backgrounds/single.png"
              alt=""
              fill
              sizes="256px"
              className="object-contain"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] bottom-28 z-0 h-28 w-36  xl:left-[10%]"
          >
            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[10%] top-24 z-0 h-28 w-36 "
          >
            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>

          <div className="relative z-10 mx-auto grid max-w-368 grid-cols-[minmax(17rem,0.9fr)_minmax(420px,0.95fr)_minmax(17rem,0.9fr)] items-center gap-16 xl:gap-28 2xl:gap-32">
            <div className="relative flex h-full min-h-180 items-center">
              <div className="relative z-10 ml-auto flex w-full max-w-[18rem] -translate-y-6 flex-col justify-center space-y-20 pr-2">
                {leftSigns.map((sign, index) => (
                  <ProblemCue
                    key={sign.number}
                    number={sign.number}
                    text={sign.text}
                    align="left"
                    delay={index === 0 ? "sm" : "md"}
                  />
                ))}
              </div>
            </div>

            <div className="relative self-stretch">
              <div className="relative mx-auto flex h-full min-h-180 max-w-136 items-center justify-center overflow-visible xl:min-h-190">
                <div className="absolute inset-y-0 left-1/2 w-[min(42vw,42rem)] -translate-x-1/2 overflow-hidden">
                  <ScrollReveal preset="fade-in" className="h-full">
                    <Image
                      src={problemsContent.image.src}
                      alt={problemsContent.image.alt}
                      fill
                      sizes="(max-width: 1023px) 1px, (min-width: 1280px) 760px, 58vw"
                      className="object-cover object-center"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(255,250,242,0.42)_68%,rgba(255,250,242,0.88)_100%)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-cream via-cream/55 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-linear-to-b from-transparent via-cream/55 to-cream"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-cream via-cream/60 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-cream via-cream/60 to-transparent"
                    />
                  </ScrollReveal>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-2 top-34 z-10 h-24 w-32 "
                >
                  <Image
                    src="/backgrounds/dragonfly.png"
                    alt=""
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-34 right-0 z-10 h-24 w-32 "
                >
                  <Image
                    src="/backgrounds/df-purple-down.png"
                    alt=""
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>

                <div className="relative z-20 w-full px-8">
                  <ScrollReveal delay="sm">
                    <div className="mx-auto max-w-120 rounded-4xl border border-white/45 bg-cream/68 px-8 py-8 text-center shadow-[0_18px_50px_rgba(44,44,44,0.10)] backdrop-blur-lg">
                      <Heading
                        as="h2"
                        size="h3"
                        align="center"
                        textCase="uppercase"
                        className="mx-auto max-w-md text-balance text-charcoal"
                      >
                        {problemsContent.title}
                      </Heading>

                      <Text
                        size="base"
                        color="muted"
                        align="center"
                        className="mx-auto mt-5 max-w-md text-pretty leading-7"
                      >
                        {problemsContent.description}
                      </Text>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>

            <div className="relative flex h-full min-h-180 items-center">
              <div className="relative z-10 mr-auto flex w-full max-w-[18rem] translate-y-6 flex-col justify-center space-y-20 pl-2">
                {rightSigns.map((sign, index) => (
                  <ProblemCue
                    key={sign.number}
                    number={sign.number}
                    text={sign.text}
                    align="right"
                    delay={index === 0 ? "sm" : "md"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
