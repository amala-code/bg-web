# 💻 Code Examples & Customization Guide

## Quick Customization Guide

### 1. Add a New Testimonial

Edit `app/components/TestimonialSection.jsx` and add to the `testimonials` array:

```jsx
{
  id: 9,
  name: "Jane Doe",
  role: "Frontend Developer",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  quote: "This platform completely transformed my learning experience!",
  type: "medium" // Can be: small-left, small-right, stars, portrait, medium, featured
}
```

---

### 2. Change Scroll Animation Text

Edit `app/components/LearningPath.tsx` around line 44-52:

```tsx
{/* Change this text */}
<text
  x="50%"
  y="50%"
  dominantBaseline="middle"
  textAnchor="middle"
  className="text-6xl md:text-7xl font-bold"
  fill="none"
  stroke="url(#textGradient)"
  strokeWidth="2"
  letterSpacing="0.05em"
>
  Your Custom Text Here
</text>
```

---

### 3. Customize Colors

#### Scroll Animation Gradient:
```tsx
<linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stopColor="#60a5fa" />      {/* Blue */}
  <stop offset="50%" stopColor="#a78bfa" />     {/* Purple */}
  <stop offset="100%" stopColor="#06b6d4" />    {/* Cyan */}
</linearGradient>
```

#### Testimonial Background:
```jsx
{/* In TestimonialSection.jsx */}
<section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
  {/* Change from-gray-50, via-white, to-gray-100 */}
</section>
```

---

### 4. Modify Card Styles

#### Featured Card Dark Background:
```jsx
<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
  {/* Change from-gray-800 and to-gray-900 to your colors */}
</div>
```

#### Card Shadows:
```jsx
className="shadow-lg hover:shadow-xl"
{/* Change shadow-lg to shadow-md, shadow-xl, shadow-2xl */}
```

---

### 5. Adjust Animation Speed

#### Scroll Animation Speed:
```tsx
gsap.to(path, {
  strokeDashoffset: 0,
  duration: 1,  {/* Change duration (1 = 1 second) */}
  ease: "none",
  scrollTrigger: {
    scrub: 1.5,  {/* Change scrub value: higher = slower */}
  },
});
```

#### Card Hover Transition:
```jsx
className="transition-all duration-300"
{/* Change duration-300 to duration-200, duration-500, etc. */}
```

---

### 6. Change Background Decorative Circles

```jsx
{/* In TestimonialSection.jsx */}
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
{/* Change:
  - w-96 h-96: Size of circle
  - bg-blue-100: Color
  - blur-3xl: Blur amount
  - opacity-20: Transparency (0-100)
  - top-0 right-0: Position
*/}
```

---

### 7. Update Card Layout

Change grid columns in `TestimonialSection.jsx`:

```jsx
{/* Current: 3 columns on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Change to 4 columns: */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{/* Change gap: */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
{/* gap-8 can be gap-4, gap-6, gap-10, gap-12, etc. */}
```

---

## Complete Component Examples

### Example: Add a 5-Star Testimonial

```jsx
// Add to testimonials array
{
  id: 10,
  name: "Michael Chen",
  role: "Data Scientist",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  quote: "Excellent learning experience!",
  stars: 5,
  type: "stars"
}
```

---

### Example: Featured Testimonial

```jsx
// For a testimonial to appear as the large featured card
{
  id: 11,
  name: "Alexandra Smith",
  role: "Executive Director",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  quote: "A game-changer for professional development. The platform is intuitive, comprehensive, and truly transforms how you approach learning.",
  type: "featured"
}
```

---

### Example: Portrait Style Testimonial

```jsx
{
  id: 12,
  name: "David Thompson",
  role: "Creative Director",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  quote: "Absolutely loved the curriculum structure!",
  type: "portrait"
}
```

---

## Advanced Customizations

### 1. Add Click Handler to CTA Button

```jsx
{/* In TestimonialSection.jsx - Find the button */}
<button 
  onClick={() => {
    // Add your logic here
    console.log("Button clicked!");
    // Example: navigate('/signup')
  }}
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
>
  Join Our Community
</button>
```

---

### 2. Make Testimonials Dynamic from API

```jsx


import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch testimonials from your API
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading testimonials...</div>;
  }

  // Rest of component code...
};

export default TestimonialsSection;
```

---

### 3. Add Filtering by Category

```jsx
const [activeFilter, setActiveFilter] = useState('all');

const filteredTestimonials = testimonials.filter(t => {
  if (activeFilter === 'all') return true;
  return t.category === activeFilter;
});

// Add filter buttons
<div className="flex gap-3 justify-center mb-8">
  <button onClick={() => setActiveFilter('all')} className="px-4 py-2 rounded-lg bg-blue-600 text-white">All</button>
  <button onClick={() => setActiveFilter('developer')} className="px-4 py-2 rounded-lg bg-gray-300">Developers</button>
  <button onClick={() => setActiveFilter('designer')} className="px-4 py-2 rounded-lg bg-gray-300">Designers</button>
</div>
```

---

### 4. Add Animation on Scroll into View

```jsx
import { useInView } from 'react-intersection-observer';

const TestimonialCard = ({ testimonial }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Card content */}
    </div>
  );
};
```

---

## Environment Variables (if needed)

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_TESTIMONIALS_ENDPOINT=/api/testimonials
```

---

## Testing Changes

After making changes, test locally:

```bash
# Clear build cache
rm -rf .next

# Run dev server
npm run dev

# In another terminal, test the build
npm run build

# Check for any errors
npm run lint
```

---

## Performance Tips

1. **Optimize Images**:
   - Use Next.js Image component for better optimization
   - Compress images before uploading
   - Use WebP format when possible

2. **Lazy Load Cards**:
   ```jsx
   import dynamic from 'next/dynamic';
   const TestimonialCard = dynamic(() => import('./TestimonialCard'), {
     loading: () => <div>Loading...</div>
   });
   ```

3. **Memoize Components**:
   ```jsx
   const MemoizedCard = React.memo(TestimonialCard);
   ```

---

## Browser DevTools Tips

1. **Check Animation Performance**:
   - Open DevTools → Performance tab
   - Record scroll through testimonial section
   - Look for 60fps performance

2. **Debug GSAP Animations**:
   ```javascript
   // In console
   gsap.globalTimeline.pause(); // Pause all animations
   gsap.globalTimeline.play();  // Resume
   ```

3. **Check Responsive Design**:
   - Toggle device toolbar (F12)
   - Test at 375px, 768px, 1024px, 1440px widths

---

## Troubleshooting

### Issue: Text animation not showing
**Solution**: Ensure GSAP and ScrollTrigger are installed:
```bash
npm install gsap @gsap/react
```

### Issue: Cards not aligning properly
**Solution**: Check Tailwind CSS is compiled. Run:
```bash
npm run dev  # This auto-compiles Tailwind
```

### Issue: Images not loading
**Solution**: 
- Check image URLs are valid (test in browser)
- Use absolute URLs instead of relative paths
- Ensure images are CORS-enabled

---

## Additional Resources

- GSAP Docs: https://gsap.com/docs/
- Tailwind CSS: https://tailwindcss.com/docs
- Next.js: https://nextjs.org/docs
- React Intersection Observer: https://github.com/thebuilder/react-intersection-observer

---

**Happy Customizing! 🚀**
