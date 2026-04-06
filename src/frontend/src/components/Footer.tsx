import { Facebook, Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60 text-center sm:text-left">
            © 2026 VRstudio – Varna Rehab Studio. Всички права запазени.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="tel:+359877773136"
              className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
              aria-label="Телефон"
            >
              <Phone className="w-3.5 h-3.5" />
              0877 773 136
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://www.instagram.com/varna_rehab_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575524181774"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
