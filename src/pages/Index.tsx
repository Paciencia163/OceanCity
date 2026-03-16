import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FilmSection from "@/components/FilmSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import ResidencesSection from "@/components/ResidencesSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FilmSection />
      <AboutSection />
      <GallerySection />
      <ExperienceSection />
      <ResidencesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
