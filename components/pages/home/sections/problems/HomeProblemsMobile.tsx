import Image from "next/image";

import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import { problemsContent } from "./problemsContent";
import AccentText from "@/components/ui/AccentText";

export default function HomeProblemsMobile() {
  return (
    <div className="relative z-10 lg:hidden">
      <Container size="full" padding="none">
        <div className="px-6 pb-16 pt-8">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-12 h-60 w-[calc(100%+3rem)] bg-teal/45"
            />

            <div className="relative z-20 mx-auto aspect-[4/5] w-[78%] max-w-[21rem] overflow-hidden rounded-t-[10rem] rounded-b-[1.75rem] bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.14)]">
              <Image
                src={problemsContent.image.src}
                alt={problemsContent.image.alt}
                fill
                sizes="78vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
              />
            </div>
          </div>

          <div className="relative z-10  mt-10 text-center">
            <AccentText className="justify-center text-center text-2xl mb-4 text-gold">
              {problemsContent.eyebrow}
            </AccentText>

            <Heading
              as="h2"
              size="h1"
              align="center"
              className="text-balance mt-4 text-charcoal"
            >
              {problemsContent.title}
            </Heading>

            <Text
              size="base"
              color="muted"
              align="center"
              className="mt-7 leading-8"
            >
              {problemsContent.description}
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
