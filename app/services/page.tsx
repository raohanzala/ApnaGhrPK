import { useState, useEffect, FormEvent } from 'react';
import { SERVICES } from '../data';
import { Compass, CheckCircle2, ChevronRight, FileText, ArrowRight, HelpCircle, Phone, Sparkles } from 'lucide-react';

interface ServicesProps {
  selectedServiceId?: string;
  onNavigate: (page: string, subId?: string) => void;
}

export default function Services({ selectedServiceId, onNavigate }: ServicesProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // If a subId is passed (e.g. from footer click), set it as the active service details
  useEffect(() => {
    if (selectedServiceId) {
      setActiveServiceId(selectedServiceId);
      // Scroll to the detail section
      const element = document.getElementById('service-detail-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceId]);

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  const handleQuoteSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
      
      {/* Premium Header Banner */}
      <section className="bg-[#111111] text-[#F8F7F4] py-20 relative overflow-hidden border-b border-[#B8892D]/20">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
            alt="Services Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D]">Our Specialized Offerings</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Comprehensive Building & Real Estate Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From the initial foundational excavation to pristine, A-grade turnkey luxury finishes, ApnaGharPk is your trusted lifelong structural partner.
          </p>
        </div>
      </section>

      {/* Directory of Services cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">What We Do</span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1F2937]">
            Core Services Portfolio
          </h2>
          <div className="w-12 h-1 bg-[#B8892D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => {
                setActiveServiceId(srv.id);
                document.getElementById('service-detail-anchor')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group h-64 ${
                activeServiceId === srv.id
                  ? 'bg-white border-2 border-[#B8892D] shadow-md'
                  : 'bg-white border-[#E5E7EB] hover:bg-slate-50 hover:shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                  activeServiceId === srv.id
                    ? 'bg-[#B8892D]/10 border-[#B8892D]/30 text-[#B8892D]'
                    : 'bg-[#F8F7F4] border-slate-100 text-[#B8892D] group-hover:bg-[#B8892D]/10'
                }`}>
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#1F2937] group-hover:text-[#B8892D] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-[11px] text-[#6B7280] leading-relaxed line-clamp-3">
                  {srv.description}
                </p>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#B8892D] font-bold">
                View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE DETAILS PAGE (Drawn dynamically based on activeServiceId) */}
      <section id="service-detail-anchor" className="bg-white py-24 border-t border-[#E5E7EB] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Service Details</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937]">
              Deep Dive: {activeService.title}
            </h2>
            <div className="w-12 h-1 bg-[#B8892D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Quick-Toggles */}
            <div className="lg:col-span-4 space-y-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-3">
                Toggle Services Details
              </span>
              <div className="space-y-1 bg-[#F8F7F4] p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                {SERVICES.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setActiveServiceId(srv.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                      activeServiceId === srv.id
                        ? 'bg-[#B8892D] text-white font-bold shadow-xs'
                        : 'text-[#1F2937] hover:bg-slate-200/60 hover:text-[#B8892D]'
                    }`}
                  >
                    <span>{srv.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
              
              {/* Trust Callout */}
              <div className="bg-[#111111] text-[#F8F7F4] p-6 rounded-2xl border border-slate-700 space-y-4">
                <h4 className="font-serif font-bold text-sm text-[#B8892D] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Structural Integrity Assured
                </h4>
                <p className="text-[10px] text-slate-300 leading-relaxed">
                  Every project constructed under ApnaGharPk undergoes third-party lab compression cylinder tests, soil load evaluation, and strict 10-year concrete foundation warranties.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-[#B8892D] hover:bg-[#C99A3C] text-white py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Locate Our Offices
                </button>
              </div>
            </div>

            {/* Dynamic Content Panel */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-[#F8F7F4] text-[#B8892D] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded border border-slate-200">
                  Certified Building Code Compliance
                </span>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {activeService.longDescription}
                </p>
              </div>

              {/* Benefits & Deliverables layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                
                {/* Benefits List */}
                <div className="space-y-4 bg-[#F8F7F4] p-6 rounded-2xl border border-slate-200/80">
                  <h4 className="font-serif font-bold text-sm text-[#111111] border-b border-slate-200 pb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#3E7C59]" /> Client Advantages
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.benefits.map((ben, idx) => (
                      <li key={idx} className="text-xs text-[#6B7280] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#3E7C59] mt-0.5 font-bold">✓</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-4 bg-[#F8F7F4] p-6 rounded-2xl border border-slate-200/80">
                  <h4 className="font-serif font-bold text-sm text-[#111111] border-b border-slate-200 pb-2 flex items-center gap-1.5">
                    <FileText className="w-4.5 h-4.5 text-[#B8892D]" /> Deliverables & Checklists
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.deliverables.map((del, idx) => (
                      <li key={idx} className="text-xs text-[#6B7280] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#B8892D] mt-0.5 font-bold">✦</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Consultation Booking Widget inside service detail */}
              <div className="border border-slate-200 rounded-2xl p-6 bg-[#F8F7F4]/50">
                <h4 className="font-serif font-bold text-base text-[#1F2937] mb-2">
                  Request Custom Quote for {activeService.title}
                </h4>
                <p className="text-xs text-[#6B7280] mb-4">
                  Fill in your details below and an engineering manager will contact you within 2 business hours with a preliminary pricing list.
                </p>
                <form onSubmit={handleQuoteSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B8892D]"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp / Phone"
                    required
                    className="bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B8892D]"
                  />
                  <button
                    type="submit"
                    className={`text-xs font-semibold uppercase py-2 px-4 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-colors ${
                      formSubmitted
                        ? 'bg-[#3E7C59] text-white'
                        : 'bg-[#B8892D] hover:bg-[#C99A3C] text-white shadow-xs'
                    }`}
                  >
                    {formSubmitted ? 'Request Sent!' : 'Request Price List'}
                  </button>
                </form>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
