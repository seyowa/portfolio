import React, { useState } from 'react';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // get the current path/location

  const isActive = path => (location.pathname === path ? 'text-blue-600' : 'text-gray-700');

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/')}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/about')}`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/projects')}`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/contact')}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              to="/"
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${isActive('/about')}`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${isActive('/projects')}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
