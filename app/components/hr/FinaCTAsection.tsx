'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Heart, Target, Users } from 'lucide-react';

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement | null>(null);
  // Alias motion to a loosely typed variable to avoid strict JSX generic issues in TSX
  const M: any = motion;
  // cast ref when passing to useInView to satisfy type expectations quickly
  const isInView = useInView(ref as any, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-32 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            This Isn't About Filling Seats.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              It's About Building Legacy.
            </span>
          </h2>

          <div className="mx-auto mb-12 max-w-3xl space-y-6 text-lg text-slate-300 sm:text-xl">
            <p>
              Every great company was built by someone who refused to settle.
              Someone who understood that talent isn't just about credentials—it's
              about character. Drive. The quiet determination to show up every day
              and make something matter.
            </p>

            <p>
              Your next hire could be the person who solves the problem your team
              has struggled with for months. The one who brings fresh energy when
              morale is low. The developer who writes code like poetry. The analyst
              who sees patterns no one else noticed.
            </p>

            <p className="text-xl font-semibold text-white sm:text-2xl">
              But only if you meet them.
            </p>
          </div>

          {/* Value Props */}
          <M.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 grid gap-6 md:grid-cols-3"
          >
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <Target className="mx-auto mb-3 h-10 w-10 text-blue-400" />
              <h3 className="mb-2 font-semibold">Potential ↔ Opportunity</h3>
              <p className="text-sm text-slate-300">
                Connecting exceptional talent with companies that deserve them
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <Users className="mx-auto mb-3 h-10 w-10 text-teal-400" />
              <h3 className="mb-2 font-semibold">Searching ↔ Finding</h3>
              <p className="text-sm text-slate-300">
                Eliminating the exhausting hunt for the right hire
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <Heart className="mx-auto mb-3 h-10 w-10 text-purple-400" />
              <h3 className="mb-2 font-semibold">Hoping ↔ Knowing</h3>
              <p className="text-sm text-slate-300">
                Moving from uncertainty to confidence in every hire
              </p>
            </div>
          </M.div>

          <M.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <p className="mb-2 text-2xl font-bold text-teal-400">
              Your next transformational hire is already in our community.
            </p>
            <p className="text-lg text-slate-300">
              The question isn't whether they exist. It's whether you'll meet them.
            </p>
          </M.div>

          {/* CTAs */}
          <M.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <button className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-teal-900 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              Join Our Community - Free Forever
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20">
              Explore Platinum Membership
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </M.div>

 
  </M.div>
      </div>

     
    </section>
  );
}