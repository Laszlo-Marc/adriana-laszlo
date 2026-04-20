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
    <div className="mt-5  sm:mt-6">
      <div className="flex flex-row  gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-start lg:gap-6">
        {certificationLogos.map((logo) => (
          <div
            key={logo.label}
            className="relative overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(44,44,44,0.10)] ring-1 ring-charcoal/8 transition-transform duration-300 ease-out hover:scale-[1.02]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={168}
              height={168}
              className="
                h-40 w-40 object-fit object-center
                sm:h-28 sm:w-28
                md:h-32 md:w-32
                lg:h-36 lg:w-36
                xl:h-40 xl:w-40
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
