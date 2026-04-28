import Image from "next/image";
import { Award, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Section from "@/components/ui/Section";

const credentialPoints = [
  {
    title: "Formare în psihoterapie",
    text: "Bază profesională construită prin studii, supervizare și practică clinică.",
    icon: BookOpen,
  },
  {
    title: "Specializare în traumă",
    text: "Formări orientate spre înțelegerea traumei, atașamentului și reglării emoționale.",
    icon: ShieldCheck,
  },
  {
    title: "Attachment-Focused EMDR",
    text: "Formare specializată în AF-EMDR, cu accent pe traumă și siguranță relațională.",
    icon: Award,
  },
  {
    title: "Formare continuă",
    text: "Actualizare permanentă prin cursuri, acreditări și experiență clinică.",
    icon: Sparkles,
  },
];

export default function AboutCredentialsSection() {
  return (
    <Section
      id="formare-acreditari"
      aria-labelledby="credentials-heading"
      background="white"
      allowOverflow
      spacing="none"
    >
      <div className="grid min-h-svh lg:grid-cols-[1fr_1fr]">
        {/* LEFT TEXT */}
        <div className="flex items-center px-5 py-16 md:px-10 lg:px-20 lg:py-24">
          <div className="w-full max-w-3xl">
            <AccentText>Formare și acreditări</AccentText>

            <Heading as="h2" size="h2" className="mt-4 max-w-3xl">
              Formare in psihoterapie
            </Heading>

            <Text size="lg" className="mt-6 max-w-2xl text-charcoal/70">
              Pregătirea profesională a Adrianei îmbină formarea de bază în
              psihoterapie cu specializări relevante pentru lucrul cu trauma,
              atașamentul și procesarea experiențelor dificile.
            </Text>

            <div className="mt-10 grid gap-5">
              {credentialPoints.map((point) => (
                <CredentialPoint key={point.title} {...point} />
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-teal/20 bg-teal/8 p-5">
              <p className="font-serif text-xl italic leading-snug text-charcoal">
                „Formarea profesională nu este doar despre diplome, ci despre
                responsabilitatea cu care este construit procesul terapeutic.”
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE / DOCUMENT COLLAGE */}
        <div className="relative min-h-130 bg-cream lg:min-h-svh">
          <Image
            src="/backgrounds/grass.jpg"
            alt="Diplome și certificate profesionale în psihoterapie și EMDR"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-charcoal/25 via-transparent to-white/20" />

          <Image
            src="/backgrounds/df-purple-down.png"
            alt=""
            width={170}
            height={170}
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-8 opacity-35"
          />

          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/35 bg-white/75 p-5 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Specializare principală
            </p>

            <Heading as="h3" size="h4" className="mt-2">
              Attachment-Focused EMDR
            </Heading>

            <Text size="sm" className="mt-2 text-charcoal/70">
              Una dintre direcțiile centrale ale practicii terapeutice, cu
              accent pe traumă, atașament și siguranță emoțională.
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CredentialPoint({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex gap-4 border-b border-border/70 pb-5 last:border-b-0">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-purple/20 bg-purple/8 text-purple">
        <Icon className="size-5" />
      </div>

      <div>
        <h3 className="font-display text-xl uppercase tracking-wide text-charcoal">
          {title}
        </h3>

        <Text className="mt-2 text-charcoal/70">{text}</Text>
      </div>
    </div>
  );
}
