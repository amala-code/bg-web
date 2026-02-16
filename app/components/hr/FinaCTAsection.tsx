'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Heart, Target, Users, X } from 'lucide-react';

const roleOptions = [
  'Software Developers',
  'Data Analysts',
  'Product Managers',
  'Marketing Roles',
  'Sales Roles',
  'HR Roles',
  'Design Roles',
  'Engineering Roles',
  'Business Analysts',
  'Other',
];

const hiringVolumeOptions = [
  '1-5',
  '6-10',
  '11-20',
  '21-50',
  '51-100',
  '100+',
];

const ctcRangeOptions = [
  'Below 3 LPA',
  '3-5 LPA',
  '5-7 LPA',
  '7-10 LPA',
  '10-15 LPA',
  '15+ LPA',
];

const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];

const issues = [
  'Candidates lack real-world, hands-on project experience',
  'Fresh graduates are not job-ready on day one',
  'High time and cost required to train new hires',
  'Difficulty assessing practical skills during interviews',
  'Resume skills do not match actual on-the-job performance',
  'Strong academic background but weak execution ability',
  'Long hiring cycles for entry-level roles',
  'Inconsistent quality of campus or fresher hires',
  'Early attrition due to role unpreparedness',
  'Limited access to industry-ready early-career talent',
  'Lack of exposure to current tools and industry practices',
];

const whyus = [
  'To hire industry-ready, project-experienced talent',
  'To reduce onboarding and training time for new hires',
  'To collaborate with academia on industry-relevant skills',
  'To build a strong employer brand among early professionals',
  'To contribute to shaping future-ready talent',
  'To stay updated with emerging skills and industry trends',
];

interface FinalCTASectionProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export default function FinalCTASection({ isModalOpen, onCloseModal,onOpenModal }: FinalCTASectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const M: any = motion;
  const isInView = useInView(ref as any, { once: true, amount: 0.3 });
  // const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  // Replace this with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylk9KRJXwNwh340l38Vxj-TUawqxqqoRLFG0KRbiMIVQPLoTEXOWwmMQzOx9lLl5VU/exec';

  const handleJoinClick = () => {
    // setShowModal(true);

    setSubmitStatus('idle');
    setSelectedReasons([]);
    setSelectedChallenges([]);
  };

  const handleCloseModal = () => {
    // setShowModal(false);
        onCloseModal(); // Use the prop function instead

    setSubmitStatus('idle');
    setSelectedReasons([]);
    setSelectedChallenges([]);
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedReasons(prev => [...prev, value]);
    } else {
      setSelectedReasons(prev => prev.filter(item => item !== value));
    }
  };

  const handleChallengeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedChallenges(prev => [...prev, value]);
    } else {
      setSelectedChallenges(prev => prev.filter(item => item !== value));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add timestamp and selected options
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const submissionData = {
      timestamp,
      status: 'Pending Review',
      fullName: formData.get('fullName'),
      organization: formData.get('organization'),
      whatsapp: formData.get('whatsapp'),
      roles: formData.get('roles'),
      keyChallenges: selectedReasons.join('; '),
      reasons: selectedChallenges.join('; '),
      state: formData.get('state'),
      hiresPerYear: formData.get('hiresPerYear'),
      ctcRange: formData.get('ctcRange'),
      logoConsent: formData.get('logoConsent'),
      website: formData.get('website')
    };

    try {
      // Send directly to Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      // With no-cors mode, we assume success if no error is thrown
      setSubmitStatus('success');
      e.currentTarget.reset();
      setSelectedReasons([]);
      setSelectedChallenges([]);
      
      setTimeout(() => {
        handleCloseModal();
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section ref={ref} className="bg-gradient-to-br from-blue-600 via-teal-600 to-blue-500 py-32 text-white">
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
              <span className="text-white">
                It's About Building Legacy.
              </span>
            </h2>

            <div className="mx-auto mb-12 max-w-3xl space-y-6 text-lg text-white/90 sm:text-xl">
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
              <div className="rounded-xl border-2 border-white/30 bg-white/10 p-6 backdrop-blur-sm">
                <Target className="mx-auto mb-3 h-10 w-10 text-white" />
                <h3 className="mb-2 font-semibold">Potential ↔ Opportunity</h3>
                <p className="text-sm text-white/90">
                  Connecting exceptional talent with companies that deserve them
                </p>
              </div>
              <div className="rounded-xl border-2 border-white/30 bg-white/10 p-6 backdrop-blur-sm">
                <Users className="mx-auto mb-3 h-10 w-10 text-white" />
                <h3 className="mb-2 font-semibold">Searching ↔ Finding</h3>
                <p className="text-sm text-white/90">
                  Eliminating the exhausting hunt for the right hire
                </p>
              </div>
              <div className="rounded-xl border-2 border-white/30 bg-white/10 p-6 backdrop-blur-sm">
                <Heart className="mx-auto mb-3 h-10 w-10 text-white" />
                <h3 className="mb-2 font-semibold">Hoping ↔ Knowing</h3>
                <p className="text-sm text-white/90">
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
              <p className="mb-2 text-2xl font-bold text-white">
                Your next transformational hire is already in our community.
              </p>
              <p className="text-lg text-white/90">
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
              <button 
                onClick={onOpenModal}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                Join Our Community - Free Forever
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              {/* <button className="group inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-blue-600">
                Explore Platinum Membership
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button> */}
            </M.div>
          </M.div>
        </div>
      </section>

      {/* Modal */}
      { isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <M.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <h3 className="mb-2 text-3xl font-bold text-gray-900">
                Apply to Join BridgeGap HR Circle
              </h3>
              <p className="text-gray-600">
                Your application will be reviewed by our team. We'll reach out within 2-3 business days.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800">
                <p className="font-semibold">Application Submitted Successfully! ✓</p>
                <p className="mt-1 text-sm">Thank you for your interest. We'll review your application and get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800">
                <p className="font-semibold">Application Submitted Successfully! ✓</p>
                <p className="mt-1 text-sm">Thank you for your interest in Bridgegap. We'll review your application and get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-gray-700">
                  Enter your full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="organization" className="mb-2 block text-sm font-semibold text-gray-700">
                  Enter the name of your Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="mb-2 block text-sm font-semibold text-gray-700">
                  Enter your WhatsApp mobile number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="roles" className="mb-2 block text-sm font-semibold text-gray-700">
                  What type of roles do you mostly hire for? <span className="text-red-500">*</span>
                </label>
                <select
                  id="roles"
                  name="roles"
                  required
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select role type</option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Why do you wish to be a part of Bridgegap HR Circle? <span className="text-red-500">*</span>
                </label>
                <p className="mb-3 text-xs text-gray-600">Select all that apply</p>
                <div className="space-y-2 max-h-48 overflow-y-auto rounded-lg border-2 border-gray-300 p-4">
                  {whyus.map((item, index) => (
                    <label key={index} className="flex items-start gap-3 text-sm text-gray-800 hover:bg-gray-50 p-2 rounded cursor-pointer">
                      <input
                        type="checkbox"
                        name="whyus[]"
                        value={item}
                        checked={selectedReasons.includes(item)}
                        onChange={handleReasonChange}
                        className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-400 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                {selectedReasons.length === 0 && (
                  <p className="mt-1 text-xs text-red-500">Please select at least one reason</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  What hiring or talent-related challenges do you currently face? <span className="text-red-500">*</span>
                </label>
                <p className="mb-3 text-xs text-gray-600">Select all that apply</p>
                <div className="space-y-2 max-h-48 overflow-y-auto rounded-lg border-2 border-gray-300 p-4">
                  {issues.map((item, index) => (
                    <label key={index} className="flex items-start gap-3 text-sm text-gray-800 hover:bg-gray-50 p-2 rounded cursor-pointer">
                      <input
                        type="checkbox"
                        name="reasons"
                        value={item}
                        checked={selectedChallenges.includes(item)}
                        onChange={handleChallengeChange}
                        className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-400 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                {selectedChallenges.length === 0 && (
                  <p className="mt-1 text-xs text-red-500">Please select at least one challenge</p>
                )}
              </div>

              <div>
                <label htmlFor="state" className="mb-2 block text-sm font-semibold text-gray-700">
                  Name the State where your organization is situated <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select state</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="hiresPerYear" className="mb-2 block text-sm font-semibold text-gray-700">
                  How many freshers does your organization typically hire in a year? <span className="text-red-500">*</span>
                </label>
                <select
                  id="hiresPerYear"
                  name="hiresPerYear"
                  required
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select range</option>
                  {hiringVolumeOptions.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="ctcRange" className="mb-2 block text-sm font-semibold text-gray-700">
                  What is the average CTC range you offer to freshers? <span className="text-red-500">*</span>
                </label>
                <select
                  id="ctcRange"
                  name="ctcRange"
                  required
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select CTC range</option>
                  {ctcRangeOptions.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  With your consent, BridgeGap may display your company logo on our platforms. Is this okay? <span className="text-red-500">*</span>
                </label>
                <p className="mb-3 text-sm text-gray-600">
                  We respect your brand guidelines. Your logo will only be displayed in the context of this association and can be removed at any time upon request.
                </p>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="logoConsent" value="Yes" required className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="logoConsent" value="No" required className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="website" className="mb-2 block text-sm font-semibold text-gray-700">
                  Please share your company's official website <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  placeholder="https://example.com"
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Your application will be reviewed by our team. Only approved members will receive access to the BridgeGap HR Circle community and resources.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || selectedReasons.length === 0 || selectedChallenges.length === 0}
                  className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting}
                  className="rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </M.div>
        </div>
      )}
    </>
  );
}