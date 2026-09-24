import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, Crown, Sparkles, TrendingUp, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import EditorialLabel from '../components/EditorialLabel';
import ReelModal from '../components/ReelModal';
import { signatureServices } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

export default function Home() {
  const [selectedReel, setSelectedReel] = useState(null);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  const heroShowreel = {
    title: "Digital Darbar 2026 Agency Showreel",
    subtitle: "High-Fashion, Luxury F&B, and 9:16 Viral Visual Production",
    category: "Master Reel",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-golden-dress-41584-large.mp4",
    metrics: "Over 50M+ Views Driven Across Client Accounts",
    description: "A 60-second compilation of commercial cinematography, model editorial shoots, and high-ROAS viral video clips."
  };

  return (
    <div className="space-y-24 md:space-y-36 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Background Subtle Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#C5902B]/10 via-[#F7F0E2]/40 to-transparent blur-3xl -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            
            <EditorialLabel text="Bespoke Luxury Digital Studio" />

            <h1 className="font-syne text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#141419] leading-[1.08]">
              We Turn Brands Into <br className="hidden sm:block"/>
              <span className="relative inline-block text-[#C5902B]">
                Cultural Icons.
                <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-[#C5902B]/30 rounded" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#767267] font-sans max-w-xl leading-relaxed">
              Digital Darbar is India’s premier creative agency for high-growth luxury brands, heritage couture, and viral 9:16 short-form video production.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#141419] text-[#FBF9F5] font-mono text-xs tracking-widest uppercase font-bold rounded-sm border border-[#141419] hover:bg-[#C5902B] hover:border-[#C5902B] transition-all duration-300 shadow-xl group"
              >
                <span>Explore Packages</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5902B] group-hover:text-white transition-colors" />
              </Link>

              <button
                onClick={() => setSelectedReel(heroShowreel)}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#F5F2EB] text-[#141419] font-mono text-xs tracking-widest uppercase font-bold rounded-sm border border-[#E7E1D4] hover:border-[#C5902B] hover:bg-white transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current text-[#C5902B]" />
                <span>Watch Showreel</span>
              </button>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-8 border-t border-[#E7E1D4] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="font-syne text-2xl font-bold text-[#141419]">50M+</span>
                <span className="block text-[11px] font-mono text-[#767267] uppercase">Reels Impressions</span>
              </div>
              <div>
                <span className="font-syne text-2xl font-bold text-[#141419]">8.4x</span>
                <span className="block text-[11px] font-mono text-[#767267] uppercase">Average Ad ROAS</span>
              </div>
              <div>
                <span className="font-syne text-2xl font-bold text-[#141419]">100%</span>
                <span className="block text-[11px] font-mono text-[#767267] uppercase">Editorial Finesse</span>
              </div>
            </div>

          </div>

          {/* Right Hero Video/Image Frame */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-sm overflow-hidden border-2 border-[#E7E1D4] bg-[#141419] shadow-2xl group">
              
              {/* Media preview */}
              <div className="relative aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Darbar Showreel Frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Play Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  <button
                    onClick={() => setSelectedReel(heroShowreel)}
                    className="w-16 h-16 rounded-full bg-[#C5902B] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white hover:text-[#141419] transition-all duration-300 mb-4"
                  >
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </button>
                  <span className="font-syne text-lg font-bold text-white tracking-wide">
                    2026 Official Agency Reel
                  </span>
                  <span className="text-xs font-mono text-[#C5902B] uppercase mt-1">
                    Click to Play High-Res 4K
                  </span>
                </div>

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Accepting Retainer Clients Q4</span>
                </div>
              </div>

            </div>

            {/* Architectural Champagne Accent Box */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-[#C5902B] -z-10 hidden sm:block" />
          </div>

        </div>

      </section>

      {/* SIGNATURE SERVICES SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          
          <SectionHeader
            kicker="Curated Agency Capabilities"
            title="Signature Services"
            subtitle="Four core pillars of luxury video production, commercial aesthetics, and algorithmic brand scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* VIRAL REELS GALLERY SHOWCASE */}
      <section className="bg-[#F5F2EB] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E7E1D4]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              kicker="Viral Reels & Campaign Gallery"
              title="Featured Masterpieces"
              subtitle="Explore high-converting 9:16 short-form video reels produced for fashion, luxury F&B, and jewelry brands."
            />
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase font-bold text-[#141419] hover:text-[#C5902B] transition-colors"
            >
              <span>View Full Portfolio Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* FOUNDERS SPEAK / TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          
          <SectionHeader
            kicker="Client Endorsements"
            title="Founders Speak"
            subtitle="Hear how India’s most visionary founders scale their revenue and brand prestige with Digital Darbar."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-[#FFFFFF] border border-[#E7E1D4] p-8 rounded-sm space-y-6 flex flex-col justify-between hover:border-[#C5902B] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#C5902B]">
                    {[...Array(5)].map((_, i) => (
                      <Crown key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-[#141419] font-sans leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E7E1D4]/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#C5902B]"
                    />
                    <div>
                      <h4 className="font-syne text-sm font-bold text-[#141419]">{t.author}</h4>
                      <p className="text-xs text-[#767267] font-mono">{t.title}, {t.company}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HIGH-CONTRAST LEAD GENERATION CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-[#141419] text-[#FBF9F5] rounded-md p-8 sm:p-14 overflow-hidden border-2 border-[#C5902B] shadow-2xl">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <EditorialLabel text="Exclusive Brand Invitation" light />
              
              <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Claim Your Free <span className="text-[#C5902B]">Royal Social Audit</span>
              </h2>

              <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
                Receive a 1-on-1 strategic breakdown of your brand’s Instagram Reels, content hooks, and performance ad potential from our senior agency leads.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                to="/book-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5902B] text-white font-mono text-xs tracking-widest uppercase font-bold rounded-sm hover:bg-[#B37D1D] transition-colors shadow-xl"
              >
                <span>Get 7-Day Growth Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-[10px] font-mono text-gray-400 mt-2">
                100% Free • No Commitment Required
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Showreel Modal */}
      {selectedReel && (
        <ReelModal project={selectedReel} onClose={() => setSelectedReel(null)} />
      )}

    </div>
  );
}
