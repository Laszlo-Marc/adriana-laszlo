import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import Button from "../ui/Button";
import {
  LOCATION_LABEL,
  LOCATION_TEXT,
  PHONE_DISPLAY,
  PHONE_HREF,
  TRAUMA_EMAIL_HREF,
} from "./navigation-data";
import { navItems } from "./navigation-data";
import Container from "../ui/Container";
import ConsentProtectedEmbed from "../cookies/ConsentProtectedEmbeded";
import CookieSettingsButton from "../cookies/CookiesSettingsButton";
const anpcBadges = [
  {
    href: "https://anpc.ro/ce-este-sal/",
    src: "/anpc.webp",
    alt: "ANPC - Soluționarea alternativă a litigiilor",
  },
  {
    href: "https://ec.europa.eu/consumers/odr",
    src: "/anpc-sol.webp",
    alt: "Soluționarea online a litigiilor",
  },
];
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white" aria-label="Subsol site">
      <Container
        size="wider"
        padding="default"
        className="py-10 md:py-12 xl:py-14"
      >
        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.9fr_0.8fr_1fr] xl:items-start xl:gap-10">
          {/* Brand block */}
          <div className="mx-auto flex max-w-sm flex-col items-center text-center xl:mx-0 xl:items-start xl:text-left">
            <Logo size="md" />

            <Text
              className="mt-5 max-w-[34ch] text-sm leading-6 md:text-base md:text-start"
              align="center"
            >
              Psihoterapie integrativă într-un spațiu sigur, calm și atent,
              orientat spre claritate, echilibru și vindecare.
            </Text>

            <div className="mt-5 flex items-center justify-center gap-3 xl:justify-start">
              <a
                href="https://www.instagram.com/adrianalaszlo/"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal text-charcoal transition-colors hover:border-gold hover:text-gold"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/psiholg"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal text-charcoal transition-colors hover:border-gold hover:text-gold"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
            <div className="mt-5 grid grid-cols-2 items-center gap-2 xl:items-start">
              {anpcBadges.map((badge) => (
                <a
                  key={badge.href}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block rounded-md transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={250}
                    height={50}
                    className="h-auto w-47.5 sm:w-52.5 xl:w-55"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: contact + navigation on same row */}
          <div className="grid grid-cols-2 gap-4 xl:contents">
            {/* Contact */}
            <div className="space-y-3 xl:space-y-4">
              <Heading as="h4" size="h3" className="mb-6 ">
                Contact
              </Heading>

              <div className="flex flex-col gap-6">
                <Button
                  leftIcon={<Mail size={14} />}
                  variant="primary"
                  size="md"
                  href={TRAUMA_EMAIL_HREF}
                  className="md:max-w-55"
                >
                  E-mail
                </Button>

                <Button
                  variant="purple"
                  size="md"
                  href="/contact"
                  className="md:max-w-55"
                >
                  Contact
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <nav aria-label="Navigare footer">
              <Heading
                as="h4"
                size="h3"
                className="mb-3 md:mb-4 md:text-start"
                align="center"
              >
                Navigare
              </Heading>

              <ul className="space-y-2 md:space-y-3">
                {navItems.map((link) => (
                  <li key={link.url} className="text-center md:text-start">
                    <Link
                      href={link.url}
                      className="text-sm text-muted transition-colors hover:text-charcoal md:text-base "
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Location / map */}
          <div className="mx-auto w-full max-w-md text-center xl:mx-0 xl:max-w-none xl:text-left">
            <Heading as="h4" size="h3" className="mb-3 md:mb-4" align="center">
              {LOCATION_LABEL}
            </Heading>

            <p className="mx-auto inline-flex  items-start justify-center gap-2 text-sm leading-6 text-muted md:text-base xl:mx-0 xl:justify-start">
              <MapPin size={16} strokeWidth={1.75} className="mt-1 shrink-0" />
              <span>{LOCATION_TEXT}</span>
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-white/40">
              <ConsentProtectedEmbed
                title="Harta este blocată"
                description="Pentru a afișa Google Maps, acceptă categoria de servicii externe și conținut integrat."
                className="min-h-40 rounded-2xl md:min-h-44"
              >
                <iframe
                  title="Hartă Trauma Center Cluj"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.6015433081316!2d23.61199571213928!3d46.77274997100512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473805ced1efe1e9%3A0x7930e24e27ac6c75!2sTrauma%20Center%2C%20Centru%20de%20Psihoterapie!5e0!3m2!1sen!2sro!4v1779696924636!5m2!1sen!2sro"
                  className="h-40 w-full border-0 md:h-44"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </ConsentProtectedEmbed>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 border-t border-border pt-5 text-sm text-muted md:mt-10 md:pt-6">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p>© {year} Adriana Laszlo. Toate drepturile rezervate.</p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
              <Link
                href="https://marclaszlo.dev/"
                className="transition-colors hover:text-charcoal"
              >
                Developed by Marc Laszlo
              </Link>

              <Link
                href="/politica-de-confidentialitate"
                className="transition-colors hover:text-charcoal"
              >
                Politica de confidențialitate
              </Link>

              <Link
                href="/politica-cookies"
                className="transition-colors hover:text-charcoal"
              >
                Politica cookies
              </Link>
              <CookieSettingsButton className="transition-colors hover:text-charcoal" />
              <Link
                href="/termeni-si-conditii"
                className="transition-colors hover:text-charcoal"
              >
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
