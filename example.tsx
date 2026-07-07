import { useState, FormEvent } from 'react';
import { ARTICLES, FAQS, REVIEWS, CAREERS, VIDEOS } from '../data';
import { 
  Compass, MapPin, Mail, Phone, Calendar, Clock, Play, CheckCircle, 
  ChevronRight, ChevronDown, Upload, Briefcase, FileText, Send, Info, Star, ShieldAlert
} from 'lucide-react';
import { motion } from 'motion/react';
import CostCalculator from '../components/CostCalculator';

interface OtherPagesProps {
  pageName: string;
  subId?: string;
  onNavigate: (page: string, subId?: string) => void;
}

export default function OtherSubPages({ pageName, subId, onNavigate }: OtherPagesProps) {
  const [activeBlogId, setActiveBlogId] = useState<string | null>(subId || null);
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  // General form success signals
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Career form modal state
  const [activeCareerId, setActiveCareerId] = useState<string | null>(null);

  const handleFormSubmit = (e: FormEvent, type: string) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      if (type === 'contact') {
        setSuccessMsg('Your message was received! Our lead engineer will contact you shortly.');
      } else if (type === 'consultation') {
        setSuccessMsg('Your consultation is booked! Check your phone/email for details.');
      } else if (type === 'career') {
        setSuccessMsg('Application submitted successfully! Our HR team will review PEC details.');
        setActiveCareerId(null);
      }
      setTimeout(() => setSuccessMsg(''), 4000);
    }, 2000);
  };

  // Render components based on the route
  if (pageName === 'gallery') {
    const galleryItems = [
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', cat: 'Architecture' },
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', cat: 'Interior' },
      { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', cat: 'Interior' },
      { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', cat: 'Architecture' },
      { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80', cat: 'Construction' },
      { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', cat: 'Construction' },
    ];
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Inspirational Media Gallery</h1>
          <p className="text-xs text-slate-300 mt-2">Observe our architectural outlines, interior styling finishes, and heavy foundation concrete works.</p>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-xs cursor-zoom-in">
              <img src={item.url} alt={item.cat} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono text-[#B8892D] uppercase tracking-wider">{item.cat}</span>
                <span className="font-serif text-sm font-bold text-white">ApnaGharPk Quality Build</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (pageName === 'videos') {
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">House Tours & Engineering Walkthroughs</h1>
          <p className="text-xs text-slate-300 mt-2">Watch our lead civil engineers audit concrete cylinder curing and showcase luxury Spanish home handovers.</p>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((vid) => (
            <div key={vid.id} className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <a href={`https://www.youtube.com/watch?v=${vid.youtubeId}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg cursor-pointer">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </a>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-mono text-[#B8892D] uppercase tracking-wider block font-bold">{vid.category}</span>
                <h3 className="font-serif text-sm font-bold text-[#1F2937] leading-snug">{vid.title}</h3>
                <p className="text-[10px] text-slate-400 font-mono">Duration: {vid.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (pageName === 'testimonials') {
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Our Homeowner Stories</h1>
          <p className="text-xs text-slate-300 mt-2">Hear directly from retired military personnel, doctors, and overseas Pakistanis who built with ApnaGharPk.</p>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Verified Google rating overview */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] max-w-xl mx-auto text-center space-y-3 shadow-xs">
            <h4 className="font-serif text-lg font-bold">ApnaGharPk Client Trust</h4>
            <div className="flex justify-center text-amber-500 gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-amber-500 text-amber-500" />)}
            </div>
            <p className="text-xs text-[#6B7280]">
              Overall rating <strong>4.9 out of 5 stars</strong> based on 120+ verified Google Reviews from clients across Pakistan and overseas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex text-amber-500">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />)}
                    </div>
                    {rev.isGoogleReview && <span className="text-[9px] text-[#3E7C59] bg-[#3E7C59]/10 px-2 rounded-full">✓ Verified Google</span>}
                  </div>
                  <p className="text-xs text-[#6B7280] italic leading-relaxed">"{rev.comment}"</p>
                </div>
                <div className="flex items-center gap-3.5 pt-4 mt-6 border-t border-slate-200/60">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="text-xs font-serif font-bold text-[#1F2937]">{rev.name}</h5>
                    <p className="text-[9px] text-slate-400">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (pageName === 'blog') {
    const activeArticle = ARTICLES.find(a => a.id === activeBlogId);

    if (activeArticle) {
      return (
        <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
          {/* BLOG DETAILS VIEW */}
          <section className="bg-[#111111] text-[#F8F7F4] py-16 relative overflow-hidden border-b border-[#B8892D]/20">
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
              <button 
                onClick={() => setActiveBlogId(null)}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#B8892D] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 cursor-pointer"
              >
                Back to All Articles
              </button>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#B8892D] uppercase tracking-widest">{activeArticle.category}</span>
                <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight leading-tight">{activeArticle.title}</h1>
                <p className="text-[11px] font-mono text-slate-300">Published on {activeArticle.date} • {activeArticle.readTime}</p>
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 bg-white rounded-2xl border border-slate-200 shadow-xs mt-8">
            <img src={activeArticle.image} alt={activeArticle.title} className="w-full aspect-[16/9] object-cover rounded-xl" referrerPolicy="no-referrer" />
            
            <div className="prose max-w-none text-xs sm:text-sm text-[#6B7280] leading-relaxed space-y-6">
              {activeArticle.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('###')) {
                  return (
                    <h4 key={idx} className="font-serif text-lg font-bold text-[#1F2937] pt-2 border-b border-slate-100 pb-1">
                      {paragraph.replace('###', '').trim()}
                    </h4>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
              <span>Author: <strong>{activeArticle.author}</strong></span>
              <div className="flex gap-1.5 font-mono text-[9px]">
                {activeArticle.tags.map((tag, i) => (
                  <span key={i} className="bg-[#F8F7F4] text-[#1F2937] px-2.5 py-1 rounded border border-slate-200">#{tag}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }

    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Construction & Investment Guide</h1>
          <p className="text-xs text-slate-300 mt-2">Equip yourself with actual raw material costs, society bylaws, and space planning frameworks in Pakistan.</p>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <div key={art.id} className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <img src={art.image} alt={art.title} className="w-full aspect-[16/10] object-cover" referrerPolicy="no-referrer" />
                <div className="p-5 space-y-3">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#B8892D] uppercase tracking-wider block font-bold">{art.category}</span>
                  <h3 className="font-serif text-base font-bold text-[#1F2937] leading-snug line-clamp-2">{art.title}</h3>
                  <p className="text-xs text-[#6B7280] line-clamp-2">{art.excerpt}</p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2">
                <button onClick={() => setActiveBlogId(art.id)} className="text-xs font-mono uppercase text-[#B8892D] font-bold hover:underline flex items-center gap-1 cursor-pointer">
                  Read Full Article <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (pageName === 'careers') {
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Build Your Professional Legacy</h1>
          <p className="text-xs text-slate-300 mt-2">Join ApnaGharPk to direct and visualize award-winning luxury housing structures in DHA and Bahria societies.</p>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-[#B8892D] uppercase tracking-wider block font-bold">Open Openings</span>
            <h2 className="font-serif text-2xl font-bold">Direct Civil & Design Roles</h2>
          </div>

          <div className="space-y-6">
            {CAREERS.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-slate-100 pb-3 gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#B8892D] bg-[#B8892D]/10 px-2.5 py-1 rounded-md border border-[#B8892D]/20">{job.department}</span>
                    <h3 className="font-serif text-lg font-bold text-[#1F2937] mt-2">{job.title}</h3>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs text-[#6B7280] space-y-1">
                    <p className="font-bold text-[#1F2937]">{job.salaryRange}</p>
                    <p>{job.type} • {job.location}</p>
                  </div>
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed">{job.description}</p>
                
                <div className="space-y-2 bg-[#F8F7F4] p-4 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-mono uppercase text-[#111111] font-bold">Role Prerequisites</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#6B7280]">
                    {job.requirements.map((req, i) => <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-[#3E7C59]">✓</span>
                      <span>{req}</span>
                    </li>)}
                  </ul>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setActiveCareerId(job.id)}
                    className="bg-[#B8892D] hover:bg-[#C99A3C] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Application Form
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Job Application Modal/Drawer Overlay */}
        {activeCareerId && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-2xl border border-slate-200 overflow-hidden shadow-2xl space-y-6 p-6">
              <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                <h4 className="font-serif font-bold text-base">Submit Application Form</h4>
                <button onClick={() => setActiveCareerId(null)} className="text-slate-400 hover:text-slate-600 text-lg cursor-pointer">×</button>
              </div>

              <form onSubmit={(e) => handleFormSubmit(e, 'career')} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Full Name</label>
                    <input type="text" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-[#B8892D]" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-[#6B7280] uppercase">PEC registration # (Engineers)</label>
                    <input type="text" placeholder="Civil/Architect" className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-[#B8892D]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Portfolio URL / Drive link</label>
                  <input type="url" placeholder="Behance, drive folders, etc." className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2 text-xs focus:outline-none focus:border-[#B8892D]" />
                </div>

                <div className="border border-dashed border-slate-300 rounded-xl p-5 text-center bg-[#F8F7F4] space-y-1">
                  <Upload className="w-6 h-6 mx-auto text-slate-400" />
                  <p className="text-xs font-semibold text-slate-600">Drag & Drop Resume PDF</p>
                  <p className="text-[10px] text-slate-400">Supports PDF / Word formats up to 5MB</p>
                </div>

                <div className="flex gap-2 justify-end pt-4">
                  <button type="button" onClick={() => setActiveCareerId(null)} className="bg-[#F8F7F4] border border-slate-200 text-[#1F2937] py-2 px-4 rounded-lg text-xs font-semibold cursor-pointer">Cancel</button>
                  <button type="submit" className="bg-[#B8892D] text-white py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer">Submit Application</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (pageName === 'contact') {
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Get In Touch</h1>
          <p className="text-xs text-slate-300 mt-2">Book a free physical site visit or meet our lead architects at our CCA Phase 6 Lahore offices.</p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Office parameters */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs font-mono text-[#B8892D] uppercase tracking-wider block font-bold">Office Locator</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">Corporate Offices & Business Enclaves</h2>
            
            <div className="space-y-4 text-xs">
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-[#B8892D] mt-0.5 shrink-0" />
                <div className="space-y-1 font-sans">
                  <h4 className="font-serif font-bold text-sm">CCA Headquarters Office, Lahore</h4>
                  <p className="text-slate-500">Block CCA, Phase 6, DHA Lahore, Pakistan</p>
                  <p className="text-[#B8892D] font-mono text-[10px] uppercase">Corporate HQ & Designing Studio</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-[#B8892D] mt-0.5 shrink-0" />
                <div className="space-y-1 font-sans">
                  <h4 className="font-serif font-bold text-sm">Bahria Town Regional Office, Islamabad</h4>
                  <p className="text-slate-500">Phase 8, Main Expressway, Bahria Town, Islamabad, Pakistan</p>
                  <p className="text-[#B8892D] font-mono text-[10px] uppercase">Northern Region Projects Office</p>
                </div>
              </div>
            </div>

            {/* Direct stats */}
            <div className="bg-[#111111] text-white p-5 rounded-xl border border-[#B8892D]/30 space-y-3 text-xs font-mono">
              <h4 className="font-serif font-bold text-slate-200">Engineering Helpdesk</h4>
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>Direct Mobile:</span>
                <span className="font-bold text-[#B8892D]">+92 (300) 123-4567</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-1">
                <span>WhatsApp Desk:</span>
                <span className="font-bold text-[#3E7C59]">+92 (311) 987-6543</span>
              </div>
              <div className="flex justify-between">
                <span>Working Hours:</span>
                <span className="font-bold text-slate-300">Mon - Sat: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold">Leave A Message</h3>
            <p className="text-xs text-[#6B7280]">Our lead structural surveyor and real estate consultant will compile a detailed preliminary report for your plot size.</p>

            {successMsg && (
              <div className="bg-[#3E7C59]/10 border border-[#3E7C59] p-4 rounded-xl text-xs text-[#3E7C59] font-bold">
                {successMsg}
              </div>
            )}

            <form onSubmit={(e) => handleFormSubmit(e, 'contact')} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Your Name</label>
                  <input type="text" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]" />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-[#6B7280] uppercase">WhatsApp Number</label>
                  <input type="tel" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Plot Location / Society</label>
                  <input type="text" placeholder="e.g. DHA Phase 6 Lahore, Sector G-13" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]" />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Desired Plot Area</label>
                  <select className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none">
                    <option>5 Marla</option>
                    <option>10 Marla</option>
                    <option>1 Kanal</option>
                    <option>2 Kanal</option>
                    <option>Commercial Plaza</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Describe Your Requirements</label>
                <textarea rows={4} placeholder="Mention Grey structure build, turnkey finishes, architectural design maps approvals etc." className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#B8892D]"></textarea>
              </div>

              <button type="submit" disabled={submitting} className="bg-[#B8892D] hover:bg-[#C99A3C] text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                {submitting ? 'Submitting Details...' : 'Send Message'}
              </button>
            </form>
          </div>

        </section>

        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/60 mt-12 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Client Support Desk</span>
            <h2 className="font-serif text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-[#B8892D] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div key={faq.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full py-4.5 px-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-sm font-bold text-[#1F2937] pr-4">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#B8892D] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-[#6B7280] leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  if (pageName === 'calculator') {
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Construction Cost Calculator</h1>
          <p className="text-xs text-slate-300 mt-2">Get an instant estimation for your Grey Structure or Turnkey construction project based on DHA/Bahria standards.</p>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <CostCalculator />
        </section>
      </div>
    );
  }

  if (pageName === 'book-consultation') {
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] pb-24 font-sans">
        <section className="bg-[#111111] text-[#F8F7F4] py-16 text-center border-b border-[#B8892D]/20">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Book Free Construction Consultation</h1>
          <p className="text-xs text-slate-300 mt-2">Block 1 hour with our Lead Architect and Structural Engineer. Walk out with a preliminary map sketch and raw material quote.</p>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-2xl border border-slate-200 shadow-md mt-12 space-y-6">
          <div className="text-center space-y-1.5 border-b border-slate-100 pb-4">
            <h4 className="font-serif text-lg font-bold text-[#1F2937]">Select Consultation parameters</h4>
            <p className="text-xs text-[#6B7280]">Our calendar is fully integrated with structural engineer site surveyors.</p>
          </div>

          {successMsg && (
            <div className="bg-[#3E7C59]/15 border border-[#3E7C59] p-4 rounded-xl text-xs text-[#3E7C59] font-bold">
              {successMsg}
            </div>
          )}

          <form onSubmit={(e) => handleFormSubmit(e, 'consultation')} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">First Name</label>
                <input type="text" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">WhatsApp Number</label>
                <input type="tel" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Select Meeting Date</label>
                <input type="date" required className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none" />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Select Meeting Slot</label>
                <select className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none">
                  <option>Morning (11:00 AM - 12:00 PM)</option>
                  <option>Afternoon (02:00 PM - 03:00 PM)</option>
                  <option>Evening (04:30 PM - 05:30 PM)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Preferred Mode</label>
                <select className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none">
                  <option>Physical Meeting (Lahore HQ)</option>
                  <option>Physical Meeting (Islamabad Office)</option>
                  <option>Zoom Video Call (For Overseas Clients)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono text-[#6B7280] uppercase">Your plot parameters / notes</label>
              <textarea rows={3} placeholder="Please mention your plot number, DHA phase, and whether you have a pre-drawn map layout ready." className="w-full bg-[#F8F7F4] border border-slate-200 rounded-lg p-2.5 text-xs focus:outline-none"></textarea>
            </div>

            <div className="p-4 bg-[#F8F7F4] rounded-xl border border-slate-150 flex items-start gap-3 text-[10px] text-[#6B7280] leading-normal">
              <Star className="w-4 h-4 text-[#B8892D] shrink-0" />
              <span>
                <strong>Consultation Deliverable:</strong> When physically attending our studio, please bring soft/hard copies of your plot allocation file or society map guidelines. Our designers will render a preliminary layout during the slot.
              </span>
            </div>

            <div className="text-center pt-2">
              <button type="submit" disabled={submitting} className="bg-[#B8892D] hover:bg-[#C99A3C] text-white px-10 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#B8892D]">
                {submitting ? 'Confirming slot...' : 'Confirm Meeting Slot'}
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }

  // Fallback for legal policies
  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] py-24 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold border-b border-slate-200 pb-3 uppercase text-[#111111]">
          {pageName === 'privacy-policy' ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>
        <p className="text-xs text-[#6B7280] font-mono">Effective June 28, 2026</p>
        
        <div className="text-xs text-[#6B7280] space-y-4 leading-relaxed">
          <p>
            Welcome to ApnaGharPk. We prioritize protecting your personal data, and engineering details shared with our site team. This document sets out how our civil office uses cookies, contact lists, and architectural map blueprints uploaded to our servers.
          </p>
          <h4 className="font-serif font-bold text-sm text-[#1F2937]">1. Information Collection & Invoicing transparency</h4>
          <p>
            We collect WhatsApp contact numbers, plot coordinates, and budget expectations solely to execute raw concrete calculation reports and society code submission layouts. We never sell or share coordinates.
          </p>
          <h4 className="font-serif font-bold text-sm text-[#1F2937]">2. Structural Ownership of blueprints</h4>
          <p>
            All custom 3D elevations and spatial maps created by ApnaGharPk design team remain intellectual property of ApnaGharPk unless complete turnkey construction contracts are signed and cleared.
          </p>
          <h4 className="font-serif font-bold text-sm text-[#1F2937]">3. Liability on Market Material rate index</h4>
          <p>
            While our cost calculator is updated dynamically based on real-time raw materials index, final legal quotes are subject to certified stamp contracts. Prices are locked only upon payment clearance.
          </p>
        </div>
      </div>
    </div>
  );
}




export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  longDescription: string;
  benefits: string[];
  deliverables: string[];
}

export interface ProjectTimelineEvent {
  phase: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'pending';
  details: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  area: string; // e.g. "1 Kanal", "10 Marla"
  type: string; // e.g. "Residential Construction", "Grey Structure"
  status: 'Completed' | 'In Progress' | 'Planning';
  completionDate: string;
  image: string;
  droneImage: string;
  timeline: ProjectTimelineEvent[];
  progressPercent: number;
  materials: string[];
  clientReview?: string;
  clientName?: string;
  youtubeUrl?: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
}

export interface Property {
  id: string;
  title: string;
  price: string; // in PKR e.g. "7.5 Crore"
  numericPrice: number; // For mortgage calculator (e.g. 75000000)
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string; // e.g. "1 Kanal", "10 Marla"
  image: string;
  gallery: string[];
  walkthroughUrl?: string;
  amenities: string[];
  floorPlan: string; // Image/sketch placeholder
  description: string;
  builderName: string;
}

export interface Video {
  id: string;
  title: string;
  category: 'House Tours' | 'Construction Tips' | 'Client Reviews' | 'Project Updates';
  youtubeId: string;
  duration: string;
  thumbnail: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  isVideo?: boolean;
  videoThumbnail?: string;
  isGoogleReview?: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: 'Construction Tips' | 'Design Ideas' | 'Material Guides' | 'Budget Planning';
  excerpt: string;
  content: string; // Markdown or simple paragraphs
  readTime: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Construction' | 'Architecture' | 'Real Estate' | 'Pricing';
}

export interface Career {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  location: string;
  salaryRange: string;
  description: string;
  requirements: string[];
}
