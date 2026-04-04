import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingAnimation from "./components/LandingAnimation";

// Initialize Firebase with error handling
import { app } from './firebase/config';

const queryClient = new QueryClient();

const App = () => {
  const [showLanding, setShowLanding] = useState(false); // Disabled for production
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Test Firebase connection
    try {
      if (!app) {
        throw new Error('Firebase app not initialized');
      }
      console.log('Firebase initialized successfully');
      setFirebaseError(null);
    } catch (error) {
      console.error('Firebase initialization error:', error);
      setFirebaseError('Firebase connection failed');
    } finally {
      setIsLoading(false);
    }

    // Check if user has already seen the landing animation
    const hasSeenLanding = sessionStorage.getItem('hasSeenLanding');
    if (hasSeenLanding) {
      setShowLanding(false);
    }
  }, []);

  const handleLandingComplete = () => {
    setShowLanding(false);
    sessionStorage.setItem('hasSeenLanding', 'true');
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Show Firebase error if connection fails
  if (firebaseError) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h1 className="text-white text-xl mb-2">Connection Error</h1>
          <p className="text-gray-400">{firebaseError}</p>
          <p className="text-gray-500 text-sm mt-2">Please check your Firebase configuration</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {showLanding ? (
          <LandingAnimation onComplete={handleLandingComplete} />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
