import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import TiltCard from './3d/TiltCard';

export default function Countdown() {
  // Set launch target 30 days into future from current date
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 14,
    minutes: 45,
    seconds: 22,
  });

  useEffect(() => {
    // Target date set to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section id="countdown" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a12]/80 border-y border-white/5">
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
          <Calendar className="w-3.5 h-3.5 text-darbar-gold" /> Mark Your Calendar
        </div>
        
        <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-white mb-4">
          Countdown To <span className="text-gold-gradient">Grand Launch</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-16">
          We are putting the final royal touches on our digital growth engine. The wait is almost over.
        </p>

        {/* 3D Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          
          {/* Days */}
          <TiltCard className="rounded-3xl glass-card border border-darbar-gold/20 p-6 sm:p-8 flex flex-col items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-darbar-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <span className="font-cinzel font-black text-5xl sm:text-7xl text-white tracking-wider mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-darbar-gold">Days</span>
          </TiltCard>

          {/* Hours */}
          <TiltCard className="rounded-3xl glass-card border border-darbar-gold/20 p-6 sm:p-8 flex flex-col items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-darbar-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <span className="font-cinzel font-black text-5xl sm:text-7xl text-white tracking-wider mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-darbar-gold">Hours</span>
          </TiltCard>

          {/* Minutes */}
          <TiltCard className="rounded-3xl glass-card border border-darbar-gold/20 p-6 sm:p-8 flex flex-col items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-darbar-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <span className="font-cinzel font-black text-5xl sm:text-7xl text-white tracking-wider mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-darbar-gold">Minutes</span>
          </TiltCard>

          {/* Seconds */}
          <TiltCard className="rounded-3xl glass-card border border-darbar-gold/20 p-6 sm:p-8 flex flex-col items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-darbar-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <span className="font-cinzel font-black text-5xl sm:text-7xl text-amber-400 tracking-wider mb-2 drop-shadow-[0_0_20px_rgba(255,200,0,0.5)]">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-darbar-gold">Seconds</span>
          </TiltCard>

        </div>

        <div className="mt-12 inline-flex items-center gap-2 text-xs text-slate-400">
          <Clock className="w-4 h-4 text-darbar-gold" /> Official Launch Date: September 2026
        </div>
      </div>
    </section>
  );
}
