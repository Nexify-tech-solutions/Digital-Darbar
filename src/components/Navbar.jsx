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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
        ? 'py-2.5 sm:py-3 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7E1D4] shadow-sm' 
        : 'py-3 sm:py-5 bg-[#FBF9F5]/80 backdrop-blur-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-[#141419] flex items-center justify-center text-[#C5902B] border border-[#C5902B]/30 group-hover:border-[#C5902B] transition-colors">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-syne text-lg sm:text-xl font-extrabold tracking-wider text-[#141419]">
                DIGITAL <span className="text-[#C5902B]">DARBAR</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#767267] uppercase -mt-0.5 sm:-mt-1">
                Luxury Digital Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav - lg and above */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 bg-[#F5F2EB]/90 px-5 xl:px-6 py-2 rounded-full border border-[#E7E1D4] backdrop-blur-sm">
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
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/book-call"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 text-xs font-mono tracking-widest uppercase bg-[#141419] text-[#FBF9F5] hover:bg-[#C5902B] transition-all duration-300 rounded-sm border border-[#141419] group shadow-sm"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5902B] group-hover:text-white transition-colors" />
            </Link>
          </div>

          {/* Mobile & Tablet Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/book-call"
              className="sm:inline-flex hidden items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase bg-[#141419] text-white rounded-sm"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5902B]" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-[#141419] hover:text-[#C5902B] focus:outline-none rounded-sm border border-[#E7E1D4] bg-[#F5F2EB]/60 active:scale-95 transition-transform"
              aria-label="Toggle Navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[60px] sm:top-[70px] bg-black/50 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Slide Down Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 lg:hidden bg-[#FBF9F5] border-b border-[#E7E1D4] px-4 sm:px-6 py-6 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-mono tracking-wider uppercase py-3 px-3 rounded transition-all flex items-center justify-between border-b border-[#E7E1D4]/40 ${
                      isActive(link.path) 
                        ? 'text-[#C5902B] font-bold bg-[#F5F2EB] border-l-4 border-l-[#C5902B]' 
                        : 'text-[#141419] hover:bg-[#F5F2EB]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </Link>
                ))}
              </nav>

              <div className="pt-6 space-y-3">
                <Link
                  to="/book-call"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#141419] text-[#FBF9F5] font-mono text-xs tracking-widest uppercase rounded-sm border border-[#141419] hover:bg-[#C5902B] hover:border-[#C5902B] transition-colors"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5902B]" />
                </Link>

                <div className="pt-4 border-t border-[#E7E1D4] flex items-center justify-between text-xs font-mono text-[#767267]">
                  <span>Mumbai • Delhi • Dubai</span>
                  <span className="text-[#C5902B]">+91 98200 88990</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
