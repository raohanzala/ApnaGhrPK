export default function ConstructionProcess() {
    return (
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
    )
}
