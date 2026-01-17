'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const communityFeatures = [
  {
    icon: '👥',
    title: 'Global Community',
    description: 'Connect with 500K+ learners from 150+ countries.',
    stat: '500K+',
  },
  {
    icon: '💬',
    title: 'Discussion Forums',
    description: 'Get instant answers from mentors and peers 24/7.',
    stat: '24/7',
  },
  {
    icon: '🎯',
    title: 'Study Groups',
    description: 'Join focused groups and collaborate on projects.',
    stat: '2K+',
  },
  {
    icon: '🏆',
    title: 'Leaderboards',
    description: 'Compete, learn, and get recognized for your progress.',
    stat: '#1',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    image: '👩‍💼',
    quote: 'The community support helped me land my dream job. The courses are comprehensive, but the people made it unforgettable.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Data Scientist',
    image: '👨‍💼',
    quote: 'I\'ve taken courses on 5 different platforms. This is the only one where I actually completed everything and stayed motivated.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Designer',
    image: '👩‍🎨',
    quote: 'The community here is incredibly supportive. I made genuine friendships and learned from some of the brightest minds.',
  },
];

export default function Community() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const testimonialRefs = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

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
      gsap.fromTo(
        feature,
        { opacity: 0, y: 50, rotation: -5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
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
          boxShadow: '0 30px 60px rgba(13, 148, 136, 0.25)',
          duration: 0.4,
        });

        const icon = feature.querySelector('.feature-icon');
        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.6,
        });
      });

      feature.addEventListener('mouseleave', () => {
        gsap.to(feature, {
          y: 0,
          boxShadow: '0 10px 30px rgba(13, 148, 136, 0.1)',
          duration: 0.4,
        });

        const icon = feature.querySelector('.feature-icon');
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
        });
      });
    });

    // Testimonials animation
    testimonialRefs.current.forEach((testimonial, index) => {
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
          rotationY: 5,
          boxShadow: '0 20px 50px rgba(13, 148, 136, 0.2)',
          duration: 0.4,
        });
      });

      testimonial.addEventListener('mouseleave', () => {
        gsap.to(testimonial, {
          y: 0,
          rotationY: 0,
          boxShadow: '0 10px 25px rgba(13, 148, 136, 0.1)',
          duration: 0.4,
        });
      });
    });

    // Count animation
    const countElements = statsRef.current?.querySelectorAll('[data-count]');
    if (countElements) {
      countElements.forEach((element) => {
        const target = parseInt(element.getAttribute('data-count') || '0');
        const proxy = { value: 0 };
        gsap.to(proxy, {
          value: target,
          duration: 2.5,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          onUpdate() {
            if (element) {
              element.textContent = Math.floor(proxy.value).toLocaleString();
            }
          },
        });
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-l from-cyan-200 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-200 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-5xl sm:text-6xl font-bold mb-6 gradient-text"
          >
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn, grow, and thrive with thousands of passionate learners. Your success is our mission.
          </p>


                 
          
        </div>


        {/* Community Features */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) featureRefs.current[index] = el;
              }}
              className="glass rounded-2xl p-8 text-center border border-white/20 hover:border-teal-400/40 transition-all duration-300 cursor-pointer"
            >
              <div className="feature-icon text-6xl mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
              <div className="text-2xl font-bold gradient-text">{feature.stat}</div>
            </div>
          ))}
        </div> */}

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="glass rounded-3xl p-12 mb-20 border border-white/20 bg-gradient-to-r from-white/50 to-white/30"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2" data-count="5000">
                0
              </div>
              <p className="text-gray-600 font-semibold">Active Daily Users</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2" data-count="1000">
                0
              </div>
              <p className="text-gray-600 font-semibold">Hours of Content</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2" data-count="98">
                0
              </div>
              <p className="text-gray-600 font-semibold">% Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2" data-count="150">
                0
              </div>
              <p className="text-gray-600 font-semibold">Countries Reached</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Community Says
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) testimonialRefs.current[index] = el;
                }}
                className="glass rounded-2xl p-8 border border-white/20 hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-teal-600 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4 text-yellow-400">
                  {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Join the Community?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-teal-600 to-blue-700 text-white font-bold rounded-full text-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
              Join Free Today
            </button>
            <button className="px-10 py-4 border-2 border-teal-600 text-teal-600 font-bold rounded-full text-lg hover:bg-teal-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
