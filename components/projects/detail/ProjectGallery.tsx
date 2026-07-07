import { ProjectProp } from '@/app/types'

export default function ProjectGallery({project}: ProjectProp) {
    return (
        <div className="space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937]">
                Interior & Structural Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                        <img
                            src={imgUrl}
                            alt={`Project thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
