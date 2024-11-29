import React from 'react';
import { replacePlaceholders } from '../utils/replacePlaceholders';

const Home = ({data}) => {
  return (
    <section id='home' className='my-10' >
      <div mt-2>
        <p className='text-xl'>{replacePlaceholders(data.home?.greetings)}</p>
          <p className='text-4xl font-semibold mt-2'>{replacePlaceholders(data.home?.intro.job)}</p>
          <p className='text-xl'>{replacePlaceholders(data.home?.intro.headline)}</p>
          <p className='text-xl'>{replacePlaceholders(data.home?.intro.moreheadline)}</p>


      </div>
{/*          */}
    </section>
  );
};

export default Home;
