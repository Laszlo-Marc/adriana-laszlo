import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";

import { resourcePanels } from "./data";
import ResourcesFlipReveal from "./ResourceFlipReveal";

export function HomeResourcesMobile() {
  return (
    <div className="lg:hidden">
      <Container size="full" padding="none">
        <div className="px-4 pb-10 pt-10">
          <div className="relative z-10 text-center">
            <AccentText className="block text-center text-2xl text-gold">
              Resurse
            </AccentText>

            <Heading
              as="h2"
              size="h1"
              align="center"
              className="mt-4 text-balance"
              textCase="uppercase"
            >
              Continuă procesul
            </Heading>
          </div>

          <div className="relative mt-11">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-20 h-72 w-[calc(100%+3rem)] bg-teal/18"
            />

            <div className="relative z-20">
              <ResourcesFlipReveal panels={resourcePanels} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
