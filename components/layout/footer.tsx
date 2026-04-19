import Link from "next/link";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import {
  navLinks,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/components/layout/navbar/NavLinks";
import Text from "../ui/Text";
import Heading from "../ui/Heading";

const EMAIL = "adrianalaszlo@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL}`;
const WHATSAPP_HREF = "https://wa.me/40744123456";
const MAPS_HREF = "https://maps.app.goo.gl/Vm8iqJT8wFqDtZa86";
const LOCATION_LABEL = "Trauma Center Cluj";
const LOCATION_TEXT = "Strada Artelor 35, Cluj-Napoca, România";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-teal-soft" aria-label="Subsol site">
      <div className="mx-auto max-w-450 px-6 py-10 md:px-8 md:py-12 xl:py-14">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.95fr_0.9fr_1fr] xl:gap-10">
          <div className="space-y-8 xl:space-y-0 xl:contents">
            <div className="space-y-4 xl:space-y-5">
              <Logo size="md" />

              <Text className="max-w-[34ch] text-sm leading-6 md:text-base">
                Psihoterapie integrativă într-un spațiu sigur, calm și atent,
                orientat spre claritate, echilibru și vindecare.
              </Text>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal text-charcoal transition-colors hover:border-gold hover:text-gold"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal text-charcoal transition-colors hover:border-gold hover:text-gold"
                >
                  <FaFacebookF size={18} />
                </a>
              </div>
            </div>

            <div className="space-y-3 xl:space-y-4">
              <Heading as="h4" size="h3" className="mb-0">
                Contact
              </Heading>

              <div className="flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row xl:max-w-xs xl:flex-col">
                <Button
                  href={PHONE_HREF}
                  variant="primary"
                  size="md"
                  fullWidth
                  leftIcon={<Phone size={18} strokeWidth={1.9} />}
                >
                  {PHONE_DISPLAY}
                </Button>

                <Button
                  href={WHATSAPP_HREF}
                  variant="purple"
                  size="md"
                  fullWidth
                  leftIcon={<MessageCircle size={18} strokeWidth={1.9} />}
                >
                  WhatsApp
                </Button>
              </div>

              <a
                href={EMAIL_HREF}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-charcoal md:text-base"
              >
                <Mail size={16} strokeWidth={1.75} />
                <span className="break-all">{EMAIL}</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 xl:contents">
              <div>
                <Heading as="h4" size="h3" className="mb-3 md:mb-4">
                  Navigare
                </Heading>

                <ul className="space-y-2 md:space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-charcoal md:text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <Heading as="h4" size="h3" className="mb-3 md:mb-4">
                    {LOCATION_LABEL}
                  </Heading>

                  <p className="inline-flex items-start gap-2 text-sm leading-6 text-muted md:text-base">
                    <MapPin
                      size={16}
                      strokeWidth={1.75}
                      className="mt-1 shrink-0"
                    />
                    <span>{LOCATION_TEXT}</span>
                  </p>
                </div>

                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm text-muted transition-colors hover:text-charcoal md:text-base"
                >
                  Vezi pe Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-5 text-sm text-muted md:mt-10 md:pt-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
            <p>© {year} Adriana Laszlo. Toate drepturile rezervate.</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href="/politica-de-confidentialitate"
                className="transition-colors hover:text-charcoal"
              >
                Politica de confidențialitate
              </Link>

              <Link
                href="/cookies"
                className="transition-colors hover:text-charcoal"
              >
                Politica cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
