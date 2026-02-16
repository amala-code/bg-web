



import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// alias motion to a loosely-typed variable to avoid JSX typing conflicts
const M: any = motion;
import { UserPlus, Briefcase, MessageSquare } from 'lucide-react';

type Step = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
};

const steps: Step[] = [
  {
    icon: UserPlus,
    title: 'Join Our Community (Free)',
    description:
      'No contracts. No commitments. Just immediate access to a curated talent pool that most companies never see.',
    features: [
      'Post your job openings directly to our elite network',
      'Browse pre-vetted candidate profiles',
      'Request specific talent based on your unique needs',
      'Zero pressure, zero hard sell',
    ],
  },
  {
    icon: Briefcase,
    title: 'Post Jobs or Request Specific Talent',
    description:
      "Whether you need a full-stack developer with React expertise or a data analyst who understands your industry just ask. We're flexible, not rigid.",
    features: [
      'Tell us what you need',
      'We match you with qualified candidates',
      'Access students from Bridge Gap Elite and partner programs',
      'Simple, straightforward, effective',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Interview Pre-Matched Candidates',
    description:
      "No more resume mountains. No more screening fatigue. Just conversations with people who've already proven they have what it takes.",
    features: [
      'Meet candidates who match your culture and technical needs',
      'Interview support and guidance available',
      'Make offers with confidence',
      'Build your dream team, one exceptional hire at a time',
    ],
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as any, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Three Simple Steps to Your Best Hire Yet
          </h2>
        </M.div>

        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <M.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:gap-12">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-600 text-xl sm:text-2xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div className="rounded-lg bg-blue-100 p-2.5 sm:p-3 w-fit">
                      {/** Use a capitalized variable for dynamic component rendering to satisfy TSX */}
                      {(() => {
                        const Icon = step.icon;
                        return <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />;
                      })()}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mb-4 sm:mb-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {step.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-slate-700"
                      >
                        <svg
                          className="mt-0.5 sm:mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 sm:left-8 top-16 sm:top-20 h-8 sm:h-12 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600" />
              )}
            </M.div>
          ))}
        </div>

        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <p className="text-lg sm:text-xl font-semibold italic text-slate-700">
            No hard sell. No pressure. Just exceptional talent when you need it.
          </p>
        </M.div>
      </div>
    </section>
  );
}