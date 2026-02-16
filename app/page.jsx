

import HorizontalScrollSection from './components/HorizontalScroll';
import TestimonialsSection from './components/TestimonialSection';
import ScrollAnimation from './components/LearningPath';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer.tsx';
import Solutions from './components/Solution';
import ScrollTextFill from './components/Message';
import Community from './components/Community';
import CompaniesScroll from './components/CompaniesScroll';
import PricingComponent from './components/PricingSection';
import BlogsSection from './components/BlogsSection';
import VerticalScrollSection from './components/Verticalsection';
import FloatingChatbot from './FloatingChatbot.jsx';

export default function BridgegapLanding() {


  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <StatsSection />
      {/* <CompaniesScroll /> */}
      <ScrollTextFill/>
      <VerticalScrollSection/>
      <TestimonialsSection />
      <PricingComponent/>
      <Community/>
      <FloatingChatbot/>
      <Footer />
    </div>
  );
}
