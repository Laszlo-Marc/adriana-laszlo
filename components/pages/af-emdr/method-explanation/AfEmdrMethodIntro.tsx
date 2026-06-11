import Section from "@/components/ui/Section";

import { afEmdrMethodContent } from "../afEmdrContent";
import AfEmdrMethodDesktop from "./AfEmdrMethodDesktop";
import AfEmdrMethodMobile from "./AfEmdrMethodMobile";

export default function AfEmdrMethodSection() {
  return (
    <Section
      id="cum-functioneaza"
      background="cream"
      spacing="none"
      aria-labelledby="af-emdr-method-title"
      className="relative "
      allowOverflow
    >
      <span id="af-emdr-method-title" className="sr-only">
        {afEmdrMethodContent.eyebrow}
      </span>

      <AfEmdrMethodDesktop />
      <AfEmdrMethodMobile />
    </Section>
  );
}
