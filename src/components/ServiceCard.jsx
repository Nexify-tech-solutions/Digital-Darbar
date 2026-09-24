import React from 'react';
import { Camera, Video, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Camera,
  Video,
  Sparkles,
  TrendingUp
};

export default function ServiceCard({ service, index }) {
  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <div className="group relative bg-[#FFFFFF] border border-[#E7E1D4] p-8 transition-all duration-500 hover:border-[#C5902B] hover:shadow-xl flex flex-col justify-between rounded-sm">
      <div className="space-y-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#E7E1D4]/60 pb-4">
          <span className="font-mono text-2xl font-bold text-[#C5902B]">
            {service.id}
          </span>
          <div className="w-12 h-12 rounded-sm bg-[#F5F2EB] flex items-center justify-center text-[#141419] group-hover:bg-[#C5902B] group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-[#767267] uppercase block">
            {service.tagline}
          </span>
          <h3 className="font-syne text-2xl font-bold text-[#141419] group-hover:text-[#C5902B] transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-[#767267] leading-relaxed font-sans pt-2">
            {service.description}
          </p>
        </div>

        {/* Deliverables */}
        <div className="pt-4 border-t border-[#E7E1D4]/40">
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#141419] uppercase block mb-3">
            Core Scope & Deliverables
          </span>
          <ul className="space-y-2 text-xs font-sans text-[#767267]">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5902B]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* CTA Button */}
      <div className="pt-8">
        <Link
          to={service.link || "/services"}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-bold text-[#141419] group-hover:text-[#C5902B] transition-colors"
        >
          <span>Explore Package Scope</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
