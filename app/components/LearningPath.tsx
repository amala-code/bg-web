"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./ScrollAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!textRef.current || !svgRef.current) return;

    // Get the text content and create paths
    const text = textRef.current.textContent || "Transform Your Learning Journey";
    const paths = svgRef.current.querySelectorAll("path");

    // Animate text fill on scroll
    paths.forEach((path: any) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1.5,
          markers: false,
        },
      });
    });

    // Parallax effect on background
    gsap.to(".scroll-bg", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      {/* Animated Background */}
      <div className="scroll-bg absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        <div className="text-center max-w-4xl">
          {/* SVG Text Animation */}
          <svg
            ref={svgRef}
            width="100%"
            height="300"
            viewBox="0 0 1200 300"
            className="mb-8"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-6xl md:text-7xl font-bold"
              fill="none"
              stroke="url(#textGradient)"
              strokeWidth="2"
              letterSpacing="0.05em"
            >
              Transform Your Learning
            </text>
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-5xl md:text-6xl font-bold"
              fill="none"
              stroke="url(#textGradient)"
              strokeWidth="2"
              letterSpacing="0.05em"
            >
              Journey Today
            </text>
          </svg>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-gray-300 text-lg font-medium tracking-widest uppercase">Scroll to explore</p>
            <div className="flex flex-col gap-2 items-center">
              <svg className="w-6 h-6 text-blue-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ScrollAnimation;