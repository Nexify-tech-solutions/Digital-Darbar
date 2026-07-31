import React, { useState, useEffect } from 'react';
import Hero3DCanvas from './components/3d/Hero3DCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Services from './components/Services';
import RoyalPillars from './components/RoyalPillars';
import StatsSection from './components/StatsSection';
import EmailCapture from './components/EmailCapture';
import SocialConnect from './components/SocialConnect';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEmailSection = () => {
    const el = document.getElementById('email-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07070b] text-slate-100 selection:bg-darbar-gold selection:text-black">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gold-gradient transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      {/* Main Navigation */}
      <Navbar onNotifyClick={scrollToEmailSection} />

      {/* Hero Section */}
      <Hero onNotifyClick={scrollToEmailSection} />

      {/* Countdown Section */}
      <Countdown />

      {/* Core Services Section */}
      <Services onNotifyClick={scrollToEmailSection} />

      {/* Royal Standards / Pillars Section */}
      <RoyalPillars />

      {/* Stats Metric Counters */}
      <StatsSection />

      {/* Email VIP Access Registration */}
      <EmailCapture />

      {/* Social Media Connect */}
      <SocialConnect />

      {/* Footer */}
      <Footer />

    </div>
  );
}
