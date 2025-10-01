import React, { useState, useRef, useEffect } from 'react';
import { Award, Trophy, Medal, Star, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { achievements } from '../mock/portfolioData';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
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

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'patent': return <Award className="w-6 h-6" />;
      case 'publication': return <Star className="w-6 h-6" />;
      case 'competition': return <Trophy className="w-6 h-6" />;
      case 'exhibition': return <Medal className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'patent': return 'from-yellow-400 to-orange-400';
      case 'publication': return 'from-blue-400 to-purple-400';
      case 'competition': return 'from-green-400 to-emerald-400';
      case 'exhibition': return 'from-pink-400 to-rose-400';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getBorderColor = (type) => {
    switch (type.toLowerCase()) {
      case 'patent': return 'border-yellow-400/50';
      case 'publication': return 'border-blue-400/50';
      case 'competition': return 'border-green-400/50';
      case 'exhibition': return 'border-pink-400/50';
      default: return 'border-gray-400/50';
    }
  };

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-56 h-56 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-16 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute top-64 right-32 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
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
              ACHIEVEMENTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and milestones that reflect my commitment to innovation, excellence, and meaningful impact in technology.
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <Card className={`bg-gray-900/50 ${getBorderColor(achievement.type)} border hover:border-opacity-100 transition-all duration-300 h-full group cursor-pointer`}
                onClick={() => setSelectedAchievement(achievement)}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Achievement icon and type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getTypeColor(achievement.type)} text-black`}>
                      {getTypeIcon(achievement.type)}
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant="outline" 
                        className={`${getBorderColor(achievement.type).replace('border-', 'border-').replace('/50', '')} text-xs`}
                      >
                        {achievement.type}
                      </Badge>
                      <div className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>

                  {/* Achievement content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>

                  {/* View details button */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="w-full text-green-400 hover:text-black hover:bg-green-400 transition-all duration-300"
                    >
                      View Details
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div 
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Card className="bg-gradient-to-r from-gray-900/80 to-black/80 border-green-400/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
                  <div className="text-gray-300 text-sm">Patent Published</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                  <div className="text-gray-300 text-sm">Research Paper</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                  <div className="text-gray-300 text-sm">Competition Wins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">1</div>
                  <div className="text-gray-300 text-sm">Exhibition Selection</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured achievement */}
        <div 
          className={`mt-16 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Card className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-yellow-400/30">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-yellow-400 to-green-400 rounded-xl text-black">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">
                    🏆 Featured Achievement: Nayaan Patent
                  </CardTitle>
                  <p className="text-gray-300 mt-1">
                    Application No: 202321065172 | Published 2023
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed mb-6">
                The patent for Nayaan represents more than just intellectual property - it's a testament to the power of inclusive innovation. 
                This smart assistive device for visually impaired individuals combines cutting-edge AI with deep user research, 
                demonstrating how technology can create meaningful impact in people's lives.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-yellow-400 text-black">
                  Patent Holder
                </Badge>
                <Badge className="bg-blue-400 text-black">
                  Springer Publication
                </Badge>
                <Badge className="bg-green-400 text-black">
                  BharatCon24 Runner-up
                </Badge>
                <Badge className="bg-purple-400 text-black">
                  CIIA-3 Top 100
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievement detail modal */}
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="bg-gray-900 border-gray-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <CardHeader className="border-b border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getTypeColor(selectedAchievement.type)} text-black`}>
                      {getTypeIcon(selectedAchievement.type)}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">
                        {selectedAchievement.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="outline" className={getBorderColor(selectedAchievement.type)}>
                          {selectedAchievement.type}
                        </Badge>
                        <span className="text-gray-400 text-sm flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {selectedAchievement.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="text-gray-400 hover:text-white transition-colors text-xl"
                  >
                    ×
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  {selectedAchievement.description}
                </p>
                
                {selectedAchievement.type === 'Patent' && (
                  <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                    <h4 className="text-yellow-400 font-semibold mb-2">Patent Details</h4>
                    <p className="text-gray-300 text-sm">
                      This patent represents innovative work in assistive technology, combining AI, OCR, and NLP 
                      to create solutions that truly impact the lives of visually impaired individuals.
                    </p>
                  </div>
                )}
                
                {selectedAchievement.type === 'Competition' && (
                  <div className="mt-6 p-4 bg-green-400/10 border border-green-400/30 rounded-lg">
                    <h4 className="text-green-400 font-semibold mb-2">Competition Highlights</h4>
                    <p className="text-gray-300 text-sm">
                      Recognition at national-level competitions validates the innovation and practical impact 
                      of the developed solutions in real-world scenarios.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
