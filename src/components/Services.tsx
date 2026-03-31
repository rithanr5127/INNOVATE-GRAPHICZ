import { Palette, Globe, ArrowRight } from "lucide-react";

const services = [
  { 
    icon: Palette, 
    title: "Brand Building", 
    desc: "We craft powerful brand identities that make your business stand out and connect with your audience.",
    features: ["Logo Design", "Brand Identity", "Brand Strategy", "Visual Guidelines", "Social Media Branding"]
  },
  { 
    icon: Globe, 
    title: "Website Development", 
    desc: "We design and develop modern, high-performing websites that convert visitors into customers.",
    features: ["Custom Website Design", "Responsive Development", "Performance Optimization", "UI/UX Design", "SEO Optimization"]
  },
];

const Services = () => {
  return (
    <section id="services" className="enterprise-section relative">
      <div className="enterprise-shell">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="section-kicker mb-4">Our Core Services</p>
          <h2 className="section-title mb-6">
            Premium Solutions For <span className="text-blue-500">Modern Brands</span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything your brand needs — built through two powerful services.
          </p>
        </div>
        
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="dark-card group rounded-3xl p-8 lg:p-12 border border-gray-800 transition-all duration-300 hover:border-blue-500 hover:scale-105 hover-lift"
              >
                {/* Icon Section */}
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-500">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {service.desc}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="mb-8 space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-base text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="flex items-center gap-2 text-base font-semibold text-blue-500 transition-colors duration-300 group-hover:text-blue-400">
                  Get Started 
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
