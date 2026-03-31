import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 dot-grid opacity-[0.02]" />
      </div>
      <Navigation />
      <Hero />
      <LogoMarquee />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
