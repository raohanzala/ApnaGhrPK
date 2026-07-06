'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Logo from '@/components/Logo';
import { Sparkles, ArrowRight, Compass, HardHat, ShieldCheck, Award, BadgeCheck, Cpu, Users, Clock, Play, Star, ChevronDown } from 'lucide-react';
import { ARTICLES, FAQS, PROJECTS, PROPERTIES, REVIEWS, SERVICES, VIDEOS } from './data';
import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import CostCalculator from '@/components/CostCalculator';


export default function Home() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activeVideoCat, setActiveVideoCat] = useState<string>('All');

  // Filter videos on Home
  const videoCategories = ['All', 'House Tours', 'Construction Tips', 'Client Reviews', 'Project Updates'];
  const filteredVideos = activeVideoCat === 'All' 
    ? VIDEOS 
    : VIDEOS.filter(v => v.category === activeVideoCat);

  return (
    <div className="bg-[#F8F7F4] text-[#1F2937] font-sans">
      
      {/* SECTION 1: Luxury Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F1115]">
        {/* Cinematic drone view overlay background image with premium dark tint */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80" 
            alt="Cinematic Construction Site"
            className="w-full h-full object-cover opacity-25 scale-105 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-[#F8F7F4] space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Embedded Luxury Brand Logo */}
            <div className="dark flex justify-center mb-4 select-none">
              <Logo variant="full" className="scale-110" />
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#B8892D]/25 border border-[#B8892D]/40 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#B8892D] mx-auto">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Pakistan's Premier Architecture & Construction Firm
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
              Building Dream Homes With <span className="text-[#B8892D] italic font-normal">Trust, Quality & Excellence</span>
            </h1>
            
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From architectural planning to final luxury construction, we build magnificent structures that reflect quality, durability, and contemporary elite living.
            </p>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto bg-[#B8892D] hover:bg-[#C99A3C] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-[#B8892D]"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all border-2 border-[#F8F7F4]/30 hover:border-[#F8F7F4] flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Projects
            </Link>
          </motion.div>

          {/* Core Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto border-t border-white/10 mt-16"
          >
            {[
              { val: '500+', lab: 'Homes Built' },
              { val: '10+', lab: 'Years Experience' },
              { val: '100%', lab: 'Client Satisfaction' },
              { val: '50+', lab: 'Professional Engineers' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1 bg-[#1F2937]/35 p-4 rounded-xl border border-white/5 backdrop-blur-xs">
                <div className="text-3xl sm:text-4xl font-serif font-black text-[#B8892D]">{stat.val}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300">{stat.lab}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Our Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Comprehensive Capabilities</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
            Crafted Engineering Services
          </h2>
          <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-[#6B7280]">
            ApnaGharPk offers turnkey construction and architectural designs engineered to outlast generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href={`/services/${srv.id}`}
              className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#F8F7F4] rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-[#B8892D]/10 group-hover:border-[#B8892D]/30 transition-all">
                  <Compass className="w-6 h-6 text-[#B8892D]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1F2937] group-hover:text-[#B8892D] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {srv.description}
                </p>
              </div>
              <button className="mt-6 flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#B8892D] group-hover:translate-x-1 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: Why Choose ApnaGharPk */}
      <section className="bg-white py-24 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Uncompromising Quality</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937] leading-tight">
              Why Elite Clients Build With ApnaGharPk
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We stand apart from standard contractors through rigid engineering testing, certified materials supply contracts, and 100% financial transparency.
            </p>
            <div className="pt-4">
              <Link 
                href="/about"
                className="bg-[#111111] hover:bg-[#1F2937] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Our Structural Philosophy
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: HardHat, title: 'Experienced Engineers', desc: 'PEC licensed structural and site civil engineers directing execution' },
              { icon: ShieldCheck, title: 'Transparent Pricing', desc: 'Detailed billing cycles, no hidden escalations or commission markups' },
              { icon: Award, title: 'Premium Materials', desc: 'Strict Amreli Steel, Maple Leaf cement, and certified wiring standards only' },
              { icon: BadgeCheck, title: 'Quality Assurance', desc: '14-point daily engineering checklist and cube compression tests' },
              { icon: Cpu, title: 'Modern Equipment', desc: 'High frequency vibrators, laser levels, and professional scaffolding' },
              { icon: Users, title: 'Dedicated Project Manager', desc: 'Single point of daily technical support and direct coordinator' },
              { icon: Clock, title: 'On-Time Delivery', desc: 'Penalty clauses bound delivery schedules with prompt executions' },
              { icon: Sparkles, title: 'Post-Construction Support', desc: '1-year comprehensive seepage, fixtures, and finishes warranties' },
            ].map((feat, idx) => (
              <div key={idx} className="bg-[#F8F7F4] p-5 rounded-xl border border-[#E5E7EB] flex gap-3.5 items-start">
                <div className="bg-white p-2 rounded-lg border border-slate-200">
                  <feat.icon className="w-5 h-5 text-[#B8892D]" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#1F2937]">{feat.title}</h4>
                  <p className="text-[11px] text-[#6B7280] mt-1 leading-normal">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Featured Projects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Exquisite Realizations</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
              Featured Masterpieces
            </h2>
          </div>
          <Link 
            href="/projects"
            className="text-xs font-mono uppercase tracking-wider text-[#B8892D] flex items-center gap-1.5 hover:underline cursor-pointer"
          >
            All Active Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-16">
          {PROJECTS.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Link 
                key={proj.id}
                href={`/projects/${proj.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Thumbnail Frame */}
                <div className={`lg:col-span-7 relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Status Indicator */}
                  <span className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-md text-[#F8F7F4] text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded border border-slate-700">
                    {proj.status}
                  </span>
                </div>

                {/* Info block */}
                <div className={`lg:col-span-5 space-y-5 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B8892D]">{proj.type}</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
                    {proj.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono py-4 border-y border-slate-200/80">
                    <div>
                      <span className="text-[#6B7280] block">Location:</span>
                      <span className="font-bold text-[#1F2937]">{proj.location}</span>
                    </div>
                    <div>
                      <span className="text-[#6B7280] block">Covered Area:</span>
                      <span className="font-bold text-[#1F2937]">{proj.area}</span>
                    </div>
                    <div>
                      <span className="text-[#6B7280] block">Engineered Status:</span>
                      <span className="font-bold text-[#3E7C59]">{proj.status}</span>
                    </div>
                    <div>
                      <span className="text-[#6B7280] block">Completion:</span>
                      <span className="font-bold text-[#1F2937]">{proj.completionDate}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    A beautiful combination of premium design layouts and earthquake-resistant structural engineering. Constructed using premium imported fittings and high-tensile steel rebars.
                  </p>

                  <Link 
                    href={`/projects/${proj.id}`}
                    className="bg-transparent hover:bg-[#111111] text-[#111111] hover:text-white border border-[#111111] px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    View Project Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: Properties For Sale */}
      <section className="bg-white py-24 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Investment Enclaves</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                Luxury Homes For Sale
              </h2>
            </div>
            <Link 
              href="/properties"
              className="text-xs font-mono uppercase tracking-wider text-[#B8892D] flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              View Full Directory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROPERTIES.map((prop) => (
              <div 
                key={prop.id}
                className="bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden group">
                    <img 
                      src={prop.image} 
                      alt={prop.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#B8892D] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {prop.price}
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      {prop.location}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#1F2937] line-clamp-1">
                      {prop.title}
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200/70 text-center font-mono text-[10px] text-slate-600">
                      <div>
                        <span className="block text-slate-400">Beds:</span>
                        <span className="font-bold text-[#1F2937]">{prop.bedrooms}</span>
                      </div>
                      <div>
                        <span className="block text-slate-400">Baths:</span>
                        <span className="font-bold text-[#1F2937]">{prop.bathrooms}</span>
                      </div>
                      <div>
                        <span className="block text-slate-400">Area:</span>
                        <span className="font-bold text-[#1F2937]">{prop.area}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <Link 
                    href={`/properties/${prop.id}`}
                    className="w-full bg-[#111111] hover:bg-[#B8892D] text-white py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Construction Process */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Structural Timeline</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
            How We Build Your Legacy
          </h2>
          <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
          {/* Connector Line behind steps on wide screens */}
          <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0"></div>

          {[
            { num: '01', title: 'Consultation', desc: 'Free site evaluation, design brainstorming, and custom A-grade budgeting' },
            { num: '02', title: 'Planning', desc: 'Bylaw submission maps drafting, PEC architectural schedules, approvals' },
            { num: '03', title: 'Architecture', desc: 'Detailed 3D models, photorealistic layouts, false ceilings layouts' },
            { num: '04', title: 'Construction', desc: 'Deep excavation, termite sprays, double RCC steel slab framework' },
            { num: '05', title: 'Interior Styling', desc: 'Bespoke wardrobes, Spanish floor tiling setups, Grohe sanitary fits' },
            { num: '06', title: 'Final Handover', desc: 'Deep clean, regulatory society certifications, key celebration' },
          ].map((proc, idx) => (
            <div key={idx} className="relative z-10 text-center space-y-3 bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-10 h-10 bg-[#B8892D] text-white font-mono font-bold text-xs rounded-full flex items-center justify-center mx-auto shadow-md border-2 border-white">
                {proc.num}
              </div>
              <h4 className="font-serif text-sm font-bold text-[#1F2937]">{proc.title}</h4>
              <p className="text-[10px] text-[#6B7280] leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: Latest YouTube Videos */}
      <section className="bg-white py-24 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Media Channels</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                On-Site Video Guides & Tours
              </h2>
            </div>
            
            {/* Category filters */}
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              {videoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveVideoCat(cat)}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    activeVideoCat === cat 
                      ? 'bg-[#B8892D] text-white' 
                      : 'bg-[#F8F7F4] text-[#1F2937] hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredVideos.map((vid) => (
              <Link 
                key={vid.id}
                href={`/videos/${vid.id}`}
                className="group cursor-pointer bg-[#F8F7F4] rounded-xl overflow-hidden border border-[#E5E7EB] transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img 
                    src={vid.thumbnail} 
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-[#B8892D] text-white flex items-center justify-center shadow-lg transition-colors">
                      <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/75 text-[9px] font-mono text-white px-1.5 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>
                
                <div className="p-4 space-y-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#B8892D] block">
                    {vid.category}
                  </span>
                  <h4 className="text-xs font-serif font-bold text-[#1F2937] leading-snug line-clamp-2">
                    {vid.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Before & After Comparison */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Physical Transformations</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
            Observe Our Execution Precision
          </h2>
          <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
          <p className="text-xs sm:text-sm text-[#6B7280]">
            Drag the divider line to observe a raw, grey structure brick framework transform into a finished 1 Kanal Spanish Luxury Villa handover.
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        />
      </section>

      {/* SECTION 9: Client Testimonials */}
      <section className="bg-white py-24 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Testimonials & Reviews</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                Word From Our Homeowners
              </h2>
            </div>
            
            {/* Google review average highlight */}
            <div className="flex items-center gap-2 bg-[#F8F7F4] p-3 rounded-lg border border-slate-200">
              <div className="flex text-amber-500">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
              </div>
              <span className="text-xs font-bold text-[#1F2937]">4.9 out of 5</span>
              <span className="text-[10px] text-slate-400 font-mono">(120+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <Link 
                key={rev.id}
                href={`/reviews/${rev.id}`}
                className="bg-[#F8F7F4] p-6 rounded-2xl border border-[#E5E7EB] flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex text-amber-500">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />)}
                    </div>
                    {rev.isGoogleReview && (
                      <span className="text-[9px] font-mono text-[#3E7C59] bg-[#3E7C59]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                        ✓ Verified Google Review
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6B7280] italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-200/60">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-serif font-bold text-[#1F2937]">{rev.name}</h4>
                    <p className="text-[10px] text-slate-400">{rev.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Construction Cost Calculator */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Pricing Transparency</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
            Estimate Your Construction Cost
          </h2>
          <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
          <p className="text-xs sm:text-sm text-[#6B7280]">
            Use our interactive estimator to compute standard grey structure or turnkey luxury finish expenses in Pakistan.
          </p>
        </div>

        <CostCalculator />
      </section>

      {/* SECTION 11: Latest Blog Articles */}
      <section className="bg-white py-24 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Construction Guides</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
                Insights & Building Tips
              </h2>
            </div>
            <Link 
              href="/articles"
              className="text-xs font-mono uppercase tracking-wider text-[#B8892D] flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((art) => (
              <Link 
                key={art.id}
                href={`/articles/${art.id}`}
                className="bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E5E7EB] flex flex-col justify-between"
              >
                <div>
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="w-full aspect-[16/10] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-5 space-y-2.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span>{art.date}</span>
                      <span>{art.readTime}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#B8892D] font-bold block">
                      {art.category}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#1F2937] leading-snug line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <Link 
                    href={`/articles/${art.id}`}
                    className="text-xs font-mono uppercase tracking-wider text-[#B8892D] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: Instagram Gallery Masonry */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Social Feeds</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
            Our Instagram Portfolio
          </h2>
          <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
          ].map((url, idx) => (
            <Link 
              key={idx}
              href={`/gallery/${idx}`}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-[#E5E7EB]"
            >
              <img 
                src={url} 
                alt="Instagram Feed"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {/* <Instagram className="w-8 h-8 text-white" /> */}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 13: FAQ Section */}
      <section className="bg-white py-24 border-y border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Answers & Guides</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1F2937]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#B8892D] mx-auto rounded-full mt-2"></div>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-[#F8F7F4] rounded-xl border border-[#E5E7EB] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1F2937]">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#B8892D] transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#6B7280] border-t border-slate-200/50 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 14: Luxury Call To Action */}
      <section className="bg-[#111111] text-[#F8F7F4] py-24 relative overflow-hidden text-center border-t border-[#B8892D]/20">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
            alt="Villa background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Start Building Today</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Book a free engineering site visit or sit with our award-winning designers at our DHA Phase 6 headquarters. Let’s blueprint your legacy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto bg-[#B8892D] hover:bg-[#C99A3C] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer border border-[#B8892D]"
            >
              Book Free consultation
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border border-white/20 hover:border-white/50 cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
