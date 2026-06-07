import Image from "next/image";

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
};

export default function AfEmdrSuitabilityMobile({
  patterns,
}: AfEmdrSuitabilityMobileProps) {
  return (
    <div className="lg:hidden">
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
        {patterns.map((pattern) => (
          <article
            key={pattern.id}
            className="min-w-[86%] snap-start overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 shadow-[0_20px_70px_rgba(44,44,44,0.07)] sm:min-w-[70%]"
          >
            <div className="relative h-80">
              <Image
                src={pattern.image}
                alt={pattern.imageAlt}
                fill
                sizes="86vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                  {pattern.label}
                </p>

                <h3 className="mt-3 text-balance text-3xl font-semibold leading-none text-white">
                  {pattern.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <Text size="sm" className="text-charcoal/68">
                {pattern.description}
              </Text>

              <ul className="mt-5 space-y-3">
                {pattern.signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex gap-3 text-sm leading-relaxed text-charcoal/65"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
