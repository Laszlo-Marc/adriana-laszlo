import Image from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Heading from "@/components/ui/Heading";
import { aboutStoryContent } from "./aboutStoryContent";

export default function HomeAboutTeaserMobile() {
  return (
    <div className="relative overflow-hidden bg-cream lg:hidden">
      {/* Soft background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-[34rem] h-80 w-80 rounded-full bg-purple/10 blur-3xl"
      />

      <div className="mx-auto max-w-xl px-6 pb-20 pt-14">
        {/* Header */}
        <div className="relative z-10 text-center">
          <AccentText className="block text-center text-2xl leading-none text-gold">
            Povestea mea
          </AccentText>

          <Heading
            as="h2"
            size="h1"
            color="charcoal"
            align="center"
            case="upper"
            className="mt-4 text-balance"
          >
            Despre mine
          </Heading>
        </div>

        {/* Portrait scene */}
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[420px] w-[280px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
          >
            <Image
              src="/backgrounds/single-vine.png"
              alt=""
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>

          <div className="relative z-10 mx-auto h-[390px] w-full max-w-sm overflow-hidden rounded-t-[11rem] rounded-b-[2rem] bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.10)]">
            <Image
              src={aboutStoryContent.leftImage.src}
              alt={aboutStoryContent.leftImage.alt}
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width: 640px) 88vw, 360px"
              priority={false}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cream/8"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cream/55 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cream/45 to-cream/88"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream/50 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream/50 to-transparent"
            />
          </div>

          <AccentText className="relative z-20 mx-auto -mt-8 block max-w-sm text-center text-[2.35rem] leading-[1.02] text-charcoal">
            Un spațiu sigur, construit pentru vindecare.
          </AccentText>
        </div>

        {/* Editorial chapter list */}
        <div className="relative z-10 mx-auto mt-11 max-w-sm">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-purple/8 blur-3xl"
          />

          <div className="relative divide-y divide-gold/30 border-y border-gold/35">
            {aboutStoryContent.chapters.map((chapter, index) => (
              <article
                key={chapter.title}
                className="grid grid-cols-[2.75rem_1fr] gap-4 py-6 text-left"
              >
                <Text
                  as="p"
                  size="xs"
                  color="gold"
                  weight="medium"
                  transform="upper"
                  className="pt-1 tracking-[0.18em]"
                >
                  {String(index + 1).padStart(2, "0")}
                </Text>

                <div>
                  <AccentText className="mb-2 block text-xl leading-none text-gold">
                    {chapter.eyebrow}
                  </AccentText>

                  <Heading
                    as="h3"
                    size="h4"
                    color="charcoal"
                    case="upper"
                    className="text-balance"
                  >
                    {chapter.title}
                  </Heading>

                  <Text
                    as="p"
                    size="base"
                    color="muted"
                    className="mt-3 text-pretty leading-7"
                  >
                    {chapter.body}
                  </Text>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 mx-auto mt-9 max-w-sm text-center">
          <Button
            href={aboutStoryContent.cta.href}
            size="lg"
            className="w-full"
          >
            {aboutStoryContent.cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
