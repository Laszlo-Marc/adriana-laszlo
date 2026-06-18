import type { LegalSection } from "@/components/legal/LegalPage";

export const legalUpdatedAt = "18 iunie 2026";

const controllerDetails = [
  {
    label: "Operator",
    value: "Adriana Laszlo, Cabinet de Psihoterapie Individuală Adriana Laszlo",
  },
  {
    label: "Adresă profesională",
    value: "Strada Artelor nr. 35, Cluj-Napoca, România",
  },
  {
    label: "Email",
    value: "adrianalaszlo@gmail.com",
  },
];

export const privacySections: LegalSection[] = [
  {
    title: "1. Operatorul de date",
    blocks: [
      {
        type: "paragraph",
        text: "Această Politică de confidențialitate explică modul în care sunt colectate, utilizate și protejate datele personale ale persoanelor care vizitează website-ul sau care folosesc formularele disponibile pe site.",
      },
      {
        type: "paragraph",
        text: "Website-ul aparține Cabinetului de psihoterapie individual Adriana Laszlo.",
      },
      {
        type: "table",
        rows: controllerDetails,
      },
      {
        type: "paragraph",
        text: "Pentru orice întrebări legate de prelucrarea datelor personale, poți contacta operatorul la adresa de email de mai sus.",
      },
    ],
  },
  {
    title: "2. Ce date personale pot fi colectate",
    blocks: [
      {
        type: "paragraph",
        text: "Prin intermediul website-ului pot fi colectate mai multe categorii de date, în funcție de modul în care interacționezi cu site-ul.",
      },
      {
        type: "list",
        items: [
          "Date transmise prin formularul de contact: nume, adresă de email, număr de telefon, mesajul transmis, opțiunea privind abonarea la comunicări prin email și date tehnice necesare pentru securitate și prevenirea spamului.",
          "Date transmise prin formularele de înscriere la evenimente: nume, adresă de email, număr de telefon, evenimentul pentru care se face înscrierea, mesajul sau detaliile transmise voluntar, consimțământul pentru comunicări viitoare și date tehnice anti-spam.",
          "Date transmise prin formularele pentru descărcarea resurselor: nume, adresă de email, resursa solicitată, consimțământul pentru primirea resursei, consimțământul pentru newsletter, dacă este acordat, și date tehnice anti-spam.",
          "Date transmise prin formularul de newsletter: prenume, adresă de email, sursa abonării și consimțământul pentru primirea comunicărilor prin email.",
          "Date tehnice și de utilizare: adresa IP sau date tehnice similare, tipul browserului și al dispozitivului, paginile vizitate, interacțiuni cu site-ul, informații agregate despre performanță și utilizare, precum și date privind consimțământul pentru cookies.",
        ],
      },
    ],
  },
  {
    title: "3. Date sensibile",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul aparține unui cabinet de psihoterapie. Din acest motiv, unele persoane pot alege să transmită voluntar informații despre starea lor emoțională, experiențe personale, dificultăți psihologice sau alte aspecte sensibile.",
      },
      {
        type: "paragraph",
        text: "Te rugăm să nu transmiți prin formularele de pe site informații medicale detaliate, diagnostice, documente medicale sau informații foarte sensibile. Formularele de pe site sunt destinate contactului inițial, înscrierii la evenimente, solicitării de resurse sau abonării la comunicări informative.",
      },
      {
        type: "paragraph",
        text: "Discuțiile terapeutice, evaluările clinice și informațiile detaliate privind situația personală se abordează în cadrul unui context profesional adecvat, nu prin formularele generale ale website-ului.",
      },
    ],
  },
  {
    title: "4. Scopurile prelucrării datelor",
    blocks: [
      {
        type: "list",
        items: [
          "răspuns la solicitările trimise prin formularul de contact;",
          "programarea sau discutarea unei posibile colaborări terapeutice;",
          "gestionarea înscrierilor la evenimente, workshopuri sau programe;",
          "trimiterea resurselor solicitate;",
          "trimiterea de newslettere, anunțuri, resurse sau materiale informative, doar dacă există consimțământ;",
          "prevenirea spamului, abuzului și utilizării automate a formularelor;",
          "asigurarea funcționării tehnice a website-ului;",
          "analizarea traficului și îmbunătățirea experienței pe website, acolo unde există consimțământ pentru cookies analitice;",
          "respectarea obligațiilor legale aplicabile.",
        ],
      },
    ],
  },
  {
    title: "5. Temeiul legal al prelucrării",
    blocks: [
      {
        type: "list",
        items: [
          "consimțământul persoanei vizate, pentru newsletter, cookies opționale, comunicări de marketing sau resurse trimise prin email;",
          "demersuri precontractuale, atunci când o persoană contactează cabinetul pentru o posibilă colaborare, programare sau participare la un eveniment;",
          "interes legitim, pentru securitatea website-ului, prevenirea spamului, protejarea formularelor și gestionarea comunicărilor primite;",
          "obligații legale, acolo unde păstrarea sau transmiterea anumitor date este necesară conform legii.",
        ],
      },
    ],
  },
  {
    title: "6. Instrumente și furnizori utilizați",
    blocks: [
      {
        type: "paragraph",
        text: "Pentru funcționarea website-ului și a serviciilor asociate pot fi utilizați următorii furnizori:",
      },
      {
        type: "list",
        items: [
          "Sanity – gestionarea conținutului website-ului;",
          "Vercel – găzduirea website-ului și servicii de infrastructură;",
          "Resend – trimiterea emailurilor generate de formulare;",
          "Mailchimp – gestionarea listelor de newsletter și trimiterea comunicărilor prin email;",
          "Cloudflare Turnstile – protecție anti-spam și verificare că formularele nu sunt folosite automat;",
          "Google Analytics – analiză de trafic, doar în condițiile setărilor de consimțământ;",
          "Vercel Analytics – analiză tehnică și de performanță;",
          "Google Tag Manager – gestionarea scripturilor și etichetelor de tracking, acolo unde sunt activate;",
          "Google Maps – afișarea hărții sau a locației cabinetului;",
          "WhatsApp – comunicare prin link extern către aplicația WhatsApp;",
          "Instagram – afișarea sau accesarea conținutului public de pe Instagram.",
        ],
      },
      {
        type: "paragraph",
        text: "Acești furnizori pot prelucra date conform propriilor politici de confidențialitate și condiții de utilizare.",
      },
    ],
  },
  {
    title: "7. Transferuri în afara Uniunii Europene",
    blocks: [
      {
        type: "paragraph",
        text: "Unii furnizori utilizați pot procesa sau stoca date în afara Uniunii Europene sau Spațiului Economic European. În astfel de cazuri, furnizorii declară utilizarea unor mecanisme juridice adecvate pentru protejarea datelor, cum ar fi clauze contractuale standard, măsuri suplimentare de securitate sau alte garanții prevăzute de legislația aplicabilă.",
      },
    ],
  },
  {
    title: "8. Durata păstrării datelor",
    blocks: [
      {
        type: "paragraph",
        text: "Datele personale sunt păstrate doar atât timp cât este necesar pentru scopurile pentru care au fost colectate.",
      },
      {
        type: "table",
        rows: [
          {
            label: "Mesaje contact",
            value: "până la 12 luni",
          },
          {
            label: "Înscrieri evenimente",
            value: "până la 12 luni după finalizarea evenimentului",
          },
          {
            label: "Resurse descărcate",
            value:
              "până la retragerea consimțământului sau până la 24 de luni de inactivitate",
          },
          {
            label: "Newsletter",
            value: "până la dezabonare sau retragerea consimțământului",
          },
          {
            label: "Date tehnice de securitate",
            value:
              "între 30 și 90 de zile, cu excepția cazurilor în care este necesară o perioadă mai lungă pentru investigarea unor incidente",
          },
          {
            label: "Dovezi consimțământ",
            value:
              "pe durata necesară pentru demonstrarea respectării obligațiilor legale",
          },
        ],
      },
    ],
  },
  {
    title: "9. Newsletter și comunicări prin email",
    blocks: [
      {
        type: "paragraph",
        text: "Abonarea la newsletter sau la alte comunicări prin email este voluntară.",
      },
      {
        type: "list",
        items: [
          "articole și resurse informative;",
          "anunțuri despre evenimente;",
          "materiale gratuite;",
          "informații relevante despre activitatea cabinetului.",
        ],
      },
      {
        type: "paragraph",
        text: "Te poți dezabona oricând folosind linkul de dezabonare inclus în emailuri sau scriind la adresa adrianalaszlo@gmail.com.",
      },
      {
        type: "paragraph",
        text: "Retragerea consimțământului nu afectează legalitatea prelucrărilor realizate înainte de retragere.",
      },
    ],
  },
  {
    title: "10. Cookies și tehnologii similare",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul poate utiliza cookies și tehnologii similare pentru funcționare, analiză, securitate și integrarea unor servicii externe.",
      },
      {
        type: "paragraph",
        text: "Cookies strict necesare pot fi utilizate fără consimțământ, deoarece sunt necesare pentru funcționarea website-ului.",
      },
      {
        type: "paragraph",
        text: "Cookies analitice, de marketing sau ale unor servicii externe sunt folosite doar în funcție de consimțământul acordat prin bannerul de cookies sau prin setările de cookies.",
      },
    ],
  },
  {
    title: "11. Securitatea datelor",
    blocks: [
      {
        type: "paragraph",
        text: "Sunt folosite măsuri tehnice și organizaționale rezonabile pentru protejarea datelor personale împotriva accesului neautorizat, pierderii, modificării sau divulgării neautorizate.",
      },
      {
        type: "paragraph",
        text: "Totuși, transmiterea datelor prin internet nu poate fi garantată ca fiind complet sigură. De aceea, te rugăm să nu transmiți prin formularele website-ului informații foarte sensibile, documente medicale sau detalii care ar trebui discutate doar într-un cadru profesional confidențial.",
      },
    ],
  },
  {
    title: "12. Drepturile tale",
    blocks: [
      {
        type: "list",
        items: [
          "dreptul de acces la date;",
          "dreptul la rectificarea datelor incorecte;",
          "dreptul la ștergerea datelor;",
          "dreptul la restricționarea prelucrării;",
          "dreptul la portabilitatea datelor;",
          "dreptul de opoziție;",
          "dreptul de a retrage consimțământul;",
          "dreptul de a depune o plângere la autoritatea competentă.",
        ],
      },
      {
        type: "paragraph",
        text: "Pentru exercitarea acestor drepturi, poți trimite o solicitare la adresa: adrianalaszlo@gmail.com.",
      },
    ],
  },
  {
    title: "13. Autoritatea de supraveghere",
    blocks: [
      {
        type: "paragraph",
        text: "Dacă apreciezi că drepturile tale privind protecția datelor au fost încălcate, poți contacta Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal.",
      },
      {
        type: "paragraph",
        text: "Website: www.dataprotection.ro",
      },
    ],
  },
  {
    title: "14. Modificări ale politicii",
    blocks: [
      {
        type: "paragraph",
        text: "Această Politică de confidențialitate poate fi actualizată periodic. Versiunea actualizată va fi publicată pe această pagină, împreună cu data ultimei actualizări.",
      },
    ],
  },
];

export const cookieSections: LegalSection[] = [
  {
    title: "1. Ce sunt cookies",
    blocks: [
      {
        type: "paragraph",
        text: "Cookies sunt fișiere mici stocate pe dispozitivul tău atunci când vizitezi un website. Acestea pot ajuta website-ul să funcționeze corect, să rețină anumite preferințe, să măsoare traficul sau să permită integrarea unor servicii externe.",
      },
      {
        type: "list",
        items: [
          "cookies de sesiune, care se șterg la închiderea browserului;",
          "cookies persistente, care rămân pe dispozitiv pentru o anumită perioadă;",
          "cookies proprii, setate de website;",
          "cookies terțe, setate de servicii externe integrate în website.",
        ],
      },
    ],
  },
  {
    title: "2. Tipuri de cookies utilizate",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul poate utiliza cookies strict necesare, cookies analitice, cookies pentru servicii externe și, doar dacă sunt activate ulterior, cookies de marketing.",
      },
      {
        type: "list",
        items: [
          "Cookies strict necesare: necesare pentru afișarea corectă a website-ului, securitate, protecție anti-spam, memorarea preferințelor privind consimțământul și funcționarea formularelor.",
          "Cookies analitice: ajută la înțelegerea modului în care este folosit website-ul, ce pagini sunt vizitate și cum poate fi îmbunătățită experiența utilizatorilor.",
          "Cookies pentru servicii externe: pot apărea prin servicii precum Google Maps, Instagram, WhatsApp sau Cloudflare Turnstile.",
          "Cookies de marketing: website-ul nu folosește în mod intenționat cookies de marketing comportamental, cu excepția cazului în care acestea sunt activate ulterior prin servicii precum Google Tag Manager sau alte instrumente similare.",
        ],
      },
    ],
  },
  {
    title: "3. Instrumente care pot folosi cookies sau tehnologii similare",
    blocks: [
      {
        type: "list",
        items: [
          "Sanity – gestionarea conținutului;",
          "Vercel – găzduire și infrastructură;",
          "Resend – trimiterea emailurilor generate de formulare;",
          "Mailchimp – newsletter și comunicări prin email;",
          "Cloudflare Turnstile – protecție anti-spam;",
          "Google Analytics – analiză de trafic;",
          "Vercel Analytics – analiză tehnică și de performanță;",
          "Google Tag Manager – gestionarea scripturilor și etichetelor;",
          "Google Maps – afișarea locației;",
          "WhatsApp – link extern către conversație;",
          "Instagram – conținut social integrat sau linkuri externe.",
        ],
      },
    ],
  },
  {
    title: "4. Consimțământul pentru cookies",
    blocks: [
      {
        type: "paragraph",
        text: "La prima vizită pe website, poți alege ce categorii de cookies accepți.",
      },
      {
        type: "list",
        items: [
          "acceptarea tuturor cookies;",
          "respingerea cookies opționale;",
          "personalizarea preferințelor.",
        ],
      },
      {
        type: "paragraph",
        text: "Cookies strict necesare sunt active întotdeauna, deoarece sunt necesare pentru funcționarea website-ului.",
      },
      {
        type: "paragraph",
        text: "Cookies analitice, de marketing sau ale unor servicii externe care nu sunt strict necesare sunt folosite doar dacă îți exprimi consimțământul, acolo unde consimțământul este necesar.",
      },
    ],
  },
  {
    title: "5. Modificarea sau retragerea consimțământului",
    blocks: [
      {
        type: "paragraph",
        text: "Îți poți modifica oricând opțiunile privind cookies folosind linkul „Setări cookies” disponibil în footerul website-ului.",
      },
      {
        type: "paragraph",
        text: "Retragerea consimțământului nu afectează legalitatea prelucrărilor realizate înainte de retragere.",
      },
    ],
  },
  {
    title: "6. Dezactivarea cookies din browser",
    blocks: [
      {
        type: "paragraph",
        text: "Poți controla sau șterge cookies și din setările browserului folosit.",
      },
      {
        type: "list",
        items: [
          "blocarea cookies;",
          "ștergerea cookies existente;",
          "blocarea cookies terțe;",
          "primirea unei notificări înainte de stocarea cookies.",
        ],
      },
      {
        type: "paragraph",
        text: "Dacă dezactivezi anumite cookies, unele funcționalități ale website-ului pot deveni indisponibile sau pot funcționa incorect.",
      },
    ],
  },
  {
    title: "7. Google Analytics și Google Tag Manager",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul poate folosi Google Analytics și Google Tag Manager pentru analizarea traficului și gestionarea scripturilor.",
      },
      {
        type: "paragraph",
        text: "Aceste instrumente trebuie configurate astfel încât să respecte opțiunile tale de consimțământ. Cookies analitice sau alte tehnologii similare nu ar trebui să fie activate înainte de acordarea consimțământului, dacă acestea nu sunt strict necesare.",
      },
    ],
  },
  {
    title: "8. Google Maps și Instagram",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul poate integra hărți Google Maps sau conținut Instagram.",
      },
      {
        type: "paragraph",
        text: "Atunci când interacționezi cu aceste servicii, furnizorii lor pot colecta date, inclusiv date tehnice despre dispozitiv, browser, adresă IP sau interacțiunea cu serviciul respectiv.",
      },
      {
        type: "paragraph",
        text: "Dacă este posibil, aceste integrări ar trebui încărcate doar după consimțământ sau printr-un mecanism de tip „click pentru activare”.",
      },
    ],
  },
  {
    title: "9. Actualizarea politicii",
    blocks: [
      {
        type: "paragraph",
        text: "Această Politică de cookies poate fi actualizată atunci când se modifică tehnologiile folosite pe website sau cerințele legale aplicabile. Versiunea actualizată va fi publicată pe această pagină.",
      },
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "1. Informații despre titularul website-ului",
    blocks: [
      {
        type: "paragraph",
        text: "Acești Termeni și condiții reglementează utilizarea website-ului, aparținând Cabinetului de psihoterapie individual Adriana Laszlo.",
      },
      {
        type: "table",
        rows: controllerDetails,
      },
    ],
  },
  {
    title: "2. Scopul website-ului",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul are scop informativ și prezintă servicii de psihoterapie, informații despre abordarea profesională, resurse educaționale, articole, evenimente, workshopuri, programe și modalități de contact.",
      },
      {
        type: "paragraph",
        text: "Informațiile publicate pe website nu constituie diagnostic, tratament medical, recomandare medicală, intervenție de urgență sau substitut pentru psihoterapie, psihiatrie ori alte servicii specializate.",
      },
    ],
  },
  {
    title: "3. Nu reprezintă relație terapeutică",
    blocks: [
      {
        type: "paragraph",
        text: "Utilizarea website-ului, citirea articolelor, descărcarea resurselor sau trimiterea unui formular nu creează automat o relație terapeutică între vizitator și Adriana Laszlo.",
      },
      {
        type: "paragraph",
        text: "O relație profesională poate începe doar după o discuție directă, acceptarea colaborării și stabilirea explicită a cadrului terapeutic.",
      },
    ],
  },
  {
    title: "4. Situații de urgență",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul nu este destinat situațiilor de urgență.",
      },
      {
        type: "paragraph",
        text: "Dacă te afli într-o situație de criză, pericol imediat, risc de auto-vătămare, risc de vătămare a altor persoane sau urgență medicală, te rugăm să contactezi imediat serviciile de urgență la 112 sau să te adresezi celei mai apropiate unități medicale.",
      },
      {
        type: "paragraph",
        text: "Formularele de pe website nu sunt monitorizate permanent și nu trebuie folosite pentru situații urgente.",
      },
    ],
  },
  {
    title: "5. Programări și solicitări",
    blocks: [
      {
        type: "paragraph",
        text: "Trimiterea unui mesaj prin formularul de contact nu garantează o programare sau disponibilitatea unui loc.",
      },
      {
        type: "paragraph",
        text: "O programare este considerată confirmată doar după primirea unei confirmări directe prin email, telefon, WhatsApp sau alt canal de comunicare agreat.",
      },
      {
        type: "paragraph",
        text: "Informațiile despre servicii, disponibilitate, durată, tarife sau evenimente pot fi modificate periodic.",
      },
    ],
  },
  {
    title: "6. Evenimente și programe",
    blocks: [
      {
        type: "paragraph",
        text: "Informațiile despre evenimente, workshopuri sau programe sunt publicate cu scop informativ.",
      },
      {
        type: "paragraph",
        text: "Organizatorul își rezervă dreptul de a modifica data, ora, locația, formatul, conținutul sau condițiile de participare, dacă acest lucru este necesar.",
      },
      {
        type: "paragraph",
        text: "Înscrierea la un eveniment poate necesita confirmare separată și, dacă este cazul, achitarea unui cost de participare.",
      },
    ],
  },
  {
    title: "7. Resurse gratuite și materiale educaționale",
    blocks: [
      {
        type: "paragraph",
        text: "Resursele disponibile pe website sunt materiale educaționale și informative.",
      },
      {
        type: "paragraph",
        text: "Acestea nu înlocuiesc psihoterapia, evaluarea profesională, tratamentul medical sau sprijinul specializat.",
      },
      {
        type: "paragraph",
        text: "Folosirea resurselor se face pe propria răspundere, în funcție de contextul personal al fiecărei persoane.",
      },
    ],
  },
  {
    title: "8. Conținutul website-ului",
    blocks: [
      {
        type: "paragraph",
        text: "Conținutul website-ului este oferit cu bună-credință, însă nu se garantează că toate informațiile sunt permanent complete, actualizate sau potrivite pentru fiecare situație individuală.",
      },
      {
        type: "paragraph",
        text: "Se pot face actualizări, corecturi sau modificări ale conținutului fără notificare prealabilă.",
      },
    ],
  },
  {
    title: "9. Proprietate intelectuală",
    blocks: [
      {
        type: "paragraph",
        text: "Textele, structura, designul, imaginile, elementele grafice, resursele și materialele publicate pe website sunt protejate de legislația privind drepturile de autor, cu excepția cazurilor în care este indicat altfel.",
      },
      {
        type: "paragraph",
        text: "Nu este permisă copierea, republicarea, distribuirea sau modificarea materialelor fără acordul scris al titularului, cu excepția utilizărilor permise de lege.",
      },
    ],
  },
  {
    title: "10. Linkuri externe",
    blocks: [
      {
        type: "paragraph",
        text: "Website-ul poate include linkuri către platforme sau servicii externe, precum Google Maps, WhatsApp, Instagram sau alte website-uri relevante.",
      },
      {
        type: "paragraph",
        text: "Titularul website-ului nu controlează conținutul, politicile sau practicile acestor servicii externe și nu poate fi responsabil pentru modul în care acestea funcționează.",
      },
    ],
  },
  {
    title: "11. Limitarea răspunderii",
    blocks: [
      {
        type: "paragraph",
        text: "Utilizarea website-ului se face pe propria răspundere. Titularul website-ului nu răspunde pentru decizii luate exclusiv pe baza informațiilor publicate pe site.",
      },
      {
        type: "paragraph",
        text: "Pentru recomandări adaptate situației personale, este necesară consultarea directă a unui specialist.",
      },
    ],
  },
  {
    title: "12. Protecția datelor",
    blocks: [
      {
        type: "paragraph",
        text: "Prelucrarea datelor personale este descrisă în Politica de confidențialitate și în Politica de cookies, disponibile pe website.",
      },
    ],
  },
  {
    title: "13. Modificarea termenilor",
    blocks: [
      {
        type: "paragraph",
        text: "Acești Termeni și condiții pot fi actualizați periodic. Versiunea actualizată va fi publicată pe această pagină, împreună cu data ultimei actualizări.",
      },
    ],
  },
];
