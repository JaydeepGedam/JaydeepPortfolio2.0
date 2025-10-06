import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Award, Calendar, Code, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { projects } from '../mock/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'live': return 'bg-green-500';
      case 'completed': return 'bg-blue-500';
      case 'in progress': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/Hardware': return <Zap className="w-4 h-4" />;
      case 'Web Development': return <Code className="w-4 h-4" />;
      case 'Full Stack': return <Users className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl" />
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
              PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From patent-winning innovations to full-stack solutions, here are the projects that showcase my passion for creating impactful technology.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <Card className={`bg-black/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 group ${
                project.featured ? 'ring-2 ring-green-400/30' : ''
              }`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-green-400 text-green-400">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={`${getStatusColor(project.status)} text-white`}>
                        {project.status}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-green-400 text-black">
                          <Award className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-white mb-2">
                    {project.title}
                  </CardTitle>
                    
                    <CardDescription className="text-green-400 font-medium mb-4">
                      {project.subtitle}
                    </CardDescription>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {project.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="bg-gradient-to-r from-green-400 to-yellow-400 text-black hover:from-green-500 hover:to-yellow-500 transition-all duration-300"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                      
                      {project.status === 'Live' && (
                        <Button
                          variant="outline"
                          className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                          onClick={() => window.open('https://nayaan.vercel.app/', '_blank')}
                        >
                          Live Demo
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Project detail modal would go here */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">All Achievements:</h4>
                    <ul className="text-gray-300 space-y-2">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
