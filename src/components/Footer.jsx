import React from 'react';
import { Crown, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050508] text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="flex items-center gap-2 mb-3">
            <Crown className="w-6 h-6 text-darbar-gold" />
            <span className="font-cinzel font-bold text-xl text-white tracking-wider">
              DIGITAL <span className="text-gold-gradient">DARBAR</span>
            </span>
          </a>
          <p className="text-xs text-slate-500 max-w-sm">
            Crafting digital royalty, one brand at a time. High-performance marketing, luxury branding, and 3D web experiences.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
          <a href="#hero" className="hover:text-darbar-gold transition-colors">Home</a>
          <a href="#countdown" className="hover:text-darbar-gold transition-colors">Countdown</a>
          <a href="#services" className="hover:text-darbar-gold transition-colors">Services</a>
          <a href="#pillars" className="hover:text-darbar-gold transition-colors">The Standard</a>
          <a href="#connect" className="hover:text-darbar-gold transition-colors">Connect</a>
        </div>

        {/* Back to top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Digital Darbar. All rights reserved.
          </span>
          
          <button
            onClick={scrollToTop}
            title="Scroll back to top"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-darbar-gold/50 text-slate-300 hover:text-darbar-gold transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
