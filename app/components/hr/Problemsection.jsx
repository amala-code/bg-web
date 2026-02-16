

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Users, Clock, UserX, Target } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    text: 'Employees living in layoff fear, one foot already out the door',
  },
  {
    icon: Users,
    text: 'Mid-level talent constantly job-hopping for marginal gains',
  },
  {
    icon: Clock,
    text: "Interview cycles that drain your team's energy and focus",
  },
  {
    icon: UserX,
    text: 'The gamble of hiring someone who looks good on paper but crumbles under pressure',
  },
  {
    icon: Target,
    text: 'Watching competitors poach your trained talent',
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Your Hiring Challenges Deserve Better Solutions
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-xl text-slate-300">
            The Market Is Restless. Your Team Needs Stability.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl bg-slate-800 p-6 transition-all hover:bg-slate-750"
            >
              <problem.icon className="mb-4 h-8 w-8 text-blue-400" />
              <p className="text-slate-200">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="mb-6 text-lg text-slate-300">
            Every resignation letter isn't just a vacancy it's lost momentum,
            disrupted projects, and the exhausting cycle starting again.
          </p>
          <p className="text-2xl font-semibold text-blue-400">
            What if there was a different way?
          </p>
        </motion.div>
      </div>
    </section>
  );
}