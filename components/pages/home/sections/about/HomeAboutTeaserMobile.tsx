import Image from "next/image";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Heading from "@/components/ui/Heading";

export default function HomeAboutTeaserMobile() {
  return (
    <div className="relative overflow-hidden lg:hidden">
      <div className="mx-auto max-w-xl">
        {/* Image header */}
        <div className="relative -mx-4 h-[460px] overflow-hidden bg-sand/30 sm:-mx-6 sm:h-[520px]">
          <Image
            src="/adriana8.PNG"
            alt="Portret Adriana Laszlo"
            fill
            className="object-cover object-[center_18%]"
            sizes="100vw"
            priority={false}
          />

          {/* subtle top shade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/15 to-transparent"
          />

          {/* strong image fade into section background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-purple-soft/60 to-purple-soft/18"
          />

          {/* readability veil behind title */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-purple-soft/85"
          />

          {/* section label over fade */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 text-center">
            <Heading
              as="h2"
              size="h1"
              color="charcoal"
              case="upper"
              className="tracking-[0.16em]"
              align="center"
            >
              Despre mine
            </Heading>
          </div>
        </div>

        {/* Content */}
        <div className="relative overflow-hidden bg-purple/18 px-6 pb-10 pt-4 sm:px-8 sm:pb-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[25%] top-0 z-0 -translate-x-1/2"
          >
            <Image
              src="/backgrounds/double-split.png"
              alt=""
              width={180}
              height={1100}
              sizes="180px"
              className="h-auto w-40 max-w-none opacity-35"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-50 z-0 -translate-x-1/2"
          >
            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={140}
              height={140}
              sizes="180px"
              className="h-auto w-30 max-w-none opacity-35"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <AccentText className="text-[2.5rem] leading-none text-charcoal">
              Un spațiu în care poți fi tu, fără presiune.
            </AccentText>

            <Text
              className="mt-6 text-base leading-7 text-charcoal/80"
              align="center"
            >
              Terapia nu înseamnă doar tehnică. Înseamnă o relație în care te
              poți simți în siguranță, înțeles și susținut, chiar și atunci când
              lucrurile sunt dificile.
            </Text>

            <Text
              className="text-sm italic leading-6 text-charcoal/60"
              align="center"
            >
              Fără grabă. Fără judecată.
            </Text>

            <AccentText className="text-[2.5rem] leading-none text-charcoal">
              Lucrăm împreună pentru a înțelege și a vindeca.
            </AccentText>

            <Text className="text-sm leading-6 text-charcoal/70" align="center">
              În ritmul tău, cu metode adaptate nevoilor tale – inclusiv
              abordarea AF-EMDR pentru procesarea traumelor.
            </Text>

            <div className="mt-8">
              <Button href="/despre" size="lg" className="w-full sm:w-auto">
                Citește povestea completă
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
