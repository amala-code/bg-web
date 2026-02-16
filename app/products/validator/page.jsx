

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer.tsx';

export default function OpenSourceValidatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 mt-20">
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
            Open Source Project Validator
          </h1>
          <p className="text-lg sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Validate and analyze open source projects with our powerful validation tools.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-gray-900 mb-16 text-center">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Code Analysis", description: "Deep analysis of open source code quality" },
              { title: "Security Scanning", description: "Identify vulnerabilities and security issues" },
              { title: "Compliance Check", description: "Verify license and compliance requirements" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
