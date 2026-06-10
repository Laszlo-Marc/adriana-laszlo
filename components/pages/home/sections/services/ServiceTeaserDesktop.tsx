import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import AccentText from "@/components/ui/AccentText";

import { services } from "./data";
import { ServicesAccordion } from "./ServicesAccordion";

export default function ServicesTeaserDesktop() {
  return (
    <div className="relative hidden overflow-hidden lg:block py-20">
      {/* subtle dragonfly near heading */}
      <Image
        src="/backgrounds/df-teal-down.png"
        alt=""
        aria-hidden="true"
        width={140}
        height={140}
        className="pointer-events-none absolute right-[10%] top-5 z-0 rotate-[-12deg] opacity-25"
      />

      {/* secondary small dragonfly */}
      <Image
        src="/backgrounds/df-purple-up.png"
        alt=""
        aria-hidden="true"
        width={110}
        height={110}
        className="pointer-events-none absolute left-[10%] top-10 z-0 rotate-[10deg] opacity-40"
      />

      <Container size="wide" padding="default" className="relative z-10">
        <div className="mx-auto max-w-none text-center">
          <Heading
            as="h2"
            size="h2"
            className="mt-3 text-charcoal"
            align="center"
          >
            Servicii Oferite
          </Heading>
        </div>

        <div className="relative mt-10">
          <ServicesAccordion items={services} />
        </div>
      </Container>
    </div>
  );
}
