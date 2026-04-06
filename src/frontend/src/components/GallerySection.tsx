import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "../constants";
import { FadeInSection } from "./FadeInSection";

function Lightbox({
  src,
  alt,
  onClose,
}: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
      data-ocid="gallery.modal"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full object-contain rounded-lg"
          style={{ maxHeight: "85vh" }}
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-2 shadow-xl hover:bg-gray-100 transition-colors"
          aria-label="Затвори"
          data-ocid="gallery.close_button"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-4">
              Нашият кабинет
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Галерия
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary opacity-50" />
          </div>
        </FadeInSection>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
              onClick={() => setLightbox(img)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  Виж снимката
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
