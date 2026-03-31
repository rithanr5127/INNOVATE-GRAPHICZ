const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="enterprise-shell">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img 
              src="/IG Logo.png" 
              alt="Innovate Graphicz Logo" 
              className="h-8 w-auto transition-all duration-300 hover:scale-110"
            />
          </div>

          <p className="text-xs text-gray-500">
            © 2025 Innovate Graphicz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
