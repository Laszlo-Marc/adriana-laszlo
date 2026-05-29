import Image from "next/image";

import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";
import { problemsContent } from "./problemsContent";

const problemsMobileCopy = {
  eyebrow: "Când trauma rămâne prezentă",
  title: "Trauma nu este mereu evidentă.",
  intro:
    "Poate nu are forma unei amintiri clare. Poate se simte ca tensiune în corp, ca oboseală, ca teamă de apropiere sau ca reacții pe care nu le poți opri la timp.",
  accent: "Poate o parte din tine încă este în alertă.",
  reassurance: [
    "Nu pentru că ești „prea sensibil/ă”.",
    "Nu pentru că este ceva greșit cu tine.",
  ],
  explanation:
    "Ci pentru că, la un moment dat, corpul tău a învățat să te protejeze.",
  closing:
    "În terapie, începem de acolo: cu siguranță, cu ritm și cu blândețea necesară pentru a înțelege ce se află dincolo de simptome.",
};

export default function HomeProblemsMobileStory() {
  return (
    <div className="relative overflow-hidden bg-cream lg:hidden">
      {/* Editorial image opening */}
      <div className="relative pb-12 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-44 bg-purple-soft"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-24 h-48 w-48 rounded-full bg-teal/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-10 h-44 w-44 rounded-full bg-purple/12 blur-3xl"
        />

        <div className="relative z-10 mx-auto h-60 w-48 overflow-hidden shadow-[0_18px_55px_rgba(44,44,44,0.16)]">
          <Image
            src={problemsContent.image.src}
            alt={problemsContent.image.alt}
            fill
            sizes="192px"
            className="object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-charcoal/8"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-cream/40 blur-3xl"
        />
      </div>

      {/* Editorial text composition */}
      <div className="relative z-10 mx-auto px-6 ">
        <AccentText className="block  text-[2.5rem] leading-[1.02] text-charcoal">
          Trauma nu este mereu{" "}
          <span className="font-semibold text-purple">evidentă.</span>
        </AccentText>

        <div className="mt-6 space-y-8">
          <Text
            as="p"
            size="lg"
            color="charcoal"
            className="text-pretty leading-8"
            align="center"
          >
            {problemsMobileCopy.intro}
          </Text>

          <AccentText className="block  text-[2.5rem] leading-[1.02] text-charcoal">
            Poate o parte din tine încă este în{" "}
            <span className="text-purple">alertă.</span>
          </AccentText>

          <div className="space-y-3">
            {problemsMobileCopy.reassurance.map((line) => (
              <Text
                key={line}
                as="p"
                size="lg"
                align="center"
                color="charcoal"
                className="text-balance font-display leading-8 tracking-[-0.01em]"
              >
                {line}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
