import { ProjectGridProps } from '@/app/types'
import ProjectCard from '../card/ProjectCard'

export default function ProjectGrid({ projects, setActiveProjectId }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((proj) => (
        <ProjectCard key={proj.id} proj={proj} setActiveProjectId={setActiveProjectId} />
      ))}
    </div>
  )
}
