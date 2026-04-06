import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { motion } from "motion/react";
import { HERO_BG } from "../constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${HERO_BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/65" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="inline-block text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Варна Рехаб Студио
          </span>
        </motion.div>
        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          Живот без болка и пълноценно движение.
        </motion.h1>
        <motion.p
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Професионална рехабилитация, кинезитерапия и мануална терапия в гр.
          Варна.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="tel:+359877773136"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-xl hover:scale-[1.02]"
            data-ocid="hero.primary_button"
          >
            <Phone className="w-5 h-5" />
            Запази час
          </a>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contacts")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white/15 backdrop-blur-sm text-white font-semibold text-base border border-white/30 hover:bg-white/25 transition-all duration-200"
            data-ocid="hero.secondary_button"
          >
            Контакти <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
