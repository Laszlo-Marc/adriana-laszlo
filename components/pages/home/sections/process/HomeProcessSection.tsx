import Section from "@/components/ui/Section";
import { HomeProcessDesktop } from "./HomeProcessDesktop";
import { HomeProcessMobile } from "./HomeProcessMobile";

export default function HomeProcessSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      className="relative overflow-hidden"
    >
      {/* soft continuity from previous section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-12 h-72 w-72 rounded-full bg-teal/8 blur-3xl"
      />

      <HomeProcessMobile />
      <HomeProcessDesktop />
    </Section>
  );
}
