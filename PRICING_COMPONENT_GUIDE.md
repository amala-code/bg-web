# Pricing Component Integration Guide

## Overview
A beautiful 3-tier pricing component with hover animations, stats panels, and dynamic resume previews.

## Features
- ✅ Three pricing tiers: Starter (5k), Professional (9k), Master (15k)
- ✅ Hover stats panel showing lessons, projects, certifications, mentorship
- ✅ Dynamic resume preview showing skills specific to each tier
- ✅ Popping/scaling hover animations
- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Progressive skill loading (higher tiers have more skills)

## Files Created
1. `/app/components/PricingSection.jsx` - Main React component
2. `/app/components/PricingSection.css` - Styling and animations

## How to Use

### Step 1: Import the component in your page
Add this import to `/app/page.jsx`:

```jsx
import PricingSection from './components/PricingSection';
```

### Step 2: Add the component to your page
Place it where you want the pricing section to appear:

```jsx
<PricingSection />
```

### Step 3: Example integration in page.jsx
```jsx
'use client';

import HorizontalScrollSection from './components/HorizontalScroll';
import TestimonialsSection from './components/TestimonialSection';
import ScrollAnimation from './components/LearningPath';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';  // Add this
import Footer from './components/Footer';
import Solutions from './components/Solution';
import ScrollTextFill from './components/Message';
import Community from './components/Community';
import CompaniesScroll from './components/CompaniesScroll';

export default function BridgegapLanding() {
  // ... existing code ...
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <Solutions />
      <PricingSection />  {/* Add pricing section here */}
      <HorizontalScrollSection />
      <TestimonialsSection />
      <Community />
      <CompaniesScroll />
      <ScrollAnimation />
      <ScrollTextFill />
      <Footer />
    </>
  );
}
```

## Component Customization

### Modify Pricing Plans
Edit the `pricingPlans` array in `PricingSection.jsx`:

```jsx
const pricingPlans = [
  {
    id: 1,
    title: 'Your Plan Name',
    price: '5k',
    color: 'from-blue-400 to-blue-600',  // Tailwind gradient
    icon: '🎯',  // Any emoji
    description: 'Plan description',
    stats: {
      lessons: '12',
      projects: '3',
      certifications: '1',
      mentorship: '2 hrs/week',
    },
    skills: [
      'Skill 1',
      'Skill 2',
      // ... add more
    ],
  },
  // ... more plans
];
```

### Change Colors
The component uses Tailwind CSS gradients:
- From colors: `from-blue-400`, `from-purple-400`, `from-orange-400`
- To colors: `to-blue-600`, `to-purple-600`, `to-red-600`

Available Tailwind gradients:
- Blue: `from-blue-400 to-blue-600`
- Purple: `from-purple-400 to-purple-600`
- Green: `from-green-400 to-green-600`
- Red: `from-red-400 to-red-600`
- Pink: `from-pink-400 to-pink-600`
- Orange: `from-orange-400 to-orange-600`

### Adjust Animation Speed
In `PricingSection.css`, modify transition durations:

```css
/* Currently 0.3-0.4s, increase for slower animations */
.stats-panel {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Responsive Behavior

- **Desktop (1024px+)**: Stats and resume panels appear on the side on hover
- **Tablet (768px-1024px)**: Panels appear below the card on hover
- **Mobile (<768px)**: All panels expand full-width on hover

## Animations Included

1. **Card Hover**: Scales up and pops with shadow
2. **Stats Panel**: Slides in from the right with fade
3. **Resume Preview**: Slides in with staggered skill animations
4. **Skill Tags**: Each skill fades in sequentially
5. **Button**: Arrow moves on hover

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Dependencies
- React 18+
- Framer Motion 10+
- Next.js 14+
- Tailwind CSS 4+

## Optional Enhancements

### Add to other pages
```jsx
import PricingSection from '@/components/PricingSection';

// Use in any page or layout
<PricingSection />
```

### Connect to backend
Replace button clicks with API calls:

```jsx
const handleEnroll = async (planId) => {
  const response = await fetch('/api/enroll', {
    method: 'POST',
    body: JSON.stringify({ planId })
  });
  // Handle response
};
```

### Add comparison table
Add a new section below the cards for feature comparison.

### Add testimonials/reviews
Add star ratings and customer reviews to each plan.

## Troubleshooting

### Cards not showing on hover panels?
- Make sure Framer Motion is installed: `npm install framer-motion`
- Check CSS is being imported properly

### Colors not showing?
- Ensure Tailwind CSS is configured in your project
- Check `tailwind.config.js` includes the component directory

### Animations stuttering?
- Check `will-change` properties in CSS
- Reduce blur effects in CSS if needed
- Check for CSS conflicts

## Contact Support
For any issues or customization needs, refer to the main README.md or CUSTOMIZATION_GUIDE.md
