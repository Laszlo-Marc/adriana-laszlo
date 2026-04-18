export type EventItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
  meta: string;
};

export const homeEventItems: EventItem[] = [
  {
    id: "af-emdr-workshops",
    eyebrow: "Workshopuri",
    title: "Workshopuri",
    description:
      "Întâlniri ghidate pentru reglare emoțională, înțelegerea traumelor relaționale și reconectare cu resursele interioare.",
    image: "/events/emdr.webp",
    href: "/evenimente",
    ctaLabel: "Vezi workshopurile",
    meta: "În persoană • Grup restrâns",
  },
  {
    id: "group-programs",
    eyebrow: "Programe de grup",
    title: "Programe de grup",
    description:
      "Spații sigure și atent structurate pentru vindecare, claritate și lucru profund pe tipare relaționale și traumă de atașament.",
    image: "/events/constelatii.webp",
    href: "/evenimente",
    ctaLabel: "Descoperă programele",
    meta: "Serii tematice • Locuri limitate",
  },
  {
    id: "creative-atelier",
    eyebrow: "Ateliere",
    title: "Ateliere",
    description:
      "Experiențe blânde care combină expresia creativă cu tehnici de reglaj emoțional pentru mai multă prezență și siguranță interioară.",
    image: "/events/flame.webp",
    href: "/evenimente",
    ctaLabel: "Vezi atelierele",
    meta: "Experiențial • Practic",
  },
  {
    id: "community-events",
    eyebrow: "Comunitate",
    title: "Evenimente",
    description:
      "Întâlniri create pentru educație, conectare și sprijin, dedicate celor care își doresc un cadru clar și uman pentru creștere.",
    image: "/events/emotii-creatii.webp",
    href: "/evenimente",
    ctaLabel: "Vezi evenimentele",
    meta: "Educație • Conectare",
  },
];
