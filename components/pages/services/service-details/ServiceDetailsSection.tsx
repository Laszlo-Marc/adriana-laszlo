import Image from "next/image";
import Link from "next/link";

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

type ServiceDetailSectionProps = ServiceDetail;

const toneStyles = {
  teal: {
    background: "teal-soft" as const,
    mobileTitleBg: "bg-teal-soft",
    mobileFade: "via-teal-soft/95 to-teal-soft",
    desktopFadeText: "text-teal-soft",
  },
  purple: {
    background: "purple-soft" as const,
    mobileTitleBg: "bg-purple-soft",
    mobileFade: "via-purple-soft/95 to-purple-soft",
    desktopFadeText: "text-purple-soft",
  },
  cream: {
    background: "cream" as const,
    mobileTitleBg: "bg-cream",
    mobileFade: "via-cream/95 to-cream",
    desktopFadeText: "text-cream",
  },
  white: {
    background: "white" as const,
    mobileTitleBg: "bg-white",
    mobileFade: "via-white/95 to-white",
    desktopFadeText: "text-white",
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
}: ServiceDetailSectionProps) {
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
            "grid items-start gap-0 lg:min-h-[34rem] lg:grid-cols-2 lg:items-center lg:gap-14",
            isImageRight && "lg:[&>*:first-child]:order-2",
          )}
        >
          <ServiceImage
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            imagePosition={imagePosition}
            align={isImageRight ? "right" : "left"}
            mobileFadeClassName={styles.mobileFade}
            desktopFadeTextClassName={styles.desktopFadeText}
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
              className={cn(
                "mx-auto max-w-[21rem] px-3 pt-3 text-center lg:mx-0 lg:max-w-none lg:bg-transparent lg:px-0 lg:pt-0 lg:text-left",
                styles.mobileTitleBg,
              )}
            >
              {title}
            </Heading>

            <Text
              className="mx-auto mt-5 max-w-md  text-charcoal/75 lg:mx-0 lg:max-w-none lg:text-left"
              align="center"
            >
              {description}
            </Text>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <Button variant={cta.variant ?? "outline"}>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>

              {secondaryCta && (
                <Button variant={secondaryCta.variant ?? "outline"}>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
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
  align: "left" | "right";
  mobileFadeClassName: string;
  desktopFadeTextClassName: string;
}) {
  return (
    <div className="relative overflow-hidden lg:h-full">
      <div className="relative h-[21rem] w-full sm:h-[24rem] lg:h-full lg:min-h-[34rem]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn("object-cover", imagePosition)}
        />

        {/* Mobile bottom fade, matched to section color */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-gradient-to-b from-transparent via-current/85 to-current lg:hidden",
            mobileFadeClassName,
          )}
        />
      </div>
    </div>
  );
}
