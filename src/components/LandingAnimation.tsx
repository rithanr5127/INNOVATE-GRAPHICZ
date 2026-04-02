import React, { useState, useEffect } from 'react';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation: React.FC<LandingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5000); // 5 seconds

    const phaseTimer = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 1200); // Change phase every 1.2 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(phaseTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Rotating Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute inset-8 rounded-full border border-blue-500/40 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Logo Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo with Effects */}
        <div className={`relative transition-all duration-1000 ease-out ${
          animationPhase === 0 ? 'scale-100 opacity-100' : 
          animationPhase === 1 ? 'scale-110 opacity-90' : 
          animationPhase === 2 ? 'scale-105 opacity-95' : 
          'scale-95 opacity-85'
        }`}>
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-60" />
          
          {/* Logo */}
          <img
            src="/IG Logo.png"
            alt="INNOVATE GRAPHICZ"
            className="relative w-48 h-48 object-contain z-10 transition-transform duration-1000"
            style={{
              transform: animationPhase === 1 ? 'rotate(5deg) scale(1.1)' : 
                     animationPhase === 2 ? 'rotate(-3deg) scale(1.05)' : 
                     animationPhase === 3 ? 'rotate(2deg) scale(0.95)' : 
                     'rotate(0deg) scale(1)'
            }}
          />
          
          {/* Particle Burst */}
          {animationPhase === 1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-particle-burst"
                  style={{
                    top: '50%',
                    left: '50%',
                    '--rotation': `${i * 45}deg`
                  } as React.CSSProperties}
                />
              ))}
            </div>
          )}
        </div>

        {/* Text Animation */}
        <div className={`mt-8 text-center transition-all duration-1000 ${
          animationPhase === 0 ? 'opacity-0 translate-y-4' :
          animationPhase === 1 ? 'opacity-50 translate-y-2' :
          animationPhase === 2 ? 'opacity-100 translate-y-0' :
          'opacity-75 translate-y-1'
        }`}>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
            INNOVATE
          </h1>
          <p className="text-xl text-blue-400 font-light tracking-wide">
            GRAPHICZ
          </p>
          <div className={`mt-4 transition-all duration-1000 ${
            animationPhase === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <p className="text-sm text-gray-400 italic">
              Digital Branding Agency
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-5000 ease-linear"
              style={{ width: '0%', animation: 'progress 5s ease-out forwards' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAnimation;
