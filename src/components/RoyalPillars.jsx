import React from 'react';
import { Shield, Sparkles, Award, Headset, CheckCircle } from 'lucide-react';
import TiltCard from './3d/TiltCard';

const PILLARS = [
  {
    icon: Shield,
    title: 'Sovereign Strategy',
    desc: 'No cookie-cutter templates. Every campaign and brand strategy is custom-architected around your precise competitive advantage.',
    tag: 'Bespoke First'
  },
  {
    icon: Sparkles,
    title: 'Visual Royalty',
    desc: 'We craft jaw-dropping 3D visual experiences, high-end motion graphics, and luxury typography that command absolute authority.',
    tag: 'Design Excellence'
  },
  {
    icon: Award,
    title: 'Data-Driven Dominance',
    desc: 'Every marketing dollar spent is tracked down to the exact click and conversion. High-ROI performance algorithms working for you.',
    tag: 'ROI Focused'
  },
  {
    icon: Headset,
    title: '24/7 Royal Concierge',
    desc: 'Direct, VIP access to senior growth strategists. Fast turnarounds, transparent reporting, and relentless dedication to your victory.',
    tag: 'Dedicated Support'
  }
];

export default function RoyalPillars() {
  return (
    <section id="pillars" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090912] border-t border-white/5">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-darbar-gold uppercase tracking-widest mb-6">
              <CheckCircle className="w-3.5 h-3.5" /> The Royal Standard
            </div>

            <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-white mb-6 leading-tight">
              Why Brands Choose <br />
              <span className="text-gold-gradient">Digital Darbar</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              In a sea of average digital agencies, Digital Darbar stands as a beacon of luxury, speed, and uncompromising performance. We don't just build campaigns; we build digital empires.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-darbar-gold/20 flex items-center justify-center text-darbar-gold font-bold text-xs">
                  ✓
                </div>
                <span className="text-slate-200 font-semibold text-sm">Enterprise Grade WebGL & 3D Interactive Interfaces</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-darbar-gold/20 flex items-center justify-center text-darbar-gold font-bold text-xs">
                  ✓
                </div>
                <span className="text-slate-200 font-semibold text-sm">Strict ROI Attribution & Transparent Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-darbar-gold/20 flex items-center justify-center text-darbar-gold font-bold text-xs">
                  ✓
                </div>
                <span className="text-slate-200 font-semibold text-sm">Dedicated Senior Growth Partner For Every Client</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 3D Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <TiltCard key={idx} className="rounded-3xl glass-card border border-white/10 p-8 flex flex-col justify-between hover:border-darbar-gold/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-darbar-gold/10 border border-darbar-gold/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-darbar-gold" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-white/5 text-slate-400">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="font-cinzel font-bold text-xl text-white mb-3">{pillar.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
