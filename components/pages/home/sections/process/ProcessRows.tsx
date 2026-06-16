import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { processSteps } from "./data";

export function ProcessRows() {
  return (
    <div className="relative z-10 mx-auto mt-10 max-w-md">
      <div className="border-y border-gold/30">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-4 py-5 not-last:border-b not-last:border-gold/20"
          >
            <span className="font-display text-2xl leading-none text-gold/70">
              {step.number}
            </span>

            <div>
              <Heading as="h3" size="h4" className="text-balance text-charcoal">
                {step.title}
              </Heading>

              <Text size="sm" color="muted" className="mt-2 leading-6">
                {step.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
