import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#projects"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="#home"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
