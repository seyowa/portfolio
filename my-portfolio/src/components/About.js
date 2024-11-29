import React from 'react';
import { replacePlaceholders } from '../utils/replacePlaceholders';

const About = ({data}) => {
  return (
    <section id='about' className='my-10'>
        <h2 className='text-3xl font-bold'>{replacePlaceholders(data.about?.title)}</h2>
        <p className='text-lg mt-2'>{replacePlaceholders(data.about?.bio)}</p>
    </section>
  );
};

export default About;
