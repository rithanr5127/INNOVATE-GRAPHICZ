import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechStart India",
    text: "Innovate Graphicz transformed our digital presence completely. Their strategic approach and creative execution exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=400&h=400&fit=crop",
  },
  {
    name: "Raj Patel",
    role: "Founder, Creative Agency",
    text: "Working with Innovate Graphicz was a game-changer for our brand. They delivered exceptional results within tight deadlines.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Anjali Reddy",
    role: "Marketing Director, StartupHub",
    text: "The team's expertise in both design and technology helped us achieve our growth targets ahead of schedule.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="enterprise-section relative">
      <div className="enterprise-shell max-w-5xl">
        <div className="mb-12 text-center">
          <p className="section-kicker mb-4">Client Outcomes</p>
          <h2 className="section-title">
            Trusted By <span className="text-blue-500">Leadership Teams</span>
          </h2>
        </div>

        <div className="dark-card relative grid overflow-hidden rounded-3xl lg:grid-cols-[1.1fr_0.9fr] border border-gray-800 transition-all duration-300">
          <div className="p-6 text-center sm:p-10 lg:p-12">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
              ))}
            </div>
            <p className="mb-8 text-lg leading-relaxed text-gray-300 sm:text-xl">
              "{t.text}"
            </p>
            <p className="text-blue-500 text-lg font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-500 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-500 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-blue-500" : "w-2.5 bg-gray-700 hover:bg-blue-500/50"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img
              src={t.image}
              alt={t.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 dark-card rounded-2xl p-4 border border-gray-700 transition-all duration-300">
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gray-500">{t.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
