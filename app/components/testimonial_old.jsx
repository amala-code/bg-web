

// // // // 

// // // // import React, { useEffect } from 'react';

// // // // const avatarUrls = {
// // // //   victoria: '/images/12.webp',
// // // //   rebecca: '/images/15.webp',
// // // //   martha: '/images/13.webp',
// // // //   kelly: '/images/16.webp',
// // // //   betty: '/images/11.webp',
// // // //   matt: '/images/14.webp',
// // // //   wesley: '/images/15.webp',
// // // //   sarah: '/images/14.webp',
// // // //   michael: '/images/11.webp',
// // // //   naomi: '/images/11.webp',
// // // //   jacob: '/images/11.webp'
// // // // };

// // // // const TestimonialsSection = () => {
// // // //   useEffect(() => {
// // // //     const els = Array.from(document.querySelectorAll('.animate-on-scroll'));
// // // //     if (!els.length) return;

// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             const el = entry.target;
// // // //             const idx = Number(el.dataset.animIndex || 0);
// // // //             // small stagger using transitionDelay instead of nested setTimeout
// // // //             el.style.transitionDelay = `${idx * 80}ms`;
// // // //             el.classList.add('opacity-100', 'translate-y-0');
// // // //             el.classList.remove('opacity-0', 'translate-y-6');
// // // //             observer.unobserve(el);
// // // //           }
// // // //         });
// // // //       },
// // // //       { threshold: 0.12 }
// // // //     );

// // // //     els.forEach((el, i) => {
// // // //       el.dataset.animIndex = String(i);
// // // //       observer.observe(el);
// // // //     });

// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   const stars = ['star1', 'star2', 'star3', 'star4', 'star5'];

// // // //   return (
// // // //     <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white py-16 px-6 lg:py-24 lg:px-12 overflow-hidden">
// // // //       {/* Subtle background decorations */}
// // // //       <div className="absolute inset-0 pointer-events-none opacity-20">
// // // //         <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl" />
// // // //         <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-100 blur-3xl" />
// // // //       </div>

// // // //       <div className="relative max-w-7xl mx-auto">
// // // //         {/* Masonry-style grid layout */}
// // // //         <div className="grid grid-cols-12 gap-5 auto-rows-auto">
          
// // // //           {/* Row 1 */}
// // // //           {/* Top Left - Large Quote Card */}
// // // //           <div className="col-span-12 lg:col-span-3 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-7 relative min-h-[280px] flex flex-col animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <div className="text-7xl text-gray-200 font-serif absolute top-2 left-3 leading-none">"</div>
// // // //             <p className="text-gray-700 text-sm leading-relaxed mt-14 mb-6 flex-grow">
// // // //               Eligendi numquam ut ullam excepturi sint incidunt labore. Expedita ipsum et dolorem qui dolores dolor. Nostrum qui dolore unde placeat sequi dicta.
// // // //             </p>
// // // //             <div className="flex items-center gap-3 border-t border-gray-200 pt-4 mt-auto">
// // // //               <img src={avatarUrls.victoria} alt="Victoria Walton" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
// // // //               <div>
// // // //                 <p className="font-semibold text-gray-900 text-sm">Victoria Walton</p>
// // // //                 <p className="text-xs text-gray-500">Information Officer Co.</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Top Center - Star Rating Card */}
// // // //           <div className="col-span-12 lg:col-span-4 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-7 text-center relative min-h-[280px] flex flex-col animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <div className="flex justify-center mb-4">
// // // //               <img
// // // //                 src={avatarUrls.rebecca}
// // // //                 alt="Rebecca Tylor"
// // // //                 className="w-20 h-20 rounded-full object-cover ring-4 ring-yellow-50"
// // // //               />
// // // //             </div>
// // // //             <div className="flex justify-center gap-1 mb-4">
// // // //               {stars.map((id) => (
// // // //                 <svg key={id} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
// // // //                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // // //                 </svg>
// // // //               ))}
// // // //             </div>
// // // //             <h3 className="text-lg font-bold text-gray-900 mb-3">I really appreciate it!</h3>
// // // //             <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
// // // //               Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
// // // //             </p>
// // // //             <div className="border-t border-gray-200 pt-4 mt-auto">
// // // //               <p className="font-semibold text-gray-900 text-sm">Rebecca Tylor</p>
// // // //               <p className="text-xs text-gray-500">Marketer</p>
// // // //             </div>
// // // //             <div className="absolute bottom-6 right-6 text-5xl text-gray-200 font-serif leading-none">"</div>
// // // //           </div>

// // // //           {/* Top Right - Small Good Job Card */}
// // // //           <div className="col-span-12 lg:col-span-2 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-h-[140px] animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <div className="flex items-center gap-3 mb-3">
// // // //               <img src={avatarUrls.sarah} alt="Sarah Wilson" className="w-12 h-12 rounded-full object-cover" />
// // // //             </div>
// // // //             <h4 className="font-bold text-gray-900 text-sm mb-2">Good job!</h4>
// // // //             <p className="text-gray-600 text-xs leading-relaxed mb-3">
// // // //               Molestiae fugiat quia sint nostrum dolorem denique denique!
// // // //             </p>
// // // //             <p className="text-xs text-gray-500">Sarah Wilson • Product Manager</p>
// // // //           </div>

// // // //           {/* Right Side Small Card */}
// // // //           <div className="col-span-12 lg:col-span-3 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex gap-4 items-start min-h-[140px] animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <img src={avatarUrls.michael} alt="Michael Chen" className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
// // // //             <div>
// // // //               <p className="text-gray-600 text-xs leading-relaxed mb-2">
// // // //                 "Quasi praesentium odio sit atque, officiis minus dolore sequi."
// // // //               </p>
// // // //               <p className="text-xs font-semibold text-gray-900">Michael Chen</p>
// // // //               <p className="text-[11px] text-gray-500">Developer</p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Row 2 */}
// // // //           {/* Large Portrait Card - Martha */}
// // // //           <div className="col-span-12 lg:col-span-6 lg:col-start-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-[320px] animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <div className="flex flex-col sm:flex-row h-full">
// // // //               <div className="sm:w-2/5">
// // // //                 <img
// // // //                   src={avatarUrls.martha}
// // // //                   alt="Martha Maldonado"
// // // //                   className="w-full h-64 sm:h-full object-cover"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex-1 p-8 flex flex-col justify-center text-white">
// // // //                 <div className="text-6xl text-white/20 font-serif mb-4 leading-none">"</div>
// // // //                 <p className="text-lg font-medium leading-relaxed mb-4">
// // // //                   Good job!
// // // //                 </p>
// // // //                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
// // // //                   Molestiae fugiat sint quia nost quisquam dolors denique denique denique!
// // // //                 </p>
// // // //                 <div className="border-t border-white/20 pt-4">
// // // //                   <p className="font-bold text-base">Martha Maldonado</p>
// // // //                   <p className="text-sm text-gray-400">Information Officer</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Side Card - Matt */}
// // // //           <div className="col-span-12 lg:col-span-3 lg:col-start-10 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex gap-4 items-center min-h-[160px] animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <img src={avatarUrls.matt} alt="Matt Stewart" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
// // // //             <div>
// // // //               <p className="text-gray-600 text-sm leading-relaxed mb-3">
// // // //                 "Quasi praesentium odio sit atque, officiis minus dolore sequi."
// // // //               </p>
// // // //               <p className="text-xs font-semibold text-gray-900">Matt Stewart</p>
// // // //               <p className="text-[11px] text-gray-500">Co-Founder • Head of Design</p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Row 3 */}
// // // //           {/* Wide impressed card */}
// // // //           <div className="col-span-12 lg:col-span-7 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <h3 className="text-lg font-bold text-gray-900 mb-3">I was very impressed!</h3>
// // // //             <p className="text-gray-600 text-sm leading-relaxed mb-6">
// // // //               Diam natoque mollitia sit, quis volutpat sodales eget. Adipiscing enim ex nulla aliquet porttitor lacinia.
// // // //             </p>
// // // //             <div className="flex items-center -space-x-2 mb-4">
// // // //               <img src={avatarUrls.betty} alt="Person 1" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
// // // //               <img src={avatarUrls.naomi} alt="Person 2" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
// // // //               <img src={avatarUrls.jacob} alt="Person 3" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
// // // //             </div>
// // // //             <div className="border-t border-gray-200 pt-4">
// // // //               <p className="font-semibold text-gray-900 text-sm">Betty Siaz</p>
// // // //               <p className="text-xs text-gray-500">Economist</p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Speech bubble card - Kelly */}
// // // //           <div className="col-span-12 lg:col-span-3 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-7 relative min-h-[240px] flex flex-col items-center text-center animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <div className="flex justify-center mb-4">
// // // //               <img src={avatarUrls.kelly} alt="Kelly Joe" className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100" />
// // // //             </div>
// // // //             <div className="text-5xl text-gray-200 font-serif mb-3 leading-none">"</div>
// // // //             <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">
// // // //               Eligtur fugiat quia nostrum et facatus excepturi omni.
// // // //             </p>
// // // //             <div className="mt-auto">
// // // //               <p className="text-xs font-semibold text-gray-900">Kelly Joe</p>
// // // //               <p className="text-[11px] text-gray-500">UX/UI Designer</p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Bottom quote card - Wesley */}
// // // //           <div className="col-span-12 lg:col-span-2 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-h-[200px] flex flex-col animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform">
// // // //             <div className="text-5xl text-gray-200 font-serif mb-4 leading-none">"</div>
// // // //             <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">
// // // //               Eram soluta excepturi nostrum aut facatus.
// // // //             </p>
// // // //             <div className="border-t border-gray-200 pt-3 mt-auto">
// // // //               <p className="font-semibold text-gray-900 text-xs">Wesley Burges</p>
// // // //               <p className="text-[11px] text-gray-500">Broker</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default TestimonialsSection;

// // // 

// // // import React, { useEffect, useRef, useState } from 'react';

// // // const avatarUrls = {
// // //   noubin: '/images/12.webp',
// // //   janet: '/images/15.webp',
// // //   ayline: '/images/13.webp',
// // //   leona: '/images/16.webp',
// // //   shiji: '/images/11.webp'
// // // };

// // // const TestimonialsSection = () => {
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       if (sectionRef.current) {
// // //         const rect = sectionRef.current.getBoundingClientRect();
// // //         setMousePosition({
// // //           x: ((e.clientX - rect.left) / rect.width) * 100,
// // //           y: ((e.clientY - rect.top) / rect.height) * 100
// // //         });
// // //       }
// // //     };

// // //     const section = sectionRef.current;
// // //     if (section) {
// // //       section.addEventListener('mousemove', handleMouseMove);
// // //       return () => section.removeEventListener('mousemove', handleMouseMove);
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             const el = entry.target;
// // //             const delay = el.dataset.delay || 0;
// // //             setTimeout(() => {
// // //               el.classList.add('revealed');
// // //             }, delay);
// // //             observer.unobserve(el);
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
// // //     );

// // //     document.querySelectorAll('.reveal-element').forEach((el) => {
// // //       observer.observe(el);
// // //     });

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <style jsx>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;600;700;900&family=DM+Sans:wght@400;500;700&display=swap');
        
// // //         .testimonial-section {
// // //           font-family: 'DM Sans', sans-serif;
// // //           background: linear-gradient(135deg, #0a0e27 0%, #1a1d3a 50%, #0f1628 100%);
// // //           position: relative;
// // //           overflow: hidden;
// // //         }

// // //         .grain-overlay {
// // //           position: absolute;
// // //           inset: 0;
// // //           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
// // //           pointer-events: none;
// // //           opacity: 0.6;
// // //         }

// // //         .radial-gradient {
// // //           position: absolute;
// // //           width: 800px;
// // //           height: 800px;
// // //           border-radius: 50%;
// // //           pointer-events: none;
// // //           transition: transform 0.3s ease-out;
// // //         }

// // //         .heading-display {
// // //           font-family: 'Fraunces', serif;
// // //           font-weight: 900;
// // //           font-size: clamp(2.5rem, 8vw, 6rem);
// // //           line-height: 0.95;
// // //           letter-spacing: -0.04em;
// // //           background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //           margin-bottom: 1.5rem;
// // //         }

// // //         .subheading {
// // //           font-family: 'DM Sans', sans-serif;
// // //           font-size: clamp(1rem, 2vw, 1.25rem);
// // //           color: #a5b4fc;
// // //           font-weight: 400;
// // //           letter-spacing: 0.02em;
// // //         }

// // //         .reveal-element {
// // //           opacity: 0;
// // //           transform: translateY(40px);
// // //           transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
// // //         }

// // //         .reveal-element.revealed {
// // //           opacity: 1;
// // //           transform: translateY(0);
// // //         }

// // //         .hero-card {
// // //           background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%);
// // //           position: relative;
// // //           overflow: hidden;
// // //           border: 1px solid rgba(255, 255, 255, 0.1);
// // //           transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
// // //         }

// // //         .hero-card::before {
// // //           content: '';
// // //           position: absolute;
// // //           inset: -100%;
// // //           background: conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0) 0deg, rgba(255,255,255,0.3) 180deg, rgba(255,255,255,0) 360deg);
// // //           animation: rotate 10s linear infinite;
// // //         }

// // //         @keyframes rotate {
// // //           to { transform: rotate(360deg); }
// // //         }

// // //         .hero-card::after {
// // //           content: '';
// // //           position: absolute;
// // //           inset: 2px;
// // //           background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%);
// // //           border-radius: 1.5rem;
// // //           z-index: 0;
// // //         }

// // //         .hero-card-content {
// // //           position: relative;
// // //           z-index: 1;
// // //         }

// // //         .hero-card:hover {
// // //           transform: scale(1.02) translateY(-5px);
// // //           box-shadow: 0 40px 80px rgba(59, 130, 246, 0.4);
// // //         }

// // //         .testimonial-card {
// // //           background: rgba(30, 41, 59, 0.5);
// // //           backdrop-filter: blur(20px);
// // //           border: 1px solid rgba(148, 163, 184, 0.1);
// // //           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
// // //           position: relative;
// // //           overflow: hidden;
// // //         }

// // //         .testimonial-card::before {
// // //           content: '';
// // //           position: absolute;
// // //           top: 0;
// // //           left: -100%;
// // //           width: 100%;
// // //           height: 100%;
// // //           background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
// // //           transition: left 0.5s ease;
// // //         }

// // //         .testimonial-card:hover::before {
// // //           left: 100%;
// // //         }

// // //         .testimonial-card:hover {
// // //           transform: translateY(-8px);
// // //           border-color: rgba(148, 163, 184, 0.3);
// // //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
// // //         }

// // //         .star-icon {
// // //           filter: drop-shadow(0 2px 8px rgba(250, 204, 21, 0.5));
// // //         }

// // //         .quote-mark {
// // //           font-family: 'Fraunces', serif;
// // //           font-weight: 300;
// // //           font-size: 8rem;
// // //           line-height: 1;
// // //           background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.1));
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //           position: absolute;
// // //           user-select: none;
// // //         }

// // //         .avatar-ring {
// // //           position: relative;
// // //         }

// // //         .avatar-ring::before {
// // //           content: '';
// // //           position: absolute;
// // //           inset: -3px;
// // //           background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6);
// // //           border-radius: 50%;
// // //           z-index: -1;
// // //           animation: pulse-ring 2s ease-in-out infinite;
// // //         }

// // //         @keyframes pulse-ring {
// // //           0%, 100% { opacity: 1; transform: scale(1); }
// // //           50% { opacity: 0.7; transform: scale(1.05); }
// // //         }

// // //         .course-badge {
// // //           background: rgba(59, 130, 246, 0.2);
// // //           border: 1px solid rgba(59, 130, 246, 0.3);
// // //           backdrop-filter: blur(10px);
// // //           transition: all 0.3s ease;
// // //         }

// // //         .course-badge:hover {
// // //           background: rgba(59, 130, 246, 0.3);
// // //           border-color: rgba(59, 130, 246, 0.5);
// // //           transform: translateY(-2px);
// // //         }

// // //         .floating-element {
// // //           animation: float 6s ease-in-out infinite;
// // //         }

// // //         @keyframes float {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(-20px) rotate(5deg); }
// // //         }

// // //         .grid-pattern {
// // //           background-image: 
// // //             linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
// // //             linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
// // //           background-size: 50px 50px;
// // //         }
// // //       `}</style>

// // //       <section 
// // //         ref={sectionRef}
// // //         className="testimonial-section relative min-h-screen py-24 px-6 lg:px-12"
// // //       >
// // //         {/* Grain overlay */}
// // //         <div className="grain-overlay" />
        
// // //         {/* Grid pattern */}
// // //         <div className="grid-pattern absolute inset-0 opacity-30" />

// // //         {/* Interactive radial gradients */}
// // //         <div 
// // //           className="radial-gradient"
// // //           style={{
// // //             background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
// // //             left: `${mousePosition.x}%`,
// // //             top: `${mousePosition.y}%`,
// // //             transform: 'translate(-50%, -50%)',
// // //           }}
// // //         />
// // //         <div 
// // //           className="radial-gradient"
// // //           style={{
// // //             background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
// // //             left: `${100 - mousePosition.x}%`,
// // //             top: `${100 - mousePosition.y}%`,
// // //             transform: 'translate(-50%, -50%)',
// // //           }}
// // //         />

// // //         <div className="relative max-w-7xl mx-auto">
// // //           {/* Header */}
// // //           <div className="text-center mb-20 reveal-element" data-delay="0">
// // //             <div className="inline-block mb-6">
// // //               <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
// // //                 ✨ Student Success Stories
// // //               </span>
// // //             </div>
// // //             <h1 className="heading-display">
// // //               Transform Your
// // //               <br />
// // //               Career Journey
// // //             </h1>
// // //             <p className="subheading max-w-2xl mx-auto">
// // //               Real students, real results. See how our courses helped them master cutting-edge skills
// // //               and land their dream roles in tech.
// // //             </p>
// // //           </div>

// // //           {/* Main Grid */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
// // //             {/* Left Column - Small Cards */}
// // //             <div className="lg:col-span-4 space-y-6">
// // //               {/* Janet Card */}
// // //               <div className="testimonial-card rounded-3xl p-6 reveal-element" data-delay="100">
// // //                 <div className="flex items-start gap-4 mb-4">
// // //                   <div className="avatar-ring">
// // //                     <img 
// // //                       src={avatarUrls.janet} 
// // //                       alt="Janet Elsa Chack" 
// // //                       className="w-14 h-14 rounded-full object-cover"
// // //                     />
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h3 className="font-bold text-white text-base mb-1">Janet Elsa Chack</h3>
// // //                     <p className="text-slate-400 text-xs mb-2">St. Xavier College, Ahmedabad</p>
// // //                     <div className="flex gap-1">
// // //                       {[...Array(5)].map((_, i) => (
// // //                         <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// // //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //                         </svg>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <p className="text-slate-300 text-sm leading-relaxed mb-4">
// // //                   "The UI/UX course transformed how I approach design problems. The hands-on projects with real clients gave me portfolio pieces that landed me three job interviews!"
// // //                 </p>
// // //                 <span className="course-badge inline-block px-3 py-1 rounded-full text-xs font-medium text-blue-200">
// // //                   UI/UX Design
// // //                 </span>
// // //               </div>

// // //               {/* Ayline Card */}
// // //               <div className="testimonial-card rounded-3xl p-6 reveal-element" data-delay="200">
// // //                 <div className="quote-mark" style={{ top: '-40px', right: '10px', opacity: 0.5 }}>"</div>
// // //                 <div className="flex items-start gap-4 mb-4">
// // //                   <div className="avatar-ring">
// // //                     <img 
// // //                       src={avatarUrls.ayline} 
// // //                       alt="Ayline Gijo" 
// // //                       className="w-14 h-14 rounded-full object-cover"
// // //                     />
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h3 className="font-bold text-white text-base mb-1">Ayline Gijo</h3>
// // //                     <p className="text-slate-400 text-xs mb-2">Acropolis Institute</p>
// // //                     <div className="flex gap-1">
// // //                       {[...Array(5)].map((_, i) => (
// // //                         <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// // //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //                         </svg>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <p className="text-slate-300 text-sm leading-relaxed mb-4">
// // //                   "GraphQL completely changed my backend development approach. The course structure was perfect theory, practice, then real-world implementation."
// // //                 </p>
// // //                 <span className="course-badge inline-block px-3 py-1 rounded-full text-xs font-medium text-cyan-200">
// // //                   GraphQL
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             {/* Center - HERO CARD */}
// // //             <div className="lg:col-span-8 reveal-element" data-delay="150">
// // //               <div className="hero-card rounded-3xl min-h-[600px] lg:min-h-[700px]">
// // //                 <div className="hero-card-content h-full flex flex-col lg:flex-row">
// // //                   {/* Image Section */}
// // //                   <div className="lg:w-2/5 relative overflow-hidden rounded-tl-3xl lg:rounded-tr-none lg:rounded-bl-3xl rounded-tr-3xl">
// // //                     <img 
// // //                       src={avatarUrls.noubin} 
// // //                       alt="Noubin Boban" 
// // //                       className="w-full h-80 lg:h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
// // //                     />
// // //                     <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-900/80 to-transparent" />
                    
// // //                     {/* Floating badge */}
// // //                     <div className="absolute top-6 left-6 floating-element">
// // //                       <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-2xl">
// // //                         <div className="flex items-center gap-2 mb-1">
// // //                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
// // //                           <span className="text-xs font-bold text-gray-900">VERIFIED STUDENT</span>
// // //                         </div>
// // //                         <p className="text-[10px] text-gray-600">Course Completed • 2024</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Content Section */}
// // //                   <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
// // //                     <div className="quote-mark" style={{ top: '-20px', left: '-10px' }}>"</div>
                    
// // //                     {/* Stars */}
// // //                     <div className="flex gap-1 mb-6">
// // //                       {[...Array(5)].map((_, i) => (
// // //                         <svg 
// // //                           key={i} 
// // //                           className="w-7 h-7 text-yellow-300 fill-yellow-300 star-icon" 
// // //                           viewBox="0 0 20 20"
// // //                           style={{ animationDelay: `${i * 0.1}s` }}
// // //                         >
// // //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //                         </svg>
// // //                       ))}
// // //                     </div>

// // //                     <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
// // //                       "From Zero to AI Hero This Course Changed Everything"
// // //                     </h2>

// // //                     <p className="text-blue-100 text-base lg:text-lg leading-relaxed mb-8">
// // //                       I came in knowing nothing about AI, and now I'm building production-ready GenAI applications. The instructors didn't just teach theory they showed us how to build real products. Within 3 months, I had a portfolio that got me interviews at top tech companies. The project-based learning and mentorship were game-changers. This investment in myself was the best decision I've ever made.
// // //                     </p>

// // //                     {/* Student Info */}
// // //                     <div className="flex items-center gap-6 pt-6 border-t border-white/20">
// // //                       <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
// // //                         <span className="text-3xl font-bold text-white">NB</span>
// // //                       </div>
// // //                       <div>
// // //                         <h3 className="text-2xl font-bold text-white mb-1">Noubin Boban</h3>
// // //                         <p className="text-blue-200 text-sm mb-2">Kerala University</p>
// // //                         <div className="flex gap-2">
// // //                           <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30">
// // //                             🚀 GenAI Specialist
// // //                           </span>
// // //                           <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-200 border border-yellow-400/40">
// // //                             ⭐ Top Performer
// // //                           </span>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Bottom Row */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // //             {/* Leona Card */}
// // //             <div className="testimonial-card rounded-3xl p-7 reveal-element" data-delay="300">
// // //               <div className="flex items-start gap-4 mb-4">
// // //                 <div className="avatar-ring">
// // //                   <img 
// // //                     src={avatarUrls.leona} 
// // //                     alt="Leona Joseph" 
// // //                     className="w-16 h-16 rounded-full object-cover"
// // //                   />
// // //                 </div>
// // //                 <div className="flex-1">
// // //                   <h3 className="font-bold text-white text-lg mb-1">Leona Joseph</h3>
// // //                   <p className="text-slate-400 text-xs mb-2">SVVV University</p>
// // //                   <div className="flex gap-1">
// // //                     {[...Array(5)].map((_, i) => (
// // //                       <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// // //                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //                       </svg>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <h4 className="text-white font-bold text-base mb-3">A Career-Defining Experience</h4>
// // //               <p className="text-slate-300 text-sm leading-relaxed mb-4">
// // //                 "The DS-ML course gave me the confidence to transition from finance to data science. The real-world datasets and capstone project were exactly what I needed for my portfolio."
// // //               </p>
// // //               <span className="course-badge inline-block px-3 py-1 rounded-full text-xs font-medium text-purple-200">
// // //                 Data Science & ML
// // //               </span>
// // //             </div>

// // //             {/* Shiji Card */}
// // //             <div className="testimonial-card rounded-3xl p-7 reveal-element" data-delay="350">
// // //               <div className="quote-mark" style={{ top: '-30px', right: '20px', fontSize: '6rem', opacity: 0.3 }}>"</div>
// // //               <div className="flex items-start gap-4 mb-4">
// // //                 <div className="avatar-ring">
// // //                   <img 
// // //                     src={avatarUrls.shiji} 
// // //                     alt="Shiji Sajimon" 
// // //                     className="w-16 h-16 rounded-full object-cover"
// // //                   />
// // //                 </div>
// // //                 <div className="flex-1">
// // //                   <h3 className="font-bold text-white text-lg mb-1">Shiji Sajimon</h3>
// // //                   <p className="text-slate-400 text-xs mb-2">Chameli Devi College</p>
// // //                   <div className="flex gap-1">
// // //                     {[...Array(5)].map((_, i) => (
// // //                       <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// // //                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // //                       </svg>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <h4 className="text-white font-bold text-base mb-3">Automation Mastery Unlocked</h4>
// // //               <p className="text-slate-300 text-sm leading-relaxed mb-4">
// // //                 "N8N seemed intimidating at first, but this course broke it down perfectly. Now I'm automating workflows at my internship and my manager is impressed!"
// // //               </p>
// // //               <span className="course-badge inline-block px-3 py-1 rounded-full text-xs font-medium text-teal-200">
// // //                 N8N Automation
// // //               </span>
// // //             </div>

// // //             {/* Stats Card */}
// // //             <div className="testimonial-card rounded-3xl p-7 reveal-element flex flex-col items-center justify-center text-center" data-delay="400">
// // //               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
// // //                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //                 </svg>
// // //               </div>
// // //               <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
// // //               <p className="text-slate-300 text-base font-medium mb-4">Students Transformed</p>
// // //               <div className="flex flex-wrap justify-center gap-2 mb-4">
// // //                 <span className="course-badge px-3 py-1 rounded-full text-xs font-medium text-blue-200">GenAI</span>
// // //                 <span className="course-badge px-3 py-1 rounded-full text-xs font-medium text-purple-200">DS-ML</span>
// // //                 <span className="course-badge px-3 py-1 rounded-full text-xs font-medium text-cyan-200">GraphQL</span>
// // //                 <span className="course-badge px-3 py-1 rounded-full text-xs font-medium text-teal-200">N8N</span>
// // //                 <span className="course-badge px-3 py-1 rounded-full text-xs font-medium text-blue-200">UI/UX</span>
// // //               </div>
// // //               <p className="text-slate-400 text-sm">Join the next generation of tech leaders</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default TestimonialsSection;

// // 

// // import React, { useEffect, useRef, useState } from 'react';

// // const avatarUrls = {
// //   noubin: '/images/12.webp',
// //   janet: '/images/15.webp',
// //   ayline: '/images/13.webp',
// //   leona: '/images/16.webp',
// //   shiji: '/images/11.webp'
// // };

// // const TestimonialsSection = () => {
// //   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (sectionRef.current) {
// //         const rect = sectionRef.current.getBoundingClientRect();
// //         setMousePosition({
// //           x: ((e.clientX - rect.left) / rect.width) * 100,
// //           y: ((e.clientY - rect.top) / rect.height) * 100
// //         });
// //       }
// //     };

// //     const section = sectionRef.current;
// //     if (section) {
// //       section.addEventListener('mousemove', handleMouseMove);
// //       return () => section.removeEventListener('mousemove', handleMouseMove);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const el = entry.target;
// //             const delay = el.dataset.delay || 0;
// //             setTimeout(() => {
// //               el.classList.add('revealed');
// //             }, delay);
// //             observer.unobserve(el);
// //           }
// //         });
// //       },
// //       { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
// //     );

// //     document.querySelectorAll('.reveal-element').forEach((el) => {
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <>
// //       <style jsx>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        
// //         .testimonial-section {
// //           font-family: 'Inter', sans-serif;
// //           background: #ffffff;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .soft-gradient {
// //           position: absolute;
// //           width: 600px;
// //           height: 600px;
// //           border-radius: 50%;
// //           pointer-events: none;
// //           transition: transform 0.5s ease-out;
// //           opacity: 0.4;
// //         }

// //         .heading-display {
// //           font-family: 'Playfair Display', serif;
// //           font-weight: 700;
// //           font-size: clamp(2.5rem, 7vw, 5rem);
// //           line-height: 1.1;
// //           letter-spacing: -0.02em;
// //           color: #1e293b;
// //           margin-bottom: 1rem;
// //         }

// //         .subheading {
// //           font-family: 'Inter', sans-serif;
// //           font-size: clamp(1rem, 2vw, 1.2rem);
// //           color: #64748b;
// //           font-weight: 400;
// //           letter-spacing: -0.01em;
// //         }

// //         .reveal-element {
// //           opacity: 0;
// //           transform: translateY(30px);
// //           transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
// //         }

// //         .reveal-element.revealed {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }

// //         .hero-card {
// //           background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #06b6d4 100%);
// //           position: relative;
// //           overflow: hidden;
// //           box-shadow: 
// //             0 20px 60px rgba(37, 99, 235, 0.25),
// //             0 0 0 1px rgba(255, 255, 255, 0.1) inset;
// //           transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
// //         }

// //         .hero-card::before {
// //           content: '';
// //           position: absolute;
// //           inset: -2px;
// //           background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent, rgba(6, 182, 212, 0.2));
// //           border-radius: 1.5rem;
// //           z-index: 0;
// //           opacity: 0;
// //           transition: opacity 0.5s ease;
// //         }

// //         .hero-card:hover::before {
// //           opacity: 1;
// //         }

// //         .hero-card:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 
// //             0 30px 80px rgba(37, 99, 235, 0.3),
// //             0 0 0 1px rgba(255, 255, 255, 0.2) inset;
// //         }

// //         .hero-card-content {
// //           position: relative;
// //           z-index: 1;
// //         }

// //         .testimonial-card {
// //           background: #ffffff;
// //           border: 1.5px solid #e2e8f0;
// //           transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .testimonial-card::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: -100%;
// //           width: 100%;
// //           height: 100%;
// //           background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.04), transparent);
// //           transition: left 0.7s ease;
// //         }

// //         .testimonial-card:hover::before {
// //           left: 100%;
// //         }

// //         .testimonial-card:hover {
// //           transform: translateY(-6px);
// //           border-color: #cbd5e1;
// //           box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
// //         }

// //         .star-icon {
// //           filter: drop-shadow(0 1px 3px rgba(250, 204, 21, 0.3));
// //           animation: twinkle 3s ease-in-out infinite;
// //         }

// //         @keyframes twinkle {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0.7; }
// //         }

// //         .star-icon:nth-child(2) { animation-delay: 0.2s; }
// //         .star-icon:nth-child(3) { animation-delay: 0.4s; }
// //         .star-icon:nth-child(4) { animation-delay: 0.6s; }
// //         .star-icon:nth-child(5) { animation-delay: 0.8s; }

// //         .quote-mark {
// //           font-family: 'Playfair Display', serif;
// //           font-weight: 400;
// //           font-size: 6rem;
// //           line-height: 1;
// //           color: #e2e8f0;
// //           position: absolute;
// //           user-select: none;
// //           opacity: 0.5;
// //         }

// //         .avatar-wrapper {
// //           position: relative;
// //           animation: float-gentle 4s ease-in-out infinite;
// //         }

// //         @keyframes float-gentle {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-5px); }
// //         }

// //         .avatar-ring {
// //           position: relative;
// //         }

// //         .avatar-ring::before {
// //           content: '';
// //           position: absolute;
// //           inset: -4px;
// //           background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6, #ec4899);
// //           border-radius: 50%;
// //           z-index: -1;
// //           animation: rotate-slow 8s linear infinite;
// //         }

// //         @keyframes rotate-slow {
// //           to { transform: rotate(360deg); }
// //         }

// //         .course-badge {
// //           background: rgba(59, 130, 246, 0.08);
// //           border: 1px solid rgba(59, 130, 246, 0.15);
// //           transition: all 0.3s ease;
// //         }

// //         .course-badge:hover {
// //           background: rgba(59, 130, 246, 0.12);
// //           border-color: rgba(59, 130, 246, 0.25);
// //           transform: translateY(-1px);
// //         }

// //         .floating-badge {
// //           animation: float-badge 3s ease-in-out infinite;
// //         }

// //         @keyframes float-badge {
// //           0%, 100% { transform: translateY(0px) rotate(-2deg); }
// //           50% { transform: translateY(-10px) rotate(2deg); }
// //         }

// //         .pulse-dot {
// //           animation: pulse-grow 2s ease-in-out infinite;
// //         }

// //         @keyframes pulse-grow {
// //           0%, 100% { transform: scale(1); opacity: 1; }
// //           50% { transform: scale(1.2); opacity: 0.8; }
// //         }

// //         .slide-in-left {
// //           animation: slideInLeft 0.8s ease-out forwards;
// //         }

// //         @keyframes slideInLeft {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         .fade-in-scale {
// //           animation: fadeInScale 0.6s ease-out forwards;
// //         }

// //         @keyframes fadeInScale {
// //           from {
// //             opacity: 0;
// //             transform: scale(0.9);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }
// //       `}</style>

// //       <section 
// //         ref={sectionRef}
// //         className="testimonial-section relative min-h-screen py-20 px-6 lg:py-28 lg:px-12"
// //       >
// //         {/* Soft floating gradients */}
// //         <div 
// //           className="soft-gradient"
// //           style={{
// //             background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
// //             left: `${mousePosition.x}%`,
// //             top: `${mousePosition.y}%`,
// //             transform: 'translate(-50%, -50%)',
// //           }}
// //         />
// //         <div 
// //           className="soft-gradient"
// //           style={{
// //             background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
// //             left: `${100 - mousePosition.x * 0.5}%`,
// //             top: `${100 - mousePosition.y * 0.5}%`,
// //             transform: 'translate(-50%, -50%)',
// //           }}
// //         />

// //         <div className="relative max-w-7xl mx-auto">
// //           {/* Header */}
// //           <div className="text-center mb-20 reveal-element" data-delay="0">
// //             <div className="inline-block mb-6">
// //               <span className="px-5 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 border border-blue-100">
// //                 ✨ Success Stories
// //               </span>
// //             </div>
// //             <h1 className="heading-display">
// //               Real Students,
// //               <br />
// //               Real Transformations
// //             </h1>
// //             <p className="subheading max-w-2xl mx-auto">
// //               See how our courses helped students master in-demand skills and launch successful careers in tech
// //             </p>
// //           </div>

// //           {/* Main Grid */}
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
// //             {/* Left Column - Cards */}
// //             <div className="lg:col-span-4 space-y-8">
// //               {/* Janet Card */}
// //               <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="100">
// //                 <div className="flex items-start gap-5 mb-5">
// //                   <div className="avatar-wrapper avatar-ring flex-shrink-0">
// //                     <img 
// //                       src={avatarUrls.janet} 
// //                       alt="Janet Elsa Chack" 
// //                       className="w-20 h-20 rounded-full object-cover"
// //                     />
// //                   </div>
// //                   <div className="flex-1 pt-1">
// //                     <h3 className="font-bold text-gray-900 text-lg mb-1">Janet Elsa Chack</h3>
// //                     <p className="text-gray-500 text-sm mb-3">St. Xavier College, Ahmedabad</p>
// //                     <div className="flex gap-1">
// //                       {[...Array(5)].map((_, i) => (
// //                         <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                         </svg>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-700 text-base leading-relaxed mb-5">
// //                   "The UI/UX course transformed how I approach design problems. The hands-on projects with real clients gave me portfolio pieces that landed me three job interviews!"
// //                 </p>
// //                 <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-blue-700">
// //                   UI/UX Design
// //                 </span>
// //               </div>

// //               {/* Ayline Card */}
// //               <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="200">
// //                 <div className="quote-mark" style={{ top: '-35px', right: '15px' }}>"</div>
// //                 <div className="flex items-start gap-5 mb-5">
// //                   <div className="avatar-wrapper avatar-ring flex-shrink-0">
// //                     <img 
// //                       src={avatarUrls.ayline} 
// //                       alt="Ayline Gijo" 
// //                       className="w-20 h-20 rounded-full object-cover"
// //                     />
// //                   </div>
// //                   <div className="flex-1 pt-1">
// //                     <h3 className="font-bold text-gray-900 text-lg mb-1">Ayline Gijo</h3>
// //                     <p className="text-gray-500 text-sm mb-3">Acropolis Institute</p>
// //                     <div className="flex gap-1">
// //                       {[...Array(5)].map((_, i) => (
// //                         <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                         </svg>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-700 text-base leading-relaxed mb-5">
// //                   "GraphQL completely changed my backend development approach. The course structure was perfect theory, practice, then real-world implementation."
// //                 </p>
// //                 <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-cyan-700">
// //                   GraphQL
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Center - HERO CARD */}
// //             <div className="lg:col-span-8 reveal-element" data-delay="150">
// //               <div className="hero-card rounded-3xl min-h-[600px] lg:min-h-[700px]">
// //                 <div className="hero-card-content h-full flex flex-col lg:flex-row">
// //                   {/* Image Section */}
// //                   <div className="lg:w-2/5 relative overflow-hidden rounded-tl-3xl lg:rounded-tr-none lg:rounded-bl-3xl rounded-tr-3xl">
// //                     <img 
// //                       src={avatarUrls.noubin} 
// //                       alt="Noubin Boban" 
// //                       className="w-full h-80 lg:h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-600/70 to-transparent" />
                    
// //                     {/* Floating badge */}
// //                     <div className="absolute top-6 left-6 floating-badge">
// //                       <div className="bg-white rounded-2xl px-5 py-3 shadow-2xl">
// //                         <div className="flex items-center gap-2 mb-1">
// //                           <div className="w-2.5 h-2.5 rounded-full bg-green-500 pulse-dot" />
// //                           <span className="text-xs font-bold text-gray-900">VERIFIED STUDENT</span>
// //                         </div>
// //                         <p className="text-xs text-gray-600">Course Completed • 2024</p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Content Section */}
// //                   <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
// //                     <div className="quote-mark" style={{ top: '-15px', left: '-5px', color: 'rgba(255,255,255,0.15)' }}>"</div>
                    
// //                     {/* Stars */}
// //                     <div className="flex gap-1.5 mb-6">
// //                       {[...Array(5)].map((_, i) => (
// //                         <svg 
// //                           key={i} 
// //                           className="w-7 h-7 text-yellow-300 fill-yellow-300 star-icon" 
// //                           viewBox="0 0 20 20"
// //                         >
// //                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                         </svg>
// //                       ))}
// //                     </div>

// //                     <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
// //                       From Zero to AI Hero This Course Changed Everything
// //                     </h2>

// //                     <p className="text-blue-50 text-base lg:text-lg leading-relaxed mb-8">
// //                       I came in knowing nothing about AI, and now I'm building production-ready GenAI applications. The instructors didn't just teach theory they showed us how to build real products. Within 3 months, I had a portfolio that got me interviews at top tech companies. The project-based learning and mentorship were game-changers.
// //                     </p>

// //                     {/* Student Info */}
// //                     <div className="flex items-center gap-6 pt-6 border-t border-white/20">
// //                       <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
// //                         <span className="text-3xl font-bold text-white">NB</span>
// //                       </div>
// //                       <div>
// //                         <h3 className="text-2xl font-bold text-white mb-1">Noubin Boban</h3>
// //                         <p className="text-blue-100 text-sm mb-2">Kerala University</p>
// //                         <div className="flex gap-2">
// //                           <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30">
// //                             🚀 GenAI Specialist
// //                           </span>
// //                           <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-200 border border-yellow-400/40">
// //                             ⭐ Top Performer
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Bottom Row */}
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //             {/* Leona Card */}
// //             <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="300">
// //               <div className="flex items-start gap-5 mb-5">
// //                 <div className="avatar-wrapper avatar-ring flex-shrink-0">
// //                   <img 
// //                     src={avatarUrls.leona} 
// //                     alt="Leona Joseph" 
// //                     className="w-20 h-20 rounded-full object-cover"
// //                   />
// //                 </div>
// //                 <div className="flex-1 pt-1">
// //                   <h3 className="font-bold text-gray-900 text-lg mb-1">Leona Joseph</h3>
// //                   <p className="text-gray-500 text-sm mb-3">SVVV University</p>
// //                   <div className="flex gap-1">
// //                     {[...Array(5)].map((_, i) => (
// //                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// //                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                       </svg>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //               <h4 className="text-gray-900 font-bold text-base mb-3">A Career-Defining Experience</h4>
// //               <p className="text-gray-700 text-base leading-relaxed mb-5">
// //                 "The DS-ML course gave me the confidence to transition from finance to data science. The real-world datasets and capstone project were exactly what I needed."
// //               </p>
// //               <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-purple-700">
// //                 Data Science & ML
// //               </span>
// //             </div>

// //             {/* Shiji Card */}
// //             <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="350">
// //               <div className="quote-mark" style={{ top: '-30px', right: '20px', fontSize: '5rem' }}>"</div>
// //               <div className="flex items-start gap-5 mb-5">
// //                 <div className="avatar-wrapper avatar-ring flex-shrink-0">
// //                   <img 
// //                     src={avatarUrls.shiji} 
// //                     alt="Shiji Sajimon" 
// //                     className="w-20 h-20 rounded-full object-cover"
// //                   />
// //                 </div>
// //                 <div className="flex-1 pt-1">
// //                   <h3 className="font-bold text-gray-900 text-lg mb-1">Shiji Sajimon</h3>
// //                   <p className="text-gray-500 text-sm mb-3">Chameli Devi College</p>
// //                   <div className="flex gap-1">
// //                     {[...Array(5)].map((_, i) => (
// //                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
// //                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                       </svg>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //               <h4 className="text-gray-900 font-bold text-base mb-3">Automation Mastery Unlocked</h4>
// //               <p className="text-gray-700 text-base leading-relaxed mb-5">
// //                 "N8N seemed intimidating at first, but this course broke it down perfectly. Now I'm automating workflows at my internship and my manager is impressed!"
// //               </p>
// //               <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-teal-700">
// //                 N8N Automation
// //               </span>
// //             </div>

// //             {/* Stats Card */}
// //             <div className="testimonial-card rounded-2xl p-8 reveal-element flex flex-col items-center justify-center text-center" data-delay="400">
// //               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg">
// //                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //                 </svg>
// //               </div>
// //               <h3 className="text-5xl font-bold text-gray-900 mb-2">500+</h3>
// //               <p className="text-gray-700 text-lg font-semibold mb-5">Students Transformed</p>
// //               <div className="flex flex-wrap justify-center gap-2 mb-5">
// //                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-blue-700">GenAI</span>
// //                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-purple-700">DS-ML</span>
// //                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-cyan-700">GraphQL</span>
// //                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-teal-700">N8N</span>
// //                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-blue-700">UI/UX</span>
// //               </div>
// //               <p className="text-gray-500 text-sm">Join the next generation of tech leaders</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default TestimonialsSection;

// 

// import React, { useEffect, useRef, useState } from 'react';

// const avatarUrls = {
//   noubin: '/images/12.webp',
//   janet: '/images/15.webp',
//   ayline: '/images/13.webp',
//   leona: '/images/16.webp',
//   shiji: '/images/11.webp'
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
//         .testimonial-section {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
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
//           font-weight: 700;
//           font-size: clamp(2.5rem, 7vw, 4.5rem);
//           line-height: 1.1;
//           letter-spacing: -0.02em;
//           color: #1e293b;
//           margin-bottom: 1rem;
//         }

//         .subheading {
//           font-size: clamp(1rem, 2vw, 1.2rem);
//           color: #64748b;
//           font-weight: 400;
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
//               <span className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)' }}>
//                 ✨ Success Stories
//               </span>
//             </div>
//             <h1 className="heading-display jsx-2bda95413a88938d text-5xl font-bold text-white mb-4">
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
//                     <h3 className="font-bold text-gray-900 text-lg mb-1">Janet Elsa Chack</h3>
//                     <p className="text-gray-500 text-sm mb-3">St. Xavier College, Ahmedabad</p>
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 text-base leading-relaxed mb-5">
//                   "The UI/UX course transformed how I approach design problems. The hands-on projects with real clients gave me portfolio pieces that landed me three job interviews!"
//                 </p>
//                 <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-teal-700">
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
//                     <h3 className="font-bold text-gray-900 text-lg mb-1">Ayline Gijo</h3>
//                     <p className="text-gray-500 text-sm mb-3">Acropolis Institute</p>
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 text-base leading-relaxed mb-5">
//                   "GraphQL completely changed my backend development approach. The course structure was perfect theory, practice, then real-world implementation."
//                 </p>
//                 <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-cyan-700">
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
//                           <span className="text-xs font-bold text-gray-900">VERIFIED STUDENT</span>
//                         </div>
//                         <p className="text-xs text-gray-600">Course Completed • 2024</p>
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

//                     <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
//                       From Zero to AI Hero This Course Changed Everything
//                     </h2>

//                     <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-8">
//                       I came in knowing nothing about AI, and now I'm building production-ready GenAI applications. The instructors didn't just teach theory they showed us how to build real products. Within 3 months, I had a portfolio that got me interviews at top tech companies. The project-based learning and mentorship were game-changers.
//                     </p>

//                     {/* Student Info */}
//                     <div className="flex items-center gap-6 pt-6 border-t border-white/20">
//                       <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
//                         <span className="text-3xl font-bold text-white">NB</span>
//                       </div>
//                       <div>
//                         <h3 className="text-2xl font-bold text-white mb-1">Noubin Boban</h3>
//                         <p className="text-white/80 text-sm mb-2">Kerala University</p>
//                         <div className="flex gap-2">
//                           <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30">
//                             🚀 GenAI Specialist
//                           </span>
//                           <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-200 border border-yellow-400/40">
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
//                   <h3 className="font-bold text-gray-900 text-lg mb-1">Leona Joseph</h3>
//                   <p className="text-gray-500 text-sm mb-3">SVVV University</p>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <h4 className="text-gray-900 font-bold text-base mb-3">A Career-Defining Experience</h4>
//               <p className="text-gray-700 text-base leading-relaxed mb-5">
//                 "The DS-ML course gave me the confidence to transition from finance to data science. The real-world datasets and capstone project were exactly what I needed."
//               </p>
//               <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-teal-700">
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
//                   <h3 className="font-bold text-gray-900 text-lg mb-1">Shiji Sajimon</h3>
//                   <p className="text-gray-500 text-sm mb-3">Chameli Devi College</p>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 star-icon" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <h4 className="text-gray-900 font-bold text-base mb-3">Automation Mastery Unlocked</h4>
//               <p className="text-gray-700 text-base leading-relaxed mb-5">
//                 "N8N seemed intimidating at first, but this course broke it down perfectly. Now I'm automating workflows at my internship and my manager is impressed!"
//               </p>
//               <span className="course-badge inline-block px-4 py-2 rounded-full text-sm font-medium text-cyan-700">
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
//               <h3 className="text-5xl font-bold text-gray-900 mb-2">500+</h3>
//               <p className="text-gray-700 text-lg font-semibold mb-5">Students Transformed</p>
//               <div className="flex flex-wrap justify-center gap-2 mb-5">
//                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-teal-700">GenAI</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-teal-700">DS-ML</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-cyan-700">GraphQL</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-cyan-700">N8N</span>
//                 <span className="course-badge px-3 py-2 rounded-full text-sm font-medium text-teal-700">UI/UX</span>
//               </div>
//               <p className="text-gray-500 text-sm">Join the next generation of tech leaders</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TestimonialsSection;


import React, { useEffect, useRef, useState } from 'react';

const avatarUrls = {
  noubin: '/images/12.webp',
  janet: '/images/15.webp',
  ayline: '/images/13.webp',
  leona: '/images/16.webp',
  shiji: '/images/11.webp'
};

const TestimonialsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

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
          background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0ea5e9 100%);
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(20, 184, 166, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
              <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="100">
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
              <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="200">
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
                  "GraphQL completely changed my backend development approach. The course structure was perfect theory, practice, then real-world implementation."
                </p>
                <span className="course-badge inline-block px-4 py-2 rounded-full text-sm text-cyan-700">
                  GraphQL
                </span>
              </div>
            </div>

            {/* Center - HERO CARD */}
            <div className="lg:col-span-8 reveal-element" data-delay="150">
              <div className="hero-card rounded-3xl min-h-[600px] lg:min-h-[700px]">
                <div className="hero-card-content h-full flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden rounded-tl-3xl lg:rounded-tr-none lg:rounded-bl-3xl rounded-tr-3xl">
                    <img 
                      src={avatarUrls.noubin} 
                      alt="Noubin Boban" 
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
                      From Zero to AI Hero This Course Changed Everything
                    </h2>

                    <p className="testimonial-text text-white/90 text-base lg:text-lg leading-relaxed mb-8">
                      I came in knowing nothing about AI, and now I'm building production-ready GenAI applications. The instructors didn't just teach theory they showed us how to build real products. Within 3 months, I had a portfolio that got me interviews at top tech companies. The project-based learning and mentorship were game-changers.
                    </p>

                    {/* Student Info */}
                    <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                      <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>NB</span>
                      </div>
                      <div>
                        <h3 className="student-name text-2xl text-white mb-1">Noubin Boban</h3>
                        <p className="student-college text-white/80 text-sm mb-2">Kerala University</p>
                        <div className="flex gap-2">
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30" style={{ fontFamily: 'Sora, sans-serif' }}>
                            🚀 GenAI Specialist
                          </span>
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-200 border border-yellow-400/40" style={{ fontFamily: 'Sora, sans-serif' }}>
                            ⭐ Top Performer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Leona Card */}
            <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="300">
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
            <div className="testimonial-card rounded-2xl p-7 reveal-element" data-delay="350">
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