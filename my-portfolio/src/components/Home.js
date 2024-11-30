import React from 'react';
import { replacePlaceholders } from '../utils/replacePlaceholders';

const Home = ({data}) => {
  return (
    <section id='home' className='my-10' >
      <div className='text-xl'>{replacePlaceholders(data.home?.greetings)}</div>
      <div>
        {data.home?.items?.map((h, index) => (
          <div key={index}>
            <p className='text-4xl font-semibold mt-2'>{h.occupation}</p>
            <p className='text-xl'>{h.headline}<br/>
            {h.headlineContinues}</p>

          </div>
        ))}
      </div>

     </section>
  );
};

export default Home;
