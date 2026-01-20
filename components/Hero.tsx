import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, LifeBuoy, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer with Parallax-like static feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/dragonsunset.png" 
          alt="Minecraft Shader Sunset Landscape" 
          className="w-full h-full object-cover"
        />
        {/* Heavy Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-white/90 tracking-wide uppercase">Season 5 Online</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 drop-shadow-2xl">
            Our<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Pokémon</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
           若这场充满羁绊的冒险终将迎来落幕，我愿在樱花燃尽的余晖里，与你一同踏上名为宝可梦的终末之旅。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <BookOpen size={20} />
                游戏百科
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black/40 backdrop-blur-md border border-white/10 text-white font-semibold rounded-2xl hover:bg-black/60 transition-all flex items-center gap-2"
            >
              <LifeBuoy size={20} />
              鸣谢
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-900 to-transparent pointer-events-none" />
    </section>
  );
};