import Section from "@/components/ui/Section";

import EducationMethodDesktopSection from "./desktop/EducationMethodDesktopSection";
import EducationMethodMobileSection from "./EducationMethodMobileSection";

export default function EducationMethodSection() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="education-method-title"
      className="relative"
      allowOverflow
    >
      <span id="education-method-title" className="sr-only">
        Formare, metodă terapeutică și programe ghidate
      </span>

      <EducationMethodMobileSection />
      <EducationMethodDesktopSection />
    </Section>
  );
}
