import React from 'react';
import EditorialLabel from './EditorialLabel';

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  centered = false,
  light = false,
  className = ''
}) {
  return (
    <div className={`space-y-4 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {kicker && <EditorialLabel text={kicker} light={light} />}
      <h2 className={`font-syne text-3xl md:text-5xl font-bold tracking-tight leading-tight ${light ? 'text-white' : 'text-[#141419]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed font-sans ${light ? 'text-gray-300' : 'text-[#767267]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
