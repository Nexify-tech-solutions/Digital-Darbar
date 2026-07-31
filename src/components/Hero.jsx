import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, ChevronDown, Flame } from 'lucide-react';
import TiltCard from './3d/TiltCard';

export default function Hero({ onNotifyClick }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Glow Orbs in background */}
      <div className="bg-orb w-[500px] h-[500px] bg-darbar-crimson top-1/4 -left-32 animate-pulse-slow" />
      <div className="bg-orb w-[450px] h-[450px] bg-darbar-gold top-1/3 -right-32 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Launch Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-darbar-gold/30 mb-8 animate-fadeIn">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-darbar-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-darbar-gold"></span>
          </span>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-darbar-gold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen Digital Royalty
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-cinzel font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.1]">
          <span className="block text-slate-100 drop-shadow-lg">
            DIGITAL <span className="text-gold-gradient">DARBAR</span>
          </span>
          <span className="block text-2xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-wider mt-2">
            WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-darbar-gold to-amber-300 animate-pulse">COMING SOON</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-darbar-goldLight mb-4 font-light tracking-wide">
          "To Build Brands That Rule"
        </p>
        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-10">
          Your Royal Partner in Digital Growth. We craft high-impact marketing strategies, bespoke branding, performance ads, and organic dominance to elevate your business to digital royalty.
        </p>

        {/* Action Buttons & 3D Interactive Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16">
          <button
            onClick={onNotifyClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:shadow-darbar-gold/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Get VIP Early Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card border border-white/15 text-white font-bold text-sm uppercase tracking-wider hover:border-darbar-gold/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Services
          </a>
        </div>

        {/* 3D Floating Feature Preview Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <TiltCard className="p-4 rounded-2xl glass-card border border-white/10 text-left">
            <div className="text-darbar-gold font-bold text-lg flex items-center gap-2 mb-1">
              <Flame className="w-5 h-5 text-red-500" /> High ROI
            </div>
            <p className="text-xs text-slate-400">Data-driven performance campaigns tailored for growth.</p>
          </TiltCard>

          <TiltCard className="p-4 rounded-2xl glass-card border border-white/10 text-left">
            <div className="text-darbar-gold font-bold text-lg flex items-center gap-2 mb-1">
              <ShieldCheck className="w-5 h-5 text-darbar-gold" /> Bespoke
            </div>
            <p className="text-xs text-slate-400">Customized branding & identity frameworks.</p>
          </TiltCard>

          <TiltCard className="p-4 rounded-2xl glass-card border border-white/10 text-left">
            <div className="text-darbar-gold font-bold text-lg flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-purple-400" /> 3D Web & Apps
            </div>
            <p className="text-xs text-slate-400">State-of-the-art WebGL & interactive experiences.</p>
          </TiltCard>

          <TiltCard className="p-4 rounded-2xl glass-card border border-white/10 text-left">
            <div className="text-darbar-gold font-bold text-lg flex items-center gap-2 mb-1">
              <Crown className="w-5 h-5 text-amber-400" /> Royal Care
            </div>
            <p className="text-xs text-slate-400">24/7 dedicated strategic growth concierge.</p>
          </TiltCard>
        </div>

        {/* Scroll Indicator */}
        <a href="#countdown" className="mt-16 flex flex-col items-center text-slate-400 hover:text-darbar-gold transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">Scroll to Discover</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
