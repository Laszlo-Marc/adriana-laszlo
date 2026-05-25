import Image from "next/image";

import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import { problemsContent } from "./problemsContent";

export default function HomeProblemsDesktop() {
  return (
    <div className="relative z-10 hidden lg:block">
      <Container size="wider" padding="none">
        <div className="px-8 py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-[0.95fr_1.05fr] items-center gap-20">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-[-4rem] top-1/2 h-[20rem] w-[calc(100%+8rem)] -translate-y-1/2 bg-teal/45"
              />

              <div className="relative z-20 mx-auto aspect-[4/5] w-[70%] max-w-[28rem] overflow-hidden rounded-t-[10rem] rounded-b-[1.75rem] bg-sand/20 shadow-[0_24px_70px_rgba(44,44,44,0.14)]">
                <Image
                  src={problemsContent.image.src}
                  alt={problemsContent.image.alt}
                  fill
                  sizes="420px"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/10"
                />
              </div>
            </div>

            <div className="relative z-10 mx-8">
              <Text
                as="p"
                size="xs"
                color="gold"
                weight="medium"
                transform="upper"
                className="mb-4 tracking-[0.16em]"
                align="center"
              >
                {problemsContent.eyebrow}
              </Text>

              <Heading
                as="h2"
                size="h2"
                className="text-balance text-charcoal"
                align="center"
              >
                {problemsContent.title}
              </Heading>

              <Text
                size="base"
                color="muted"
                className="mt-7 leading-8"
                align="center"
              >
                {problemsContent.description}
              </Text>
            </div>

            <div className="col-span-2 mx-auto mt-4 max-w-3xl">
              <div className="relative border-t border-gold/50 pt-6 text-center">
                <Text
                  size="base"
                  color="charcoal"
                  className="mx-auto max-w-2xl text-pretty leading-8"
                  align="center"
                >
                  {problemsContent.closing}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
