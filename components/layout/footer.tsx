import Link from "next/link";
import Image from "next/image";
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
  return (
    <footer
      className="border-t border-border bg-cream"
      aria-label="Subsol site"
    >
      <div className="mx-auto max-w-450 px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.1fr_0.8fr_1fr_1.1fr]">
          <div className="space-y-5">
            <Logo size="md" />

            <Text>
              Psihoterapie integrativă într-un spațiu sigur, calm și atent,
              orientat spre claritate, echilibru și vindecare.
            </Text>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-charcoal transition-colors hover:border-gold hover:text-gold"
              >
                <FaInstagram size={24} strokeWidth={2} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-charcoal transition-colors hover:border-gold hover:text-gold"
              >
                <FaFacebookF size={24} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div>
            <Heading as="h4" size="h3" className="mb-4">
              Navigare
            </Heading>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg text-muted transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading as="h4" size="h3" className="mb-4">
              Contact
            </Heading>

            <div className="flex max-w-xs flex-col gap-3">
              <Button
                href={PHONE_HREF}
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<Phone size={20} strokeWidth={2} />}
              >
                {PHONE_DISPLAY}
              </Button>

              <Button
                href={WHATSAPP_HREF}
                variant="purple"
                size="md"
                fullWidth
                leftIcon={<MessageCircle size={20} strokeWidth={2} />}
              >
                WhatsApp
              </Button>
            </div>

            <a
              href={EMAIL_HREF}
              className="mt-4 inline-flex items-center gap-2 text-md text-muted transition-colors hover:text-charcoal"
            >
              <Mail size={16} strokeWidth={1.75} />
              <span>{EMAIL}</span>
            </a>
          </div>

          <div className="space-y-4">
            <div>
              <Heading as="h4" size="h3" className="mb-4">
                {LOCATION_LABEL}
              </Heading>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} strokeWidth={1.75} />
                <span>{LOCATION_TEXT}</span>
              </p>
            </div>

            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-charcoal"
            >
              Vezi pe Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Adriana Laszlo. Toate drepturile
            rezervate.
          </p>

          <div className="flex flex-wrap items-center gap-4">
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
    </footer>
  );
}
