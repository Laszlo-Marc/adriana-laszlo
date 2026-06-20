import Image from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import AnimatedTextCycle from "@/components/ui/AnimatedTextCycle";
import { aboutStoryContent } from "./aboutStoryContent";

const aboutMobileCopy = {
  welcome: "Bine ai venit, eu sunt Adriana.",
  accentStart: "Acest spațiu este pentru",
  accentWords: ["vindecare.", "claritate.", "tine."],
  safety: (
    <>
      Aici îți ofer un spațiu sigur, cald și clar, în care{" "}
      <em className="font-medium italic text-charcoal">
        nu trebuie să explici perfect ce simți
      </em>{" "}
      și nu trebuie să ai deja toate răspunsurile.
    </>
  ),
  accent: "Lucrez cu blândețe, dar și cu profunzime.",
  depth: (
    <>
      Nu doar pentru a gestiona simptomele, ci pentru a înțelege ce se află la{" "}
      <em className="font-medium italic text-charcoal">rădăcina lor</em> și
      pentru a reconstrui siguranța interioară, pas cu pas.
    </>
  ),
};

export default function HomeAboutTeaserMobile() {
  return (
    <div className="relative mt-10 overflow-hidden bg-cream lg:hidden">
      <span id="home-about-title-mobile" className="sr-only">
        Despre Adriana Laszlo
      </span>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-teal"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-90 z-20 w-30 opacity-30"
      >
        <Image
          src="/backgrounds/df-teal-down.png"
          alt=""
          width={48}
          height={48}
          sizes="120px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 left-10 z-20 w-30 opacity-30"
      >
        <Image
          src="/backgrounds/df-teal-down.png"
          alt=""
          width={48}
          height={48}
          sizes="120px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 z-0 w-80 -translate-x-1/2 opacity-30"
      >
        <Image
          src="/backgrounds/double-split.png"
          alt=""
          width={160}
          height={500}
          sizes="320px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="mx-auto max-w-xl px-6 pb-20 pt-6">
        <div className="relative mx-auto max-w-sm">
          <div className="relative z-30 ">
            <AccentText
              as="h2"
              className="block text-[2.5rem] leading-[0.95] text-charcoal text-center"
            >
              {aboutMobileCopy.welcome}
            </AccentText>
          </div>

          <div className="relative z-10 ml-auto w-[95%] overflow-hidden bg-sand/10">
            <Image
              src="/home-page/about-2.jpg"
              alt="Adriana Laszlo într-un cabinet de psihoterapie calm"
              width={1536}
              height={944}
              sizes="(max-width: 640px) 95vw, (max-width: 1023px) 380px, 1px"
              className="h-auto w-full object-contain"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cream/20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-sand/60"
            />
          </div>

          <div className="relative z-20 mt-8">
            <AccentText className="block text-[3.15rem] text-center leading-[0.95] text-charcoal">
              {aboutMobileCopy.accentStart}{" "}
              <AnimatedTextCycle
                words={aboutMobileCopy.accentWords}
                interval={3000}
                className="text-charcoal"
              />
            </AccentText>
          </div>
        </div>

        <div className="relative z-10 mt-8">
          <div className="mt-8 space-y-4">
            <Text
              as="p"
              className="text-pretty text-[1.3rem] italic"
              align="center"
            >
              Sunt psihoterapeut specializat în lucrul cu{" "}
              <AccentText className="text-4xl">trauma.</AccentText>
            </Text>

            <div className="py-2">
              <AccentText className="block text-[2.45rem] leading-[1.03] text-center text-charcoal">
                {aboutMobileCopy.accent}
              </AccentText>
            </div>
          </div>

          <div className="mt-9">
            <Button
              href={aboutStoryContent.cta.href}
              size="lg"
              className="w-full"
              variant="primary"
            >
              {aboutStoryContent.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
