// // 'use client';

// // import { useEffect, useRef } from 'react';
// // import { motion } from 'framer-motion';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // gsap.registerPlugin(ScrollTrigger);

// // export default function CommunityPage() {
// //   const containerRef = useRef(null);
// //   const headingRef = useRef(null);
// //   const statsRef = useRef(null);
// //   const cardsRef = useRef([]);

// //   useEffect(() => {
// //     // Animate heading on mount
// //     gsap.from(headingRef.current, {
// //       duration: 1,
// //       y: 50,
// //       opacity: 0,
// //       ease: 'power3.out',
// //     });

// //     // Animate stats with stagger
// //     gsap.from(statsRef.current?.querySelectorAll('.stat-item'), {
// //       duration: 1,
// //       y: 40,
// //       opacity: 0,
// //       stagger: 0.2,
// //       ease: 'back.out',
// //       scrollTrigger: {
// //         trigger: statsRef.current,
// //         start: 'top 80%',
// //       },
// //     });

// //     // Community cards animation with scroll
// //     cardsRef.current.forEach((card, index) => {
// //       gsap.from(card, {
// //         duration: 0.8,
// //         y: 60,
// //         opacity: 0,
// //         delay: index * 0.15,
// //         ease: 'back.out',
// //         scrollTrigger: {
// //           trigger: card,
// //           start: 'top 85%',
// //         },
// //       });

// //       // Hover animation setup
// //       card.addEventListener('mouseenter', () => {
// //         gsap.to(card, {
// //           duration: 0.4,
// //           y: -15,
// //           boxShadow: '0 30px 60px rgba(59, 130, 246, 0.3)',
// //           ease: 'power2.out',
// //         });
// //       });

// //       card.addEventListener('mouseleave', () => {
// //         gsap.to(card, {
// //           duration: 0.4,
// //           y: 0,
// //           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
// //           ease: 'power2.out',
// //         });
// //       });
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //     };
// //   }, []);

// //   const stats = [
// //     { number: '50K+', label: 'Active Members', icon: '👥' },
// //     { number: '500+', label: 'Daily Posts', icon: '💬' },
// //     { number: '100+', label: 'Study Groups', icon: '📚' },
// //     { number: '24/7', label: 'Live Support', icon: '🆘' },
// //   ];

// //   const communityTypes = [
// //     {
// //       title: 'Study Groups',
// //       description: 'Join focused groups learning specific technologies together',
// //       icon: '📖',
// //       members: '12.5K',
// //       color: 'from-blue-500 to-cyan-500',
// //       gradient: 'from-blue-50 to-cyan-50',
// //     },
// //     {
// //       title: 'Mentorship Circle',
// //       description: 'Connect with experienced developers for 1-on-1 guidance',
// //       icon: '🎯',
// //       members: '8.3K',
// //       color: 'from-cyan-500 to-teal-500',
// //       gradient: 'from-cyan-50 to-teal-50',
// //     },
// //     {
// //       title: 'Project Showcase',
// //       description: 'Share and discuss your projects with the community',
// //       icon: '🚀',
// //       members: '15.2K',
// //       color: 'from-teal-500 to-blue-500',
// //       gradient: 'from-teal-50 to-blue-50',
// //     },
// //     {
// //       title: 'Career Hub',
// //       description: 'Job opportunities and career advancement discussions',
// //       icon: '💼',
// //       members: '10.8K',
// //       color: 'from-purple-500 to-pink-500',
// //       gradient: 'from-purple-50 to-pink-50',
// //     },
// //     {
// //       title: 'Events & Hackathons',
// //       description: 'Participate in exciting competitions and learning events',
// //       icon: '🎉',
// //       members: '20.1K',
// //       color: 'from-pink-500 to-red-500',
// //       gradient: 'from-pink-50 to-red-50',
// //     },
// //     {
// //       title: 'General Discussion',
// //       description: 'Casual conversations and community updates',
// //       icon: '💡',
// //       members: '35.7K',
// //       color: 'from-orange-500 to-yellow-500',
// //       gradient: 'from-orange-50 to-yellow-50',
// //     },
// //   ];

// //   const testimonials = [
// //     {
// //       name: 'Alex Chen',
// //       role: 'Full Stack Developer',
// //       message: 'The community support helped me land my first dev job. Amazing people!',
// //       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
// //       rating: 5,
// //     },
// //     {
// //       name: 'Sarah Wilson',
// //       role: 'UI/UX Designer',
// //       message: 'Found my mentor here and grew exponentially in just 6 months.',
// //       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80',
// //       rating: 5,
// //     },
// //     {
// //       name: 'Marcus Johnson',
// //       role: 'Mobile Developer',
// //       message: 'The study groups and collaborative projects are game-changers!',
// //       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
// //       rating: 5,
// //     },
// //     {
// //       name: 'Emma Davis',
// //       role: 'Data Scientist',
// //       message: 'Incredible learning environment with supportive and knowledgeable members.',
// //       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
// //       rating: 5,
// //     },
// //   ];

// //   return (
// //     <main ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
// //       <Navbar />

// //       {/* Hero Section */}
// //       <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-cyan-50 mt-16">
        
// //         {/* Animated Background */}
// //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //           <motion.div
// //             animate={{
// //               scale: [1, 1.3, 1],
// //               x: [0, 50, 0],
// //               y: [0, -30, 0],
// //               opacity: [0.2, 0.35, 0.2],
// //             }}
// //             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //             className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 blur-3xl"
// //           />
// //           <motion.div
// //             animate={{
// //               scale: [1, 1.4, 1],
// //               x: [0, -50, 0],
// //               y: [0, 30, 0],
// //               opacity: [0.2, 0.35, 0.2],
// //             }}
// //             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
// //             className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-300 via-blue-200 to-cyan-200 blur-3xl"
// //           />
// //         </div>

// //         {/* Hero Content */}
// //         <motion.div
// //           ref={headingRef}
// //           className="relative z-10 text-center max-w-4xl mx-auto"
// //         >
// //           <motion.h1 
// //             className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
// //             animate={{ 
// //               scale: [1, 1.02, 1],
// //             }}
// //             transition={{ duration: 3, repeat: Infinity }}
// //           >
// //             Join Our Vibrant <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">Community</span>
// //           </motion.h1>
          
// //           <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
// //             Connect with thousands of learners, mentors, and creators building the future together
// //           </p>

// //           {/* CTA Buttons */}
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
// //             >
// //               Join Community Now
// //             </motion.button>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-8 py-4 bg-white border-2 border-blue-300 text-blue-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
// //             >
// //               Explore Groups
// //             </motion.button>
// //           </div>
// //         </motion.div>

// //         {/* Floating Elements */}
// //         <motion.div
// //           className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
// //           animate={{ 
// //             y: [0, -30, 0],
// //             scale: [1, 1.1, 1],
// //           }}
// //           transition={{ duration: 5, repeat: Infinity }}
// //         />
// //         <motion.div
// //           className="absolute bottom-1/4 left-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-2xl"
// //           animate={{ 
// //             y: [0, 30, 0],
// //             scale: [1, 1.15, 1],
// //           }}
// //           transition={{ duration: 7, repeat: Infinity }}
// //         />
// //       </section>

// //       {/* Stats Section */}
// //       <section ref={statsRef} className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid md:grid-cols-4 gap-8">
// //             {stats.map((stat, idx) => (
// //               <div
// //                 key={idx}
// //                 className="stat-item group relative p-8 bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300"
// //               >
// //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 rounded-3xl transition-all" />
// //                 <div className="relative z-10">
// //                   <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
// //                   <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
// //                     {stat.number}
// //                   </div>
// //                   <p className="text-gray-600 font-semibold">{stat.label}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Community Types Section */}
// //       <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
// //         <div className="max-w-6xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
// //               Community Spaces
// //             </h2>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //               Find your tribe and grow together with like-minded learners
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {communityTypes.map((type, idx) => (
// //               <div
// //                 key={idx}
// //                 ref={(el) => {
// //                   if (el) cardsRef.current[idx] = el;
// //                 }}
// //                 className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-white/60 shadow-lg transition-all duration-300 cursor-pointer group"
// //               >
// //                 {/* Gradient overlay */}
// //                 <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

// //                 {/* Top accent */}
// //                 <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${type.color}`} />

// //                 <div className="relative z-10">
// //                   <div className="flex items-start justify-between mb-4">
// //                     <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
// //                       {type.icon}
// //                     </div>
// //                     <motion.div
// //                       animate={{ rotate: 360 }}
// //                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //                       className="text-2xl opacity-20"
// //                     >
// //                       ✨
// //                     </motion.div>
// //                   </div>

// //                   <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
// //                   <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>

// //                   <div className="flex items-center justify-between pt-6 border-t border-gray-200">
// //                     <span className={`text-sm font-bold bg-gradient-to-r ${type.color} bg-clip-text text-transparent`}>
// //                       {type.members} members
// //                     </span>
// //                     <motion.div
// //                       whileHover={{ x: 5 }}
// //                       className="text-2xl"
// //                     >
// //                       →
// //                     </motion.div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
// //         <div className="max-w-6xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
// //               What Community Members Say
// //             </h2>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //               Real stories from people who transformed their careers
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {testimonials.map((testimonial, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: idx * 0.1 }}
// //                 viewport={{ once: true }}
// //                 className="group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-2xl transition-all"
// //               >
// //                 {/* Card shine effect */}
// //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform group-hover:skew-x-12 transition-all duration-500" />

// //                 <div className="relative z-10">
// //                   {/* Rating */}
// //                   <div className="flex gap-1 mb-4">
// //                     {[...Array(testimonial.rating)].map((_, i) => (
// //                       <span key={i} className="text-lg">⭐</span>
// //                     ))}
// //                   </div>

// //                   {/* Message */}
// //                   <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">
// //                     "{testimonial.message}"
// //                   </p>

// //                   {/* Author */}
// //                   <div className="flex items-center gap-4">
// //                     <img
// //                       src={testimonial.image}
// //                       alt={testimonial.name}
// //                       className="w-12 h-12 rounded-full object-cover border-2 border-blue-300"
// //                     />
// //                     <div>
// //                       <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
// //                       <p className="text-sm text-gray-600">{testimonial.role}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Events Section */}
// //       <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
// //         <div className="max-w-6xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
// //               Upcoming Community Events
// //             </h2>
// //             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //               Participate in hackathons, workshops, and networking sessions
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 title: 'Web Dev Hackathon 2025',
// //                 date: 'Jan 15-17, 2025',
// //                 icon: '🚀',
// //                 prize: '$5,000 in prizes',
// //                 color: 'from-blue-500 to-cyan-500',
// //               },
// //               {
// //                 title: 'AI & Machine Learning Workshop',
// //                 date: 'Jan 22, 2025',
// //                 icon: '🤖',
// //                 prize: 'Free access to premium courses',
// //                 color: 'from-cyan-500 to-teal-500',
// //               },
// //               {
// //                 title: 'Networking & Mentoring Night',
// //                 date: 'Jan 29, 2025',
// //                 icon: '🤝',
// //                 prize: 'Meet industry leaders',
// //                 color: 'from-teal-500 to-blue-500',
// //               },
// //             ].map((event, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, x: (idx - 1) * 50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.6, delay: idx * 0.1 }}
// //                 viewport={{ once: true }}
// //                 whileHover={{ y: -10 }}
// //                 className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
// //               >
// //                 {/* Gradient background */}
// //                 <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

// //                 <div className="relative z-10">
// //                   <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
// //                     {event.icon}
// //                   </div>
// //                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
// //                   <p className={`text-lg font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-4`}>
// //                     {event.date}
// //                   </p>
// //                   <p className="text-gray-600 mb-6">{event.prize}</p>
// //                   <motion.button
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className={`w-full py-3 bg-gradient-to-r ${event.color} text-white rounded-xl font-bold hover:shadow-lg transition-all`}
// //                   >
// //                     Register Now →
// //                   </motion.button>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Interactive Fun Section */}
// //       <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
// //         <div className="max-w-6xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl p-12 shadow-2xl"
// //           >
// //             {/* Animated background elements */}
// //             <motion.div
// //               className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
// //               animate={{
// //                 scale: [1, 1.2, 1],
// //                 opacity: [0.3, 0.5, 0.3],
// //               }}
// //               transition={{ duration: 5, repeat: Infinity }}
// //             />

// //             <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
// //               <h2 className="text-4xl sm:text-5xl font-black mb-6">
// //                 Ready to Connect?
// //               </h2>
// //               <p className="text-xl mb-8 text-white/90">
// //                 Join 50,000+ learners building amazing things together. Make friends, find mentors, and grow your skills!
// //               </p>
// //               <motion.button
// //                 whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
// //               >
// //                 Create Your Profile Now
// //               </motion.button>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </main>
// //   );
// // }


// 'use client';

// import { useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// gsap.registerPlugin(ScrollTrigger);

// export default function CommunityPage() {
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   useEffect(() => {
//     // Magnetic hover effect for cards
//     const cards = document.querySelectorAll('.magnetic-card');
    
//     cards.forEach(card => {
//       card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left - rect.width / 2;
//         const y = e.clientY - rect.top - rect.height / 2;
        
//         gsap.to(card, {
//           x: x * 0.1,
//           y: y * 0.1,
//           duration: 0.3,
//           ease: 'power2.out'
//         });
//       });
      
//       card.addEventListener('mouseleave', () => {
//         gsap.to(card, {
//           x: 0,
//           y: 0,
//           duration: 0.5,
//           ease: 'elastic.out(1, 0.3)'
//         });
//       });
//     });

//     // Reveal animations
//     gsap.from('.reveal-text', {
//       scrollTrigger: {
//         trigger: '.reveal-text',
//         start: 'top 80%',
//       },
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: 'power3.out'
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   const communitySpaces = [
//     {
//       title: 'BUILDERS',
//       subtitle: 'The Workshop',
//       description: 'Ship code. Break things. Learn fast.',
//       members: '15.2K',
//       color: '#FF6B6B',
//       accent: '#FFC233',
//       image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80',
//       tag: 'MOST ACTIVE'
//     },
//     {
//       title: 'MENTORS',
//       subtitle: 'The Circle',
//       description: 'Get guidance from industry veterans.',
//       members: '8.7K',
//       color: '#4ECDC4',
//       accent: '#44D9E6',
//       image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop&q=80',
//       tag: 'EXPERT LED'
//     },
//     {
//       title: 'CREATORS',
//       subtitle: 'The Studio',
//       description: 'Design, create, inspire others daily.',
//       members: '12.4K',
//       color: '#A78BFA',
//       accent: '#C084FC',
//       image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop&q=80',
//       tag: 'TRENDING'
//     }
//   ];

//   const features = [
//     { icon: '⚡', stat: '24/7', label: 'LIVE CHAT' },
//     { icon: '🎯', stat: '100+', label: 'EVENTS/YEAR' },
//     { icon: '🚀', stat: '50K+', label: 'MEMBERS' },
//     { icon: '💼', stat: '2K+', label: 'JOB POSTS' }
//   ];

//   const testimonials = [
//     {
//       quote: 'This community changed everything for me. The connections, the knowledge, the opportunities.',
//       author: 'SARAH CHEN',
//       role: 'Senior Developer @ Meta',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80'
//     },
//     {
//       quote: 'Found my co-founder here. We shipped 3 products together in the last year.',
//       author: 'MARCUS LEE',
//       role: 'Founder @ StartupCo',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80'
//     },
//     {
//       quote: 'The mentorship program is unreal. I went from junior to senior in 18 months.',
//       author: 'ELENA RODRIGUEZ',
//       role: 'Tech Lead @ Stripe',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80'
//     }
//   ];

//   return (
//     <main ref={containerRef} className="min-h-screen bg-zinc-50">
//       <Navbar />

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;700&display=swap');
        
//         .font-display {
//           font-family: 'Bebas Neue', sans-serif;
//           letter-spacing: 0.05em;
//         }
        
//         .font-mono {
//           font-family: 'JetBrains Mono', monospace;
//         }

//         .noise {
//           position: relative;
//         }

//         .noise::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
//           pointer-events: none;
//           z-index: 1;
//         }

//         .grain {
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
//         }
//       `}</style>

//       {/* Hero Section - Bold Typography */}
//       <section 
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden bg-zinc-900 noise"
//       >
//         {/* Grid Background */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
//             backgroundSize: '50px 50px'
//           }} />
//         </div>

//         <motion.div 
//           style={{ y, opacity }}
//           className="relative z-10 w-full max-w-7xl"
//         >
//           {/* Main Headline */}
//           <div className="mb-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="overflow-hidden"
//             >
//               <h1 className="font-display text-[12vw] md:text-[180px] leading-[0.85] text-white mb-4">
//                 YOUR
//               </h1>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="overflow-hidden flex items-center gap-8"
//             >
//               <h1 className="font-display text-[12vw] md:text-[180px] leading-[0.85] text-white">
//                 TRIBE
//               </h1>
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] flex-shrink-0"
//               />
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="overflow-hidden"
//             >
//               <h1 className="font-display text-[12vw] md:text-[180px] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#A78BFA]">
//                 AWAITS
//               </h1>
//             </motion.div>
//           </div>

//           {/* Subheading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="max-w-2xl mb-12"
//           >
//             <p className="text-zinc-400 text-xl md:text-2xl font-mono uppercase tracking-wider">
//               50,000+ BUILDERS / CREATORS / DREAMERS
//             </p>
//             <p className="text-zinc-500 text-lg md:text-xl font-mono mt-4">
//               Connect. Learn. Ship. Repeat.
//             </p>
//           </motion.div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative px-10 py-5 bg-white text-zinc-900 font-mono font-bold text-sm uppercase tracking-wider overflow-hidden"
//             >
//               <span className="relative z-10">JOIN NOW →</span>
//               <motion.div
//                 className="absolute inset-0 bg-[#FF6B6B]"
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-5 border-2 border-white text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-zinc-900 transition-colors"
//             >
//               EXPLORE
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 font-mono text-xs uppercase tracking-widest"
//         >
//           ↓ SCROLL
//         </motion.div>
//       </section>

//       {/* Stats Section - Brutalist Grid */}
//       <section className="py-20 px-6 md:px-12 bg-white grain">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="magnetic-card bg-zinc-900 p-8 border-4 border-zinc-900 hover:border-[#FF6B6B] transition-colors cursor-pointer group"
//               >
//                 <div className="text-6xl mb-4">{feature.icon}</div>
//                 <div className="font-display text-5xl text-white mb-2">{feature.stat}</div>
//                 <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
//                   {feature.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Community Spaces - Magazine Layout */}
//       <section className="py-32 px-6 md:px-12 bg-zinc-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             className="reveal-text font-display text-7xl md:text-9xl mb-4 text-zinc-900"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             FIND YOUR
//           </motion.h2>
//           <motion.h2
//             className="reveal-text font-display text-7xl md:text-9xl mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             SPACE
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {communitySpaces.map((space, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//                 className="group magnetic-card relative overflow-hidden cursor-pointer"
//               >
//                 {/* Image */}
//                 <div className="relative h-[500px] overflow-hidden">
//                   <motion.img
//                     src={space.image}
//                     alt={space.title}
//                     className="w-full h-full object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.6 }}
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div 
//                     className="absolute inset-0 opacity-80 mix-blend-multiply"
//                     style={{ background: `linear-gradient(135deg, ${space.color}, ${space.accent})` }}
//                   />

//                   {/* Tag */}
//                   <div className="absolute top-6 right-6 bg-white px-4 py-2 font-mono text-xs font-bold tracking-widest">
//                     {space.tag}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="bg-zinc-900 p-8 border-4 border-zinc-900 group-hover:border-current transition-colors" style={{ borderColor: space.color }}>
//                   <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
//                     {space.subtitle}
//                   </div>
//                   <h3 className="font-display text-5xl mb-4" style={{ color: space.color }}>
//                     {space.title}
//                   </h3>
//                   <p className="text-zinc-400 mb-6 font-mono text-sm leading-relaxed">
//                     {space.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div className="font-mono text-white font-bold">
//                       {space.members} <span className="text-zinc-600">MEMBERS</span>
//                     </div>
//                     <div className="text-2xl" style={{ color: space.color }}>→</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials - Asymmetric Layout */}
//       <section className="py-32 px-6 md:px-12 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="mb-20"
//           >
//             <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-4">
//               SUCCESS STORIES
//             </div>
//             <h2 className="font-display text-7xl md:text-9xl text-zinc-900">
//               REAL TALK
//             </h2>
//           </motion.div>

//           <div className="space-y-8">
//             {testimonials.map((testimonial, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`flex flex-col md:flex-row items-center gap-8 bg-zinc-50 p-8 md:p-12 border-4 border-zinc-900 ${
//                   idx % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
//                 } max-w-5xl`}
//               >
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.author}
//                   className="w-32 h-32 object-cover border-4 border-zinc-900"
//                 />
//                 <div className="flex-1">
//                   <p className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 mb-6 leading-tight">
//                     "{testimonial.quote}"
//                   </p>
//                   <div>
//                     <div className="font-display text-2xl text-zinc-900">{testimonial.author}</div>
//                     <div className="font-mono text-sm text-zinc-500 uppercase tracking-wider">
//                       {testimonial.role}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Events Calendar - Bold Grid */}
//       <section className="py-32 px-6 md:px-12 bg-zinc-900">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-20"
//           >
//             <h2 className="font-display text-7xl md:text-9xl text-white mb-4">
//               UPCOMING
//             </h2>
//             <div className="font-mono text-xl text-zinc-500 uppercase tracking-widest">
//               EVENTS THIS MONTH ↓
//             </div>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 date: 'JAN 20',
//                 title: 'HACKATHON 2025',
//                 description: 'Build. Ship. Win $10K',
//                 color: '#FF6B6B',
//                 spots: '234 JOINED'
//               },
//               {
//                 date: 'JAN 25',
//                 title: 'DESIGN SPRINT',
//                 description: 'UI/UX Workshop Series',
//                 color: '#4ECDC4',
//                 spots: '156 JOINED'
//               },
//               {
//                 date: 'JAN 30',
//                 title: 'FOUNDER MIXER',
//                 description: 'Network With VCs',
//                 color: '#A78BFA',
//                 spots: '89 JOINED'
//               },
//               {
//                 date: 'FEB 05',
//                 title: 'CODE REVIEW',
//                 description: 'Live Architecture Session',
//                 color: '#FFC233',
//                 spots: '312 JOINED'
//               }
//             ].map((event, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02 }}
//                 className="magnetic-card bg-white p-8 border-4 border-white hover:border-current transition-all cursor-pointer"
//                 style={{ borderColor: event.color }}
//               >
//                 <div className="flex items-start justify-between mb-6">
//                   <div 
//                     className="font-display text-6xl"
//                     style={{ color: event.color }}
//                   >
//                     {event.date}
//                   </div>
//                   <div className="bg-zinc-900 text-white px-4 py-2 font-mono text-xs font-bold tracking-widest">
//                     {event.spots}
//                   </div>
//                 </div>
//                 <h3 className="font-display text-4xl text-zinc-900 mb-3">
//                   {event.title}
//                 </h3>
//                 <p className="text-zinc-600 font-mono mb-6">
//                   {event.description}
//                 </p>
//                 <button 
//                   className="font-mono text-sm font-bold uppercase tracking-widest hover:underline"
//                   style={{ color: event.color }}
//                 >
//                   REGISTER NOW →
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA - Full Width Impact */}
//       <section className="relative py-40 px-6 md:px-12 bg-[#FF6B6B] overflow-hidden">
//         {/* Pattern Background */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
//             backgroundSize: '20px 20px'
//           }} />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative z-10 max-w-5xl mx-auto text-center"
//         >
//           <h2 className="font-display text-[15vw] md:text-[200px] leading-[0.85] text-white mb-8">
//             JOIN US
//           </h2>
          
//           <p className="text-white/90 text-2xl font-mono mb-12 max-w-2xl mx-auto">
//             50,000+ CREATORS BUILDING THE FUTURE. YOUR SEAT IS WAITING.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-12 py-6 bg-zinc-900 text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors"
//             >
//               START FOR FREE →
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-12 py-6 border-4 border-white text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#FF6B6B] transition-colors"
//             >
//               VIEW PRICING
//             </motion.button>
//           </div>

//           <p className="mt-12 text-white/70 font-mono text-sm uppercase tracking-widest">
//             NO CREDIT CARD • 7 DAY FREE TRIAL • CANCEL ANYTIME
//           </p>
//         </motion.div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Magnetic hover effect for cards
    const cards = document.querySelectorAll('.magnetic-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(card, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });

    // Reveal animations
    gsap.from('.reveal-text', {
      scrollTrigger: {
        trigger: '.reveal-text',
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const communitySpaces = [
    {
      title: 'BUILDERS',
      subtitle: 'The Workshop',
      description: 'Ship code. Break things. Learn fast.',
      members: '15.2K',
      color: '#3B82F6',
      accent: '#60A5FA',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80',
      tag: 'MOST ACTIVE'
    },
    {
      title: 'MENTORS',
      subtitle: 'The Circle',
      description: 'Get guidance from industry veterans.',
      members: '8.7K',
      color: '#06B6D4',
      accent: '#22D3EE',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop&q=80',
      tag: 'EXPERT LED'
    },
    {
      title: 'CREATORS',
      subtitle: 'The Studio',
      description: 'Design, create, inspire others daily.',
      members: '12.4K',
      color: '#0EA5E9',
      accent: '#38BDF8',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop&q=80',
      tag: 'TRENDING'
    }
  ];

  const features = [
    { icon: '⚡', stat: '24/7', label: 'LIVE CHAT' },
    { icon: '🎯', stat: '100+', label: 'EVENTS/YEAR' },
    { icon: '🚀', stat: '50K+', label: 'MEMBERS' },
    { icon: '💼', stat: '2K+', label: 'JOB POSTS' }
  ];

  const testimonials = [
    {
      quote: 'This community changed everything for me. The connections, the knowledge, the opportunities.',
      author: 'SARAH CHEN',
      role: 'Senior Developer @ Meta',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80'
    },
    {
      quote: 'Found my co-founder here. We shipped 3 products together in the last year.',
      author: 'MARCUS LEE',
      role: 'Founder @ StartupCo',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80'
    },
    {
      quote: 'The mentorship program is unreal. I went from junior to senior in 18 months.',
      author: 'ELENA RODRIGUEZ',
      role: 'Tech Lead @ Stripe',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80'
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <Navbar />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;700&display=swap');
        
        .font-display {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.05em;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .noise {
          position: relative;
        }

        .noise::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Hero Section - Bold Typography */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0369a1] noise"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 w-full max-w-7xl"
        >
          {/* Main Headline */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden"
            >
              <h1 className="font-display text-[12vw] md:text-[180px] leading-[0.85] text-white mb-4">
                YOUR
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="overflow-hidden flex items-center gap-8"
            >
              <h1 className="font-display text-[12vw] md:text-[180px] leading-[0.85] text-white">
                TRIBE
              </h1>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex-shrink-0"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="overflow-hidden"
            >
              <h1 className="font-display text-[12vw] md:text-[180px] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#0EA5E9]">
                AWAITS
              </h1>
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-cyan-300 text-xl md:text-2xl font-mono uppercase tracking-wider">
              50,000+ BUILDERS / CREATORS / DREAMERS
            </p>
            <p className="text-blue-300 text-lg md:text-xl font-mono mt-4">
              Connect. Learn. Ship. Repeat.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-blue-900 font-mono font-bold text-sm uppercase tracking-wider overflow-hidden"
            >
              <span className="relative z-10">JOIN NOW →</span>
              <motion.div
                className="absolute inset-0 bg-[#3B82F6]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-colors"
            >
              EXPLORE
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 font-mono text-xs uppercase tracking-widest"
        >
          ↓ SCROLL
        </motion.div>
      </section>

      {/* Stats Section - Brutalist Grid */}
      <section className="py-20 px-6 md:px-12 bg-white grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="magnetic-card bg-gradient-to-br from-[#1e40af] to-[#0369a1] p-8 border-4 border-[#1e40af] hover:border-[#3B82F6] transition-colors cursor-pointer group"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <div className="font-display text-5xl text-white mb-2">{feature.stat}</div>
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  {feature.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Spaces - Magazine Layout */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="reveal-text font-display text-7xl md:text-9xl mb-4 text-blue-900"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FIND YOUR
          </motion.h2>
          <motion.h2
            className="reveal-text font-display text-7xl md:text-9xl mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            SPACE
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {communitySpaces.map((space, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group magnetic-card relative overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[500px] overflow-hidden">
                  <motion.img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-80 mix-blend-multiply"
                    style={{ background: `linear-gradient(135deg, ${space.color}, ${space.accent})` }}
                  />

                  {/* Tag */}
                  <div className="absolute top-6 right-6 bg-white px-4 py-2 font-mono text-xs font-bold tracking-widest">
                    {space.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0369a1] p-8 border-4 border-[#1e40af] group-hover:border-current transition-colors" style={{ borderColor: space.color }}>
                  <div className="font-mono text-xs text-cyan-300 uppercase tracking-widest mb-2">
                    {space.subtitle}
                  </div>
                  <h3 className="font-display text-5xl mb-4" style={{ color: space.color }}>
                    {space.title}
                  </h3>
                  <p className="text-blue-100 mb-6 font-mono text-sm leading-relaxed">
                    {space.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-white font-bold">
                      {space.members} <span className="text-blue-300">MEMBERS</span>
                    </div>
                    <div className="text-2xl" style={{ color: space.color }}>→</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Asymmetric Layout */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="font-mono text-sm text-blue-600 uppercase tracking-widest mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="font-display text-7xl md:text-9xl text-blue-900">
              REAL TALK
            </h2>
          </motion.div>

          <div className="space-y-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12 border-4 border-blue-200 ${
                  idx % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
                } max-w-5xl`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-32 h-32 object-cover border-4 border-blue-500"
                />
                <div className="flex-1">
                  <p className="text-2xl md:text-3xl font-mono font-bold text-blue-900 mb-6 leading-tight">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-display text-2xl text-blue-900">{testimonial.author}</div>
                    <div className="font-mono text-sm text-blue-600 uppercase tracking-wider">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar - Bold Grid */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0c4a6e]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-7xl md:text-9xl text-white mb-4">
              UPCOMING
            </h2>
            <div className="font-mono text-xl text-cyan-300 uppercase tracking-widest">
              EVENTS THIS MONTH ↓
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: 'JAN 20',
                title: 'HACKATHON 2025',
                description: 'Build. Ship. Win $10K',
                color: '#3B82F6',
                spots: '234 JOINED'
              },
              {
                date: 'JAN 25',
                title: 'DESIGN SPRINT',
                description: 'UI/UX Workshop Series',
                color: '#06B6D4',
                spots: '156 JOINED'
              },
              {
                date: 'JAN 30',
                title: 'FOUNDER MIXER',
                description: 'Network With VCs',
                color: '#0EA5E9',
                spots: '89 JOINED'
              },
              {
                date: 'FEB 05',
                title: 'CODE REVIEW',
                description: 'Live Architecture Session',
                color: '#60A5FA',
                spots: '312 JOINED'
              }
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="magnetic-card bg-white p-8 border-4 border-white hover:border-current transition-all cursor-pointer"
                style={{ borderColor: event.color }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="font-display text-6xl"
                    style={{ color: event.color }}
                  >
                    {event.date}
                  </div>
                  <div className="bg-gradient-to-r from-[#0369a1] to-[#06b6d4] text-white px-4 py-2 font-mono text-xs font-bold tracking-widest">
                    {event.spots}
                  </div>
                </div>
                <h3 className="font-display text-4xl text-blue-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-blue-700 font-mono mb-6">
                  {event.description}
                </p>
                <button 
                  className="font-mono text-sm font-bold uppercase tracking-widest hover:underline"
                  style={{ color: event.color }}
                >
                  REGISTER NOW →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Impact */}
      <section className="relative py-40 px-6 md:px-12 bg-[#3B82F6] overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h2 className="font-display text-[15vw] md:text-[200px] leading-[0.85] text-white mb-8">
            JOIN US
          </h2>
          
          <p className="text-white/90 text-2xl font-mono mb-12 max-w-2xl mx-auto">
            50,000+ CREATORS BUILDING THE FUTURE. YOUR SEAT IS WAITING.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-[#1e40af] to-[#0369a1] text-white font-mono font-bold text-sm uppercase tracking-wider hover:from-[#1e3a8a] hover:to-[#0c4a6e] transition-all"
            >
              START FOR FREE →
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border-4 border-white text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#3B82F6] transition-colors"
            >
              VIEW PRICING
            </motion.button>
          </div>

          <p className="mt-12 text-white/70 font-mono text-sm uppercase tracking-widest">
            NO CREDIT CARD • 7 DAY FREE TRIAL • CANCEL ANYTIME
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}