import Image from "next/image";
import Text from "@/components/ui/Text";

const certificationLogos = [
  {
    src: "/logos/arpi.jpg",
    alt: "Asociația Română de Psihoterapie Integrativă",
    label: "ARPI",
  },
  {
    src: "/logos/parnell.png",
    alt: "Parnell Institute",
    label: "Parnell Institute",
  },
] as const;

export function CertificationBadges() {
  return (
    <div className="mt-5 sm:mt-6 items-center justify-center gap-4 lg:justify-start">
      <Text
        as="p"
        size="xs"
        color="muted-teal"
        weight="medium"
        transform="upper"
        align="center"
        className="mb-3 tracking-[0.14em] lg:text-left"
      >
        Formare & certificări
      </Text>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {certificationLogos.map((logo) => (
          <div
            key={logo.label}
            className="group inline-flex items-center gap-3 rounded-full border border-sand/80 bg-white/70 px-3 py-2 shadow-[0_8px_20px_rgba(44,44,44,0.06)] backdrop-blur-sm"
          >
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-charcoal/8 bg-white sm:h-18 sm:w-20">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>

            <Text
              as="span"
              size="lg"
              color="muted"
              weight="medium"
              className="pr-1"
            >
              {logo.label}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
