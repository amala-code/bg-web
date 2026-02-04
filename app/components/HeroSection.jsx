// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FaDatabase, FaBrain, FaPaintBrush, FaProjectDiagram, FaNetworkWired, FaCogs } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';
// import kidImage from '../images/kid.png';

// export default function HeroSection() {
//     const router = useRouter();
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setMousePosition({
//                 x: (e.clientX / window.innerWidth - 0.5) * 15,
//                 y: (e.clientY / window.innerHeight - 0.5) * 15,
//             });
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     // Navigate to courses page
//     const handleCoursesNavigation = () => {
//         router.push('/courses');
//     };
//       const handleCommunityNavigation = () => {
//         router.push('/community');
//     };


//     // Left side courses
//     const leftCourses = [
//         { 
//             icon: <FaDatabase />, 
//             title: 'Data Science', 
//             tech: 'Build real-world ML models',
//             students: '25+ ',
//             position: 'top-[5%]', 
//             color: 'from-blue-400 to-cyan-500',
//             bgColor: 'from-blue-50 to-cyan-50',
//             delay: 0
//         },
//         { 
//             icon: <FaBrain />, 
//             title: 'Gen AI', 
//             tech: 'Create AI-powered solutions',
//             students: '28+ ',
//             position: 'top-[40%]', 
//             color: 'from-cyan-500 to-teal-500',
//             bgColor: 'from-cyan-50 to-teal-50',
//             delay: 0.2
//         },
//         { 
//             icon: <FaPaintBrush />, 
//             title: 'UI/UX', 
//             tech: 'Design beautiful user experiences',
//             students: '17+ ',
//             position: 'bottom-[5%]', 
//             color: 'from-teal-500 to-blue-500',
//             bgColor: 'from-teal-50 to-blue-50',
//             delay: 0.4
//         },
//     ];

//     const rightCourses = [
//         { 
//             icon: <FaProjectDiagram />, 
//             title: 'Agentic RAG', 
//             tech: 'Deploy AI agents & pipelines',
//             students: '18+ ',
//             position: 'top-[5%]', 
//             color: 'from-blue-500 to-cyan-500',
//             bgColor: 'from-blue-50 to-cyan-50',
//             delay: 0.1
//         },
//         { 
//             icon: <FaNetworkWired />, 
//             title: 'GraphQL', 
//             tech: 'Design scalable APIs',
//             students: '16+      ',
//             position: 'top-[40%]', 
//             color: 'from-cyan-400 to-teal-400',
//             bgColor: 'from-cyan-50 to-teal-50',
//             delay: 0.3
//         },
//         { 
//             icon: <FaCogs />, 
//             title: 'N8N', 
//             tech: 'Automate business workflows',
//             students: '14+ ',
//             position: 'bottom-[5%]', 
//             color: 'from-teal-400 to-blue-500',
//             bgColor: 'from-teal-50 to-blue-50',
//             delay: 0.5
//         },
//     ];

//     return (
//         <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-white">

//             {/* Enhanced Background Elements */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {/* Large flowing gradient orbs */}
//                 <motion.div
//                     animate={{
//                         scale: [1, 1.3, 1],
//                         x: [0, 50, 0],
//                         y: [0, -30, 0],
//                         opacity: [0.2, 0.35, 0.2],
//                     }}
//                     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                     className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 blur-3xl"
//                 />
//                 <motion.div
//                     animate={{
//                         scale: [1, 1.4, 1],
//                         x: [0, -50, 0],
//                         y: [0, 30, 0],
//                         opacity: [0.2, 0.35, 0.2],
//                     }}
//                     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//                     className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-300 via-blue-200 to-cyan-200 blur-3xl"
//                 />
//                 <motion.div
//                     animate={{
//                         scale: [1.2, 1, 1.2],
//                         opacity: [0.15, 0.25, 0.15],
//                     }}
//                     transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-200 via-teal-200 to-blue-200 blur-3xl"
//                 />

//                 {/* Animated circles */}
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                     className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-200/30 rounded-full"
//                 />
//                 <motion.div
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//                     className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-teal-200/30 rounded-full"
//                 />

//                 {/* Flowing particles */}
//                 {[...Array(25)].map((_, i) => (
//                     <motion.div
//                         key={i}
//                         animate={{
//                             y: [0, -100, 0],
//                             x: [0, Math.sin(i) * 60, 0],
//                             opacity: [0.2, 0.6, 0.2],
//                             scale: [1, 1.5, 1],
//                         }}
//                         transition={{
//                             duration: 8 + i * 0.4,
//                             repeat: Infinity,
//                             delay: i * 0.2,
//                             ease: "easeInOut"
//                         }}
//                         className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
//                         style={{
//                             top: `${15 + i * 3.5}%`,
//                             left: `${8 + i * 3.8}%`,
//                         }}
//                     />
//                 ))}

//                 {/* Subtle grid overlay */}
//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
//             </div>

//             {/* Main Content Container */}
//             <div className="relative z-10 w-full max-w-7xl mx-auto">

//                 {/* Top Badge */}
//                 <motion.div
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="flex justify-center mb-9"
//                 >
//                     <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full px-6 py-3 shadow-lg">
//                         <div className="absolute inset-0 shimmer" />
//                         <div className="relative flex items-center gap-2">
//                             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
//                             <span className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
//                                 Join 800+ Students Learning Live
//                             </span>
//                             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-pulse" />
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Main Heading - SEO Optimized */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="text-center mb-4"
//                 >
//                     {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight tracking-tight mt-4 ">
//                         Online Courses with Live Classes, Job Placement & Career Tests
//                     </h1> */}
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight tracking-tight mt-4 ">
// Job-Ready Courses for Freshers with Placement Support & Career Skill Tests</h1>

//                     {/* <p className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight tracking-tight mt-4">
//                         Master Tech Skills & Get Hired
//                     </p> */}
//                     <p className="text-gray-600 mt-2" style={{display: "none"}}>
//   Online courses with live classes, hands-on projects, certification pathways,
//   and job placement support for freshers and working professionals,internships, courses.
// </p>

                    
//                 </motion.div>

//                 {/* Subtitle */}
//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4, duration: 0.8 }}
//                     className="text-center text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium"
//                 >
//                     Learn from industry experts with hands-on projects, mentorship, placement assistance, internships, Resume and skill assessment tests
//                 </motion.p>

//                 {/* CTA Buttons */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6, duration: 0.6 }}
//                     className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
//                 >
//                     <motion.button
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={handleCoursesNavigation}
//                         className="relative z-10 cursor-pointer overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-2xl font-bold text-base shadow-2xl shadow-blue-500/30"
//                     >
//                         <div className="absolute inset-0 shimmer" />
//                         <span className="relative flex items-center gap-2">
//                             Start Learning Now
//                             <motion.span
//                                 animate={{ x: [0, 5, 0] }}
//                                 transition={{ duration: 1.5, repeat: Infinity }}
//                             >
//                                 →
//                             </motion.span>
//                         </span>
//                     </motion.button>
                    
//                     <motion.button
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={handleCommunityNavigation}
//                         className="px-8 z-10 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-base shadow-xl hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all cursor-pointer"
//                     >
//                         Join Community
//                     </motion.button>
//                 </motion.div>

//                 {/* MASSIVE Student Image Section with Floating Cards on Sides */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.8, duration: 1 }}
//                     className="relative flex justify-center items-center min-h-[75vh] mb-16"
//                 >
//                     {/* Container for the entire section */}
//                     <div className="relative w-full flex justify-center items-center">
                        
//                         {/* LEFT SIDE FLOATING CARDS - HORIZONTAL & PREMIUM GLASSMORPHISM */}
//                         <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 -translate-x-[50%]">
//                             {leftCourses.map((course, idx) => (
//                                 <motion.div
//                                     key={idx}
//                                     initial={{ opacity: 0, x: -100, scale: 0 }}
//                                     animate={{ 
//                                         opacity: 1, 
//                                         x: 0,
//                                         scale: 1,
//                                     }}
//                                     transition={{
//                                         delay: 1.2 + course.delay,
//                                         type: "spring",
//                                         stiffness: 150,
//                                         damping: 15,
//                                     }}
//                                     style={{
//                                         animationDelay: `${idx * 0.8}s`
//                                     }}
//                                     className="float-gentle"
//                                 >
//                                     <motion.div
//                                         whileHover={{ 
//                                             scale: 1.05,
//                                             x: 10,
//                                             transition: { duration: 0.3 }
//                                         }}
//                                         onClick={handleCoursesNavigation}
//                                         className="relative overflow-hidden backdrop-blur-3xl bg-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer group w-[280px] border border-white/30"
//                                         style={{
//                                             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
//                                             boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
//                                         }}
//                                     >
//                                         {/* Premium Blue/Teal Reflection Overlays */}
//                                         <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
//                                             <motion.div
//                                                 animate={{
//                                                     opacity: [0.3, 0.6, 0.3],
//                                                     y: [0, 10, 0],
//                                                 }}
//                                                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                                                 className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/40 via-blue-300/30 to-transparent rounded-full blur-2xl"
//                                             />
                                            
//                                             <motion.div
//                                                 animate={{
//                                                     opacity: [0.2, 0.5, 0.2],
//                                                     x: [0, 15, 0],
//                                                 }}
//                                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                                                 className="absolute top-1/2 -right-10 w-32 h-32 bg-gradient-to-br from-teal-400/40 via-cyan-300/30 to-transparent rounded-full blur-2xl"
//                                             />
//                                         </div>

//                                         {/* Frosted glass effect */}
//                                         <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

//                                         {/* Premium border glow */}
//                                         <motion.div 
//                                             animate={{ 
//                                                 opacity: [0.3, 0.7, 0.3],
//                                             }}
//                                             transition={{ duration: 3, repeat: Infinity }}
//                                             className="absolute inset-0 rounded-2xl pointer-events-none"
//                                             style={{
//                                                 boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
//                                             }}
//                                         />

//                                         {/* Horizontal Layout */}
//                                         <div className="relative z-10 flex items-center gap-4">
//                                             <motion.div 
//                                                 animate={{ 
//                                                     rotate: [0, -5, 5, 0],
//                                                     scale: [1, 1.05, 1]
//                                                 }}
//                                                 transition={{ 
//                                                     duration: 4, 
//                                                     repeat: Infinity,
//                                                     delay: idx * 0.5 
//                                                 }}
//                                                 className="flex-shrink-0"
//                                             >
//                                                 <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
//                                                     <span className="text-white text-3xl">
//                                                         {course.icon}
//                                                     </span>
//                                                 </div>
//                                             </motion.div>
                                            
//                                             {/* Content */}
//                                             <div className="flex-1">
//                                                 <h3 className="font-black text-gray-900 text-xl mb-0.5">
//                                                     {course.title}
//                                                 </h3>
//                                                 <p className="text-sm text-gray-700 font-semibold mb-2">
//                                                     {course.tech}
//                                                 </p>
                                                
//                                                 {/* Students Count - Compact */}
//                                                 <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-xl p-2 border border-white/30">
//                                                     <div className="flex items-center gap-2">
//                                                         <span className="text-sm text-gray-700 font-bold">👥</span>
//                                                         <motion.span 
//                                                             animate={{ scale: [1, 1.03, 1] }}
//                                                             transition={{ duration: 2, repeat: Infinity }}
//                                                             className="text-2xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
//                                                         >
//                                                             {course.students}
//                                                         </motion.span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Bottom accent gradient */}
//                                         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-60" />
//                                     </motion.div>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         {/* CENTER - MASSIVE Student Container */}
//                         <div className="relative w-full max-w-4xl mx-auto">
//                             {/* Multiple layered glowing backgrounds */}
//                             <motion.div
//                                 animate={{
//                                     scale: [1, 1.15, 1],
//                                     opacity: [0.4, 0.7, 0.4],
//                                     rotate: [0, 5, 0],
//                                 }}
//                                 transition={{ duration: 5, repeat: Infinity }}
//                                 className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/40 to-teal-400/40 rounded-[4rem] blur-3xl"
//                             />
//                             <motion.div
//                                 animate={{
//                                     scale: [1.1, 1, 1.1],
//                                     opacity: [0.3, 0.6, 0.3],
//                                     rotate: [0, -5, 0],
//                                 }}
//                                 transition={{ duration: 7, repeat: Infinity }}
//                                 className="absolute inset-0 bg-gradient-to-tl from-teal-400/40 via-blue-400/40 to-cyan-400/40 rounded-[4rem] blur-3xl"
//                             />

//                             {/* Animated rings around student */}
//                             <motion.div
//                                 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
//                                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                                 className="absolute inset-0 border-4 border-blue-300/20 rounded-[4rem]"
//                             />
//                             <motion.div
//                                 animate={{ rotate: -360, scale: [1.05, 1, 1.05] }}
//                                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                                 className="absolute inset-4 border-4 border-cyan-300/20 rounded-[4rem]"
//                             />

//                             {/* Beautiful gradient mesh background */}
//                             <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur-2xl rounded-[4rem] p-8 sm:p-12 md:p-16 border-2 border-white/60 shadow-2xl overflow-hidden">
                                
//                                 {/* Animated gradient overlay */}
//                                 <motion.div
//                                     animate={{ 
//                                         rotate: 360,
//                                         scale: [1, 1.2, 1]
//                                     }}
//                                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                                     className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-teal-500/5 rounded-[4rem]"
//                                 />

//                                 {/* Decorative corner elements */}
//                                 <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-blue-400/30 rounded-tl-3xl" />
//                                 <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-cyan-400/30 rounded-tr-3xl" />
//                                 <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-teal-400/30 rounded-bl-3xl" />
//                                 <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-blue-400/30 rounded-br-3xl" />

//                                 {/* Wave patterns */}
//                                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
//                                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50" />
                                
//                                 {/* MASSIVE Student Image */}
//                                 <motion.img
//                                     src={kidImage.src}
//                                     alt="Student Learning Online Courses with Job Placement"
//                                     className="relative z-10 w-full max-w-none h-auto drop-shadow-2xl scale-125"
//                                     animate={{ y: [0, -10, 0] }}
//                                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                                 />
//                             </div>
//                         </div>

//                         {/* RIGHT SIDE FLOATING CARDS - HORIZONTAL & PREMIUM GLASSMORPHISM */}
//                         <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 translate-x-[50%]">
//                             {rightCourses.map((course, idx) => (
//                                 <motion.div
//                                     key={idx}
//                                     initial={{ opacity: 0, x: 100, scale: 0 }}
//                                     animate={{ 
//                                         opacity: 1, 
//                                         x: 0,
//                                         scale: 1,
//                                     }}
//                                     transition={{
//                                         delay: 1.2 + course.delay,
//                                         type: "spring",
//                                         stiffness: 150,
//                                         damping: 15,
//                                     }}
//                                     style={{
//                                         animationDelay: `${idx * 0.8}s`
//                                     }}
//                                     className="float-gentle"
//                                 >
//                                     <motion.div
//                                         whileHover={{ 
//                                             scale: 1.05,
//                                             x: -10,
//                                             transition: { duration: 0.3 }
//                                         }}
//                                         onClick={handleCoursesNavigation}
//                                         className="relative overflow-hidden backdrop-blur-3xl bg-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer group w-[280px] border border-white/30"
//                                         style={{
//                                             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
//                                             boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
//                                         }}
//                                     >
//                                         {/* Premium Blue/Teal Reflection Overlays */}
//                                         <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
//                                             <motion.div
//                                                 animate={{
//                                                     opacity: [0.3, 0.6, 0.3],
//                                                     y: [0, 10, 0],
//                                                 }}
//                                                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                                                 className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/40 via-blue-300/30 to-transparent rounded-full blur-2xl"
//                                             />
                                            
//                                             <motion.div
//                                                 animate={{
//                                                     opacity: [0.2, 0.5, 0.2],
//                                                     x: [0, -15, 0],
//                                                 }}
//                                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                                                 className="absolute top-1/2 -left-10 w-32 h-32 bg-gradient-to-br from-teal-400/40 via-cyan-300/30 to-transparent rounded-full blur-2xl"
//                                             />

//                                             {/* Sweeping reflection light */}
//                                             <div className="absolute inset-0 reflection-animation">
//                                                 <div className="w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//                                             </div>
//                                         </div>

//                                         {/* Frosted glass effect */}
//                                         <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

//                                         {/* Premium border glow */}
//                                         <motion.div 
//                                             animate={{ 
//                                                 opacity: [0.3, 0.7, 0.3],
//                                             }}
//                                             transition={{ duration: 3, repeat: Infinity }}
//                                             className="absolute inset-0 rounded-2xl pointer-events-none"
//                                             style={{
//                                                 boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
//                                             }}
//                                         />
                                        
//                                         {/* Horizontal Layout */}
//                                         <div className="relative z-10 flex items-center gap-4">
//                                             {/* Icon with BLUE-TEAL gradient background */}
//                                             <motion.div 
//                                                 animate={{ 
//                                                     rotate: [0, -5, 5, 0],
//                                                     scale: [1, 1.05, 1]
//                                                 }}
//                                                 transition={{ 
//                                                     duration: 4, 
//                                                     repeat: Infinity,
//                                                     delay: idx * 0.5 
//                                                 }}
//                                                 className="flex-shrink-0"
//                                             >
//                                                 <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
//                                                     <span className="text-white text-3xl">
//                                                         {course.icon}
//                                                     </span>
//                                                 </div>
//                                             </motion.div>
                                            
//                                             {/* Content */}
//                                             <div className="flex-1">
//                                                 <h3 className="font-black text-gray-900 text-xl mb-0.5">
//                                                     {course.title}
//                                                 </h3>
//                                                 <p className="text-sm text-gray-700 font-semibold mb-2">
//                                                     {course.tech}
//                                                 </p>
                                                
//                                                 {/* Students Count - Compact */}
//                                                 <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-xl p-2 border border-white/30">
//                                                     <div className="flex items-center gap-2">
//                                                         <span className="text-sm text-gray-700 font-bold">👥</span>
//                                                         <motion.span 
//                                                             animate={{ scale: [1, 1.03, 1] }}
//                                                             transition={{ duration: 2, repeat: Infinity }}
//                                                             className="text-2xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
//                                                         >
//                                                             {course.students}
//                                                         </motion.span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Bottom accent gradient */}
//                                         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-60" />
//                                     </motion.div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaBrain, FaPaintBrush, FaProjectDiagram, FaNetworkWired, FaCogs } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import kidImage from '../images/kid.png';

export default function HeroSection() {
    const router = useRouter();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 15,
                y: (e.clientY / window.innerHeight - 0.5) * 15,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Navigate to courses page
    const handleCoursesNavigation = () => {
        router.push('/courses');
    };
    const handleCommunityNavigation = () => {
        router.push('/community');
    };

    // Left side courses
    const leftCourses = [
        { 
            icon: <FaDatabase />, 
            title: 'Data Science', 
            tech: 'Build real-world ML models',
            students: '25+ ',
            position: 'top-[5%]', 
            color: 'from-blue-400 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50',
            delay: 0
        },
        { 
            icon: <FaBrain />, 
            title: 'Gen AI', 
            tech: 'Create AI-powered solutions',
            students: '28+ ',
            position: 'top-[40%]', 
            color: 'from-cyan-500 to-teal-500',
            bgColor: 'from-cyan-50 to-teal-50',
            delay: 0.2
        },
        { 
            icon: <FaPaintBrush />, 
            title: 'UI/UX', 
            tech: 'Design beautiful user experiences',
            students: '17+ ',
            position: 'bottom-[5%]', 
            color: 'from-teal-500 to-blue-500',
            bgColor: 'from-teal-50 to-blue-50',
            delay: 0.4
        },
    ];

    const rightCourses = [
        { 
            icon: <FaProjectDiagram />, 
            title: 'Agentic RAG', 
            tech: 'Deploy AI agents & pipelines',
            students: '18+ ',
            position: 'top-[5%]', 
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50',
            delay: 0.1
        },
        { 
            icon: <FaNetworkWired />, 
            title: 'GraphQL', 
            tech: 'Design scalable APIs',
            students: '16+      ',
            position: 'top-[40%]', 
            color: 'from-cyan-400 to-teal-400',
            bgColor: 'from-cyan-50 to-teal-50',
            delay: 0.3
        },
        { 
            icon: <FaCogs />, 
            title: 'N8N', 
            tech: 'Automate business workflows',
            students: '14+ ',
            position: 'bottom-[5%]', 
            color: 'from-teal-400 to-blue-500',
            bgColor: 'from-teal-50 to-blue-50',
            delay: 0.5
        },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">

            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large flowing gradient orbs - adjusted for mobile */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-32 sm:-top-48 -left-32 sm:-left-48 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-32 sm:-bottom-48 -right-32 sm:-right-48 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-br from-teal-300 via-blue-200 to-cyan-200 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-br from-cyan-200 via-teal-200 to-blue-200 blur-3xl"
                />

                {/* Animated circles - responsive sizing */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 border border-blue-200/30 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 border border-teal-200/30 rounded-full"
                />

                {/* Flowing particles - reduced on mobile */}
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.sin(i) * 60, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 8 + i * 0.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                        className="absolute w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        style={{
                            top: `${15 + i * 3.5}%`,
                            left: `${8 + i * 3.8}%`,
                        }}
                    />
                ))}

                {/* Subtle grid overlay - adjusted for mobile */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:100px_100px] opacity-20" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                {/* Top Badge */}
                {/* <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex justify-center mb-5 sm:mb-7 md:mb-9"
                > */}
                <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="flex justify-center mt-6 mb-5 sm:mb-7 md:mb-9"
>

                    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                        <div className="absolute inset-0 shimmer" />
                        <div className="relative flex items-center gap-1.5 sm:gap-2">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                            <span className="text-xs sm:text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                                Join 100+ Students Learning Live
                            </span>
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-pulse" />
                        </div>
                    </div>
                </motion.div>

                {/* Main Heading - SEO Optimized with better mobile spacing */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-3 sm:mb-4 px-2"
                > */}
                <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-center mt-16 sm:mt-20 md:mt-20 mb-3 sm:mb-4 px-2"
>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight tracking-tight mt-2 sm:mt-4">
                        Job-Ready Courses for Students with Projects, Support & Career Skill Tests
                    </h1>

                    <p className="text-gray-600 mt-2" style={{display: "none"}}>
                        Online courses with live classes, hands-on projects, certification pathways,
                        and job placement support for freshers and working professionals,internships, courses.
                    </p>
                </motion.div>

                {/* Subtitle - adjusted spacing */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium px-3"
                >
                    Learn from industry experts with hands-on projects, mentorship, placement assistance, internships, Resume and skill assessment tests
                </motion.p>

                {/* CTA Buttons - better mobile spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-3"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCoursesNavigation}
                        className="relative z-10 w-full sm:w-auto cursor-pointer overflow-hidden group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-2xl font-bold text-sm sm:text-base shadow-2xl shadow-blue-500/30"
                    >
                        <div className="absolute inset-0 shimmer" />
                        <span className="relative flex items-center justify-center gap-2">
                            Start Learning Now
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCommunityNavigation}
                        className="w-full sm:w-auto px-6 sm:px-8 z-10 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all cursor-pointer"
                    >
                        Join Community
                    </motion.button>
                </motion.div>

                {/* Student Image Section with Floating Cards - mobile optimized */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    // className="relative flex justify-center items-center min-h-[50vh] sm:min-h-[60vh] lg:min-h-[75vh] mb-8 sm:mb-12 md:mb-16"
                    className="
  relative flex justify-center items-center
  min-h-[40vh] sm:min-h-[55vh] lg:min-h-[75vh]
  -mt-10 sm:mt-0
  mb-4 sm:mb-10 md:mb-16
"

                >
                    {/* Container for the entire section */}
                    <div className="relative w-full flex justify-center items-center">
                        
                        {/* LEFT SIDE FLOATING CARDS - Only visible on xl screens */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 -translate-x-[50%]">
                            {leftCourses.map((course, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -100, scale: 0 }}
                                    animate={{ 
                                        opacity: 1, 
                                        x: 0,
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay: 1.2 + course.delay,
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 15,
                                    }}
                                    style={{
                                        animationDelay: `${idx * 0.8}s`
                                    }}
                                    className="float-gentle"
                                >
                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.05,
                                            x: 10,
                                            transition: { duration: 0.3 }
                                        }}
                                        onClick={handleCoursesNavigation}
                                        className="relative overflow-hidden backdrop-blur-3xl bg-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer group w-[280px] border border-white/30"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                                            boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        {/* Premium Blue/Teal Reflection Overlays */}
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                            <motion.div
                                                animate={{
                                                    opacity: [0.3, 0.6, 0.3],
                                                    y: [0, 10, 0],
                                                }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/40 via-blue-300/30 to-transparent rounded-full blur-2xl"
                                            />
                                            
                                            <motion.div
                                                animate={{
                                                    opacity: [0.2, 0.5, 0.2],
                                                    x: [0, 15, 0],
                                                }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                                className="absolute top-1/2 -right-10 w-32 h-32 bg-gradient-to-br from-teal-400/40 via-cyan-300/30 to-transparent rounded-full blur-2xl"
                                            />
                                        </div>

                                        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

                                        <motion.div 
                                            animate={{ 
                                                opacity: [0.3, 0.7, 0.3],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute inset-0 rounded-2xl pointer-events-none"
                                            style={{
                                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                                            }}
                                        />

                                        <div className="relative z-10 flex items-center gap-4">
                                            <motion.div 
                                                animate={{ 
                                                    rotate: [0, -5, 5, 0],
                                                    scale: [1, 1.05, 1]
                                                }}
                                                transition={{ 
                                                    duration: 4, 
                                                    repeat: Infinity,
                                                    delay: idx * 0.5 
                                                }}
                                                className="flex-shrink-0"
                                            >
                                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                                                    <span className="text-white text-3xl">
                                                        {course.icon}
                                                    </span>
                                                </div>
                                            </motion.div>
                                            
                                            <div className="flex-1">
                                                <h3 className="font-black text-gray-900 text-xl mb-0.5">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-gray-700 font-semibold mb-2">
                                                    {course.tech}
                                                </p>
                                                
                                                <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-xl p-2 border border-white/30">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-700 font-bold">👥</span>
                                                        <motion.span 
                                                            animate={{ scale: [1, 1.03, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className="text-2xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
                                                        >
                                                            {course.students}
                                                        </motion.span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-60" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CENTER - Student Container - mobile optimized */}
                        <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto px-2 sm:px-0">
                            {/* Multiple layered glowing backgrounds - adjusted for mobile */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/40 to-teal-400/40 rounded-3xl sm:rounded-[4rem] blur-2xl sm:blur-3xl"
                            />
                            <motion.div
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    opacity: [0.2, 0.5, 0.2],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{ duration: 7, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-tl from-teal-400/40 via-blue-400/40 to-cyan-400/40 rounded-3xl sm:rounded-[4rem] blur-2xl sm:blur-3xl"
                            />

                            {/* Animated rings - responsive */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 sm:border-4 border-blue-300/20 rounded-3xl sm:rounded-[4rem]"
                            />
                            <motion.div
                                animate={{ rotate: -360, scale: [1.05, 1, 1.05] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 sm:inset-4 border-2 sm:border-4 border-cyan-300/20 rounded-3xl sm:rounded-[4rem]"
                            />

                            {/* Beautiful gradient mesh background - mobile optimized padding */}
                            <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur-2xl rounded-3xl sm:rounded-[4rem] p-4 sm:p-8 md:p-12 lg:p-16 border border-white/60 sm:border-2 shadow-2xl overflow-hidden">
                                
                                <motion.div
                                    animate={{ 
                                        rotate: 360,
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-teal-500/5 rounded-3xl sm:rounded-[4rem]"
                                />

                                {/* Decorative corner elements - responsive sizing */}
                                <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-10 sm:w-20 h-10 sm:h-20 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-blue-400/30 rounded-tl-2xl sm:rounded-tl-3xl" />
                                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-10 sm:w-20 h-10 sm:h-20 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-cyan-400/30 rounded-tr-2xl sm:rounded-tr-3xl" />
                                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-10 sm:w-20 h-10 sm:h-20 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-teal-400/30 rounded-bl-2xl sm:rounded-bl-3xl" />
                                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 sm:w-20 h-10 sm:h-20 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-blue-400/30 rounded-br-2xl sm:rounded-br-3xl" />

                                {/* Wave patterns */}
                                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50" />
                                
                                {/* Student Image - mobile optimized scale */}
                                <motion.img
                                    src={kidImage.src}
                                    alt="Student Learning Online Courses with Job Placement"
                                    className="relative z-10 w-full max-w-none h-auto drop-shadow-2xl scale-110 sm:scale-125"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </div>

                        {/* RIGHT SIDE FLOATING CARDS - Only visible on xl screens */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 translate-x-[50%]">
                            {rightCourses.map((course, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 100, scale: 0 }}
                                    animate={{ 
                                        opacity: 1, 
                                        x: 0,
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay: 1.2 + course.delay,
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 15,
                                    }}
                                    style={{
                                        animationDelay: `${idx * 0.8}s`
                                    }}
                                    className="float-gentle"
                                >
                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.05,
                                            x: -10,
                                            transition: { duration: 0.3 }
                                        }}
                                        onClick={handleCoursesNavigation}
                                        className="relative overflow-hidden backdrop-blur-3xl bg-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer group w-[280px] border border-white/30"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                                            boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                            <motion.div
                                                animate={{
                                                    opacity: [0.3, 0.6, 0.3],
                                                    y: [0, 10, 0],
                                                }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/40 via-blue-300/30 to-transparent rounded-full blur-2xl"
                                            />
                                            
                                            <motion.div
                                                animate={{
                                                    opacity: [0.2, 0.5, 0.2],
                                                    x: [0, -15, 0],
                                                }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                                className="absolute top-1/2 -left-10 w-32 h-32 bg-gradient-to-br from-teal-400/40 via-cyan-300/30 to-transparent rounded-full blur-2xl"
                                            />

                                            <div className="absolute inset-0 reflection-animation">
                                                <div className="w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                                            </div>
                                        </div>

                                        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

                                        <motion.div 
                                            animate={{ 
                                                opacity: [0.3, 0.7, 0.3],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute inset-0 rounded-2xl pointer-events-none"
                                            style={{
                                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                                            }}
                                        />
                                        
                                        <div className="relative z-10 flex items-center gap-4">
                                            <motion.div 
                                                animate={{ 
                                                    rotate: [0, -5, 5, 0],
                                                    scale: [1, 1.05, 1]
                                                }}
                                                transition={{ 
                                                    duration: 4, 
                                                    repeat: Infinity,
                                                    delay: idx * 0.5 
                                                }}
                                                className="flex-shrink-0"
                                            >
                                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                                                    <span className="text-white text-3xl">
                                                        {course.icon}
                                                    </span>
                                                </div>
                                            </motion.div>
                                            
                                            <div className="flex-1">
                                                <h3 className="font-black text-gray-900 text-xl mb-0.5">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-gray-700 font-semibold mb-2">
                                                    {course.tech}
                                                </p>
                                                
                                                <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-xl p-2 border border-white/30">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-700 font-bold">👥</span>
                                                        <motion.span 
                                                            animate={{ scale: [1, 1.03, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className="text-2xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
                                                        >
                                                            {course.students}
                                                        </motion.span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-60" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}