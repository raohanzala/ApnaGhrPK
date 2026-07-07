import { ProjectProp } from '@/app/types'
import { Play } from 'lucide-react'

export default function ProjectVideoSection({project}: ProjectProp) {
    return (
        <>
            {project.youtubeUrl && (
                <div className="space-y-4">
                    <h3 className="font-serif text-xl font-bold text-[#1F2937] flex items-center gap-2">
                        <Play className="w-5 h-5 text-[#B8892D]" /> Site Progress & Video Tour Walkthrough
                    </h3>
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end p-6 group">
                        <div className="absolute inset-0 opacity-85">
                            <img
                                src={project.image}
                                alt="video thumbnail"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <a
                                href={project.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
                            >
                                <Play className="w-6 h-6 fill-white text-white ml-1" />
                            </a>
                        </div>
                        <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl text-white max-w-md border border-white/10">
                            <h5 className="font-serif text-xs font-bold uppercase text-[#B8892D] tracking-wider">YouTube Walkthrough</h5>
                            <p className="text-[11px] text-slate-300 mt-1">
                                See our site engineers and interior specialists review building foundations and premium wood fittings.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
