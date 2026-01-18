import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InternshipsSection from "../components/InternshipSection";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InternshipsSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
