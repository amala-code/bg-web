
// // 'use client';

// // import React, { useState } from 'react';

// // const PricingComponent = () => {
// //   const [hoveredCard, setHoveredCard] = useState(null); // No default, only on hover

// //   const pricingTiers = [
// //     {
// //       id: 1,
// //       name: 'Starter',
// //       price: '5k',
// //       description: 'Perfect for beginners',
// //       features: [
// //         'Basic Web Development',
// //         'HTML & CSS Fundamentals',
// //         'JavaScript Basics',
// //         'Responsive Design'
// //       ],
// //       stats: {
// //         duration: '3 months',
// //         projects: '5+',
// //         certifications: '1',
// //         mentorship: 'Group Sessions'
// //       },
// //       skills: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Responsive Design'],
// //       color: 'from-blue-500 to-cyan-500'
// //     },
// //     {
// //       id: 2,
// //       name: 'Professional',
// //       price: '9k',
// //       description: 'For serious learners',
// //       features: [
// //         'Full Stack Development',
// //         'React & Node.js',
// //         'Database Management',
// //         'API Development',
// //         'Deployment & Hosting'
// //       ],
// //       stats: {
// //         duration: '6 months',
// //         projects: '12+',
// //         certifications: '3',
// //         mentorship: '1-on-1 Sessions'
// //       },
// //       skills: [
// //         'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
// //         'MongoDB', 'Express.js', 'REST API', 'Git', 'Docker',
// //         'AWS Basics', 'TypeScript'
// //       ],
// //       color: 'from-purple-500 to-pink-500',
// //       popular: true
// //     },
// //     {
// //       id: 3,
// //       name: 'Master',
// //       price: '15k',
// //       description: 'Become an expert',
// //       features: [
// //         'Advanced Full Stack',
// //         'System Design',
// //         'Microservices',
// //         'Cloud Architecture',
// //         'DevOps & CI/CD',
// //         'Interview Preparation'
// //       ],
// //       stats: {
// //         duration: '12 months',
// //         projects: '20+',
// //         certifications: '5',
// //         mentorship: 'Dedicated Mentor'
// //       },
// //       skills: [
// //         'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
// //         'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis',
// //         'Express.js', 'GraphQL', 'REST API', 'Microservices',
// //         'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git',
// //         'CI/CD', 'System Design', 'Testing', 'Security'
// //       ],
// //       color: 'from-orange-500 to-red-500'
// //     }
// //   ];

// //   // Get the currently active tier (either hovered or default to first tier)
// //   const activeTier = pricingTiers.find(tier => tier.id === hoveredCard) || pricingTiers[0];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-16">
// //           <h1 className="text-5xl font-bold text-white mb-4">
// //             Choose Your Learning Path
// //           </h1>
// //           <p className="text-gray-400 text-lg">
// //             Invest in your future with our comprehensive courses
// //           </p>
// //         </div>

// //         {/* Pricing Cards Grid */}
// //         <div className="grid md:grid-cols-3 gap-8 mb-16 pb-32">
// //           {pricingTiers.map((tier) => (
// //             <div
// //               key={tier.id}
// //               className="relative"
// //               onMouseEnter={() => setHoveredCard(tier.id)}
// //               onMouseLeave={() => setHoveredCard(null)} // Reset to null
// //             >
// //               {/* Main Pricing Card */}
// //               <div
// //                 className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
// //                   hoveredCard === tier.id
// //                     ? 'border-white scale-105 shadow-2xl'
// //                     : 'border-gray-700 hover:border-gray-600'
// //                 } ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}
// //               >
// //                 {tier.popular && (
// //                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
// //                     <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
// //                       Most Popular
// //                     </span>
// //                   </div>
// //                 )}

// //                 <div className="text-center mb-6">
// //                   <h3 className="text-2xl font-bold text-white mb-2">
// //                     {tier.name}
// //                   </h3>
// //                   <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
// //                   <div className="flex items-baseline justify-center">
// //                     <span className={`text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${tier.color}`}>
// //                       ₹{tier.price}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <div className="space-y-3 mb-8">
// //                   {tier.features.map((feature, index) => (
// //                     <div key={index} className="flex items-start">
// //                       <svg
// //                         className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           strokeWidth={2}
// //                           d="M5 13l4 4L19 7"
// //                         />
// //                       </svg>
// //                       <span className="text-gray-300 text-sm">{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <button
// //                   className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${tier.color} text-white hover:shadow-lg hover:scale-105`}
// //                 >
// //                   Enroll Now
// //                 </button>

// //                 {/* Course Stats - Below button */}
// //                 <div className={`mt-6 pt-6 border-t border-gray-700 transition-opacity duration-300 ${
// //                   hoveredCard === tier.id ? 'opacity-100' : 'opacity-50'
// //                 }`}>
// //                   <h4 className="text-white font-semibold mb-3 text-sm">
// //                     Course Stats
// //                   </h4>
// //                   <div className="space-y-2">
// //                     {Object.entries(tier.stats).map(([key, value]) => (
// //                       <div key={key} className="flex justify-between items-center text-xs">
// //                         <span className="text-gray-400 capitalize">
// //                           {key.replace(/([A-Z])/g, ' $1').trim()}:
// //                         </span>
// //                         <span className="text-white font-semibold">{value}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Single Resume Preview - Bottom of cards with pop-up effect */}
// //         <div className="relative max-w-6xl mx-auto -mt-32">
// //           <div 
// //             className={`bg-gray-800 border-2 rounded-xl p-8 shadow-2xl transition-all duration-500 relative ${
// //               hoveredCard ? 'border-orange-400 z-50' : 'border-gray-700 z-20'
// //             }`}
// //             style={{
// //               transform: hoveredCard ? 'translateY(-80px)' : 'translateY(0)',
// //               boxShadow: hoveredCard ? '0 30px 80px rgba(249, 115, 22, 0.6)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
// //               transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
// //             }}
// //           >
// //             <div className="flex items-center justify-between mb-4">
// //               <h4 className="text-white font-semibold text-lg">
// //                 Your Updated Resume
// //               </h4>
// //               <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${activeTier.color} text-white`}>
// //                 {activeTier.name}
// //               </span>
// //             </div>

// //             {/* Resume Preview */}
// //             <div className="bg-white rounded-lg p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
// //               {/* Resume Header */}
// //               <div className="border-b-2 border-gray-200 pb-5 mb-5">
// //                 <div className="flex items-center gap-4">
// //                   <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
// //                     JD
// //                   </div>
// //                   <div className="flex-1">
// //                     <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
// //                     <div className="h-3 w-48 bg-gray-200 rounded"></div>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Skills Section */}
// //               <div className="mb-5">
// //                 <div className="flex items-center justify-between mb-4">
// //                   <h5 className="text-lg font-bold text-gray-800 flex items-center">
// //                     <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
// //                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                     </svg>
// //                     Technical Skills
// //                   </h5>
// //                   <span className={`text-sm font-bold px-4 py-1.5 rounded bg-gradient-to-r ${activeTier.color} text-white`}>
// //                     +{activeTier.skills.length} New
// //                   </span>
// //                 </div>
                
// //                 <div className="flex flex-wrap gap-2.5">
// //                   {activeTier.skills.map((skill, index) => (
// //                     <span
// //                       key={index}
// //                       className={`text-sm bg-gradient-to-r ${activeTier.color} text-white px-4 py-2 rounded-md font-medium shadow-sm transform hover:scale-110 transition-transform duration-200`}
// //                       style={{
// //                         animation: `fadeIn 0.3s ease-in ${index * 0.05}s both`
// //                       }}
// //                     >
// //                       {skill}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Resume Footer */}
// //               <div className="mt-5 pt-5 border-t border-gray-200 flex justify-between items-center">
// //                 <div className="text-base text-gray-500">
// //                   <span className="font-semibold text-gray-700">{activeTier.stats.projects}</span> Projects
// //                 </div>
// //                 <div className="text-base text-gray-500">
// //                   <span className="font-semibold text-gray-700">{activeTier.stats.certifications}</span> Certificates
// //                 </div>
// //                 <div className="text-base font-semibold text-gray-700">
// //                   {activeTier.skills.length} Skills
// //                 </div>
// //               </div>

// //               {/* Placeholder sections */}
// //               <div className="mt-5 space-y-3">
// //                 <div className="h-3 w-full bg-gray-100 rounded"></div>
// //                 <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
// //                 <div className="h-3 w-4/6 bg-gray-100 rounded"></div>
// //               </div>
// //             </div>

// //             {/* Info text */}
// //             <div className="mt-5 p-4 bg-gray-700 rounded-lg">
// //               <p className="text-base text-gray-300 text-center">
// //                 <span className="font-semibold text-white">Hover over any course</span> to see how your resume will be enhanced with new skills
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Add fadeIn animation */}
// //       <style jsx>{`
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(-5px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes popUp {
// //           0% {
// //             transform: translateY(0px);
// //             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
// //           }
// //           50% {
// //             transform: translateY(-8px);
// //           }
// //           100% {
// //             transform: translateY(-12px);
// //             box-shadow: 0 20px 60px rgba(249, 115, 22, 0.5);
// //           }
// //         }

// //         @keyframes popDown {
// //           0% {
// //             transform: translateY(-12px);
// //             box-shadow: 0 20px 60px rgba(249, 115, 22, 0.5);
// //           }
// //           100% {
// //             transform: translateY(0px);
// //             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default PricingComponent;


// 'use client';

// import React, { useState } from 'react';

// const PricingComponent = () => {
//   const [hoveredCard, setHoveredCard] = useState(null); // No default, only on hover

//   const pricingTiers = [
//     {
//       id: 1,
//       name: 'Starter',
//       price: '5k',
//       description: 'Perfect for beginners',
//       features: [
//         'Basic Web Development',
//         'HTML & CSS Fundamentals',
//         'JavaScript Basics',
//         'Responsive Design'
//       ],
//       stats: {
//         duration: '3 months',
//         projects: '5+',
//         certifications: '1',
//         mentorship: 'Group Sessions'
//       },
//       skills: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Responsive Design'],
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       id: 2,
//       name: 'Professional',
//       price: '9k',
//       description: 'For serious learners',
//       features: [
//         'Full Stack Development',
//         'React & Node.js',
//         'Database Management',
//         'API Development',
//         'Deployment & Hosting'
//       ],
//       stats: {
//         duration: '6 months',
//         projects: '12+',
//         certifications: '3',
//         mentorship: '1-on-1 Sessions'
//       },
//       skills: [
//         'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
//         'MongoDB', 'Express.js', 'REST API', 'Git', 'Docker',
//         'AWS Basics', 'TypeScript'
//       ],
//       color: 'from-purple-500 to-pink-500',
//       popular: true
//     },
//     {
//       id: 3,
//       name: 'Master',
//       price: '15k',
//       description: 'Become an expert',
//       features: [
//         'Advanced Full Stack',
//         'System Design',
//         'Microservices',
//         'Cloud Architecture',
//         'DevOps & CI/CD',
//         'Interview Preparation'
//       ],
//       stats: {
//         duration: '12 months',
//         projects: '20+',
//         certifications: '5',
//         mentorship: 'Dedicated Mentor'
//       },
//       skills: [
//         'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
//         'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis',
//         'Express.js', 'GraphQL', 'REST API', 'Microservices',
//         'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git',
//         'CI/CD', 'System Design', 'Testing', 'Security'
//       ],
//       color: 'from-orange-500 to-red-500'
//     }
//   ];

//   // Get the currently active tier (either hovered or default to first tier)
//   const activeTier = pricingTiers.find(tier => tier.id === hoveredCard) || pricingTiers[0];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-white mb-4">
//             Choose Your Learning Path
//           </h1>
//           <p className="text-gray-400 text-lg">
//             Invest in your future with our comprehensive courses
//           </p>
//         </div>

//         {/* Main Grid Layout - Cards on Left, Resume on Right */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Left Side - Pricing Cards (2 columns) */}
//           <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
//             {pricingTiers.map((tier) => (
//               <div
//                 key={tier.id}
//                 className="relative"
//                 onMouseEnter={() => setHoveredCard(tier.id)}
//                 onMouseLeave={() => setHoveredCard(null)} // Reset to null
//               >
//                 {/* Main Pricing Card */}
//                 <div
//                   className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
//                     hoveredCard === tier.id
//                       ? 'border-white scale-105 shadow-2xl'
//                       : 'border-gray-700 hover:border-gray-600'
//                   } ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}
//                 >
//                   {tier.popular && (
//                     <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                       <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                         Most Popular
//                       </span>
//                     </div>
//                   )}

//                   <div className="text-center mb-6">
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {tier.name}
//                     </h3>
//                     <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
//                     <div className="flex items-baseline justify-center">
//                       <span className={`text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${tier.color}`}>
//                         ₹{tier.price}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="space-y-3 mb-8">
//                     {tier.features.map((feature, index) => (
//                       <div key={index} className="flex items-start">
//                         <svg
//                           className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                         <span className="text-gray-300 text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${tier.color} text-white hover:shadow-lg hover:scale-105`}
//                   >
//                     Enroll Now
//                   </button>

//                   {/* Course Stats - Below button */}
//                   <div className={`mt-6 pt-6 border-t border-gray-700 transition-opacity duration-300 ${
//                     hoveredCard === tier.id ? 'opacity-100' : 'opacity-50'
//                   }`}>
//                     <h4 className="text-white font-semibold mb-3 text-sm">
//                       Course Stats
//                     </h4>
//                     <div className="space-y-2">
//                       {Object.entries(tier.stats).map(([key, value]) => (
//                         <div key={key} className="flex justify-between items-center text-xs">
//                           <span className="text-gray-400 capitalize">
//                             {key.replace(/([A-Z])/g, ' $1').trim()}:
//                           </span>
//                           <span className="text-white font-semibold">{value}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Side - Resume Preview (Sticky) */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-8">
//               <div 
//                 className={`bg-gray-800 border-2 rounded-xl p-6 shadow-2xl transition-all duration-500 ${
//                   hoveredCard ? 'border-orange-400 scale-105' : 'border-gray-700'
//                 }`}
//                 style={{
//                   boxShadow: hoveredCard ? '0 20px 60px rgba(249, 115, 22, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
//                   transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
//                 }}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h4 className="text-white font-semibold text-lg">
//                     Your Resume
//                   </h4>
//                   {hoveredCard && (
//                     <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${activeTier.color} text-white animate-pulse`}>
//                       {activeTier.name}
//                     </span>
//                   )}
//                 </div>

//                 {/* Resume Preview */}
//                 <div className="bg-white rounded-lg p-6 shadow-xl transition-all duration-300">
//                   {/* Resume Header */}
//                   <div className="border-b-2 border-gray-200 pb-4 mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                         JD
//                       </div>
//                       <div className="flex-1">
//                         <div className="h-3 w-32 bg-gray-300 rounded mb-2"></div>
//                         <div className="h-2 w-40 bg-gray-200 rounded"></div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Skills Section */}
//                   <div className="mb-4">
//                     <div className="flex items-center justify-between mb-3">
//                       <h5 className="text-base font-bold text-gray-800 flex items-center">
//                         <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                         Skills
//                       </h5>
//                       {hoveredCard && (
//                         <span className={`text-xs font-bold px-3 py-1 rounded bg-gradient-to-r ${activeTier.color} text-white`}>
//                           +{activeTier.skills.length}
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="flex flex-wrap gap-2">
//                       {activeTier.skills.slice(0, 12).map((skill, index) => (
//                         <span
//                           key={index}
//                           className={`text-xs bg-gradient-to-r ${activeTier.color} text-white px-3 py-1.5 rounded-md font-medium shadow-sm transform hover:scale-110 transition-transform duration-200`}
//                           style={{
//                             animation: hoveredCard ? `fadeIn 0.3s ease-in ${index * 0.05}s both` : 'none'
//                           }}
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                       {activeTier.skills.length > 12 && (
//                         <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md font-medium">
//                           +{activeTier.skills.length - 12} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Resume Footer */}
//                   <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-3 gap-2 text-center">
//                     <div>
//                       <div className="text-lg font-bold text-gray-700">{activeTier.stats.projects}</div>
//                       <div className="text-xs text-gray-500">Projects</div>
//                     </div>
//                     <div>
//                       <div className="text-lg font-bold text-gray-700">{activeTier.stats.certifications}</div>
//                       <div className="text-xs text-gray-500">Certificates</div>
//                     </div>
//                     <div>
//                       <div className="text-lg font-bold text-gray-700">{activeTier.skills.length}</div>
//                       <div className="text-xs text-gray-500">Skills</div>
//                     </div>
//                   </div>

//                   {/* Placeholder sections */}
//                   <div className="mt-4 space-y-2">
//                     <div className="h-2 w-full bg-gray-100 rounded"></div>
//                     <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
//                     <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
//                   </div>
//                 </div>

//                 {/* Info text */}
//                 <div className="mt-4 p-3 bg-gray-700 rounded-lg">
//                   <p className="text-sm text-gray-300 text-center">
//                     {hoveredCard ? (
//                       <>
//                         <span className="font-semibold text-white">Preview:</span> {activeTier.name} tier skills
//                       </>
//                     ) : (
//                       <>
//                         <span className="font-semibold text-white">Hover</span> over any course
//                       </>
//                     )}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add fadeIn animation */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-5px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes popUp {
//           0% {
//             transform: translateY(0px);
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//           100% {
//             transform: translateY(-12px);
//             box-shadow: 0 20px 60px rgba(249, 115, 22, 0.5);
//           }
//         }

//         @keyframes popDown {
//           0% {
//             transform: translateY(-12px);
//             box-shadow: 0 20px 60px rgba(249, 115, 22, 0.5);
//           }
//           100% {
//             transform: translateY(0px);
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PricingComponent;

'use client';

import React, { useState } from 'react';

const PricingComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // No default, only on hover

  const pricingTiers = [
    {
      id: 1,
      name: 'Starter',
      price: '5k',
      description: 'Perfect for beginners',
      features: [
        'Basic Web Development',
        'HTML & CSS Fundamentals',
        'JavaScript Basics',
        'Responsive Design'
      ],
      stats: {
        duration: '3 months',
        projects: '5+',
        certifications: '1',
        mentorship: 'Group Sessions'
      },
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Professional',
      price: '9k',
      description: 'For serious learners',
      features: [
        'Full Stack Development',
        'React & Node.js',
        'Database Management',
        'API Development',
        'Deployment & Hosting'
      ],
      stats: {
        duration: '6 months',
        projects: '12+',
        certifications: '3',
        mentorship: '1-on-1 Sessions'
      },
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
        'MongoDB', 'Express.js', 'REST API', 'Git', 'Docker',
        'AWS Basics', 'TypeScript'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 3,
      name: 'Master',
      price: '15k',
      description: 'Become an expert',
      features: [
        'Advanced Full Stack',
        'System Design',
        'Microservices',
        'Cloud Architecture',
        'DevOps & CI/CD',
        'Interview Preparation'
      ],
      stats: {
        duration: '12 months',
        projects: '20+',
        certifications: '5',
        mentorship: 'Dedicated Mentor'
      },
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
        'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Redis',
        'Express.js', 'GraphQL', 'REST API', 'Microservices',
        'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git',
        'CI/CD', 'System Design', 'Testing', 'Security'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Get the currently active tier (either hovered or default to first tier)
  const activeTier = pricingTiers.find(tier => tier.id === hoveredCard) || pricingTiers[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-gray-400 text-lg">
            Invest in your future with our comprehensive courses
          </p>
        </div>

        {/* Main Grid Layout - Cards on Left, Resume on Right */}
        <div className="grid lg:grid-cols-7 gap-10">
          {/* Left Side - All 3 Pricing Cards (5 columns) */}
          <div className="lg:col-span-5 grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className="relative"
                onMouseEnter={() => setHoveredCard(tier.id)}
                onMouseLeave={() => setHoveredCard(null)} // Reset to null
              >
                {/* Main Pricing Card */}
                <div
                  className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                    hoveredCard === tier.id
                      ? 'border-white scale-105 shadow-2xl'
                      : 'border-gray-700 hover:border-gray-600'
                  } ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className={`text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${tier.color}`}>
                        ₹{tier.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${tier.color} text-white hover:shadow-lg hover:scale-105`}
                  >
                    Enroll Now
                  </button>

                  {/* Course Stats - Below button */}
                  <div className={`mt-6 pt-6 border-t border-gray-700 transition-opacity duration-300 ${
                    hoveredCard === tier.id ? 'opacity-100' : 'opacity-50'
                  }`}>
                    <h4 className="text-white font-semibold mb-3 text-sm">
                      Course Stats
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(tier.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center text-xs">
                          <span className="text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Resume Preview (Sticky) */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div 
                className={`bg-gray-800 border-2 rounded-xl p-6 shadow-2xl transition-all duration-500 ${
                  hoveredCard ? 'border-orange-400 scale-105' : 'border-gray-700'
                }`}
                style={{
                  boxShadow: hoveredCard ? '0 20px 60px rgba(249, 115, 22, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold text-lg">
                    Your Resume
                  </h4>
                  {hoveredCard && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${activeTier.color} text-white animate-pulse`}>
                      {activeTier.name}
                    </span>
                  )}
                </div>

                {/* Resume Preview */}
                <div className="bg-white rounded-lg p-6 shadow-xl transition-all duration-300">
                  {/* Resume Header */}
                  <div className="border-b-2 border-gray-200 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        JD
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-32 bg-gray-300 rounded mb-2"></div>
                        <div className="h-2 w-40 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-base font-bold text-gray-800 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Skills
                      </h5>
                      {hoveredCard && (
                        <span className={`text-xs font-bold px-3 py-1 rounded bg-gradient-to-r ${activeTier.color} text-white`}>
                          +{activeTier.skills.length}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {activeTier.skills.slice(0, 12).map((skill, index) => (
                        <span
                          key={index}
                          className={`text-xs bg-gradient-to-r ${activeTier.color} text-white px-3 py-1.5 rounded-md font-medium shadow-sm transform hover:scale-110 transition-transform duration-200`}
                          style={{
                            animation: hoveredCard ? `fadeIn 0.3s ease-in ${index * 0.05}s both` : 'none'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                      {activeTier.skills.length > 12 && (
                        <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md font-medium">
                          +{activeTier.skills.length - 12} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Resume Footer */}
                  <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-700">{activeTier.stats.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{activeTier.stats.certifications}</div>
                      <div className="text-xs text-gray-500">Certificates</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{activeTier.skills.length}</div>
                      <div className="text-xs text-gray-500">Skills</div>
                    </div>
                  </div>

                  {/* Placeholder sections */}
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                    <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                  </div>
                </div>

                {/* Info text */}
                <div className="mt-4 p-3 bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-300 text-center">
                    {hoveredCard ? (
                      <>
                        <span className="font-semibold text-white">Preview:</span> {activeTier.name} tier skills
                      </>
                    ) : (
                      <>
                        <span className="font-semibold text-white">Hover</span> over any course
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popUp {
          0% {
            transform: translateY(0px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(-12px);
            box-shadow: 0 20px 60px rgba(249, 115, 22, 0.5);
          }
        }

        @keyframes popDown {
          0% {
            transform: translateY(-12px);
            box-shadow: 0 20px 60px rgba(249, 115, 22, 0.5);
          }
          100% {
            transform: translateY(0px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default PricingComponent;