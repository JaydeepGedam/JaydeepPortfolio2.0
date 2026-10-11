import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, Code, Heart, Target, Lightbulb, Building2, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo, education, internships, workExperience, experiences } from '../mock/portfolioData';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  const allExperiences = experiences && experiences.length > 0 ? experiences : [...workExperience, ...internships];
  const currentExp = allExperiences[experienceIndex] || allExperiences[0];

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
            Systems Engineer in AI.cloud, patent holder, and builder dedicated to crafting high-impact intelligent software solutions.
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
                    <img 
                      src="/profile-image.png" 
                      alt="Jaydeep Nitin Gedam" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Jaydeep Nitin Gedam
                  </h3>
                  <p className="text-green-400 font-medium mb-4">
                    Systems Engineer (AI.cloud) & Patent Holder
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {personalInfo.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">8.66</div>
                      <div className="text-sm text-gray-400">CGPA (B.Tech IT)</div>
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
                          My journey in technology began with an insatiable curiosity about how intelligent systems interact with real human lives. During my engineering years at Government College of Engineering, Amravati, I discovered my core purpose: building deeply impactful, human-centered technology that bridges complex algorithms with intuitive user experiences.
                        </p>
                        <p>
                          The foundational breakthrough was <strong className="text-green-400">Nayaan</strong> — an assistive smart device for visually impaired individuals. Engaging directly with 50+ blind students and faculty members taught me that world-class engineering starts with empathy and inclusive design. That work earned a published patent, a research publication in the Springer Journal, and top honors at national innovation forums.
                        </p>
                        <p>
                          Today, I work as a <strong className="text-yellow-400">Systems Engineer in the AI.cloud unit at Tata Consultancy Services (TCS)</strong>, contributing to GenAI applications and frontend engineering. On the <em>GenAI Test Studio</em> platform, I develop React-based interfaces, integrate frontend components with Python/FastAPI services and Azure AD authentication, and explore test automation workflows.
                        </p>
                        <p>
                          Beyond enterprise systems, I continuously build at the cutting edge of AI — from engineering <strong className="text-green-400">EpisodicAI</strong>, a cognitive memory infrastructure platform with multi-factor ranked retrieval for autonomous agents, to <strong className="text-green-400">VibeCraft</strong>, an intelligent content suite with automated social publishing. I believe the future belongs to engineers who can connect robust cloud backends with beautiful, seamless interfaces.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
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
                <div className="space-y-4">
                  {/* Carousel Header & Quick Selector Tabs */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800">
                    {/* Company Pill Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                      {allExperiences.map((exp, index) => {
                        const isActive = index === experienceIndex;
                        return (
                          <button
                            key={exp.id || index}
                            onClick={() => setExperienceIndex(index)}
                            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs transition-all duration-300 whitespace-nowrap ${
                              isActive
                                ? 'bg-gradient-to-r from-green-400 to-yellow-400 text-black font-bold shadow-md shadow-green-400/20'
                                : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80 border border-gray-700/60'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : exp.type === 'Full-Time' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                            <span>{exp.shortName || exp.company}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Navigation Buttons & Counter */}
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <span className="text-gray-400 text-xs font-mono">
                        0{experienceIndex + 1} / 0{allExperiences.length}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setExperienceIndex((prev) => (prev > 0 ? prev - 1 : allExperiences.length - 1))}
                          className="p-1.5 rounded-lg bg-gray-800/90 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-700 hover:border-green-400/50 transition-all cursor-pointer"
                          aria-label="Previous experience"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setExperienceIndex((prev) => (prev < allExperiences.length - 1 ? prev + 1 : 0))}
                          className="p-1.5 rounded-lg bg-gray-800/90 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-700 hover:border-green-400/50 transition-all cursor-pointer"
                          aria-label="Next experience"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Active Experience Card */}
                  <div className="relative">
                    <Card
                      key={currentExp.id || experienceIndex}
                      className="bg-gray-900/70 border-green-400/40 hover:border-green-400/70 transition-all duration-300 shadow-xl ring-1 ring-green-400/20"
                    >
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            {/* Role Title & Badges */}
                            <div className="flex flex-wrap items-center gap-2.5 mb-2">
                              <h3 className="text-xl md:text-2xl font-bold text-white">
                                {currentExp.title}
                              </h3>
                              {currentExp.periodBadge && (
                                <Badge className="bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold text-xs">
                                  {currentExp.periodBadge}
                                </Badge>
                              )}
                              <Badge variant="outline" className={`text-xs ${currentExp.type === 'Full-Time' ? 'border-green-400 text-green-400' : 'border-yellow-400 text-yellow-400'}`}>
                                {currentExp.type}
                              </Badge>
                            </div>

                            {/* Company & Details */}
                            <div className="flex flex-wrap items-center gap-2 text-green-400 font-medium text-sm mb-3">
                              <span className="font-semibold text-white/95">{currentExp.company}</span>
                              {currentExp.unit && (
                                <>
                                  <span className="text-gray-500">•</span>
                                  <span className="text-yellow-400 font-semibold">{currentExp.unit}</span>
                                </>
                              )}
                              {currentExp.project && (
                                <>
                                  <span className="text-gray-500">•</span>
                                  <span className="text-gray-300 font-mono text-xs bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
                                    Project: {currentExp.project}
                                  </span>
                                </>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-sm mb-4">
                              {currentExp.description}
                            </p>

                            {/* Highlights */}
                            {currentExp.highlights && currentExp.highlights.length > 0 && (
                              <div className="mb-4">
                                <h5 className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  Key Contributions:
                                </h5>
                                <ul className="text-gray-300 space-y-1.5 text-xs sm:text-sm pl-1">
                                  {currentExp.highlights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                                      <span className="leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Skills Badges */}
                            {currentExp.skills && (
                              <div className="flex flex-wrap gap-1.5 pt-2">
                                {currentExp.skills.map((skill, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300 border border-gray-700 text-xs hover:border-green-400/50 hover:text-white transition-colors">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Right duration badge & certificate */}
                          <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2 flex-shrink-0">
                            <Badge variant="outline" className="border-green-400/70 text-green-400 font-mono text-xs">
                              {currentExp.duration}
                            </Badge>
                            {currentExp.certificate && currentExp.certificateUrl && (
                              <a
                                href={currentExp.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline inline-block mt-1"
                              >
                                <Badge
                                  variant="secondary"
                                  className="cursor-pointer bg-green-400 text-black hover:bg-green-500 font-medium text-xs transition-colors flex items-center gap-1"
                                >
                                  <span>Certificate</span>
                                  <ExternalLink className="w-3 h-3" />
                                </Badge>
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Bottom Pagination Dots */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    {allExperiences.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setExperienceIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === experienceIndex
                            ? 'w-8 bg-gradient-to-r from-green-400 to-yellow-400 shadow-sm shadow-green-400/30'
                            : 'w-2 bg-gray-700 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
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
