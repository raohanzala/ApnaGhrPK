import { ProjectProp } from '@/app/types'

export default function ProjectParameters({project}: ProjectProp) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#1F2937] border-b border-slate-200 pb-2">
                Project Parameters
            </h4>
            <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Structure Type:</span>
                    <span className="font-bold text-[#1F2937]">{project.type}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Covered Area:</span>
                    <span className="font-bold text-[#1F2937]">{project.area}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Current Phase:</span>
                    <span className="font-bold text-[#3E7C59]">{project.status}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#6B7280]">Completion Date:</span>
                    <span className="font-bold text-[#1F2937]">{project.completionDate}</span>
                </div>
            </div>
        </div>
    )
}
