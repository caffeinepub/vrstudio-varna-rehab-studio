import { AboutSection } from "./components/AboutSection";
import { ContactsSection } from "./components/ContactsSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { HomeRehabSection } from "./components/HomeRehabSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HomeRehabSection />
        <GallerySection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
