import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyOfflineSection from "@/components/sections/WhyOfflineSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyOfflineSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
