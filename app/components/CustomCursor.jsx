'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports mouse
    const hasMouseSupport = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouseSupport) return;

    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full pointer-events-none z-[300] mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Trailing cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-400/50 rounded-full pointer-events-none z-[299]"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Outer glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full pointer-events-none z-[298] blur-sm"
        style={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0.3 : 0.6,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </>
  );
}