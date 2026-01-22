import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <div>
      {projects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-neutral-400">
          This section is under development :)
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
