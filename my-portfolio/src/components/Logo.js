import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  return (
    <Link to="/" onClick={scrollToTop} className="flex items-center">
      <span className="text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-teal-400">
        SO
      </span>
    </Link>
  );
};

export default Logo;
