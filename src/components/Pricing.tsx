import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Trial Package",
    price: "₹999",
    desc: "For new businesses and startups",
    features: ["Brand Strategy", "7 days valid", "Social Media Setup", "Ad Management", "Creative content creation", "And many more..."],
    highlighted: false,
  },
  {
    name: "Growth Package",
    price: "₹5,999",
    desc: "For growing businesses",
    features: ["Brand Strategy", "30 days valid", "Social Media Management", "8 Creative Posts", "1 Basic cut video edit", "And many more..."],
    highlighted: false,
  },
  {
    name: "Premium Package",
    price: "₹9,999",
    desc: "For growing businesses",
    features: ["Everything in Growth Package", "Ad Management for 1 video", "24/7 Engagement support", "MSME Registration Support", "Marketing support", "And many more..."],
    highlighted: false,
  },
  {
    name: "Portfolio web design",
    price: "₹5,999",
    desc: "Static web pages starts from",
    features: ["Responsive web design", "Domain support [.in, .com, .tech, etc...]", "1 year maintanence support", "3 revision / year", "Extra changes will be charged", "Year renewal Available", "Domain Renewal will be charged separately"],
    highlighted: false,
  },
  {
    name: "E-commerce / business web design",
    price: "₹14,999",
    desc: "Dynamic web designs starts from",
    features: ["Dynamic & Responsive web design", "Domain + Hosting support", "1 year Maintenance support", "5 revisions / year", "Extra changes will be charged", "Year renewal Available", "Domain Renewal will be charged separately"],
    highlighted: false,
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    desc: "For all businesses",
    features: ["Connect to discuss about pricing and services"],
    highlighted: true,
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handleChoosePlan = () => {
    navigate('/contact');
  };

  return (
    <section id="pricing" className="enterprise-section relative">
      <div className="enterprise-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-kicker mb-4">Commercial Models & Development Models</p>
          <h2 className="section-title">
            Flexible Plans For <span className="text-blue-500">Any Growth Stage</span>
          </h2>
          <p className="mt-4 text-gray-500">Transparent pricing with clear scope, structured governance, and dedicated support tiers.</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`dark-card rounded-3xl border p-6 transition-all duration-300 sm:p-8 hover-lift ${
                plan.highlighted
                  ? "border-blue-500 md:scale-[1.03]"
                  : "border-gray-800"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-5 inline-block rounded-full bg-blue-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                    Most Popular
                </div>
              )}
              <h3 className="mb-1 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-500">{plan.name}</h3>
              <p className="mb-6 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-blue-500 text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm text-gray-500">/project</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-400">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleChoosePlan}
                className={`w-full rounded-full py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.highlighted
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "border border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Pricing;
