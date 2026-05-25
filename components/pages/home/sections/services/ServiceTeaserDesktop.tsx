import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import { services } from "./data";
import { ServicesAccordion } from "./ServicesAccordion";
import AccentText from "@/components/ui/AccentText";

export default function ServicesTeaserDesktop() {
  return (
    <div className="hidden lg:block">
      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-none text-center">
          <AccentText className="justify-center text-center text-4xl text-gold">
            Servicii
          </AccentText>
          <Heading
            as="h2"
            size="h2"
            className="mt-3 text-charcoal"
            align="center"
          >
            Forme de lucru gândite pentru nevoi diferite
          </Heading>
        </div>

        <div className="mt-10">
          <ServicesAccordion items={services} />
        </div>
      </Container>
    </div>
  );
}
