import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

export default function HomeAboutTeaserMobile() {
  return (
    <div className="relative lg:hidden">
      <div className="mx-auto max-w-xl">
        <div className="relative aspect-5/6 rounded-[1.75rem] bg-sand/30">
          <Image
            src="/adriana8.PNG"
            alt="Portret Adriana Laszlo"
            fill
            className="object-cover object-[center_20%]"
            sizes="120vw"
            priority={false}
          />

          <div className="absolute inset-0 bg-linear-to-t from-charcoal/10 via-transparent to-transparent" />
        </div>

        <div className="relative overflow-hidden bg-purple/18 px-6 py-10 sm:px-8 sm:py-12">
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
              className="h-auto w-40 max-w-none opacity-40 "
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
