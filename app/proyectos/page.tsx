import { projects } from '@/app/data/projects'
import { ProjectCard } from '@/components/modules/project-card';

const titles = "text-6xl font-bold text-center";

export default function ProjectsPage() {
  return (
    <section className="p-8">
      <h1 className={titles + ' mb-20 mt-16'}>Proyectos</h1>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </section>
  );
}
