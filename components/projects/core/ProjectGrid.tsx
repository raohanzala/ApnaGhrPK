import { ProjectGridProps } from '@/app/types'
import ProjectCard from '../card/ProjectCard'

export default function ProjectGrid({ projects, setActiveProjectId }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} setActiveProjectId={setActiveProjectId} />
      ))}
    </div>
  )
}
