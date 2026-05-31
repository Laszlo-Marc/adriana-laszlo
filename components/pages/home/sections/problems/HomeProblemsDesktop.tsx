import Image from "next/image";

import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import { problemsContent } from "./problemsContent";

type ProblemCueProps = {
  number: string;
  text: string;
  align?: "left" | "right";
};
type CueColumnDecorProps = {
  side: "left" | "right";
};

function CueColumnDecor({ side }: CueColumnDecorProps) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden "
    >
      {/* Vine */}
      <div
        className={[
          "absolute top-1/2 h-200 w-70 -translate-y-1/2 opacity-20",
          isLeft ? "-left-6" : "-right-6 scale-x-[-1]",
        ].join(" ")}
      >
        <Image
          src="/backgrounds/single.png"
          alt=""
          fill
          sizes="180px"
          className="object-contain"
        />
      </div>

      {/* Dragonfly 1 */}
      <div
        className={[
          "absolute h-30 w-30 opacity-23",
          isLeft ? "left-24 top-20" : "right-24 top-24",
        ].join(" ")}
      >
        <Image
          src={
            isLeft
              ? "/backgrounds/df-purple-up.png"
              : "/backgrounds/df-teal-down.png"
          }
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Dragonfly 2 */}
      <div
        className={[
          "absolute h-30 w-30 opacity-30",
          isLeft ? "left-16 bottom-28" : "right-18 bottom-24",
        ].join(" ")}
      >
        <Image
          src={
            isLeft
              ? "/backgrounds/dragonfly.png"
              : "/backgrounds/df-purple-down.png"
          }
          alt=""
          fill
          sizes="48px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
function ProblemCue({ number, text, align = "left" }: ProblemCueProps) {
  return (
    <article
      className={[
        "border-t border-gold/40 pt-5",
        align === "right" ? "text-left" : "text-right",
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
          align === "right" ? "mr-auto" : "ml-auto",
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
    <div className="relative z-10 hidden  lg:block">
      <Container size="full" padding="none">
        <div className="px-8   ">
          <div className="mx-auto grid max-w-[92rem] grid-cols-[minmax(17rem,0.9fr)_minmax(420px,0.95fr)_minmax(17rem,0.9fr)] items-center gap-16 xl:gap-28 2xl:gap-32">
            {/* Left cues */}
            <div className="relative flex h-full min-h-[720px] items-center">
              <CueColumnDecor side="left" />

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

            {/* Center image */}
            <div className="relative self-stretch">
              <div className="relative mx-auto flex h-full min-h-[720px] max-w-[34rem] items-center justify-center overflow-visible xl:min-h-[760px]">
                {/* Image atmosphere */}
                <div className="absolute inset-y-0 left-1/2 w-[min(42vw,42rem)] -translate-x-1/2 overflow-hidden">
                  <Image
                    src={problemsContent.image.src}
                    alt={problemsContent.image.alt}
                    fill
                    sizes="(min-width: 1280px) 760px, 58vw"
                    className="object-cover object-center"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(255,250,242,0.42)_68%,rgba(255,250,242,0.88)_100%)]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream via-cream/55 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-cream/55 to-cream"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-cream via-cream/60 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-cream via-cream/60 to-transparent"
                  />
                </div>

                {/* Readability card */}
                <div className="relative z-20 w-full px-8">
                  <div className="mx-auto max-w-[30rem] rounded-[2rem] border border-white/45 bg-cream/68 px-8 py-8 text-center shadow-[0_18px_50px_rgba(44,44,44,0.10)] backdrop-blur-lg">
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

            {/* Right cues */}
            <div className="relative flex h-full min-h-[720px] items-center">
              <CueColumnDecor side="right" />

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
