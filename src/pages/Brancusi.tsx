import Layout from "@/components/Layout";
import Section from "@/components/Section";
import brancusiImg from "@/assets/brancusi-portret.jpg";
import coloanaImg from "@/assets/coloana-infinitului.jpg";
import poartaImg from "@/assets/poarta-sarutului.jpg";
import masaImg from "@/assets/masa-tacerii.jpg";

const opere = [
  {
    titlu: "Masa Tăcerii",
    an: "1937–1938",
    material: "Piatră de Banpotoc (travertin)",
    semnificatie: "Simbolizează masa sacrificiului și comuniunea dintre oameni. Cele 12 scaune în formă de clepsidră evocă cele 12 luni ale anului sau cei 12 apostoli. Este primul element al Ansamblului Monumental din Târgu Jiu.",
    locatie: "Târgu Jiu, Gorj, România",
    img: masaImg,
  },
  {
    titlu: "Poarta Sărutului",
    an: "1937–1938",
    material: "Piatră de Banpotoc (travertin)",
    semnificatie: "Poartă monumentală decorată cu motivul sărutului – două jumătăți unite. Simbolizează triumful vieții asupra morții, dragostea și unitatea. Este poarta care marchează intrarea în spațiul sacru al memoriei eroilor.",
    locatie: "Târgu Jiu, Gorj, România",
    img: poartaImg,
  },
  {
    titlu: "Coloana Infinitului",
    an: "1938",
    material: "Fontă și oțel acoperit cu alamă",
    semnificatie: "Capodopera absolută a lui Brâncuși, Coloana Infinitului (sau Coloana fără Sfârșit) se înalță la 29,33 metri. Cele 15 module romboidale și cele 2 jumătăți de modul evocă aspirația omului spre infinit, spre divinitate. Este considerată una dintre cele mai importante sculpturi ale secolului XX.",
    locatie: "Târgu Jiu, Gorj, România",
    img: coloanaImg,
  },
  {
    titlu: "Domnișoara Pogany",
    an: "1913 (prima versiune)",
    material: "Marmură albă, bronz (versiuni ulterioare)",
    semnificatie: "Portret al Margaritei Pogany, studentă la artă din Budapesta. Ochii mari, ovoidali, și linia pură a capului fac din această sculptură un simbol al eleganței și al simplificării formei umane. Există mai multe versiuni în marmură și bronz.",
    locatie: "Museum of Modern Art, New York; Philadelphia Museum of Art",
  },
  {
    titlu: "Pasărea Măiastră",
    an: "1910–1912",
    material: "Marmură albă, bronz lustruit",
    semnificatie: "Inspirată din mitologia românească, Pasărea Măiastră este creatura magică ce conduce eroii din basme spre destinul lor. Brâncuși a creat multiple versiuni, evoluând spre forma extremă de puritate din seria «Pasărea în spațiu». Reprezintă zborul spiritual al omului.",
    locatie: "Tate Modern, Londra; MoMA, New York",
  },
  {
    titlu: "Sărutul",
    an: "1907–1908",
    material: "Piatră",
    semnificatie: "Una dintre primele lucrări majore ale lui Brâncuși, «Sărutul» reprezintă două figuri unite într-o îmbrățișare. Blocul de piatră compact simbolizează unitatea absolută a celor doi. A marcat ruptura definitivă de stilul lui Rodin și nașterea unui limbaj sculptural propriu.",
    locatie: "Cimitirul Montparnasse, Paris",
  },
  {
    titlu: "Muza adormită",
    an: "1910",
    material: "Bronz lustruit, marmură",
    semnificatie: "Cap ovoid culcat pe o parte, cu trăsături abia sugerate – ochii închiși, buzele fine, nasul delicat. Reprezintă starea de contemplație și liniște interioară. Este una dintre cele mai poetice creații ale lui Brâncuși.",
    locatie: "Centre Pompidou, Paris; Metropolitan Museum, New York",
  },
  {
    titlu: "Cumințenia Pământului",
    an: "1907",
    material: "Piatră calcară",
    semnificatie: "Figură feminină așezată, cu mâinile pe genunchi, evocând răbdarea și înțelepciunea pământului românesc. Este o operă profund legată de tradițiile populare și de spiritualitatea rurală a Olteniei natale a sculptorului.",
    locatie: "Muzeul de Artă Craiova, România",
  },
];

const Brancusi = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 gradient-section overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full mb-6">
                1876 — 2026
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Constantin <span className="text-gold">Brâncuși</span>
              </h1>
              <p className="text-xl text-muted-foreground italic font-heading mb-6">
                „Simplitatea este complexitatea rezolvată."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cel mai mare sculptor al secolului XX, Constantin Brâncuși s-a născut pe 19 februarie 1876
                în satul Hobița, comuna Peștișani, județul Gorj. De la copilul sărman din Oltenia la geniul
                care a revoluționat arta mondială – povestea sa este una a perseverenței, a viziunii și a
                iubirii pentru esența lucrurilor.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 md:w-80">
                <img
                  src={brancusiImg}
                  alt="Constantin Brâncuși – portret"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biografie */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">
            Biografie <span className="text-gold">completă</span>
          </h2>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Copilăria și tinerețea (1876–1898)</h3>
              <p>
                Constantin Brâncuși s-a născut pe 19 februarie 1876 în Hobița, un sat mic din comuna Peștișani,
                în inima județului Gorj. Familia sa era una de țărani modești. Tatăl său, Nicolae Brâncuși, și
                mama sa, Maria, aveau mai mulți copii, iar viața era dură în România rurală a secolului al XIX-lea.
                Încă de mic, Constantin a arătat o îndemânare deosebită în lucrul cu lemnul – sculptând obiecte
                din crengi și bucăți de lemn găsite în jurul casei.
              </p>
              <p className="mt-3">
                La vârsta de 9 ani, tânărul Constantin a plecat de acasă pentru a lucra în diferite ateliere
                din Craiova. A fost ucenic la un vopsitor, apoi la un băcan, învățând meseriile cu o sârguință
                remarcabilă. A fost remarcat de un industriaș local care i-a plătit studiile la Școala de Arte
                și Meserii din Craiova (1894–1898), unde a excelat în sculptură și desen.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Studiile la București (1898–1904)</h3>
              <p>
                În 1898, Brâncuși a intrat la Școala Națională de Arte Frumoase din București, unde a studiat
                sub îndrumarea sculptorilor Ion Georgescu și Vladimir Hegel. Aici a realizat primele sale lucrări
                importante, demonstrând o stăpânire excepțională a anatomiei și a tehnicilor clasice. Lucrarea
                „Ecorșeul" (un studiu anatomic detaliat) i-a adus recunoașterea profesorilor și primele premii.
                În această perioadă, a început să-și formeze viziunea artistică unică, simțind că arta academică
                nu mai putea exprima ceea ce căuta el.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Drumul spre Paris (1904–1907)</h3>
              <p>
                În 1904, Brâncuși a plecat pe jos din București spre Paris – o călătorie legendară care a durat
                luni de zile, trecând prin Budapesta, Viena și München. A ajuns la Paris în 1904, unde s-a
                înscris la École des Beaux-Arts. În 1907, a intrat pentru scurt timp în atelierul lui Auguste
                Rodin, pe atunci cel mai celebru sculptor din lume. Însă Brâncuși a părăsit rapid atelierul
                maestrului, spunând celebra frază: „La umbra copacilor mari nu crește nimic."
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Revoluția artistică (1907–1938)</h3>
              <p>
                După ruptura cu Rodin, Brâncuși și-a dezvoltat un stil complet nou. A început să practice talia
                directă (sculptând direct în bloc de piatră sau lemn, fără model de gips), revoluționând practica
                sculpturii. Influențat de arta africană, de arta populară românească și de filozofia orientală,
                a creat un limbaj sculptural bazat pe esențializare, pe căutarea formei pure.
              </p>
              <p className="mt-3">
                Între 1907 și 1938, a realizat capodoperele sale: „Sărutul" (1907–1908), „Pasărea Măiastră"
                (1910), „Domnișoara Pogany" (1913), seria „Pasărea în spațiu" și, în 1937–1938, Ansamblul
                Monumental de la Târgu Jiu – opera supremă a carierei sale, comandată de Liga Națională a
                Femeilor din România pentru cinstirea eroilor din Primul Război Mondial.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Ultimii ani și moștenirea (1938–1957)</h3>
              <p>
                După finalizarea Ansamblului de la Târgu Jiu, Brâncuși s-a retras tot mai mult în atelierul
                său din Impasse Ronsin, Paris. A continuat să lucreze, dar într-un ritm mai lent, perfecționând
                piese existente și contemplând esența artei. A primit cetățenia franceză în 1952. S-a stins
                din viață pe 16 martie 1957, la Paris, la vârsta de 81 de ani. A lăsat prin testament atelierul
                și lucrările din el statului francez, cu condiția ca atelierul să fie reconstruit identic.
                Astăzi, Atelierul Brâncuși se află lângă Centre Pompidou din Paris.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Creații */}
      <Section className="py-20 md:py-28 gradient-section">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
            Creații <span className="text-gold">importante</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Fiecare operă este o meditație asupra esenței – o reducere a formei la puritatea sa absolută.
          </p>

          <div className="space-y-12">
            {opere.map((opera, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {opera.img && (
                  <div className="lg:w-2/5">
                    <img
                      src={opera.img}
                      alt={opera.titlu}
                      className="w-full rounded-lg shadow-lg aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={opera.img ? "lg:w-3/5" : "w-full max-w-3xl mx-auto"}>
                  <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                    <h3 className="font-heading text-2xl font-bold mb-2">{opera.titlu}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                        {opera.an}
                      </span>
                      <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                        {opera.material}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                      {opera.semnificatie}
                    </p>
                    <p className="text-xs text-gold">
                      📍 {opera.locatie}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Ansamblul Monumental */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">
            Ansamblul Monumental de la <span className="text-gold">Târgu Jiu</span>
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Ansamblul Monumental de la Târgu Jiu reprezintă capodopera absolută a lui Constantin Brâncuși
              și una dintre cele mai importante realizări artistice ale secolului XX. Construit între 1937 și
              1938, ansamblul a fost comandat de Liga Națională a Femeilor din România, sub conducerea Aretiei
              Tătărescu, pentru a comemora eroismul și sacrificiul soldaților români căzuți în luptele de pe
              Valea Jiului din Primul Război Mondial.
            </p>
            <p>
              Ansamblul se desfășoară de-a lungul unei axe simbolice de aproximativ 1.275 de metri, orientată
              est-vest, urmând cursul râului Jiu. Această axă conectează trei elemente sculpturale majore:
              Masa Tăcerii, Poarta Sărutului și Coloana Infinitului. Axa nu este doar fizică, ci și filosofică
              – ea reprezintă drumul vieții, de la sacrificiu (Masa Tăcerii) prin triumful iubirii asupra
              morții (Poarta Sărutului) spre aspirația infinită a spiritului uman (Coloana Infinitului).
            </p>
            <p>
              Importanța internațională a ansamblului este imensă. Este singurul ansamblu monumental de artă
              modernă din lume realizat de un singur artist, în aer liber, integrat organic în peisajul urban
              al unui oraș. UNESCO a propus includerea sa pe lista Patrimoniului Mondial, iar critici de artă
              din întreaga lume îl consideră echivalentul sculptural al capelei Sixtine.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Brancusi;
