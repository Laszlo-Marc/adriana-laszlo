import Image from "next/image";

import Section from "@/components/ui/Section";
import ServicesTeaserDesktop from "./ServiceTeaserDesktop";
import ServicesTeaserMobile from "./ServiceTeaserMobile";
export default function ServicesTeaserSection() {
  return (
    <Section
      id="servicii"
      background="cream"
      spacing="none"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-72 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <ServicesTeaserMobile />
      <ServicesTeaserDesktop />
    </Section>
  );
}
