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
      <ServicesTeaserMobile />
      <ServicesTeaserDesktop />
    </Section>
  );
}
