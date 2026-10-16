import type { Project } from '../../types/portfolio';
import Section from '../layout/Section';
import ProjectCard from '../ui/ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projetos" title="Projetos">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </Section>
  );
}

export default ProjectsSection;