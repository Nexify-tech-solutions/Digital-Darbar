import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, Volume2, VolumeX, Menu, X, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Navbar({ onNotifyClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    // Web Audio ambient frequency toggle
    if (!soundEnabled) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(528, audioCtx.currentTime); // 528Hz Solfeggio frequency
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.5);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl shadow-black/80 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-darbar-gold to-darbar-crimson p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#09090e] rounded-[11px] flex items-center justify-center">
                <Crown className="w-5 h-5 text-darbar-gold group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -inset-1 bg-darbar-gold/20 rounded-xl blur-sm group-hover:bg-darbar-gold/40 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-lg sm:text-xl tracking-wider text-white flex items-center gap-1.5">
                DIGITAL <span className="text-gold-gradient">DARBAR</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-medium">
                Royal Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-sm font-medium text-slate-300 hover:text-darbar-gold transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#countdown"
              className="text-sm font-medium text-slate-300 hover:text-darbar-gold transition-colors duration-200"
            >
              Countdown
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-darbar-gold transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#pillars"
              className="text-sm font-medium text-slate-300 hover:text-darbar-gold transition-colors duration-200"
            >
              The Standard
            </a>
            <a
              href="#connect"
              className="text-sm font-medium text-slate-300 hover:text-darbar-gold transition-colors duration-200"
            >
              Connect
            </a>
          </nav>

          {/* Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute Royal Ambient" : "Enable Royal Ambient Frequency"}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-darbar-gold hover:border-darbar-gold/40 transition-all"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-darbar-gold" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Launching Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-darbar-gold/30 bg-darbar-gold/5 text-xs font-semibold text-darbar-gold">
              <span className="w-2 h-2 rounded-full bg-darbar-gold animate-ping" />
              <span>LAUNCHING SOON</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onNotifyClick}
              className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium tracking-wide text-black transition duration-300 ease-out rounded-xl shadow-xl group bg-gold-gradient hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative font-bold text-xs uppercase flex items-center gap-2">
                VIP Access <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/10 py-6 px-6 flex flex-col gap-5 shadow-2xl animate-fadeIn">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 text-lg font-medium hover:text-darbar-gold"
          >
            Home
          </a>
          <a
            href="#countdown"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 text-lg font-medium hover:text-darbar-gold"
          >
            Countdown
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 text-lg font-medium hover:text-darbar-gold"
          >
            Services
          </a>
          <a
            href="#pillars"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 text-lg font-medium hover:text-darbar-gold"
          >
            The Standard
          </a>
          <a
            href="#connect"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-200 text-lg font-medium hover:text-darbar-gold"
          >
            Connect
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNotifyClick();
              }}
              className="w-full py-3 rounded-xl bg-gold-gradient text-black font-bold text-center text-sm uppercase tracking-wider shadow-lg"
            >
              Get Early VIP Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
