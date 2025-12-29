'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CompaniesScroll() {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Real company logos using CDN URLs
  const companies = [

    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png',
      color: '#00A4EF'
    },
    {
      name: 'Apple',
      logo: 'https://www.apple.com/ac/structured-data/images/open_graph_logo.png',
      color: '#000000'
    },
 
    {
      name: 'Facebook',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/200px-Facebook_Logo_%282019%29.png',
      color: '#1877F2'
    },
    {
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/640px-Netflix_Logomark.png',
      color: '#0918e5ff'
    },
    
    {
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png',
      color: '#0F62FE'
    },

    {
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/200px-Salesforce.com_logo.svg.png',
      color: '#00A1DF'
    },
  ];

  // Duplicate companies for infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    let currentScroll = scrollPosition;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      if (!isHovered) {
        currentScroll += scrollSpeed;

        // Reset to beginning when reaching the end
        const scrollWidth = container.scrollWidth / 3; // Since we triplicated
        if (currentScroll >= scrollWidth) {
          currentScroll = 0;
        }

        container.scrollLeft = currentScroll;
        setScrollPosition(currentScroll);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, scrollPosition]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our platform is used by companies worldwide to train and develop their teams
          </p>
        </motion.div>

        {/* Scroll Container with Gradient Overlays */}
        <div className="relative group">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Logos Container */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-8 sm:gap-12 overflow-x-hidden pb-4 scroll-smooth cursor-grab active:cursor-grabbing"
            style={{
              scrollBehavior: 'auto',
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex-shrink-0 group/company relative"
              >
                {/* Company Logo - No Box */}
                <motion.img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 sm:h-10 w-auto object-contain filter drop-shadow-sm group-hover/company:drop-shadow-lg transition-all duration-300"
                  whileHover={{ filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.5))' }}
                />

                {/* Bottom Accent Bar on Hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r to-transparent opacity-0 group-hover/company:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${company.color}, transparent)`,
                  }}
                />

                {/* Company Name Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs sm:text-sm font-semibold rounded-md whitespace-nowrap pointer-events-none"
                >
                  {company.name}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 mb-[-4px]" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ←
            </motion.span>
            Hover to pause
            <motion.span
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
      >
        {[
          { number: '500+', label: 'Enterprise Clients' },
          { number: '1M+', label: 'Students Trained' },
          { number: '95%', label: 'Satisfaction Rate' },
          { number: '24/7', label: 'Platform Support' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all"
          >
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
              {stat.number}
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-semibold">{stat.label}</p>
          </motion.div>
        ))} */}
      {/* </motion.div> */}
    </section>
  );
}
