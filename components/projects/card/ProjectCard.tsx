import { Building, MapPin } from 'lucide-react'
import StatusBadge from '../ui/StatusBadge'
import { ProjectCardProps } from '@/app/types'

export default function ProjectCard({ project, setActiveProjectId}: ProjectCardProps) {
    return (
        <div
            key={project.id}
            onClick={() => setActiveProjectId(project.id)}
            className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
        >
            <div>
                <div className="relative overflow-hidden aspect-[16/11]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                    />
                    <StatusBadge project={project}/>
                </div>

                <div className="p-5 space-y-3">
                    <span className="text-[10px] font-mono uppercase text-[#B8892D] block">
                        {project.type}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1F2937] group-hover:text-[#B8892D] transition-colors line-clamp-1">
                        {project.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.location}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Area: {project.area}</span>
                    </div>
                </div>
            </div>

            <div className="px-5 pb-5 pt-2">
                <button
                    className="w-full bg-[#111111] hover:bg-[#B8892D] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                    View Full Case Study
                </button>
            </div>
        </div>
    )
}
