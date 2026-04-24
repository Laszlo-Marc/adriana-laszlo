export type AfEmdrCertification = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  imageSrc: string;
  logoSrc: string;
  logoAlt: string;
};

export const afEmdrCertifications: AfEmdrCertification[] = [
  {
    id: "parnell-af-emdr",
    title: "Attachment-Focused EMDR Basic Training",
    issuer: "Parnell Institute",
    description:
      "Formare completă în AF-EMDR, incluzând părțile 1, 2 și 3, plus ore de consultare clinică.",
    imageSrc: "/certifications/parnell-af-emdr.jpg",
    logoSrc: "/logos/parnell.png",
    logoAlt: "Parnell Institute",
  },
  {
    id: "integrative-psychotherapy",
    title: "Psihoterapeut autonom în psihoterapie integrativă",
    issuer: "Asociația Română de Psihoterapie Integrativă",
    description:
      "Diplomă de formare profesională în psihoterapie integrativă, baza din care Adriana își construiește practica relațională și orientată spre vindecarea traumei.",
    imageSrc: "/certifications/arpi-diploma.jpg",
    logoSrc: "/logos/arpi.jpg",
    logoAlt: "Asociația Română de Psihoterapie Integrativă",
  },
];
