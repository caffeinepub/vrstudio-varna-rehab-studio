import { Activity, Bone, Brain, Hand } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

const SERVICES = [
  {
    Icon: Activity,
    title: "Спортни травми и ортопедия",
    desc: "Възстановяване при спортни травми и ортопедични състояния чрез съвременни методи на рехабилитация.",
  },
  {
    Icon: Brain,
    title: "Неврорехабилитация",
    desc: "Рехабилитация при централни и периферни увреди на нервната система с индивидуален подход.",
  },
  {
    Icon: Bone,
    title: "Мускулно-скелетна рехабилитация",
    desc: "Лечение и възстановяване на мускулно-скелетни нарушения с доказани терапевтични техники.",
  },
  {
    Icon: Hand,
    title: "Мануална терапия и масаж",
    desc: "Мануална терапия, кинезиотейпинг и терапевтичен масаж за облекчаване на болка и подобряване на функцията.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.97 0.008 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-4">
              Какво предлагам
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Услуги в кабинета
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary opacity-50" />
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <FadeInSection key={service.title} delay={i * 0.1}>
              <div
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "oklch(0.92 0.04 245)" }}
                >
                  <service.Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
