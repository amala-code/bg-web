'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import img1 from '../../images/clg11.png'

export default function HeroWithBackgroundImage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Large Background Image */}
      <div className="absolute inset-0">
        {/* Replace with your actual image */}
        <Image
          src={img1}
          alt="Professional team collaboration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-400 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-teal-400"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-white">
                Trusted by 10+ Universities              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
           Every Student Deserves 

            <br />
            <span className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
           a Fair Chance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12 text-xl leading-relaxed text-blue-100 sm:text-2xl"
          >
            Connect with pre-vetted, career-ready professionals who bring both
            technical brilliance and the right attitude to transform your
            organization from day one.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {[
              { icon: Shield, value: '52%', label: 'Increased Placement Rate' },
              { icon: Zap, value: '58%', label: 'student Job Ready' },
              { icon: Star, value: '20%+', label: 'Global Recognition' },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <stat.icon className="mx-auto mb-3 h-10 w-10 text-teal-400" />
                <div className="mb-1 text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 px-10 py-5 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50">
              Start Hiring for Free
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group inline-flex items-center gap-3 rounded-xl border-2 border-gray-200 bg-white px-10 py-5 text-lg font-semibold text-gray-900 transition-all hover:bg-gray-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Play className="h-5 w-5 text-teal-500" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-400" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-400" />
              <span>90-day money-back guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="h-6 w-4 rounded-full border-2 border-white/40">
            <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-white/40" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}