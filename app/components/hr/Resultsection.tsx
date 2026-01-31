'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
// alias motion to a loosely-typed variable to avoid strict JSX typing conflicts
const M: any = motion;
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

type StatItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: number;
  suffix: string;
  label: string;
};

const stats: StatItem[] = [
  { icon: Users, value: 50, suffix: '+', label: 'Hiring Partners' },
  { icon: TrendingUp, value: 33, suffix: '%', label: 'Skill Growth Rate' },
  { icon: Award, value: 320, suffix: '+', label: 'Learners Enrolled' },
  { icon: Clock, value: 96, suffix: '%', label: 'Course Completion Consistency' },
];


function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref as any, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ResultsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as any, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            The Numbers Tell a Story of Transformation
          </h2>
        </M.div>

        {/* Stats Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <M.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl bg-white p-8 text-center shadow-lg"
            >
              {(() => {
                const Icon = stat.icon;
                return <Icon className="mx-auto mb-4 h-12 w-12 text-blue-600" />;
              })()}
              <div className="mb-2 text-4xl font-bold text-slate-900">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-600">{stat.label}</p>
            </M.div>
          ))}
        </div>

        {/* Testimonial */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 p-8 text-white shadow-xl lg:p-12"
        >
          <div className="mb-6 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-6 w-6 fill-current text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <blockquote className="mb-6 text-xl italic leading-relaxed lg:text-2xl">
            "We were drowning in mediocre resumes and disappointing interviews.
            Bridge Gap Elite changed everything. The candidates they connected
            us with weren't just qualified they were hungry, humble, and ready
            to contribute from day one. We've seen a 33% improvement in new hire
            performance compared to our traditional recruiting channels."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-white/20" />
            <div>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-blue-100">
                VP of Engineering, TechCorp
              </div>
            </div>
          </div>
        </M.div>
      </div>
    </section>
  );
}