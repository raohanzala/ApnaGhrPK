import ProjectParameters from './ProjectParameters'
import ProjectTimeline from './ProjectTimeline'
import ProjectReview from './ProjectReview'
import { ProjectProp } from '@/app/types'

export default function ProjectSidebar({project}: ProjectProp) {
    return (
        <>
            < ProjectParameters project={project} />
            < ProjectTimeline project={project} />
            < ProjectReview project={project} />
        </>
    )
}
