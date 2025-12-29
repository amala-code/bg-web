'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
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
    { year: '2020', title: 'Founded TechLearn', description: 'Started with a vision to democratize tech education' },
    { year: '2021', title: '10,000+ Students', description: 'Reached 10,000 active learners on the platform' },
    { year: '2022', title: '50+ Courses', description: 'Launched 50+ comprehensive courses across tech domains' },
    { year: '2023', title: '100,000+ Community', description: 'Grew to 100,000+ students worldwide' },
    { year: '2024', title: 'Industry Partnerships', description: 'Partnered with top tech companies for live sessions' },
    { year: '2025', title: 'Global Recognition', description: 'Recognized as top online learning platform' },
  ];

  const values = [
    {
      title: 'Quality Education',
      description: 'We provide industry-standard curriculum designed by experts',
      icon: '🎓',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Student Success',
      description: 'Every student gets personalized mentorship and support',
      icon: '🚀',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving with latest tech trends and practices',
      icon: '💡',
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Community',
      description: 'Building a vibrant community of learners and professionals',
      icon: '🤝',
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500 to-teal-400 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -50, 0],
              y: [0, 30, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-500 to-blue-400 blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <span className="px-6 py-2 rounded-full bg-blue-500/20 text-blue-200 font-semibold border border-blue-500/50">
              Learn About Our Story
            </span>
          </motion.div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
            Transforming <br />
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Education
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Empowering the next generation of tech leaders through world-class education, mentorship, and real-world projects.
          </p>

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
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Our Mission & <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driven by a commitment to excellence and innovation in tech education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-300" />
              <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To revolutionize tech education by providing accessible, industry-relevant learning experiences that equip individuals with the skills and confidence needed to thrive in the digital economy.
                </p>
                <div className="h-64 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Our Mission - Learning Together" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-300" />
              <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-teal-100 hover:border-teal-300 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To build a global community where technology education is accessible to everyone, creating pathways for aspiring developers, entrepreneurs, and innovators to achieve their dreams and shape the future.
                </p>
                <div className="h-64 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Our Vision - Global Community" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
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
              The principles that guide everything we do at TechLearn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group h-full"
              >
                <div className="relative overflow-hidden rounded-2xl h-full bg-white border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
                  {/* Background gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {value.description}
                    </p>
                    
                    {/* Bottom accent line on hover */}
                    <div className={`mt-6 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-300`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a vision to a thriving community of learners worldwide
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-teal-400 to-blue-400" />

            {/* Timeline items */}
            <div className="space-y-16">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex ${idx % 2 === 0 ? 'flex-row-reverse' : ''} items-stretch gap-8`}
                >
                  {/* Content */}
                  <div className={`w-5/12 flex`}>
                    <div className={`w-full bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-center ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`text-sm font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2 ${idx % 2 === 0 ? 'justify-end' : 'justify-start'} flex`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot with pulse effect */}
                  <div className="w-2/12 flex justify-center items-start pt-8">
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

                  {/* Empty space */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate educators and tech experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -15 }}
                className="group h-full"
              >
                <div className="relative overflow-hidden rounded-2xl h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300">
                  {/* Image */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Colored overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Info - Always visible with improved styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                      className="transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-blue-200 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-100 text-sm leading-relaxed">{member.bio}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              By The <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our impact on the global tech community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '100K+', label: 'Active Students', icon: '👥' },
              { number: '50+', label: 'Expert Courses', icon: '📚' },
              { number: '10K+', label: 'Job Placements', icon: '💼' },
              { number: '4.9★', label: 'Avg Rating', icon: '⭐' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300" />
                <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                    className="text-6xl mb-4 transform"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background Elements */}
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
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
