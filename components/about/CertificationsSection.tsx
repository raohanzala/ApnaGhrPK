export default function CertificationsSection() {
  return (
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
  )
}
