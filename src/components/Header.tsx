
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-400 ease-apple ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <a href="#" className="text-careblue-700 font-bold text-xl md:text-2xl">
              CareBridge<span className="text-careblue-500">Africa</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#benefits" className="text-caregray-700 hover:text-careblue-600 transition-colors duration-300">Warum Simbabwe?</a>
            <a href="#services" className="text-caregray-700 hover:text-careblue-600 transition-colors duration-300">Services</a>
            <a href="#process" className="text-caregray-700 hover:text-careblue-600 transition-colors duration-300">Prozess</a>
            <a href="#about" className="text-caregray-700 hover:text-careblue-600 transition-colors duration-300">Über uns</a>
            <a href="#contact" className="cta-button-secondary">
              Jetzt Personal anfragen
            </a>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-md text-caregray-600 hover:text-careblue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-caregray-100 shadow-md">
          <div className="px-4 py-2 space-y-1">
            <a 
              href="#benefits" 
              className="block px-3 py-4 text-base font-medium text-caregray-700 hover:text-careblue-500 border-b border-caregray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Warum Simbabwe?
            </a>
            <a 
              href="#services" 
              className="block px-3 py-4 text-base font-medium text-caregray-700 hover:text-careblue-500 border-b border-caregray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#process" 
              className="block px-3 py-4 text-base font-medium text-caregray-700 hover:text-careblue-500 border-b border-caregray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Prozess
            </a>
            <a 
              href="#about" 
              className="block px-3 py-4 text-base font-medium text-caregray-700 hover:text-careblue-500 border-b border-caregray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </a>
            <div className="py-4">
              <a 
                href="#contact" 
                className="block w-full text-center cta-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Jetzt Personal anfragen
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
