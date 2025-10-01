import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, Code, Heart, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo, education, internships } from '../mock/portfolioData';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First",
      description: "I believe in creating solutions that don't just work, but make a real difference in people's lives."
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is not just a practice, it's a passion."
    },
    {
      icon: Heart,
      title: "Accessibility Focus",
      description: "Technology should be inclusive. My patent project Nayaan embodies this core belief."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "In the ever-evolving tech landscape, I stay curious and keep pushing boundaries."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">ABOUT </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              ME
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate frontend developer with a mission to create accessible and innovative technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left column - Photo and quick intro */}
          <div 
            className={`lg:col-span-1 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="sticky top-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-yellow-400 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">JG</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Jaydeep Nitin Gedam
                  </h3>
                  <p className="text-green-400 font-medium mb-4">
                    Frontend Developer & Patent Holder
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {personalInfo.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">8.66</div>
                      <div className="text-sm text-gray-400">CGPA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right column - Detailed content */}
          <div 
            className={`lg:col-span-2 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-green-400 to-yellow-400 text-black'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="mb-12">
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <Card className="bg-gray-900/50 border-gray-700">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                      <div className="text-gray-300 space-y-4 leading-relaxed">
                        <p>
                          My journey in technology began with a simple curiosity about how things work. During my time at Government College of Engineering, Amravati, I discovered my passion for creating solutions that make technology more accessible to everyone.
                        </p>
                        <p>
                          The turning point came when I started working on <strong className="text-green-400">Nayaan</strong> - a smart device for visually impaired individuals. This project wasn't just about coding; it was about understanding real human needs and creating technology that truly matters. The research involved talking to 50+ visually impaired students and faculties, which opened my eyes to the power of inclusive design.
                        </p>
                        <p>
                          Today, holding a patent for Nayaan and having published research in Springer Journal, I continue to believe that the best technology is the one that serves humanity. My focus on frontend development stems from the understanding that the user interface is where technology meets people - and that intersection needs to be perfect.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Values */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {values.map((value, index) => {
                      const Icon = value.icon;
                      return (
                        <Card key={index} className="bg-gray-900/30 border-gray-700 hover:border-green-400/50 transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-3 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg">
                                <Icon className="w-6 h-6 text-black" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-green-400/30 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-green-400 font-medium">{edu.institution}</p>
                            <p className="text-gray-400 text-sm">{edu.location}</p>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <Badge className="bg-gradient-to-r from-green-400 to-yellow-400 text-black mb-2">
                              {edu.grade}
                            </Badge>
                            <p className="text-gray-400 text-sm">{edu.duration}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {internships.map((exp, index) => (
                    <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-green-400/30 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-green-400 font-medium mb-2">{exp.company}</p>
                            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start md:items-end">
                            <Badge variant="outline" className="border-green-400 text-green-400 mb-2">
                              {exp.duration}
                            </Badge>
                            {exp.certificate && (
                              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                                Certificate Available
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
