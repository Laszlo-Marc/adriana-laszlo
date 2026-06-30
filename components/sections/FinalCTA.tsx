import type { ComponentProps } from "react";
import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type FinalCTAButton = {
  label: string;
  href: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
};

type FinalCTADecoration = {
  src: string;
  width: number;
  height: number;
  className: string;
};

type FinalCTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryButton?: FinalCTAButton;
  secondaryLabel?: string;
  secondaryButtons?: FinalCTAButton[];
  background?: ComponentProps<typeof Section>["background"];
  spacing?: ComponentProps<typeof Section>["spacing"];
  decorations?: FinalCTADecoration[];
  className?: string;
  fadeColorClassName?: string;
};

const defaultDecorations: FinalCTADecoration[] = [
  {
    src: "/backgrounds/double-df.png",
    width: 360,
    height: 760,
    className:
      "pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-72 -translate-x-1/2 -translate-y-1/2 md:w-76 lg:w-90",
  },
];

export default function FinalCTA({
  title = "Fă primul pas.",
  description = "Dacă simți că este momentul potrivit, poți începe cu o conversație simplă.",
  primaryLabel = "Lucrează cu mine",
  primaryButton = {
    label: "Programează o ședință",
    href: "/contact",
    variant: "urgent",
    size: "lg",
  },
  secondaryLabel = "Explorează mai întâi",
  secondaryButtons = [
    {
      label: "Vezi serviciile",
      href: "/servicii",
      variant: "primary",
    },
    {
      label: "Despre mine",
      href: "/despre",
      variant: "purple",
    },
  ],
  background = "cream",
  spacing = "xl",
  decorations = defaultDecorations,
  className = "",
  fadeColorClassName = "from-cream via-cream/90",
}: FinalCTAProps) {
  return (
    <div className={cn("relative overflow-hidden bg-cream", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-30 h-32 bg-linear-to-b to-transparent",
          fadeColorClassName,
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 bg-linear-to-t to-transparent",
          fadeColorClassName,
        )}
      />

      <Section
        background={background}
        spacing={spacing}
        className="relative text-center"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-110 w-110 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand/12 blur-3xl"
        />

        {decorations.map((decoration) => (
          <Image
            key={`${decoration.src}-${decoration.className}`}
            src={decoration.src}
            alt=""
            width={decoration.width}
            height={decoration.height}
            aria-hidden="true"
            className={decoration.className}
          />
        ))}

        <Container size="narrow" className="relative z-20">
          <ScrollReveal>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
              <p className="font-accent mt-5 text-6xl text-charcoal/80 md:text-5xl">
                {title}
              </p>

              {description ? (
                <Text className="max-w-md" align="center">
                  {description}
                </Text>
              ) : null}

              <div className="mt-6 flex w-full flex-col items-center gap-4">
                {primaryLabel ? (
                  <Text
                    size="sm"
                    className="uppercase tracking-wide text-charcoal/50"
                  >
                    {primaryLabel}
                  </Text>
                ) : null}

                <Button
                  href={primaryButton.href}
                  size={primaryButton.size ?? "lg"}
                  variant={primaryButton.variant ?? "urgent"}
                >
                  {primaryButton.label}
                </Button>

                {secondaryButtons.length > 0 ? (
                  <>
                    {secondaryLabel ? (
                      <Text
                        size="sm"
                        className="mt-2 uppercase tracking-wide text-charcoal/50"
                      >
                        {secondaryLabel}
                      </Text>
                    ) : null}

                    <div className="flex flex-col gap-3 sm:flex-row">
                      {secondaryButtons.map((button) => (
                        <Button
                          key={button.href}
                          href={button.href}
                          size={button.size}
                          variant={button.variant ?? "primary"}
                        >
                          {button.label}
                        </Button>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </div>
  );
}
