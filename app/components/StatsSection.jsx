'use client';
import { motion } from 'framer-motion';

export default function StatsSection() {
    return (
        <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-16 relative w-full -mt-6 sm:-mt-8 lg:-mt-10 z-20">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                            {[
                                { value: '200+', label: 'Expert Courses', icon: '📚', color: 'from-blue-500 to-cyan-500' },
                                { value: '50k+', label: 'Active Learners', icon: '👥', color: 'from-indigo-500 to-purple-500' },
                                { value: '98%', label: 'Success Rate', icon: '📈', color: 'from-purple-500 to-pink-500' },
                                { value: '24/7', label: 'Live Support', icon: '💬', color: 'from-pink-500 to-rose-500' }
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
                                    <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </h2>
                                    <p className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
