import React from 'react';
import SectionTitle from '../component/sectionTitle';
import ProjectCard from '../component/ProjectCard';
import { projects } from '../utils/static';

const Projects = () => {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
      className="bg-gradient-to-b from-gray-100 to-gray-200 py-12"
    >
      <div className="container mx-auto px-4">
        <SectionTitle title={"Projects"} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
