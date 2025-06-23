import { useState } from 'react';
import { projects, type ProjectType } from '../data/dataprojects';
import ProjectCard from './ProjectCard';
import '../App.css'

const tabs: { label: string; type: ProjectType }[] = [
  { label: 'All', type: 'all' },
  { label: 'Works', type: 'works' },
  { label: 'Personal', type: 'personal' },
  { label: 'Others', type: 'others' },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectType>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        
        {/* TABS */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map(tab => (
            <button
              key={tab.type}
              onClick={() => setActiveTab(tab.type)}
              className={`px-4 py-2 rounded-full font-medium transition-all
                ${activeTab === tab.type 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PROJETOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}