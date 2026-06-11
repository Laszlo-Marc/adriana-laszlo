import Section from "@/components/ui/Section";

import ApproachProcessDesktop from "./ApproachProcessDesktop";
import ApproachProcessMobile from "./ApproachProcessMobile";
import { approachProcessContent } from "./approachProcessContent";

export default function ApproachProcessSection() {
  return (
    <Section
      background="cream"
      spacing="sm"
      aria-labelledby="approach-process-heading"
      className="relative overflow-hidden"
    >
      <span id="approach-process-heading" className="sr-only">
        {approachProcessContent.title}
      </span>

      <ApproachProcessMobile />
      <ApproachProcessDesktop />
    </Section>
  );
}
