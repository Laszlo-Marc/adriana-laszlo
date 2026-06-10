import Image from "next/image";

import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import { problemsContent } from "./problemsContent";

type ProblemCueProps = {
  number: string;
  text: string;
  align?: "left" | "right";
};

function ProblemCue({ number, text, align = "left" }: ProblemCueProps) {
  const isRight = align === "right";

  return (
    <article
      className={[
        "border-t border-gold/40 pt-5",
        isRight ? "text-left" : "text-right",
      ].join(" ")}
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
        className={[
          "max-w-[16rem] text-pretty leading-7",
          isRight ? "mr-auto" : "ml-auto",
        ].join(" ")}
      >
        {text}
      </Text>
    </article>
  );
}

export default function HomeProblemsDesktop() {
  const leftSigns = problemsContent.signs.slice(0, 2);
  const rightSigns = problemsContent.signs.slice(2, 4);

  return (
    <div className="relative z-10 hidden lg:block">
      <Container size="full" padding="none">
        <div className="px-8">
          <div className="mx-auto grid max-w-368 grid-cols-[minmax(17rem,0.9fr)_minmax(420px,0.95fr)_minmax(17rem,0.9fr)] items-center gap-16 xl:gap-28 2xl:gap-32">
            <div className="relative flex h-full min-h-180 items-center">
              <div className="relative z-10 ml-auto flex w-full max-w-[18rem] -translate-y-6 flex-col justify-center space-y-20 pr-2">
                {leftSigns.map((sign) => (
                  <ProblemCue
                    key={sign.number}
                    number={sign.number}
                    text={sign.text}
                    align="left"
                  />
                ))}
              </div>
            </div>

            <div className="relative self-stretch">
              <div className="relative mx-auto flex h-full min-h-180 max-w-136 items-center justify-center overflow-visible xl:min-h-190">
                <div className="absolute inset-y-0 left-1/2 w-[min(42vw,42rem)] -translate-x-1/2 overflow-hidden">
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
                </div>

                <div className="relative z-20 w-full px-8">
                  <div className="mx-auto max-w-120 rounded-4xl border border-white/45 bg-cream/68 px-8 py-8 text-center shadow-[0_18px_50px_rgba(44,44,44,0.10)] backdrop-blur-lg">
                    <Heading
                      as="h2"
                      size="h2"
                      align="center"
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
                </div>
              </div>
            </div>

            <div className="relative flex h-full min-h-180 items-center">
              <div className="relative z-10 mr-auto flex w-full max-w-[18rem] translate-y-6 flex-col justify-center space-y-20 pl-2">
                {rightSigns.map((sign) => (
                  <ProblemCue
                    key={sign.number}
                    number={sign.number}
                    text={sign.text}
                    align="right"
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
