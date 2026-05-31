import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

type TrustItem = {
  title: string;
  description: string;
  iconSrc: string;
  iconClassName?: string;
};

const trustItems: TrustItem[] = [
  {
    title: "Terapie într-un ritm sigur",
    description:
      "Lucrăm pas cu pas, fără presiune, cu atenție la ceea ce poți duce în fiecare etapă.",
    iconSrc: "/backgrounds/df-purple-up.png",
    iconClassName: "rotate-[-8deg]",
  },
  {
    title: "Abordare orientată spre traumă",
    description:
      "Procesul terapeutic ține cont de corp, emoții, relații și felul în care trecutul se simte în prezent.",
    iconSrc: "/backgrounds/df-teal-down.png",
    iconClassName: "rotate-[6deg]",
  },
  {
    title: "Prezență, claritate și blândețe",
    description:
      "Spațiul terapeutic este construit pe siguranță, respect și ascultare reală.",
    iconSrc: "/backgrounds/df-purple-up.png",
    iconClassName: "rotate-[-4deg]",
  },
  {
    title: "Online sau în cabinet",
    description:
      "Poți alege forma de lucru care se potrivește cel mai bine contextului tău actual.",
    iconSrc: "/backgrounds/dragonfly.png",
    iconClassName: "rotate-[8deg]",
  },
];

function TrustDragonfly({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple/20 bg-cream shadow-[0_8px_24px_rgba(44,44,44,0.08)] sm:h-[4.5rem] sm:w-[4.5rem]">
        <div className="relative h-10 w-10 sm:h-11 sm:w-11">
          <Image
            src={src}
            alt=""
            aria-hidden="true"
            fill
            sizes="44px"
            className={`object-contain opacity-90 ${className ?? ""}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function HomeTrustStrip() {
  return (
    <Section
      background="purple-soft"
      spacing="sm"
      aria-labelledby="home-trust-strip-title"
      className="relative overflow-hidden hidden lg:block"
    >
      <Container size="wider" padding="default">
        <div className="-mx-4 mt-8 flex snap-x gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="min-w-[78vw] snap-center sm:min-w-[46vw] lg:min-w-0"
            >
              <div className="relative h-full pt-8">
                <TrustDragonfly
                  src={item.iconSrc}
                  className={item.iconClassName}
                />

                <div className="flex h-full min-h-[260px] flex-col rounded-[28px] border border-purple/20 bg-cream/70 px-6 pb-8 pt-12 text-center shadow-[0_10px_30px_rgba(44,44,44,0.04)] backdrop-blur-[2px]">
                  <Heading
                    as="h3"
                    size="h4"
                    align="center"
                    textCase="none"
                    font="body"
                    className="mx-auto max-w-[25ch] text-balance text-charcoal"
                  >
                    {item.title}
                  </Heading>

                  <Text
                    align="center"
                    className="mx-auto mt-4 max-w-[24ch] flex-1 text-sm leading-7 text-charcoal/72"
                  >
                    {item.description}
                  </Text>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
