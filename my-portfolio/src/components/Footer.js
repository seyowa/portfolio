import React from 'react';
import content from '../content.json';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {content.user?.name}. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/seyowa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://linkedin.com/in/seyeomowa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size="1.5em" />
            </a>
            <a href="mailto:seye@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaEnvelope size="1.5em" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;