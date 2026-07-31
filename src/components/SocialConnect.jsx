import React from 'react';
import { Instagram, Linkedin, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';
import TiltCard from './3d/TiltCard';

const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@digitaldarbar',
    url: 'https://instagram.com/digitaldarbar',
    icon: Instagram,
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'hover:border-pink-500/50'
  },
  {
    name: 'LinkedIn',
    handle: 'Digital Darbar',
    url: 'https://linkedin.com/company/digitaldarbar',
    icon: Linkedin,
    gradient: 'from-blue-600/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/50'
  },
  {
    name: 'Twitter / X',
    handle: '@digitaldarbar',
    url: 'https://twitter.com/digitaldarbar',
    icon: Twitter,
    gradient: 'from-slate-700/20 to-slate-400/20',
    borderColor: 'hover:border-slate-400/50'
  },
  {
    name: 'WhatsApp VIP',
    handle: 'Direct Support',
    url: 'https://wa.me/?text=Hello%20Digital%20Darbar',
    icon: MessageCircle,
    gradient: 'from-emerald-600/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/50'
  }
];

export default function SocialConnect() {
  return (
    <section id="connect" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090912] border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-white mb-4">
          Connect With <span className="text-gold-gradient">Digital Royalty</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-16">
          Follow our official channels for behind-the-scenes strategy breakdowns, growth masterclasses, and launch updates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIALS.map((soc, idx) => {
            const Icon = soc.icon;
            return (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <TiltCard className={`rounded-3xl glass-card border border-white/10 ${soc.borderColor} p-6 flex flex-col items-center text-center transition-all duration-300`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${soc.gradient} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white group-hover:text-darbar-gold transition-colors" />
                  </div>
                  <h3 className="font-cinzel font-bold text-lg text-white mb-1">{soc.name}</h3>
                  <span className="text-xs text-slate-400 mb-4">{soc.handle}</span>
                  
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-darbar-gold group-hover:translate-x-0.5 transition-transform">
                    Connect <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </TiltCard>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
