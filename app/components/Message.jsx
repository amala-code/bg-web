import React, { useState, useEffect, useRef } from 'react';

export default function ScrollTextFill() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start filling when element enters viewport, finish when it exits
      let progress = 0;
      
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        // Calculate progress based on scroll position
        const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
        progress = (visibleHeight / elementHeight) * 100;
        progress = Math.max(0, Math.min(100, progress));
      } else if (elementTop + elementHeight <= 0) {
        progress = 100;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = [
    "The only way to do great work",
    "is to love what you do.",
    "Stay hungry, stay foolish,",
    "and never stop believing",
    "in the power of your dreams."
  ];

  // Calculate which lines should be filled based on scroll progress
  const getLineProgress = (index) => {
    const linePercentage = 100 / lines.length;
    const lineStart = index * linePercentage;
    const lineEnd = (index + 1) * linePercentage;
    
    if (scrollProgress >= lineEnd) return 100;
    if (scrollProgress <= lineStart) return 0;
    
    return ((scrollProgress - lineStart) / linePercentage) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-blue-900">
  

      {/* Main text container */}
      <div 
        ref={containerRef}
        className="min-h-screen flex items-center justify-center px-8 py-20"
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
          
          {/* Progress indicator */}
          <div className="mt-12">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-400 to-blue-400 transition-all duration-100"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          
          </div>
        </div>
      </div>


    </div>
  );
}