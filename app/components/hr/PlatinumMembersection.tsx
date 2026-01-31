// 'use client';

// import React, { useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// // Alias motion to a loosely typed variable to avoid strict JSX generic issues in TSX
// const M: any = motion;
// import {
//   Crown,
//   Star,
//   Users,
//   Target,
//   FileText,
//   Calendar,
//   TrendingUp,
//   Globe,
//   Zap,
//   Award,
//   BookOpen,
//   UserPlus,
//   Briefcase,
//   Shield,
//   BarChart,
//   Rocket,
//   MessageCircle,
//   Gift,
// } from 'lucide-react';

// const standardBenefits = [
//   {
//     icon: Star,
//     title: 'Priority Access to Premium Talent Pool',
//     description:
//       'See exceptional candidates 48-72 hours before they are visible to standard members.',
//   },
//   {
//     icon: Users,
//     title: 'Dedicated Talent Success Manager',
//     description:
//       'Your personal partner who learns your culture and proactively identifies candidates.',
//   },
//   {
//     icon: Target,
//     title: 'Custom Assessment Design',
//     description:
//       'Tailored technical and cultural assessments that align with your specific needs.',
//   },
//   {
//     icon: FileText,
//     title: 'Pre-Screened Interview Slates',
//     description:
//       'Every candidate pre-segmented by technical skills, cultural fit, and compatibility.',
//   },
//   {
//     icon: BookOpen,
//     title: 'Extended Candidate Profiles',
//     description:
//       'Comprehensive portfolios with code reviews, peer recommendations, and video intros.',
//   },
//   {
//     icon: Calendar,
//     title: 'Quarterly Exclusive Networking Events',
//     description:
//       'Intimate gatherings where you meet highest-performing upcoming graduates.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Industry Benchmarking Reports',
//     description:
//       'Understand how your metrics compare to other Platinum members in your sector.',
//   },
//   {
//     icon: Globe,
//     title: 'Cross-Platform Talent Access',
//     description:
//       'Access pre-vetted candidates from our partner premier programs and bootcamps.',
//   },
// ];

// const consistentPartnerBenefits = [
//   {
//     icon: UserPlus,
//     title: 'Campus Ambassador Program Access',
//     description:
//       'Dedicated Bridge Gap Elite graduate embedded in your hiring team.',
//   },
//   {
//     icon: Briefcase,
//     title: 'Custom Cohort Development',
//     description:
//       'We create custom training cohorts tailored specifically to your tech stack needs.',
//   },
//   {
//     icon: Award,
//     title: 'Annual Talent Summit Invitation',
//     description:
//       'All-expenses-covered retreat with top 50 students and C-suite leaders.',
//   },
//   {
//     icon: Shield,
//     title: 'White-Glove Onboarding Support',
//     description:
//       '30-60-90 day check-ins, best practices, and early warning systems.',
//   },
//   {
//     icon: Zap,
//     title: 'Employer Brand Co-Creation',
//     description:
//       'Featured company profile, video content, and social media amplification.',
//   },
//   {
//     icon: BarChart,
//     title: 'Annual Retention Analytics',
//     description:
//       'Comprehensive analysis with performance tracking and ROI calculations.',
//   },
//   {
//     icon: Rocket,
//     title: 'Internship-to-Hire Pipeline',
//     description:
//       'Preview top students during final semester with summer internship opportunities.',
//   },
//   {
//     icon: MessageCircle,
//     title: 'Executive Roundtable Membership',
//     description:
//       'Quarterly sessions with HR leaders and early access to research insights.',
//   },
// ];

// export default function PlatinumMembershipSection() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   // cast ref when passing to useInView to satisfy type expectations quickly
//   const isInView = useInView(ref as any, { once: true, amount: 0.1 });
//   const [activeTab, setActiveTab] = useState<'standard' | 'consistent'>(
//     'standard'
//   );

//   return (
//     <section ref={ref} className="bg-gradient-to-br from-blue-600 via-teal-600 to-blue-500 py-24 text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <M.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
//             <Crown className="h-5 w-5 text-white" />
//             <span className="font-semibold text-white">
//               Premium Membership
//             </span>
//           </div>
//           <h2 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
//             For Companies That Understand:
//             <br />
//             <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//               Great Teams Aren't Found. They're Cultivated.
//             </span>
//           </h2>
//           <p className="mx-auto max-w-3xl text-xl text-white/90">
//             Unlock exclusive benefits designed for organizations committed to
//             building exceptional teams, consistently.
//           </p>
//         </M.div>

//         {/* Promise Section */}
//         <M.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-16 rounded-2xl bg-white/10 p-8 backdrop-blur-sm lg:p-12"
//         >
//           <p className="mb-4 text-2xl font-semibold">
//             Hiring one great person changes a project.
//           </p>
//           <p className="mb-6 text-2xl font-semibold text-yellow-400">
//             Hiring ten changes your company's trajectory.
//           </p>
//           <p className="text-lg text-slate-300">
//             HR Platinum isn't just a membership it's a partnership. When you
//             commit to building your team with Bridge Gap Elite, we commit to
//             becoming an extension of your talent strategy.
//           </p>
//         </M.div>

//         {/* Tabs */}
//         <M.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
//         >
//           <button
//             onClick={() => setActiveTab('standard')}
//             className={`rounded-lg px-8 py-4 text-lg font-semibold transition-all ${
//               activeTab === 'standard'
//                 ? 'bg-white text-blue-600 shadow-lg'
//                 : 'bg-white/10 text-white hover:bg-white/20'
//             }`}
//           >
//             Standard Platinum Benefits
//           </button>
//           <button
//             onClick={() => setActiveTab('consistent')}
//             className={`rounded-lg px-8 py-4 text-lg font-semibold transition-all ${
//               activeTab === 'consistent'
//                 ? 'bg-white text-blue-600 shadow-lg'
//                 : 'bg-white/10 text-white hover:bg-white/20'
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <Crown className="h-5 w-5" />
//               Consistent Partner Advantage
//             </div>
//           </button>
//         </M.div>

//         {/* Standard Benefits */}
//         {activeTab === 'standard' && (
//           <M.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//           >
//             {standardBenefits.map((benefit, index) => (
//               <M.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
//               >
//                 <div className="mb-4 inline-flex rounded-lg bg-blue-600 p-3">
//                   <benefit.icon className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
//                 <p className="text-slate-300">{benefit.description}</p>
//               </M.div>
//             ))}
//           </M.div>
//         )}

//         {/* Consistent Partner Benefits */}
//         {activeTab === 'consistent' && (
//           <M.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             {/* Unlock Banner */}
//             <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-400 to-teal-400 p-8 text-center shadow-2xl">
//               <h3 className="mb-4 text-3xl font-bold text-white">
//                 Unlocked After 10 Successful Hires
//               </h3>
//               <p className="text-lg text-white/90">
//                 Companies that hire 10 or more Bridge Gap Elite students
//                 consistently aren't just clients they're family. And family gets
//                 everything.
//               </p>
//               <div className="mt-6 flex items-center justify-center gap-4">
//                 <div className="h-2 w-full max-w-md rounded-full bg-white/30">
//                   <div className="h-full w-full rounded-full bg-white"></div>
//                 </div>
//                 <span className="text-2xl font-bold text-white">10+</span>
//               </div>
//             </div>

//             {/* Benefits Grid */}
//             <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {consistentPartnerBenefits.map((benefit, index) => (
//                 <M.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   className="group rounded-xl bg-gradient-to-br from-blue-400/20 to-teal-400/20 p-6 backdrop-blur-sm transition-all hover:from-blue-400/30 hover:to-teal-400/30"
//                 >
//                   <div className="mb-4 inline-flex rounded-lg bg-gradient-to-r from-blue-400 to-teal-400 p-3">
//                     <benefit.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="mb-2 text-xl font-semibold text-white">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-white/90">{benefit.description}</p>
//                 </M.div>
//               ))}
//             </div>

//             {/* Additional Note */}
//             <div className="rounded-xl border-2 border-white/30 bg-white/10 p-6">
//               <div className="flex items-start gap-4">
//                 <Gift className="h-8 w-8 flex-shrink-0 text-white" />
//                 <div>
//                   <h4 className="mb-2 text-xl font-semibold text-white">
//                     Plus All Standard Platinum Benefits
//                   </h4>
//                   <p className="text-white/90">
//                     Consistent Partners receive every Standard Platinum benefit
//                     in addition to these exclusive advantages. It's our
//                     complete commitment to companies that commit to us.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </M.div>
//         )}

//         {/* Coming Soon */}
//         <M.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="mt-16 rounded-2xl border-2 border-white/30 bg-white/10 p-8"
//         >
//           <h3 className="mb-4 text-2xl font-bold text-white">
//             Additional Benefits We're Developing
//           </h3>
//           <p className="mb-6 text-white/90">Coming in 2025-2026:</p>
//           <div className="grid gap-4 md:grid-cols-2">
//             {[
//               'Skills Gap Training Credits for existing hires',
//               'Referral Bonus Program with first access',
//               'Technical Debt Office Hours with senior engineers',
//               'Diversity Hiring Initiatives',
//               'Remote Team Building Events',
//               'Career Path Consulting for your Bridge Gap Elite hires',
//               'Quarterly Talent Market Reports',
//             ].map((item, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
//                 <span className="text-white/90">{item}</span>
//               </div>
//             ))}
//           </div>
//         </M.div>

//         {/* CTA */}
//         <M.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-16 text-center"
//         >
//           <button className="group inline-flex items-center gap-2 rounded-lg bg-white text-blue-600 px-8 py-4 text-lg font-semibold shadow-xl transition-all hover:shadow-2xl">
//             Apply for HR Platinum Membership
//             <Crown className="h-5 w-5 transition-transform group-hover:scale-110" />
//           </button>
//         </M.div>
//       </div>
//     </section>
//   );
// }



'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
// Alias motion to a loosely typed variable to avoid strict JSX generic issues in TSX
const M: any = motion;
import {
  Crown,
  Star,
  Users,
  Target,
  FileText,
  Calendar,
  TrendingUp,
  Globe,
  Zap,
  Award,
  BookOpen,
  UserPlus,
  Briefcase,
  Shield,
  BarChart,
  Rocket,
  MessageCircle,
  Gift,
} from 'lucide-react';

const standardBenefits = [
  {
    icon: Star,
    title: 'Priority Access to Premium Talent Pool',
    description:
      'See exceptional candidates 48-72 hours before they are visible to standard members.',
  },
  {
    icon: Users,
    title: 'Dedicated Talent Success Manager',
    description:
      'Your personal partner who learns your culture and proactively identifies candidates.',
  },
  {
    icon: Target,
    title: 'Custom Assessment Design',
    description:
      'Tailored technical and cultural assessments that align with your specific needs.',
  },
  {
    icon: FileText,
    title: 'Pre-Screened Interview Slates',
    description:
      'Every candidate pre-segmented by technical skills, cultural fit, and compatibility.',
  },
  {
    icon: BookOpen,
    title: 'Extended Candidate Profiles',
    description:
      'Comprehensive portfolios with code reviews, peer recommendations, and video intros.',
  },
  {
    icon: Calendar,
    title: 'Quarterly Exclusive Networking Events',
    description:
      'Intimate gatherings where you meet highest-performing upcoming graduates.',
  },
  {
    icon: TrendingUp,
    title: 'Industry Benchmarking Reports',
    description:
      'Understand how your metrics compare to other Platinum members in your sector.',
  },
  {
    icon: Globe,
    title: 'Cross-Platform Talent Access',
    description:
      'Access pre-vetted candidates from our partner premier programs and bootcamps.',
  },
];

const consistentPartnerBenefits = [
  {
    icon: UserPlus,
    title: 'Campus Ambassador Program Access',
    description:
      'Dedicated Bridge Gap Elite graduate embedded in your hiring team.',
  },
  {
    icon: Briefcase,
    title: 'Custom Cohort Development',
    description:
      'We create custom training cohorts tailored specifically to your tech stack needs.',
  },
  {
    icon: Award,
    title: 'Annual Talent Summit Invitation',
    description:
      'All-expenses-covered retreat with top 50 students and C-suite leaders.',
  },
  {
    icon: Shield,
    title: 'White-Glove Onboarding Support',
    description:
      '30-60-90 day check-ins, best practices, and early warning systems.',
  },
  {
    icon: Zap,
    title: 'Employer Brand Co-Creation',
    description:
      'Featured company profile, video content, and social media amplification.',
  },
  {
    icon: BarChart,
    title: 'Annual Retention Analytics',
    description:
      'Comprehensive analysis with performance tracking and ROI calculations.',
  },
  {
    icon: Rocket,
    title: 'Internship-to-Hire Pipeline',
    description:
      'Preview top students during final semester with summer internship opportunities.',
  },
  {
    icon: MessageCircle,
    title: 'Executive Roundtable Membership',
    description:
      'Quarterly sessions with HR leaders and early access to research insights.',
  },
];

export default function PlatinumMembershipSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as any, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState<'standard' | 'consistent'>(
    'standard'
  );

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-2">
            <Crown className="h-5 w-5 text-white" />
            <span className="font-semibold text-white">
              Premium Membership
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            For Companies That Understand:
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Great Teams Aren't Found. They're Cultivated.
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Unlock exclusive benefits designed for organizations committed to
            building exceptional teams, consistently.
          </p>
        </M.div>

        {/* Promise Section */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 p-8 lg:p-12"
        >
          <p className="mb-4 text-2xl font-semibold text-gray-900">
            Hiring one great person changes a project.
          </p>
          <p className="mb-6 text-2xl font-semibold text-teal-600">
            Hiring ten changes your company's trajectory.
          </p>
          <p className="text-lg text-gray-700">
            HR Platinum isn't just a membership it's a partnership. When you
            commit to building your team with Bridge Gap Elite, we commit to
            becoming an extension of your talent strategy.
          </p>
        </M.div>

        {/* Tabs */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => setActiveTab('standard')}
            className={`rounded-lg px-8 py-4 text-lg font-semibold transition-all ${
              activeTab === 'standard'
                ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Standard Platinum Benefits
          </button>
          <button
            onClick={() => setActiveTab('consistent')}
            className={`rounded-lg px-8 py-4 text-lg font-semibold transition-all ${
              activeTab === 'consistent'
                ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5" />
              Consistent Partner Advantage
            </div>
          </button>
        </M.div>

        {/* Standard Benefits */}
        {activeTab === 'standard' && (
          <M.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {standardBenefits.map((benefit, index) => (
              <M.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 p-3">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </M.div>
            ))}
          </M.div>
        )}

        {/* Consistent Partner Benefits */}
        {activeTab === 'consistent' && (
          <M.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Unlock Banner */}
            <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-center shadow-xl">
              <h3 className="mb-4 text-3xl font-bold text-white">
                Unlocked After 10 Successful Hires
              </h3>
              <p className="text-lg text-white/95">
                Companies that hire 10 or more Bridge Gap Elite students
                consistently aren't just clients they're family. And family gets
                everything.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-2 w-full max-w-md rounded-full bg-white/30">
                  <div className="h-full w-full rounded-full bg-white"></div>
                </div>
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {consistentPartnerBenefits.map((benefit, index) => (
                <M.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group rounded-xl border-2 border-teal-100 bg-gradient-to-br from-blue-50 to-teal-50 p-6 shadow-sm transition-all hover:border-teal-300 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 p-3">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </M.div>
              ))}
            </div>

            {/* Additional Note */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <Gift className="h-8 w-8 flex-shrink-0 text-teal-600" />
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Plus All Standard Platinum Benefits
                  </h4>
                  <p className="text-gray-700">
                    Consistent Partners receive every Standard Platinum benefit
                    in addition to these exclusive advantages. It's our
                    complete commitment to companies that commit to us.
                  </p>
                </div>
              </div>
            </div>
          </M.div>
        )}

        {/* Coming Soon */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-2xl border-2 border-gray-200 bg-gray-50 p-8"
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            Additional Benefits We're Developing
          </h3>
          <p className="mb-6 text-gray-700">Coming in 2025-2026:</p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Skills Gap Training Credits for existing hires',
              'Referral Bonus Program with first access',
              'Technical Debt Office Hours with senior engineers',
              'Diversity Hiring Initiatives',
              'Remote Team Building Events',
              'Career Path Consulting for your Bridge Gap Elite hires',
              'Quarterly Talent Market Reports',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </M.div>

        {/* CTA */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:from-blue-700 hover:to-teal-700">
            Auto upgrades to HR Platinum Membership post 10+ hires or 2+ years of association without any additional cost 
            {/* <Crown className="h-5 w-5 transition-transform group-hover:scale-110" /> */}
          </button>
        </M.div>
      </div>
    </section>
  );
}