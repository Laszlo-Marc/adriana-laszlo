import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, Clock3 } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import AccentText from "@/components/ui/AccentText";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    title: "Telefon",
    value: "+40 7XX XXX XXX",
    href: "tel:+407XXXXXXXX",
    icon: Phone,
  },
  {
    title: "Email",
    value: "contact@domeniu.ro",
    href: "mailto:contact@domeniu.ro",
    icon: Mail,
  },
  {
    title: "Locație",
    value: "Cluj-Napoca, România",
    href: "https://maps.google.com/?q=Cluj-Napoca",
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
    <>
      <Section
        background="cream"
        spacing="md"
        aria-labelledby="contact-page-heading"
        className="relative overflow-hidden mt-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-30 top-55 hidden opacity-[0.5] lg:block"
        >
          <Image
            src="/backgrounds/double-simple.png"
            alt=""
            width={340}
            height={340}
            className="h-auto w-85 max-w-none"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[5%] top-30 hidden opacity-[0.55] xl:block"
        >
          <Image
            src="/backgrounds/dragonfly.png"
            alt=""
            width={150}
            height={150}
            className="h-auto w-40"
          />
        </div>
        <Container size="wide" padding="default">
          <div className="mx-auto  text-center">
            <AccentText>Contact</AccentText>

            <Heading as="h1" size="h1" align="center" className="mt-3">
              Hai să găsim cea mai potrivită cale de a începe.
            </Heading>

            <Text
              size="lg"
              color="muted"
              align="center"
              className="mx-auto mt-5 max-w-4xl "
            >
              Poți lua legătura cu mine telefonic, prin email sau prin
              formularul de mai jos. Dacă ai întrebări despre ședințe,
              programări sau colaborări, îți voi răspunde în cel mai scurt timp
              posibil.
            </Text>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] xl:gap-10">
            {/* LEFT: FORM */}
            <div className="self-start rounded-[34px] border border-charcoal/8 bg-white/92 p-6 shadow-[0_18px_48px_rgba(44,44,44,0.07)] sm:p-8 lg:p-9">
              <div className="mb-7 space-y-2">
                <Heading as="h2" size="h3">
                  Trimite un mesaj
                </Heading>
                <Text color="muted" className="max-w-xl">
                  Completează formularul, iar eu revin către tine în cel mai
                  scurt timp posibil.
                </Text>
              </div>

              <ContactForm />
            </div>

            {/* RIGHT: INFO */}
            <div className="rounded-4xl border border-charcoal/8 bg-sand/35 p-5 sm:p-7 lg:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-10 bottom-8 hidden opacity-[0.5] lg:block"
              >
                <Image
                  src="/backgrounds/df-purple-down.png"
                  alt=""
                  width={170}
                  height={170}
                  className="h-auto w-42.5"
                />
              </div>
              <div className="relative space-y-6">
                <div className="space-y-3">
                  <Heading as="h2" size="h4">
                    Alte modalități de contact
                  </Heading>
                  <Text color="muted">
                    Dacă preferi, mă poți contacta direct telefonic sau prin
                    email. Ședințele pot avea loc în cabinet sau online, în
                    funcție de nevoile tale.
                  </Text>
                </div>

                <div className="space-y-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 rounded-3xl border border-charcoal/8 bg-white/75 p-4 transition-shadow hover:shadow-[0_10px_28px_rgba(44,44,44,0.05)]">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-medium text-charcoal/60">
                            {item.title}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <p className="text-base font-medium text-charcoal sm:text-lg">
                              {item.value}
                            </p>
                            {item.href ? (
                              <ArrowUpRight className="h-4 w-4 text-charcoal/40" />
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

                <div className="rounded-3xl border border-charcoal/8 bg-cream/80 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <Heading as="h3" size="h4">
                        Program orientativ
                      </Heading>
                      <Text color="muted" className="mt-2">
                        Luni – Vineri, 09:00 – 18:00
                      </Text>
                      <Text color="muted" className="mt-1">
                        Pentru programări în afara acestui interval, te rog să
                        îmi lași un mesaj.
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Heading as="h3" size="h4">
                    Social media
                  </Heading>

                  <div className="flex flex-wrap gap-3">
                    {socials.map((social) => {
                      const Icon = social.icon;

                      return (
                        <Link
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-medium text-charcoal transition hover:bg-white/80"
                        >
                          <Icon className="h-4 w-4" />
                          {social.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="sm"
        aria-labelledby="map-heading"
        className="relative"
      >
        <Container size="wide" padding="default">
          <div className="mx-auto max-w-3xl text-center">
            <AccentText>Locație</AccentText>

            <Heading as="h2" size="h2" align="center" className="mt-3">
              Cabinet în Cluj-Napoca
            </Heading>

            <Text
              color="muted"
              align="center"
              className="mx-auto mt-4 max-w-2xl"
            >
              Ședințele pot avea loc în cabinet sau online. Mai jos poți vedea
              zona în care se află locația.
            </Text>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-4xl border border-charcoal/8 bg-white shadow-[0_16px_42px_rgba(44,44,44,0.06)]">
            <div className="aspect-16/7 min-h-80 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.6015433081316!2d23.61199571213928!3d46.77274997100512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473805ced1efe1e9%3A0x7930e24e27ac6c75!2sTrauma%20Center%2C%20Centru%20de%20Psihoterapie!5e0!3m2!1sen!2sro!4v1776946732223!5m2!1sen!2sro"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
