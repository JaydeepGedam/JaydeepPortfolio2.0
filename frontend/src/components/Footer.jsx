import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart, ArrowUp, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { personalInfo } from '../mock/portfolioData';

const Footer = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    '< Frontend Developer />',
    '< Prompt Engineer />',
    '< AI Engineer />'
  ];
  
  const descriptions = {
    0: 'Passionate frontend developer with expertise in React, Next.js, and modern web technologies. Creating responsive and user-friendly interfaces.',
    1: 'Expert in crafting effective prompts for AI systems and optimizing LLM interactions. Bridging human intent with AI capabilities.',
    2: 'Specialized in developing AI-powered solutions and machine learning applications. Building intelligent systems that solve real-world problems.'
  };
  
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(titleInterval);
  }, [titles.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: `https://linkedin.com/in/${personalInfo.contact.linkedin}`,
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub', 
      href: `https://github.com/${personalInfo.contact.github}`,
      color: 'hover:text-white'
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personalInfo.contact.email}`,
      color: 'hover:text-green-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: `tel:${personalInfo.contact.phone}`,
      color: 'hover:text-yellow-400'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-white">JAYDEEP</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"> GEDAM</span>
              </h3>
              <p className="text-green-400 text-lg mb-4 font-mono transition-all duration-500">
                {titles[currentTitleIndex]}
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 transition-all duration-500">
                {descriptions[currentTitleIndex]}
              </p>
              
              {/* Key highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black">
                  🏆 Patent Holder
                </Badge>
                <Badge className="bg-green-400 text-black hover:bg-green-500 hover:text-black">
                  🎆 Innovation Award Winner
                </Badge>
                <Badge className="bg-blue-400 text-black hover:bg-blue-500 hover:text-black">
                  📚 Published Researcher
                </Badge>
              </div>


            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-green-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-green-400" />
                <a 
                  href={`mailto:${personalInfo.contact.email}`}
                  className="hover:text-green-400 transition-colors text-sm"
                >
                  {personalInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a 
                  href={`tel:${personalInfo.contact.phone}`}
                  className="hover:text-yellow-400 transition-colors text-sm"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-sm">{personalInfo.contact.location}</span>
              </div>
            </div>


          </div>
        </div>

        {/* Social links and bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social media */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Follow me:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors transform hover:scale-110 duration-300`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Copyright and scroll to top */}
            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Made with <Heart className="inline w-4 h-4 text-red-400 mx-1" /> by Jaydeep Gedam
              </p>
              <Button
                onClick={scrollToTop}
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300 group"
              >
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </Button>
            </div>
          </div>
        </div>


      </div>

      {/* Scroll to top button - fixed position */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 p-3 bg-gradient-to-r from-green-400 to-yellow-400 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
