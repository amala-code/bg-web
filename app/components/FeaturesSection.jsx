"use client";
import { motion } from 'framer-motion';
import { FiTarget, FiGlobe } from 'react-icons/fi';
import { FaChalkboardTeacher, FaBriefcase, FaTrophy, FaMobileAlt } from 'react-icons/fa';

export default function FeaturesSection() {
    return (
        <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Bridgegap?</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">Experience learning like never before with our innovative platform designed for modern learners.</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        { icon: <FiTarget className="mx-auto" />, title: 'Personalized Learning Paths', desc: 'AI-powered recommendations tailored to your goals and skill level' },
                        { icon: <FaChalkboardTeacher className="mx-auto" />, title: 'Expert Instructors', desc: 'Learn from industry veterans with 10+ years of real-world experience' },
                        { icon: <FaBriefcase className="mx-auto" />, title: 'Career Support', desc: 'Resume reviews, interview prep, and direct connections to employers' },
                        { icon: <FaMobileAlt className="mx-auto" />, title: 'Mobile Learning', desc: 'Study anywhere with our responsive mobile app and offline access' },
                        { icon: <FaTrophy className="mx-auto" />, title: 'Certification', desc: 'Industry-recognized certificates upon course completion' },
                        { icon: <FiGlobe className="mx-auto" />, title: 'Global Community', desc: 'Connect with learners worldwide and build your professional network' }
                    ].map((feature) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all text-center"
                        >
                            <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">{feature.icon}</div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
