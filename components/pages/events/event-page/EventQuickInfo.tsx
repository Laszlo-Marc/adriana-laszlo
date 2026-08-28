import type { ComponentType } from "react";
import { CalendarDays, Clock, LayoutList, MapPin, Wallet } from "lucide-react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import type { EventDetail } from "./eventData";
import { cn } from "@/lib/utils";

type EventQuickInfoProps = {
  event: EventDetail;
};

type InfoItem = {
  icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
    "aria-hidden"?: boolean | "true";
  }>;
  number: string;
  label: string;
  value: string;
};

export default function EventQuickInfo({ event }: EventQuickInfoProps) {
  const infoItems: InfoItem[] = [
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
          <Text
            as="p"
            size="xs"
            weight="medium"
            transform="upper"
            color="gold"
            align="center"
            className="tracking-[0.3em]"
          >
            Detalii program
          </Text>

          <Heading
            id="event-quick-info-title"
            as="h2"
            size="h2"
            align="center"
            className="mt-3"
            textCase="uppercase"
          >
            Informații esențiale
          </Heading>

          <Text
            size="lg"
            align="center"
            className="mx-auto mt-4 max-w-2xl text-charcoal/68"
          >
            Tot ce ai nevoie să știi înainte de înscriere, într-un format clar
            și ușor de parcurs.
          </Text>
        </div>

        <div className="-mx-4 mt-9 overflow-hidden md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-5 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {infoItems.map((item, index) => (
              <InfoCard
                key={item.label}
                item={item}
                index={index}
                variant="mobile"
              />
            ))}

            <div aria-hidden="true" className="w-4 shrink-0" />
          </div>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-4xl border border-charcoal/10 bg-white shadow-[0_22px_80px_rgba(44,44,44,0.045)] md:grid md:grid-cols-2 lg:grid-cols-3">
          {infoItems.map((item, index) => (
            <InfoCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function InfoCard({
  item,
  index,
  variant = "desktop",
}: {
  item: InfoItem;
  index: number;
  variant?: "mobile" | "desktop";
}) {
  const Icon = item.icon;
  const isPurple = index % 2 === 1;

  return (
    <article
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 text-center transition duration-300 motion-reduce:transition-none",
        isPurple
          ? "bg-purple/70 hover:bg-purple/82"
          : "bg-teal/70 hover:bg-teal/82",
        variant === "mobile"
          ? "min-h-52 w-[74vw] max-w-[18rem] shrink-0 snap-start rounded-[1.75rem] border border-white/50 shadow-[0_18px_50px_rgba(44,44,44,0.08)]"
          : "min-h-52 border border-white/45",
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-full border border-white/45 bg-white/35 text-charcoal/75 backdrop-blur-sm transition duration-300 group-hover:bg-white/55 group-hover:text-charcoal motion-reduce:transition-none">
        <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
      </div>

      <Text
        as="p"
        size="lg"
        weight="medium"
        transform="upper"
        align="center"
        className="mt-5 tracking-[0.24em] text-charcoal font-semibold"
      >
        {item.label}
      </Text>

      <Text
        as="p"
        size="xl"
        align="center"
        className="mt-3 max-w-60 leading-relaxed font-semibold text-charcoal"
      >
        {item.value}
      </Text>

      <div
        aria-hidden="true"
        className="mt-5 h-px w-10 bg-white/70 transition-[width] duration-300 group-hover:w-16 motion-reduce:transition-none"
      />
    </article>
  );
}
