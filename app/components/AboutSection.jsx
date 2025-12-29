'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About TechLearn</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">We're on a mission to democratize access to world-class tech education, empowering the next generation of innovators and problem-solvers.</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">At TechLearn, we believe that quality education should be accessible to everyone, regardless of their background or location. Our platform combines cutting-edge technology with expert instruction to deliver transformative learning experiences.</p>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">We partner with industry leaders and top universities to ensure our curriculum stays current with the latest trends and technologies. Our students don't just learn—they build real-world projects and launch successful careers.</p>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">500+</div>
                                <div className="text-gray-600 text-xs sm:text-sm">Partner Companies</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md">
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-600">50+</div>
                                <div className="text-gray-600 text-xs sm:text-sm">Countries Reached</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 sm:gap-6"
                    >
                        {[
                            { name: 'Dr. Sarah Chen', role: 'AI Research Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces' },
                            { name: 'Marcus Johnson', role: 'Full-Stack Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces' },
                            { name: 'Dr. Elena Rodriguez', role: 'Data Science Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces' },
                            { name: 'Alex Kim', role: 'Cybersecurity Expert', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces' }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-xl p-3 sm:p-4 shadow-lg text-center"
                            >
                                <img src={member.img} alt={member.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-2 sm:mb-3 object-cover" />
                                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{member.name}</h4>
                                <p className="text-gray-600 text-[10px] sm:text-xs">{member.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
