import { ProjectProp } from '@/app/types'
import { ActivityIcon } from 'lucide-react'

export default function ProjectTimeline({project}: ProjectProp) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#1F2937] border-b border-slate-200 pb-2 flex items-center gap-1.5">
                <ActivityIcon className="w-4.5 h-4.5 text-[#B8892D]" /> Execution Timeline & Milestones
            </h4>
            <div className="relative pl-6 space-y-5">
                {/* Visual side line */}
                <div className="absolute top-1 bottom-1 left-2.5 w-[2px] bg-slate-200"></div>

                {project.timeline.map((item, idx) => (
                    <div key={idx} className="relative space-y-1">
                        <div className={`absolute -left-[1.35rem] w-3 h-3 rounded-full border-2 border-white flex items-center justify-center ${item.status === 'completed'
                            ? 'bg-[#3E7C59]'
                            : item.status === 'in-progress'
                                ? 'bg-[#B8892D] animate-ping'
                                : 'bg-slate-300'
                            }`}></div>
                        {/* fallback dot if animate-ping overlays */}
                        <div className={`absolute -left-[1.35rem] w-3 h-3 rounded-full border-2 border-white ${item.status === 'completed'
                            ? 'bg-[#3E7C59]'
                            : item.status === 'in-progress'
                                ? 'bg-[#B8892D]'
                                : 'bg-slate-300'
                            }`}></div>

                        <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="font-bold text-[#1F2937] uppercase tracking-wide">{item.phase}</span>
                            <span className="text-[#6B7280]">{item.duration}</span>
                        </div>
                        <p className="text-[10px] text-[#6B7280] leading-normal">{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
