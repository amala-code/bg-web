

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Users, TrendingUp, Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSplitDesign() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Column - Content */}
        <div className="relative flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 px-6 py-20 sm:px-12 lg:px-16">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-teal-200 opacity-20 blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-xl">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">
                Rated 4.9/5 by HRs
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              Hire the Top
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {' '}
                1% Talent
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 text-xl leading-relaxed text-slate-600"
            >
              Pre-vetted, career-ready professionals with proven technical skills
              and the right attitude. Stop settling for mediocre hires.
            </motion.p>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-10 space-y-4"
            >
              {[
                'Rigorous technical assessments & code reviews',
                'Soft skills validated through real projects',
                'Open-source contributions verified',
                '96% retention rate after first year',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-10 flex flex-col gap-4 sm:flex-row"
            >
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50">
                Book a Demo
              </button>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-8 border-t border-slate-200 pt-8"
            >
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-600">150</span>
                  <span className="text-xl font-bold text-blue-600">+</span>
                </div>
                <div className="text-sm text-slate-600">Companies</div>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-teal-600">500</span>
                  <span className="text-xl font-bold text-teal-600">+</span>
                </div>
                <div className="text-sm text-slate-600">Elite Students</div>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-600">96</span>
                  <span className="text-xl font-bold text-blue-600">%</span>
                </div>
                <div className="text-sm text-slate-600">Retention</div>
              </div>
            </motion.div>

            

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>5 min setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Large Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-600 to-teal-600"
        >
          {/* Main Hero Image */}
          <div className="absolute inset-0">
            <Image
              src="/api/placeholder/1200/1600"
              alt="Professional team collaboration"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-teal-600/70" />
          </div>

          {/* Floating Statistics Cards */}
          <div className="relative z-10 flex h-full items-center justify-center p-8">
            <div className="grid gap-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="ml-auto w-64 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-4xl font-bold text-white">
                  33%
                </div>
                <div className="text-sm text-white/90">
                  Higher Performance Rating
                </div>
                <div className="mt-4 text-xs text-white/70">
                  vs. traditional hiring channels
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mr-auto w-64 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-4xl font-bold text-white">
                  96%
                </div>
                <div className="text-sm text-white/90">
                  Retention Rate
                </div>
                <div className="mt-4 text-xs text-white/70">
                  After first year placement
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="ml-auto w-64 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-4xl font-bold text-white">
                  40%
                </div>
                <div className="text-sm text-white/90">
                  Faster Time-to-Hire
                </div>
                <div className="mt-4 text-xs text-white/70">
                  Compared to standard recruitment
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}