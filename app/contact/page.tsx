import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, Clock3 } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import ContactForm from "@/components/pages/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Adriana Laszlo",
  description:
    "Ia legătura cu Adriana Laszlo pentru programări, întrebări sau informații despre ședințele de psihoterapie în Cluj-Napoca sau online.",
};

type ContactItem = {
  title: string;
  value: string;
  href?: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    title: "Telefon",
    value: "+40 775 214 338",
    href: "tel:+40775214338",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@traumacenter.ro",
    href: "mailto:info@traumacenter.ro",
    icon: Mail,
  },
  {
    title: "Locație",
    value: "Strada Artelor nr.35, Cluj-Napoca, România",
    href: "https://maps.app.goo.gl/6YtPLrd2G7VgNTQg6",
    icon: MapPin,
    external: true,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: FaFacebook,
  },
];

export default function ContactPage() {
  return (
    <Section
      background="cream"
      spacing="none"
      aria-labelledby="contact-page-heading"
      className="relative overflow-hidden"
      backgroundImage={{
        src: "/contact-bg.jpg",
        priority: true,
        overlayClassName: "bg-cream/50 lg:bg-cream/35",
      }}
    >
      <h1 id="contact-page-heading" className="sr-only">
        Contact Adriana Laszlo
      </h1>

      <Container size="wide" padding="default">
        <div className="grid items-start gap-5 pb-8 pt-20 sm:gap-7 sm:pb-12 sm:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:py-40 xl:gap-10">
          {/* LEFT: FORM */}
          <div className="self-start rounded-[26px] border border-charcoal/8 bg-white/92 p-5 shadow-[0_16px_42px_rgba(44,44,44,0.07)] sm:rounded-[32px] sm:p-7 lg:rounded-[34px] lg:p-9">
            <div className="mb-5 space-y-1.5 sm:mb-7 sm:space-y-2">
              <Heading as="h2" size="h3">
                Trimite un mesaj
              </Heading>
            </div>

            <ContactForm />
          </div>

          {/* RIGHT: INFO */}
          <aside className="rounded-[28px] border border-charcoal/8 bg-teal/80 p-4 sm:rounded-4xl sm:p-6 lg:p-8">
            <div className="relative space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex items-start gap-3 rounded-[22px] border border-charcoal/8 bg-white/75 p-3.5 transition-shadow hover:shadow-[0_10px_28px_rgba(44,44,44,0.05)] sm:gap-4 sm:rounded-3xl sm:p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-purple sm:h-11 sm:w-11">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-charcoal/60 sm:text-sm">
                          {item.title}
                        </p>

                        <div className="mt-0.5 flex items-start gap-2 sm:mt-1 sm:items-center">
                          <p className="text-sm font-medium leading-snug text-charcoal sm:text-base lg:text-lg">
                            {item.value}
                          </p>

                          {item.href ? (
                            <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-charcoal/40 sm:mt-0 sm:h-4 sm:w-4" />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );

                  if (!item.href) {
                    return <div key={item.title}>{content}</div>;
                  }

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>

              <div className="rounded-[22px] border border-charcoal/8 bg-cream/80 p-4 sm:rounded-3xl sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple sm:h-10 sm:w-10">
                    <Clock3 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <div>
                    <Heading as="h3" size="h4">
                      Program orientativ
                    </Heading>

                    <Text
                      color="muted"
                      className="mt-1.5 text-sm sm:mt-2 sm:text-base"
                    >
                      Luni – Vineri, 09:00 – 18:00
                    </Text>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <Heading as="h3" size="h4">
                  Social media
                </Heading>

                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-3.5 py-2 text-sm font-medium text-charcoal transition hover:bg-white/80 sm:px-4"
                      >
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
