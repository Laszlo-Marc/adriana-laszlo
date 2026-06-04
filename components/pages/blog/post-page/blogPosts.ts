export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type BlogPostCard = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  readingTime?: string;
};

export type BlogPost = BlogPostCard & {
  slug: string;
  summary: string;
  author: string;
  publishedAt: string;
  readTime: string;
  content: BlogContentBlock[];
};

export function toBlogPostCard(post: BlogPost): BlogPostCard {
  return {
    id: post.slug,
    title: post.title,
    excerpt: post.summary,
    href: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    category: post.category,
    readingTime: post.readTime,
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "cum-functioneaza-terapia-emdr",
    slug: "cum-functioneaza-terapia-emdr",
    href: "/blog/cum-functioneaza-terapia-emdr",
    title: "Cum funcționează terapia EMDR",
    excerpt:
      "Terapia EMDR ajută la reprocesarea traumelor emoționale prin stimulare bilaterală, susținând capacitatea naturală a creierului de a integra experiențele dureroase.",
    summary:
      "O explicație clară despre cum funcționează terapia EMDR, ce înseamnă reprocesarea traumei și de ce stimularea bilaterală poate susține vindecarea emoțională.",
    author: "Psih. Adriana Laszlo",
    category: "AF-EMDR",
    publishedAt: "2025-07-31",
    readTime: "7 min",
    readingTime: "7 min",
    image: "/blogs/posts/stimulare-bi.jpg",
    imageAlt: "Spațiu calm de terapie pentru procesarea traumelor",
    content: [
      {
        type: "paragraph",
        text: "Terapia EMDR este o metodă modernă folosită în lucrul cu trauma, blocajele emoționale și simptomele asociate experiențelor dureroase. Prin stimulare bilaterală, creierul este sprijinit să reactiveze mecanismele naturale de procesare și integrare.",
      },
      {
        type: "heading",
        text: "Ce este terapia EMDR",
      },
      {
        type: "paragraph",
        text: "EMDR vine de la Eye Movement Desensitization and Reprocessing și este o abordare recunoscută internațional pentru tratarea traumelor emoționale și a simptomelor de PTSD. Spre deosebire de terapiile bazate doar pe discuție, EMDR lucrează cu felul în care amintirile dureroase sunt stocate în minte și corp.",
      },
      {
        type: "heading",
        text: "Ce înseamnă reprocesarea traumei",
      },
      {
        type: "paragraph",
        text: "Trauma nu rămâne doar ca o amintire obișnuită. Uneori, ea este stocată fragmentat și continuă să producă reacții emoționale, fizice sau cognitive în prezent. Reprocesarea înseamnă integrarea acestor experiențe astfel încât ele să nu mai provoace aceeași intensitate emoțională.",
      },
      {
        type: "list",
        items: [
          "emoții copleșitoare care apar brusc",
          "senzații fizice asociate stresului sau fricii",
          "credințe negative despre sine, siguranță sau relații",
          "reacții automate precum rușine, vinovăție sau teamă",
        ],
      },
      {
        type: "heading",
        text: "Cum se desfășoară procesul EMDR",
      },
      {
        type: "paragraph",
        text: "Procesul pornește de la simptomul prezent, apoi conectează dificultatea actuală cu experiențe mai vechi care au rămas neprocesate. Stimularea bilaterală ajută creierul să acceseze și să integreze informația într-un mod mai sănătos.",
      },
      {
        type: "list",
        items: [
          "identificarea simptomului care afectează prezentul",
          "conectarea simptomului cu experiențe din trecut",
          "folosirea stimulării bilaterale într-un cadru sigur",
          "reprocesarea imaginilor, emoțiilor și senzațiilor",
          "integrarea experienței cu o încărcătură emoțională redusă",
        ],
      },
      {
        type: "heading",
        text: "Ce este stimularea bilaterală",
      },
      {
        type: "paragraph",
        text: "Stimularea bilaterală poate include mișcări oculare, sunete alternante sau tapping. Ea nu este o tehnică izolată, ci face parte dintr-un proces terapeutic ghidat, în care siguranța și ritmul clientului sunt esențiale.",
      },
      {
        type: "quote",
        text: "EMDR nu doar calmează simptomele, ci susține procesarea rădăcinii emoționale care le menține active.",
      },
      {
        type: "heading",
        text: "Beneficiile terapiei EMDR",
      },
      {
        type: "list",
        items: [
          "reducerea impactului emoțional al amintirilor dureroase",
          "susținerea reglării emoționale",
          "diminuarea simptomelor asociate traumei și anxietății",
          "reconectarea dintre minte, corp și emoții",
          "întărirea sentimentului de siguranță interioară",
        ],
      },
    ],
  },
  {
    id: "stilurile-de-atasament-si-trauma",
    slug: "stilurile-de-atasament-si-trauma",
    href: "/blog/stilurile-de-atasament-si-trauma",
    title: "Stilurile de atașament și trauma",
    excerpt:
      "Modul în care iubim și primim iubirea pornește din copilărie. Înțelegerea tiparelor de atașament poate clarifica felul în care ne raportăm la relații.",
    summary:
      "Un articol despre felul în care experiențele timpurii modelează atașamentul, intimitatea și felul în care construim relații la vârsta adultă.",
    author: "Psih. Adriana Laszlo",
    category: "Relații",
    publishedAt: "2025-07-31",
    readTime: "6 min",
    readingTime: "6 min",
    image: "/blogs/posts/stiluri-atasament.jpg",
    imageAlt:
      "Leagăne goale într-un parc, simbol al copilăriei și atașamentului",
    content: [
      {
        type: "paragraph",
        text: "Felul în care am fost iubiți în copilărie influențează profund modul în care iubim, cerem sprijin și ne simțim în siguranță în relațiile adulte.",
      },
      {
        type: "heading",
        text: "Ce sunt stilurile de atașament",
      },
      {
        type: "paragraph",
        text: "Stilurile de atașament sunt tipare relaționale formate în copilărie, în contact cu părinții sau persoanele care ne-au îngrijit. Ele devin repere interne despre apropiere, siguranță, încredere și vulnerabilitate.",
      },
      {
        type: "heading",
        text: "Cum se formează tiparele de atașament",
      },
      {
        type: "paragraph",
        text: "Experiențele pozitive, dar și lipsurile emoționale, critica, neglijarea sau presiunea constantă de a performa pot influența felul în care copilul învață să se raporteze la ceilalți.",
      },
      {
        type: "list",
        items: [
          "lipsa afecțiunii poate duce la nesiguranță emoțională",
          "critica repetată poate afecta stima de sine",
          "neglijarea sau abuzul pot crea frică de apropiere",
          "presiunea de a fi perfect poate alimenta anxietatea și autocritica",
        ],
      },
      {
        type: "heading",
        text: "Tipuri de atașament",
      },
      {
        type: "paragraph",
        text: "Atașamentul anxios apare adesea în contexte de disponibilitate emoțională inconsistentă. Persoana poate căuta reasigurare constantă și poate avea o teamă puternică de respingere.",
      },
      {
        type: "paragraph",
        text: "Atașamentul evitant apare când apropierea emoțională nu a fost suficient de sigură. Persoana poate învăța să se bazeze doar pe sine și să evite vulnerabilitatea.",
      },
      {
        type: "paragraph",
        text: "Atașamentul dezorganizat combină dorința de apropiere cu frica de a fi rănit. Acest conflict interior poate duce la relații instabile și reacții contradictorii.",
      },
      {
        type: "heading",
        text: "Impactul asupra vieții adulte",
      },
      {
        type: "list",
        items: [
          "relații instabile sau conflicte repetate",
          "dificultăți de intimitate și vulnerabilitate",
          "teamă de respingere sau abandon",
          "repetarea unor tipare relaționale vechi",
        ],
      },
      {
        type: "quote",
        text: "Terapia poate transforma rănile de atașament în relații mai sigure, mai conștiente și mai autentice.",
      },
    ],
  },
  {
    id: "traumele-nevindecate-si-relatia-de-cuplu",
    slug: "traumele-nevindecate-si-relatia-de-cuplu",
    href: "/blog/traumele-nevindecate-si-relatia-de-cuplu",
    title: "Moduri în care traumele nevindecate pot afecta relația de cuplu",
    excerpt:
      "Rănile din trecut pot reveni în relațiile de cuplu prin neîncredere, dificultăți de comunicare, frică de apropiere sau reacții emoționale intense.",
    summary:
      "O privire clară asupra felului în care trauma nevindecată poate influența încrederea, comunicarea, intimitatea și siguranța emoțională în cuplu.",
    author: "Psih. Adriana Laszlo",
    category: "Relații",
    publishedAt: "2025-07-31",
    readTime: "5 min",
    readingTime: "5 min",
    image: "/blogs/posts/trauma-relatii.jpg",
    imageAlt: "Cuplu aflat într-un moment de distanță emoțională",
    content: [
      {
        type: "paragraph",
        text: "Rănile emoționale din trecut pot modela felul în care iubim, comunicăm și ne simțim în siguranță lângă celălalt. Atunci când trauma nu este procesată, ea poate apărea în relația de cuplu sub forme subtile sau evidente.",
      },
      {
        type: "heading",
        text: "Cum influențează trauma modul de a iubi",
      },
      {
        type: "paragraph",
        text: "Felul în care am primit iubire în copilărie influențează ceea ce căutăm într-o relație, cum ne manifestăm afecțiunea și ce tipare repetăm. Relația de cuplu poate reactiva răni mai vechi legate de abandon, respingere, neîncredere sau lipsă de siguranță.",
      },
      {
        type: "heading",
        text: "Arii afectate în relația de cuplu",
      },
      {
        type: "list",
        items: [
          "încrederea poate fi afectată de convingerea că lumea sau celălalt nu este sigur",
          "comunicarea poate deveni dificilă atunci când există frică de respingere",
          "intimitatea poate fi blocată de teama de apropiere sau vulnerabilitate",
          "reglarea emoțională poate deveni dificilă în conflicte",
          "relația poate repeta inconștient tipare traumatice mai vechi",
        ],
      },
      {
        type: "heading",
        text: "Cum poate fi transformată trauma",
      },
      {
        type: "paragraph",
        text: "Trauma nevindecată nu trebuie să definească relația. Prin conștientizare, terapie și un cadru sigur, tiparele vechi pot fi înțelese și transformate în oportunități de maturizare, apropiere și iubire mai autentică.",
      },
      {
        type: "quote",
        text: "O relație mai sigură începe atunci când trecutul nu mai conduce reacțiile din prezent.",
      },
    ],
  },
  {
    id: "terapie-individuala-vs-terapie-de-grup",
    slug: "terapie-individuala-vs-terapie-de-grup",
    href: "/blog/terapie-individuala-vs-terapie-de-grup",
    title: "Terapie individuală vs terapie de grup",
    excerpt:
      "Terapia individuală oferă profunzime și confidențialitate, iar terapia de grup aduce sprijin, apartenență și învățare prin experiența celorlalți.",
    summary:
      "Un ghid simplu despre diferențele dintre terapia individuală și terapia de grup, pentru a înțelege ce tip de sprijin se potrivește mai bine nevoilor tale.",
    author: "Psih. Adriana Laszlo",
    category: "Psihoterapie",
    publishedAt: "2024-11-12",
    readTime: "5 min",
    readingTime: "5 min",
    image: "/blogs/posts/grup.jpg",
    imageAlt: "Spațiu de terapie pregătit pentru conversație și sprijin",
    content: [
      {
        type: "paragraph",
        text: "Psihoterapia poate susține vindecarea, claritatea emoțională și dezvoltarea personală. Alegerea între terapie individuală și terapie de grup depinde de nevoile tale, de obiectivele personale și de etapa în care te afli.",
      },
      {
        type: "heading",
        text: "Terapia individuală",
      },
      {
        type: "paragraph",
        text: "Terapia individuală presupune întâlniri unu-la-unu cu terapeutul, într-un spațiu sigur și confidențial. Este potrivită atunci când ai nevoie de profunzime, ritm personal și atenție concentrată asupra experienței tale.",
      },
      {
        type: "list",
        items: [
          "confidențialitate și atenție exclusivă",
          "lucru adaptat nevoilor tale",
          "spațiu sigur pentru explorarea traumelor",
          "flexibilitate în proces și programare",
        ],
      },
      {
        type: "heading",
        text: "Terapia de grup",
      },
      {
        type: "paragraph",
        text: "Terapia de grup aduce împreună persoane cu experiențe similare. Participanții pot descoperi că nu sunt singuri, pot învăța din experiențele celorlalți și pot exersa noi forme de relaționare.",
      },
      {
        type: "list",
        items: [
          "sprijin și sentiment de apartenență",
          "învățare prin experiența celorlalți",
          "dezvoltarea empatiei și a abilităților sociale",
          "creșterea încrederii în sine într-un cadru ghidat",
        ],
      },
      {
        type: "heading",
        text: "Ce alegi?",
      },
      {
        type: "paragraph",
        text: "Terapia individuală poate fi mai potrivită pentru lucrul profund cu traume personale, iar terapia de grup poate susține conectarea, apartenența și exersarea relațiilor. Uneori, cele două forme pot fi combinate.",
      },
      {
        type: "quote",
        text: "Forma potrivită de terapie este cea care răspunde cel mai bine nevoilor tale actuale.",
      },
    ],
  },
  {
    id: "ganduri-intruzive-un-simptom-al-traumei",
    slug: "ganduri-intruzive-un-simptom-al-traumei",
    href: "/blog/ganduri-intruzive-un-simptom-al-traumei",
    title: "Gânduri intruzive – un simptom al traumei",
    excerpt:
      "Gândurile intruzive pot fi un semnal al traumelor nerezolvate. Ele nu definesc cine ești, ci pot indica un psihic care încearcă să proceseze ceva dificil.",
    summary:
      "Un articol despre legătura dintre traumă și gândurile intruzive, de ce apar și cum poate procesul terapeutic să ajute la integrarea lor.",
    author: "Psih. Adriana Laszlo",
    category: "Traumă",
    publishedAt: "2024-09-27",
    readTime: "6 min",
    readingTime: "6 min",
    image: "/blogs/posts/intruzive.jpg",
    imageAlt: "Persoană într-un moment de neliniște și reflecție",
    content: [
      {
        type: "paragraph",
        text: "Gândurile intruzive pot apărea brusc, fără să fie dorite, și pot provoca frică, neliniște sau vinovăție. În multe situații, ele pot fi înțelese ca semnale ale unor experiențe dureroase care nu au fost încă procesate.",
      },
      {
        type: "heading",
        text: "Ce sunt gândurile intruzive",
      },
      {
        type: "paragraph",
        text: "Gândurile intruzive sunt imagini, idei sau senzații care apar în minte fără control voluntar. Nu sunt simple griji și nu înseamnă că persoana este defectă. Ele pot fi expresia unui psihic care încearcă să repare sau să integreze ceva dificil.",
      },
      {
        type: "list",
        items: [
          "pot fi repetitive și greu de oprit",
          "pot fi încărcate de anxietate sau frică",
          "pot avea legătură cu experiențe dureroase din trecut",
          "pot întări sentimentul de vinovăție sau neputință",
        ],
      },
      {
        type: "heading",
        text: "Legătura cu trauma",
      },
      {
        type: "paragraph",
        text: "Trauma poate lăsa urme în felul în care creierul procesează experiențele. Atunci când ceva rămâne nerezolvat, fragmente din trecut pot reveni sub forma unor gânduri, imagini sau reacții care par greu de controlat.",
      },
      {
        type: "heading",
        text: "Gândurile intruzive și depresia",
      },
      {
        type: "paragraph",
        text: "Gândurile intruzive și starea depresivă se pot alimenta reciproc. Când apar frecvent, ele pot întări senzația că nu există ieșire. Înțelegerea originii lor poate reduce rușinea și poate deschide drumul spre vindecare.",
      },
      {
        type: "heading",
        text: "Abordări terapeutice utile",
      },
      {
        type: "list",
        items: [
          "terapia EMDR pentru reprocesarea amintirilor traumatice",
          "tehnici cognitive și comportamentale pentru restructurarea gândurilor automate",
          "mindfulness și exerciții de prezență pentru observarea gândurilor fără identificare totală cu ele",
          "proces terapeutic într-un cadru sigur și susținut",
        ],
      },
      {
        type: "quote",
        text: "Gândurile intruzive nu definesc cine ești. Ele pot fi ecoul unor experiențe care cer atenție, înțelegere și integrare.",
      },
    ],
  },
];

export const featuredBlogPosts: BlogPostCard[] = blogPosts.map(toBlogPostCard);
