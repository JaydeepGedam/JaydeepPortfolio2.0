import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, Palette, Wrench, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { skills } from '../mock/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef();

  const categories = [
    { id: 'technical', label: 'Technical Skills', icon: Code },
    { id: 'tools', label: 'Tools & Software', icon: Tool }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          const currentSkills = skills[activeCategory];
          const newAnimatedValues = {};
          
          currentSkills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedValues(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory]);

  // Re-animate when category changes
  useEffect(() => {
    if (isVisible) {
      setAnimatedValues({});
      const currentSkills = skills[activeCategory];
      
      currentSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 100);
      });
    }
  }, [activeCategory, isVisible]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Frontend': return 'text-blue-400';
      case 'Programming': return 'text-green-400';
      case 'Tools': return 'text-yellow-400';
      case 'Design': return 'text-purple-400';
      case 'Development': return 'text-red-400';
      case 'Version Control': return 'text-orange-400';
      case 'Media': return 'text-pink-400';
      default: return 'text-gray-400';
    }
  };

  const getSkillIcon = (category) => {
    switch (category) {
      case 'Frontend': return <Code className="w-4 h-4" />;
      case 'Programming': return <Database className="w-4 h-4" />;
      case 'Design': return <Palette className="w-4 h-4" />;
      default: return <Tool className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">MY </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              SKILLS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience in frontend development, AI integration, and innovative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category navigation */}
          <div 
            className={`lg:col-span-1 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-300 text-left ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-green-400 to-yellow-400 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{category.label}</span>
                  </button>
                );
              })}
              
              {/* Soft skills card */}
              <Card className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skills.soft.map((skill, index) => (
                      <div key={skill} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills content */}
          <div 
            className={`lg:col-span-3 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {skills[activeCategory].map((skill, index) => (
                <Card 
                  key={skill.name} 
                  className={`bg-black/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gray-800 ${getCategoryColor(skill.category)}`}>
                          {getSkillIcon(skill.category)}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{skill.name}</h3>
                          <Badge 
                            variant="secondary" 
                            className={`mt-1 text-xs ${getCategoryColor(skill.category)} bg-gray-800`}
                          >
                            {skill.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-400">
                          {animatedValues[skill.name] || 0}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Proficiency</span>
                        <span className="text-gray-300">
                          {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                        </span>
                      </div>
                      <Progress 
                        value={animatedValues[skill.name] || 0}
                        className="h-2 bg-gray-800"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills summary */}
        <div 
          className={`mt-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Card className="bg-gradient-to-r from-gray-900/80 to-black/80 border-green-400/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {skills.technical.length + skills.tools.length}
                  </div>
                  <div className="text-gray-300">Technical Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {skills.soft.length}
                  </div>
                  <div className="text-gray-300">Soft Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    3+
                  </div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
