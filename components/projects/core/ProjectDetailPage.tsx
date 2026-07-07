import { ProjectDetailProps } from '@/app/types'
import ProjectHero from '../detail/ProjectHero'
import ProjectSidebar from '../detail/ProjectSidebar'
import ProjectMediaSection from '../detail/ProjectMediaSection'

export default function ProjectDetailPage({project, onBack}: ProjectDetailProps) {
    return (
        <div className="bg-[#F8F7F4] min-h-screen text-[#515963] font-sans pb-24">
            <ProjectHero project={project} onBack={onBack}/>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <ProjectMediaSection project={project}/>
                <div className="lg:col-span-4 space-y-8">
                    <ProjectSidebar project={project}/>
                </div>
            </section>
        </div>
    )
}
