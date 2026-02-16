
import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'wave', className = '' }) {
  const variants = {
    wave: (
      <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
          </linearGradient>
        </defs>
        <motion.path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="url(#waveGradient)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    ),
    
    dots: (
      <div className="flex justify-center items-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}
      </div>
    ),
    
    line: (
      <div className="flex items-center justify-center">
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: '200px' }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    ),
    
    geometric: (
      <div className="flex justify-center items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 border-2 border-blue-400/30 rotate-45 relative">
            <div className="absolute inset-1 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-sm" />
          </div>
        </motion.div>
      </div>
    )
  };

  return (
    <motion.div 
      className={`relative w-full ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {variants[variant]}
    </motion.div>
  );
}