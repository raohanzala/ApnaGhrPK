import { ProjectDetailProps } from '@/app/types'
import { ChevronLeft, MapPin } from 'lucide-react'
import React from 'react'

export default function ProjectHero({project, onBack}: ProjectDetailProps) {
    return (
        <section className="bg-[#111111] text-[#F8F7F4] py-16 relative overflow-hidden border-b border-[#B8892D]/20">
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src={project.droneImage || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#B8892D] hover:underline bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 cursor-pointer"
                >
                    <ChevronLeft className="w-4 h-4" /> Back to All Projects
                </button>
                <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] bg-[#B8892D]/10 border border-[#B8892D]/30 px-3 py-1 rounded">
                        {project.type}
                    </span>
                    <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-sm font-mono text-slate-300 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#B8892D]" /> {project.location}
                    </p>
                </div>
            </div>
        </section>
    )
}
