import { Award, Building, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

export default function CorporateProfileSection() {
  return (
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
  )
}
