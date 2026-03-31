import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 dot-grid opacity-[0.02]" />
      </div>
      <Navigation />
      <Pricing />
      <Footer />
    </div>
  );
};

export default PricingPage;
