import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";

type EditorialServiceSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tone: "teal" | "purple";
  reverse?: boolean;
  children?: ReactNode;
  imagePosition?: string;
};

const toneStyles = {
  teal: {
    background: "teal-soft" as const,
    imageRing: "ring-teal/15",
    glow: "bg-teal/20",
  },
  purple: {
    background: "purple-soft" as const,
    imageRing: "ring-purple/15",
    glow: "bg-purple/20",
  },
};

export default function EditorialServiceSection({
  id,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  tone,
  reverse = false,
  children,
  imagePosition = "object-center",
}: EditorialServiceSectionProps) {
  const styles = toneStyles[tone];

  return (
    <Section
      id={id}
      background={styles.background}
      spacing="md"
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 overflow-hidden"
    >
      <Container size="full" padding="lg">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          {/* Image */}
          <div
            className={cn(
              "relative w-full max-w-xl",
              reverse ? "lg:ml-auto" : "lg:mr-auto",
            )}
          >
            <div
              aria-hidden="true"
              className={cn(
                "absolute -inset-6 rounded-[2.5rem] blur-2xl",
                styles.glow,
              )}
            />

            <div
              className={cn(
                "relative overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1",
                styles.imageRing,
              )}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className={cn("object-cover", imagePosition)}
                />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="max-w-6xl">
            <AccentText>{eyebrow}</AccentText>

            <Heading as="h2" size="h2" className="mt-3">
              {title}
            </Heading>

            <Text className="mt-5 text-charcoal/75">{description}</Text>

            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </Container>
    </Section>
  );
}
