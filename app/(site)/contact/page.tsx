import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/pages/contact/ContactForm";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Programări psihoterapie în Cluj-Napoca",
  description:
    "Contactează cabinetul Adriana Laszlo pentru programări la psihoterapie individuală, AF-EMDR sau evenimente terapeutice în Cluj-Napoca.",
  path: "/contact",
  image: "/og/contact-og.jpg",
  keywords: [
    "contact psihoterapeut Cluj",
    "programare psihoterapie Cluj",
    "cabinet psihoterapie Cluj-Napoca",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Contact | Programări psihoterapie în Cluj-Napoca",
            description:
              "Contactează cabinetul Adriana Laszlo pentru programări la psihoterapie individuală, AF-EMDR sau evenimente terapeutice în Cluj-Napoca.",
            path: "/contact",
          }),
          breadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <Section
        background="cream"
        spacing="none"
        aria-labelledby="contact-page-heading"
        className="relative overflow-hidden"
        backgroundImage={{
          src: "/contact-bg.jpg",
          priority: true,
          overlayClassName: "bg-cream/58 lg:bg-cream/42",
        }}
      >
        <h1 id="contact-page-heading" className="sr-only">
          Contact Adriana Laszlo
        </h1>

        <Container size="wide" padding="default">
          <div className="flex min-h-svh items-center justify-center pb-10 pt-24 lg:py-40">
            <div className="w-full max-w-3xl rounded-[26px] border border-charcoal/8 bg-white/92 p-5 shadow-[0_16px_42px_rgba(44,44,44,0.07)] backdrop-blur-sm sm:rounded-4xl sm:p-7 lg:rounded-[34px] lg:p-9">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
