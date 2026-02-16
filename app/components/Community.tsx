
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiUserGroup, 
  HiChatBubbleLeftRight, 
  HiAcademicCap, 
  HiTrophy,
  HiXMark,
  HiBookOpen,
  HiDevicePhoneMobile
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
// import PremiumCommunityHero from './communityheader';

gsap.registerPlugin(ScrollTrigger);

// Indian States for dropdown
const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh'
];

const communityFeatures = [
  {
    icon: HiUserGroup,
    title: 'Growing Community',
    description: 'Join our passionate early community of learners and creators.',
    stat: 'Active',
  },
  {
    icon: HiChatBubbleLeftRight,
    title: 'Direct Support',
    description: 'Get personalized help from our team and fellow learners.',
    stat: 'Fast',
  },
  {
    icon: HiAcademicCap,
    title: 'Study Groups',
    description: 'Collaborate with peers and build real projects together.',
    stat: 'Weekly',
  },
  {
    icon: HiTrophy,
    title: 'Recognition',
    description: 'Celebrate milestones and achievements with the community.',
    stat: 'New',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    initials: 'SC',
    quote: 'Being part of this community from the start has been incredible. The personalized attention and tight-knit group made all the difference.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Career Switcher',
    initials: 'MJ',
    quote: 'Finally, a platform that feels like a real community, not just another course library. The support here is genuine.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Designer',
    initials: 'ER',
    quote: 'I love being part of something from the ground up. Every suggestion is heard, and the community genuinely cares about each other.',
  },
];

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    phone: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', state: '', phone: '' });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Features animation
    featureRefs.current.forEach((feature, index) => {
      if (!feature) return;
      
      gsap.fromTo(
        feature,
        { opacity: 0, y: 50, rotation: -5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.2,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          ease: 'cubic.out',
        }
      );

      // Hover animation
      feature.addEventListener('mouseenter', () => {
        gsap.to(feature, {
          y: -15,
          boxShadow: '0 30px 60px rgba(13, 148, 136, 0.15)',
          duration: 0.2,
        });
        const icon = feature.querySelector('.feature-icon');
        gsap.to(icon, {
          scale: 1.15,
          rotation: 5,
          duration: 0.2,
        });
      });

      feature.addEventListener('mouseleave', () => {
        gsap.to(feature, {
          y: 0,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          duration: 0.2,
        });
        const icon = feature.querySelector('.feature-icon');
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.2,
        });
      });
    });

    // Testimonials animation
    testimonialRefs.current.forEach((testimonial, index) => {
      if (!testimonial) return;
      
      gsap.fromTo(
        testimonial,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center 70%',
            toggleActions: 'play none none reverse',
          },
          ease: 'cubic.out',
        }
      );

      // Hover tilt effect
      testimonial.addEventListener('mouseenter', () => {
        gsap.to(testimonial, {
          y: -10,
          boxShadow: '0 20px 50px rgba(13, 148, 136, 0.12)',
          duration: 0.4,
        });
      });

      testimonial.addEventListener('mouseleave', () => {
        gsap.to(testimonial, {
          y: 0,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
          duration: 0.4,
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 overflow-hidden bg-white"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-teal-50 border border-teal-200 rounded-full text-teal-600 text-sm font-semibold tracking-wider">
              BUILD WITH US
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Be part of something special from the beginning. As an early member, you'll help shape the future of learning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => {
                  if (el) featureRefs.current[index] = el;
                }}
                className="bg-white rounded-2xl p-8 text-center border-2 border-slate-200 hover:border-teal-400 transition-all duration-200 shadow-lg"
              >
                <div className="feature-icon inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl mb-4">
                  <IconComponent className="text-white text-3xl" />
                </div>
                <div className="inline-block px-4 py-2 bg-teal-50 rounded-full mb-4">
                  <span className="text-teal-600 font-bold text-sm">{feature.stat}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section - Startup Friendly */}
        {/* <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 px-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl border-2 border-teal-100"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
              Growing
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wider font-medium">Active Community</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
              50+
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wider font-medium">Hours of Content</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
              5-Star
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wider font-medium">Early Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
              24/7
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wider font-medium">Support Access</div>
          </div>
        </div> */}

        {/* Testimonials
        <div className="mb-24">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
            What Our Community Says
          </h3>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Hear from our early adopters and founding members
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) testimonialRefs.current[index] = el;
                }}
                className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-teal-400 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-teal-600 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <HiCheckBadge className="text-yellow-500 text-xl" />
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12 border-2 border-teal-100">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Ready to Be Part of Our Journey?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join us early and get exclusive founding member benefits. Help us build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 cursor-pointer py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Now
            </button>
            <button 
              onClick={() => window.location.href = '/about'}
            className="px-10 py-4 border-2 cursor-pointer border-teal-500 text-teal-600 font-bold rounded-full hover:bg-teal-50 transform transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Join Now Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <button 
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-default"
            onClick={closeModal}
            aria-label="Close modal"
          />
          
          {/* Modal Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute cursor-pointer top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <HiXMark className="w-6 h-6 text-gray-500" />
            </button>

            {formSubmitted ? (
              /* Success State */
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Welcome Aboard! 🎉</h4>
                <p className="text-slate-600 mb-6">Check your email for the free e-book and WhatsApp community link.</p>
                
                <a
                  href="https://chat.whatsapp.com/your-community-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Join WhatsApp Now
                </a>
                
                <button
                  onClick={closeModal}
                  className="block w-full mt-4 text-slate-500 hover:text-slate-700 text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl mb-4">
                    <HiUserGroup className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800">Join Our Community</h4>
                  <p className="text-slate-500 text-sm mt-1">Get exclusive access & free resources</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* State Dropdown */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">State</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select your state</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  {/* WhatsApp Section */}
                  <div className="border-t-2 border-slate-100 pt-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaWhatsapp className="w-5 h-5 text-green-500" />
                      <label htmlFor="phone" className="font-semibold text-slate-700 text-sm">Join WhatsApp Community</label>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center border-2 border-slate-200 rounded-xl px-3">
                        <HiDevicePhoneMobile className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-500 text-sm ml-1">+91</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="Enter phone number"
                        pattern="[0-9]{10}"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 cursor-pointer bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-xl hover:scale-[1.02] transform transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
                  >
                    Join Now & Be One Step Ahead
                  </button>
                </form>
              </>
            )}
          </div>
          {/* <PremiumCommunityHero/> */}
        </div>
      )}
    </section>
  );
}