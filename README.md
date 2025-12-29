# TechLearn - High-Tech Landing Page

A futuristic, high-tech landing page built with Next.js 14, Framer Motion, and GSAP featuring advanced animations, 3D effects, and interactive elements.

## 🚀 Features

- **Advanced Animations**: Smooth page load animations with staggered reveals
- **3D Globe Effect**: Interactive globe with floating elements and mouse parallax
- **GSAP Integration**: Scroll-triggered animations and continuous floating effects
- **Framer Motion**: Hover states, micro-interactions, and page transitions
- **Responsive Design**: Fully responsive across all devices
- **Glassmorphism**: Modern frosted glass effects on UI elements
- **Gradient Mesh Backgrounds**: Dynamic, animated gradient orbs
- **Custom Typography**: Satoshi font for a distinctive, modern look
- **Performance Optimized**: Efficient animations with will-change properties

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **Framer Motion** - Production-ready animation library
- **GSAP** - Professional-grade animation platform with ScrollTrigger
- **React** - UI library
- **CSS-in-JS** - Scoped styling with styled-jsx

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Navigation
- Fixed navigation with blur backdrop
- Smooth slide-down animation on load
- Hover effects on links with animated underlines
- Glassmorphic buttons with glow effects

### Hero Section
- Large, bold typography with gradient text
- Animated stats badge
- Dual CTA buttons with distinct styles
- Sequential content reveals

### 3D Globe
- Central sphere with grid pattern
- Floating info cards with hover interactions
- Mouse parallax effect following cursor
- Continuous floating animation via GSAP
- Decorative card elements

### Stats Section
- Scroll-triggered entrance animations
- Vibrant gradient backgrounds
- Hover lift effects
- Glow overlays on interaction

### Background Effects
- Three animated gradient orbs
- Smooth floating animations (20s cycles)
- Subtle blur for depth
- Layered for visual hierarchy

## 🎯 Animation Details

### GSAP Animations
- **Globe Float**: Infinite Y-axis movement (3s cycle)
- **Icon Float**: Staggered X/Y movement (4s cycle, 0.5s stagger)
- **Stats Cards**: Scroll-triggered fade-in from bottom

### Framer Motion
- **Page Load**: Sequential reveals with delays
- **Hover States**: Scale, shadow, and position changes
- **Scroll Effects**: Parallax and opacity transforms
- **Mouse Tracking**: Real-time parallax on globe

## 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width container
- **Tablet**: 768px - simplified navigation
- **Mobile**: < 768px - stacked layouts, smaller typography

## 🎨 Color Palette

- **Primary Blue**: #0096ff
- **Accent Cyan**: #00d4ff
- **Accent Teal**: #00ffcc
- **Dark Base**: #0a0e27
- **Mid Dark**: #1a1f3a

## ⚡ Performance Tips

- Animations use `will-change` for GPU acceleration
- GSAP context cleanup prevents memory leaks
- Framer Motion optimized for 60fps
- CSS transforms for smooth animations
- Lazy loading ready for images

## 🔧 Customization

### Change Colors
Edit the gradient variables in the styled-jsx sections:
```css
background: linear-gradient(135deg, #0096ff 0%, #00d4ff 100%);
```

### Adjust Animation Timing
Modify GSAP and Framer Motion durations:
```javascript
transition={{ delay: 0.7, duration: 0.8 }}
```

### Font Changes
Update the font import in `globals.css` and `layout.jsx`

## 📄 File Structure

```
├── app/
│   ├── page.jsx          # Main landing page component
│   ├── layout.jsx        # Root layout with font loading
│   └── globals.css       # Global styles
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
└── README.md            # This file
```

## 🚀 Deployment

Build for production:
```bash
npm run build
npm start
```

Deploy to Vercel:
```bash
vercel
```

## 📝 License

MIT License - feel free to use for personal and commercial projects.

## 🎉 Credits

Created with modern web technologies and attention to detail for exceptional user experience.
