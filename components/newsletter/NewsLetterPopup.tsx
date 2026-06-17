"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import NewsletterForm from "./NewsLetterForm";

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // For design/dev: show every time after a short delay
  useEffect(() => {
    if (pathname === "/contact") return;
    if (pathname.startsWith("/studio")) return;

    const timeout = window.setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  // Escape to close
  useEffect(() => {
    if (!isVisible) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  function dismiss() {
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
      className="fixed inset-0 z-[160] bg-charcoal/55 backdrop-blur-[6px]"
    >
      <div className="flex min-h-svh items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-charcoal text-cream shadow-[0_40px_120px_rgba(20,20,20,0.35)]">
          {/* Decorative layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,148,214,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,214,200,0.14),transparent_32%)]" />

            <Image
              src="/backgrounds/double-split.png"
              alt=""
              width={320}
              height={320}
              className="absolute left-[-3rem] top-[-2rem] w-44 rotate-[-8deg] opacity-[0.12] sm:w-56 lg:w-72"
            />

            <Image
              src="/backgrounds/df-purple-up.png"
              alt=""
              width={220}
              height={220}
              className="absolute right-[18%] top-[8%] hidden w-28 opacity-20 lg:block"
            />

            <Image
              src="/backgrounds/df-teal-down.png"
              alt=""
              width={220}
              height={220}
              className="absolute bottom-[12%] left-[6%] hidden w-24 rotate-[10deg] opacity-20 lg:block"
            />

            <Image
              src="/backgrounds/dragonfly.png"
              alt=""
              width={180}
              height={180}
              className="absolute bottom-[8%] right-[10%] hidden w-20 opacity-15 lg:block"
            />
          </div>

          <button
            type="button"
            aria-label="Închide"
            onClick={dismiss}
            className="absolute right-4 top-4 z-30 inline-flex size-11 items-center justify-center rounded-full border border-charcoal/10 bg-cream text-charcoal shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition hover:bg-white hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:right-5 sm:top-5"
          >
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
          </button>
          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left editorial panel */}
            <div className="relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[min(82svh,760px)] lg:px-14 lg:py-14">
              <p className="text-xs uppercase tracking-[0.28em] text-cream/60">
                Newsletter
              </p>

              <Heading
                id="newsletter-popup-title"
                as="h2"
                size="h1"
                className="mt-4 max-w-[10ch] text-cream"
              >
                Evenimente, articole și resurse
              </Heading>

              <Text className="mt-6 max-w-xl text-cream/72">
                Primești ocazional anunțuri despre materiale gratuite,
                evenimente noi și resurse utile pentru procesul tău, într-un
                ritm calm și fără mesaje în exces.
              </Text>

              <div className="mt-8 grid gap-3 sm:max-w-lg">
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium text-cream">
                    Evenimente și grupuri noi
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Află primele detalii despre programe, workshopuri și
                    întâlniri viitoare.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium text-cream">
                    Resurse gratuite
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Primești ghiduri, exerciții și materiale utile atunci când
                    apar.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-sm font-medium text-cream">
                    Comunicare discretă
                  </p>
                  <p className="mt-1 text-sm text-cream/65">
                    Mesaje rare, clare și relevante. Te poți dezabona oricând.
                  </p>
                </div>
              </div>

              <div className="mt-8 hidden lg:block">
                <p className="text-sm italic text-cream/55">
                  Un spațiu blând și bine structurat pentru a rămâne aproape de
                  resursele care te pot susține.
                </p>
              </div>
            </div>

            {/* Right form panel */}
            <div className="relative border-t border-white/10 bg-white/94 p-5 text-charcoal sm:p-8 lg:min-h-[min(82svh,760px)] lg:border-l lg:border-t-0 lg:p-10">
              <div className="mx-auto flex h-full w-full max-w-xl items-center">
                <div className="w-full rounded-[1.75rem] border border-charcoal/8 bg-cream/72 p-5 shadow-[0_18px_50px_rgba(44,44,44,0.06)] sm:p-7">
                  <Heading as="h3" size="h3" className="mt-3" align="center">
                    abonează-te aici
                  </Heading>

                  <Text color="muted" className="mt-3" align="center">
                    Completează formularul și te vom anunța ocazional când apar
                    resurse, articole sau evenimente noi.
                  </Text>

                  <NewsletterForm
                    className="mt-6"
                    source="Newsletter popup"
                    onSuccess={dismiss}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
