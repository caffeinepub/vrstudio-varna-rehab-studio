import {
  Activity,
  Bandage,
  Bone,
  Brain,
  Footprints,
  Home,
  Phone,
  Users,
} from "lucide-react";
import { HOME_REHAB_BG, HOME_REHAB_BG_MOBILE } from "../constants";
import { FadeInSection } from "./FadeInSection";

const CASES = [
  { Icon: Bandage, label: "Възстановяване след операции" },
  { Icon: Brain, label: "Инсулт и множествена склероза" },
  { Icon: Footprints, label: "Трудности при ходене" },
  { Icon: Bone, label: "Ендопротезиране на тазобедрена/колянна става" },
  { Icon: Activity, label: "Възстановяване след фрактури" },
  { Icon: Users, label: "Възрастни хора с ограничена подвижност" },
];

export function HomeRehabSection() {
  return (
    <>
      {/* Mobile version -- new image */}
      <section
        id="home-rehab"
        className="relative py-20 overflow-hidden md:hidden"
        style={{
          backgroundImage: `url('${HOME_REHAB_BG_MOBILE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.22 0.1 245 / 0.90)" }}
        />
        <HomeRehabContent />
      </section>

      {/* Desktop version -- original image */}
      <section
        className="relative py-28 overflow-hidden hidden md:block"
        style={{
          backgroundImage: `url('${HOME_REHAB_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.25 0.09 245 / 0.88)" }}
        />
        <HomeRehabContent />
      </section>
    </>
  );
}

function HomeRehabContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeInSection>
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 border-2 border-white/30"
            style={{ background: "oklch(1 0 0 / 0.1)" }}
          >
            <Home className="w-7 h-7 text-white" />
          </div>
          <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            Специализирана услуга
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Домашна рехабилитация
          </h2>
          <p className="text-blue-100 text-lg font-medium mb-3">
            Специализирана услуга за жители на гр. Варна
          </p>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            Предлагам домашна рехабилитация за пациенти, на които им е трудно да
            посещават кабинета. Работя директно при вас, с пълно оборудване и
            индивидуална програма.
          </p>
        </div>
      </FadeInSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {CASES.map((item, i) => (
          <FadeInSection key={item.label} delay={i * 0.08}>
            <div
              className="flex items-center gap-4 p-5 rounded-xl border border-white/15 backdrop-blur-sm"
              style={{ background: "oklch(1 0 0 / 0.08)" }}
              data-ocid={`home_rehab.item.${i + 1}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(1 0 0 / 0.15)" }}
              >
                <item.Icon className="w-5 h-5 text-blue-200" />
              </div>
              <span className="text-white text-sm font-medium leading-snug">
                {item.label}
              </span>
            </div>
          </FadeInSection>
        ))}
      </div>
      <FadeInSection>
        <div className="text-center">
          <a
            href="tel:+359877773136"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white text-primary font-bold text-base hover:bg-blue-50 transition-colors shadow-xl"
            data-ocid="home_rehab.primary_button"
          >
            <Phone className="w-5 h-5" />
            Запази час за домашна рехабилитация
          </a>
        </div>
      </FadeInSection>
    </div>
  );
}
