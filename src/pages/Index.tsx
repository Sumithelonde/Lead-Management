import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { AboutSection } from "@/components/sections/AboutSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <FeaturedMenu />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Index;
