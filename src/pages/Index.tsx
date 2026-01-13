import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import WhyOfflineSection from "@/components/sections/WhyOfflineSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TemplatesSection />
        <WhyOfflineSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
