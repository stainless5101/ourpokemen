import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorEffect: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the cursor (32px width / 2)
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
    >
      {/* Pokeball Graphic */}
      <motion.div 
        animate={{ 
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 180 : 0
        }}
        className="w-8 h-8 rounded-full border-2 border-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)] overflow-hidden relative"
      >
        {/* Top Half (Red) */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500/80 backdrop-blur-sm"></div>
        {/* Bottom Half (White/Transparent) */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white/20 backdrop-blur-sm"></div>
        {/* Center Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-900 -translate-y-1/2"></div>
        {/* Center Button */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full border-2 border-gray-900 -translate-x-1/2 -translate-y-1/2 z-10"></div>
      </motion.div>
    </motion.div>
  );
};