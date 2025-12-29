'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Floating Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center z-50 shadow-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 10 ? 1 : 0, 
          scale: scrollProgress > 10 ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-10 h-10 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-gray-300"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={283}
            strokeDashoffset={283 - (283 * scrollProgress) / 100}
            className="text-blue-500"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xs font-bold text-blue-600">
          {Math.round(scrollProgress)}%
        </span>
      </motion.div>
      
      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-24 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center z-50 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 20 ? 1 : 0, 
          scale: scrollProgress > 20 ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </>
  );
}