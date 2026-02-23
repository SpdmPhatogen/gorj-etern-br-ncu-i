import { Calendar, MapPin, Palette, Users, Music, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

const evenimente = [
  {
    categorie: "Expoziții",
    icon: <Palette className="text-gold" size={24} />,
    items: [
      {
        titlu: "«Brâncuși 150 - Esența formei»",
        data: "19 februarie - 30 iunie 2026",
        loc: "Muzeul Județean de Artă, Târgu Jiu",
        desc: "Expoziție retrospectivă cu reproduceri la scară reală ale principalelor opere, fotografii de arhivă, documente inedite și instalații multimedia interactive. Vor fi prezentate și lucrări de tineri sculptori inspirați de Brâncuși.",
      },
      {
        titlu: "«De la Hobița la Paris»",
        data: "Martie - August 2026",
        loc: "Casa Memorială Brâncuși, Hobița",
        desc: "Expoziție documentară care urmărește drumul artistului de la satul natal la capitala artei mondiale. Include fotografii, scrisori și mărturii ale contemporanilor.",
      },
      {
        titlu: "«Brâncuși și arta primitivă»",
        data: "Aprilie - Septembrie 2026",
        loc: "Centrul Cultural «Constantin Brâncuși», Târgu Jiu",
        desc: "O explorare a influențelor artei africane, asiatice și populare românești asupra operei lui Brâncuși. Piese din colecții internaționale alăturate reproducerilor lucrărilor brâncușiene.",
      },
    ],
  },
  {
    categorie: "Conferințe și simpozioane",
    icon: <BookOpen className="text-gold" size={24} />,
    items: [
      {
        titlu: "Simpozionul Internațional «Brâncuși în secolul XXI»",
        data: "19-21 februarie 2026",
        loc: "Universitatea «Constantin Brâncuși», Târgu Jiu",
        desc: "Conferință academică internațională cu participarea istoricilor de artă, filozofilor și artiștilor din toată lumea. Teme: influența lui Brâncuși asupra artei contemporane, conservarea ansamblului monumental, Brâncuși și filozofia orientală.",
      },
      {
        titlu: "Masa rotundă «Patrimoniul brâncușian - provocări și perspective»",
        data: "15 martie 2026",
        loc: "Primăria Târgu Jiu",
        desc: "Dezbateri despre includerea Ansamblului Monumental pe lista UNESCO, restaurarea operelor și dezvoltarea turismului cultural în Gorj.",
      },
    ],
  },
  {
    categorie: "Tururi ghidate și ateliere",
    icon: <Users className="text-gold" size={24} />,
    items: [
      {
        titlu: "Tur ghidat «Pe urmele lui Brâncuși»",
        data: "Săptămânal, februarie - octombrie 2026",
        loc: "Târgu Jiu - Hobița - Peștișani",
        desc: "Tur de o zi completă: Ansamblul Monumental (dimineața), prânz tradițional oltenesc, vizită la Hobița (după-amiaza). Ghizi specializați în istoria artei. Disponibil în română, engleză, franceză.",
      },
      {
        titlu: "Ateliere de sculptură «Mâini în lut»",
        data: "Lunar, martie - septembrie 2026",
        loc: "Centrul Cultural Târgu Jiu",
        desc: "Ateliere practice de sculptură pentru toate vârstele, inspirate de tehnicile și filosofia lui Brâncuși. Participanții vor lucra cu argilă, piatră și lemn sub îndrumarea sculptorilor profesioniști.",
      },
    ],
  },
  {
    categorie: "Festivaluri culturale",
    icon: <Music className="text-gold" size={24} />,
    items: [
      {
        titlu: "Festivalul «Infinit» - Arte și Muzică",
        data: "15-20 iulie 2026",
        loc: "Parcul Central, Târgu Jiu",
        desc: "Festival multidisciplinar cu muzică clasică și contemporană, teatru, dans, proiecții de film și instalații de artă în aer liber. Invitați speciali: artiști și muzicieni români și internaționali. Intrare liberă.",
      },
      {
        titlu: "«Noaptea Sculpturilor» - ediție specială 150 de ani",
        data: "19 februarie 2026",
        loc: "Ansamblul Monumental, Târgu Jiu",
        desc: "Eveniment nocturn special cu iluminat artistic al sculpturilor, proiecții video pe Poarta Sărutului, concert simfonic la Masa Tăcerii și foc de artificii la Coloana Infinitului. Un spectacol unic, organizat o singură dată în onoarea aniversării.",
      },
    ],
  },
];

const Evenimente = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full mb-6">
            Program 2026
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Evenimente <span className="text-gold">150 de ani</span> Brâncuși
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un an întreg de manifestări culturale dedicat celui mai mare sculptor al lumii moderne.
            Expoziții, conferințe, tururi ghidate, ateliere și festivaluri vă așteaptă în Gorj.
          </p>
        </div>
      </section>

      {evenimente.map((cat, ci) => (
        <Section key={ci} className={`py-16 md:py-20 ${ci % 2 === 1 ? "gradient-section" : ""}`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              {cat.icon}
              <h2 className="font-heading text-2xl md:text-3xl font-bold">{cat.categorie}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.items.map((ev, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-gold/30 transition-colors">
                  <h3 className="font-heading text-lg font-semibold mb-3">{ev.titlu}</h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} /> {ev.data}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gold">
                      <MapPin size={12} /> {ev.loc}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </Layout>
  );
};

export default Evenimente;
