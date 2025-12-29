'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Award, Code, Heart, Zap } from 'lucide-react';

const advantages = [
  {
    icon: CheckCircle,
    title: 'Technical Skills Validated',
    description: 'Real-world assessments that prove capability',
  },
  {
    icon: Code,
    title: 'Open-Source Contributions',
    description: 'Demonstrated initiative and collaboration',
  },
  {
    icon: Heart,
    title: 'Soft Skills Proven',
    description: 'Team dynamics and communication tested',
  },
  {
    icon: Award,
    title: 'Character Evaluations',
    description: 'Attitude and resilience assessed',
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            We Don't Just Fill Positions.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              We Build Futures.
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            What makes Bridge Gap Elite different isn't just our students—it's
            our promise.
          </p>
        </motion.div>

        {/* Pre-Screened Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12"
        >
          <h3 className="mb-6 text-3xl font-bold text-slate-900">
            Pre-Screened Excellence
          </h3>
          <p className="mb-8 text-lg text-slate-700">
            Every candidate in our network has survived our rigorous gauntlet:
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="rounded-lg bg-blue-100 p-3">
                  <advantage.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">
                    {advantage.title}
                  </h4>
                  <p className="text-slate-600">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center text-lg font-semibold italic text-slate-700"
          >
            These aren't just graduates. They're already creamed talent—the top
            tier who've earned their place.
          </motion.p>
        </motion.div>

        {/* Competitive Edge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl bg-slate-900 p-8 text-white lg:p-12"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-blue-600 p-3">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-3xl font-bold">
                Your Competitive Edge
              </h3>
              <p className="mb-6 text-lg text-slate-300">
                Companies hiring through Bridge Gap Elite report an average{' '}
                <span className="font-bold text-blue-400">
                  33% higher performance rating
                </span>{' '}
                in their new hires compared to traditional channels. Why?
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <p className="text-slate-200">
                    <span className="font-semibold text-white">
                      Skill without attitude
                    </span>{' '}
                    fails
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
                  <p className="text-slate-200">
                    <span className="font-semibold text-white">
                      Talent without character
                    </span>{' '}
                    flounders
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xl font-semibold text-blue-400">
                We deliver both.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">
            What You Get:
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Students who aren't just skilled they're ready",
              'Professionals with the right skillset AND the right attitude',
              'Talent that arrives hungry to contribute, not just collect a paycheck',
              'Team members who see your company as an opportunity, not a stepping stone',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6 text-center"
              >
                <CheckCircle className="mx-auto mb-3 h-8 w-8 text-blue-600" />
                <p className="text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}