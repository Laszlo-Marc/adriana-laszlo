"use client";

import Image from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import AnimatedTextCycle from "@/components/ui/AnimatedTextCycle";
import { aboutStoryContent } from "./aboutStoryContent";

const aboutMobileCopy = {
  welcome: "Bine ai venit, eu sunt Adriana.",
  accentStart: "This space is for",
  accentWords: ["healing.", "transformation.", "you."],
  intro: (
    <>
      Sunt{" "}
      <strong className="font-semibold  text-charcoal">
        psihoterapeut specializat
      </strong>{" "}
      în lucrul cu trauma.
    </>
  ),
  safety: (
    <>
      Aici îți ofer un spațiu sigur, cald și clar, în care{" "}
      <em className="font-medium italic text-charcoal">
        nu trebuie să explici perfect ce simți
      </em>{" "}
      și nu trebuie să ai deja toate răspunsurile.
    </>
  ),
  accent: "Lucrăm cu blândețe, dar și cu profunzime.",
  depth: (
    <>
      Nu doar pentru a gestiona simptomele, ci pentru a înțelege ce se află la{" "}
      <em className="font-medium italic text-charcoal">rădăcina lor</em> și
      pentru a reconstrui siguranța interioară, pas cu pas.
    </>
  ),
  closing:
    "Dacă o parte din tine simte că este timpul să nu mai duci totul singur/ă, putem începe de aici.",
};

export default function HomeAboutTeaserMobile() {
  return (
    <div className="relative mt-10 overflow-hidden bg-white lg:hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-44 bg-teal"
      />
      <div className="mx-auto max-w-xl px-6 pb-20 pt-6">
        <div className="relative mx-auto max-w-sm">
          {/* Welcome text */}
          <div className="relative z-30 max-w-[18rem]">
            <AccentText className="block text-[3rem] leading-[0.95] text-charcoal">
              {aboutMobileCopy.welcome}
            </AccentText>
          </div>

          {/* Image */}
          <div className="relative z-10 -mt-6 ml-auto w-[95%] overflow-hidden bg-sand/10">
            <Image
              src="/home-page/about2.jpg"
              alt="Adriana Laszlo într-un cabinet de psihoterapie calm"
              width={1536}
              height={944}
              className="h-auto w-full object-contain"
              sizes="(max-width: 640px) 95vw, 380px"
              priority={false}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cream/20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-sand/60"
            />
          </div>

          {/* Animated slogan */}
          <div className="relative z-20 mt-8 ">
            <AccentText className="block text-[3.15rem] leading-[0.95] text-charcoal">
              {aboutMobileCopy.accentStart}{" "}
              <AnimatedTextCycle
                words={aboutMobileCopy.accentWords}
                interval={3000}
                className="text-charcoal"
              />
            </AccentText>
          </div>
        </div>

        {/* Editorial text block */}
        <div className="relative z-10  mt-8 ">
          <div className=" mt-8 space-y-4">
            <Text as="p" className="text-pretty italic text-[1.3rem]">
              Sunt psihoterapeut specializat în lucrul cu{" "}
              <AccentText className="text-4xl">trauma.</AccentText>
            </Text>

            <Text
              as="p"
              size="lg"
              color="charcoal"
              align="center"
              className=" text-pretty leading-8"
            >
              {aboutMobileCopy.safety}
            </Text>

            <div className="py-2">
              <AccentText className=" block text-[2.45rem] leading-[1.03] text-charcoal">
                {aboutMobileCopy.accent}
              </AccentText>
            </div>

            <Text
              as="p"
              size="lg"
              color="charcoal"
              align="center"
              className="text-pretty leading-8"
            >
              {aboutMobileCopy.depth}
            </Text>
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
