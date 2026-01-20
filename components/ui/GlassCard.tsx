import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" } : {}}
      transition={{ duration: 0.3 }}
      className={`
        backdrop-blur-md 
        bg-white/10 
        dark:bg-black/20 
        border 
        border-white/20 
        dark:border-white/10 
        shadow-xl 
        rounded-2xl 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};