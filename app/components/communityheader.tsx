'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CommunityHero = () => {
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);

  const communityMembers = [
    { id: 1, name: 'Sarah K.', role: 'Creator', color: 'from-cyan-400 to-blue-500', image: './images/c1.png' },
    { id: 2, name: 'Alex M.', role: 'Designer', color: 'from-teal-400 to-cyan-500', image: './images/2.png' },
    { id: 3, name: 'Jordan L.', role: 'Developer', color: 'from-blue-400 to-indigo-500', image: './images/1.png' },
  ];

  const targetAudience = [
    {
      title: 'Startup Founders',
      description: 'Build and scale your vision with like-minded entrepreneurs',
      icon: '🚀',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Designers',
      description: 'Collaborate on cutting-edge design projects and portfolios',
      icon: '🎨',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Product Managers',
      description: 'Connect with teams building the next generation of products',
      icon: '📊',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Engineers',
      description: 'Share knowledge and collaborate on technical challenges',
      icon: '⚙️',
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      title: 'Content Creators',
      description: 'Grow your audience and monetize your creative work',
      icon: '📹',
      gradient: 'from-cyan-400 to-teal-600'
    },
    {
      title: 'Marketers',
      description: 'Exchange strategies and grow your professional network',
      icon: '📈',
      gradient: 'from-blue-400 to-cyan-600'
    },
  ];

  const benefits = [
    {
      title: 'Connection & Networking',
      description: 'Build meaningful relationships with professionals worldwide',
      icon: '🤝'
    },
    {
      title: 'Find Your Mentor',
  description: "Get guidance from experienced professionals who've been where you are",
      icon: '🎯'
    },
    {
      title: 'Join Industry Events',
      description: 'Participate in exclusive workshops, webinars, and networking sessions',
      icon: '📅'
    },
    {
      title: 'Share & Learn',
      description: 'Exchange knowledge, resources, and best practices with the community',
      icon: '💡'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 overflow-hidden">
      {/* Removed invalid <style jsx global>. Use global CSS or Tailwind for global styles. */}

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 noise-bg overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl float-element" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-300/20 to-cyan-400/20 rounded-full blur-3xl float-element" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
             
              <h1 className="playfair text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
                The Only
                <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Community of
                </span>
                <span className="block">Creators & Pros</span>
                <span className="text-5xl lg:text-6xl">You Will Ever Need</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Connect with visionaries, makers, and industry leaders. 
                Build your network, share knowledge, and grow together in a thriving ecosystem.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white text-lg font-bold rounded-2xl shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Join Community
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </motion.div>

            {/* Right Content - Profile Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[500px]"
            >
              {communityMembers.map((member, index) => {
                let top, left, transform;
                if (index === 0) { top = '50%'; left = '20%'; transform = 'translateY(-50%)'; }
                else if (index === 1) { top = '5%'; left = '55%'; transform = 'none'; }
                else { top = '15%'; left = '0%'; transform = 'none'; }
                return (
                  <motion.div
                    key={member.id}
                    animate={floatAnimation}
                    style={{ animationDelay: `${index * 0.5}s`, top, left, transform }}
                    className="absolute"
                  >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative bg-gradient-to-br ${member.color} p-1 rounded-3xl shadow-2xl cursor-pointer glow-pulse`}
                    style={{ width: index === 0 ? '280px' : '200px', height: index === 0 ? '320px' : '240px' }}
                  >
                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center overflow-hidden">
                      <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                    </div>
                  </motion.div>
                  
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-cyan-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
                        <span className="font-semibold text-slate-700">Network and Grow</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
                );
              })}

              {/* Decorative dots */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-10 right-10 w-4 h-4 bg-cyan-500 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 left-10 w-6 h-6 bg-blue-500 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
  <section id="benefits-section" className="px-6 py-20 lg:py-32 bg-white/50 backdrop-blur-sm relative noise-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-2 rounded-[3rem] shadow-2xl"
                >
                  <div className="w-120 h-160 bg-white rounded-[2.8rem] flex items-center justify-center overflow-hidden">
                 <img src="./images/4.png" alt="Mark" className="object-cover w-full h-full" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-400 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-xl transform rotate-12"
                >
                  💼
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-2xl shadow-xl border-2 border-blue-100"
                >
                  <p className="text-sm font-semibold text-slate-600">Anna</p>
                  <p className="text-xs text-slate-400">Hey, let's connect! 👋</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Benefits Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="playfair text-5xl lg:text-6xl font-black text-slate-900 mb-4"
              >
                One Community,
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Tens Of Benefits
                </span>
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 mb-12"
              >
                Everything you need to succeed in one powerful platform
              </motion.p>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title.replace(/\s+/g, '-')}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-2xl transition-shadow">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
{/* 
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl flex items-center gap-3 group cursor-pointer"
                onClick={() => {
                  const section = document.getElementById('benefits-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View More Benefits
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-6 py-20 lg:py-32 noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="playfair text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Who Is It For?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet and interact with like-minded product creators who are solving the same problems as you
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {targetAudience.map((audience, index) => (
              <motion.div
                key={audience.title.replace(/\s+/g, '-')}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredPerson(index)}
                onHoverEnd={() => setHoveredPerson(null)}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${audience.gradient} p-1 rounded-3xl shadow-xl transition-all duration-300 ${hoveredPerson === index ? 'shadow-2xl' : ''}`}>
                  <div className="bg-white rounded-3xl p-8 h-full">
                    {/* Avatar circle */}
                    <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${audience.gradient} rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {audience.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                      {audience.title}
                    </h3>
                    
                    <p className="text-slate-600 text-center leading-relaxed">
                      {audience.description}
                    </p>

                    {/* Decorative corner element */}
                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>

                {/* Floating decoration */}
                {hoveredPerson === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-xl shadow-lg z-20"
                  >
                    ✨
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white text-lg font-bold rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Join Our Community Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div> */}
        </div>
      </section>

  
    </div>
  );
};

export default CommunityHero;

