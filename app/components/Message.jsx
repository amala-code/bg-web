import React, { useState, useEffect, useRef } from 'react';
// import scr from "../images/scr.jpeg";


export default function AboutScrollReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      let progress = 0;
      
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
        progress = (visibleHeight / elementHeight) * 100;
        progress = Math.max(0, Math.min(100, progress));
      } else if (elementTop + elementHeight <= 0) {
        progress = 100;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = [
    "We believe in creating",
    "experiences that inspire,",
    "innovations that matter,",
    "and connections that last.",
    "Explore our story below."
  ];

  const getLineProgress = (index) => {
    const linePercentage = 100 / lines.length;
    const lineStart = index * linePercentage;
    const lineEnd = (index + 1) * linePercentage;
    
    if (scrollProgress >= lineEnd) return 100;
    if (scrollProgress <= lineStart) return 0;
    
    return ((scrollProgress - lineStart) / linePercentage) * 100;
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-900 via-teal-800 to-blue-900">
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
    backgroundImage: `url("/images/scr.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
  {/* Header */}
  <div className="fixed top-0 left-0 right-0 z-10 px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-teal-300"></h1>
      </div>

      {/* Main text container */}
      <div 
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center px-8 py-20 z-10"
      >
        <div className="max-w-4xl w-full">
          <div className="space-y-4">
            {lines.map((line, index) => {
              const progress = getLineProgress(index);
              
              return (
                <div key={index} className="relative">
                  {/* Background text (gray) */}
                  <div className="text-4xl md:text-6xl font-bold text-gray-500">
                    {line}
                  </div>
                  
                  {/* Foreground text (colored) with clip path */}
                  <div 
                    className="absolute top-0 left-0 text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent overflow-hidden transition-all duration-300"
                    style={{
                      clipPath: `inset(0 ${100 - progress}% 0 0)`
                    }}
                  >
                    {line}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Progress indicator with CTA */}
          <div className="mt-12">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-400 to-blue-400 transition-all duration-100"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            
            <div className="mt-8 text-center animate-fade-in">
                <p className="text-teal-300 text-lg mb-4">Ready to learn more?</p>
                <a href="/about" className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full transition-all transform hover:scale-105">
                  Explore Our Story
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}