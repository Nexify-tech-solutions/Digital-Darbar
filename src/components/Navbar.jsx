import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Book Strategy Call', path: '/book-call' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E7E1D4] shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-sm bg-[#141419] flex items-center justify-center text-[#C5902B] border border-[#C5902B]/30 group-hover:border-[#C5902B] transition-colors">
              <Crown className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-syne text-xl font-extrabold tracking-wider text-[#141419]">
                DIGITAL <span className="text-[#C5902B]">DARBAR</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#767267] uppercase -mt-1">
                Luxury Digital Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-[#F5F2EB]/80 px-6 py-2 rounded-full border border-[#E7E1D4] backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-xs font-mono tracking-widest uppercase py-1 transition-colors ${
                  isActive(link.path) 
                    ? 'text-[#C5902B] font-semibold' 
                    : 'text-[#141419] hover:text-[#C5902B]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C5902B]" 
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/book-call"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-widest uppercase bg-[#141419] text-[#FBF9F5] hover:bg-[#C5902B] transition-all duration-300 rounded-sm border border-[#141419] group shadow-sm"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5902B] group-hover:text-white transition-colors" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#141419] hover:text-[#C5902B] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FBF9F5] border-b border-[#E7E1D4] px-6 py-6 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-mono tracking-wider uppercase py-2 border-b border-[#E7E1D4]/40 ${
                    isActive(link.path) ? 'text-[#C5902B] font-bold pl-2 border-l-2 border-[#C5902B]' : 'text-[#141419]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              to="/book-call"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#141419] text-[#FBF9F5] font-mono text-xs tracking-widest uppercase rounded-sm border border-[#141419]"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5902B]" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
