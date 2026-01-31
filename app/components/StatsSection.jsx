'use client';

import { motion } from 'framer-motion';
import { FaBookOpen, FaUsers, FaChartLine, FaComments } from 'react-icons/fa';

export default function StatsSection() {
    return (
        <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-16 relative w-full -mt-6 sm:-mt-8 lg:-mt-10 z-20">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                            {[

    { value: '1000+', label: 'Interview Questions', icon: <FaUsers />, color: 'from-blue-800 to-teal-700' },
    { value: '150+', label: 'Assessment Problems', icon: <FaBookOpen />, color: 'from-blue-800 to-teal-700' },
    { value: '200+', label: 'Watch Hour Content', icon: <FaChartLine />, color: 'from-blue-800 to-teal-700' },
    { value: '24/7', label: 'Support   This is what we offer', icon: <FaComments />, color: 'from-blue-800 to-teal-700' }


                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="text-center"
                                >
                                    <div className="text-2xl sm:text-3xl mb-2 flex justify-center items-center">
                                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color}`}>
                                            <span className="text-white text-xl">{stat.icon}</span>
                                        </span>
                                    </div>
                                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </h2>
                                    <p className="text-gray-600 font-medium text-md sm:text-md">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
