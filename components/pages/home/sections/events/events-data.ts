export type ProgramsCarouselImage = {
  id: string;
  src: string;
  alt: string;
  href?: string;
};

export const homeProgramsCarouselImages: ProgramsCarouselImage[] = [
  {
    id: "poster-1",
    src: "/events/emdr.webp",
    alt: "Poster workshop EMDR",
    href: "/evenimente",
  },
  {
    id: "event-1",
    src: "/events/event-photo-1.webp",
    alt: "Participanți la un eveniment Trauma Center",
    href: "/evenimente",
  },
  {
    id: "poster-2",
    src: "/events/flame.webp",
    alt: "Poster atelier experiențial",
    href: "/evenimente",
  },
  {
    id: "event-2",
    src: "/events/event-photo-2.webp",
    alt: "Cadru dintr-un atelier Trauma Center",
    href: "/evenimente",
  },
  {
    id: "poster-3",
    src: "/events/constelatii.webp",
    alt: "Poster program de grup",
    href: "/evenimente",
  },
  {
    id: "event-3",
    src: "/events/event-photo-3.webp",
    alt: "Participanți într-un workshop de grup",
    href: "/evenimente",
  },
];
