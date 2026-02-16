



import { motion } from 'framer-motion';
import { FaGraduationCap, FaRocket, FaLightbulb, FaHandshake,FaChalkboardTeacher, FaUsers, FaAward } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.tsx';

import { useRef } from 'react';
import FloatingChatbot from '../FloatingChatbot.jsx';



export default function AboutPage() {
  const storyRef = useRef(null);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former tech lead at top companies with 10+ years experience',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Education',
      bio: 'PhD in Computer Science, passionate about online learning',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      color: 'from-cyan-400 to-teal-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Instructor',
      bio: 'Expert in full-stack development and mentorship',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      color: 'from-teal-400 to-blue-500'
    },
    {
      name: 'David Kim',
      role: 'CTO',
      bio: 'Built scalable platforms for millions of users',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
      color: 'from-purple-400 to-pink-500'
    },
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Foundation of BridgeGapEdge',
      description: 'Launched with a mission to democratize tech education and make real-world learning accessible to all.'
    },
    {
      year: '2025',
      title: 'Comprehensive Course Development',
      description: 'Built 200+ hours of industry-aligned courses and created over 1,000 real-world assessment questions.'
    },
    {
      year: '2025',
      title: 'BridgeGap Student Community',
      description: 'Established a vibrant learner community focused on collaboration, mentorship, and skill-building.'
    },
    {
      year: '2026',
      title: 'Official Company Registration',
      description: 'BridgeGapEdge was formally registered, strengthening our commitment to scalable, global education impact.'
    },
    {
      year: '2026',
      title: 'Expansion of Industry Network',
      description: 'Partnered with leading technology companies and professionals to provide live sessions and practical exposure.'
    },
    {
      year: '2026',
      title: 'Sustaining the Growth Momentum',
      description: 'Recognized as an emerging leader in online tech education, empowering learners worldwide.'
    }
  ];

  const values = [
    {
      title: 'Quality Education',
      description: 'We provide industry-standard curriculum designed by experts',
      icon: <FaGraduationCap className="text-white text-2xl" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Student Success',
      description: 'Every student gets personalized mentorship and support',
      icon: <FaRocket className="text-white text-2xl" />,
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving with latest tech trends and practices',
      icon: <FaLightbulb className="text-white text-2xl" />,
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Community',
      description: 'Building a vibrant community of learners and professionals',
      icon: <FaHandshake className="text-white text-2xl" />,
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  return (

    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative w-full min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/40 rounded-2xl blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-teal-200/40 rounded-full blur-xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              About BridgeGapEdge
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Bridging the gap between
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
              learning and doing
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We're building a new kind of education platform where real-world skills meet practical application, preparing you for the challenges that actually matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
         <button
  onClick={() => {
    storyRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }}
  className="group cursor-pointer relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold overflow-hidden hover:bg-blue-700 transition-colors"
>
  <span className="relative z-10">
    Explore Our Story
  </span>
</button>
            
            <button onClick={() => window.location.href = '/courses'} className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer">
              View Courses
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - unchanged, keeping it as is */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        {/* ... rest of mission & vision section stays the same ... */}
      </section>

      {/* Core Values Section - FIX: Add idx parameter */}
      <section 
        ref={storyRef}

      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Bridgegap
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group h-full"
              >
                <div className="relative overflow-hidden rounded-2xl h-full bg-white border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {value.description}
                    </p>
                    
                    <div className={`mt-6 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-300`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



  

  {/* Timeline Section - FULLY RESPONSIVE FIX */}
<section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
        Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Journey</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
        From a vision to a thriving community of learners worldwide
      </p>
    </motion.div>

    <div className="relative">
      {/* Timeline line - hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-teal-400 to-blue-400" />
      
      {/* Mobile timeline line - visible only on mobile */}
      <div className="lg:hidden absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-teal-400 to-blue-400" />

      <div className="space-y-8 lg:space-y-16">
        {milestones.map((milestone, idx) => (
          <motion.div
            key={`${milestone.year}-${milestone.title}`}
            initial={{ 
              opacity: 0, 
              y: 30,  // Mobile: animate from bottom only
              x: typeof window !== 'undefined' && window.innerWidth >= 1024 
                ? (idx % 2 === 0 ? -50 : 50)  // Desktop: horizontal animation
                : 0  // Mobile: no horizontal animation
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`
              flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8
              ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}
            `}
          >
            {/* Content Card */}
            <div className={`
              w-full lg:w-5/12 flex
              pl-12 lg:pl-0
            `}>
              <div className={`
                w-full bg-white rounded-xl p-6 lg:p-8 
                shadow-lg border border-gray-200 
                hover:border-blue-300 hover:shadow-2xl 
                transition-all duration-300 
                flex flex-col justify-center
                text-left lg:${idx % 2 === 0 ? 'text-right' : 'text-left'}
              `}>
                <div className={`
                  text-sm font-bold 
                  bg-gradient-to-r from-blue-600 to-teal-600 
                  bg-clip-text text-transparent mb-2
                  flex
                  justify-start lg:${idx % 2 === 0 ? 'justify-end' : 'justify-start'}
                `}>
                  {milestone.year}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {milestone.description}
                </p>
              </div>
            </div>

            {/* Desktop Timeline Dot */}
            <div className="hidden lg:flex w-2/12 justify-center items-start pt-8">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg border-4 border-white" />
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  className="absolute inset-0 w-6 h-6 rounded-full border-2 border-blue-500 opacity-50"
                />
              </motion.div>
            </div>

            {/* Mobile Timeline Dot */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              className="lg:hidden absolute left-4 top-6 -translate-x-1/2"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg border-2 border-white" />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                className="absolute inset-0 w-4 h-4 rounded-full border-2 border-blue-500 opacity-50"
              />
            </motion.div>

            {/* Spacer for desktop */}
            <div className="hidden lg:block w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


<section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />
  </div>

  <div className="max-w-7xl mx-auto relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        The People Behind Your{' '}
        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Success
        </span>
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Our team combines decades of industry experience with a genuine passion for education. 
        We're here to guide, support, and empower you every step of the way.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {[
        {
          icon: FaChalkboardTeacher,
          title: "Expert Instructors",
          description: "Industry veterans with 10+ years of hands-on experience in software development, cloud computing, and emerging technologies.",
          gradient: "from-blue-500 to-blue-600"
        },
        {
          icon: FaLightbulb,
          title: "Curriculum Designers",
          description: "Educational specialists who craft engaging, practical content that bridges the gap between theory and real-world application.",
          gradient: "from-teal-500 to-teal-600"
        },
        {
          icon: FaUsers,
          title: "Mentorship Team",
          description: "Dedicated mentors who provide personalized guidance, code reviews, and one-on-one support throughout your learning journey.",
          gradient: "from-blue-600 to-cyan-500"
        },
        {
          icon: FaHandshake,
          title: "Career Advisors",
          description: "Professional coaches who help you build your portfolio, prepare for interviews, and navigate your career transition successfully.",
          gradient: "from-teal-600 to-emerald-500"
        },
        {
          icon: FaAward,
          title: "Quality Assurance",
          description: "Detail-oriented team members ensuring every course meets the highest standards of accuracy, relevance, and educational value.",
          gradient: "from-blue-500 to-indigo-500"
        },
        {
          icon: FaRocket,
          title: "Student Success",
          description: "Support specialists available to help you overcome challenges, stay motivated, and achieve your learning goals.",
          gradient: "from-cyan-500 to-teal-500"
        }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group"
        >
          <div className="relative h-full bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
            {/* Icon container */}
            <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {item.title}
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm">
              {item.description}
            </p>

            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Trust indicators */}
  
  </div>
</section>

      {/* CTA Section */}
      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-blue-600">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-400 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 30, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-teal-400 blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="px-6 py-2 rounded-full bg-white/20 text-white font-semibold border border-white/50 inline-block">
              Join Our Community
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Transform Your <span className="relative">
              Career?
              <motion.div
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-0 left-0 h-1 bg-white"
              />
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students learning from the best instructors in the industry. Start your journey to success today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
              >
                Start Your Journey Today
              </motion.button>
            </Link>
            <Link href="/community">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                Learn More About Our Community
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <FloatingChatbot/>

      <Footer />
    </main>
  );
}