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
            students: '200+ ',
            position: 'top-[5%]', 
            color: 'from-blue-400 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50',
            delay: 0
        },
        { 
            icon: <FaBrain />, 
            title: 'Gen AI', 
            tech: 'Create AI-powered solutions',
            students: '120+ ',
            position: 'top-[40%]', 
            color: 'from-cyan-500 to-teal-500',
            bgColor: 'from-cyan-50 to-teal-50',
            delay: 0.2
        },
        { 
            icon: <FaPaintBrush />, 
            title: 'UI/UX', 
            tech: 'Design beautiful user experiences',
            students: '70+ ',
            position: 'bottom-[5%]', 
            color: 'from-teal-500 to-blue-500',
            bgColor: 'from-teal-50 to-blue-50',
            delay: 0.4
        },
    ];

    // Right side courses
    const rightCourses = [
        { 
            icon: <FaProjectDiagram />, 
            title: 'Agentic RAG', 
            tech: 'Deploy AI agents & pipelines',
            students: '80+ ',
            position: 'top-[5%]', 
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50',
            delay: 0.1
        },
        { 
            icon: <FaNetworkWired />, 
            title: 'GraphQL', 
            tech: 'Design scalable APIs',
            students: '60+      ',
            position: 'top-[40%]', 
            color: 'from-cyan-400 to-teal-400',
            bgColor: 'from-cyan-50 to-teal-50',
            delay: 0.3
        },
        { 
            icon: <FaCogs />, 
            title: 'N8N', 
            tech: 'Automate business workflows',
            students: '40+ ',
            position: 'bottom-[5%]', 
            color: 'from-teal-400 to-blue-500',
            bgColor: 'from-teal-50 to-blue-50',
            delay: 0.5
        },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-white">
            
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');
                
                body {
                    font-family: 'Poppins', sans-serif;
                }

                @keyframes gentle-float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(3deg); }
                }

                .float-gentle {
                    animation: gentle-float 5s ease-in-out infinite;
                }

                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }

                .shimmer {
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
                    background-size: 1000px 100%;
                    animation: shimmer 3s infinite;
                }

                @keyframes reflection-sweep {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
                }

                .reflection-animation {
                    animation: reflection-sweep 4s ease-in-out infinite;
                }
            `}</style>

            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large flowing gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-300 via-blue-200 to-cyan-200 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-200 via-teal-200 to-blue-200 blur-3xl"
                />

                {/* Animated circles */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-200/30 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-teal-200/30 rounded-full"
                />

                {/* Flowing particles */}
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
                        className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        style={{
                            top: `${15 + i * 3.5}%`,
                            left: `${8 + i * 3.8}%`,
                        }}
                    />
                ))}

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex justify-center mb-9"
                >
                    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full px-6 py-3 shadow-lg">
                        <div className="absolute inset-0 shimmer" />
                        <div className="relative flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                            <span className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                                Join 800+ Students Learning Live
                            </span>
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-pulse" />
                        </div>
                    </div>
                </motion.div>

                {/* Main Heading - SEO Optimized */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-4"
                >
                    {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight tracking-tight mt-4 ">
                        Online Courses with Live Classes, Job Placement & Career Tests
                    </h1> */}
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight tracking-tight mt-4 ">
Job-Ready Courses for Freshers with Placement Support & Career Skill Tests</h1>

                    {/* <p className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 leading-tight tracking-tight mt-4">
                        Master Tech Skills & Get Hired
                    </p> */}
                    <p class="text-gray-600 mt-2" style={{display: "none"}}>
  Online courses with live classes, hands-on projects, certification pathways,
  and job placement support for freshers and working professionals,internships, courses.
</p>

                    
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-center text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium"
                >
                    Learn from industry experts with hands-on projects, mentorship, placement assistance, internships, Resume and skill assessment tests
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCoursesNavigation}
                        className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-2xl font-bold text-base shadow-2xl shadow-blue-500/30 cursor-pointer"
                    >
                        <div className="absolute inset-0 shimmer" />
                        <span className="relative flex items-center gap-2">
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
                        className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-base shadow-xl hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all cursor-pointer"
                    >
                        Join Community
                    </motion.button>
                </motion.div>

                {/* MASSIVE Student Image Section with Floating Cards on Sides */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="relative flex justify-center items-center min-h-[75vh] mb-16"
                >
                    {/* Container for the entire section */}
                    <div className="relative w-full flex justify-center items-center">
                        
                        {/* LEFT SIDE FLOATING CARDS - HORIZONTAL & PREMIUM GLASSMORPHISM */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 -translate-x-[40%]">
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

                                        {/* Frosted glass effect */}
                                        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

                                        {/* Premium border glow */}
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

                                        {/* Horizontal Layout */}
                                        <div className="relative z-10 flex items-center gap-4">
                                            {/* Icon with BLUE-TEAL gradient background */}
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
                                            
                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className="font-black text-gray-900 text-xl mb-0.5">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-gray-700 font-semibold mb-2">
                                                    {course.tech}
                                                </p>
                                                
                                                {/* Students Count - Compact */}
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

                                        {/* Bottom accent gradient */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-60" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CENTER - MASSIVE Student Container */}
                        <div className="relative w-full max-w-4xl mx-auto">
                            {/* Multiple layered glowing backgrounds */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.4, 0.7, 0.4],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-cyan-400/40 to-teal-400/40 rounded-[4rem] blur-3xl"
                            />
                            <motion.div
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    opacity: [0.3, 0.6, 0.3],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{ duration: 7, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-tl from-teal-400/40 via-blue-400/40 to-cyan-400/40 rounded-[4rem] blur-3xl"
                            />

                            {/* Animated rings around student */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-4 border-blue-300/20 rounded-[4rem]"
                            />
                            <motion.div
                                animate={{ rotate: -360, scale: [1.05, 1, 1.05] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-4 border-cyan-300/20 rounded-[4rem]"
                            />

                            {/* Beautiful gradient mesh background */}
                            <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur-2xl rounded-[4rem] p-8 sm:p-12 md:p-16 border-2 border-white/60 shadow-2xl overflow-hidden">
                                
                                {/* Animated gradient overlay */}
                                <motion.div
                                    animate={{ 
                                        rotate: 360,
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-teal-500/5 rounded-[4rem]"
                                />

                                {/* Decorative corner elements */}
                                <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-blue-400/30 rounded-tl-3xl" />
                                <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-cyan-400/30 rounded-tr-3xl" />
                                <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-teal-400/30 rounded-bl-3xl" />
                                <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-blue-400/30 rounded-br-3xl" />

                                {/* Wave patterns */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50" />
                                
                                {/* MASSIVE Student Image */}
                                <motion.img
                                    src={kidImage.src}
                                    alt="Student Learning Online Courses with Job Placement"
                                    className="relative z-10 w-full max-w-none h-auto drop-shadow-2xl scale-125"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </div>

                        {/* RIGHT SIDE FLOATING CARDS - HORIZONTAL & PREMIUM GLASSMORPHISM */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 translate-x-[40%]">
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
                                        {/* Premium Blue/Teal Reflection Overlays */}
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

                                            {/* Sweeping reflection light */}
                                            <div className="absolute inset-0 reflection-animation">
                                                <div className="w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                                            </div>
                                        </div>

                                        {/* Frosted glass effect */}
                                        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

                                        {/* Premium border glow */}
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
                                        
                                        {/* Horizontal Layout */}
                                        <div className="relative z-10 flex items-center gap-4">
                                            {/* Icon with BLUE-TEAL gradient background */}
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
                                            
                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className="font-black text-gray-900 text-xl mb-0.5">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-gray-700 font-semibold mb-2">
                                                    {course.tech}
                                                </p>
                                                
                                                {/* Students Count - Compact */}
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

                                        {/* Bottom accent gradient */}
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