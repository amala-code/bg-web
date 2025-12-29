'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
// Alias motion to a loosely typed variable to avoid strict JSX generic issues in TSX
const M: any = motion;
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What if I only need to hire 1-2 people per year?',
    answer:
      'Our free community access is perfect for you. No pressure to upgrade—access quality talent whenever you need it. You can post jobs, browse candidates, and request specific talent at no cost.',
  },
  {
    question: 'How quickly can I start interviewing candidates?',
    answer:
      'Free members can post jobs and browse candidates immediately. Platinum members often receive their first pre-screened candidate slate within 48 hours of joining.',
  },
  {
    question: "What happens if a hire doesn't work out?",
    answer:
      "We offer replacement guarantees within the first 90 days for Platinum members. If someone isn't the right fit, we'll prioritize finding you a replacement at no additional cost.",
  },
  {
    question: 'Can I hire from multiple locations or for remote positions?',
    answer:
      'Absolutely. Our talent pool includes candidates open to relocation, remote work, and hybrid arrangements. We\'ll match based on your specific needs and preferences.',
  },
  {
    question: 'How is this different from LinkedIn or Indeed?',
    answer:
      "We pre-vet every candidate through rigorous technical assessments, open-source contributions, and soft skills evaluation. You're not wading through hundreds of generic applications—you're interviewing proven talent.",
  },
  {
    question: 'What industries do your students specialize in?',
    answer:
      'Our primary focus is technology—software engineering, data science, product management, and related fields. However, our cross-platform access extends to other sectors through partner programs.',
  },
  {
    question: 'Is there a limit to how many students I can hire?',
    answer:
      'No limits. Hire as many exceptional people as you need. In fact, we reward organizations that hire 10+ students with our Consistent Partner Advantage at no additional cost.',
  },
  {
    question: 'Can I cancel my Platinum membership?',
    answer:
      'Yes, though most members stay because of the value. Monthly memberships can be canceled anytime. Annual memberships can be canceled with a pro-rated refund after the first 90 days.',
  },
];

function FAQItem({
  faq,
  index,
  isInView,
}: {
  faq: { question: string; answer: string };
  index: number;
  isInView: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <M.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-slate-200 bg-white"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
      >
        <span className="pr-8 text-lg font-semibold text-slate-900">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-6 w-6 flex-shrink-0 text-blue-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <M.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-slate-200 p-6 text-slate-600">
            {faq.answer}
          </div>
        </M.div>
      )}
    </M.div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  // cast ref when passing to useInView to satisfy type expectations quickly
  const isInView = useInView(ref as any, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-slate-600">
            Common questions about hiring through Bridge Gap Elite
          </p>
  </M.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Additional Help */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 rounded-2xl bg-blue-50 p-8 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold text-slate-900">
            Still have questions?
          </h3>
          <p className="mb-6 text-slate-600">
            Our team is here to help you find the perfect hiring solution
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@bridgegapelite.com"
              className="text-blue-600 hover:text-blue-700"
            >
              hello@bridgegapelite.com
            </a>
            <span className="hidden text-slate-400 sm:inline">|</span>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:text-blue-700"
            >
              +1 (234) 567-8900
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Average response time: Under 2 hours
          </p>
  </M.div>
      </div>
    </section>
  );
}