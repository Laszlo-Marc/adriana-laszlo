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
            src="/adriana3.webp"
            alt="Portret Adriana Laszlo"
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority={false}
          />

          {/* subtle overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/10 via-transparent to-transparent" />

          <div className="absolute left-2 top-2 z-10 max-w-none -mt-10">
            <AccentText className="text-[3rem] leading-none text-charcoal">
              Bun venit, eu sunt Adriana
            </AccentText>
          </div>
        </div>

        <div className="bg-cream px-6 py-10 sm:px-8 sm:py-12">
          <div className="max-w-xl">
            <Heading align="center" size="h2" as="h4" className="mb-6">
              Exemplu de propozitie
            </Heading>

            <Text className="text-base leading-8 text-charcoal/82">
              Experiența terapeutică nu înseamnă doar tehnică, ci o relație în
              care te poți simți în siguranță, înțeles și susținut. Descoperă
              povestea, formarea și perspectiva care stau la baza modului în
              care Adriana lucrează cu trauma, atașamentul și reprocesarea prin
              AF-EMDR.
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
