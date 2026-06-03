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
    accentText: "text-teal",
    border: "border-teal/15",
    ring: "ring-teal/15",
    glow: "bg-teal/20",
    card: "border-teal/15 bg-white/55",
  },
  purple: {
    background: "purple-soft" as const,
    accentText: "text-purple",
    border: "border-purple/15",
    ring: "ring-purple/15",
    glow: "bg-purple/20",
    card: "border-purple/15 bg-white/55",
  },
  cream: {
    background: "cream" as const,
    accentText: "text-gold",
    border: "border-charcoal/10",
    ring: "ring-charcoal/10",
    glow: "bg-sand/25",
    card: "border-charcoal/10 bg-white/60",
  },
  white: {
    background: "white" as const,
    accentText: "text-gold",
    border: "border-charcoal/10",
    ring: "ring-charcoal/10",
    glow: "bg-sand/20",
    card: "border-charcoal/10 bg-cream/60",
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
      spacing="lg"
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 overflow-hidden"
    >
      <Container size="full" padding="none">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
            isImageRight && "lg:[&>*:first-child]:order-2",
          )}
        >
          <ServiceImage
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            imagePosition={imagePosition}
            align={isImageRight ? "right" : "left"}
          />

          <div
            className={cn(
              "max-w-2xl",
              isImageRight ? "lg:mr-auto pl-10" : "lg:ml-auto pr-10",
            )}
          >
            <Heading id={`${id}-heading`} as="h2" size="h2" className="mt-3">
              {title}
            </Heading>

            <Text className="mt-5 text-charcoal/75">{description}</Text>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
  align,
}: {
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  align: "left" | "right";
}) {
  return (
    <div className="relative -mx-4 overflow-hidden sm:-mx-6 lg:mx-0 lg:h-full">
      <div className="relative h-[22rem] w-full lg:h-full lg:min-h-[34rem]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn("object-cover", imagePosition)}
        />

        {/* Mobile bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-current text-white lg:hidden"
        />
      </div>
    </div>
  );
}
