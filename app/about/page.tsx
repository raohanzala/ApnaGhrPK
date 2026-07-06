import { Compass, ShieldCheck, Award, HardHat, Building, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
      {/* Premium Header Banner */}
      <section className="bg-[#111111] text-[#F8F7F4] py-20 relative overflow-hidden border-b border-[#B8892D]/20">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
            alt="About Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D]">The ApnaGharPk Heritage</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Engineering Ultimate Legacies
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to redefine luxury architecture, structural resilience, and financial integrity in Pakistan's real estate sector.
          </p>
        </div>
      </section>

      {/* Corporate Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Firm Profile</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937]">
            Delivering Absolute Engineering Security Across Pakistan
          </h2>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            For over a decade, ApnaGharPk has stood as a beacon of unmatched quality in residential construction, interior artistry, and real estate development. We manage luxury villa construction, turnkey projects, and commercial plaza developments with extreme engineering standards.
          </p>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            Unlike traditional contractors, we operate with direct manufacturer contracts, strictly certified structural engineers, and advanced client portal technology. Our clients, both locally and residing overseas in the USA, UK, and UAE, receive transparent structural updates daily, ensuring complete peace of mind.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#B8892D]" />
              <span>DHA Certified Contractor</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#B8892D]" />
              <span>PEC Registered Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-[#B8892D]" />
              <span>500+ Luxury Homes Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#B8892D]" />
              <span>100% Secure Investment Assets</span>
            </div>
          </div>
        </div>

        {/* Brand visual showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=1200&q=80" 
            alt="Engineers reviewing blueprints"
            className="w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-[#111111]/90 backdrop-blur-md p-5 rounded-xl border border-slate-600/50 text-white space-y-2">
            <h4 className="font-serif font-bold text-sm">Certified Structural Standards</h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Every foundation we lay is tested via concrete cylinder crush tests, compaction soil evaluation, and grade-60 structural steel certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Founder & Executive Council */}
      <section className="bg-white py-20 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Executive Council</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937]">
              Meet Our Visionaries & Structural Leaders
            </h2>
            <div className="w-12 h-1 bg-[#B8892D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                name: 'Engr. Haris Mumtaz',
                role: 'Founder & Chief Engineering Officer',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
                bio: 'PEC Registered civil engineer with 15+ years overseeing luxury residential villas in DHA Lahore & Bahria Town Islamabad.'
              },
              {
                name: 'Arch. Fatima Al-Vi',
                role: 'Senior Architectural Designer',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
                bio: 'Award-winning architect specializing in Modern Spanish, Moroccan, and high-contrast Contemporary villas.'
              },
              {
                name: 'Noman Shah',
                role: 'Head of Quality & Supply Chain',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
                bio: 'Oversees strict structural supply contracts, ensuring raw material grade authenticity and zero commission inflating.'
              }
            ].map((exec, idx) => (
              <div key={idx} className="bg-[#F8F7F4] p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <img 
                  src={exec.img} 
                  alt={exec.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#B8892D]"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#1F2937]">{exec.name}</h4>
                  <p className="text-xs font-mono text-[#B8892D]">{exec.role}</p>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {exec.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Society Bylaw Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] font-bold">Bylaw Approvals</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937]">
            Approved & Certified Construction Society Standards
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280]">
            We build and submit design blueprints strictly complying with the municipal rules of Pakistan's premier enclaves.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {[
            { name: 'DHA Lahore', details: 'Full LDA & DHA certified contractor' },
            { name: 'Bahria Town', details: 'Phase 1-8 compliant engineer registration' },
            { name: 'CDA Islamabad', details: 'Sectors approved planning blueprints' },
            { name: 'DHA Karachi', details: 'Clifton & Phase 1-8 structural compliance' },
            { name: 'Emaar Canyon', details: 'High-end structural finishes certification' },
          ].map((soc, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-8 h-8 bg-[#B8892D]/10 text-[#B8892D] rounded-full flex items-center justify-center mx-auto text-xs font-bold font-mono">
                {idx + 1}
              </div>
              <h4 className="text-xs font-serif font-bold text-[#1F2937]">{soc.name}</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">{soc.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
