import { MapPin, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const metrics = [
    { label: "Projects Delivered", value: "5+" },
    { label: "Client Retention", value: "100%" },
    { label: "Months Experience", value: "3+" },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="enterprise-shell relative z-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="section-kicker mb-5 animate-fade-in">Digital Branding Agency</p>
            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl text-white animate-fade-in">
              Building Brands That <span className="text-blue-500">Stand Out</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-500 sm:text-lg animate-fade-in">
              We create exceptional digital experiences that elevate your brand and drive meaningful results.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center animate-fade-in">
              <button
                onClick={() => window.location.href = "/contact"}
                className="rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105"
              >
                Start Your Brand
              </button>
              <button
                onClick={() => window.location.href = "/portfolio"}
                className="rounded-full border border-blue-500 bg-transparent px-7 py-3 text-sm font-semibold text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
              >
                View Our Work
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-in">
              {metrics.map((metric) => (
                <div key={metric.label} className="dark-card rounded-2xl p-4 text-center transition-all duration-300 hover-lift">
                  <p className="text-xl font-bold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gray-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
