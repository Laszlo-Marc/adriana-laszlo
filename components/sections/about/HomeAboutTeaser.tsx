import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function HomeAboutTeaser() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="home-about-heading"
      className="relative overflow-hidden"
    >
      <Container size="full" padding="none">
        <div className="grid min-h-svh lg:grid-cols-2">
          <div className="order-2 flex bg-sand/45 lg:order-1">
            <div className="flex w-full items-center px-6 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16 xl:px-20">
              <div className="max-w-2xl">
                <Heading as="h2" size="h2" className="text-charcoal">
                  Despre Adriana Laszlo
                </Heading>

                <Text className="mt-6 max-w-none text-base leading-8 text-charcoal/78 md:text-lg">
                  Experiența terapeutică nu înseamnă doar tehnică, ci o relație
                  în care te poți simți în siguranță, înțeles și susținut.
                  Descoperă povestea, formarea și perspectiva care stau la baza
                  modului în care Adriana lucrează cu trauma, atașamentul și
                  reprocesarea prin AF-EMDR.
                </Text>

                <Button size="lg" className="mt-10">
                  <Link href="/despre">Citește povestea completă</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative min-h-[42rem] h-full w-full overflow-hidden">
              <Image
                src="/adriana10.webp"
                alt="Portret Adriana Laszlo"
                fill
                priority={false}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
