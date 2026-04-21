import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import Heading from "@/components/ui/Heading";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/layout/navbar/NavLinks";

export default function HeroMobile() {
  return (
    <Section
      background="cream"
      spacing="md"
      aria-labelledby="hero-heading-mobile"
      className=" lg:hidden overflow-hidden"
    >
      <Container size="wider" padding="none">
        <div className="mx-auto max-w-2xl">
          <div className="-mx-4 sm:-mx-6">
            <div className="relative overflow-hidden  bg-sand/20">
              <Image
                src="/home-page/left-image.jpg"
                alt="Spațiu calm și sigur, asociat terapiei pentru traumă"
                width={1200}
                height={1500}
                priority
                sizes="100vw"
                className="h-[20rem] w-full object-cover object-center "
              />
            </div>
          </div>

          <div className="pt-6 px-6 py-6 items-center text-center">
            <Text
              as="p"
              size="xs"
              color="muted-teal"
              weight="medium"
              transform="upper"
              className="tracking-[0.14em] mb-6"
              align="center"
            >
              AF-EMDR · Traumă · Atașament
            </Text>

            <AccentText className="mt-6 text-[4rem] leading-none text-charcoal">
              Terapie Traumei
            </AccentText>

            <AccentText as="div" className="mt-6 text-2xl leading-none">
              În Cluj-Napoca
            </AccentText>

            <Text
              size="base"
              color="muted"
              className="mt-4 max-w-xl text-pretty leading-7"
              align="center"
            >
              Sprijin pentru traumă, anxietate și atașament, într-un cadru
              sigur, profesionist și orientat spre schimbare profundă.
            </Text>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Programează o ședință
              </Button>

              <Button
                href={PHONE_HREF}
                variant="outline"
                size="lg"
                leftIcon={<Phone size={16} strokeWidth={1.75} />}
                aria-label={`Sună la ${PHONE_DISPLAY}`}
                className="w-full"
              >
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
