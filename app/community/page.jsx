
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
            {/* <motion.button
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
            </motion.button> */}
              <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Our Courses
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Join Our Community
            </button>
          </motion.div>
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