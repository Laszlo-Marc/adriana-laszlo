import Image from "next/image";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

type ServiceTone = "teal" | "purple" | "cream" | "white";
type ImageSide = "left" | "right";

type ServiceCta = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "ghost" | "urgent" | "purple" | "cream";
};

export type ServiceDetail = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: ImageSide;
  tone: ServiceTone;
  cta: ServiceCta;
  secondaryCta?: ServiceCta;
  imagePosition?: string;
};

const toneStyles = {
  teal: {
    background: "teal-soft" as const,
    mobileFade: "from-transparent via-teal-soft/80 to-teal-soft",
  },
  purple: {
    background: "purple-soft" as const,
    mobileFade: "from-transparent via-purple-soft/80 to-purple-soft",
  },
  cream: {
    background: "cream" as const,
    mobileFade: "from-transparent via-cream/80 to-cream",
  },
  white: {
    background: "white" as const,
    mobileFade: "from-transparent via-white/80 to-white",
  },
};

export default function ServiceDetailSection({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  imageSide,
  tone,
  cta,
  secondaryCta,
  imagePosition = "object-center",
}: ServiceDetail) {
  const styles = toneStyles[tone];
  const isImageRight = imageSide === "right";

  return (
    <Section
      id={id}
      background={styles.background}
      spacing="none"
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 overflow-hidden lg:py-24 xl:py-28"
    >
      <Container size="full" padding="none">
        <div
          className={cn(
            "grid items-start gap-0 lg:min-h-136 lg:grid-cols-2 lg:items-center lg:gap-14",
            isImageRight && "lg:[&>*:first-child]:order-2",
          )}
        >
          <ServiceImage
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            imagePosition={imagePosition}
            mobileFadeClassName={styles.mobileFade}
          />

          <div
            className={cn(
              "relative z-10 mx-auto -mt-12 max-w-xl px-5 pb-16 text-center sm:px-6 md:pb-20 lg:mt-0 lg:max-w-2xl lg:pb-0 lg:text-left",
              isImageRight ? "lg:mr-auto lg:pl-10" : "lg:ml-auto lg:pr-10",
            )}
          >
            <Heading
              id={`${id}-heading`}
              as="h2"
              size="h2"
              textCase="uppercase"
              className="mx-auto max-w-84 text-center lg:mx-0 lg:max-w-none lg:text-left"
            >
              {title}
            </Heading>

            <Text className="mx-auto mt-5 max-w-md text-center text-charcoal/75 lg:mx-0 lg:max-w-none lg:text-left">
              {description}
            </Text>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <Button href={cta.href} variant={cta.variant ?? "outline"}>
                {cta.label}
              </Button>

              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  variant={secondaryCta.variant ?? "outline"}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ServiceImage({
  imageSrc,
  imageAlt,
  imagePosition,
  mobileFadeClassName,
}: {
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  mobileFadeClassName: string;
}) {
  return (
    <div className="relative overflow-hidden lg:h-full">
      <div className="relative h-84 w-full sm:h-96 lg:h-full lg:min-h-136">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className={cn("object-cover", imagePosition)}
        />

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b lg:hidden",
            mobileFadeClassName,
          )}
        />
      </div>
    </div>
  );
}
