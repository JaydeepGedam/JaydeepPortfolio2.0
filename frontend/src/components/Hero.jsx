import React, { useEffect, useState } from 'react';
import { ArrowRight, Briefcase, Target, Rocket, MessageCircle, Code, Laptop } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock/portfolioData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    '< Frontend Developer />',
    '< Prompt Engineer />',
    '< AI Engineer />'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Title carousel effect
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(titleInterval);
    };
  }, [titles.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating icons data
  const floatingIcons = [
    { icon: Laptop, size: 24, className: "top-20 left-10 text-blue-400" },
    { icon: Code, size: 20, className: "top-32 right-20 text-purple-400" },
    { icon: Target, size: 22, className: "top-64 left-20 text-red-400" },
    { icon: MessageCircle, size: 18, className: "bottom-40 right-16 text-pink-400" },
    { icon: Briefcase, size: 26, className: "bottom-32 left-16 text-orange-400" },
  ];

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;
          const moveX = (mousePosition.x - window.innerWidth / 2) * 0.01;
          const moveY = (mousePosition.y - window.innerHeight / 2) * 0.01;
          
          return (
            <div
              key={index}
              className={`absolute ${item.className} opacity-30 transition-transform duration-700 ease-out`}
              style={{
                transform: `translate(${moveX * (index + 1)}px, ${moveY * (index + 1)}px)`
              }}
            >
              <Icon size={item.size} className="animate-pulse" />
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Main heading */}
          <div 
            className={`mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              <span className="text-white block">{personalInfo.name}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 block">
                {personalInfo.lastName}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            className={`mb-6 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-white font-mono tracking-wide transition-all duration-500">
              {titles[currentTitleIndex]}
            </p>
          </div>

          {/* Tagline */}
          <div 
            className={`mb-12 transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.tagline} <Rocket className="inline w-5 h-5 ml-2 text-red-400" />
            </p>
          </div>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-400 to-yellow-400 text-black hover:from-green-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-base px-8 py-3 rounded-full font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              VIEW MY WORK
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-base px-8 py-3 rounded-full font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              LET'S CONNECT
              <MessageCircle className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Scroll indicator - moved below buttons */}
          <div 
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};

export default Hero;
