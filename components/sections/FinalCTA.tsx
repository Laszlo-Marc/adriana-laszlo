import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

type FinalCTAButton = {
  label: string;
  href: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
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
  background?: React.ComponentProps<typeof Section>["background"];
  spacing?: React.ComponentProps<typeof Section>["spacing"];
  decorations?: FinalCTADecoration[];
  className?: string;
};

const defaultDecorations: FinalCTADecoration[] = [
  {
    src: "/backgrounds/df-purple-up.png",
    width: 140,
    height: 140,
    className:
      "pointer-events-none absolute left-6 top-8 opacity-25 md:left-10 md:top-10",
  },
  {
    src: "/backgrounds/df-teal-down.png",
    width: 120,
    height: 120,
    className:
      "pointer-events-none absolute bottom-8 right-6 opacity-25 md:bottom-10 md:right-12",
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
  secondaryLabel = "Explorează serviciile",
  secondaryButtons = [
    {
      label: "Servicii de terapie",
      href: "/servicii",
      variant: "primary",
    },
    {
      label: "Programe & evenimente",
      href: "/evenimente",
      variant: "purple",
    },
  ],
  background = "cream",
  spacing = "xl",
  decorations = defaultDecorations,
  className = "",
}: FinalCTAProps) {
  return (
    <Section
      background={background}
      spacing={spacing}
      className={`relative overflow-hidden text-center ${className}`}
    >
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

      <Container size="narrow">
        <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6">
          <p className="font-accent text-4xl text-charcoal/80 md:text-5xl">
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
      </Container>
    </Section>
  );
}
