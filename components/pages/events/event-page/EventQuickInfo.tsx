import {
  CalendarDays,
  CheckCircle2,
  Clock,
  LayoutList,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import type { EventDetail } from "./eventData";

type EventQuickInfoProps = {
  event: EventDetail;
};

export default function EventQuickInfo({ event }: EventQuickInfoProps) {
  const infoItems = [
    {
      icon: CalendarDays,
      number: "01",
      label: "Dată",
      value: event.quickInfo.date,
    },
    {
      icon: Clock,
      number: "02",
      label: "Oră",
      value: event.quickInfo.time,
    },
    {
      icon: Clock,
      number: "03",
      label: "Durată",
      value: event.quickInfo.duration,
    },
    {
      icon: LayoutList,
      number: "04",
      label: "Format",
      value: event.quickInfo.format,
    },
    {
      icon: MapPin,
      number: "07",
      label: "Locație",
      value: event.quickInfo.location,
    },
    {
      icon: Wallet,
      number: "06",
      label: "Cost",
      value: event.quickInfo.cost,
    },
  ];

  return (
    <Section
      background="white"
      spacing="md"
      aria-labelledby="event-quick-info-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
      />

      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Detalii program
          </p>

          <h2
            id="event-quick-info-title"
            className="mt-4 font-accent text-5xl leading-none text-charcoal md:text-7xl"
          >
            Informații esențiale
          </h2>

          <Text
            size="lg"
            align="center"
            className="mx-auto mt-5 max-w-2xl text-charcoal/68"
          >
            Tot ce ai nevoie să știi înainte de înscriere, într-un format clar
            și ușor de parcurs.
          </Text>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal/10 shadow-[0_22px_80px_rgba(44,44,44,0.045)] sm:grid-cols-2 lg:grid-cols-3">
          {infoItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group relative min-h-[11rem] bg-white/82 p-6 transition duration-300 hover:bg-cream/80 md:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">
                      {item.number} · {item.label}
                    </p>

                    <p className="mt-4 max-w-xs text-base leading-relaxed text-charcoal/78">
                      {item.value}
                    </p>
                  </div>

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-charcoal/66 transition duration-300 group-hover:bg-teal/25 group-hover:text-charcoal">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-5 left-6 h-px w-10 bg-gold/45 transition-all duration-300 group-hover:w-16 md:left-7"
                />
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
