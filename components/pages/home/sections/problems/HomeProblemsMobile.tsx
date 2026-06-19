import Image from "next/image";

import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

const problemsMobileCopy = {
  eyebrow: "Când trauma rămâne prezentă",
  titleStart: "Trauma nu este mereu",
  titleAccent: "evidentă.",
  intro:
    "Poate nu are forma unei amintiri clare. Poate se simte ca tensiune în corp.",
  accentStart: "Poate o parte din tine încă este în",
  accentWord: "alertă.",
  reassurance: [
    "Nu pentru că ești „prea sensibil/ă”.",
    "Nu pentru că este ceva greșit cu tine.",
  ],
};

export default function HomeProblemsMobileStory() {
  return (
    <div className="relative bg-cream lg:hidden">
      <div className="relative pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-44 bg-purple-soft"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-30 z-0 h-60 w-45 -translate-x-1/2 opacity-40"
        >
          <Image
            src="/backgrounds/double-split.png"
            alt=""
            width={160}
            height={500}
            sizes="180px"
            className="h-auto w-full object-contain"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-7 top-36 z-20 w-20 rotate-12 opacity-70"
        >
          <Image
            src="/backgrounds/dragonfly.png"
            alt=""
            width={48}
            height={48}
            sizes="80px"
            className="h-auto w-full object-contain"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-10 z-20 w-25 opacity-70"
        >
          <Image
            src="/backgrounds/df-teal-down.png"
            alt=""
            width={48}
            height={48}
            sizes="100px"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto h-60 w-48 overflow-hidden shadow-[0_18px_55px_rgba(44,44,44,0.16)]">
          <Image
            src="/home-page/problems.jpg"
            alt="Moment de liniște și reflecție într-un proces terapeutic"
            fill
            sizes="(max-width: 1023px) 192px, 1px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto px-6">
        <Text
          as="p"
          size="xs"
          color="muted"
          weight="medium"
          transform="upper"
          align="center"
          className="mt-6 tracking-[0.18em]"
        >
          {problemsMobileCopy.eyebrow}
        </Text>

        <AccentText
          as="span"
          className="mt-4 block text-center text-[3rem] leading-[1.02] text-charcoal"
        >
          {problemsMobileCopy.titleStart}{" "}
          <span className="font-semibold text-purple">
            {problemsMobileCopy.titleAccent}
          </span>
        </AccentText>

        <div className="mt-6 space-y-8">
          <Text
            as="p"
            size="xl"
            color="charcoal"
            align="center"
            className="text-pretty leading-8"
          >
            {problemsMobileCopy.intro}
          </Text>

          <AccentText className="block text-center text-[3rem] leading-[1.02] text-charcoal">
            {problemsMobileCopy.accentStart}{" "}
            <span className="text-purple">{problemsMobileCopy.accentWord}</span>
          </AccentText>
        </div>
      </div>
    </div>
  );
}
