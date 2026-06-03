import Link from "next/link";
import { Flower2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const fees = [
  {
    label: "Psihoterapie individuală",
    value: "250 lei",
    detail: "50 minute",
  },
  {
    label: "Ședință terapie AF-EMDR",
    value: "300 lei",
    detail: "50 minute",
  },
  {
    label: "Terapie online",
    value: "250 lei",
    detail: "50 minute",
  },
  {
    label: "Evenimente și programe de grup",
    value: "Preț variabil",
    detail: "în funcție de program",
  },
] as const;

export default function FeesSection() {
  return (
    <Section
      id="tarife"
      aria-labelledby="fees-heading"
      background="cream"
      spacing="none"
      className="relative overflow-hidden py-12 md:py-20 lg:py-28"
      backgroundImage={{
        src: "/services/services-fees.jpg",
        priority: true,
        overlayClassName: "bg-cream/30 md:bg-cream/20",
      }}
    >
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-cream/92 px-5 pb-7 pt-9 text-center shadow-sm ring-1 ring-charcoal/10 backdrop-blur-sm sm:px-10 sm:pb-10 sm:pt-12 md:px-14 md:py-14">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream shadow-sm ring-1 ring-charcoal/10 sm:size-16"
          >
            <Flower2 className="size-5 text-teal sm:size-7" />
          </div>

          <Heading
            id="fees-heading"
            as="h2"
            size="h2"
            align="center"
            className="text-3xl md:text-5xl lg:text-6xl"
          >
            Tarife
          </Heading>

          <div className="mt-6 divide-y divide-charcoal/10 sm:mt-9">
            {fees.map((fee) => (
              <div
                key={fee.label}
                className="grid gap-1 py-3.5 text-left sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 sm:py-5"
              >
                <div>
                  <p className="text-sm font-medium leading-snug text-charcoal sm:text-base">
                    {fee.label}
                  </p>

                  <p className="mt-0.5 text-xs leading-snug text-charcoal/60 sm:mt-1 sm:text-sm">
                    {fee.detail}
                  </p>
                </div>

                <p className="font-display text-base uppercase tracking-[0.08em] text-charcoal sm:text-right sm:text-xl">
                  {fee.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-xl text-xs leading-5 text-charcoal/65 sm:mt-8 sm:text-sm sm:leading-6">
            Pentru programe de grup, workshopuri sau evenimente, tariful poate
            varia în funcție de durată, format și numărul de participanți.
          </p>

          <div className="mt-5 flex justify-center sm:mt-8">
            <Button variant="urgent" className="w-full max-w-xs sm:w-auto">
              <Link href="/contact">Programează o discuție</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
