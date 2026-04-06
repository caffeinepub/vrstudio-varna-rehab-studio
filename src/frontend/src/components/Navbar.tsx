import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { LOGO, NAV_LINKS } from "../constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-ocid="nav.link"
          className="flex-shrink-0"
        >
          <img
            src={LOGO}
            alt="VRstudio"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </button>
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+359877773136"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
            data-ocid="nav.primary_button"
          >
            <Phone className="w-4 h-4" />
            Запази час
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled
              ? "text-foreground hover:bg-secondary"
              : "text-white hover:bg-white/10"
          }`}
          aria-label={menuOpen ? "Затвори меню" : "Отвори меню"}
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+359877773136"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                data-ocid="nav.primary_button"
              >
                <Phone className="w-4 h-4" />
                Запази час
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
