export type EventItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  dateLabel: string;
  locationLabel: string;
  formatLabel: string;
  image: {
    src: string;
    alt: string;
  };
};
export const featuredEvent = {
  slug: "grup-af-emdr",
  eyebrow: "Program recomandat",
  title: "Program AF-EMDR de Grup",
  intro:
    "Un program ghidat, restrâns și structurat pentru persoane care simt că sistemul lor nervos rămâne în alertă, chiar și atunci când la exterior lucrurile par sub control.",
  description:
    "Întâlnirile combină psihoeducație, exerciții ghidate și lucru terapeutic într-un ritm atent, astfel încât fiecare participant să poată rămâne conectat la propriile limite, resurse și nevoi reale.",
  detailsHref: "/evenimente/grup-af-emdr-anxietate-stres-perfectionism",
  detailsCtaLabel: "Vezi pagina completă a programului",
  facts: [
    {
      label: "Format",
      value: "4 întâlniri · 2 ore / întâlnire",
    },
    {
      label: "Locație",
      value: "Trauma Center · Cluj-Napoca",
    },
    {
      label: "Grup",
      value: "Locuri limitate · cadru confidențial",
    },
    {
      label: "Potrivit pentru",
      value: "Anxietate, stres, suprasolicitare, perfecționism",
    },
  ],
  images: [
    {
      src: "/events/grup-emdr/emdr1.jpeg",
      alt: "Spațiu de terapie de grup cu scaune așezate în cerc",
    },
    {
      src: "/events/grup-emdr/emdr2.jpeg",
      alt: "Cadru calm pentru program terapeutic de grup",
    },
    {
      src: "/events/grup-emdr/emdr3.jpeg",
      alt: "Spațiu pregătit pentru workshopuri și ateliere",
    },
    {
      src: "/events/grup-emdr/emdr4.jpeg",
      alt: "Cerc de scaune pentru lucru terapeutic de grup",
    },
    {
      src: "/events/grup-emdr/emdr5.jpeg",
      alt: "Ambient cald pentru programe de reconectare emoțională",
    },
    {
      src: "/events/grup-emdr/emdr6.jpeg",
      alt: "Ambient cald pentru programe de reconectare emoțională",
    },
    {
      src: "/events/grup-emdr/emdr7.jpeg",
      alt: "Ambient cald pentru programe de reconectare emoțională",
    },
    {
      src: "/events/grup-emdr/emdr8.jpeg",
      alt: "Ambient cald pentru programe de reconectare emoțională",
    },
  ],
};
export type EventTone = "teal" | "purple" | "gold";

export type OtherEventItem = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  tone: EventTone;
  dateLabel: string;
  formatLabel: string;
  locationLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export const otherEvents: OtherEventItem[] = [
  {
    slug: "atelier-relatia-cu-sine",
    eyebrow: "Atelier",
    title: "Relația cu sine după experiențe dificile",
    description:
      "Un atelier pentru persoane care vor să înțeleagă mai bine vocea critică interioară, rușinea și nevoia constantă de validare.",
    href: "/evenimente/atelier-relatia-cu-sine",
    ctaLabel: "Vezi detalii",
    tone: "teal",
    dateLabel: "În curând",
    formatLabel: "Atelier · 3 ore",
    locationLabel: "Cluj-Napoca",
    imageSrc: "/events/events-hero.jpg",
    imageAlt: "Spațiu pregătit pentru atelier terapeutic",
  },
  {
    slug: "workshop-anxietate-corp",
    eyebrow: "Workshop",
    title: "Anxietatea și corpul",
    description:
      "Un workshop practic despre felul în care anxietatea se simte în corp și despre resurse simple de reglare emoțională.",
    href: "/evenimente/workshop-anxietate-corp",
    ctaLabel: "Află mai multe",
    tone: "purple",
    dateLabel: "În curând",
    formatLabel: "Workshop practic",
    locationLabel: "Trauma Center",
    imageSrc: "/events/events-hero.jpg",
    imageAlt: "Cerc de scaune pentru workshop de grup",
  },
  {
    slug: "grup-trauma-relationala",
    eyebrow: "Grup terapeutic",
    title: "Trauma relațională și limitele personale",
    description:
      "Un program de grup pentru persoane care vor să lucreze cu tipare relaționale, limite, atașament și siguranță interioară.",
    href: "/evenimente/grup-trauma-relationala",
    ctaLabel: "Vezi programul",
    tone: "gold",
    dateLabel: "Înscrieri viitoare",
    formatLabel: "Program de grup",
    locationLabel: "Cluj-Napoca / online",
    imageSrc: "/events/events-hero.jpg",
    imageAlt: "Spațiu calm pentru terapie de grup",
  },
];
