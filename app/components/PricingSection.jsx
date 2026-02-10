

'use client';

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const PricingComponent = () => {
  const router = useRouter();
  
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState('ai'); // 'ai' or 'ds'


  const tracks = {
    ai: {
      title: 'Modern AI',
      subtitle: 'Master cutting-edge AI technologies',
      tiers: [
        {
          id: 1,
          name: 'Basic',
        price: '5,999',
          originalPrice: '8,000',
                    description: 'Perfect for beginners',
          features: [
            'AI Fundamentals',
            'Python for AI',
            'Machine Learning Basics',
            'Neural Networks Intro'
          ],
          stats: {
            duration: 'q months',
            projects: 'Porjects not included',
            certifications: 'Certificate will be provided',
          },
          skills: ['Python', 'Machine Learning', 'Neural Networks', 'TensorFlow', 'Data Processing'],
          color: 'from-blue-500 to-cyan-500'
        },
        {
          id: 2,
          name: 'Pro',
          price: '9,999',
          originalPrice: '11,900',
          description: 'For serious learners',
          features: [
            'Deep Learning',
            'Computer Vision',
            'Natural Language Processing',
            'AI Model Deployment',
            'MLOps Fundamentals'
          ],
          stats: {
            duration: '2 months',
            projects: '8 Mini Projects',
            certifications: 'Certificate will be provided',
          },
          skills: [
            'Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP',
            'Deep Learning', 'CNN', 'RNN', 'Transformers', 'BERT',
            'GPT', 'LangChain'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: true
        },
        {
          id: 3,
          name: 'Elite (Career Track)',
          price: '13,999',
          originalPrice: '20,000',
                    description: 'Become an AI expert',
          features: [
            'Advanced AI Architectures',
            'LLM Fine-tuning',
            'Generative AI',
            'AI Research Methods',
            'Production AI Systems',
            'Interview Preparation'
          ],
          stats: {
            duration: '3 months',
            projects: '11 Mini + 3 Capstone Projects',
            certifications: 'Certificate will be provided',
          },
          skills: [
            'Python', 'TensorFlow', 'PyTorch', 'Keras', 'Computer Vision',
            'NLP', 'Deep Learning', 'CNN', 'RNN', 'LSTM', 'GAN',
            'Transformers', 'BERT', 'GPT', 'LLM', 'RAG', 'LangChain',
            'Hugging Face', 'OpenAI API', 'Vector Databases', 'MLOps',
            'Kubernetes', 'Docker', 'AWS SageMaker', 'Model Optimization'
          ],
          color: 'from-orange-500 to-red-500',
          popular: true

        }
      ]
    },
    ds: {
      title: 'Data Science with Machine Learning',
      subtitle: 'Your complete journey from beginner to job-ready data scientist',
      tiers: [
        {
          id: 1,
          name: 'Baisc',
          price: '5,999',
          originalPrice: '8,000',
          description: 'Perfect starting point for aspiring data scientists',
          features: [
            '8 Core Chapters',
            'Basic Community Access',
            'Certificate on LinkedIn',
            '1 Month Duration'
          ],
          stats: {
            duration: '1 month',
            projects: 'Not Included',
            certifications: 'Certificate will be provided',
            mentorship: 'Basic Community'
          },
          skills: ['Python', 'Data Analysis', 'Statistics Basics', 'Pandas', 'NumPy'],
          color: 'from-blue-500 to-cyan-500'
        },
        {
          id: 2,
          name: 'Pro',
          price: '9,999',
          originalPrice: '11,900',
          description: 'Build practical skills with hands-on projects',
          features: [
            '15 Chapters',
            '8 Mini courses',
            '200+ Practice Questions',
            'Soft Skills Questionnaire',
            'Certificate on LinkedIn'
          ],
          stats: {
            duration: '2 months',
            projects: '5 Mini Projects',
            certifications: '1',
            mentorship: 'Basic Community'
          },
          skills: [
            'Python', 'Pandas', 'NumPy', 'Data Visualization',
            'Statistics', 'Probability', 'Machine Learning',
            'SQL', 'Data Manipulation', 'Feature Engineering'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        },
        {
          id: 3,
          name: 'Elite (Career Track)',
          price: '13,999',
          originalPrice: '20,000',
          description: 'Complete job-ready program with interview prep',
          features: [
            'All 25 Chapters (60 Hours)',
            '5 Mini + 3 Capstone Projects',
            '500+ Practice Questions',
            'Premium Community Access',
            'Soft Skills Training',
            'Interview Prep (100+ Questions)'
          ],
          stats: {
            duration: '3 months',
            projects: '8 Mini + 3 Capstone Projects',
            certifications: 'Certificate will be provided',
            mentorship: 'Premium Community'
          },
          skills: [
            'Python', 'Pandas', 'NumPy', 'Data Visualization',
            'Statistics', 'Probability', 'Machine Learning',
            'Deep Learning', 'SQL', 'Big Data', 'Spark',
             'Cloud Technologies',
            'Neural Networks', 'NLP', 'Computer Vision',
            'Recommendation Systems', 'ETL', 'AWS'
          ],
          color: 'from-orange-500 to-red-500',
          popular: true
        }
      ]
    }
  };

  const currentTrack = tracks[selectedTrack];
  const activeTier = currentTrack.tiers.find(tier => tier.id === hoveredCard) || currentTrack.tiers[0];
  const currentTrackKey = selectedTrack; // ✅ "ai" or "ds"


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-400 py-8 md:py-16 px-3 md:px-4">
      <div className="max-w-[1600px] mx-auto px-2 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 px-2">
            Choose our best  Industry aligned courses 
          </h1>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8 px-2">
            Invest in your future with our comprehensive courses
          </p>

          {/* Track Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-2">
            <button
              onClick={() => setSelectedTrack('ai')}
              className={`px-4 md:px-8 py-3 md:py-4 cursor-pointer rounded-xl font-semibold transition-all duration-300 ${
                selectedTrack === 'ai'
                  ? 'bg-white text-skyblue shadow-2xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <div className="text-base md:text-lg">Modern AI</div>
              <div className="text-xs md:text-sm opacity-80">Master cutting-edge AI technologies</div>
            </button>
            <button
              onClick={() => setSelectedTrack('ds')}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-xl cursor-pointer font-semibold transition-all duration-300 ${
                selectedTrack === 'ds'
                  ? 'bg-white text-800 shadow-2xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <div className="text-base md:text-lg">Data Science with ML</div>
              <div className="text-xs md:text-sm opacity-80">Beginner to job-ready data scientist</div>
            </button>
          </div>
        </div>

        {/* Main Grid Layout - Cards on Left, Resume on Right */}
        <div className="grid lg:grid-cols-7 gap-6 md:gap-10">
          {/* Left Side - All 3 Pricing Cards (5 columns on desktop, full width on mobile) */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentTrack.tiers.map((tier) => (
              <div
                key={tier.id}
                className="relative"
                onMouseEnter={() => setHoveredCard(tier.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main Pricing Card */}
                <div
                  className={`relative bg-white/95 text-gray-900 rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 cursor-pointer ${
                    hoveredCard === tier.id
                      ? 'border-white/80 md:scale-105 shadow-2xl'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-800 text-xs md:text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${tier.color}`}>
                        ₹{tier.price}
                      </span>
                      {tier.originalPrice && (
                        <span className="text-base md:text-lg text-gray-400 line-through">
                          ₹{tier.originalPrice}
                        </span>
                      )}
                    </div>
                    {tier.originalPrice && (
                      <div className="mt-2">
                        <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs font-semibold">
                          Save ₹{(Number(tier.originalPrice.replace(/,/g,'')) - Number(tier.price.replace(/,/g,'')))} ({(((Number(tier.originalPrice.replace(/,/g,'')) - Number(tier.price.replace(/,/g,''))) / Number(tier.originalPrice.replace(/,/g,''))) * 100).toFixed(0)}%)
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={feature} className="flex items-start">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      router.push(currentTrackKey === "ds" ? "/courses/data-science" : "/courses/modern-ai")
                    }
                    className="w-full py-2.5 md:py-3 rounded-lg cursor-pointer font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-lg hover:scale-105 text-sm md:text-base"
                  >
                    Enroll Now
                  </button>

                  {/* Course Stats - Below button */}
                  <div className={`mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 transition-opacity duration-300 ${
                    hoveredCard === tier.id ? 'opacity-100' : 'opacity-80'
                  }`}>
                    <h4 className="text-gray-800 font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                      Course Stats
                    </h4>
                    <div className="space-y-1.5 md:space-y-2">
                      {Object.entries(tier.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center text-xs">
                          <span className="text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-gray-800 font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Resume Preview (Sticky) - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-20">
              <div 
                className={`bg-white/95 border-2 rounded-xl p-6 shadow-2xl transition-all duration-500 ${
                  hoveredCard ? 'border-blue-400 scale-105' : 'border-gray-200'
                }`}
                style={{
                  boxShadow: hoveredCard ? '0 20px 60px rgba(59,130,246,0.12)' : '0 10px 30px rgba(2,6,23,0.08)',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-black font-semibold text-lg">
                    Your Resume
                  </h4>
                  {hoveredCard && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white animate-pulse`}>
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
                        <span className={`text-xs font-bold px-3 py-1 rounded bg-gradient-to-r from-blue-600 to-teal-500 text-white`}>
                          +{activeTier.skills.length}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {activeTier.skills.slice(0, 12).map((skill, index) => (
                        <span
                          key={skill}
                          className={`text-xs bg-gradient-to-r from-blue-600 to-teal-500 text-white px-3 py-1.5 rounded-md font-medium shadow-sm transform hover:scale-110 transition-transform duration-200`}
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
                      <div className="text-md font-bold text-gray-700">{activeTier.stats.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="text-md font-bold text-gray-700">{activeTier.stats.certifications}</div>
                      <div className="text-xs text-gray-500">Certificates</div>
                    </div>
                    <div>
                      <div className="text-md font-bold text-gray-700">{activeTier.skills.length}</div>
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