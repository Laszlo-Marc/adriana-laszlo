import Image from "next/image";

import Section from "@/components/ui/Section";
import ServicesTeaserDesktop from "./ServiceTeaserDesktop";
import ServicesTeaserMobile from "./ServiceTeaserMobile";
export default function ServicesTeaserSection() {
  return (
    <Section
      id="servicii"
      background="cream"
      spacing="md"
      className="relative overflow-hidden"
    >
      <ServicesTeaserMobile />
      <ServicesTeaserDesktop />
    </Section>
  );
}
