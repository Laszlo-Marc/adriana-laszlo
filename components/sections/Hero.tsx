import Image from "next/image";
import Button from "@/components/ui/Button";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="section-container section-padding"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* --- Left: copy + CTAs --- */}
        <div className="order-2 lg:order-1">
          {/* Eyebrow — credential trust signal above the fold */}
          <p className="font-body text-caption uppercase tracking-[0.2em] text-muted-teal mb-5">
            Psiholog · Psihoterapeut · Cluj-Napoca
          </p>

          <h1 id="hero-heading" className="mb-6 max-w-xl">
            Vindecarea începe cu un pas curajos
          </h1>

          <p className="text-body-lg text-muted max-w-lg mb-8">
            Peste 15 ani de experiență în psihoterapie integrativă, specializată
            în AF-EMDR și EFT pentru tratarea traumelor de atașament și a
            traumelor majore din viața adultă.
          </p>

          {/* CTAs — primary (book) + secondary (call) */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button href="/contact" variant="primary" size="lg">
              Programează o ședință
            </Button>
            <Button
              href="tel:+40744473869"
              variant="outline"
              size="lg"
              leftIcon={<Phone size={16} strokeWidth={1.75} />}
            >
              0744 473 869
            </Button>
          </div>

          {/* Trust signals — credentials row */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-caption uppercase tracking-[0.12em] text-muted">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-teal" aria-hidden />
              Acreditat COPSI
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-teal" aria-hidden />
              Membru ARPI
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-teal" aria-hidden />
              Fondator Trauma Center
            </li>
          </ul>
        </div>

        {/* --- Right: portrait --- */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-softer overflow-hidden bg-sand">
            <Image
              src="/adriana.jpg"
              alt="Adriana Laszlo, psiholog și psihoterapeut în Cluj-Napoca"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Subtle decorative accent behind the image */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute -z-10 -bottom-6 -right-6 w-2/3 h-2/3 bg-teal-soft rounded-softer"
          />
        </div>
      </div>
    </section>
  );
}
