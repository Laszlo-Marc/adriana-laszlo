import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { ServicesTabs, type ServiceTabItem } from "./ServicesTabs";

const services: ServiceTabItem[] = [
  {
    id: "af-emdr",
    label: "AF-EMDR",
    title: "Terapie AF-EMDR pentru procesarea traumelor",
    description:
      "O abordare specializată pentru lucrul cu experiențe dificile, traumă relațională și blocaje emoționale care continuă să influențeze prezentul.",
    chips: ["Traumă relațională", "Anxietate", "Blocaje emoționale"],
    outcomes: [
      "Reduce intensitatea emoțională a amintirilor dureroase",
      "Ajută la înțelegerea rădăcinii tiparelor repetitive",
      "Susține reglarea emoțională și recâștigarea clarității",
    ],
    details: [
      { label: "Durată", value: "60 minute" },
      { label: "Format", value: "În cabinet" },
      { label: "Preț", value: "320 RON / ședință" },
    ],
    ctaLabel: "Programează o ședință AF-EMDR",
    ctaHref: "#contact",
    image: {
      src: "/services/af-emdr.webp",
      alt: "Psihoterapie AF-EMDR într-un cadru calm și sigur",
    },
    featuredNote:
      "Abordare specializată pentru procesarea traumelor, integrată ca direcție distinctivă a practicii.",
    highlight: true,
  },
  {
    id: "individuala",
    label: "Psihoterapie individuală",
    title: "Psihoterapie individuală în cabinet",
    description:
      "Un spațiu sigur și structurat în care poți înțelege mai bine ceea ce trăiești, lucra asupra dificultăților emoționale și construi schimbări reale.",
    chips: ["Relații dificile", "Stimă de sine", "Confuzie emoțională"],
    outcomes: [
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
    image: {
      src: "/services/individuala.webp",
      alt: "Ședință de psihoterapie individuală într-un cabinet primitor",
    },
  },
  {
    id: "online",
    label: "Psihoterapie online",
    title: "Psihoterapie online, de oriunde te afli",
    description:
      "Terapia online oferă flexibilitate și continuitate, păstrând claritatea procesului terapeutic și accesul mai ușor la sprijin specializat.",
    chips: ["Program încărcat", "Alt oraș", "Flexibilitate"],
    outcomes: [
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
    image: {
      src: "/services/online.webp",
      alt: "Psihoterapie online într-un cadru liniștit și profesionist",
    },
  },
  {
    id: "international",
    label: "Internațional",
    title: "Psihoterapie pentru românii din străinătate",
    description:
      "Un format dedicat celor care locuiesc în afara țării și își doresc terapie în limba română, într-un cadru profesionist și familiar.",
    chips: ["Diaspora", "În limba română", "Online"],
    outcomes: [
      "Lucrezi în limba română, într-un cadru familiar",
      "Ai acces la terapie indiferent de țara în care locuiești",
      "Primești susținere pentru dificultăți relaționale și emoționale complexe",
    ],
    details: [
      { label: "Durată", value: "50 minute" },
      { label: "Format", value: "Online" },
      { label: "Preț", value: "70 EUR / ședință" },
    ],
    ctaLabel: "Solicită o programare",
    ctaHref: "#contact",
    image: {
      src: "/services/online.webp",
      alt: "Psihoterapie online pentru românii din străinătate",
    },
  },
];

export default function ServicesSection() {
  return (
    <Section
      id="servicii"
      background="cream"
      spacing="md"
      aria-labelledby="services-heading"
    >
      <Container size="wide" padding="default">
        <div className="mx-auto max-w-full text-center">
          <Text
            as="p"
            className="font-body text-sm font-semibold uppercase tracking-[0.22em] text-gold"
          >
            Servicii
          </Text>

          <Heading as="h2" size="h2" className="mt-3 text-charcoal">
            Forme de lucru clare, adaptate nevoilor tale
          </Heading>
        </div>

        <div className="mt-10">
          <ServicesTabs tabs={services} defaultTab="af-emdr" />
        </div>
      </Container>
    </Section>
  );
}
