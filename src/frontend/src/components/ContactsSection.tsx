import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

export function ContactsSection() {
  return (
    <section
      id="contacts"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.97 0.008 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-4">
              Свържете се с нас
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Контакти
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary opacity-50" />
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeInSection>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-border/50 h-full">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
                Информация за контакт
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.92 0.04 245)" }}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                      Адрес
                    </p>
                    <p className="text-foreground font-medium">
                      гр. Варна, ул. „Ангел Кънчев“ 15
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.92 0.04 245)" }}
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                      Телефон
                    </p>
                    <a
                      href="tel:+359877773136"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                      data-ocid="contacts.link"
                    >
                      0877 773 136
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.92 0.04 245)" }}
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/varna_rehab_studio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                      data-ocid="contacts.link"
                    >
                      @varna_rehab_studio
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.92 0.04 245)" }}
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                      Facebook
                    </p>
                    <a
                      href="https://www.facebook.com/profile.php?id=61575524181774"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                      data-ocid="contacts.link"
                    >
                      VRstudio
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-border">
                <a
                  href="tel:+359877773136"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-primary text-white font-bold text-base hover:opacity-90 transition-opacity shadow-md"
                  data-ocid="contacts.primary_button"
                >
                  <Phone className="w-5 h-5" /> Запази час сега
                </a>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div
              className="rounded-2xl overflow-hidden shadow-card border border-border/50"
              style={{ minHeight: "450px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.3709497125515!2d27.893377911043903!3d43.222681671005404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a455f9e5d73519%3A0xa81f9dd962042e72!2sVarna%20Rehab%20Studio!5e0!3m2!1sen!2sbg!4v1775466653030!5m2!1sen!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта на VRstudio"
                data-ocid="contacts.card"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
