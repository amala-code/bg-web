
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';

// const avatarUrls = {
//   noubin: '/images/12.jpeg',
//   janet: '/images/15.jpeg',
//   ayline: '/images/13.jpeg',
//   leona: '/images/16.jpeg',
//   shiji: '/images/11.jpeg'
// };

// const TestimonialsSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: ((e.clientX - rect.left) / rect.width) * 100,
//           y: ((e.clientY - rect.top) / rect.height) * 100
//         });
//       }
//     };

//     const section = sectionRef.current;
//     if (section) {
//       section.addEventListener('mousemove', handleMouseMove);
//       return () => section.removeEventListener('mousemove', handleMouseMove);
//     }
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const el = entry.target;
//             const delay = el.dataset.delay || 0;
//             setTimeout(() => {
//               el.classList.add('revealed');
//             }, delay);
//             observer.unobserve(el);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
//     );

//     document.querySelectorAll('.reveal-element').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

//         .testimonial-section {
//           font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
//           background: #ffffff;
//           position: relative;
//           overflow: hidden;
//         }

//         .soft-gradient {
//           position: absolute;
//           width: 600px;
//           height: 600px;
//           border-radius: 50%;
//           pointer-events: none;
//           transition: transform 0.5s ease-out;
//           opacity: 0.3;
//         }

//         .heading-display {
//           font-family: 'Sora', sans-serif;
//           font-weight: 800;
//           font-size: clamp(2.5rem, 7vw, 4.5rem);
//           line-height: 1.1;
//           letter-spacing: -0.02em;
//           color: #1e40af;
//           margin-bottom: 1rem;
//         }

//         .subheading {
//           font-family: 'Sora', sans-serif;
//           font-size: clamp(1rem, 2vw, 1.2rem);
//           color: #475569;
//           font-weight: 500;
//           letter-spacing: -0.01em;
//         }

//         .reveal-element {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }

//         .reveal-element.revealed {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .hero-card {
//           background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0ea5e9 100%);
//           position: relative;
//           overflow: hidden;
//           box-shadow: 
//             0 20px 60px rgba(20, 184, 166, 0.25),
//             0 0 0 1px rgba(255, 255, 255, 0.1) inset;
//           transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }

//         .hero-card::before {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent, rgba(20, 184, 166, 0.2));
//           border-radius: 1.5rem;
//           z-index: 0;
//           opacity: 0;
//           transition: opacity 0.5s ease;
//         }

//         .hero-card:hover::before {
//           opacity: 1;
//         }

//         .hero-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 
//             0 30px 80px rgba(20, 184, 166, 0.3),
//             0 0 0 1px rgba(255, 255, 255, 0.2) inset;
//         }

//         .hero-card-content {
//           position: relative;
//           z-index: 1;
//         }

//         .testimonial-card {
//           background: #ffffff;
//           border: 1.5px solid #e2e8f0;
//           transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           position: relative;
//           overflow: hidden;
//         }

//         .testimonial-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.04), transparent);
//           transition: left 0.7s ease;
//         }

//         .testimonial-card:hover::before {
//           left: 100%;
//         }

//         .testimonial-card:hover {
//           transform: translateY(-6px);
//           border-color: #cbd5e1;
//           box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
//         }

//         .star-icon {
//           filter: drop-shadow(0 1px 3px rgba(250, 204, 21, 0.3));
//           animation: twinkle 3s ease-in-out infinite;
//         }

//         @keyframes twinkle {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }

//         .star-icon:nth-child(2) { animation-delay: 0.2s; }
//         .star-icon:nth-child(3) { animation-delay: 0.4s; }
//         .star-icon:nth-child(4) { animation-delay: 0.6s; }
//         .star-icon:nth-child(5) { animation-delay: 0.8s; }

//         .quote-mark {
//           font-family: 'Sora', sans-serif;
//           font-weight: 300;
//           font-size: 6rem;
//           line-height: 1;
//           color: #e2e8f0;
//           position: absolute;
//           user-select: none;
//           opacity: 0.5;
//         }

//         .avatar-wrapper {
//           position: relative;
//           animation: float-gentle 4s ease-in-out infinite;
//         }

//         @keyframes float-gentle {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-5px); }
//         }

//         .avatar-ring {
//           position: relative;
//         }

//         .avatar-ring::before {
//           content: '';
//           position: absolute;
//           inset: -4px;
//           background: linear-gradient(135deg, #14b8a6, #06b6d4, #0ea5e9, #14b8a6);
//           border-radius: 50%;
//           z-index: -1;
//           animation: rotate-slow 8s linear infinite;
//         }

//         @keyframes rotate-slow {
//           to { transform: rotate(360deg); }
//         }

//         .course-badge {
//           background: rgba(20, 184, 166, 0.08);
//           border: 1px solid rgba(20, 184, 166, 0.15);
//           transition: all 0.3s ease;
//           font-family: 'Sora', sans-serif;
//           font-weight: 600;
//         }

//         .course-badge:hover {
//           background: rgba(20, 184, 166, 0.12);
//           border-color: rgba(20, 184, 166, 0.25);
//           transform: translateY(-1px);
//         }

//         .floating-badge {
//           animation: float-badge 3s ease-in-out infinite;
//         }

//         @keyframes float-badge {
//           0%, 100% { transform: translateY(0px) rotate(-2deg); }
//           50% { transform: translateY(-10px) rotate(2deg); }
//         }

//         .pulse-dot {
//           animation: pulse-grow 2s ease-in-out infinite;
//         }

//         @keyframes pulse-grow {
//           0%, 100% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.2); opacity: 0.8; }
//         }

//         .student-name {
//           font-family: 'Sora', sans-serif;
//           font-weight: 700;
//         }

//         .student-college {
//           font-family: 'Sora', sans-serif;
//           font-weight: 500;
//         }

//         .testimonial-text {
//           font-family: 'Sora', sans-serif;
//           font-weight: 400;
//         }

//         .hero-title {
//           font-family: 'Sora', sans-serif;
//           font-weight: 800;
//         }
//       `}</style>

//       <section 
//         ref={sectionRef}
//         className="testimonial-section relative min-h-screen py-20 px-6 lg:py-28 lg:px-12"
//       >
//         {/* Soft floating gradients */}
//         <div 
//           className="soft-gradient"
//           style={{
//             background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)',
//             left: `${mousePosition.x}%`,
//             top: `${mousePosition.y}%`,
//             transform: 'translate(-50%, -50%)',
//           }}
//         />
//         <div 
//           className="soft-gradient"
//           style={{
//             background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
//             left: `${100 - mousePosition.x * 0.5}%`,
//             top: `${100 - mousePosition.y * 0.5}%`,
//             transform: 'translate(-50%, -50%)',
//           }}
//         />

//         <div className="relative max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-20 reveal-element" data-delay="0">
//             <div className="inline-block mb-6">
//               <span className="px-5 py-2 rounded-full text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)', fontFamily: 'Sora, sans-serif' }}>
//                 ✨ Success Stories
//               </span>
//             </div>
//             <h1 className="heading-display">
//               Real Students,
//               <br />
//               Real Transformations
//             </h1>
//             <p className="subheading max-w-2xl mx-auto">
//               See how our courses helped students master in-demand skills and launch successful careers in tech
//             </p>
//           </div>

//           {/* Main Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
//             {/* Left Column - Cards */}
//             <div className="lg:col-span-4 space-y-8">
//               {/* Janet Card */}
//               <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="100">
//                 <div className="flex items-start gap-5 mb-5">
//                   <div className="avatar-wrapper avatar-ring flex-shrink-0">
//                     <img 
//                       src={avatarUrls.janet} 
//                       alt="Janet Elsa Chack" 
//                       className="w-20 h-20 rounded-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 pt-1">
//                     <h3 className="student-name text-gray-900 text-lg mb-1">Janet Elsa Chack</h3>
//                     <p className="student-college text-gray-500 text-sm mb-3">St. Xavier College, Ahmedabad</p>
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
//                   "The UI/UX course transformed how I approach design problems. The hands-on projects with real clients gave me portfolio pieces that landed me three job interviews!"
//                 </p>
//                 <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-teal-700">
//                   UI/UX Design
//                 </span>
//               </div>

//               {/* Ayline Card */}
//               <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="200">
//                 <div className="quote-mark" style={{ top: '-35px', right: '15px' }}>"</div>
//                 <div className="flex items-start gap-5 mb-5">
//                   <div className="avatar-wrapper avatar-ring flex-shrink-0">
//                     <img 
//                       src={avatarUrls.ayline} 
//                       alt="Ayline Gijo" 
//                       className="w-20 h-20 rounded-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 pt-1">
//                     <h3 className="student-name text-gray-900 text-lg mb-1">Ayline Gijo</h3>
//                     <p className="student-college text-gray-500 text-sm mb-3">Acropolis Institute</p>
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
//                   "GraphQL completely changed my backend development approach. The course structure was perfect—theory, practice, then real-world implementation."
//                 </p>
//                 <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-cyan-700">
//                   GraphQL
//                 </span>
//               </div>
//             </div>

//             {/* Center - HERO CARD */}
//             <div className="lg:col-span-8 reveal-element" data-delay="150">
//               <div className="hero-card rounded-3xl min-h-[600px] lg:min-h-[700px]">
//                 <div className="hero-card-content h-full flex flex-col lg:flex-row">
//                   {/* Image Section */}
//                   <div className="lg:w-2/5 relative overflow-hidden rounded-tl-3xl lg:rounded-tr-none lg:rounded-bl-3xl rounded-tr-3xl">
//                     <img 
//                       src={avatarUrls.noubin} 
//                       alt="Noubin Boban" 
//                       className="w-full h-80 lg:h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-teal-600/70 to-transparent" />
                    
//                     {/* Floating badge */}
//                     <div className="absolute top-6 left-6 floating-badge">
//                       <div className="bg-white rounded-2xl px-5 py-3 shadow-2xl">
//                         <div className="flex items-center gap-2 mb-1">
//                           <div className="w-2.5 h-2.5 rounded-full bg-teal-500 pulse-dot" />
//                           <span className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>VERIFIED STUDENT</span>
//                         </div>
//                         <p className="text-xs text-gray-600" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>Course Completed • 2024</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
//                     <div className="quote-mark" style={{ top: '-15px', left: '-5px', color: 'rgba(255,255,255,0.15)' }}>"</div>
                    
//                     {/* Stars */}
//                     <div className="flex gap-1.5 mb-6">
//                       {[...Array(5)].map((_, i) => (
//                         <svg 
//                           key={i} 
//                           className="w-7 h-7 text-yellow-300 fill-yellow-300 star-icon" 
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>

//                     <h2 className="hero-title text-3xl lg:text-4xl text-white mb-6 leading-tight">
//                       From Zero to AI Hero—This Course Changed Everything
//                     </h2>

//                     <p className="testimonial-text text-white/90 text-base lg:text-lg leading-relaxed mb-8">
//                       I came in knowing nothing about AI, and now I'm building production-ready GenAI applications. The instructors didn't just teach theory—they showed us how to build real products. Within 3 months, I had a portfolio that got me interviews at top tech companies. The project-based learning and mentorship were game-changers.
//                     </p>

//                     {/* Student Info */}
//                     <div className="flex items-center gap-6 pt-6 border-t border-white/20">
//                       <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
//                         <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>NB</span>
//                       </div>
//                       <div>
//                         <h3 className="student-name text-2xl text-white mb-1">Noubin Boban</h3>
//                         <p className="student-college text-white/80 text-sm mb-2">Kerala University</p>
//                         <div className="flex gap-2">
//                           <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30" style={{ fontFamily: 'Sora, sans-serif' }}>
//                             🚀 GenAI Specialist
//                           </span>
//                           <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-200 border border-yellow-400/40" style={{ fontFamily: 'Sora, sans-serif' }}>
//                             ⭐ Top Performer
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Leona Card */}
//             <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="300">
//               <div className="flex items-start gap-5 mb-5">
//                 <div className="avatar-wrapper avatar-ring flex-shrink-0">
//                   <img 
//                     src={avatarUrls.leona} 
//                     alt="Leona Joseph" 
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-1 pt-1">
//                   <h3 className="student-name text-gray-900 text-lg mb-1">Leona Joseph</h3>
//                   <p className="student-college text-gray-500 text-sm mb-3">SVVV University</p>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <h4 className="text-gray-900 font-bold text-base mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>A Career-Defining Experience</h4>
//               <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
//                 "The DS-ML course gave me the confidence to transition from finance to data science. The real-world datasets and capstone project were exactly what I needed."
//               </p>
//               <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-teal-700">
//                 Data Science & ML
//               </span>
//             </div>

//             {/* Shiji Card */}
//             <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="350">
//               <div className="quote-mark" style={{ top: '-30px', right: '20px', fontSize: '5rem' }}>"</div>
//               <div className="flex items-start gap-5 mb-5">
//                 <div className="avatar-wrapper avatar-ring flex-shrink-0">
//                   <img 
//                     src={avatarUrls.shiji} 
//                     alt="Shiji Sajimon" 
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-1 pt-1">
//                   <h3 className="student-name text-gray-900 text-lg mb-1">Shiji Sajimon</h3>
//                   <p className="student-college text-gray-500 text-sm mb-3">Chameli Devi College</p>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <h4 className="text-gray-900 font-bold text-base mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>Automation Mastery Unlocked</h4>
//               <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
//                 "N8N seemed intimidating at first, but this course broke it down perfectly. Now I'm automating workflows at my internship and my manager is impressed!"
//               </p>
//               <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-cyan-700">
//                 N8N Automation
//               </span>
//             </div>

//             {/* Stats Card */}
//             <div className="testimonial-card rounded-2xl p-8 reveal-element flex flex-col items-center justify-center text-center" data-delay="400">
//               <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)' }}>
//                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>500+</h3>
//               <p className="text-gray-700 text-lg font-semibold mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>Students Transformed</p>
//               <div className="flex flex-wrap justify-center gap-2 mb-5">
//                 <span className="course-badge px-3 py-2 rounded-full text-sm text-teal-700">GenAI</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm text-teal-700">DS-ML</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm text-cyan-700">GraphQL</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm text-cyan-700">N8N</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm text-teal-700">UI/UX</span>
//               </div>
//               <p className="text-gray-500 text-sm" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>Join the next generation of tech leaders</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TestimonialsSection;

'use client';

import React, { useEffect, useRef, useState } from 'react';

const avatarUrls = {
  noubin: '/images/12.jpeg',
  janet: '/images/15.jpeg',
  ayline: '/images/13.jpeg',
  leona: '/images/16.jpeg',
  shiji: '/images/11.jpeg'
};

const testimonials = [
  {
    id: 'noubin',
    name: 'Noubin Boban',
    college: 'Kerala University',
    avatar: avatarUrls.noubin,
    initials: 'NB',
    title: 'From Zero to AI Hero—This Course Changed Everything',
    text: "I came in knowing nothing about AI, and now I'm building production-ready GenAI applications. The instructors didn't just teach theory—they showed us how to build real products. Within 3 months, I had a portfolio that got me interviews at top tech companies. The project-based learning and mentorship were game-changers.",
    course: 'GenAI Specialist',
    badge1: '🚀 GenAI Specialist',
    badge2: '⭐ Top Performer',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 50%, #0e7490 100%)'
  },
  {
    id: 'janet',
    name: 'Janet Elsa Chack',
    college: 'St. Xavier College, Ahmedabad',
    avatar: avatarUrls.janet,
    initials: 'JC',
    title: 'Design Skills That Actually Land Jobs',
    text: "The UI/UX course transformed how I approach design problems. The hands-on projects with real clients gave me portfolio pieces that landed me three job interviews! The mentorship was incredible—I learned industry standards and best practices that bootcamps just don't teach. Now I'm confidently designing products that users love.",
    course: 'UI/UX Design',
    badge1: '🎨 UI/UX Expert',
    badge2: '⭐ Portfolio Winner',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #155e75 100%)'
  },
  {
    id: 'ayline',
    name: 'Ayline Gijo',
    college: 'Acropolis Institute',
    avatar: avatarUrls.ayline,
    initials: 'AG',
    title: 'Modern Backend Development Mastered',
    text: "GraphQL completely changed my backend development approach. The course structure was perfect—theory, practice, then real-world implementation. I built an entire API from scratch during the course, and that project is now the centerpiece of my portfolio. The instructor's experience with production systems was invaluable.",
    course: 'GraphQL',
    badge1: '⚡ GraphQL Pro',
    badge2: '⭐ API Builder',
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
    badge1: '📊 DS Expert',
    badge2: '⭐ Career Switcher',
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
    badge1: '🤖 Automation Pro',
    badge2: '⭐ Workflow Master',
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
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        .testimonial-section {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .soft-gradient {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
          transition: transform 0.5s ease-out;
          opacity: 0.3;
        }

        .heading-display {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #1e40af;
          margin-bottom: 1rem;
        }

        .subheading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #475569;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .reveal-element {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .reveal-element.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-card {
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(20, 184, 166, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hero-card.transitioning {
          opacity: 0.7;
          transform: scale(0.98);
        }

        .hero-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent, rgba(20, 184, 166, 0.2));
          border-radius: 1.5rem;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .hero-card:hover::before {
          opacity: 1;
        }

        .hero-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 30px 80px rgba(20, 184, 166, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.2) inset;
        }

        .hero-card-content {
          position: relative;
          z-index: 1;
        }

        .testimonial-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.04), transparent);
          transition: left 0.7s ease;
        }

        .testimonial-card:hover::before {
          left: 100%;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          border-color: #cbd5e1;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
        }

        .star-icon {
          filter: drop-shadow(0 1px 3px rgba(250, 204, 21, 0.3));
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .star-icon:nth-child(2) { animation-delay: 0.2s; }
        .star-icon:nth-child(3) { animation-delay: 0.4s; }
        .star-icon:nth-child(4) { animation-delay: 0.6s; }
        .star-icon:nth-child(5) { animation-delay: 0.8s; }

        .quote-mark {
          font-family: 'Sora', sans-serif;
          font-weight: 300;
          font-size: 6rem;
          line-height: 1;
          color: #e2e8f0;
          position: absolute;
          user-select: none;
          opacity: 0.5;
        }

        .avatar-wrapper {
          position: relative;
          animation: float-gentle 4s ease-in-out infinite;
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .avatar-ring {
          position: relative;
        }

        .avatar-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, #14b8a6, #06b6d4, #0ea5e9, #14b8a6);
          border-radius: 50%;
          z-index: -1;
          animation: rotate-slow 8s linear infinite;
        }

        @keyframes rotate-slow {
          to { transform: rotate(360deg); }
        }

        .course-badge {
          background: rgba(20, 184, 166, 0.08);
          border: 1px solid rgba(20, 184, 166, 0.15);
          transition: all 0.3s ease;
          font-family: 'Sora', sans-serif;
          font-weight: 600;
        }

        .course-badge:hover {
          background: rgba(20, 184, 166, 0.12);
          border-color: rgba(20, 184, 166, 0.25);
          transform: translateY(-1px);
        }

        .floating-badge {
          animation: float-badge 3s ease-in-out infinite;
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        .pulse-dot {
          animation: pulse-grow 2s ease-in-out infinite;
        }

        @keyframes pulse-grow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        .progress-indicators {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 20px;
        }

        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #cbd5e1;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .progress-dot.active {
          width: 32px;
          border-radius: 5px;
          background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
        }

        .progress-dot:hover {
          background: #94a3b8;
        }

        .student-name {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
        }

        .student-college {
          font-family: 'Sora', sans-serif;
          font-weight: 500;
        }

        .testimonial-text {
          font-family: 'Sora', sans-serif;
          font-weight: 400;
        }

        .hero-title {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
        }
      `}</style>

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
              <span className="px-5 py-2 rounded-full text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)', fontFamily: 'Sora, sans-serif' }}>
                ✨ Success Stories
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
              <div 
                className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer" 
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
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="student-name text-gray-900 text-lg mb-1">Janet Elsa Chack</h3>
                    <p className="student-college text-gray-500 text-sm mb-3">St. Xavier College, Ahmedabad</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
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
              </div>

              {/* Ayline Card */}
              <div 
                className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer" 
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
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="student-name text-gray-900 text-lg mb-1">Ayline Gijo</h3>
                    <p className="student-college text-gray-500 text-sm mb-3">Acropolis Institute</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text text-gray-700 text-base leading-relaxed mb-5">
                  "GraphQL completely changed my backend development approach. The course structure was perfect—theory, practice, then real-world implementation."
                </p>
                <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-cyan-700">
                  GraphQL
                </span>
              </div>
            </div>

            {/* Center - HERO CARD */}
            <div className="lg:col-span-8 reveal-element" data-delay="150">
              <div 
                className={`hero-card rounded-3xl min-h-[600px] lg:min-h-[700px] ${isTransitioning ? 'transitioning' : ''}`}
                style={{ background: currentHero.gradient }}
              >
                <div className="hero-card-content h-full flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden rounded-tl-3xl lg:rounded-tr-none lg:rounded-bl-3xl rounded-tr-3xl">
                    <img 
                      src={currentHero.avatar}
                      alt={currentHero.name}
                      className="w-full h-80 lg:h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-teal-600/70 to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 floating-badge">
                      <div className="bg-white rounded-2xl px-5 py-3 shadow-2xl">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-teal-500 pulse-dot" />
                          <span className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>VERIFIED STUDENT</span>
                        </div>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500 }}>Course Completed • 2024</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
                    <div className="quote-mark" style={{ top: '-15px', left: '-5px', color: 'rgba(255,255,255,0.15)' }}>"</div>
                    
                    {/* Stars */}
                    <div className="flex gap-1.5 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
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
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30" style={{ fontFamily: 'Sora, sans-serif' }}>
                            {currentHero.badge1}
                          </span>
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-200 border border-yellow-400/40" style={{ fontFamily: 'Sora, sans-serif' }}>
                            {currentHero.badge2}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Indicators */}
              <div className="progress-indicators">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
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
            <div 
              className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer" 
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
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="student-name text-gray-900 text-lg mb-1">Leona Joseph</h3>
                  <p className="student-college text-gray-500 text-sm mb-3">SVVV University</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
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
            </div>

            {/* Shiji Card */}
            <div 
              className="testimonial-card rounded-2xl p-7 reveal-element cursor-pointer" 
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
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="student-name text-gray-900 text-lg mb-1">Shiji Sajimon</h3>
                  <p className="student-college text-gray-500 text-sm mb-3">Chameli Devi College</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
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
            </div>

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