import Image from "next/image";

import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";

const educationMethodCopy = {
  eyebrow: "Formare și metodă",
  title: "Lucru ghidat de formare, experiență și AF-EMDR.",
  body: "Procesul terapeutic este susținut de formare profesională continuă și de o abordare atentă a traumei, atașamentului și reglării emoționale.",
  points: [
    "Psihoterapie integrativă",
    "Specializare AF-EMDR",
    "Lucru cu trauma și atașamentul",
  ],
  closing:
    "Un proces blând, dar clar structurat, pentru lucru profund și sigur.",
};

export default function EducationMethodMobileSection() {
  return (
    <section className="relative overflow-hidden bg-cream lg:hidden">
      <div className="relative min-h-168">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/home-page/method.jpg"
            alt="Detaliu din cabinetul de psihoterapie și materiale de lucru"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[42rem] items-end px-6 py-12">
          <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-white/50 bg-cream/92 p-7 shadow-[0_18px_55px_rgba(44,44,44,0.16)] backdrop-blur-sm">
            <AccentText className="block text-center text-2xl leading-none text-gold">
              {educationMethodCopy.eyebrow}
            </AccentText>

            <Heading
              as="h2"
              size="h2"
              color="charcoal"
              align="center"
              className="mt-4 text-balance leading-[1.08]"
            >
              {educationMethodCopy.title}
            </Heading>

            <Text
              as="p"
              size="base"
              color="muted"
              align="center"
              className="mt-5 text-pretty leading-7"
            >
              {educationMethodCopy.body}
            </Text>

            <div className="mx-auto mt-6 h-px w-16 bg-gold/35" />

            <div className="mt-6 space-y-3">
              {educationMethodCopy.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start justify-center gap-3 text-center"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <Text
                    as="p"
                    size="base"
                    color="charcoal"
                    align="center"
                    className="text-pretty leading-6"
                  >
                    {point}
                  </Text>
                </div>
              ))}
            </div>

            <Text
              as="p"
              size="sm"
              color="muted"
              align="center"
              className="mt-6 italic leading-6"
            >
              {educationMethodCopy.closing}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
