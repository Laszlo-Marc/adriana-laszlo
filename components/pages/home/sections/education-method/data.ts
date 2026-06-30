export type MethodStep = {
  title: string;
  body: string;
  points: string[];
  note?: string;
  imageSrc: string;
  imageAlt: string;
  imageTitle: string;
  imageSubtitle: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const methodSteps: MethodStep[] = [
  {
    title: "Formare și acreditări",
    body: "Lucrul terapeutic este susținut de formare continuă, experiență clinică și o înțelegere atentă a modului în care trauma se poate manifesta în corp, emoții și relații.",
    points: [
      "Formare în Psihoterapie Integrativă în cadrul ARPI România",
      "Cursuri de specializare în Emotionally Focused Therapy (Terapia Centrată pe Emoţii)",
      "Specializare AF – EMDR (Attachment Focused – Eye Movement Desensitization and Reprocessing) a Institutului Parnell (parnellemdr.com)",
    ],
    note: "În terapie, siguranța nu este un detaliu. Este baza întregului proces.",
    imageSrc: "/home-page/certifications.jpg",
    imageAlt: "Materiale de lucru și formare în cabinetul de psihoterapie",
    imageTitle: "Formare continuă",
    imageSubtitle:
      "O practică susținută de studiu, experiență și atenție clinică.",
    cta: {
      label: "Află mai multe",
      href: "/despre",
    },
  },
  {
    title: "o nouă orientare în practica terapiei EMDR",
    body: "AF-EMDR este o abordare adaptată pentru procesarea experiențelor dificile, cu atenție la atașament, reglare emoțională și resursele interioare ale persoanei.",
    points: [
      "Procesare atentă a amintirilor încărcate emoțional",
      "Lucru cu reacții corporale și emoționale",
      "Accent pe stabilizare, resurse și siguranță",
    ],
    note: "Nu forțăm procesul. Îl construim pas cu pas, în ritmul potrivit.",
    imageSrc: "/home-page/services/af-emdr.jpg",
    imageAlt: "Detaliu din cabinetul de psihoterapie și materiale terapeutice",
    imageTitle: "AF-EMDR",
    imageSubtitle: "O abordare orientată spre traumă, atașament și reglare.",
    cta: {
      label: "Descoperă metoda",
      href: "/af-emdr",
    },
  },
  {
    title: "Terapie de grup",
    body: "Programele de grup abordează teme clare, oferă o structură și sprijin diferite de terapia individuală. Programele AF-EMDR sunt gândite pentru persoane care vor să aprofundeze procesul terapeutic într-un ritm accelerat, dar sigur și orientat spre schimbare.",
    points: [
      "Program structurat pe teme specifice",
      "Exerciții ghidate și psihoeducație",
      "Sprijin pentru depășirea blocajelor și atingerea obiectivelor",
    ],
    note: "Un prim pas poate fi mai simplu când știi la ce să te aștepți.",
    imageSrc: "/home-page/programe.jpg",
    imageAlt: "Spațiu terapeutic pregătit pentru lucru ghidat",
    imageTitle: "Programe ghidate",
    imageSubtitle: "Un format clar pentru teme emoționale specifice.",
    cta: {
      label: "Vezi programele",
      href: "/evenimente",
    },
  },
];
