"use client";
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
// import { Youtube, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#111111] text-[#F8F7F4] border-t border-[#B8892D]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & Mission column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="bg-white/5 p-1.5 rounded-lg border border-[#B8892D]/30">
              <Logo variant="icon" className="w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              ApnaGhar<span className="text-[#B8892D]">Pk</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            Pakistan's gold-standard construction and real estate company. Engineering dream houses, luxury interiors, and secure investment structures in DHA and Bahria Town with absolute trust and structural guarantees.
          </p>
          <div className="flex items-center gap-3">
            {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8892D]/20 hover:text-[#B8892D] transition-all border border-white/10" aria-label="YouTube channel">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8892D]/20 hover:text-[#B8892D] transition-all border border-white/10" aria-label="Instagram handle">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8892D]/20 hover:text-[#B8892D] transition-all border border-white/10" aria-label="Facebook page">
              <Facebook className="w-4 h-4" />
            </a> */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-[#B8892D]/20 hover:text-[#B8892D] transition-all border border-white/10 flex items-center justify-center font-bold text-xs" aria-label="TikTok feed">
              𝅘𝅥𝅮
            </a>
          </div>
        </div>

        {/* Directory columns */}
        <div>
          <h4 className="font-serif text-lg font-semibold tracking-wide text-white border-b border-[#B8892D]/30 pb-2 mb-4">
            Our Core Services
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {[
              { label: 'House Construction', id: 'house-construction' },
              { label: 'Grey Structure Build', id: 'grey-structure' },
              { label: 'Turnkey Luxury Homes', id: 'turnkey-construction' },
              { label: 'Architectural Maps', id: 'architectural-design' },
              { label: 'Bespoke Interior Design', id: 'interior-design' },
              { label: 'Luxury House Renovation', id: 'house-renovation' },
              { label: 'Commercial Plazas', id: 'commercial-construction' },
            ].map((srv, idx) => (
              <li key={idx}>
                <Link href={`/services/${srv.id}`} className="hover:text-[#B8892D] transition-colors hover:translate-x-1 duration-200 block text-left w-full cursor-pointer">
                  {srv.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-serif text-lg font-semibold tracking-wide text-white border-b border-[#B8892D]/30 pb-2 mb-4">
            Quick Directory
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            <Link href="/about" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">About Us</Link>
            <Link href="/projects" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">Featured Projects</Link>
            <Link href="/properties" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">For Sale</Link>
            <Link href="/videos" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">YouTube Tours</Link>
            <Link href="/gallery" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">Image Gallery</Link>
            <Link href="/testimonials" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">Reviews</Link>
            <Link href="/blog" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">Latest News</Link>
            <Link href="/careers" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">Careers</Link>
            <Link href="/contact" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1">Contact Office</Link>
            <Link href="/contact" className="hover:text-[#B8892D] text-left transition-colors cursor-pointer py-1 font-semibold text-[#B8892D]">Free Quote</Link>
          </div>
          
          {/* Small secure badge */}
          <div className="mt-6 p-3 bg-slate-800/60 rounded-lg border border-slate-700 text-[11px] text-slate-400 space-y-1">
            <p className="font-semibold text-slate-300">Corporate Headquarters:</p>
            <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#B8892D]" /> Phase 6 Office, Lahore, PK</p>
          </div>
        </div>

        {/* Newsletter & Google Map Area */}
        <div className="space-y-5">
          <h4 className="font-serif text-lg font-semibold tracking-wide text-white border-b border-[#B8892D]/30 pb-2 mb-4">
            Stay Updated
          </h4>
          <p className="text-xs text-slate-300">
            Subscribe to receive our latest luxury house tours, construction cost guides, and prime plot discount offers.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              required
              className="bg-slate-800/70 border border-slate-700 rounded-lg py-2.5 pl-3 pr-10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#B8892D] w-full"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-[#B8892D] hover:bg-[#C99A3C] text-white px-2.5 rounded-md transition-all flex items-center justify-center cursor-pointer"
            >
              {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
            </button>
          </form>

          {/* Interactive Google Map Simulation with Premium design */}
          <div className="relative h-28 w-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex flex-col justify-end p-2.5 group">
            {/* Map lines schematic background */}
            <div className="absolute inset-0 bg-[radial-gradient(#3e5266_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <MapPin className="w-6 h-6 text-[#B8892D] animate-bounce" />
              <span className="text-[10px] font-semibold text-slate-200 mt-1">ApnaGharPk DHA Office</span>
            </div>
            
            <div className="relative z-10 bg-slate-900/95 p-1.5 rounded text-[9px] text-slate-300 flex justify-between items-center">
              <span>Block CCA, Phase 6, DHA Lahore</span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#B8892D] font-bold hover:underline"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
        <div>
          © {new Date().getFullYear()} ApnaGharPk Construction. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</Link>
          <span className="text-slate-600">|</span>
          <span className="font-mono text-[10px] text-slate-500">Design: Award-Winning Architecture Standard</span>
        </div>
      </div>
    </footer>
  );
}
