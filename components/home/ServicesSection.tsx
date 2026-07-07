import { SERVICES } from '@/app/data'
import { ArrowRight, Compass } from 'lucide-react'
import Link from 'next/link'

export default function ServicesSection() {
    return (
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
    )
}
