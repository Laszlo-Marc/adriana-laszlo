import Image from "next/image";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

type SuitabilityPattern = {
  id: string;
  label: string;
  title: string;
  description: string;
  signs: string[];
  image: string;
  imageAlt: string;
};

type AfEmdrSuitabilityMobileProps = {
  patterns: SuitabilityPattern[];
  insight?: string;
};

export default function AfEmdrSuitabilityMobile({
  patterns,
  insight,
}: AfEmdrSuitabilityMobileProps) {
  if (!patterns.length) return null;

  return (
    <div className="lg:hidden">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Tipare posibile
        </p>

        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/35">
          Glisează
        </p>
      </div>

      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] sm:-mx-6 sm:px-6 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {patterns.map((pattern) => (
          <article
            key={pattern.id}
            className="relative min-w-[88%] snap-start overflow-hidden rounded-4xl sm:min-w-[72%]"
          >
            <div className="relative h-108">
              <Image
                src={pattern.image}
                alt={pattern.imageAlt}
                fill
                sizes="(max-width: 639px) 88vw, (max-width: 1023px) 72vw, 1px"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-charcoal/88 via-charcoal/42 to-charcoal/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-charcoal/28 to-transparent"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/25 bg-white/12 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">
                      {pattern.label}
                    </span>
                  </div>

                  <Heading as="h3" size="h3" className="mt-4 text-white">
                    {pattern.title}
                  </Heading>

                  <Text
                    as="p"
                    size="sm"
                    className="mt-4 max-w-[18rem] leading-relaxed text-white/76"
                  >
                    {pattern.description}
                  </Text>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {pattern.signs.map((sign) => (
                      <span
                        key={sign}
                        className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[0.7rem] font-medium text-white/72 backdrop-blur-sm"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {insight ? (
        <Text
          size="sm"
          align="center"
          className="mx-auto mt-3 max-w-sm text-pretty text-charcoal/62"
        >
          {insight}
        </Text>
      ) : null}
    </div>
  );
}
