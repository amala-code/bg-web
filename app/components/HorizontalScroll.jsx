

// 

// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './HorizontalScrollSection.css';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScrollSection = ({ cards }) => {
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const [visibleCards, setVisibleCards] = useState(new Set());

//   useEffect(() => {
//     const section = sectionRef.current;
//     const container = containerRef.current;

//     if (!section || !container || !cards?.length) return;

//     // Store ScrollTrigger instances for cleanup
//     const scrollTriggers = [];

//     const initScrollAnimation = () => {
//       // Calculate the total scroll distance needed
//       const scrollWidth = container.scrollWidth;
//       const viewportWidth = section.offsetWidth;
//       const totalScroll = scrollWidth - viewportWidth;

//       // Create the horizontal scroll animation - cards move LEFT (negative X)
//       const tween = gsap.to(container, {
//         x: -totalScroll,
//         duration: 1,
//         ease: "none"
//       });

//       // Create main ScrollTrigger
//       const mainTrigger = ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: `+=${totalScroll * 2}`,
//         pin: true,
//         pinSpacing: true,
//         animation: tween,
//         scrub: 1.5,
//         invalidateOnRefresh: true,
//         onUpdate: (self) => {
//           // Check which cards are visible in viewport
//           const newVisibleCards = new Set();
          
//           cardRefs.current.forEach((cardEl, index) => {
//             if (!cardEl) return;
            
//             const rect = cardEl.getBoundingClientRect();
//             const viewportWidth = window.innerWidth;
            
//             // Card is visible if it's within viewport bounds
//             // More lenient threshold - trigger when card is 30% visible
//             const isVisible = rect.left < viewportWidth * 0.7 && rect.right > viewportWidth * 0.3;
            
//             if (isVisible) {
//               newVisibleCards.add(index);
//             }
//           });
          
//           setVisibleCards(newVisibleCards);
//         }
//       });

//       scrollTriggers.push(mainTrigger);
//     };

//     // Wait for images to load, then initialize
//     const images = container.querySelectorAll('img');
    
//     if (images.length > 0) {
//       let loadedCount = 0;
//       const totalImages = images.length;
      
//       const checkAllLoaded = () => {
//         loadedCount++;
//         if (loadedCount === totalImages) {
//           initScrollAnimation();
//         }
//       };
      
//       images.forEach(img => {
//         if (img.complete) {
//           checkAllLoaded();
//         } else {
//           img.addEventListener('load', checkAllLoaded);
//           img.addEventListener('error', checkAllLoaded); // Handle errors too
//         }
//       });
//     } else {
//       // No images, initialize immediately
//       initScrollAnimation();
//     }

//     // Cleanup function - only kill ScrollTriggers created by this component
//     return () => {
//       scrollTriggers.forEach(trigger => trigger.kill());
//     };
//   }, [cards]);

//   return (
//     <section ref={sectionRef} className="horizontal-scroll-section">
//       <div className="horizontal-scroll-sticky">
//         <div 
//           ref={containerRef} 
//           className="horizontal-scroll-container"
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               ref={el => cardRefs.current[index] = el}
//               className={`card-group ${visibleCards.has(index) ? 'card-visible' : ''}`}
//             >
//               {/* Main Large Card - Tilted */}
//               <div className="main-card">
//                 <div className="main-card-inner">
//                   <h3 className="card-title">{card.title}</h3>
//                   <p className="card-author">{card.author}</p>
//                   <p className="card-role">{card.role}</p>
//                   <button className="card-button">
//                     {card.buttonText || 'Listen'}
//                     <span className="button-icon">▶</span>
//                   </button>
//                   <div className="card-number">{card.number || String(index + 1).padStart(2, '0')}</div>
//                 </div>
//               </div>

//               {/* Small Square Card - Bottom Right with Color Filter */}
//               <div className="small-card" style={{ backgroundColor: card.accentColor || '#00bcd4' }}>
//                 <div className="small-card-inner">
//                   {card.smallImage && (
//                     <div className="small-card-image">
//                       <img src={card.smallImage} alt="" />
//                       <div className="color-overlay" style={{ backgroundColor: card.accentColor || '#00bcd4' }}></div>
//                     </div>
//                   )}
//                   <div className="small-card-pattern"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HorizontalScrollSection;

'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalScrollSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = ({ cards }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container || !cards?.length) return;

    // Store ScrollTrigger instances for cleanup
    const scrollTriggers = [];

    const initScrollAnimation = () => {
      // Calculate the total scroll distance needed
      const scrollWidth = container.scrollWidth;
      const viewportWidth = section.offsetWidth;
      const totalScroll = scrollWidth - viewportWidth;

      // Create the horizontal scroll animation - cards move LEFT (negative X)
      const tween = gsap.to(container, {
        x: -totalScroll,
        duration: 1,
        ease: "none"
      });

      // Create main ScrollTrigger
      const mainTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`, // FIXED: Changed from totalScroll * 2
        pin: true,
        pinSpacing: true,
        animation: tween,
        scrub: 1, // FIXED: Reduced from 1.5 for smoother transition
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Check which cards are visible in viewport
          const newVisibleCards = new Set();
          
          cardRefs.current.forEach((cardEl, index) => {
            if (!cardEl) return;
            
            const rect = cardEl.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            
            // Card is visible if it's within viewport bounds
            // More lenient threshold - trigger when card is 30% visible
            const isVisible = rect.left < viewportWidth * 0.7 && rect.right > viewportWidth * 0.3;
            
            if (isVisible) {
              newVisibleCards.add(index);
            }
          });
          
          setVisibleCards(newVisibleCards);
        }
      });

      scrollTriggers.push(mainTrigger);
    };

    // Wait for images to load, then initialize
    const images = container.querySelectorAll('img');
    
    if (images.length > 0) {
      let loadedCount = 0;
      const totalImages = images.length;
      
      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          initScrollAnimation();
        }
      };
      
      images.forEach(img => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener('load', checkAllLoaded);
          img.addEventListener('error', checkAllLoaded); // Handle errors too
        }
      });
    } else {
      // No images, initialize immediately
      initScrollAnimation();
    }

    // Cleanup function - only kill ScrollTriggers created by this component
    return () => {
      scrollTriggers.forEach(trigger => trigger.kill());
    };
  }, [cards]);

  return (
    <section ref={sectionRef} className="horizontal-scroll-section">
      <div className="horizontal-scroll-sticky">
        <div 
          ref={containerRef} 
          className="horizontal-scroll-container"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`card-group ${visibleCards.has(index) ? 'card-visible' : ''}`}
            >
              {/* Main Large Card - Tilted */}
              <div className="main-card">
                <div className="main-card-inner">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-author">{card.author}</p>
                  <p className="card-role">{card.role}</p>
                  <button className="card-button">
                    {card.buttonText || 'Listen'}
                    <span className="button-icon">▶</span>
                  </button>
                  <div className="card-number">{card.number || String(index + 1).padStart(2, '0')}</div>
                </div>
              </div>

              {/* Small Square Card - Bottom Right with Color Filter */}
              <div className="small-card" style={{ backgroundColor: card.accentColor || '#00bcd4' }}>
                <div className="small-card-inner">
                  {card.smallImage && (
                    <div className="small-card-image">
                      <img src={card.smallImage} alt="" />
                      <div className="color-overlay" style={{ backgroundColor: card.accentColor || '#00bcd4' }}></div>
                    </div>
                  )}
                  <div className="small-card-pattern"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;