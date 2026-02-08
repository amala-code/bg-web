

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiLink, FiBarChart2, FiTrendingUp, FiClock } from 'react-icons/fi';
import { FaPaintBrush, FaDocker, FaLaptopCode } from 'react-icons/fa';
import Footer from '../components/Footer.tsx';
import FloatingChatbot from '../FloatingChatbot.jsx';
import Navbar from '../components/Navbar2.jsx';

const courses = {
  mega: [
    {
      id: 'data-science',
      title: 'Data Science Mastery',
      description: 'Complete data science journey from Python basics to advanced machine learning, statistics, and real-world projects.',
      thumbnail: '/images/courses/112.webp',
      duration: '60+ Hours',
      students: '25',
      price: '₹499',
      badge: 'Mega Course',
      gradient: 'from-blue-600 to-teal-500',
      available: true
    },
    {
      id: 'modern-ai',
      title: 'AI & Machine Learning',
      description: 'Master artificial intelligence and machine learning with deep learning, neural networks, NLP, and computer vision.',
      thumbnail: '/images/courses/111.webp',
      duration: '60+ Hours',
      students: '28',
      price: '₹549',
      badge: 'Mega Course',
      gradient: 'from-teal-600 to-cyan-500',
      available: true
    }
  ],
  mini: [
    {
      id: 'graphql',
      title: 'GraphQL Essentials',
      description: 'Modern API development with GraphQL',
      thumbnail: '/images/courses/113.webp',
      duration: '15 Hours',
      price: '₹449',
      icon: <FiBarChart2 className="text-white" />,
      color: 'from-teal-500 to-cyan-400',
      available: false,
      enrollmentDate: 'March 25, 2026'
    },
    {
      id: 'figma',
      title: 'Figma Design Pro',
      description: 'Create stunning UI/UX designs professionally',
      thumbnail: '/images/courses/115.webp',
      duration: '18 Hours',
      price: '₹449',
      icon: <FaPaintBrush className="text-white" />,
      color: 'from-cyan-500 to-blue-400',
      available: false,
      enrollmentDate: 'March 25, 2026'
    },
    {
      id: 'powerbi',
      title: 'Power BI Analytics',
      description: 'Transform data into actionable insights',
      thumbnail: '/images/courses/116.webp',
      duration: '20 Hours',
      price: '₹349',
      icon: <FiTrendingUp className="text-white" />,
      color: 'from-blue-600 to-teal-500',
      available: false,
      enrollmentDate: 'March 25, 2026'
    },
    {
      id: 'docker',
      title: 'Docker ',
      description: 'Master container orchestration and deployment',
      thumbnail: '/images/courses/114.webp',
      duration: '22 Hours',
      price: '₹549',
      icon: <FaDocker className="text-white" />,
      color: 'from-teal-600 to-blue-500',
      available: false,
      enrollmentDate: 'March 25, 2026'
    },
  ],
  interview: [
    {
      id: 'frontend-interview',
      title: 'Frontend Interview Mastery',
      description: 'Complete preparation for frontend developer interviews with React, JavaScript, and system design',
      thumbnail: '/images/courses/frontend-interview.jpg',
      duration: '420+ Questions with Solutions',
      price: '₹449',
      gradient: 'from-blue-700 to-teal-600',
      available: false,
      enrollmentDate: 'March 25, 2026'
    },
    {
      id: 'backend-interview',
      title: 'Backend Interview Pro',
      description: 'System design, databases, APIs, and everything you need for backend interviews',
      thumbnail: '/images/courses/backend-interview.jpg',
      duration: '400+ Questions with Solutions',
      price: '₹449',
      gradient: 'from-teal-700 to-cyan-600',
      available: false,
      enrollmentDate: 'March 25, 2026'
    },
    {
      id: 'ds-interview',
      title: 'Software Engineer',
      description: 'Crack coding interviews at top tech companies with comprehensive DSA preparation',
      thumbnail: '/images/courses/ds-interview.jpg',
      duration: '400+ Questions with Solutions',
      price: '₹449',
      gradient: 'from-cyan-700 to-blue-600',
      available: false,
      enrollmentDate: 'March 25, 2026'
    }
  ]
};

export default function CoursesPage() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Header */}
        <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-50">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Master Tomorrow's Skills
              </h1>
              <p className="text-xl text-teal-100 font-light">
                Transform your career with industry-leading courses
              </p>
            </motion.div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Mega Courses */}
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-blue-900 mb-3 relative inline-block">
                Mega Courses
              </h2>
              <p className="text-lg text-slate-600 mt-6">Comprehensive programs for serious learners</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {courses.mega.map((course, index) => (
                <motion.div
                  keykey={course.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  <Link href={`/courses/${course.id}`}>
                  <motion.div 
                      className="group bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer border-t-4 border-transparent hover:border-teal-400"
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ 
                        duration: 0.2,
                        ease: "easeOut"
                      }}
                    >
                      <div className="relative h-90 overflow-hidden">
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-white uppercase tracking-wider">
                            {course.badge}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <p className="text-slate-600 mb-6 leading-relaxed">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center gap-2 text-slate-700">
                            <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-700">
                            <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="font-medium">{course.students} Students</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-700">
                            <div className="text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                              View Details →
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Mini Courses */}
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-blue-900 mb-3 relative inline-block">
                Mini Courses
                <div aria-hidden="true" className="absolute -bottom-2 left-0 w-3/5 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
              </h2>
              <p className="text-lg text-slate-600 mt-6">Focused skills for specific technologies</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.mini.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {course.available ? (
                    <Link href={`/courses/${course.id}`}>
                      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-teal-400 cursor-pointer">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={course.thumbnail}
                            alt={course.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        <div className="p-6">
                          <h4 className="text-2xl font-bold text-blue-900 mb-2">{course.title}</h4>
                          <p className="text-slate-600 mb-4 text-sm leading-relaxed">{course.description}</p>
                          
                          <div className="flex items-center gap-2 mb-4 text-slate-700 text-sm">
                            <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">{course.duration}</span>
                          </div>

                          <div className="text-2xl font-bold text-teal-600">{course.price}</div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-teal-200 relative">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                            <FiClock className="w-4 h-4" />
                            <span>COMING SOON</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-2xl font-bold text-blue-900 mb-2">{course.title}</h4>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">{course.description}</p>
                        
                        <div className="flex items-center gap-2 mb-4 text-slate-700 text-sm">
                          <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{course.duration}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-teal-600">{course.price}</div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <div className="flex items-center gap-2 text-teal-600">
                            <FiClock className="w-4 h-4" />
                            <span className="text-sm font-semibold">Enrollment starts {course.enrollmentDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Interview Series */}
          <section>
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-blue-900 mb-3 relative inline-block">
                Interview Preparation
                <div aria-hidden="true" className="absolute -bottom-2 left-0 w-3/5 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
              </h2>
              <p className="text-lg text-slate-600 mt-6">Ace your dream job interviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {courses.interview.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {course.available ? (
                    <Link href={`/courses/${course.id}`}>
                      <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                        <div className="relative h-80">
                          <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-80 group-hover:opacity-70 transition-opacity`} />
                          
                          <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-3">{course.title}</h4>
                              <p className="text-teal-100 text-sm leading-relaxed">{course.description}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2 mb-4 text-white text-sm">
                                <svg className="w-4 h-4 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium">{course.duration}</span>
                              </div>
                              <div className="text-3xl font-bold text-teal-100">{course.price}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 border-2 border-teal-300">
                      <div className="relative h-80">
                        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-80`} />
                        
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 border border-white/30">
                            <FiClock className="w-4 h-4" />
                            <span>COMING SOON</span>
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-3">{course.title}</h4>
                            <p className="text-teal-100 text-sm leading-relaxed">{course.description}</p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-4 text-white text-sm">
                              <svg className="w-4 h-4 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-medium">{course.duration}</span>
                            </div>
                            <div className="text-3xl font-bold text-teal-100 mb-3">{course.price}</div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                              <p className="text-white text-sm font-semibold flex items-center gap-2">
                                <FiClock className="w-4 h-4" />
                                Enrollment opens on {course.enrollmentDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <FloatingChatbot/>
      <Footer/>
    </>
  );
}