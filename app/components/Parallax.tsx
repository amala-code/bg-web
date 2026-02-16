
// FILE: components/ScrollFreezeText.tsx


import React, { useState, useEffect, useRef } from 'react';

interface ScrollFreezeTextProps {
  text: string;
  triggerPoint?: number;
  wordDelay?: number;
}

export default function ScrollFreezeText({ 
  text, 
  triggerPoint = 300, 
  wordDelay = 300 
}: ScrollFreezeTextProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const animationStarted = useRef(false);

  const words = text.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > triggerPoint && !animationStarted.current && !isAnimating) {
        setIsAnimating(true);
        animationStarted.current = true;
        
        // Freeze scroll
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        
        // Animate words one by one
        let wordIndex = 0;
        const interval = setInterval(() => {
          wordIndex++;
          setVisibleWords(wordIndex);
          
          if (wordIndex >= words.length) {
            clearInterval(interval);
            setTimeout(() => {
              setIsAnimating(false);
              // Unfreeze scroll
              document.body.style.overflow = 'auto';
              document.body.style.height = 'auto';
            }, 500);
          }
        }, wordDelay);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [isAnimating, words.length, triggerPoint, wordDelay]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        isAnimating ? 'fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900' : 'relative'
      }`}
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-4xl md:text-6xl font-bold text-white leading-tight text-center">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mx-2 transition-all duration-500 ${
                index < visibleWords
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {word}
            </span>
          ))}
        </div>
        
        {visibleWords >= words.length && (
          <div className="text-center mt-8 text-white text-xl opacity-0 animate-fade-in">
            Continue scrolling...
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
