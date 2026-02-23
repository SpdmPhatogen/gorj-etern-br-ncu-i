import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">Gorj</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Ghid turistic digital dedicat județului Gorj și aniversării a 150 de ani
              de la nașterea lui Constantin Brâncuși (1876–2026).
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigare</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Acasă</Link>
              <Link to="/brancusi" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Constantin Brâncuși</Link>
              <Link to="/descopera-gorjul" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Descoperă Gorjul</Link>
              <Link to="/evenimente" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Evenimente</Link>
              <Link to="/galerie" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Galerie</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Informații</h4>
            <div className="text-sm text-primary-foreground/70 space-y-2">
              <p>Județul Gorj, România</p>
              <p>Aniversare: 1876 – 2026</p>
              <p className="text-gold font-medium">150 de ani de la nașterea lui Brâncuși</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Gorj – Ghid Turistic Digital. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
