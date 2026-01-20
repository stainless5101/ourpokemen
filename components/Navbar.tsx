import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Github, Menu, Grid, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-black/40 backdrop-blur-lg border-white/10 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 items-center gap-4">
        
        {/* Left: Logo */}
        <div className="col-span-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-red-500/20">
             <img src="/Gemini_Generated_Image_w8esm0w8esm0w8es.png" alt="OurPokémon Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            OurPokémon
          </span>
        </div>

        {/* Center: Search */}
        <div className="col-span-6 flex justify-center">
          <div className={`relative w-full max-w-md transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-80'}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-white/50" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/30 sm:text-sm transition-colors backdrop-blur-sm"
              placeholder="Search wiki, items, or players..."
            />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <kbd className="hidden sm:inline-block border border-white/20 rounded px-1.5 text-[10px] font-mono text-white/50">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="col-span-3 flex items-center justify-end gap-3 sm:gap-4">
          
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-white/80">
            <a href="#" className="hover:text-white transition-colors">首页</a>
            <a href="#" className="hover:text-white transition-colors">快速开始</a>
          </div>

          <div className="h-6 w-px bg-white/20 hidden md:block"></div>

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white hidden sm:block">
            <Github size={18} />
          </a>

          <div className="relative group">
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10"
            >
                {mobileMenuOpen ? <ExternalLink size={18} /> : <Grid size={18} />}
            </button>
            
            {/* Dropdown Menu下拉菜单 */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-4 w-56 rounded-xl bg-stone-900/90 backdrop-blur-xl border border-white/10 shadow-2xl p-2 z-[60]"
                    >
                        <div className="flex flex-col gap-1">
                            {['地图', '商店', 'QQ群', 'Discord'].map((item) => (
                                <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};