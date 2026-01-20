import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CursorEffect } from './components/CursorEffect';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-900 text-slate-200 selection:bg-pink-500/30">
      <CursorEffect />
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        
        {/* Simple Footer for completeness */}
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-gray-500">
                    © 2024 OurPokémon Server. Not affiliated with Mojang or Nintendo.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><MessageCircle size={20} /></a>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;