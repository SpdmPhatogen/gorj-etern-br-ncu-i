import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mountain, Landmark } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import heroImg from "@/assets/hero-gorj.jpg";
import coloanaImg from "@/assets/coloana-infinitului.jpg";
import poartaImg from "@/assets/poarta-sarutului.jpg";
import masaImg from "@/assets/masa-tacerii.jpg";
import peisajImg from "@/assets/peisaj-gorj.jpg";

const slides = [
  { src: coloanaImg, alt: "Coloana Infinitului", title: "Coloana Infinitului" },
  { src: poartaImg, alt: "Poarta Sărutului", title: "Poarta Sărutului" },
  { src: masaImg, alt: "Masa Tăcerii", title: "Masa Tăcerii" },
  { src: peisajImg, alt: "Peisaje din Gorj", title: "Peisaje din Gorj" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Peisaj din județul Gorj" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest uppercase border border-gold/40 rounded-full text-gold bg-foreground/20 backdrop-blur-sm">
              1876 — 2026
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground mb-6 max-w-5xl mx-auto">
              Gorj — Inima Olteniei și{" "}
              <span className="text-gold">150 de ani</span> de la nașterea lui Constantin Brâncuși
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
              Descoperă frumusețea unică a județului Gorj, leagănul celui mai mare sculptor al lumii moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/brancusi"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors text-sm"
              >
                Descoperă moștenirea lui Brâncuși
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/descopera-gorjul"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-medium rounded-md hover:bg-primary-foreground/10 transition-colors text-sm backdrop-blur-sm"
              >
                Explorează Gorjul
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Despre Gorj */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Județul <span className="text-gold">Gorj</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Situat în sud-vestul României, în inima Olteniei, județul Gorj este un tărâm al contrastelor
              spectaculoase. De la vârfurile impunătoare ale Munților Parâng, ce se ridică la peste 2.500 de metri,
              până la dealurile blânde ale Subcarpaților Getici și Valea Jiului ce brăzdează peisajul, Gorjul
              oferă o diversitate naturală rară în România.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 text-center border border-border hover:border-gold/30 transition-colors">
              <Mountain className="mx-auto mb-4 text-gold" size={40} />
              <h3 className="font-heading text-xl font-semibold mb-3">Relief spectaculos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Munții Parâng cu vârfuri de peste 2.500 m, Subcarpații Getici, Valea Jiului și peisaje alpine
                de o frumusețe copleșitoare. Transalpina, „drumul regilor", traversează cele mai înalte culmi.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 text-center border border-border hover:border-gold/30 transition-colors">
              <Landmark className="mx-auto mb-4 text-gold" size={40} />
              <h3 className="font-heading text-xl font-semibold mb-3">Istorie milenară</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                De la cetățile dacice și urmele romane, prin Evul Mediu cu Tudor Vladimirescu – eroul
                național născut pe aceste meleaguri – până la epoca modernă, Gorjul a fost mereu în centrul
                istoriei românești.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 text-center border border-border hover:border-gold/30 transition-colors">
              <MapPin className="mx-auto mb-4 text-gold" size={40} />
              <h3 className="font-heading text-xl font-semibold mb-3">Cultură vie</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Patria lui Constantin Brâncuși, Gorjul păstrează vii tradițiile oltenești – meșteșuguri,
                port popular, obiceiuri străvechi și o ospitalitate legendară. Orașul Târgu Jiu găzduiește
                capodopera sa monumentală.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Secțiune aniversară */}
      <Section className="py-20 md:py-28 gradient-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full mb-6">
                Aniversare 2026
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                150 de ani de la nașterea lui{" "}
                <span className="text-gold">Constantin Brâncuși</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pe 19 februarie 1876, în satul Hobița din județul Gorj, se năștea cel care avea să devină
                părintele sculpturii moderne. Constantin Brâncuși a revoluționat arta secolului XX prin
                filozofia sa unică: „Simplitatea nu este un scop în artă, dar ajungi la simplitate în ciuda
                ta, pe măsură ce te apropii de sensul real al lucrurilor."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Anul 2026 marchează un moment istoric: 150 de ani de la venirea pe lume a artistului care
                a pus România pe harta culturii universale. Județul Gorj, locul nașterii sale, celebrează
                acest eveniment printr-o serie de manifestări culturale, expoziții și proiecte educaționale
                menite să aducă în atenția lumii moștenirea neprețuită a marelui sculptor.
              </p>
              <Link
                to="/brancusi"
                className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all text-sm"
              >
                Află mai multe despre Brâncuși
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {slides.map((slide, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Obiective rapide */}
      <Section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Obiective de neratat
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            De la Ansamblul Monumental Brâncuși la peșteri, chei și mănăstiri seculare.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Ansamblul Monumental", desc: "Capodopera lui Brâncuși din Târgu Jiu – un complex unic în lume.", img: coloanaImg },
              { title: "Peștera Muierilor", desc: "Una dintre cele mai vechi peșteri locuite din Europa, cu stalactite impresionante.", img: peisajImg },
              { title: "Transalpina", desc: "Cel mai înalt drum din România, cu panorame alpine și pășuni montane.", img: heroImg },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/descopera-gorjul"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors text-sm"
            >
              Toate obiectivele turistice
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
