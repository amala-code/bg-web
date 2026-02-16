'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Problemsection from './hr/Problemsection';
import SolutionSection from './hr/SolutionSection';
import Howitworkssection from './hr/Howitworkssection';
import Resultsection from './hr/Resultsection';
import PlatinumMembersection from './hr/PlatinumMembersection';
import FinaCTAsection from './hr/FinaCTAsection';
import FAQSection from './hr/Facsection';
import EnhancedHeroSection from './hr/enhancedher';
import HeroSplitDesign from './hr/HeroSection';
import Navbar from './Navbar';
import Footer from './Footer.tsx';
import HeroWithBackgroundImage from './hr/largeimage';
import BridgegapUniversity from './university/uni';

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl font-extrabold text-white">{value}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

export default function Universities() {
  return (
    <>
 <Navbar/>

      
      <BridgegapUniversity/>
   
    </>
  );
}
