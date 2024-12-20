import React from 'react';



const Logo = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <a 
      href="/" onClick={scrollToTop}
      className="flex items-center"
    >
      <span className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
        SO
      </span>
    </a>
  );
};

export default Logo;