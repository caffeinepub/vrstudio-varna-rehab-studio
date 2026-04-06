import { PersonStanding, Phone } from "lucide-react";
import { MIHAIL_PHOTO } from "../constants";
import { FadeInSection } from "./FadeInSection";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeInSection>
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: "oklch(0.92 0.04 245)" }}
              />
              <img
                src={MIHAIL_PHOTO}
                alt="Михаил Михайлов — физиотерапевт"
                className="relative z-10 w-full rounded-2xl object-cover shadow-card"
                style={{ aspectRatio: "4/5", maxHeight: "600px" }}
              />
              <div className="absolute z-20 -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-card-hover p-4 border border-border max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.92 0.04 245)" }}
                  >
                    <PersonStanding className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Магистър
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Кинезитерапия
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                За мен
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
                Михаил Михайлов
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
                  style={{
                    background: "oklch(0.94 0.03 245)",
                    color: "oklch(0.35 0.1 245)",
                  }}
                >
                  Магистър по кинезитерапия
                </span>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
                  style={{
                    background: "oklch(0.94 0.03 245)",
                    color: "oklch(0.35 0.1 245)",
                  }}
                >
                  Специалист по неврология
                </span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Използвам най-съвременните и ефективни методи на мануална
                терапия в света, за да помогна на пациентите си да живеят без
                болка.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                С индивидуален подход към всеки пациент, съчетавам доказани
                техники с последните постижения в рехабилитационната медицина.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "oklch(0.96 0.015 220)" }}
                >
                  <p className="text-3xl font-heading font-bold text-primary">
                    10+
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Години опит
                  </p>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "oklch(0.96 0.015 220)" }}
                >
                  <p className="text-3xl font-heading font-bold text-primary">
                    500+
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Доволни пациенти
                  </p>
                </div>
              </div>
              <a
                href="tel:+359877773136"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md"
                data-ocid="about.primary_button"
              >
                <Phone className="w-4 h-4" /> Запази час
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
