"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Header() {
  const [scrollState, setScrollState] = useState<'transparent' | 'blurred' | 'solid'>('transparent');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  
  const isHome = pathname === "/";
  useEffect(() => {
    if (!isHome) {
      setScrollState('solid');
      return;
    }

    const handleScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight * 0.82;
      
      if (y < 20) {
        setScrollState('transparent');
      } else if (y < heroHeight) {
        setScrollState('blurred');
      } else {
        setScrollState('solid');
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const activeScrollState = isHome ? scrollState : 'solid';
  const isDarkText = activeScrollState === 'solid';

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Properties",
      href: "/properties",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className={`w-full transition-all duration-300 ${
      isHome
        ? activeScrollState === 'solid'
          ? 'fixed top-0 left-0 z-50 shadow-md'
          : activeScrollState === 'blurred'
            ? 'fixed top-0 left-0 z-50'
            : 'absolute top-0 left-0 z-50'
        : 'relative z-40'
    }`}>
      {/* Top micro bar for direct contact and Trust signals */}
      <div className={`bg-[#111111] text-[#F8F7F4] text-xs px-4 md:px-12 flex justify-between items-center transition-all duration-300 border-b border-[#B8892D]/20 overflow-hidden ${
        isHome && activeScrollState !== 'transparent'
          ? 'h-0 py-0 border-b-0 opacity-0 pointer-events-none'
          : 'h-9 py-2 opacity-100'
      }`}>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 opacity-90">
            <Phone className="w-3.5 h-3.5 text-[#B8892D]" />
            +92 (300) 123-4567
          </span>
          <span className="hidden sm:flex items-center gap-1.5 opacity-90 border-l border-slate-700 pl-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#3E7C59]" />
            Live Chat (WhatsApp Ready)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-wider text-[#B8892D] bg-[#1F2937]/50 px-2 py-0.5 rounded border border-[#B8892D]/30">
            DHA & BAHRIA CERTIFIED
          </span>
          <button 
            onClick={() => router.push('/contact')}
            className="hover:text-[#B8892D] transition-colors cursor-pointer hidden sm:inline"
          >
            Office Locator
          </button>
        </div>
      </div>

      <header
        className={`${isHome ? 'relative z-50 w-full' : 'sticky top-0 z-50 w-full'} transition-all duration-300 border-b ${
          activeScrollState === 'solid'
            ? 'bg-white border-slate-200/50 shadow-md py-3.5'
            : activeScrollState === 'blurred'
              ? 'bg-[#111111]/70 backdrop-blur-md border-[#B8892D]/20 shadow-lg py-4'
              : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Brand Logo - Luxury typographic styling */}
          <div 
            onClick={() => router.push('/')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="bg-[#111111] p-1 rounded-lg border border-[#B8892D]/40 shadow-sm transition-all group-hover:border-[#B8892D]">
              <Logo variant="icon" className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-bold tracking-tight leading-none group-hover:text-[#B8892D] transition-colors ${
                isDarkText ? 'text-[#1F2937]' : 'text-[#F8F7F4]'
              }`}>
                ApnaGhar<span className="text-[#B8892D]">Pk</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.2em] font-mono mt-0.5 transition-colors ${
                isDarkText ? 'text-[#6B7280]' : 'text-slate-400'
              }`}>
                Build • Design • Real Estate
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => router.push(item.href)}
                  className={`relative px-2.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#B8892D] font-bold'
                      : isDarkText
                        ? 'text-[#1F2937] hover:text-[#B8892D]/80'
                        : 'text-[#F8F7F4]/90 hover:text-[#B8892D]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#B8892D]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => router.push('/consultation')}
              className="bg-[#B8892D] hover:bg-[#C99A3C] text-white px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 group cursor-pointer border border-[#B8892D]"
            >
              Book Consultation
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1 rounded-lg focus:outline-none cursor-pointer transition-colors ${
                isDarkText ? 'text-[#1F2937] hover:text-[#B8892D]' : 'text-[#F8F7F4] hover:text-[#B8892D]'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className={`lg:hidden border-t transition-all ${
                isDarkText 
                  ? 'bg-white border-slate-200' 
                  : 'bg-[#111111]/95 backdrop-blur-lg border-[#B8892D]/20'
              }`}
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <button
                      key={item.href}
                      onClick={() => {
                        router.push(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wider transition-colors ${
                        isActive
                          ? isDarkText
                            ? 'bg-[#F8F7F4] text-[#B8892D] border-l-4 border-[#B8892D]'
                            : 'bg-white/5 text-[#B8892D] border-l-4 border-[#B8892D]'
                          : isDarkText
                            ? 'text-[#1F2937] hover:bg-[#F8F7F4] hover:text-[#B8892D]'
                            : 'text-[#F8F7F4] hover:bg-white/5 hover:text-[#B8892D]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-4 px-4">
                  <button
                    onClick={() => {
                      router.push('/contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-[#B8892D] hover:bg-[#C99A3C] text-white text-center py-3 rounded-lg text-sm font-semibold uppercase tracking-wider shadow-sm transition-colors flex justify-center items-center gap-2 cursor-pointer"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
