import React from 'react';
import { replacePlaceholders  } from '../utils/replacePlaceholders';

const Projects = ({data}) => (
  <section id='projects' className='my-10'>

    <h2 className='text-3xl font-bold'>{replacePlaceholders(data.projects?.title)}</h2>
    <p className='text-lg mt-2'>{replacePlaceholders('[Detailed descriptions of your projects go here]')}</p>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
      {data.projects?.items?.map((project, index) => (

        <div key={index}
          className=''>
            <h3 className='text-2xl font-bold'>{project.name}</h3>
            <p className='text-lg mt-2'>{project.description}</p>

            <div className='mt-4'>
              <a
                href='{project.github}'
                className='text-blue-500 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
              {' | '}
              <a
                href='{project.demo}'
                className='text-blue-500 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a>

            </div>

            
          
        </div>
      ))}

    </div>
  </section>
);

export default Projects;
