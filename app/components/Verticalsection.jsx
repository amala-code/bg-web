'use client';

import { useEffect, useRef, useState } from 'react';
import './VerticalScrollSection.css';
import { FaLaptopCode, FaComments, FaFileAlt, FaRocket, FaMeh, FaGlobe, FaBolt, FaClock } from 'react-icons/fa';

const VerticalScrollSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const rightSectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Student placement challenges data
  const challenges = [
    {
      title: "Lack of Technical Skills",
      description: "Students often lack the practical coding skills and problem-solving abilities that companies demand. Theoretical knowledge from academics isn't enough.",
      icon: FaLaptopCode,
      stat: "67%",
      statLabel: "Students lack coding proficiency"
    },
    {
      title: "Poor Communication",
      description: "Unable to articulate thoughts clearly during interviews. Stammering, lack of confidence, and inability to explain projects effectively.",
      icon: FaComments,
      stat: "54%",
      statLabel: "Fail due to communication"
    },
    {
      title: "Resume Gaps & Mistakes",
      description: "Poorly formatted resumes with spelling errors, no projects, or irrelevant information that gets rejected by ATS systems.",
      icon: FaFileAlt,
      stat: "73%",
      statLabel: "Resumes never reach HR"
    },
    {
      title: "No Real Projects",
      description: "Students have only academic projects with no real-world applications. Recruiters want to see initiative and practical implementation.",
      icon: FaRocket,
      stat: "61%",
      statLabel: "Lack project experience"
    },
    {
      title: "Interview Anxiety",
      description: "Overwhelming nervousness and fear of failure leads to blanking out during interviews, even when they know the answers.",
      icon: FaMeh,
      stat: "48%",
      statLabel: "Suffer from interview anxiety"
    },
    {
      title: "Lack of Industry Awareness",
      description: "No understanding of current industry trends, technologies in demand, or what roles actually exist beyond 'software developer'.",
      icon: FaGlobe,
      stat: "59%",
      statLabel: "Don't know industry trends"
    },
    {
      title: "No Competitive Programming",
      description: "Haven't practiced DSA on platforms like LeetCode or HackerRank. Companies test these skills rigorously in technical rounds.",
      icon: FaBolt,
      stat: "71%",
      statLabel: "Never solved DSA problems"
    },
    {
      title: "Late Preparation Start",
      description: "Students start preparing in final year when placements are months away. Companies prefer candidates who have been preparing consistently.",
      icon: FaClock,
      stat: "64%",
      statLabel: "Start preparing too late"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!rightSectionRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which card should be active based on scroll position
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        // Check if card is in the center of viewport
        if (scrollPosition + windowHeight / 2 >= cardTop && 
            scrollPosition + windowHeight / 2 <= cardTop + cardHeight) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Section Header */}
      <div className="placement-header">
        <h1 className="placement-title">
          Why Students Get <span className="highlight">Rejected</span>
        </h1>
        <p className="placement-subtitle">
          The harsh realities that keep talented students from landing their dream jobs
        </p>
        {/* <div className="header-stats">
          <div className="stat-box">
            <div className="stat-number">78%</div>
            <div className="stat-label">Students face rejection</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">3.2</div>
            <div className="stat-label">Average rejections before offer</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">42%</div>
            <div className="stat-label">Never get placed</div>
          </div>
        </div> */}
      </div>

      {/* Main Scroll Section */}
      <section className="vertical-scroll-section">
        <div className="scroll-container">
          {/* Left Side - Sticky Square Card */}
          <div className="left-side-sticky">
            <div className="teal-square-card">
              <div className="square-content">
                <h2 className="emotional-title">The Pain of Rejection</h2>
                <p className="emotional-text">
                  Every year, thousands of bright students face rejection after rejection. 
                  The stress, the self-doubt, the fear of disappointing parents...
                </p>
                
                {/* <div className="progress-indicator">
                  <div className="progress-label">Challenge {activeCard + 1} of {challenges.length}</div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${((activeCard + 1) / challenges.length) * 100}%` }}
                    />
                  </div>
                </div> */}

                <div className="quote-section">
                  <div className="quote-mark">"</div>
                  <p className="quote-text">
                    I studied hard for 4 years, but no one told me what companies actually want...
                  </p>
                  <p className="quote-author">- Anonymous Student, 2024</p>
                </div>

         
              </div>
            </div>
          </div>

          {/* Right Side - Scrollable Cards */}
          <div className="right-side-scroll" ref={rightSectionRef}>
            <div className="scrolling-cards">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={challenge.title}
                    ref={el => cardRefs.current[index] = el}
                    className={`challenge-card ${activeCard === index ? 'active' : ''}`}
                  >
                    <div className="challenge-icon"><Icon className="w-8 h-8" aria-hidden="true" /></div>
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">{challenge.description}</p>
                  <div className="challenge-stat">
                    <div className="stat-circle">
                      <div className="stat-value">{challenge.stat}</div>
                    </div>
                    <div className="stat-text">{challenge.statLabel}</div>
                  </div>
                  <div className="challenge-number">0{index + 1}</div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="placement-cta">
        <h2 className="cta-title">Don't Let These Challenges Hold You Back</h2>
        <p className="cta-text">
          We help students overcome every single one of these obstacles with personalized mentorship, 
          real projects, and interview preparation that actually works.
        </p>
        <button className="cta-button">
          <span>Start Your Journey</span>
          <span className="button-arrow ml-3" aria-hidden="true">→</span>
        </button>
      </div>
    </>
  );
};

export default VerticalScrollSection;