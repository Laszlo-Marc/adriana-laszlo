import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { ServicesTabs, ServiceTabItem } from "./ServicesTabs";

const services: ServiceTabItem[] = [
  {
    id: "af-emdr",
    label: "AF-EMDR",
    eyebrow: "Diferențiator",
    badge: "Specializare avansată",
    title: "Terapie AF-EMDR pentru procesarea traumelor",
    description:
      "AF-EMDR este o abordare avansată care ajută la reprocesarea experiențelor dificile, reducerea intensității emoționale și recâștigarea unui sentiment de siguranță interioară.",
    forWho:
      "Potrivită dacă te confrunți cu efectele unor relații abuzive, traumă relațională, anxietate puternică, blocaje emoționale sau tipare repetitive greu de înțeles și schimbat.",
    benefits: [
      "Reduce încărcătura emoțională a amintirilor dureroase",
      "Te ajută să înțelegi rădăcina tiparelor care te blochează",
      "Susține reglarea emoțională și recâștigarea clarității",
    ],
    details: [
      { label: "Durată", value: "60 minute" },
      { label: "Format", value: "În cabinet" },
      { label: "Preț", value: "320 RON / ședință" },
    ],
    ctaLabel: "Programează o ședință AF-EMDR",
    ctaHref: "#contact",
    highlight: true,
  },
  {
    id: "individuala",
    label: "Psihoterapie individuală",
    eyebrow: "Serviciu",
    title: "Psihoterapie individuală în cabinet",
    description:
      "Un spațiu sigur și structurat în care poți înțelege mai bine ceea ce trăiești, lucra asupra dificultăților emoționale și construi schimbări reale, într-un ritm potrivit pentru tine.",
    forWho:
      "Potrivită pentru persoane care se confruntă cu anxietate, dificultăți relaționale, stimă de sine scăzută, suferință emoțională sau perioade de confuzie și blocaj.",
    benefits: [
      "Clarifici problemele cu care te confrunți",
      "Înțelegi mai bine reacțiile și tiparele tale",
      "Construiești resurse interioare mai stabile",
    ],
    details: [
      { label: "Durată", value: "50 minute" },
      { label: "Format", value: "În cabinet" },
      { label: "Preț", value: "320 RON / ședință" },
    ],
    ctaLabel: "Programează o ședință",
    ctaHref: "#contact",
  },
  {
    id: "online",
    label: "Psihoterapie online",
    eyebrow: "Serviciu",
    title: "Psihoterapie online, de oriunde te afli",
    description:
      "Terapia online oferă flexibilitate și accesibilitate, păstrând claritatea procesului terapeutic și continuitatea lucrului, chiar dacă nu poți ajunge fizic la cabinet.",
    forWho:
      "Potrivită dacă locuiești în alt oraș sau în străinătate, ai un program încărcat sau ai nevoie de un format mai flexibil și ușor de integrat în viața de zi cu zi.",
    benefits: [
      "Acces mai ușor la terapie, indiferent de locație",
      "Continuitate și flexibilitate în programare",
      "Confortul de a lucra din propriul tău spațiu",
    ],
    details: [
      { label: "Durată", value: "50 minute" },
      { label: "Format", value: "Online" },
      { label: "Preț", value: "320 RON / ședință" },
    ],
    ctaLabel: "Programează online",
    ctaHref: "#contact",
  },
  {
    id: "international",
    label: "Internațional",
    eyebrow: "Serviciu",
    title: "Psihoterapie pentru românii din străinătate",
    description:
      "Un format dedicat persoanelor care locuiesc în afara țării și își doresc să lucreze terapeutic în limba română, într-un cadru profesionist și familiar.",
    forWho:
      "Potrivită dacă locuiești în afara României și cauți sprijin terapeutic în limba română, cu un terapeut care înțelege contextul tău cultural și emoțional.",
    benefits: [
      "Lucrezi în limba română, într-un cadru familiar",
      "Accesibilitate indiferent de țara în care locuiești",
      "Susținere pentru dificultăți relaționale și emoționale complexe",
    ],
    details: [
      { label: "Durată", value: "50 minute" },
      { label: "Format", value: "Online" },
      { label: "Preț", value: "70 EUR / ședință" },
    ],
    ctaLabel: "Solicită o programare",
    ctaHref: "#contact",
  },
];

export default function ServicesSection() {
  return (
    <Section
      id="servicii"
      background="cream"
      spacing="lg"
      aria-labelledby="services-heading"
    >
      <Container size="wide" padding="default">
        <div className="mx-auto max-w-full text-center">
          <Text
            as="p"
            className="font-body text-md font-semibold uppercase tracking-[0.22em] text-gold"
          >
            Servicii
          </Text>

          <Heading as="h2" size="h2" className="mt-3 text-charcoal">
            Sprijin terapeutic clar, calm și adaptat nevoilor tale
          </Heading>

          <Text className="mt-4 text-base leading-8 text-charcoal/78 md:text-lg">
            Fie că ai nevoie de psihoterapie individuală, terapie online sau de
            o abordare specializată pentru procesarea traumelor, scopul este să
            găsim împreună forma de lucru potrivită pentru tine.
          </Text>
        </div>

        <div className="mt-8 rounded-3xl border border-gold/20 bg-white/70 px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm md:px-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <Text className="text-sm font-medium text-charcoal">
              Specializare distinctivă
            </Text>
            <Text className="text-sm leading-7 text-charcoal/72">
              AF-EMDR este una dintre abordările centrale ale practicii și
              merită evidențiată ca diferențiator principal în această secțiune.
            </Text>
          </div>
        </div>

        <div className="mt-8">
          <ServicesTabs tabs={services} defaultTab="af-emdr" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-charcoal/10 bg-white px-5 py-5">
            <Text className="text-sm font-semibold text-charcoal">
              1. Discuție inițială
            </Text>
            <Text className="mt-2 text-sm leading-7 text-charcoal/72">
              Clarificăm dificultățile cu care te confrunți și ce îți dorești să
              schimbi.
            </Text>
          </div>

          <div className="rounded-2xl border border-charcoal/10 bg-white px-5 py-5">
            <Text className="text-sm font-semibold text-charcoal">
              2. Stabilim direcția de lucru
            </Text>
            <Text className="mt-2 text-sm leading-7 text-charcoal/72">
              Alegem împreună abordarea potrivită și construim un cadru sigur și
              clar.
            </Text>
          </div>

          <div className="rounded-2xl border border-charcoal/10 bg-white px-5 py-5">
            <Text className="text-sm font-semibold text-charcoal">
              3. Lucrăm în ritmul tău
            </Text>
            <Text className="mt-2 text-sm leading-7 text-charcoal/72">
              Procesul terapeutic respectă ritmul, resursele și nevoile tale
              reale.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
