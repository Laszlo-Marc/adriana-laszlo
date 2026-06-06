export type EventStoryChapter = {
  eyebrow: string;
  title: string;
  description: string;
  body: string;
  image: string;
  imageAlt: string;
};
export type EventDetail = {
  slug: string;
  title: string;
  summary: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  gallery: {
    src: string;
    alt: string;
  }[];

  storyChapters: EventStoryChapter[];

  quickInfo: {
    date: string;
    time: string;
    duration: string;
    location: string;
    format: string;
    cost: string;
    groupSize: string;
  };

  signup: {
    title: string;
    description: string;
    note: string;
    imageSrc?: string;
    imageAlt?: string;
    mapEmbedUrl: string;
    mapLink: string;
  };

  faq: {
    question: string;
    answer: string;
  }[];
};
export const eventDetails: EventDetail[] = [
  {
    slug: "grup-af-emdr-anxietate-stres-perfectionism",
    title: "Anxietate & Perfecționism",
    summary:
      "Un program ghidat pentru persoane care simt că sistemul lor nervos rămâne în alertă, chiar și atunci când la exterior lucrurile par sub control.",
    eyebrow: "Program de grup · AF-EMDR",
    image: "/events/events-hero.jpg",
    imageAlt: "Spațiu de terapie de grup cu scaune așezate în cerc",
    storyChapters: [
      {
        eyebrow: "01 — Tema programului",
        title: "Când corpul rămâne în alertă.",
        description:
          "Pentru momentele în care anxietatea, autocritica și presiunea de a face totul perfect nu mai sunt doar gânduri, ci devin o stare constantă în corp.",
        body: "Acest program este construit pentru persoane care trăiesc cu neliniște persistentă, tensiune interioară și nevoia de a face totul perfect. Într-un ritm atent, vei explora felul în care stresul și perfecționismul se fixează în corp, cum îți afectează relația cu tine și ce resurse pot sprijini reglarea emoțională și recăpătarea unui sentiment de siguranță interioară.",
        image: "/events/grup-emdr/story/story1.jpg",
        imageAlt: "Cadru calm pentru program terapeutic de grup",
      },
      {
        eyebrow: "02 — Pentru cine",
        title: "Pentru cei care funcționează, dar sunt epuizati.",
        description:
          "Programul este potrivit pentru persoane care par să țină lucrurile sub control, dar trăiesc cu frică de greșeală, suprasolicitare, standarde rigide sau nevoia permanentă de a performa.",
        body: "Poate fi potrivit pentru tine dacă îți este greu să te relaxezi, chiar și atunci când nu există o urgență reală. Dacă odihna vine cu vinovăție, dacă vocea interioară devine severă în fața greșelii sau dacă simți că trebuie să controlezi totul pentru a fi în siguranță, acest cadru te poate ajuta să înțelegi mai clar ce se întâmplă și cum poți lucra cu aceste tipare.",
        image: "/events/grup-emdr/story/story2.jpg",
        imageAlt: "Participanți într-un spațiu de lucru terapeutic",
      },
      {
        eyebrow: "03 — Ce vei lucra",
        title: "Reglare, resurse și procesare ghidată.",
        description:
          "Întâlnirile combină reglaj emoțional și somatic, resurse de stabilizare și lucru AF-EMDR cu tipare de stres, autocritică și perfecționism.",
        body: "Programul include exerciții pentru calmarea corpului, reducerea tensiunii și reconectarea cu sentimentul de siguranță. Vei lucra cu resurse pozitive interioare, precum sprijinul, competența, stabilitatea și auto-susținerea, iar procesarea AF-EMDR va fi orientată către stresori cotidieni, autocritică, frică de eșec și presiune internă.",
        image: "/events/grup-emdr/story/story3.jpeg",
        imageAlt: "Exercițiu ghidat într-un program terapeutic de grup",
      },
      {
        eyebrow: "04 — Cum se desfășoară",
        title: "Un cadru restrâns, blând și structurat.",
        description:
          "Programul are un ritm clar, cu întâlniri ghidate, exerciții practice și spațiu de integrare. Nu presupune expunere forțată sau împărtășire peste limita ta.",
        body: "Fiecare întâlnire are o temă clară și un ritm atent, astfel încât procesul să fie ușor de urmărit. Cadrul este restrâns, respectuos și confidențial, construit în jurul siguranței participanților. Poți participa fără presiunea de a spune mai mult decât simți că este potrivit, iar accentul rămâne pe stabilizare, resurse și integrare.",
        image: "/events/grup-emdr/story/story4.jpg",
        imageAlt: "Spațiu de terapie de grup cu scaune în cerc",
      },
      {
        eyebrow: "05 — Cu ce pleci",
        title: "Mai multă claritate, siguranță și opțiuni interioare.",
        description:
          "Scopul nu este să devii perfect calm/ă, ci să ai mai multe resurse atunci când apar presiunea, anxietatea sau frica de greșeală.",
        body: "La finalul programului, vei avea mai multă claritate despre felul în care anxietatea, perfecționismul și presiunea internă se manifestă în viața ta. Vei pleca cu exerciții și repere de reglare, cu o relație mai blândă față de tine în momentele dificile și cu pași concreți pentru a continua procesul într-un ritm realist.",
        image: "/events/grup-emdr/story/story5.jpg",
        imageAlt: "Ambient calm pentru reflecție și integrare",
      },
    ],
    gallery: [
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

    quickInfo: {
      date: "Dată anunțată în curând",
      time: "Ora va fi comunicată participanților",
      duration: "4 întâlniri · 2 ore / întâlnire",
      location: "Strada Artelor nr. 35, Trauma Center, Cluj-Napoca",
      format: "Grup restrâns, ghidat terapeutic",
      cost: "Costul va fi comunicat înainte de confirmare",
      groupSize: "Locuri limitate",
    },

    signup: {
      title: "Vrei să afli dacă programul ți se potrivește?",
      description:
        "Completează formularul, iar următorul pas este o discuție scurtă pentru a clarifica dacă acest cadru este potrivit pentru ce ai nevoie acum.",
      note: "Trimiterea formularului nu confirmă automat participarea. Înscrierea este confirmată doar după clarificarea potrivirii cu programul.",
      imageSrc: "/events/events-hero.jpg",
      imageAlt: "Spațiu de terapie calm și luminos",
      mapEmbedUrl:
        "https://www.google.com/maps?q=Strada+Artelor+35,+Cluj-Napoca&output=embed",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Strada+Artelor+35,+Cluj-Napoca",
    },

    faq: [
      {
        question: "Trebuie să vorbesc în grup?",
        answer:
          "Nu. Participarea se face în ritmul tău. Poți împărtăși doar atât cât simți că este potrivit pentru tine.",
      },
      {
        question: "Este confidențial?",
        answer:
          "Da. Confidențialitatea este o condiție de bază pentru participare, iar grupul are reguli clare pentru siguranță și respect.",
      },
      {
        question: "Pot participa dacă sunt deja în terapie individuală?",
        answer:
          "Da, în multe cazuri terapia individuală și un program de grup se pot completa. Este important doar să clarificăm dacă momentul și formatul sunt potrivite pentru tine.",
      },
      {
        question: "Ce se întâmplă după ce trimit formularul?",
        answer:
          "Vei fi contactat/ă pentru o scurtă clarificare. Trimiterea formularului reprezintă exprimarea interesului, nu confirmarea automată a locului.",
      },
    ],
  },
];
