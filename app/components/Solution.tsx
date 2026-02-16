


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaComments, FaFileAlt, FaProjectDiagram, FaUserTie, FaGlobeAmericas, FaBolt, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    number: '01',
    title: 'Lack of Technical Skills',
    description: 'Students often lack the practical coding skills and problem-solving abilities that companies demand. Theoretical knowledge from academics isn\'t enough.',
    gradient: 'from-blue-400 to-cyan-500',
    icon: FaCode,
    color: '#3b82f6',
    stat: '67%',
  },
  {
    number: '02',
    title: 'Poor Communication',
    description: 'Unable to articulate thoughts clearly during interviews. Stammering, lack of confidence, and inability to explain projects effectively.',
    gradient: 'from-cyan-400 to-teal-500',
    icon: FaComments,
    color: '#06b6d4',
    stat: '54%',
  },
  {
    number: '03',
    title: 'Resume Gaps & Mistakes',
    description: 'Poorly formatted resumes with spelling errors, no projects, or irrelevant information that gets rejected by ATS systems.',
    gradient: 'from-teal-400 to-blue-500',
    icon: FaFileAlt,
    color: '#14b8a6',
    stat: '73%',
  },
  {
    number: '04',
    title: 'No Real Projects',
    description: 'Students have only academic projects with no real-world applications. Recruiters want to see initiative and practical implementation.',
    gradient: 'from-blue-500 to-cyan-400',
    icon: FaProjectDiagram,
    color: '#2563eb',
    stat: '61%',
  },
  {
    number: '05',
    title: 'Interview Anxiety',
    description: 'Overwhelming nervousness and fear of failure leads to blanking out during interviews, even when they know the answers.',
    gradient: 'from-cyan-500 to-teal-400',
    icon: FaUserTie,
    color: '#0891b2',
    stat: '48%',
  },
  {
    number: '06',
    title: 'Lack of Industry Awareness',
    description: 'No understanding of current industry trends, technologies in demand, or what roles actually exist beyond "software developer".',
    gradient: 'from-teal-500 to-blue-400',
    icon: FaGlobeAmericas,
    color: '#0d9488',
    stat: '59%',
  },
  {
    number: '07',
    title: 'No Competitive Programming',
    description: 'Haven\'t practiced DSA on platforms like LeetCode or HackerRank. Companies test these skills rigorously in technical rounds.',
    gradient: 'from-blue-600 to-cyan-500',
    icon: FaBolt,
    color: '#1d4ed8',
    stat: '71%',
  },
  {
    number: '08',
    title: 'Late Preparation Start',
    description: 'Students start preparing in final year when placements are months away. Companies prefer candidates who have been preparing consistently.',
    gradient: 'from-cyan-600 to-teal-500',
    icon: FaClock,
    color: '#0e7490',
    stat: '64%',
  },
];

export default function PlacementProblems() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const floatingShapesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Floating shapes animation
    floatingShapesRef.current.forEach((shape, index) => {
      gsap.to(shape, {
        y: `${Math.sin(index) * 30}`,
        x: `${Math.cos(index) * 20}`,
        rotation: 360,
        duration: 8 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Title animation with split text effect
    const titleChars = titleRef.current?.textContent?.split('') || [];
    if (titleRef.current) {
      titleRef.current.innerHTML = titleChars
        .map((char, i) => `<span class="inline-block char-${i}">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
    }

    gsap.fromTo(
      titleRef.current?.querySelectorAll('span') || [],
      { opacity: 0, y: 50, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Enhanced cards animation with 3D effect
    cardsRef.current.forEach((card, index) => {
      const isEven = index % 2 === 0;

      // Initial reveal animation
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          rotationY: isEven ? -20 : 20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 1,
          delay: 0.2 + index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          ease: 'power3.out',
        }
      );

      // Get card elements
      const iconEl = card.querySelector('.problem-icon') as HTMLElement;
      const numberEl = card.querySelector('.problem-number') as HTMLElement;
      const bgEl = card.querySelector('.problem-bg') as HTMLElement;
      const accentEl = card.querySelector('.problem-accent') as HTMLElement;
      const glowEl = card.querySelector('.problem-glow') as HTMLElement;
      const statEl = card.querySelector('.problem-stat') as HTMLElement;

      // Mouse move 3D tilt effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
        });
      });

      // Mouse enter animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -20,
          scale: 1.02,
          boxShadow: `0 50px 100px -20px ${problems[index].color}40`,
          duration: 0.4,
        });

        gsap.to(iconEl, {
          scale: 1.3,
          rotation: 360,
          duration: 0.6,
          ease: 'back.out(1.7)',
        });

        gsap.to(numberEl, {
          scale: 1.1,
          x: 10,
          duration: 0.4,
        });

        gsap.to(bgEl, {
          scale: 1.05,
          opacity: 0.15,
          duration: 0.4,
        });

        gsap.to(accentEl, {
          width: '100%',
          duration: 0.6,
          ease: 'power2.out',
        });

        gsap.to(glowEl, {
          opacity: 1,
          scale: 1.2,
          duration: 0.4,
        });

        gsap.to(statEl, {
          scale: 1.1,
          duration: 0.3,
        });
      });

      // Mouse leave animation
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
          duration: 0.4,
        });

        gsap.to(iconEl, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
        });

        gsap.to(numberEl, {
          scale: 1,
          x: 0,
          duration: 0.4,
        });

        gsap.to(bgEl, {
          scale: 1,
          opacity: 0,
          duration: 0.4,
        });

        gsap.to(accentEl, {
          width: '3rem',
          duration: 0.6,
        });

        gsap.to(glowEl, {
          opacity: 0,
          scale: 1,
          duration: 0.4,
        });

        gsap.to(statEl, {
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-50 via-cyan-50/30 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={el => { if (el) floatingShapesRef.current[0] = el; }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-cyan-300/40 rounded-full blur-3xl"
        />
        <div
          ref={el => { if (el) floatingShapesRef.current[1] = el; }}
          className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tr from-cyan-200/40 to-teal-300/40 rounded-full blur-3xl"
        />
        <div
          ref={el => { if (el) floatingShapesRef.current[2] = el; }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-bl from-teal-200/30 to-blue-300/30 rounded-full blur-3xl"
        />
        
        {/* Geometric patterns */}
        <div className="absolute top-40 left-10 w-32 h-32 border-2 border-blue-200/30 rounded-lg rotate-45" />
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-cyan-200/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-teal-200/20 rounded-lg rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200/50">
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              ⚠️ The Hard Truth
            </span>
          </div>
          
          <h2
            ref={titleRef}
            className="text-6xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Why Students Fail
          </h2>
          
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            The harsh realities that keep talented students from landing their dream jobs. These are the barriers preventing 78% of students from getting placed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" id="cards-container">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={problem.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="relative group cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <div
                  className="problem-glow absolute -inset-1 rounded-3xl opacity-0 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${problem.color}30, transparent 70%)`,
                    filter: 'blur(20px)',
                  }}
                />

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 overflow-hidden min-h-[420px] flex flex-col justify-between transition-all duration-300">
                  {/* Animated background gradient */}
                  <div
                    className={`problem-bg absolute inset-0 opacity-0 bg-gradient-to-br ${problem.gradient} transition-opacity duration-300`}
                  />

                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent)',
                      backgroundSize: '50px 50px',
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="problem-icon mb-6 inline-block">
                      <IconComponent className="text-5xl filter drop-shadow-lg" style={{ color: problem.color }} />
                    </div>

                    {/* Number badge */}
                    <div
                      className={`problem-number inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.gradient} text-white font-bold text-lg mb-5 shadow-lg`}
                    >
                      {problem.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {problem.description}
                    </p>

                    {/* Stat Badge */}
                    <div className="problem-stat inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200">
                      <span className={`text-2xl font-black bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`}>
                        {problem.stat}
                      </span>
                      <span className="text-xs text-gray-600 font-medium">affected</span>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="relative z-10 mt-6">
                    <div
                      className={`problem-accent h-1.5 w-12 bg-gradient-to-r ${problem.gradient} rounded-full transition-all duration-600`}
                    />
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`absolute inset-0 bg-gradient-to-bl ${problem.gradient} rounded-bl-full`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="mb-6">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Don't let these challenges hold you back. We have solutions to overcome every single one of these obstacles.
            </p>
          </div>
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">See Our Solutions</span>
            <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}