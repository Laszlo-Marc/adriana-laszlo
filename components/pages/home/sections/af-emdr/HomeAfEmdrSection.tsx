import Section from "@/components/ui/Section";
import { HomeAfEmdrMobile } from "./HomeAfEmdrMobile";
import { HomeAfEmdrDesktop } from "./HomeAfEmdrDesktop";

export default function HomeAfEmdrSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="af-emdr-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <HomeAfEmdrMobile />
      <HomeAfEmdrDesktop />
    </Section>
  );
}
