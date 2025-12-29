'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    number: '01',
    title: 'Flexible Learning Paths',
    description: 'Learn at your own pace, on your own schedule. Pause, rewind, and master each concept before moving forward.',
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    number: '02',
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with real-world experience. Direct guidance from practitioners who know what works.',
    gradient: 'from-blue-400 to-teal-500',
  },
  {
    number: '03',
    title: 'Affordable Access',
    description: 'Quality education doesn\'t require a premium price. Get certified courses at a fraction of traditional costs.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    number: '04',
    title: 'Thriving Community',
    description: 'Network with peers, collaborate on projects, and grow together. Community support is built into every course.',
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    number: '05',
    title: 'Job-Ready Skills',
    description: 'Curriculum aligned with industry demands. Build a portfolio that impresses employers and lands interviews.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    number: '06',
    title: 'Lifetime Access',
    description: 'Never expire. Access course materials forever, plus get free updates with new content and lessons.',
    gradient: 'from-emerald-400 to-teal-500',
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Staggered cards with rotation animation
    cardsRef.current.forEach((card, index) => {
      const isEven = index % 2 === 0;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          rotation: isEven ? -5 : 5,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          ease: 'cubic.out',
        }
      );

      // Hover animations
      const numberEl = card.querySelector('.solution-number') as HTMLElement;
      const bgEl = card.querySelector('.solution-bg') as HTMLElement;

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          boxShadow: '0 40px 80px rgba(13, 148, 136, 0.25)',
          duration: 0.4,
        });

        gsap.to(numberEl, {
          scale: 1.2,
          rotation: 360,
          duration: 0.6,
        });

        gsap.to(bgEl, {
          scale: 1.1,
          duration: 0.4,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 10px 30px rgba(13, 148, 136, 0.1)',
          duration: 0.4,
        });

        gsap.to(numberEl, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
        });

        gsap.to(bgEl, {
          scale: 1,
          duration: 0.4,
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-l from-blue-200 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-t from-teal-200 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-5xl sm:text-6xl font-bold mb-6 gradient-text"
          >
            Our Solutions
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive features designed to supercharge your learning experience and guarantee success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative glass rounded-2xl p-8 cursor-pointer group overflow-hidden border border-white/20 hover:border-teal-400/40 transition-all duration-300 min-h-[300px] flex flex-col justify-between"
            >
              {/* Animated background */}
              <div
                className={`solution-bg absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${solution.gradient} transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`solution-number text-5xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent mb-4 inline-block`}
                >
                  {solution.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-700 leading-relaxed">{solution.description}</p>
              </div>

              {/* Bottom accent */}
              <div className={`h-1 w-12 bg-gradient-to-r ${solution.gradient} rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
