import Image from "next/image";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { approachProcessContent } from "./approachProcessContent";

export default function ApproachProcessDesktop() {
  return (
    <div className="relative hidden lg:block">
      <Container size="full" padding="none">
        <div className="grid grid-cols-[0.95fr_1.05fr] items-center gap-16">
          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute bottom-50 left-0 h-75 w-full bg-teal-soft"
              />

              <div
                aria-hidden="true"
                className="absolute -left-10 bottom-10 h-80 w-80 rounded-full bg-teal/15 blur-3xl"
              />

              <Image
                src="/backgrounds/df-purple-down.png"
                alt=""
                width={300}
                height={420}
                sizes="300px"
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-0 z-10 h-auto w-75 opacity-40"
              />

              <div className="relative z-20 ml-auto w-[68%] -translate-y-10">
                <div className="relative overflow-hidden rounded-[0.35rem] shadow-[0_28px_80px_rgba(44,44,44,0.14)]">
                  <Image
                    src={approachProcessContent.image.src}
                    alt={approachProcessContent.image.alt}
                    width={820}
                    height={980}
                    sizes="(max-width: 1023px) 1px, (min-width: 1280px) 32vw, 36vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center pl-20">
            <div className="relative z-10">
              <Heading
                as="h2"
                size="h3"
                textCase="uppercase"
                className="mt-4 max-w-2xl"
              >
                {approachProcessContent.title}
              </Heading>

              <div className="mt-8 space-y-5">
                <Text size="lg" className="max-w-2xl text-charcoal/76">
                  {approachProcessContent.lead}
                </Text>

                {approachProcessContent.paragraphs.map((paragraph) => (
                  <Text
                    key={paragraph}
                    size="lg"
                    className="max-w-2xl text-charcoal/76"
                  >
                    {paragraph}
                  </Text>
                ))}
              </div>

              <div className="mt-10 flex gap-3">
                <Button href={approachProcessContent.ctas.primary.href}>
                  {approachProcessContent.ctas.primary.label}
                </Button>

                <Button
                  href={approachProcessContent.ctas.secondary.href}
                  variant="outline"
                >
                  {approachProcessContent.ctas.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
