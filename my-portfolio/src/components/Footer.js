import React from 'react';
import { replacePlaceholders } from '../utils/replacePlaceholders';

const Footer = ({data}) => {
  return (
    <footer className='footer'>
      <div className='container mx-auto text-center'>
        {replacePlaceholders(data.footer?.text)}
      </div>
    </footer>
  );
};

export default Footer;
