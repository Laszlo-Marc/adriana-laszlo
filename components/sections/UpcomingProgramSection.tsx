import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";

type UpcomingProgram = {
  status?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  secondaryHref?: string;
  dateLabel?: string;
  audience?: string;
};

const featuredProgram: UpcomingProgram = {
  status: "În curând",
  title: "Program de grup pentru reglare emoțională și vindecarea traumei",
  description:
    "Un spațiu ghidat, blând și sigur, dedicat persoanelor care își doresc mai multă claritate, stabilitate interioară și sprijin în procesul de vindecare.",
  imageSrc: "/events/emdr.webp",
  imageAlt: "Participanți într-un program terapeutic de grup",
  href: "/programe/program-viitor",
  secondaryHref: "/programe",
  dateLabel: "Toamnă 2026",
  audience: "Pentru adulți",
};

export default function UpcomingProgramsSection() {
  const program = featuredProgram;

  return (
    <Section
      background="purple"
      spacing="sm"
      aria-labelledby="upcoming-programs-heading"
      className="relative overflow-hidden"
    >
      <Image
        aria-hidden="true"
        src="/backgrounds/single.png"
        alt=""
        width={300}
        height={180}
        className="pointer-events-none absolute left-20 top-0 hidden opacity-60 lg:block"
      />
      <Image
        aria-hidden="true"
        src="/backgrounds/single.png"
        alt=""
        width={300}
        height={180}
        className="pointer-events-none absolute rotate-180 right-20 top-0 hidden opacity-60 lg:block"
      />
      <Image
        aria-hidden="true"
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={200}
        height={180}
        className="pointer-events-none absolute  left-20 top-0 hidden opacity-60 lg:block"
      />
      <Image
        aria-hidden="true"
        src="/backgrounds/dragonfly.png"
        alt=""
        width={200}
        height={180}
        className="pointer-events-none absolute  left-30 bottom-0 hidden opacity-60 lg:block"
      />
      <Image
        aria-hidden="true"
        src="/backgrounds/df-teal-down.png"
        alt=""
        width={200}
        height={180}
        className="pointer-events-none absolute  right-20 top-0 hidden opacity-60 lg:block"
      />
      <Image
        aria-hidden="true"
        src="/backgrounds/dragonfly.png"
        alt=""
        width={200}
        height={180}
        className="pointer-events-none absolute  right-30 bottom-0 hidden opacity-60 lg:block"
      />
      <Container size="full" padding="none">
        <div className="relative flex min-h-[70svh] items-center  lg:min-h-[80svh] ">
          <div className="mx-auto flex w-full flex-col items-center text-center">
            <AccentText className="text-cream/90 text-4xl">
              Programe viitoare
            </AccentText>

            <Heading as="h2" className="mt-4  text-white" align="center">
              Un nou spațiu de lucru terapeutic, creat cu grijă
            </Heading>

            <Text size="lg" color="cream" className="mt-4" align="center">
              Descoperă următorul program sau atelier disponibil și află dacă
              este potrivit pentru etapa în care te afli acum.
            </Text>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {program.dateLabel ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-medium text-white/88">
                  <CalendarDays className="h-4 w-4" />
                  {program.dateLabel}
                </span>
              ) : null}

              {program.audience ? (
                <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-medium text-white/88">
                  {program.audience}
                </span>
              ) : null}
            </div>

            <article className="group relative mt-10 w-full max-w-[24rem] sm:max-w-180 overflow-hidden rounded-4xl border border-white/12 bg-white/8 shadow-[0_24px_80px_rgba(24,16,34,0.24)] backdrop-blur-[2px]">
              <div className="relative aspect-video">
                <Image
                  src={program.imageSrc}
                  alt={program.imageAlt}
                  fill
                  priority={false}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 70vw, 92vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-charcoal/10 to-transparent" />

                {program.status ? (
                  <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                    <span className="inline-flex rounded-full bg-cream px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal shadow-sm">
                      {program.status}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="space-y-4 px-5 py-6 sm:px-6 sm:py-7">
                <Heading
                  as="h3"
                  size="h3"
                  className="text-white"
                  align="center"
                >
                  {program.title}
                </Heading>

                <Text color="cream" className="text-white/80" align="center">
                  {program.description}
                </Text>

                <div className="pt-1">
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cream transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-purple"
                  >
                    Vezi detalii
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<Mail className="hidden sm:block" />}
              >
                <Link href={program.href}>Înscrie-te / Află mai multe</Link>
              </Button>

              {program.secondaryHref ? (
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<ArrowRight className="hidden sm:block" />}
                >
                  <Link href={program.secondaryHref}>
                    Vezi toate programele
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
