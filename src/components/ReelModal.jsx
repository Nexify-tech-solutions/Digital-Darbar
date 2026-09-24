import React from 'react';
import { X, Play, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReelModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        
        {/* Backdrop overlay click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#141419] border border-[#C5902B]/40 rounded-md shadow-2xl overflow-hidden z-10 grid grid-cols-1 lg:grid-cols-12 text-[#FBF9F5]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#C5902B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video / Reel Player Column */}
          <div className="lg:col-span-6 bg-black relative min-h-[350px] lg:min-h-[500px] flex items-center justify-center">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover max-h-[550px]"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            
            <div className="absolute bottom-4 left-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded border border-white/10 text-xs font-mono text-[#C5902B] flex items-center gap-2">
              <Volume2 className="w-4 h-4 animate-pulse" />
              <span>4K Reel Preview • Muted Audio</span>
            </div>
          </div>

          {/* Project Details Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-[#C5902B]/20 text-[#C5902B] border border-[#C5902B]/30 rounded">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-gray-400">Royal Production</span>
              </div>

              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h3>
              
              <p className="text-xs font-mono text-[#C5902B] italic">
                {project.subtitle}
              </p>

              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                {project.description}
              </p>

              {/* Performance Metric */}
              {project.metrics && (
                <div className="p-4 bg-[#282830] border-l-2 border-[#C5902B] rounded-r space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase block">
                    Verified Campaign Results
                  </span>
                  <p className="text-sm font-bold text-[#C5902B] font-mono">
                    {project.metrics}
                  </p>
                </div>
              )}

              {/* Deliverables */}
              {project.deliverables && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-gray-400 uppercase block">
                    Deliverable Scope:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5902B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#282830] flex items-center justify-between gap-4">
              <a
                href="/book-call"
                className="flex-1 py-3 bg-[#C5902B] hover:bg-[#B37D1D] text-white font-mono text-xs tracking-widest uppercase text-center font-bold rounded transition-colors"
              >
                Claim Similar Campaign
              </a>
              <button
                onClick={onClose}
                className="px-4 py-3 bg-[#282830] hover:bg-gray-700 text-gray-300 font-mono text-xs tracking-widest uppercase rounded transition-colors"
              >
                Close
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
