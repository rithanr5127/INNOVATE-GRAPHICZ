import { useState } from "react";

const LogoMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    { name: "KPRCAS", src: "/brand/kprcas_logo_gold.png" },
    { name: "CITE", src: "/brand/CITE LOGO.png" },
    { name: "INNOVATRIX", src: "/brand/INNOVATRIX LOGO Org.png" },
    { name: "AIML DEP", src: "/brand/AIML DEP LOGO ORG.png" },
    { name: "NIMBUZ", src: "/brand/nimbuz logo.png" },
    { name: "VIRAFLY", src: "/brand/VIRAFLY LOGO.png" },
    { name: "AJ COLLECTION", src: "/brand/AJ COLLECTION FINAL LOGO.svg" },
  ];

  // Duplicate logos for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="enterprise-shell">
        <div className="text-center mb-16">
          <p className="section-kicker mb-4">Our Clients</p>
          <h2 className="section-title">Trusted by Brands</h2>
        </div>

        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex gap-24 whitespace-nowrap ${isPaused ? '' : 'animate-marquee'}`}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center h-32 w-48 opacity-60 transition-opacity duration-300 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-24 max-w-40 object-contain"
                  onError={(e) => {
                    // Fallback to text if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden text-xl font-semibold text-white">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;
