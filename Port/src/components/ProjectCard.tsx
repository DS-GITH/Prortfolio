import type { Project } from '../data/dataprojects';
import '../App.css'

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
          View Project →
        </button>
      </div>
    </div>
  );
}