import { SERVICES } from '@/app/data'
import { ServiceSidebarProps } from '@/app/types'
import { ChevronRight, Sparkles } from 'lucide-react'

export default function ServiceSidebar({activeServiceId, setActiveServiceId, onNavigate}: ServiceSidebarProps) {
    return (
        <div className="lg:col-span-4 space-y-2">
            <span className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-3">
                Toggle Services Details
            </span>
            <div className="space-y-1 bg-[#F8F7F4] p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                {SERVICES.map((srv) => (
                    <button
                        key={srv.id}
                        onClick={() => setActiveServiceId(srv.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${activeServiceId === srv.id
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
    )
}
