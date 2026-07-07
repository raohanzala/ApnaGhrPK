import { ArrowRight, Compass } from 'lucide-react'

interface ServiceCardProps {
    activeServiceId: string;
    id: string;
    title: string;
    description: string;
}

export default function ServiceCard({ id, title, description, activeServiceId }: ServiceCardProps) {
    return (
        <>
            <div className="space-y-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${activeServiceId === id
                    ? 'bg-[#B8892D]/10 border-[#B8892D]/30 text-[#B8892D]'
                    : 'bg-[#F8F7F4] border-slate-100 text-[#B8892D] group-hover:bg-[#B8892D]/10'
                    }`}>
                    <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#1F2937] group-hover:text-[#B8892D] transition-colors">
                    {title}
                </h3>
                <p className="text-[11px] text-[#6B7280] leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#B8892D] font-bold">
                View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
        </>
    )
}
