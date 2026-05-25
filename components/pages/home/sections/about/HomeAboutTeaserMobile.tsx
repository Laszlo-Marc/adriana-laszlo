import Image from "next/image";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Heading from "@/components/ui/Heading";

export default function HomeAboutTeaserMobile() {
  return (
    <div className="relative overflow-hidden bg-cream lg:hidden">
      <div className="mx-auto max-w-xl px-6 pb-20 pt-12">
        {/* Intro copy */}
        <div className="relative z-10 text-center">
          <AccentText className="justify-center  text-2xl text-center text-gold">
            Povestea mea
          </AccentText>

          <Heading
            as="h2"
            size="h1"
            color="charcoal"
            align="center"
            case="upper"
            className="mt-4"
          >
            Despre mine
          </Heading>
        </div>

        {/* Editorial portrait composition */}
        <div className="relative mt-11 pb-8">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple/16 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-4 top-20 h-32 w-32 rounded-full bg-teal/10 blur-2xl"
          />
          {/* subtle teal glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-2 h-52 w-52 rounded-full bg-teal/12 blur-3xl"
          />

          {/* dragonfly accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-2 top-[13.5rem] z-30 w-24 opacity-30"
          >
            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={140}
              height={140}
              sizes="96px"
              className="h-auto w-full max-w-none"
            />
          </div>

          {/* image */}
          <div className="relative z-20 mx-auto aspect-4/5 w-[72%] max-w-84 overflow-hidden rounded-[2.5rem] bg-white/70 p-2 shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
            <div className="relative h-full w-full overflow-hidden rounded-4xl">
              <Image
                src="/home-page/about.jpg"
                alt="Portret Adriana Laszlo"
                fill
                className="object-cover object-[center_18%]"
                sizes="72vw"
                priority={false}
              />
            </div>
          </div>

          <AccentText className="mx-auto mt-6 block max-w-sm text-[2.25rem] leading-[1.05] text-charcoal text-center">
            Un spațiu sigur, construit pentru vindecare.
          </AccentText>
        </div>

        {/* Text */}
        <div className="relative z-10 mx-auto mt-2 max-w-md text-center">
          <Text className="text-base leading-8 text-charcoal/80" align="center">
            Terapia începe cu o relație în care te poți simți văzut, înțeles și
            susținut — mai ales atunci când lucrurile sunt greu de pus în
            cuvinte.
          </Text>

          <div className="mt-8">
            <Button href="/despre" size="lg" className="w-full sm:w-auto">
              Citește povestea completă
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
