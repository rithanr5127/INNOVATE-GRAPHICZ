import React, { useState } from "react";
import { Users, Target, Award, Heart, ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Creative Director",
    role: "Brand Strategy & Design",
    image: "/team/IGZ2601.jpg",
    description: "Leading creative vision and brand strategy for innovative digital experiences.",
    social: {
      email: "creative@innovategraphicz.com",
      linkedin: "#",
      twitter: "#"
    },
    expertise: ["Brand Design", "Creative Strategy", "UI/UX"],
    icon: <Award className="w-5 h-5" />
  },
  {
    id: 2,
    name: "Tech Lead",
    role: "Full-Stack Development",
    image: "/team/IGZ2602.jpg",
    description: "Architecting scalable web solutions and cutting-edge development practices.",
    social: {
      email: "tech@innovategraphicz.com",
      linkedin: "#",
      twitter: "#"
    },
    expertise: ["React", "Node.js", "Cloud Architecture"],
    icon: <Target className="w-5 h-5" />
  },
  {
    id: 3,
    name: "Marketing Strategist",
    role: "Digital Marketing & Growth",
    image: "/team/IGZ2603.jpg",
    description: "Driving growth through data-driven marketing strategies and campaigns.",
    social: {
      email: "marketing@innovategraphicz.com",
      linkedin: "#",
      twitter: "#"
    },
    expertise: ["SEO/SEM", "Content Strategy", "Analytics"],
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 4,
    name: "Client Success",
    role: "Project Management & Support",
    image: "/team/IGZ2604.jpg",
    description: "Ensuring exceptional client experiences and successful project delivery.",
    social: {
      email: "success@innovategraphicz.com",
      linkedin: "#",
      twitter: "#"
    },
    expertise: ["Project Management", "Client Relations", "Quality Assurance"],
    icon: <Heart className="w-5 h-5" />
  }
];

const Portfolio = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Auto-rotation effect
  React.useEffect(() => {
    if (selectedMember === null) {
      const interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 1) % 360);
      }, 50); // Smooth rotation
      return () => clearInterval(interval);
    }
  }, [selectedMember]);

  return (
    <section id="portfolio" className="enterprise-section relative">
      <div className="enterprise-shell">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="section-kicker mb-4">Meet Our Team</p>
          <h2 className="section-title mb-6">
            The Creative Minds <span className="text-blue-500">Behind INNOVATE GRAPHICZ</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our diverse team of creative professionals brings together expertise in design, development, 
            marketing, and client success to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Mobile Layout - Only Once */}
          <div className="md:hidden lg:hidden col-span-full">
            {/* Mobile Container with Circular Animation */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
              {/* Single Auto-Rotating Carousel */}
              <div className="relative w-full h-full max-w-sm">
                {teamMembers.map((teamMember, teamIndex) => {
                  // Calculate circular position with auto-rotation
                  const baseAngle = (teamIndex * 90); // 0°, 90°, 180°, 270°
                  const currentAngle = baseAngle + rotationAngle;
                  const radius = selectedMember === teamMember.id ? 60 : 120;
                  const x = Math.cos((currentAngle * Math.PI) / 180) * radius;
                  const y = Math.sin((currentAngle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={teamMember.id}
                      className={`absolute top-1/2 left-1/2 transition-all duration-100 ease-out cursor-pointer ${
                        selectedMember === teamMember.id 
                          ? 'z-20 scale-125' 
                          : hoveredMember === teamMember.id
                          ? 'z-10 scale-110'
                          : 'z-0 scale-90'
                      }`}
                      style={{
                        transform: `
                          translate(-50%, -50%) 
                          translate(${x}px, ${y}px)
                          ${selectedMember === teamMember.id ? 'rotate(0deg)' : 'rotate(' + currentAngle + 'deg)'}
                          scale(${selectedMember === teamMember.id ? 1.25 : hoveredMember === teamMember.id ? 1.1 : 0.9})
                        `,
                        opacity: selectedMember === teamMember.id ? 1 : hoveredMember === teamMember.id ? 0.9 : 0.7,
                        filter: selectedMember === teamMember.id ? 'brightness(1.2)' : 'brightness(0.8)'
                      }}
                      onMouseEnter={() => {
                        setHoveredMember(teamMember.id);
                        // Pause rotation on hover
                        if (selectedMember === null) {
                          setRotationAngle(prev => prev);
                        }
                      }}
                      onMouseLeave={() => setHoveredMember(null)}
                      onClick={() => setSelectedMember(selectedMember === teamMember.id ? null : teamMember.id)}
                    >
                      {/* Card Container */}
                      <div className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                        selectedMember === teamMember.id 
                          ? 'border-blue-500 shadow-2xl shadow-blue-500/40' 
                          : hoveredMember === teamMember.id
                          ? 'border-blue-400 shadow-xl shadow-blue-400/30'
                          : 'border-gray-800'
                      }`}>
                        {/* Image Container */}
                        <div className="relative aspect-[3/4] w-32 h-40 overflow-hidden">
                          <img
                            src={teamMember.image}
                            alt={teamMember.name}
                            className={`h-full w-full object-cover transition-all duration-300 ${
                              selectedMember === teamMember.id ? 'scale-110' : 'scale-100'
                            }`}
                            loading="lazy"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
                            selectedMember === teamMember.id ? 'opacity-90' : 'opacity-70'
                          }`} />
                          
                          {/* Icon Badge */}
                          <div className={`absolute top-2 right-2 rounded-full bg-blue-500/20 backdrop-blur-sm p-1.5 transition-all duration-300 ${
                            selectedMember === teamMember.id ? 'scale-125 bg-blue-500/40' : 'scale-100'
                          }`}>
                            <div className="text-blue-500">
                              {React.cloneElement(teamMember.icon as React.ReactElement, { className: "w-3 h-3" })}
                            </div>
                          </div>
                        </div>

                        {/* View Indicator */}
                        <div className={`absolute bottom-1 left-1 right-1 flex justify-center transition-all duration-300 ${
                          selectedMember === teamMember.id ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="flex items-center gap-1 text-blue-500 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                            <span className="text-[10px] font-medium">
                              {selectedMember === teamMember.id ? 'Close' : 'View'}
                            </span>
                            <ArrowRight className="w-2 h-2" />
                          </div>
                        </div>
                      </div>

                      {/* Floating Animation for Mobile */}
                      <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-xl transition-all duration-300 ${
                        hoveredMember === teamMember.id ? 'opacity-100 scale-125' : 'opacity-0 scale-100'
                      }`} />
                    </div>
                  );
                })}
                
                {/* Center Indicator */}
                {selectedMember === null && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-500" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Orbital Path Indicator */}
                {selectedMember === null && (
                  <div className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed pointer-events-none" />
                )}
              </div>

              {/* Mobile Instructions */}
              {selectedMember === null && (
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-xs text-gray-400 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                    IG FAMILY
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Desktop/Tablet Layout */}
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="hidden md:block lg:block group relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              {/* Card Container */}
              <div className={`relative overflow-hidden rounded-3xl border transition-all duration-500 cursor-pointer ${
                selectedMember === member.id 
                  ? 'border-blue-500 scale-105 shadow-2xl shadow-blue-500/20' 
                  : hoveredMember === member.id
                  ? 'border-blue-400 scale-102 shadow-xl shadow-blue-400/10'
                  : 'border-gray-800 hover:border-gray-700'
              }`}>
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      selectedMember === member.id ? 'scale-110' : 'scale-100 group-hover:scale-105'
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
                    selectedMember === member.id ? 'opacity-90' : 'opacity-70'
                  }`} />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 rounded-full bg-blue-500/20 backdrop-blur-sm p-3 transition-all duration-500 ${
                    selectedMember === member.id ? 'scale-110 bg-blue-500/30' : 'scale-100'
                  }`}>
                    <div className="text-blue-500">
                      {member.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Expand Indicator */}
                  <div className={`flex items-center justify-center transition-all duration-500 ${
                    selectedMember === member.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`flex items-center gap-2 text-blue-500 transition-all duration-300 ${
                      selectedMember === member.id ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <span className="text-xs font-medium">
                        {selectedMember === member.id ? 'Close' : 'View'}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Animation */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl transition-all duration-700 ${
                hoveredMember === member.id ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`} />
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {[
            { label: "Team Members", value: "4+", icon: <Users className="w-5 h-5" /> },
            { label: "Projects Delivered", value: "5+", icon: <Target className="w-5 h-5" /> },
            { label: "Months Experience", value: "3+", icon: <Award className="w-5 h-5" /> },
            { label: "Client Satisfaction", value: "100%", icon: <Heart className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="dark-card rounded-2xl p-6 text-center border border-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-500"
            >
              <div className="flex justify-center mb-3 text-blue-500">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="dark-card rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work With Our <span className="text-blue-500">Amazing Team?</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Our team is ready to bring your vision to life with creativity, expertise, and dedication. 
              Let's create something extraordinary together.
            </p>
            <button
              onClick={() => window.location.href = "/contact"}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
