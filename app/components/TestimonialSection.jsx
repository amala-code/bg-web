
'use client';

import React, { useEffect, useRef, useState } from 'react';
import {  FiStar, FiZap, FiBarChart2, FiDatabase } from 'react-icons/fi';
import { FaPaintBrush, FaRobot } from 'react-icons/fa';
import './Testimonialcss.css';

const avatarUrls = {
  noubin: '/images/13.webp',
  janet: '/images/14.webp',
  ayline: '/images/16.webp',
  leona: '/images/15.webp',
  shiji: '/images/11.webp',
  raman: '/images/12.webp',
};

const testimonials = [
  {
    id: 'noubin',
    name: 'Noubin Boban',
    college: 'Kerala University',
    avatar: avatarUrls.noubin,
    initials: 'NB',
    title: 'From Zero to AI Hero This Course Changed Everything',
    text: "I came in knowing nothing about AI, and now I'm building production-ready GenAI applications. The instructors didn't just teach theory they showed us how to build real products. Within 3 months, I had a portfolio that got me interviews at top tech companies. The project-based learning and mentorship were game-changers.",
    course: 'GenAI Specialist',
  badge1: { icon: <FiStar className="inline mr-1" />, text: 'GenAI Specialist' },
  badge2: { icon: <FiStar className="inline mr-1" />, text: 'Top Performer' },
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 50%, #0e7490 100%)'
  },
  {
    id: 'janet',
    name: 'Janet Elsa Chack',
    college: 'St. Xavier College, Ahmedabad',
    avatar: avatarUrls.janet,
    initials: 'JC',
    title: 'Design Skills That Actually Land Jobs',
    text: "The UI/UX course transformed how I approach design problems. The hands-on projects with real clients gave me portfolio pieces that landed me three job interviews! The mentorship was incredible I learned industry standards and best practices that bootcamps just don't teach. Now I'm confidently designing products that users love.",
    course: 'UI/UX Design',
  badge1: { icon: <FaPaintBrush className="inline mr-1" />, text: 'UI/UX Expert' },
  badge2: { icon: <FiStar className="inline mr-1" />, text: 'Portfolio Winner' },
    gradient: 'linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #155e75 100%)'
  },
  {
    id: 'ayline',
    name: 'Ayline Gijo',
    college: 'Acropolis Institute',
    avatar: avatarUrls.ayline,
    initials: 'AG',
    title: 'Modern Backend Development Mastered',
    text: "GraphQL completely changed my backend development approach. The course structure was perfect theory, practice, then real-world implementation. I built an entire API from scratch during the course, and that project is now the centerpiece of my portfolio. The instructor's experience with production systems was invaluable.",
    course: 'GraphQL',
  badge1: { icon: <FiZap className="inline mr-1" />, text: 'GraphQL Pro' },
  badge2: { icon: <FiStar className="inline mr-1" />, text: 'API Builder' },
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0369a1 100%)'
  },
  {
    id: 'leona',
    name: 'Leona Joseph',
    college: 'SVVV University',
    avatar: avatarUrls.leona,
    initials: 'LJ',
    title: 'Career Transition Success Story',
    text: "The DS-ML course gave me the confidence to transition from finance to data science. The real-world datasets and capstone project were exactly what I needed. I learned everything from data cleaning to deploying ML models. Within 2 months of completing the course, I landed a data analyst role at a fintech startup!",
    course: 'Data Science & ML',
  badge1: { icon: <FiBarChart2 className="inline mr-1" />, text: 'DS Expert' },
  badge2: { icon: <FiStar className="inline mr-1" />, text: 'Career Switcher' },
    gradient: 'linear-gradient(135deg, #0f766e 0%, #0891b2 50%, #164e63 100%)'
  },
  {
    id: 'shiji',
    name: 'Shiji Sajimon',
    college: 'Chameli Devi College',
    avatar: avatarUrls.shiji,
    initials: 'SS',
    title: 'Automation Expertise Unlocked',
    text: "N8N seemed intimidating at first, but this course broke it down perfectly. Now I'm automating workflows at my internship and my manager is impressed! I've built integrations that save our team hours every week. The hands-on approach and real business scenarios made all the difference in my learning.",
    course: 'N8N Automation',
  badge1: { icon: <FaRobot className="inline mr-1" />, text: 'Automation Pro' },
  badge2: { icon: <FiStar className="inline mr-1" />, text: 'Workflow Master' },
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 50%, #155e75 100%)'
  },
    {
    id: 'raman',
    name: 'Niranjan Dixit',
    college: 'Medi-Caps Univeristy',
    avatar: avatarUrls.raman,
    initials: 'ND',
    title: 'GrapgQL DBMS',
    text: "The GraphQL DBMS course was a revelation. I went from struggling with REST APIs to confidently building efficient GraphQL servers. The practical projects and expert guidance helped me understand complex concepts easily. Now, I'm applying these skills in my projects and have even contributed to open-source GraphQL libraries!",
    course: 'GrapgQL DBMS',
  badge1: { icon: <FiDatabase className="inline mr-1" />, text: 'DBMS Pro' },
  badge2: { icon: <FiStar className="inline mr-1" />, text: 'SQL Pro' },
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 50%, #155e75 100%)'
  }
];

const TestimonialsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  // Auto-rotate hero testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentHeroIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    document.querySelectorAll('.reveal-element').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentHero = testimonials[currentHeroIndex];

  return (
    <>

      <section 
        ref={sectionRef}
        className="testimonial-section relative min-h-screen py-20 px-6 lg:py-28 lg:px-12"
      >
        {/* Soft floating gradients */}
        <div 
          className="soft-gradient"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="soft-gradient"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
            left: `${100 - mousePosition.x * 0.5}%`,
            top: `${100 - mousePosition.y * 0.5}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 reveal-element" data-delay="0">
            <div className="inline-block mb-6">
                <span className="px-5 py-2 rounded-full text-sm font-bold text-white flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)', fontFamily: 'Sora, sans-serif' }}>
                  <FiStar className="text-white" />
                  Success Stories
                </span>
            </div>
            <h1 className="heading-display">
              Real Students,
              <br />
              Real Transformations
            </h1>
            <p className="subheading max-w-2xl mx-auto">
              See how our courses helped students master in-demand skills and launch successful careers in tech
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Left Column - Cards */}
            <div className="lg:col-span-4 space-y-8">
              {/* Janet Card */}
              <button
                type="button"
                className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer text-left"
                data-delay="100"
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentHeroIndex(testimonials.findIndex(t => t.id === 'janet'));
                    setIsTransitioning(false);
                  }, 300);
                }}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="avatar-wrapper avatar-ring flex-shrink-0">
                    <img 
                      src={avatarUrls.janet}
                      alt="Janet Elsa Chack"
                      className="w-20 h-20 rounded-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="student-name text-gray-900 text-lg mb-1">Janet Elsa Chack</h3>
                    <p className="student-college text-gray-500 text-sm mb-3">St. Xavier College, Ahmedabad</p>
                    <div className="flex gap-1">
                      {['s1','s2','s3','s4','s5'].map((k) => (
                        <svg key={k} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
                  "The UI/UX course transformed how I approach design problems. The hands-on projects with real clients gave me portfolio pieces that landed me three job interviews!"
                </p>
                <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-teal-700">
                  UI/UX Design
                </span>
              </button>

              {/* Ayline Card */}
              <button 
                type="button"
                className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer text-left"
                data-delay="200"
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentHeroIndex(testimonials.findIndex(t => t.id === 'ayline'));
                    setIsTransitioning(false);
                  }, 300);
                }}
              >
                <div className="quote-mark" style={{ top: '-35px', right: '15px' }}>"</div>
                <div className="flex items-start gap-5 mb-5">
                  <div className="avatar-wrapper avatar-ring flex-shrink-0">
                    <img 
                      src={avatarUrls.ayline}
                      alt="Ayline Gijo"
                      className="w-20 h-20 rounded-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="student-name text-gray-900 text-lg mb-1">Ayline Gijo</h3>
                    <p className="student-college text-gray-500 text-sm mb-3">Acropolis Institute</p>
                    <div className="flex gap-1">
                      {['a','b','c','d','e'].map((k) => (
                        <svg key={k} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
                  "GraphQL completely changed my backend development approach. The course structure was perfect theory, practice, then real-world implementation."
                </p>
                <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-cyan-700">
                  GraphQL
                </span>
              </button>
            </div>

            {/* Center - HERO CARD */}
            <div className="lg:col-span-8 reveal-element" data-delay="150">
              <div 
                className={`hero-card rounded-3xl min-h-[600px] lg:min-h-[700px] ${isTransitioning ? 'transitioning' : ''}`}
                style={{ background: currentHero.gradient }}
              >
                <div className="hero-card-content h-full flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden rounded-tl-3xl lg:rounded-tr-none lg:rounded-bl-3xl rounded-tr-3xl h-80 lg:h-auto">
                    <img 
                      src={currentHero.avatar}
                      alt={currentHero.name}
                      className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-teal-600/70 to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 floating-badge">
                      <div className="bg-white rounded-2xl px-5 py-3 shadow-2xl">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-teal-500 pulse-dot" />
                          <span className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>VERIFIED STUDENT</span>
                        </div>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>Course Completed • 2025</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
                    <div className="quote-mark" style={{ top: '-15px', left: '-5px', color: 'rgba(255,255,255,0.15)' }}>"</div>
                    
                    {/* Stars */}
                                    <div className="flex gap-1.5 mb-6">
                                      {['s1','s2','s3','s4','s5'].map((key) => (
                                        <svg 
                                          key={key} 
                                          className="w-7 h-7 text-yellow-300 fill-yellow-300 star-icon" 
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      ))}
                                    </div>

                    <h2 className="hero-title text-3xl lg:text-4xl text-white mb-6 leading-tight">
                      {currentHero.title}
                    </h2>

                    <p className="testimonial-text text-white/90 text-base lg:text-lg leading-relaxed mb-8">
                      {currentHero.text}
                    </p>

                    {/* Student Info */}
                    <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                      <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{currentHero.initials}</span>
                      </div>
                      <div>
                        <h3 className="student-name text-2xl text-white mb-1">{currentHero.name}</h3>
                        <p className="student-college text-white/80 text-sm mb-2">{currentHero.college}</p>
                        <div className="flex gap-2">
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 flex items-center gap-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                            {currentHero.badge1.icon}
                            <span>{currentHero.badge1.text}</span>
                          </span>
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-200 border border-yellow-400/40 flex items-center gap-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                            {currentHero.badge2.icon}
                            <span>{currentHero.badge2.text}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Indicators */}
              <div className="progress-indicators">
                {testimonials.map((t, index) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Show ${t.name} testimonial`}
                    className={`progress-dot ${index === currentHeroIndex ? 'active' : ''}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentHeroIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Leona Card */}
            <button 
              type="button"
              className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer text-left" 
              data-delay="300"
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentHeroIndex(testimonials.findIndex(t => t.id === 'leona'));
                  setIsTransitioning(false);
                }, 300);
              }}
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="avatar-wrapper avatar-ring flex-shrink-0">
                  <img 
                    src={avatarUrls.leona}
                    alt="Leona Joseph"
                    className="w-20 h-20 rounded-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="student-name text-gray-900 text-lg mb-1">Leona Joseph</h3>
                  <p className="student-college text-gray-500 text-sm mb-3">SVVV University</p>
                  <div className="flex gap-1">
                    {['a','b','c','d','e'].map((k) => (
                      <svg key={k} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="text-gray-900 font-bold text-base mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>A Career-Defining Experience</h4>
              <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
                "The DS-ML course gave me the confidence to transition from finance to data science. The real-world datasets and capstone project were exactly what I needed."
              </p>
              <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-teal-700">
                Data Science & ML
              </span>
            </button>

            {/* Shiji Card */}
            <button 
              type="button"
              className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer text-left" 
              data-delay="350"
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentHeroIndex(testimonials.findIndex(t => t.id === 'shiji'));
                  setIsTransitioning(false);
                }, 300);
              }}
            >
              <div className="quote-mark" style={{ top: '-30px', right: '20px', fontSize: '5rem' }}>"</div>
              <div className="flex items-start gap-5 mb-5">
                <div className="avatar-wrapper avatar-ring flex-shrink-0">
                  <img 
                    src={avatarUrls.shiji}
                    alt="Shiji Sajimon"
                    className="w-20 h-20 rounded-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="student-name text-gray-900 text-lg mb-1">Shiji Sajimon</h3>
                  <p className="student-college text-gray-500 text-sm mb-3">Chameli Devi College</p>
                  <div className="flex gap-1">
                    {['a','b','c','d','e'].map((k) => (
                      <svg key={k} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="text-gray-900 font-bold text-base mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>Automation Mastery Unlocked</h4>
              <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
                "N8N seemed intimidating at first, but this course broke it down perfectly. Now I'm automating workflows at my internship and my manager is impressed!"
              </p>
              <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-cyan-700">
                N8N Automation
              </span>
            </button>

            {/* Stats Card */}
            <div className="testimonial-card rounded-2xl p-8 reveal-element flex flex-col items-center justify-center text-center" data-delay="400">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>500+</h3>
              <p className="text-gray-700 text-lg font-semibold mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>Students Transformed</p>
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                <span className="course-badge px-3 py-2 rounded-full text-sm text-teal-700">GenAI</span>
                <span className="course-badge px-3 py-2 rounded-full text-sm text-teal-700">DS-ML</span>
                <span className="course-badge px-3 py-2 rounded-full text-sm text-cyan-700">GraphQL</span>
                <span className="course-badge px-3 py-2 rounded-full text-sm text-cyan-700">N8N</span>
                <span className="course-badge px-3 py-2 rounded-full text-sm text-teal-700">UI/UX</span>
              </div>
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>Join the next generation of tech leaders</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;