import React, { useState } from 'react';
import { GraduationCap, TrendingUp, Award, Users, Briefcase, CheckCircle, ArrowRight, Star, Target, Rocket, Shield, BarChart3, MessageSquare, BookOpen, Code, UserCheck, Building2, Sparkles, Heart, Clock, Zap } from 'lucide-react';
import HeroWithBackgroundImage from '../hr/largeimage';
import Footer from '../Footer.tsx';

const BridgegapUniversity = () => {
  const [formData, setFormData] = useState({
    universityName: '',
    contactPerson: '',
    email: '',
    phone: '',
    studentCount: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
   
{/* <HeroWithBackgroundImage/> */}
      {/* Hero Section - Emotional Hook */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Trusted by 10+ Universities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Every Student Deserves a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Fair Chance
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your students have potential. They work hard. They dream big. 
                <span className="font-semibold text-gray-800"> But when companies reject them before they even get a chance to prove themselves</span>, 
                it breaks more than just their career prospects it breaks their confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Transform Your Placements <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => document.getElementById('results').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                >
                  See Success Stories
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 mb-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-8 h-8 text-red-500" />
                    <div>
                      <div className="text-sm text-gray-500">Student Success Rate</div>
                      <div className="text-3xl font-bold text-gray-900">53% ↑</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Average placement increase</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">HR Partners</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">1000+</div>
                    <div className="text-sm text-gray-600">Assessments questions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              We Know What Keeps You{' '}
              <span className="text-gradient">Up at Night</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              As a Training and Placement Officer, you carry the weight of thousands of futures on your shoulders
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Too Many Students, Too Few Opportunities",
                description: "You have hundreds of bright minds, but companies only want to interview the 'perfect' candidates. The rest? They don't even get a chance.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "The Skill Gap Is Getting Wider",
                description: "Your faculty tries their best, but they can't personalize learning for every student. Companies demand industry-ready talent, but who has time to bridge that gap?",
                gradient: "from-teal-500 to-emerald-500"
              },
              {
                icon: TrendingUp,
                title: "Placement Stats Define Your Success",
                description: "Every unplaced student isn't just a statistic it's a dream deferred, a family disappointed, and pressure on your institution's reputation.",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((problem, idx) => (
              <div key={idx} className="group glassmorphism p-10 rounded-3xl hover-lift relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${problem.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{problem.description}</p>
                
                <div className={`h-1 bg-gradient-to-r ${problem.gradient} rounded-full mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>

          <div className="mt-20 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 animate-gradient"></div>
            <div className="relative glassmorphism-dark p-16 text-center text-white">
              <h3 className="text-4xl font-black mb-6">You're Not Alone</h3>
              <p className="text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed font-light">
                23% of colleges that partnered with us saw their placement rates soar by{' '}
                <span className="font-bold text-yellow-300">53%</span>. 
                They didn't just improve numbers they changed lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Beautiful Layout */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Your Complete{' '}
              <span className="text-gradient">Placement Transformation</span>{' '}
              Partner
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              We don't just supplement education we transform outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-slate-900 leading-tight">
                Not Just Courses.{' '}
                <span className="text-gradient">A Complete Career Launchpad.</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Industry-Aligned Courses",
                    description: "Supplement your curriculum with courses designed by industry experts. Your students learn what companies actually need.",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: CheckCircle,
                    title: "20+ Comprehensive Assessments",
                    description: "From technical skills to aptitude tests we measure what matters. Students know exactly where they stand.",
                    color: "from-teal-500 to-emerald-500"
                  },
                  {
                    icon: Code,
                    title: "Real Open Source Contributions",
                    description: "Portfolio building that impresses. Every student gets hands-on project experience that recruiters value.",
                    color: "from-indigo-500 to-purple-500"
                  },
                  {
                    icon: Rocket,
                    title: "Advanced Topics & Specializations",
                    description: "AI, Cloud, DevOps, Data Science your students stay ahead of the curve with cutting-edge topics.",
                    color: "from-pink-500 to-rose-500"
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="group flex gap-5 glassmorphism p-6 rounded-2xl hover-lift">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphism rounded-3xl p-10 shadow-2xl hover-lift">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">Impact Metrics</h4>
              <div className="space-y-5">
                {[
                  { label: "Technical Skills", value: "95%", color: "from-blue-500 to-cyan-500" },
                  { label: "Soft Skills", value: "88%", color: "from-teal-500 to-emerald-500" },
                  { label: "Project Portfolio", value: "100%", color: "from-indigo-500 to-purple-500" },
                  { label: "Resume Quality", value: "92%", color: "from-pink-500 to-rose-500" }
                ].map((metric, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-slate-50 to-white border border-slate-200">
                    <div className="flex items-center justify-between relative z-10">
                      <span className="font-bold text-slate-800 text-lg">{metric.label}</span>
                      <span className={`text-2xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                        {metric.value} ↑
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HR Hub Section - Redesigned */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-700 animate-gradient"></div>
            <div className="relative glassmorphism-dark p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-5xl font-black text-white">
                      150+ HR Hub<br />Network
                    </h3>
                  </div>
                  
                  <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
                    This is where magic happens. Your students don't just apply to jobs they get discovered. 
                    Our HR partners actively seek candidates from Bridgegap universities.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glassmorphism-dark rounded-2xl p-8 hover-lift">
                      <div className="text-5xl font-black text-white mb-3">150+</div>
                      <div className="text-white/80 font-medium">Hiring Partners</div>
                    </div>
                    <div className="glassmorphism-dark rounded-2xl p-8 hover-lift">
                      <div className="text-5xl font-black text-yellow-300 mb-3">First</div>
                      <div className="text-white/80 font-medium">Priority Access</div>
                    </div>
                  </div>
                </div>

                <div className="glassmorphism-dark rounded-2xl p-10">
                  <h4 className="text-3xl font-bold text-white mb-8">What This Means for Your Students:</h4>
                  <div className="space-y-5">
                    {[
                      "Resume gets in front of decision-makers directly",
                      "Skip the black hole of job portals",
                      "Interview calls within weeks, not months",
                      "Higher CTCs from quality companies",
                      "Your university becomes a preferred talent pipeline"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg text-white/95 font-medium leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Universities. Real Results. Real Dreams Fulfilled.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              23% of our partner colleges increased their placement rate by 53%
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl p-12 text-white mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-3">53%</div>
                <div className="text-xl opacity-90">Average Placement Increase</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-3">23%</div>
                <div className="text-xl opacity-90">Of Colleges Achieved This</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-3">10,000+</div>
                <div className="text-xl opacity-90">Students Placed</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "St. Mary's College of Engineering",
                before: "42%",
                after: "71%",
                quote: "Our placement numbers speak for themselves. But more importantly, our students now walk into interviews with confidence.",
                role: "Training & Placement Officer"
              },
              {
                name: "Tech Valley Institute",
                before: "38%",
                after: "65%",
                quote: "Companies started calling us directly. We've become a preferred recruitment destination.",
                role: "Head of Placements"
              },
              {
                name: "Sunrise Engineering College",
                before: "35%",
                after: "58%",
                quote: "The transformation in our students' skill levels and employability is remarkable. This partnership changed everything.",
                role: "TPO & Academic Dean"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t pt-6">
                  <div className="font-bold text-gray-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 mb-4">{testimonial.role}</div>
                  <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-400">{testimonial.before}</div>
                      <div className="text-xs text-gray-500">Before</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div>
                      <div className="text-2xl font-bold text-teal-600">{testimonial.after}</div>
                      <div className="text-xs text-gray-500">After</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold University Program */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full font-semibold text-lg mb-6">
              <Award className="w-6 h-6" />
              Exclusive Opportunity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Become a Bridgegap Gold University
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elevate your institution to elite status with exclusive benefits, premium branding, and priority access to top-tier companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-20 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-300 rounded-full opacity-20 -ml-16 -mb-16"></div>
              <div className="relative">
                <Award className="w-20 h-20 text-yellow-600 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Gold University Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Premium branding on our platform and marketing materials",
                    "Featured in case studies and success stories",
                    "Priority access to top-tier hiring partners",
                    "Dedicated account manager",
                    "Exclusive industry networking events",
                    "White-label solutions available",
                    "Preferential pricing for additional services"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-4">
                      <Sparkles className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Build Your Brand. Attract Top Companies. Transform Reputation.
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Limited slots available. Gold Universities don't just get better placement rates they become magnets for 
                top companies and premium students. Your brand becomes synonymous with excellence.
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">What Changes When You Go Gold:</h4>
                <div className="space-y-4">
                  {[
                    { icon: Building2, text: "Companies approach YOU for campus drives" },
                    { icon: TrendingUp, text: "Higher average CTC packages" },
                    { icon: Award, text: "Recognition as an industry-preferred institution" },
                    { icon: Users, text: "Better quality student applications" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-yellow-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Apply for Gold University Status <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
   <section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
        Why Universities{" "}
        <span className="text-gradient">Trust Bridgegap</span>
      </h2>
    </div>

    {/* Reasons Grid */}
    <div className="grid md:grid-cols-4 gap-10">
      {[
        {
          icon: Shield,
          title: "Proven Track Record",
          description: "150+ universities, 10,000+ students placed",
          gradient: "from-blue-500 to-cyan-500",
        },
        {
          icon: Clock,
          title: "Quick Implementation",
          description: "Go live in weeks, not months",
          gradient: "from-teal-500 to-emerald-500",
        },
        {
          icon: Zap,
          title: "Results-Driven",
          description: "Average 53% placement increase",
          gradient: "from-indigo-500 to-purple-500",
        },
        {
          icon: UserCheck,
          title: "Dedicated Support",
          description: "Your success is our mission",
          gradient: "from-pink-500 to-rose-500",
        },
      ].map((reason, idx) => (
        <div key={idx} className="text-center group">
          
          <div
            className={`
              w-24 h-24 bg-gradient-to-br ${reason.gradient}
              rounded-3xl flex items-center justify-center
              mx-auto mb-8 shadow-2xl
              group-hover:scale-110 group-hover:rotate-6
              transition-all duration-300
            `}
          >
            <reason.icon className="w-12 h-12 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {reason.title}
          </h3>

          <p className="text-slate-600 leading-relaxed">
            {reason.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Placements?
            </h2>
            <p className="text-xl text-gray-600">
              Join 150+ universities that have revolutionized their placement outcomes
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    University Name *
                  </label>
                  <input
                    type="text"
                    name="universityName"
                    required
                    value={formData.universityName}
                    onChange={handleChange}
                  
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Enter your university name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@university.edu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Students *
                </label>
                <select
                  name="studentCount"
                  required
                  value={formData.studentCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select student count</option>
                  <option value="0-500">0 - 500 students</option>
                  <option value="500-1000">500 - 1,000 students</option>
                  <option value="1000-2000">1,000 - 2,000 students</option>
                  <option value="2000+">2,000+ students</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your placement challenges or what you'd like to achieve..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Your Enquiry Now <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-sm text-gray-500">
                Our team will reach out within 24 hours to discuss how we can help transform your placement outcomes
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Students Deserve This Opportunity
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Every day you wait is another day your students fall behind. 
            Join the universities that are already transforming lives.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          >
            Start Your Transformation Today <Rocket className="w-6 h-6" />
          </button>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default BridgegapUniversity;

