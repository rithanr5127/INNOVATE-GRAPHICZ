import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="panel-shadow glass-card w-full max-w-lg rounded-3xl p-8 text-center sm:p-10">
        <p className="section-kicker mb-4">Route Not Found</p>
        <h1 className="mb-3 text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-muted-foreground">The requested page is unavailable or has moved.</p>
        <a href="/" className="inline-flex rounded-full brand-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
