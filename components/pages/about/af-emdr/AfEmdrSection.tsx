import Section from "@/components/ui/Section";

import AfEmdrDesktop from "./AfEmdrDesktop";
import AfEmdrMobile from "./AfEmdrMobile";
import { afEmdrContent } from "./afEmdrContent";

export default function AfEmdrSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="about-af-emdr-heading"
      className="relative overflow-hidden"
    >
      <span id="about-af-emdr-heading" className="sr-only">
        {afEmdrContent.title}
      </span>

      <AfEmdrMobile />
      <AfEmdrDesktop />
    </Section>
  );
}
