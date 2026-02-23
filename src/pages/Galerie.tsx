import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import coloanaImg from "@/assets/coloana-infinitului.jpg";
import poartaImg from "@/assets/poarta-sarutului.jpg";
import masaImg from "@/assets/masa-tacerii.jpg";
import heroImg from "@/assets/hero-gorj.jpg";
import peisajImg from "@/assets/peisaj-gorj.jpg";
import brancusiImg from "@/assets/brancusi-portret.jpg";

const categorii = ["Toate", "Opere", "Peisaje", "Portrete"];

const imagini = [
  { src: coloanaImg, alt: "Coloana Infinitului", categorie: "Opere" },
  { src: poartaImg, alt: "Poarta Sărutului", categorie: "Opere" },
  { src: masaImg, alt: "Masa Tăcerii", categorie: "Opere" },
  { src: heroImg, alt: "Valea Jiului – panoramă", categorie: "Peisaje" },
  { src: peisajImg, alt: "Munții Parâng – pășuni alpine", categorie: "Peisaje" },
  { src: brancusiImg, alt: "Constantin Brâncuși – portret", categorie: "Portrete" },
];

const Galerie = () => {
  const [categorie, setCategorie] = useState("Toate");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtrate = categorie === "Toate" ? imagini : imagini.filter((i) => i.categorie === categorie);

  return (
    <Layout>
      <section className="relative py-24 md:py-32 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gold">Galerie</span> foto
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Imagini din universul sculptural al lui Brâncuși și din peisajele spectaculoase ale Gorjului.
          </p>
        </div>
      </section>

      <Section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Filtre */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categorii.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategorie(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  categorie === cat
                    ? "bg-gold text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtrate.map((img, i) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
              onClick={() => setLightbox(null)}
              aria-label="Închide"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={filtrate[lightbox]?.src}
              alt={filtrate[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-center text-primary-foreground/70 text-sm">
              {filtrate[lightbox]?.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Galerie;
