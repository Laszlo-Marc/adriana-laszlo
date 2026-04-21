import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

export default function HomeAboutTeaserMobile() {
  return (
    <div className="relative lg:hidden">
      <div className="mx-auto  max-w-xl">
        <div className="relative aspect-5/6  rounded-[1.75rem] bg-sand/30">
          <Image
            src="/adriana8.PNG"
            alt="Portret Adriana Laszlo"
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority={false}
          />

          {/* subtle overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/10 via-transparent to-transparent" />

          <div className="absolute left-2 -top-10 z-10 rotate-[-10deg] text-charcoal">
            <div className="flex flex-col leading-none">
              <AccentText className="translate-y-1 text-[3.5rem] leading-none text-charcoal">
                Bine ai venit,
              </AccentText>
              <div className="-mt-2 flex items-end gap-3 pl-2">
                <AccentText className="translate-y-1 text-[3.5rem] leading-none text-charcoal">
                  eu sunt Adriana
                </AccentText>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple/18 px-6 py-10 sm:px-8 sm:py-12">
          <div className="max-w-xl space-y-6 text-center mx-auto">
            {/* Main statement */}
            <AccentText className="text-[2.5rem] leading-none text-charcoal">
              Un spațiu în care poți fi tu, fără presiune.
            </AccentText>

            {/* Supporting text */}
            <Text
              className="text-base leading-7 text-charcoal/80 mt-6"
              align="center"
            >
              Terapia nu înseamnă doar tehnică. Înseamnă o relație în care te
              poți simți în siguranță, înțeles și susținut, chiar și atunci când
              lucrurile sunt dificile.
            </Text>

            {/* Emphasis line */}
            <Text
              className="text-sm italic leading-6 text-charcoal/60"
              align="center"
            >
              Fără grabă. Fără judecată.
            </Text>

            {/* Stronger emotional anchor */}
            <AccentText className="text-[2.5rem] leading-none text-charcoal">
              Lucrăm împreună pentru a înțelege și a vindeca.
            </AccentText>

            {/* Closing reassurance */}
            <Text className="text-sm leading-6 text-charcoal/70" align="center">
              În ritmul tău, cu metode adaptate nevoilor tale – inclusiv
              abordarea AF-EMDR pentru procesarea traumelor.
            </Text>

            <div className="mt-8">
              <Button size="lg" className="w-full sm:w-auto">
                <Link href="/despre">Citește povestea completă</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
