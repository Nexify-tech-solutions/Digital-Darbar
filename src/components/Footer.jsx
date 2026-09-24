import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, ArrowUpRight, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#141419] text-[#FBF9F5] pt-20 pb-10 border-t border-[#282830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#282830]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-sm bg-[#C5902B] text-[#141419] flex items-center justify-center font-bold">
                <Crown className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-syne text-2xl font-extrabold tracking-wider text-white">
                  DIGITAL <span className="text-[#C5902B]">DARBAR</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#767267] uppercase">
                  Luxury Digital Media Agency
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-md font-sans">
              We turn ambitious brands into cultural icons. High-end visual storytelling, viral 9:16 short-form reels, and commercial film production for discerning luxury clients.
            </p>

            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#282830] flex items-center justify-center hover:bg-[#C5902B] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#282830] flex items-center justify-center hover:bg-[#C5902B] hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#282830] flex items-center justify-center hover:bg-[#C5902B] hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-syne text-sm font-bold tracking-widest text-[#C5902B] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Home Showcase</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Agency Packages
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Reel Masterpieces
                </Link>
              </li>
              <li>
                <Link to="/book-call" className="hover:text-white transition-colors">
                  Book Strategy Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Services */}
          <div className="space-y-4">
            <h4 className="font-syne text-sm font-bold tracking-widest text-[#C5902B] uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-gray-400">
              <li>Commercial Shoots</li>
              <li>Viral 9:16 Reels Batching</li>
              <li>Social Media Management</li>
              <li>Influencer Performance Ads</li>
              <li>Drone Cinematography</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-syne text-sm font-bold tracking-widest text-[#C5902B] uppercase">
              Headquarters
            </h4>
            <ul className="space-y-3 text-sm font-sans text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5902B] shrink-0 mt-0.5" />
                <span>Lower Parel & Worli Sea Face, Mumbai, MH 400013</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5902B] shrink-0" />
                <a href="mailto:concierge@digitaldarbar.com" className="hover:text-white transition-colors">concierge@digitaldarbar.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5902B] shrink-0" />
                <span>+91 98200 88990</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} Digital Darbar Media Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Engagement</span>
            <span className="text-[#C5902B]">Royal Ivory Editorial System</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
