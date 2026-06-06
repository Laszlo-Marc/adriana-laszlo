import { CalendarDays, Clock, LayoutList, MapPin, Wallet } from "lucide-react";

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
      number: "05",
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
      spacing="sm"
      aria-labelledby="event-quick-info-title"
      className="relative overflow-hidden"
    >
      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Detalii program
          </p>

          <h2
            id="event-quick-info-title"
            className="mt-3 font-accent text-5xl leading-none text-charcoal md:text-6xl"
          >
            Informații esențiale
          </h2>

          <Text
            size="lg"
            align="center"
            className="mx-auto mt-4 max-w-2xl text-charcoal/68"
          >
            Tot ce ai nevoie să știi înainte de înscriere, într-un format clar
            și ușor de parcurs.
          </Text>
        </div>

        {/* Mobile snap carousel */}
        <div className="-mx-4 mt-9 overflow-hidden md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-5 scrollbar-hide">
            {infoItems.map((item) => (
              <InfoCard key={item.label} item={item} variant="mobile" />
            ))}

            <div aria-hidden="true" className="w-4 shrink-0" />
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-10 hidden overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal/10 shadow-[0_22px_80px_rgba(44,44,44,0.045)] md:grid md:grid-cols-2 lg:grid-cols-3">
          {infoItems.map((item) => (
            <InfoCard key={item.label} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function InfoCard({
  item,
  variant = "desktop",
}: {
  item: {
    icon: React.ComponentType<{
      size?: number;
      strokeWidth?: number;
      className?: string;
    }>;
    number: string;
    label: string;
    value: string;
  };
  variant?: "mobile" | "desktop";
}) {
  const Icon = item.icon;

  return (
    <article
      className={[
        "group relative flex flex-col items-center justify-center bg-white/82 p-6 text-center transition duration-300 hover:bg-cream/80",
        variant === "mobile"
          ? "min-h-[13rem] w-[74vw] max-w-[18rem] shrink-0 snap-start rounded-[1.75rem] border border-charcoal/10  "
          : "min-h-[13rem]",
      ].join(" ")}
    >
      <div className="flex size-11 items-center justify-center rounded-full bg-cream text-charcoal/66 transition duration-300 group-hover:bg-teal/25 group-hover:text-charcoal">
        <Icon size={18} strokeWidth={1.7} />
      </div>

      <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">
        {item.number} · {item.label}
      </p>

      <p className="mt-3 max-w-[15rem] text-base leading-relaxed text-charcoal/78">
        {item.value}
      </p>

      <div
        aria-hidden="true"
        className="mt-5 h-px w-10 bg-gold/45 transition-all duration-300 group-hover:w-16"
      />
    </article>
  );
}
