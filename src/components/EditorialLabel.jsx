import React from 'react';

export default function EditorialLabel({ text, light = false, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest uppercase rounded-full border ${
      light 
        ? 'border-white/20 bg-white/10 text-white' 
        : 'border-[#E7E1D4] bg-[#F5F2EB] text-[#C5902B]'
    } ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#C5902B] animate-pulse"></span>
      <span>{text}</span>
    </div>
  );
}
