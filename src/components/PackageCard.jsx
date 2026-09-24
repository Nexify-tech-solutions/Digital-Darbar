import React from 'react';
import { Check, Flame, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackageCard({ pkg }) {
  const isHighlight = pkg.highlight;

  return (
    <div className={`relative flex flex-col justify-between p-8 rounded-sm transition-all duration-300 ${
      isHighlight 
        ? 'bg-[#141419] text-[#FBF9F5] border-2 border-[#C5902B] shadow-2xl transform lg:-translate-y-2' 
        : 'bg-[#FFFFFF] text-[#141419] border border-[#E7E1D4] hover:border-[#C5902B] hover:shadow-lg'
    }`}>
      
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-[#C5902B] text-white text-[10px] font-mono tracking-widest uppercase rounded-full shadow-sm flex items-center gap-1">
          <Flame className="w-3 h-3" />
          <span>{pkg.badge}</span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="space-y-2 pb-6 border-b border-[#E7E1D4]/20">
          <h3 className={`font-syne text-2xl font-bold ${isHighlight ? 'text-white' : 'text-[#141419]'}`}>
            {pkg.name}
          </h3>
          <p className={`text-xs font-sans leading-relaxed ${isHighlight ? 'text-gray-300' : 'text-[#767267]'}`}>
            {pkg.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="py-6 space-y-1">
          <div className="flex items-baseline gap-2">
            <span className={`font-syne text-4xl font-extrabold ${isHighlight ? 'text-[#C5902B]' : 'text-[#141419]'}`}>
              {pkg.price}
            </span>
            <span className={`text-xs font-mono tracking-wider ${isHighlight ? 'text-gray-400' : 'text-[#767267]'}`}>
              {pkg.period}
            </span>
          </div>

          {pkg.slotsLeft !== null && pkg.slotsLeft !== undefined && (
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-[#C5902B] bg-[#C5902B]/10 px-2.5 py-1 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#C5902B] animate-ping" />
                Only {pkg.slotsLeft} Retainer Slots Available
              </span>
            </div>
          )}
        </div>

        {/* Feature List */}
        <div className="space-y-3 pt-4">
          <span className={`text-[11px] font-mono font-bold tracking-widest uppercase block ${isHighlight ? 'text-[#C5902B]' : 'text-[#141419]'}`}>
            What's Included:
          </span>
          <ul className="space-y-3 text-xs font-sans">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isHighlight ? 'bg-[#C5902B] text-[#141419]' : 'bg-[#F7F0E2] text-[#C5902B]'
                }`}>
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className={isHighlight ? 'text-gray-200' : 'text-[#141419]'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-8">
        <Link
          to={pkg.ctaLink || "/book-call"}
          className={`flex items-center justify-center gap-2 w-full py-3.5 text-xs font-mono tracking-widest uppercase font-bold rounded-sm transition-all duration-300 ${
            isHighlight
              ? 'bg-[#C5902B] text-white hover:bg-[#B37D1D] shadow-md'
              : 'bg-[#141419] text-white hover:bg-[#C5902B]'
          }`}
        >
          <span>{pkg.ctaText}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
