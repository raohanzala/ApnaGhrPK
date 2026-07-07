import { Award, BadgeCheck, Clock, Cpu, HardHat, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseUsSection() {
    return (
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
    )
}
