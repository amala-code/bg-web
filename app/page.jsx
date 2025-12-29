'use client';

import HorizontalScrollSection from './components/HorizontalScroll';
import TestimonialsSection from './components/TestimonialSection';
import ScrollAnimation from './components/LearningPath';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Solutions from './components/Solution';
import ScrollTextFill from './components/Message';
import Community from './components/Community';
import CompaniesScroll from './components/CompaniesScroll';
import PricingComponent from './components/PricingSection';
import BlogsSection from './components/BlogsSection';

export default function TechLearnLanding() {
  const cardsData = [
    {
      number: "12",
      title: "Hustle is Everything",
      author: "Norah Jones, 26",
      role: "Entrepreneur",
      buttonText: "Listen",
      accentColor: "#e91e63",
      smallImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&q=80"
    },
    {
      number: "13",
      title: "Rhythms vs. Routine",
      author: "Sarah Jones, 24",
      role: "Photographer",
      buttonText: "Listen",
      accentColor: "#00bcd4",
      smallImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop&q=80"
    },
    {
      number: "14",
      title: "Build Your Legacy",
      author: "Mike Chen, 32",
      role: "Tech Founder",
      buttonText: "Listen",
      accentColor: "#ff5722",
      smallImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&q=80"
    },
    {
      number: "15",
      title: "Creative Mindset",
      author: "Emma Wilson, 28",
      role: "Designer",
      buttonText: "Listen",
      accentColor: "#9c27b0",
      smallImage: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=400&h=400&fit=crop&q=80"
    },
    {
      number: "16",
      title: "Digital Nomad Life",
      author: "Alex Rivera, 30",
      role: "Writer",
      buttonText: "Listen",
      accentColor: "#4caf50",
      smallImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=400&fit=crop&q=80"
    },
    {
      number: "17",
      title: "Mindful Movement",
      author: "Lisa Park, 29",
      role: "Wellness Coach",
      buttonText: "Listen",
      accentColor: "#ff9800",
      smallImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CompaniesScroll />
      <ScrollTextFill/>
      <HorizontalScrollSection cards={cardsData} />
      <TestimonialsSection />
      <PricingComponent/>
      <BlogsSection/>
      <Community/>
      <Solutions />
      {/* <AboutSection /> */}
      {/* <FeaturesSection /> */}
      <Footer />
    </div>
  );
}
