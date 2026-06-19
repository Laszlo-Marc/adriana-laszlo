import Image from "next/image";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import AccentText from "@/components/ui/AccentText";

import { approachProcessContent } from "./approachProcessContent";

export default function ApproachProcessMobile() {
  return (
    <div className="relative overflow-hidden lg:hidden">
      <div className="relative  ">
        <div className="relative mx-auto max-w-md">
          <div className="relative h-50">
            <div
              aria-hidden="true"
              className="absolute top-0 h-40 w-full bg-teal-soft"
            />

            <div className="relative z-20 mx-auto w-[80%] pt-10">
              <div className="relative overflow-hidden shadow-[0_24px_70px_rgba(44,44,44,0.12)]">
                <Image
                  src={approachProcessContent.image.src}
                  alt={approachProcessContent.image.alt}
                  width={680}
                  height={820}
                  sizes="(max-width: 1023px) 80vw, 1px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-20 px-6 text-center">
            <AccentText>{approachProcessContent.eyebrow}</AccentText>

            <Heading as="h2" size="h3" align="center" className="mt-4">
              {approachProcessContent.title}
            </Heading>

            <div className="mt-7 space-y-5">
              <Text className="text-charcoal/76" align="center">
                {approachProcessContent.lead}
              </Text>

              <Text className="text-charcoal/76" align="center">
                {approachProcessContent.paragraphs[0]}
              </Text>
            </div>

            <div className="mt-8 flex flex-col gap-3">
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
    </div>
  );
}
