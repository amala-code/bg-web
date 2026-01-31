'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import hrImage from '../../images/hr.jpeg';
import PropTypes from 'prop-types';


export default function EnhancedHeroSection({ onOpenModal }) {
  
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-100 opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-2 shadow-lg"
            >
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Trusted by 50+ Leading Companies
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              Hire Exceptional Talent.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Build Legendary Teams.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 text-xl leading-relaxed text-slate-600 sm:text-2xl"
            >
              Connect with pre-vetted, career-ready professionals who bring technical excellence and the right attitude to transform your organization.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-10 flex flex-wrap gap-3"
            >
              {[
                { icon: CheckCircle, text: 'Pre-screened Excellence' },
                { icon: Users, text: '500+ Elite Students' },
                { icon: Award, text: '96% Retention Rate' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-slate-200"
                >
                  <item.icon className="h-4 w-4 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <button  onClick={onOpenModal} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105">
                Start Hiring for Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 cursor-pointer"
                onClick={() => {
                  const section = document.getElementById('success-stories-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                  
                  
                  EnhancedHeroSection.propTypes = {
                    onOpenModal: PropTypes.func.isRequired,
                  };
                }}
              >
                <TrendingUp className="h-5 w-5" />
                View Success Stories
              </button>
            </motion.div>

            {/* Trust indicators */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Cancel anytime</span>
              </div>
            </motion.div> */}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-blue-600">33%</div>
                <div className="mt-1 text-sm text-slate-600">Performance Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">96%</div>
                <div className="mt-1 text-sm text-slate-600">Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">40%</div>
                <div className="mt-1 text-sm text-slate-600">Faster Hiring</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-10"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative border/shadow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 to-teal-600 opacity-20 blur-2xl" />
              
              {/* Image wrapper with gradient border */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 p-1 shadow-2xl">
                <div className="overflow-hidden rounded-xl bg-white">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={hrImage}
                      alt="HR professionals collaborating"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white p-4 shadow-xl border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Pre-Vetted
                      </div>
                      <div className="text-xs text-slate-600">
                        100% Verified
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -right-4 bottom-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white p-4 shadow-xl border border-teal-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-blue-600">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Top Talent
                      </div>
                      <div className="text-xs text-slate-600">
                        Elite Students
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
              >
                <div className="rounded-full bg-white px-6 py-3 shadow-xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-teal-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      50+ Companies
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full text-slate-50"
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
    </section>
  );
}