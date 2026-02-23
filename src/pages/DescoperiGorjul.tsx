import { MapPin, Trees, Mountain, Church, Route } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import heroImg from "@/assets/hero-gorj.jpg";
import peisajImg from "@/assets/peisaj-gorj.jpg";
import coloanaImg from "@/assets/coloana-infinitului.jpg";

const obiective = [
  {
    titlu: "Târgu Jiu – Ansamblul Monumental Brâncuși",
    icon: <MapPin className="text-gold" size={24} />,
    desc: "Capitala județului și sediul capodoperei lui Brâncuși. Ansamblul format din Masa Tăcerii, Aleea Scaunelor, Poarta Sărutului și Coloana Infinitului se întinde pe o axă de 1.275 m. Orașul oferă și Muzeul Județean de Artă, Parcul Central și o viață culturală vibrantă.",
    recomandare: "Vizitați ansamblul dimineața devreme, când lumina este perfectă pentru fotografii. Alocați minimum 2 ore.",
  },
  {
    titlu: "Hobița – Casa memorială Brâncuși",
    icon: <Church className="text-gold" size={24} />,
    desc: "Satul natal al sculptorului, situat în comuna Peștișani. Aici se află casa memorială, reconstruită fidel, unde Brâncuși și-a petrecut copilăria. Peisajul pastoral al Hobiței a influențat profund viziunea artistică a sculptorului – dealurile blânde, pădurile și liniștea locului.",
    recomandare: "Combinați vizita cu un traseu prin satele tradiționale din împrejurimi pentru a experimenta Oltenia autentică.",
  },
  {
    titlu: "Peștera Muierilor",
    icon: <Mountain className="text-gold" size={24} />,
    desc: "Situată la Baia de Fier, Peștera Muierilor este una dintre cele mai vechi peșteri locuite din Europa. Numele provine de la faptul că femeile din sat se refugiau aici în timpul invaziilor. Cu o lungime de peste 3.500 m, galeria turistică de 800 m impresionează prin stalactite, stalagmite și formațiuni spectaculoase.",
    recomandare: "Temperatura constantă de 16°C – luați o jachetă. Ghidul local adaugă mult farmec vizitei.",
  },
  {
    titlu: "Cheile Sohodolului",
    icon: <Trees className="text-gold" size={24} />,
    desc: "Rezervație naturală spectaculoasă, Cheile Sohodolului se întind pe aproximativ 7 km de-a lungul râului Sohodol. Pereții calcaroși se ridică la peste 200 m, creând un peisaj dramatic. Flora include specii rare endemice, iar fauna cuprinde urși, lupi și vulturi.",
    recomandare: "Traseul de drumeție durează 3-4 ore. Cel mai frumos în toamnă, când culorile frunzișului se reflectă în apa râului.",
  },
  {
    titlu: "Mănăstirea Tismana",
    icon: <Church className="text-gold" size={24} />,
    desc: "Cea mai veche mănăstire din Țara Românească, fondată în 1377-1378 de călugărul Nicodim de la Tismana. Situată spectaculos pe un platou stâncos, la marginea unei prăpastii, mănăstirea a fost centru cultural și spiritual important. Biblioteca cuprinde manuscrise medievale de valoare inestimabilă.",
    recomandare: "Vizitați și cascada Tismana din apropiere. Peisajul montan din jur este ideal pentru drumeții scurte.",
  },
  {
    titlu: "Transalpina (DN67C)",
    icon: <Route className="text-gold" size={24} />,
    desc: "Cel mai înalt drum din România, Transalpina atinge altitudinea de 2.145 m la Pasul Urdele. Drumul traversează Munții Parâng pe o distanță de peste 140 km, oferind panorame alpine uluitoare: pășuni montane, lacuri glaciare, stâni tradiționale și vârfuri înzăpezite. Este considerat «drumul regilor» deoarece regele Carol al II-lea l-a inaugurat.",
    recomandare: "Deschis vara (iunie–octombrie). Porniți devreme pentru a evita ceața de altitudine. Opriți la Obârșia Lotrului pentru o experiență autentică montană.",
  },
];

const DescoperiGorjul = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={peisajImg} alt="Peisaj montan din Gorj" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Descoperă <span className="text-gold">Gorjul</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Un ținut al munților, al legendelor și al artei – de la peșteri milenare la drumuri alpine.
          </p>
        </div>
      </section>

      {/* Geografie */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
            Geografie și <span className="text-gold">natură</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Relief:</strong> Județul Gorj se desfășoară pe trei trepte de relief:
                zona montană cu Munții Parâng (vârful Parângul Mare – 2.519 m), Munții Vâlcan și Munții Mehedinți;
                zona subcarpatică cu dealuri și depresiuni; și zona de câmpie la sud. Râul Jiu, cu afluenții
                săi, brăzdează întreg județul.
              </p>
              <p>
                <strong className="text-foreground">Climat:</strong> Climat temperat-continental, cu variații
                altitudinale. Iernile la altitudini mari sunt aspre, cu zăpadă abundentă, iar verile sunt
                răcoroase în munți și calde în zonele joase. Temperatura medie anuală variază de la 10°C
                în depresiuni la sub 0°C pe vârfurile muntoase.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Biodiversitate:</strong> Pădurile de fag și conifere
                acoperă peste 40% din suprafața județului. Fauna include specii emblematice: ursul brun,
                lupul cenușiu, râsul, cerbul carpatin și vulturul pleșuv. Rezervațiile naturale adăpostesc
                specii rare și endemice de plante.
              </p>
              <p>
                <strong className="text-foreground">Resurse naturale:</strong> Gorjul a fost istoric un
                important bazin carbonifer. Zăcămintele de cărbune din Valea Jiului au alimentat industria
                românească decenii la rând. Apele minerale și termale de la Săcelu și din alte stațiuni
                completează bogăția subsolului.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Istorie */}
      <Section className="py-20 md:py-28 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-gold">Istorie</span> milenară
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Dacii și romanii:</strong> Teritoriul actual al Gorjului
              a fost locuit încă din neolitic. Dacii au ridicat aici fortificații, iar după cucerirea romană
              (106 d.Hr.), zona a fost integrată în provincia Dacia. Vestigii ale drumurilor și castrelor
              romane se pot vedea și astăzi în mai multe localități.
            </p>
            <p>
              <strong className="text-foreground">Evul Mediu:</strong> În perioada medievală, ținutul Gorjului
              a fost parte a Țării Românești. Mănăstirea Tismana (1377) este cea mai veche din țară.
              Boierii locali au jucat roluri importante în istoria Munteniei, iar satele au păstrat
              tradițiile romanice vechi de secole.
            </p>
            <p>
              <strong className="text-foreground">Tudor Vladimirescu:</strong> Născut la Vladimir (azi
              în județul Gorj), Tudor Vladimirescu a condus Revoluția din 1821, primul mare act de revoltă
              împotriva sistemului feudal fanariot. Gorjul rămâne mândru de acest erou care a luptat pentru
              drepturile țăranilor și pentru libertatea națională.
            </p>
            <p>
              <strong className="text-foreground">Epoca modernă:</strong> Industrializarea din perioada
              comunistă a transformat fundamental județul, cu accent pe minerit și energie. După 1989,
              Gorjul s-a reinventat, concentrându-se pe turism, cultură și valorificarea moștenirii lui Brâncuși.
            </p>
          </div>
        </div>
      </Section>

      {/* Obiective turistice */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
            Obiective <span className="text-gold">turistice</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            De la sculpturi monumentale la peșteri străvechi și drumuri alpine – Gorjul are totul.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {obiective.map((ob, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-gold/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">{ob.icon}</div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{ob.titlu}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{ob.desc}</p>
                    <p className="text-xs text-gold italic">💡 {ob.recomandare}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default DescoperiGorjul;
