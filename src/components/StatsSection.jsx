import React from 'react';
import { TrendingUp, Users, Target, Rocket } from 'lucide-react';
import TiltCard from './3d/TiltCard';

const STATS = [
  { icon: TrendingUp, value: '$15M+', label: 'Revenue Generated', sub: 'Across client portfolios' },
  { icon: Target, value: '10.4x', label: 'Average ROAS', sub: 'In performance marketing' },
  { icon: Users, value: '99.4%', label: 'Client Retention', sub: 'Long-term partnership' },
  { icon: Rocket, value: '250+', label: 'Brands Scaled', sub: 'Global reach & impact' },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#090912] to-[#07070b]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <TiltCard key={idx} className="rounded-3xl glass-card border border-darbar-gold/20 p-6 sm:p-8 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-darbar-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-darbar-gold" />
                </div>
                <span className="font-cinzel font-black text-3xl sm:text-5xl text-white mb-2 text-gold-gradient">
                  {stat.value}
                </span>
                <span className="font-bold text-sm text-slate-200 uppercase tracking-wide mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400">
                  {stat.sub}
                </span>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
