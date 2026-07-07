import BeforeAfterSlider from '@/components/projects/shared/BeforeAfterSlider'
import ProjectGallery from './ProjectGallery'
import ProjectMaterials from './ProjectMaterials'
import ProjectVideoSection from './ProjectVideoSection'
import { ProjectProp } from '@/app/types'
import { ActivityIcon } from 'lucide-react'

export default function ProjectMediaSection({project}: ProjectProp) {
    return (
        <div className="lg:col-span-8 space-y-12">

            {/* Before-and-After Slider Comparison */}
            <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] flex items-center gap-2">
                    <ActivityIcon className="w-5 h-5 text-[#B8892D]" /> Before & After Structural Comparison
                </h3>
                <p className="text-xs text-[#6B7280]">
                    Observe our exact execution progress, from raw grey structure foundation phase to completed high-end turnkey luxury villa.
                </p>
                <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                />
            </div>
            <ProjectGallery project={project} />
            <ProjectMaterials project={project} />
            <ProjectVideoSection project={project} />
        </div>
    )
}
