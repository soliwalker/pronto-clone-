import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-primary tracking-tight">ProntoPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Register as a Professional
            </a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Help
            </a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors flex items-center gap-2">
              <User size={18} />
              Login
            </a>
            <button className="bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-sm">
              Get Quotes
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Register as a Professional
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Help
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Login
            </a>
            <div className="px-3 py-2">
              <button className="w-full bg-primary text-white px-5 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors">
                Get Quotes
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;