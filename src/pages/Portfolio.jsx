import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import EditorialLabel from '../components/EditorialLabel';
import { portfolioCategories, projects } from '../data/projects';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Work');

  const filteredProjects = projects.filter(p => {
    if (selectedCategory === 'All Work') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="space-y-16 md:space-y-24 pb-20 pt-8">
      
      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <EditorialLabel text="Curated Agency Archive" />
        <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-[#141419] tracking-tight">
          Our <span className="text-[#C5902B]">Masterpieces</span>
        </h1>
        <p className="text-base sm:text-lg text-[#767267] font-sans max-w-2xl mx-auto leading-relaxed">
          High-contrast editorial shoots, viral 9:16 short form video reels, and brand transformation campaigns.
        </p>
      </section>

      {/* FILTER BAR */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 bg-[#F5F2EB] p-2 rounded-full border border-[#E7E1D4] max-w-4xl mx-auto">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#141419] text-[#C5902B] font-bold shadow-sm'
                  : 'text-[#767267] hover:text-[#141419]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PORTFOLIO BOTTOM CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#141419] text-white p-10 sm:p-16 rounded-md border-2 border-[#C5902B] text-center space-y-6 shadow-2xl">
          <EditorialLabel text="Strategic Scaling" light />
          <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight">
            Want Reels That <span className="text-[#C5902B]">Actually Sell?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reserve your shoot slot with India’s leading luxury 9:16 short-form visual studio.
          </p>
          <div className="pt-2">
            <Link
              to="/book-call"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5902B] text-white font-mono text-xs tracking-widest uppercase font-bold rounded-sm hover:bg-[#B37D1D] transition-colors shadow-lg"
            >
              <span>Claim Strategic Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
