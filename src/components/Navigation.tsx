import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { isCurrentUserAdmin } from "../firebase/auth";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();
  
  // Check if current user is an authorized admin
  const isAuthorizedAdmin = isAuthenticated && isCurrentUserAdmin();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
    >
      <div className="enterprise-shell flex items-center justify-between py-3.5 sm:py-4">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
          <img 
            src="/IG Logo.png" 
            alt="Innovate Graphicz Logo" 
            className="h-8 w-auto transition-all duration-300 group-hover:scale-110"
          />
        </button>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="group relative text-sm font-medium text-gray-500 transition-all duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Admin Login Button */}
          <div className="hidden md:block">
            {isAuthorizedAdmin ? (
              <button
                onClick={() => window.location.href = "/admin/dashboard"}
                className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:border-blue-500 hover:text-white"
              >
                <User className="w-4 h-4" />
                Admin
              </button>
            ) : (
              <button
                onClick={() => window.location.href = "/admin/login"}
                className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:border-blue-500 hover:text-white"
              >
                <User className="w-4 h-4" />
                Admin Login
              </button>
            )}
          </div>

          <button
            className="hidden rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 lg:inline-flex"
            onClick={() => scrollTo("#contact")}
          >
            Start Your Brand
          </button>

          <button
            className="rounded-lg border border-gray-700 p-2 text-white transition-all duration-300 hover:border-blue-500 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="animate-fade-in bg-black border-t border-gray-800 md:hidden">
          <div className="enterprise-shell grid gap-2 py-4">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="w-full rounded-lg border border-transparent px-3 py-2 text-left text-sm font-medium text-gray-500 transition-all duration-300 hover:border-blue-500 hover:bg-gray-900 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Admin Login Button */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = isAuthorizedAdmin ? "/admin/dashboard" : "/admin/login";
              }}
              className="w-full rounded-lg border border-gray-700 px-3 py-2 text-left text-sm font-medium text-gray-400 transition-all duration-300 hover:border-blue-500 hover:bg-gray-900 hover:text-white"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {isAuthorizedAdmin ? "Admin Dashboard" : "Admin Login"}
              </div>
            </button>
            
            <button
              className="mt-2 w-full rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105"
              onClick={() => scrollTo("#contact")}
            >
              Start Your Brand
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
