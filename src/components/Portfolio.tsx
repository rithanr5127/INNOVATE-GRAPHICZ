import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Creative Agency", category: "Brand Building", image: "..." },
  { title: "Tech Startup", category: "Website Development", image: "..." },
  { title: "E-commerce Platform", category: "Tech Solutions", image: "..." },
  { title: "Marketing Campaign", category: "Growth Marketing", image: "..." },
  { title: "Brand Identity", category: "Creative Studio", image: "..." },
  { title: "Performance Analytics", category: "Performance Boost", image: "..." },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="enterprise-section relative">
      <div className="enterprise-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-kicker mb-4">Selected Programs</p>
          <h2 className="section-title">
            Case Studies With <span className="text-blue-500">Business Impact</span>
          </h2>
          <p className="mt-4 text-gray-500">
            A portfolio of launches that improved conversions, strengthened brand recognition, and accelerated digital delivery.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 transition-all duration-500 hover:scale-105 hover:border-blue-500"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black via-black/70 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="w-full">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-500">{project.category}</p>
                  <h3 className="text-base font-semibold text-white group-hover:text-blue-500 transition-colors duration-300">{project.title}</h3>
                  <div className="mt-3 flex items-center gap-1 text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                    <span className="text-xs font-medium">View Project</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
