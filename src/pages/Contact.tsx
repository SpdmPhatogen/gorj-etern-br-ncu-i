import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

const Contact = () => {
  const [formData, setFormData] = useState({ nume: "", email: "", mesaj: "" });
  const [trimis, setTrimis] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrimis(true);
    setFormData({ nume: "", email: "", mesaj: "" });
    setTimeout(() => setTrimis(false), 4000);
  };

  return (
    <Layout>
      <section className="relative py-24 md:py-32 gradient-section">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gold">Contact</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Aveți întrebări despre turismul în Gorj sau despre evenimentele aniversare? Scrieți-ne!
          </p>
        </div>
      </section>

      <Section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formular */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Trimiteți un mesaj</h2>
              {trimis && (
                <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-lg text-sm text-gold">
                  ✓ Mesajul a fost trimis cu succes! Vă vom răspunde în cel mai scurt timp.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nume" className="block text-sm font-medium mb-1.5">
                    Nume complet
                  </label>
                  <input
                    id="nume"
                    type="text"
                    required
                    value={formData.nume}
                    onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Numele dumneavoastră"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Adresă de email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="email@exemplu.ro"
                  />
                </div>
                <div>
                  <label htmlFor="mesaj" className="block text-sm font-medium mb-1.5">
                    Mesajul dumneavoastră
                  </label>
                  <textarea
                    id="mesaj"
                    required
                    rows={5}
                    value={formData.mesaj}
                    onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Scrieți mesajul aici..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors text-sm"
                >
                  <Send size={16} />
                  Trimite mesajul
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Informații utile</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Adresă</h3>
                    <p className="text-muted-foreground text-sm">
                      Consiliul Județean Gorj<br />
                      Strada Victoriei nr. 4<br />
                      Târgu Jiu, județul Gorj, România
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <p className="text-muted-foreground text-sm">+40 253 214 006</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-gold mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">turism@gorj.ro</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-lg font-semibold mb-3">Date turistice utile</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>🕐 <strong>Ansamblul Monumental:</strong> acces liber 24/7</li>
                  <li>🏛 <strong>Muzeu:</strong> Marți–Duminică, 09:00–17:00</li>
                  <li>🏠 <strong>Casa Memorială Hobița:</strong> Miercuri–Duminică, 10:00–18:00</li>
                  <li>🏔 <strong>Transalpina:</strong> Deschisă iunie–octombrie</li>
                  <li>🗺 <strong>Peștera Muierilor:</strong> Zilnic, 09:00–18:00 (vara)</li>
                </ul>
              </div>

              {/* Hartă */}
              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179652.89!2d23.15!3d45.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47352e6c7b22e6d9%3A0x7d3b8a5f8a1a0b0!2sT%C3%A2rgu%20Jiu!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hartă Târgu Jiu, Gorj"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
