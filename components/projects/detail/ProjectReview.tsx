import { ProjectProp } from '@/app/types';
import { Star } from 'lucide-react'

export default function ProjectReview({project}: ProjectProp) {
    return (
        <>
            {project.clientReview && (
                <div className="bg-[#F8F7F4] p-6 rounded-2xl border border-slate-200 space-y-4">
                    <div className="flex text-amber-500">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                    </div>
                    <p className="text-xs text-[#6B7280] italic leading-relaxed">
                        "{project.clientReview}"
                    </p>
                    <div className="flex items-center gap-3 border-t border-slate-200/60 pt-3">
                        <div className="w-9 h-9 rounded-full bg-[#111111] text-[#F8F7F4] font-bold text-xs flex items-center justify-center font-mono border border-slate-700">
                            KM
                        </div>
                        <div>
                            <h5 className="text-xs font-serif font-bold text-[#1F2937]">{project.clientName}</h5>
                            <p className="text-[9px] text-slate-400 font-mono">Verified Homeowner</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
