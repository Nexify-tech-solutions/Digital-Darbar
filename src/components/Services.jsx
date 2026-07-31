import React, { useState } from 'react';
import {
  Share2,
  TrendingUp,
  Palette,
  Search,
  Box,
  Zap,
  ArrowRight,
  CheckCircle2,
  X,
  Crown
} from 'lucide-react';
import TiltCard from './3d/TiltCard';

const SERVICES = [
  {
    id: 'smm',
    title: 'Social Media Marketing',
    icon: Share2,
    shortDesc: 'Dominate every feed with viral reel strategies, high-concept visuals, and brand community building.',
    deliverables: [
      'Viral Content Production & Reel Editing',
      'Platform Management (Instagram, LinkedIn, X, TikTok)',
      'Influencer & Creator Collaborations',
      'Community & Reputation Architecture'
    ],
    accent: 'from-pink-500/20 to-purple-600/20',
    borderColor: 'border-pink-500/30'
  },
  {
    id: 'perf',
    title: 'Performance Marketing',
    icon: TrendingUp,
    shortDesc: 'Precision ROI ad campaigns optimized across Google Search, Meta Ads, and YouTube for maximum scale.',
    deliverables: [
      'Multi-Channel Paid Acquisition (Meta, Google, LinkedIn)',
      'A/B Creative & Copy Testing Lab',
      'Real-Time Attribution & ROAS Dashboard',
      'Retargeting & LTV Amplification'
    ],
    accent: 'from-amber-500/20 to-red-600/20',
    borderColor: 'border-amber-500/30'
  },
  {
    id: 'brand',
    title: 'Branding & Design',
    icon: Palette,
    shortDesc: 'Luxury visual identities, bespoke logo marks, typography guidelines, and 3D brand asset design.',
    deliverables: [
      'Luxury Brand Positioning & Storytelling',
      'Visual Identity System & Logo Design',
      'Packaging & Print Collateral Systems',
      'Interactive Brand Design Guidelines'
    ],
    accent: 'from-purple-500/20 to-blue-600/20',
    borderColor: 'border-purple-500/30'
  },
  {
    id: 'seo',
    title: 'SEO & Organic Growth',
    icon: Search,
    shortDesc: 'Rank #1 on Google and voice search with technical SEO audits, authority backlinking, and content engines.',
    deliverables: [
      'Technical Site Audits & Speed Optimization',
      'High-Intent Keyword & Topic Clustering',
      'White-Hat High Authority Backlink Outreach',
      'AI & Voice Search Index Optimization'
    ],
    accent: 'from-emerald-500/20 to-teal-600/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    id: 'web3d',
    title: '3D Web & App Development',
    icon: Box,
    shortDesc: 'High-speed React, Vite, and Three.js interactive web applications engineered to convert visitors into loyal clients.',
    deliverables: [
      'Custom React & Vite Web Application Build',
      'Interactive 3D Three.js Visual Features',
      'Ultra-Fast Loading & Mobile Optimization',
      'Seamless API Integrations & Analytics'
    ],
    accent: 'from-cyan-500/20 to-blue-600/20',
    borderColor: 'border-cyan-500/30'
  },
  {
    id: 'strategy',
    title: 'Royal Growth Strategy',
    icon: Zap,
    shortDesc: 'End-to-end sales funnel architecture, conversion rate optimization (CRO), and enterprise scaling roadmap.',
    deliverables: [
      'Full-Funnel CRO & User Journey Mapping',
      'High-Converting Landing Page Copywriting',
      'CRM Automation & Email Nurture Flows',
      'Quarterly Scale & Expansion Audits'
    ],
    accent: 'from-yellow-500/20 to-amber-600/20',
    borderColor: 'border-darbar-gold/40'
  }
];

export default function Services({ onNotifyClick }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07070b]">
      
      {/* Background radial glow */}
      <div className="bg-orb w-[600px] h-[600px] bg-darbar-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-darbar-gold/10 border border-darbar-gold/30 text-xs font-semibold text-darbar-gold uppercase tracking-widest mb-4">
            <Crown className="w-3.5 h-3.5" /> Royal Offerings
          </div>
          
          <h2 className="font-cinzel font-bold text-3xl sm:text-5xl text-white mb-6">
            Services Crafted For <span className="text-gold-gradient">Digital Dominance</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't offer generic templates. We engineer bespoke, high-performance digital engines tailored to crown your brand market leader.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.id}
                className={`rounded-3xl glass-card border ${service.borderColor} p-8 flex flex-col justify-between group cursor-pointer glass-card-hover`}
              >
                <div>
                  {/* Icon Header */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-darbar-gold" />
                  </div>

                  <h3 className="font-cinzel font-bold text-xl text-white mb-3 group-hover:text-darbar-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-darbar-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:border-darbar-gold/50 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-darbar-gold flex items-center justify-center gap-2 transition-all"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>

      {/* Modal Drawer Detail */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl glass-card border border-darbar-gold/40 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-darbar-gold/10 border border-darbar-gold/30 flex items-center justify-center">
                {React.createElement(selectedService.icon, { className: "w-7 h-7 text-darbar-gold" })}
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-darbar-gold font-bold">Service Blueprint</span>
                <h3 className="font-cinzel font-bold text-2xl text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-base mb-8 leading-relaxed">
              {selectedService.shortDesc}
            </p>

            <h4 className="text-xs uppercase tracking-widest font-bold text-darbar-gold mb-4">Included Royal Deliverables</h4>
            <div className="space-y-3 mb-8">
              {selectedService.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-darbar-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onNotifyClick();
                }}
                className="flex-1 py-3.5 rounded-xl bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-xl"
              >
                Inquire For Early Access
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3.5 px-6 rounded-xl bg-white/10 text-slate-300 text-sm font-semibold"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
