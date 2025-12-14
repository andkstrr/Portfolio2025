import { Github, Lock } from "lucide-react";
import Badge from "./Badge";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col h-full">
      <div className="h-48 overflow-hidden bg-slate-100 relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col grow">
        <h3 className="font-bold text-lg text-slate-900 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-3 grow">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-medium transition-colors ${
            project.repoType === "Private Repo"
              ? "bg-slate-900 text-white hover:bg-slate-800"
              : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
          }`}
        >
          {project.repoType === "Private Repo" ? (
            <Lock size={16} />
          ) : (
            <Github size={16} />
          )}
          {project.repoType}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
