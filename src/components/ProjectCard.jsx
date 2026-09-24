import React, { useState } from 'react';
import { Play, ArrowUpRight, Eye, Award } from 'lucide-react';
import ReelModal from './ReelModal';

export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setModalOpen(true)}
        className="group relative bg-[#FFFFFF] border border-[#E7E1D4] rounded-sm overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#C5902B] hover:shadow-2xl flex flex-col justify-between"
      >
        
        {/* Media Thumbnail Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#141419]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />

          {/* Dark Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-[#141419]/80 backdrop-blur-md text-[#C5902B] text-[10px] font-mono tracking-widest uppercase border border-[#C5902B]/40 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-14 h-14 rounded-full bg-[#C5902B] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#141419] transition-all duration-300">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </div>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
            <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#C5902B] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-gray-300 font-sans line-clamp-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Card Footer Info */}
        <div className="p-5 bg-[#FBF9F5] border-t border-[#E7E1D4]/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C5902B] font-bold">
            <Award className="w-3.5 h-3.5" />
            <span className="truncate max-w-[200px]">{project.metrics}</span>
          </div>
          
          <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider uppercase text-[#141419] group-hover:text-[#C5902B] transition-colors">
            <span>Watch Reel</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </div>

      {/* Reel Modal */}
      {modalOpen && (
        <ReelModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
