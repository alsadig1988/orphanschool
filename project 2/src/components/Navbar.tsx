import React, { useState, useEffect } from 'react';
import { Menu, X, School } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue bg-opacity-20">
              <School className="h-8 w-8 text-brand-blue" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Brightwood Academy
              </span>
              <span className={`text-sm ${scrolled ? 'text-gray-600' : 'text-white text-opacity-80'}`}>
                Empowering Future Leaders
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About Us', 'Programs', 'Events', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className={`${
                  scrolled ? 'text-gray-600 hover:text-brand-blue' : 'text-white hover:text-brand-yellow'
                } transition duration-300`}
              >
                {item}
              </a>
            ))}
            <button className="btn-secondary">
              Donate Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-gray-600' : 'text-white'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {['Home', 'About Us', 'Programs', 'Events', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="block px-3 py-2 text-gray-600 hover:text-brand-blue hover:bg-gray-50 rounded-lg transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full btn-secondary">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;