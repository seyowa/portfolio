import React from 'react';
import Card from './card';
import content from '../content.json';

const Projects = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          My Projects
        </h1>
        <p className="mb-8 text-center text-lg subpixel-antialiased text-gray-600">
            Here are some of the projects I've worked on. Each demonstrates different skills and technologies I've mastered.
        </p>
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content?.projects?.map(project => (
            <Card
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.techStack}
              repoUrl={project.githubUrl}
              demoUrl={project.liveDemoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
