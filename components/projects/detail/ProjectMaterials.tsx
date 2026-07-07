import { ProjectProp } from '@/app/types'
import { ShieldAlert } from 'lucide-react'

export default function ProjectMaterials({project}: ProjectProp) {
    return (
        <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#1F2937] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#B8892D]" /> Core Materials Used & Quality Checklist
            </h3>
            <p className="text-xs text-[#6B7280]">
                We maintain zero material degradation. Below are the certified raw material brands specified for this build:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {project.materials.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#1F2937] bg-[#F8F7F4] p-3 rounded-lg border border-slate-100">
                        <span className="text-[#3E7C59] font-bold">✓</span>
                        <span>{mat}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
