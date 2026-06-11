import Section from "@/components/ui/Section";
import { afEmdrSpecialistContent } from "../afEmdrContent";
import AfEmdrSpecialistDesktop from "./AfEmdrSpecialistDesktop";
import AfEmdrSpecialistMobile from "./AfEmdrSpecialistMobile";

export default function AfEmdrSpecialistSection() {
  return (
    <Section
      aria-labelledby="af-emdr-specialist-title"
      background="cream"
      spacing="xl"
      className="relative overflow-hidden"
    >
      <span id="af-emdr-specialist-title" className="sr-only">
        {afEmdrSpecialistContent.title}
      </span>

      <AfEmdrSpecialistDesktop />
      <AfEmdrSpecialistMobile />
    </Section>
  );
}
