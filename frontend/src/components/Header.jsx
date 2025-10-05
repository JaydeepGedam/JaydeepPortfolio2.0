import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-green-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-2xl font-bold">
              <span className="text-white">JAYDEEP</span>
              <span className="text-green-400">GEDAM</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-green-400 transition-all duration-300 hover:-translate-y-0.5 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
              onClick={() => window.open('https://customer-assets.emergentagent.com/job_6e932482-3580-4767-b9db-223a26b22545/artifacts/tage9lwz_Resume_JaydeepGedam%28latest%29.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-green-500/20">
            <nav className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-green-400 transition-colors text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <Button
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black w-full"
                  onClick={() => window.open('https://customer-assets.emergentagent.com/job_6e932482-3580-4767-b9db-223a26b22545/artifacts/tage9lwz_Resume_JaydeepGedam%28latest%29.pdf', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
